#!/usr/bin/env python3
"""
Computes aggregate statistics on OLS regression intercepts from the repricing
dashboard's combined dataset. The intercept represents the baseline proving
time (at gas_used=0) for each fixture's linear fit of gas_used vs proving_time.

Replicates the regression from sites/repricing/js/linearity.js exactly.

Usage:
    python3 scripts/intercept_stats.py
    python3 scripts/intercept_stats.py --data-dir dist/repricing/data
    python3 scripts/intercept_stats.py --zkvm reth-v1.11.0/zisk-v0.16.1
    python3 scripts/intercept_stats.py --csv
"""

import argparse
import csv
import glob
import json
import math
import statistics
import sys
from pathlib import Path


def linear_regression(points):
    """OLS regression on [(x, y), ...]. Returns (slope, intercept, r_squared) or None."""
    n = len(points)
    if n < 2:
        return None

    sx = sy = sxx = sxy = syy = 0.0
    for x, y in points:
        sx += x
        sy += y
        sxx += x * x
        sxy += x * y
        syy += y * y

    denom = n * sxx - sx * sx
    if abs(denom) < 1e-12:
        return None

    slope = (n * sxy - sx * sy) / denom
    intercept = (sy - slope * sx) / n

    y_mean = sy / n
    ss_tot = sum((y - y_mean) ** 2 for _, y in points)
    ss_res = sum((y - (slope * x + intercept)) ** 2 for x, y in points)
    r_squared = 1 - (ss_res / ss_tot) if ss_tot > 0 else 1.0

    return slope, intercept, r_squared


def classify_scaling(points):
    """Log-log regression to classify sublinear/linear/superlinear. Returns (exponent, label) or None."""
    log_pts = [(math.log(x), math.log(y)) for x, y in points if x > 0 and y > 0]
    if len(log_pts) < 2:
        return None
    reg = linear_regression(log_pts)
    if reg is None:
        return None
    exp = reg[0]  # slope in log-log = exponent
    if exp < 0.90:
        return exp, "sublinear"
    elif exp > 1.10:
        return exp, "superlinear"
    else:
        return exp, "linear"


def analyze_combined_file(path):
    """Analyze a combined JSON file. Yields dicts with regression results per test×zkvm."""
    with open(path) as f:
        data = json.load(f)

    hardware = data.get("hardware", "unknown")
    zkvms = data.get("zkvms", [])

    for test in data.get("tests", []):
        test_name = test.get("name", test.get("id", "unknown"))
        operation = test.get("operation", "unknown")

        for zkvm in zkvms:
            points = []
            for dp in test.get("data_points", []):
                result = dp.get("results", {}).get(zkvm)
                if not result or result.get("status") != "success":
                    continue
                pt_ms = result.get("proving_time_ms")
                gas = dp.get("block_used_gas")
                if pt_ms is not None and gas is not None and pt_ms > 0 and gas > 0:
                    points.append((gas, pt_ms))

            if len(points) < 2:
                continue

            reg = linear_regression(points)
            if reg is None:
                continue

            slope, intercept, r_sq = reg
            scaling = classify_scaling(points)

            yield {
                "hardware": hardware,
                "zkvm": zkvm,
                "test": test_name,
                "operation": operation,
                "n_points": len(points),
                "slope": slope,
                "intercept_ms": intercept,
                "intercept_s": intercept / 1000,
                "r_squared": r_sq,
                "slope_ms_per_mgas": slope * 1e6,
                "exponent": scaling[0] if scaling else None,
                "scaling": scaling[1] if scaling else None,
            }


def percentile(sorted_vals, p):
    """Compute the p-th percentile (0-100) from a sorted list."""
    if not sorted_vals:
        return 0
    k = (len(sorted_vals) - 1) * p / 100
    f = math.floor(k)
    c = math.ceil(k)
    if f == c:
        return sorted_vals[int(k)]
    return sorted_vals[f] * (c - k) + sorted_vals[c] * (k - f)


def print_stats(label, records):
    """Print intercept statistics for a group of records."""
    if not records:
        print(f"  {label}: no data")
        return

    intercepts = sorted(r["intercept_s"] for r in records)
    n = len(intercepts)
    mean = statistics.mean(intercepts)
    med = statistics.median(intercepts)
    stdev = statistics.stdev(intercepts) if n > 1 else 0
    p25 = percentile(intercepts, 25)
    p75 = percentile(intercepts, 75)
    p95 = percentile(intercepts, 95)
    p99 = percentile(intercepts, 99)

    min_r = min(records, key=lambda r: r["intercept_s"])
    max_r = max(records, key=lambda r: r["intercept_s"])

    print(f"\n  {label} (n={n})")
    print(f"    Mean:    {mean:>8.2f}s")
    print(f"    Median:  {med:>8.2f}s")
    print(f"    Std Dev: {stdev:>8.2f}s")
    print(f"    P25:     {p25:>8.2f}s")
    print(f"    P75:     {p75:>8.2f}s")
    print(f"    P95:     {p95:>8.2f}s")
    print(f"    P99:     {p99:>8.2f}s")
    print(f"    Min:     {min_r['intercept_s']:>8.2f}s  ({min_r['test'][:80]})")
    print(f"    Max:     {max_r['intercept_s']:>8.2f}s  ({max_r['test'][:80]})")


def print_report(records):
    """Print full report grouped by zkVM and scaling classification."""
    if not records:
        print("No data found.")
        return

    # Overall
    print("=" * 80)
    print("INTERCEPT STATISTICS (all zkVMs)")
    print("=" * 80)
    print_stats("All fixtures", records)

    # Per zkVM
    zkvms = sorted(set(r["zkvm"] for r in records))
    for zkvm in zkvms:
        subset = [r for r in records if r["zkvm"] == zkvm]
        print(f"\n{'─' * 80}")
        print(f"zkVM: {zkvm}")
        print(f"{'─' * 80}")
        print_stats("All", subset)

        # By scaling classification
        for cls in ("sublinear", "linear", "superlinear"):
            by_cls = [r for r in subset if r["scaling"] == cls]
            if by_cls:
                print_stats(f"Scaling: {cls}", by_cls)

    # Top 10 highest intercepts
    print(f"\n{'=' * 80}")
    print("TOP 10 HIGHEST INTERCEPTS")
    print(f"{'=' * 80}")
    top = sorted(records, key=lambda r: r["intercept_s"], reverse=True)[:10]
    for i, r in enumerate(top, 1):
        print(f"  {i:>2}. {r['intercept_s']:>7.2f}s  R²={r['r_squared']:.4f}  {r['zkvm']}  {r['test'][:60]}")

    # Top 10 lowest (most negative) intercepts
    print(f"\n{'=' * 80}")
    print("TOP 10 LOWEST INTERCEPTS")
    print(f"{'=' * 80}")
    bottom = sorted(records, key=lambda r: r["intercept_s"])[:10]
    for i, r in enumerate(bottom, 1):
        print(f"  {i:>2}. {r['intercept_s']:>7.2f}s  R²={r['r_squared']:.4f}  {r['zkvm']}  {r['test'][:60]}")


def write_csv(records, out):
    """Write all records as CSV."""
    writer = csv.DictWriter(out, fieldnames=[
        "hardware", "zkvm", "operation", "test", "n_points",
        "intercept_ms", "intercept_s", "slope_ms_per_mgas",
        "r_squared", "exponent", "scaling",
    ])
    writer.writeheader()
    for r in sorted(records, key=lambda r: (r["zkvm"], r["intercept_s"])):
        writer.writerow({k: r[k] for k in writer.fieldnames})


def main():
    parser = argparse.ArgumentParser(description="Intercept statistics from repricing linearity analysis")
    parser.add_argument("--data-dir", default="dist/repricing/data",
                        help="Directory containing combined JSON files (default: dist/repricing/data)")
    parser.add_argument("--zkvm", help="Filter to a specific zkVM identifier")
    parser.add_argument("--csv", action="store_true", help="Output as CSV instead of text report")
    args = parser.parse_args()

    combined_files = sorted(glob.glob(f"{args.data_dir}/**/results-*-combined.json", recursive=True))
    if not combined_files:
        print(f"Error: No combined JSON files found in {args.data_dir}", file=sys.stderr)
        print("Run 'python3 scripts/build_site.py --output dist' first.", file=sys.stderr)
        sys.exit(1)

    records = []
    for path in combined_files:
        print(f"Loading {path} ...", file=sys.stderr)
        for rec in analyze_combined_file(path):
            if args.zkvm and rec["zkvm"] != args.zkvm:
                continue
            records.append(rec)

    print(f"Analyzed {len(records)} test×zkVM combinations from {len(combined_files)} file(s)\n", file=sys.stderr)

    if args.csv:
        write_csv(records, sys.stdout)
    else:
        print_report(records)


if __name__ == "__main__":
    main()
