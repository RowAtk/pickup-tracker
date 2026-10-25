#!/usr/bin/env python3
"""Report missing vehicle data and cached photographs without changing records."""
import json
import re
from datetime import datetime, timezone
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = (root / "src/lib/data/vehicles.ts").read_text()
manifest = (root / "src/lib/data/vehicle-images.ts").read_text()
images = set(re.findall(r'^\s*"([^"]+)":\s*\{', manifest, re.M))
records = []
for line in source.splitlines():
    if "priceJmd:" not in line or "id:" not in line:
        continue
    match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", line)
    if not match:
        continue
    vid = match.group(1)
    missing = [name for name in ("mileageKm", "drivetrain", "transmission", "listingUrl") if name + ":" not in line]
    if vid not in images:
        missing.append("cachedImage")
    price = re.search(r"priceJmd:\s*(\d+)", line)
    if not price or int(price.group(1)) <= 0:
        missing.append("validPrice")
    records.append({"id": vid, "missing": missing, "has_cached_image": vid in images})
if len(records) < 20:
    raise RuntimeError("Parsed unexpectedly few vehicle records")
report = {
    "generated_at": datetime.now(timezone.utc).isoformat(),
    "total": len(records),
    "cached_images": sum(r["has_cached_image"] for r in records),
    "records": records,
}
out = root / "reports"
out.mkdir(exist_ok=True)
(out / "vehicle-quality.json").write_text(json.dumps(report, indent=2) + "\n")
print(f"Audited {len(records)} records, {report['cached_images']} cached images")
for r in records:
    if r["missing"]:
        print(r["id"] + ": " + ", ".join(r["missing"]))
if any("validPrice" in r["missing"] for r in records):
    raise RuntimeError("One or more prices missing or invalid")

summary = root / "reports" / "vehicle-quality.md"
lines = [
    "# Pickup tracker data quality",
    "",
    f"Audited: {report['generated_at']}",
    f"Vehicles: {report['total']}",
    f"Matched cached images: {report['cached_images']}/{report['total']}",
    f"Missing cached images: {report['total'] - report['cached_images']}",
    "",
    "| Vehicle ID | Missing fields |",
    "| --- | --- |",
]
for record in records:
    lines.append(f"| {record['id']} | {', '.join(record['missing']) or 'None'} |")
summary.write_text(chr(10).join(lines) + chr(10))
import os
if os.environ.get("GITHUB_STEP_SUMMARY"):
    with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as handle:
        handle.write(summary.read_text())
