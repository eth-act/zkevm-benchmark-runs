#!/usr/bin/env python3
"""Ingest zkEVM benchmark run folders into the data directory structure.

Moves JSON result files from a flat run folder into the canonical structure:
  data/{mode}/{hardware}/{fixture-set}/{X}M-gas-limit/{el-client}/{zkvm}/

Gas limit is extracted from each filename's benchmark-gas-value_XM pattern.
The --fixture-set flag specifies which EEST fixture set the data belongs to.
"""

import argparse
import json
import re
import shutil
import sys
from collections import defaultdict
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
GAS_VALUE_RE = re.compile(r"benchmark-gas-value_(\d+M)")


def discover_structure(source: Path):
    """Discover EL clients, zkVMs, and their JSON files under source.

    Expected layout: source/{el-client}/{zkvm}/*.json
    Yields (el_client, zkvm, json_files) tuples.
    """
    for el_client_dir in sorted(source.iterdir()):
        if not el_client_dir.is_dir():
            continue
        for zkvm_dir in sorted(el_client_dir.iterdir()):
            if not zkvm_dir.is_dir():
                continue
            json_files = list(zkvm_dir.glob("*.json"))
            if json_files:
                yield el_client_dir.name, zkvm_dir.name, json_files


def group_by_gas(json_files):
    """Group JSON files by gas value extracted from filename.

    Returns (groups dict, skipped list).
    """
    groups = defaultdict(list)
    skipped = []
    for f in json_files:
        m = GAS_VALUE_RE.search(f.name)
        if m:
            groups[m.group(1)].append(f)
        else:
            skipped.append(f)
    return groups, skipped


def ingest(source: Path, target_base: Path, fixture_set: str, dry_run: bool):
    """Ingest one source folder into target_base."""
    hw_file = source / "hardware.json"
    if not hw_file.exists():
        print(f"ERROR: {hw_file} not found", file=sys.stderr)
        return False

    stats = []
    hw_copied = set()
    fixture_set_created = False

    for el_client, zkvm, json_files in discover_structure(source):
        groups, skipped = group_by_gas(json_files)

        if skipped:
            print(f"WARNING: {len(skipped)} files without gas value in "
                  f"{el_client}/{zkvm}, skipping:")
            for f in skipped[:5]:
                print(f"  {f.name}")
            if len(skipped) > 5:
                print(f"  ... and {len(skipped) - 5} more")

        for gas_value in sorted(groups, key=lambda v: int(v.rstrip("M"))):
            files = groups[gas_value]
            config = f"{gas_value}-gas-limit"
            config_base = target_base / fixture_set / config if fixture_set else target_base / config
            target_dir = config_base / el_client / zkvm

            if not dry_run:
                target_dir.mkdir(parents=True, exist_ok=True)

            # Create fixtures.json once per fixture-set.
            if fixture_set and not fixture_set_created:
                fs_dir = target_base / fixture_set
                fs_file = fs_dir / "fixtures.json"
                if not dry_run:
                    fs_dir.mkdir(parents=True, exist_ok=True)
                    if not fs_file.exists():
                        ref = fixture_set.removeprefix("eest-")
                        with open(fs_file, "w") as fh:
                            json.dump({"source": "ethereum/execution-spec-tests", "ref": ref}, fh, indent=2)
                            fh.write("\n")
                        print(f"  CREATED {fs_file}")
                else:
                    if not fs_file.exists():
                        print(f"  CREATE {fs_file}")
                fixture_set_created = True

            # Copy hardware.json once per config folder.
            if config not in hw_copied:
                hw_dest = config_base / "hardware.json"
                if dry_run:
                    print(f"  COPY {hw_file} -> {hw_dest}")
                else:
                    shutil.copy2(hw_file, hw_dest)
                hw_copied.add(config)

            overwrites = 0
            for f in files:
                dest = target_dir / f.name
                if dest.exists():
                    overwrites += 1
                if dry_run:
                    pass  # Quiet in dry-run; summary table is enough.
                else:
                    shutil.move(str(f), str(dest))

            stats.append((gas_value, el_client, zkvm, len(files), overwrites))

    # Print summary table.
    if stats:
        print()
        if fixture_set:
            print(f"Fixture set: {fixture_set}")
        print(f"{'Gas':>5}  {'EL Client':<20}  {'zkVM':<18}  {'Moved':>6}  {'Overwrote':>9}")
        print("-" * 68)
        total = 0
        for gas, el, zk, moved, ow in stats:
            label = f"{ow}" if ow else "new"
            print(f"{gas:>5}  {el:<20}  {zk:<18}  {moved:>6}  {label:>9}")
            total += moved
        print("-" * 68)
        print(f"{'Total':<46}  {total:>6}")
        if dry_run:
            print("\n(dry run — no files were moved)")
    else:
        print("No files found to ingest.")

    return True


def main():
    parser = argparse.ArgumentParser(
        description="Ingest zkEVM benchmark run folders into data/ structure.")
    parser.add_argument("folders", nargs="+",
                        help="Source folder(s) to ingest")
    parser.add_argument("--target-hardware", default="8x5090",
                        help="Hardware identifier (default: 8x5090)")
    parser.add_argument("--mode", default="proving",
                        choices=["proving", "executions"],
                        help="Data mode (default: proving)")
    parser.add_argument("--fixture-set",
                        help="EEST fixture set name (e.g., eest-365433e)")
    parser.add_argument("--dry-run", action="store_true",
                        help="Show what would happen without moving files")
    args = parser.parse_args()

    target_base = REPO_ROOT / "data" / args.mode / args.target_hardware

    ok = True
    for folder_name in args.folders:
        source = Path(folder_name)
        if not source.is_absolute():
            source = REPO_ROOT / folder_name
        if not source.is_dir():
            print(f"ERROR: {source} is not a directory", file=sys.stderr)
            ok = False
            continue
        print(f"Ingesting {source.name} ...")
        if not ingest(source, target_base, args.fixture_set, args.dry_run):
            ok = False

    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
