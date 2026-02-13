#!/usr/bin/env python3
"""
Unified site builder for zkEVM benchmark websites.

Assembles the complete dist/ directory from static site assets and generated data.
Produces three sites: landing page, benchmarks dashboard, and repricing analysis.

Usage:
    python3 scripts/build_site.py [--output dist]
"""

import argparse
import shutil
import subprocess
import sys
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(
        description='Build the complete zkEVM benchmarks website.'
    )
    parser.add_argument(
        '--output',
        type=str,
        default='dist',
        help='Output directory (default: dist)'
    )

    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    output = Path(args.output)
    if not output.is_absolute():
        output = repo_root / output

    sites_dir = repo_root / 'sites'
    scripts_dir = repo_root / 'scripts'

    # Clean and create output directory
    if output.exists():
        shutil.rmtree(output)
    output.mkdir(parents=True)

    # =========================================================================
    # 1. Shared assets
    # =========================================================================
    print("Copying shared assets...")
    shutil.copytree(sites_dir / 'shared', output / 'shared')

    # =========================================================================
    # 2. Landing page
    # =========================================================================
    print("Building landing page...")
    shutil.copy2(sites_dir / 'landing' / 'index.html', output / 'index.html')
    shutil.copy2(sites_dir / 'landing' / 'landing.css', output / 'landing.css')

    # =========================================================================
    # 3. Benchmarks site
    # =========================================================================
    print("Building benchmarks site...")
    benchmarks_out = output / 'benchmarks'
    benchmarks_out.mkdir()

    # Copy static files
    for filename in ('index.html', 'benchmarks.css', 'app.js'):
        shutil.copy2(sites_dir / 'benchmarks' / filename, benchmarks_out / filename)

    # Generate data.js
    subprocess.run(
        [sys.executable, str(scripts_dir / 'generate_benchmarks_website.py'),
         '--output', str(benchmarks_out)],
        check=True,
        cwd=str(scripts_dir),
    )

    # =========================================================================
    # 4. Repricing site
    # =========================================================================
    print("Building repricing site...")
    repricing_out = output / 'repricing'
    repricing_out.mkdir()

    # Copy static files
    shutil.copy2(sites_dir / 'repricing' / 'index.html', repricing_out / 'index.html')
    shutil.copy2(sites_dir / 'repricing' / 'repricing.css', repricing_out / 'repricing.css')
    shutil.copytree(sites_dir / 'repricing' / 'js', repricing_out / 'js')

    # Generate data
    data_out = repricing_out / 'data'
    data_out.mkdir()
    subprocess.run(
        [sys.executable, str(scripts_dir / 'generate_repricing_website.py'),
         '--output', str(data_out)],
        check=True,
        cwd=str(scripts_dir),
    )

    # =========================================================================
    # 5. Verification site
    # =========================================================================
    print("Building verification site...")
    verification_out = output / 'verification'
    verification_out.mkdir()

    # Copy static files
    for filename in ('index.html', 'verification.css', 'app.js'):
        shutil.copy2(sites_dir / 'verification' / filename, verification_out / filename)

    # Generate data.js
    subprocess.run(
        [sys.executable, str(scripts_dir / 'generate_verification_website.py'),
         '--output', str(verification_out)],
        check=True,
        cwd=str(scripts_dir),
    )

    print(f"\nSite built successfully in {output}")


if __name__ == '__main__':
    main()
