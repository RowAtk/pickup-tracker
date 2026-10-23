#!/usr/bin/env python3
"""Best-effort Jacars image importer; only saves images from their exact listing page.
Runs on GitHub Actions; no user-side script execution is required.
"""
import json, re, time, urllib.request, urllib.parse, imghdr
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/lib/data/vehicles.ts"
OUT = ROOT / "static/vehicles"
MANIFEST = ROOT / "src/lib/data/vehicle-images.ts"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; PickupTracker/1.0; personal listing archive)", "Accept": "text/html,application/xhtml+xml,image/avif,image/webp,image/*;q=0.8,*/*;q=0.5"}

class Images(HTMLParser):
    def __init__(self):
        super().__init__()
        self.candidates = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "meta" and a.get("property") in ("og:image", "og:image:secure_url", "twitter:image"):
            self.candidates.append(a.get("content", ""))
        if tag in ("img", "source"):
            for key in ("data-src", "data-lazy-src", "src", "srcset", "data-srcset"):
                val = a.get(key, "")
                if val:
                    self.candidates.append(val.split(",")[0].strip().split(" ")[0])

def fetch(url, limit=12_000_000):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=25) as response:
        body = response.read(limit + 1)
        if len(body) > limit:
            raise ValueError("response too large")
        return body, response.headers.get("Content-Type", ""), response.geturl()

def candidates_from_html(html, base):
    p = Images()
    p.feed(html)
    # Also capture absolute image URLs embedded in JSON/script data.
    raw = re.findall(r'https?(?:\\/\\/|://)[^"\'<>\\s]+?\\.(?:jpe?g|png|webp)(?:\\?[^"\'<>\\s]*)?', html, re.I)
    for url in raw:
        p.candidates.append(url.replace("\\/", "/"))
    seen = set()
    result = []
    for candidate in p.candidates:
        url = urllib.parse.urljoin(base, candidate.replace("&amp;", "&"))
        parsed = urllib.parse.urlparse(url)
        if parsed.scheme not in ("http", "https") or not parsed.hostname:
            continue
        if url in seen:
            continue
        seen.add(url)
        result.append(url)
    return result

def eligible(url):
    host = (urllib.parse.urlparse(url).hostname or "").lower()
    # Avoid logos, analytics, tracking pixels, and third-party advertisements.
    return ("jacars" in host or "cloudfront" in host or "amazonaws" in host) and not any(x in url.lower() for x in ("logo", "avatar", "favicon", "icon", "banner", "pixel", "sprite"))

def import_one(vid, url):
    print(f"Checking {vid}: {url}", flush=True)
    try:
        body, mime, final_url = fetch(url, 4_000_000)
        html = body.decode("utf-8", "replace")
        urls = [u for u in candidates_from_html(html, final_url) if eligible(u)]
        print(f"  Found {len(urls)} possible listing images", flush=True)
        for image_url in urls[:30]:
            try:
                data, content_type, _ = fetch(image_url, 8_000_000)
                kind = imghdr.what(None, data)
                if kind not in ("jpeg", "png", "webp") or len(data) < 12000:
                    continue
                ext = "jpg" if kind == "jpeg" else kind
                directory = OUT / vid
                directory.mkdir(parents=True, exist_ok=True)
                file = directory / ("cover." + ext)
                file.write_bytes(data)
                print(f"  Saved {file.relative_to(ROOT)} ({len(data)} bytes)", flush=True)
                return "/" + str(file.relative_to(ROOT / "static")).replace("\\", "/")
            except Exception as ex:
                print(f"  Image attempt failed: {type(ex).__name__}: {ex}", flush=True)
        print("  No usable verified image found", flush=True)
    except Exception as ex:
        print(f"  Listing fetch failed: {type(ex).__name__}: {ex}", flush=True)
    return None

def main():
    source = DATA.read_text()
    records = re.findall(r"\{\s*id:\s*['\"]([^'\"]+)['\"][^{}]*?listingUrl:\s*['\"](https?[^'\"]+)['\"]", source, re.S)
    print(f"Found {len(records)} vehicles with URLs", flush=True)
    existing = {}
    if MANIFEST.exists():
        for vid, path in re.findall(r"""['"]([^'"]+)['"]:\s*\{\s*cover:\s*['"]([^'"]+)['"]""", MANIFEST.read_text()):
            if (ROOT / "static" / path.lstrip("/")).exists():
                existing[vid] = path
    # Two ranked vehicles were verified as the same advert as legacy watchlist records.
    # Reuse the already cached photographs rather than fetching unrelated images.
    for ranked_id, old_id in {
        "l200-2022": "l200-2022-other",
        "frontier-midnight-2019": "frontier-2019-other",
    }.items():
        if ranked_id not in existing and old_id in existing:
            existing[ranked_id] = existing[old_id]
    for vid, url in records:
        host = (urllib.parse.urlparse(url).hostname or "").lower()
        if host not in ("jacars.net", "www.jacars.net"):
            print(f"Skipping non-Jacars source for {vid}: {url}", flush=True)
            continue
        if vid in existing:
            continue
        path = import_one(vid, url)
        if path:
            existing[vid] = path
        time.sleep(1)
    lines = [
        "// Auto-generated by scripts/import_jacars_images.py. Do not manually edit.",
        "export const vehicleImages: Record<string, { cover: string; gallery?: string[]; credit?: string }> = {"
    ]
    for vid, path in sorted(existing.items()):
        lines.append(f"  {json.dumps(vid)}: {{ cover: {json.dumps(path)}, credit: 'Original listing photograph' }},")
    lines.append("};")
    MANIFEST.write_text("\n".join(lines) + "\n")
    print(f"Manifest now contains {len(existing)} images", flush=True)

if __name__ == "__main__":
    main()
