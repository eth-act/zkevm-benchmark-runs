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


def start_generator(script_path: Path, output_dir: Path,
                    scripts_dir: Path) -> subprocess.Popen:
    """Launch a site data generator as a child process."""
    return subprocess.Popen(
        [sys.executable, str(script_path), '--output', str(output_dir)],
        cwd=str(scripts_dir),
    )


def stop_generators(processes: list[tuple[str, subprocess.Popen]]) -> None:
    """Terminate any still-running generator processes."""
    for _, process in processes:
        if process.poll() is None:
            process.terminate()

    for _, process in processes:
        if process.poll() is None:
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()

    for _, process in processes:
        if process.poll() is None:
            process.wait()


def wait_for_generators(processes: list[tuple[str, subprocess.Popen]]) -> None:
    """Wait for generators and fail the build if any exits non-zero."""
    try:
        for name, process in processes:
            returncode = process.wait()
            if returncode != 0:
                raise subprocess.CalledProcessError(returncode, process.args)
    except Exception:
        stop_generators(processes)
        raise


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
    print("Preparing benchmarks site...")
    benchmarks_out = output / 'benchmarks'
    benchmarks_out.mkdir()

    # Copy static files
    for filename in ('index.html', 'benchmarks.css', 'app.js'):
        shutil.copy2(sites_dir / 'benchmarks' / filename, benchmarks_out / filename)

    # =========================================================================
    # 4. Repricing site
    # =========================================================================
    print("Preparing repricing site...")
    repricing_out = output / 'repricing'
    repricing_out.mkdir()

    # Copy static files
    shutil.copy2(sites_dir / 'repricing' / 'index.html', repricing_out / 'index.html')
    shutil.copy2(sites_dir / 'repricing' / 'repricing.css', repricing_out / 'repricing.css')
    shutil.copytree(sites_dir / 'repricing' / 'js', repricing_out / 'js')

    # Generate data
    data_out = repricing_out / 'data'
    data_out.mkdir()

    # =========================================================================
    # 5. Verification site
    # =========================================================================
    print("Preparing verification site...")
    verification_out = output / 'verification'
    verification_out.mkdir()

    # Copy static files
    for filename in ('index.html', 'verification.css', 'app.js'):
        shutil.copy2(sites_dir / 'verification' / filename, verification_out / filename)

    # =========================================================================
    # 6. Proposal page
    # =========================================================================
    print("Building proposal page...")
    proposal_out = output / 'proposal'
    proposal_out.mkdir()

    # Copy static site assets
    for filename in ('index.html', 'proposal.css', 'app.js'):
        shutil.copy2(sites_dir / 'proposal' / filename, proposal_out / filename)

    # Auto-fetch per-opcode figures from repricing-figs branch if missing
    proposal_data = repo_root / 'data' / 'repricing-proposal'
    proposal_figs = proposal_data / 'figs'
    has_figs = proposal_figs.exists() and any(proposal_figs.glob('*.png'))
    if not has_figs:
        print("  Figures not found locally, trying repricing-figs branch...")
        proposal_figs.mkdir(parents=True, exist_ok=True)
        try:
            subprocess.run(
                ['git', 'ls-remote', '--exit-code', 'origin', 'repricing-figs'],
                check=True, capture_output=True, cwd=str(repo_root),
            )
            subprocess.run(
                ['git', 'fetch', 'origin', 'repricing-figs', '--depth=1'],
                check=True, capture_output=True, cwd=str(repo_root),
            )
            subprocess.run(
                'git archive origin/repricing-figs | tar -x -C '
                + str(proposal_figs),
                shell=True, check=True, cwd=str(repo_root),
            )
            fig_count = len(list(proposal_figs.glob('*.png')))
            print(f"  Fetched {fig_count} figures from repricing-figs branch")
        except (subprocess.CalledProcessError, FileNotFoundError):
            print("  Warning: Could not fetch figures from repricing-figs branch")
            print("  Building without per-opcode diagnostic plots")

    # Copy markdown content and figures (if available)
    proposal_md = proposal_data / 'new_gas_proposal.md'
    if proposal_md.exists():
        # Markdown reports
        for md_file in ('new_gas_proposal.md',
                        'runtime_estimation_autogenerated_report.md',
                        'glue_opcodes_autogenerated_report.md'):
            src = proposal_data / md_file
            if src.exists():
                shutil.copy2(src, proposal_out / md_file)

        # All figures (summary + per-opcode diagnostic plots from repricing-figs branch)
        if proposal_figs.exists():
            figs_out = proposal_out / 'figs'
            figs_out.mkdir(exist_ok=True)
            for fig in proposal_figs.iterdir():
                if fig.is_file():
                    shutil.copy2(fig, figs_out / fig.name)

        # CSV data files
        for csv_file in proposal_data.glob('*.csv'):
            shutil.copy2(csv_file, proposal_out / csv_file.name)

        print("  Copied proposal reports, figures, and CSV data")
    else:
        print("  Warning: No proposal data at data/repricing-proposal/")
        print("  The proposal page will show a 'not available' message")

    # =========================================================================
    # 7. Profiles site
    # =========================================================================
    print("Preparing profiles site...")
    profiles_out = output / 'profiles'
    profiles_out.mkdir()

    # Copy static files
    shutil.copy2(sites_dir / 'profiles' / 'index.html', profiles_out / 'index.html')
    shutil.copy2(sites_dir / 'profiles' / 'profiles.css', profiles_out / 'profiles.css')
    shutil.copytree(sites_dir / 'profiles' / 'js', profiles_out / 'js')

    # Generate data
    profiles_data_out = profiles_out / 'data'
    profiles_data_out.mkdir()

    print("Generating site data...")
    generator_processes = [
        (
            'benchmarks',
            start_generator(
                scripts_dir / 'generate_benchmarks_website.py',
                benchmarks_out,
                scripts_dir,
            ),
        ),
        (
            'repricing',
            start_generator(
                scripts_dir / 'generate_repricing_website.py',
                data_out,
                scripts_dir,
            ),
        ),
        (
            'verification',
            start_generator(
                scripts_dir / 'generate_verification_website.py',
                verification_out,
                scripts_dir,
            ),
        ),
        (
            'profiles',
            start_generator(
                scripts_dir / 'generate_profiles_website.py',
                profiles_data_out,
                scripts_dir,
            ),
        ),
    ]
    wait_for_generators(generator_processes)

    print(f"\nSite built successfully in {output}")


if __name__ == '__main__':
    main()
