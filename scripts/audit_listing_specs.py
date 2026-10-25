#!/usr/bin/env python3
"""Read-only, evidence-based inspection of missing specs on individual Jacars ads."""
import json
import re
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/lib/data/vehicles.ts"
OUT = ROOT / "reports"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; PickupTracker/1.0)", "Accept": "text/html"}
FIELDS = {"Gearbox": "transmission", "Drivetrain": "drivetrain", "Mileage": "mileageKm"}

class Text(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []
    def handle_data(self, data):
        value = " ".join(data.split())
        if value:
            self.parts.append(value)

def parse_records(source):
    result = []
    for line in source.splitlines():
        if "priceJmd:" not in line or "id:" not in line:
            continue
        def value(field):
            m = re.search(r"\b" + field + r":\s*\x27([^\x27]+)\x27", line)
            return m.group(1) if m else None
        vid = value("id")
        if not vid:
            continue
        missing = [field for field in ("mileageKm", "drivetrain", "transmission") if not re.search(r"\b" + field + r":", line)]
        if not missing:
            continue
        rank = re.search(r"\brank:\s*(\d+)", line)
        result.append({"id": vid, "rank": int(rank.group(1)) if rank else None,
                       "url": value("listingUrl"), "missing": missing})
    return sorted(result, key=lambda x: (x["rank"] is None, x["rank"] or 999, x["id"]))

def inspect(item):
    url = item["url"]
    result = dict(item, status="not_checked", candidates={})
    if not url or not re.match(r"^https://(?:www\.)?jacars\.net/adv/", url):
        result["status"] = "no_supported_individual_ad"
        return result
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=22) as response:
            body = response.read(2_000_000)
        parser = Text()
        parser.feed(body.decode("utf-8", "replace"))
        parts = parser.parts
        result["status"] = "fetched"
        for label, field in FIELDS.items():
            if field not in item["missing"]:
                continue
            values = []
            for i, part in enumerate(parts[:-1]):
                if part.rstrip(":").lower() == label.lower():
                    candidate = parts[i + 1].strip()
                    if candidate and len(candidate) < 90 and candidate not in values:
                        values.append(candidate)
            if len(values) == 1:
                result["candidates"][field] = {"value": values[0], "evidence": "individual_ad_text"}
            elif len(values) > 1:
                result["candidates"][field] = {"ambiguous_values": values}
    except (urllib.error.URLError, TimeoutError, ValueError) as exc:
        result["status"] = "fetch_failed"
        result["error"] = str(exc)[:160]
    return result

def main():
    records = parse_records(DATA.read_text())
    if len(records) < 10:
        raise RuntimeError("Unexpectedly few incomplete records; check parser")
    results = []
    for item in records:
        result = inspect(item)
        results.append(result)
        print(result["id"], result["status"], result["candidates"], flush=True)
        if result["status"] in ("fetched", "fetch_failed"):
            time.sleep(0.7)
    OUT.mkdir(exist_ok=True)
    payload = {"generated_at": datetime.now(timezone.utc).isoformat(),
               "note": "Candidates are evidence for review, not automatic changes to vehicle data.",
               "records": results}
    (OUT / "missing-specs.json").write_text(json.dumps(payload, indent=2) + chr(10))
    lines = ["# Missing vehicle specifications", "",
             "Only exact individual advertisements are inspected. No vehicle records are modified.", "",
             "| Vehicle | Rank | Missing | Result | Extracted candidates |",
             "| --- | --- | --- | --- | --- |"]
    for r in results:
        candidates = ", ".join(k + ": " + v.get("value", "ambiguous") for k, v in r["candidates"].items())
        lines.append("| " + " | ".join([r["id"], str(r["rank"] or "-"),
                     ", ".join(r["missing"]), r["status"], candidates or "-"]) + " |")
    markdown = chr(10).join(lines) + chr(10)
    (OUT / "missing-specs.md").write_text(markdown)
    import os
    if os.getenv("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as f:
            f.write(markdown)
    print("Reviewed", len(results), "incomplete records", flush=True)

if __name__ == "__main__":
    main()
