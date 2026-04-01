#!/usr/bin/env python3
"""One-shot migration: move EEST gas-limit configs into fixture-set directories.

After running successfully, this script can be deleted.
"""

import argparse
import json
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# Mapping: (mode_dir, hardware) -> (fixture_set_name, fixtures_json_content)
MIGRATIONS = [
    {
        "path": "data/proving/8x5090",
        "fixture_set": "eest-365433e",
        "fixtures_json": {
            "source": "ethereum/execution-spec-tests",
            "ref": "365433e",
        },
    },
    {
        "path": "data/executions/1xL40s",
        "fixture_set": "eest-v0.0.7",
        "fixtures_json": {
            "source": "ethereum/execution-spec-tests",
            "ref": "v0.0.7",
        },
    },
]


def migrate(dry_run: bool):
    ok = True
    for entry in MIGRATIONS:
        hw_path = REPO_ROOT / entry["path"]
        if not hw_path.exists():
            print(f"SKIP {hw_path} (does not exist)")
            continue

        fixture_set = entry["fixture_set"]
        target = hw_path / fixture_set

        # Find gas-limit dirs to move
        gas_dirs = sorted(
            d for d in hw_path.iterdir()
            if d.is_dir() and d.name.endswith("-gas-limit")
        )

        if not gas_dirs:
            print(f"SKIP {hw_path} (no gas-limit dirs)")
            continue

        print(f"\n{hw_path}:")
        print(f"  fixture-set: {fixture_set}")
        print(f"  configs to move: {[d.name for d in gas_dirs]}")

        if dry_run:
            print(f"  [dry-run] would create {target}/")
            print(f"  [dry-run] would write {target}/fixtures.json")
            for d in gas_dirs:
                print(f"  [dry-run] would move {d.name}/ -> {fixture_set}/{d.name}/")
            continue

        # Create fixture-set dir
        target.mkdir(exist_ok=True)

        # Write fixtures.json
        fixtures_file = target / "fixtures.json"
        if not fixtures_file.exists():
            with open(fixtures_file, "w") as f:
                json.dump(entry["fixtures_json"], f, indent=2)
                f.write("\n")
            print(f"  wrote {fixtures_file}")

        # Move each gas-limit dir
        for d in gas_dirs:
            dest = target / d.name
            if dest.exists():
                print(f"  ERROR: {dest} already exists, skipping", file=sys.stderr)
                ok = False
                continue
            shutil.move(str(d), str(dest))
            print(f"  moved {d.name}/ -> {fixture_set}/{d.name}/")

    if dry_run:
        print("\n(dry run -- no files were moved)")

    return ok


def main():
    parser = argparse.ArgumentParser(
        description="Migrate EEST gas-limit configs into fixture-set directories.")
    parser.add_argument("--dry-run", action="store_true",
                        help="Show what would happen without moving files")
    args = parser.parse_args()

    if not migrate(args.dry_run):
        sys.exit(1)


if __name__ == "__main__":
    main()
