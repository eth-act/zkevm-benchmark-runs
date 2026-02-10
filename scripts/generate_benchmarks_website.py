#!/usr/bin/env python3
"""
Generate static HTML website for zkEVM benchmark results.

This script processes benchmark runs in the data/proving and data/executions folders
and generates a static HTML website for GitHub Pages.
"""

import argparse
import json
from pathlib import Path
from typing import Dict, Any, Optional

from _utils import (
    load_workload_info,
    load_crashes_from_file,
    load_hardware_info,
    process_zkvm_folder,
)


def collect_el_client_data(el_client_folder: Path, mode: str, hardware_info_folder: Path) -> Dict[str, Any]:
    """Collect zkVM data for an EL client.

    Args:
        el_client_folder: Path to the folder containing zkVM data
        mode: Either 'proving' or 'execution'
        hardware_info_folder: Path to the folder containing hardware.json

    Returns:
        Dictionary organized by zkVM name with their results
    """
    zkvm_data = {}

    # Load hardware info from the specified folder
    hardware_info = load_hardware_info(hardware_info_folder)

    zkvm_folders = [item for item in el_client_folder.iterdir()
                   if item.is_dir() and not item.name.startswith('.')]

    for zkvm_folder in zkvm_folders:
        zkvm_name = zkvm_folder.name

        # Load workload URL
        workload_file = zkvm_folder / "_zkevm-benchmark-workload.txt"
        workload_url = load_workload_info(workload_file)

        # Load crashed fixtures
        crashes_file = zkvm_folder / "_crashes.txt"
        crashed_fixtures = load_crashes_from_file(crashes_file)

        # Process results
        successful_runs, sdk_crashed_runs, prover_crashed_runs = process_zkvm_folder(
            zkvm_folder, crashed_fixtures, mode=mode
        )

        zkvm_data[zkvm_name] = {
            'workload_url': workload_url,
            'successful_runs': successful_runs,
            'sdk_crashed_runs': sdk_crashed_runs,
            'prover_crashed_runs': prover_crashed_runs
        }

    return {'hardware_info': hardware_info, 'zkvm_data': zkvm_data}


def collect_mode_data(mode_path: Path, mode: str) -> Dict[str, Any]:
    """Collect data for a specific mode (proving or execution).

    Returns:
        Dictionary organized by hardware -> config -> EL client -> zkVM -> results
    """
    mode_data = {}

    # Find all hardware folders
    hardware_folders = [item for item in mode_path.iterdir()
                       if item.is_dir() and not item.name.startswith('.')]

    for hardware_folder in hardware_folders:
        hardware_name = hardware_folder.name
        mode_data[hardware_name] = {}

        # Find all config folders (gas limits and mainnet ranges)
        config_folders = [item for item in hardware_folder.iterdir()
                         if item.is_dir() and not item.name.startswith('.')]

        for config_folder in config_folders:
            config_name = config_folder.name
            mode_data[hardware_name][config_name] = {}

            # Determine dataset type
            if config_name.endswith('-gas-limit'):
                dataset_type = 'eest'
            elif config_name.startswith('mainnet-'):
                dataset_type = 'mainnet'
            else:
                dataset_type = 'other'

            mode_data[hardware_name][config_name]['dataset_type'] = dataset_type
            mode_data[hardware_name][config_name]['el_clients'] = {}

            # All configurations: config -> EL client -> zkVM
            el_client_folders = [item for item in config_folder.iterdir()
                               if item.is_dir() and not item.name.startswith('.')]

            for el_client_folder in el_client_folders:
                el_client_name = el_client_folder.name
                # Hardware info is always at config level
                el_client_data = collect_el_client_data(el_client_folder, mode, config_folder)
                mode_data[hardware_name][config_name]['el_clients'][el_client_name] = el_client_data

    return mode_data


def collect_website_data(proving_path: Path, executions_path: Path) -> Dict[str, Any]:
    """Collect all benchmark data for the website.

    Returns:
        Dictionary containing all benchmark data organized by mode, hardware, config, EL client, and zkVM
    """
    data = {
        'proving': {},
        'execution': {},
    }

    # Process proving data
    if proving_path.exists():
        data['proving'] = collect_mode_data(proving_path, 'proving')

    # Process execution data
    if executions_path.exists():
        data['execution'] = collect_mode_data(executions_path, 'execution')

    return data


def generate_index_html(output_dir: Path):
    """Generate the main index.html file."""
    html_content = """<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>zkEVM Benchmark Results</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container header-row">
            <div class="header-text">
                <h1>zkEVM Benchmark Results</h1>
                <p>Performance comparison of zkEVM provers and executors</p>
            </div>
            <button id="theme-toggle" class="btn btn-tertiary" aria-label="Toggle color theme">Dark mode</button>
        </div>
    </header>

    <main class="container">
        <div class="controls-bar">
            <div class="controls-row">
                <div class="filter-section">
                    <span class="filter-label">Mode:</span>
                    <button class="tab-button active" data-tab="execution">Execution</button>
                    <button class="tab-button" data-tab="proving">Proving</button>
                </div>
                <div class="control-inline">
                    <label for="hardware-filter">Machine</label>
                    <select id="hardware-filter">
                        <option value="all">All</option>
                    </select>
                </div>
                <div class="control-inline">
                    <label for="config-filter">Config</label>
                    <select id="config-filter">
                        <option value="all">All</option>
                    </select>
                </div>
                <div class="control-inline">
                    <label for="el-client-filter">EL Client</label>
                    <select id="el-client-filter">
                        <option value="all">All</option>
                    </select>
                </div>
                <label class="control-checkbox">
                    <input type="checkbox" id="crashes-filter">
                    Show crashes only
                </label>
            </div>
        </div>

        <div id="tab-info" class="summary-bar"></div>

        <details id="reproduce-section">
            <summary><h2>How to reproduce?</h2></summary>
            <div class="reproduce-content">
                <p>To reproduce do:</p>
                <pre><code>$ git clone git@github.com:eth-act/zkevm-benchmark-workload.git
$ cd zkevm-benchmark-workload
# Change 60M to 10M or 45M as desired.
$ RUST_LOG=info cargo run --release -p witness-generator-cli -- tests --include 60M-
# Change 'zisk' to any other zkvm name.
$ RUST_LOG=info cargo run --release -p ere-hosts -- --zkvms zisk stateless-validator --execution-client reth</code></pre>
            </div>
        </details>

        <div id="content">
            <div class="loading">Loading benchmark data...</div>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>zkEVM Benchmark Results</p>
            <p><a href="https://github.com/eth-act/zkevm-benchmark-runs">Raw Data (GitHub)</a></p>
        </div>
    </footer>

    <script src="data.js"></script>
    <script src="app.js"></script>
</body>
</html>
"""

    with open(output_dir / "index.html", 'w') as f:
        f.write(html_content)


def generate_css(output_dir: Path):
    """Generate the CSS file for the website."""
    css_content = """/* ============================================================================
   CSS Variables & Themes
   ============================================================================ */

:root {
    --font-heading: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    transition: background 0.2s ease, color 0.2s ease;
}

[data-theme="light"] {
    color-scheme: light;
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-card: #f1f5f9;
    --input-bg: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --text-muted: #94a3b8;
    --accent: #6366f1;
    --accent-hover: #4f46e5;
    --success: #10b981;
    --warning: #f59e0b;
    --error: #ef4444;
    --border: #e2e8f0;
    --border-strong: #cbd5e1;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --header-bg: #ffffff;
}

[data-theme="dark"] {
    color-scheme: dark;
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-card: #334155;
    --input-bg: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --accent: #818cf8;
    --accent-hover: #a5b4fc;
    --success: #34d399;
    --warning: #fbbf24;
    --error: #f87171;
    --border: #334155;
    --border-strong: #475569;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
    --header-bg: #1e293b;
}

/* ============================================================================
   Base Styles
   ============================================================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    background: var(--bg-secondary);
    color: var(--text-primary);
    line-height: 1.6;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
}

a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: var(--accent-hover);
}

/* ============================================================================
   Layout
   ============================================================================ */

.container {
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 16px;
}

header {
    background: var(--header-bg);
    padding: 24px 0;
    border-bottom: 1px solid var(--border);
}

.header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.header-text h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
    letter-spacing: -0.025em;
}

.header-text p {
    color: var(--text-secondary);
    font-size: 0.875rem;
}

main.container {
    padding-top: 24px;
    padding-bottom: 24px;
}

/* ============================================================================
   Buttons
   ============================================================================ */

.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-family: var(--font-body);
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.btn-tertiary {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border);
    padding: 6px 12px;
    font-size: 0.8125rem;
}

.btn-tertiary:hover {
    border-color: var(--accent);
    color: var(--accent);
}

/* ============================================================================
   Controls Bar
   ============================================================================ */

.controls-bar {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
    background: var(--bg-primary);
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid var(--border);
}

.controls-row {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
}

.control-inline {
    display: flex;
    align-items: center;
    gap: 6px;
}

.control-inline label {
    font-weight: 500;
    color: var(--text-secondary);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
}

.control-inline select {
    padding: 5px 8px;
    font-size: 0.8125rem;
    min-width: 0;
}

select {
    padding: 8px 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--input-bg);
    color: var(--text-primary);
    font-size: 0.875rem;
    font-family: var(--font-body);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

select:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.control-checkbox {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8125rem;
    color: var(--text-secondary);
    white-space: nowrap;
    cursor: pointer;
}

.control-checkbox input[type="checkbox"] {
    accent-color: var(--accent);
    width: 14px;
    height: 14px;
}

/* ============================================================================
   Filter Section & Tab Buttons
   ============================================================================ */

.filter-section {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
}

.filter-label {
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
}

.tab-button {
    padding: 4px 10px;
    font-size: 0.8125rem;
    font-family: var(--font-body);
    font-weight: 500;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.tab-button:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.tab-button.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
}

/* ============================================================================
   Summary Bar (info box)
   ============================================================================ */

.summary-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 12px;
    padding: 8px 14px;
    background: var(--bg-primary);
    border-radius: 8px;
    border: 1px solid var(--border);
    font-size: 0.8125rem;
    color: var(--text-secondary);
    flex-wrap: wrap;
    line-height: 1.6;
}

/* ============================================================================
   Details / Reproduce Section
   ============================================================================ */

details {
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 8px;
    margin-bottom: 20px;
}

details.hidden {
    display: none;
}

details summary {
    padding: 12px 16px;
    cursor: pointer;
    font-weight: 500;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
}

details summary::-webkit-details-marker {
    display: none;
}

details summary::before {
    content: '\\25B6';
    font-size: 0.65rem;
    transition: transform 0.2s ease;
    color: var(--text-secondary);
}

details[open] summary::before {
    transform: rotate(90deg);
}

details summary h2 {
    font-size: 0.875rem;
    margin: 0;
}

details[open] summary {
    border-bottom: 1px solid var(--border);
}

.reproduce-content {
    padding: 16px;
}

.reproduce-content p {
    margin-bottom: 10px;
    color: var(--text-secondary);
    font-size: 0.875rem;
}

.reproduce-content pre {
    background: var(--bg-secondary);
    padding: 12px;
    border-radius: 6px;
    border-left: 3px solid var(--accent);
    overflow-x: auto;
}

.reproduce-content code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--text-primary);
}

/* ============================================================================
   Content Area
   ============================================================================ */

#content {
    background: var(--bg-primary);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--border);
}

.loading {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-secondary);
    font-size: 1rem;
}

.no-results {
    text-align: center;
    padding: 40px;
    color: var(--text-secondary);
    font-style: italic;
}

/* ============================================================================
   Results Sections
   ============================================================================ */

.results-section {
    margin-bottom: 24px;
}

.results-section h2 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
    padding: 10px 12px;
    border-bottom: 2px solid var(--accent);
    background: var(--bg-secondary);
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.results-section h2:hover {
    background: var(--bg-card);
}

.results-section h2::after {
    content: '\\25BC';
    font-size: 0.625rem;
    color: var(--text-muted);
    transition: transform 0.2s ease;
}

.results-section h2.collapsed::after {
    transform: rotate(-90deg);
}

.results-section-content {
    overflow: visible;
}

.results-section-content.collapsed {
    display: none;
}

.results-section h3 {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-top: 16px;
    margin-bottom: 12px;
}

/* ============================================================================
   Hardware Info
   ============================================================================ */

.hardware-info {
    background: var(--bg-secondary);
    padding: 10px 14px;
    border-radius: 6px;
    margin-bottom: 16px;
    border-left: 3px solid var(--text-muted);
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.hardware-info strong {
    color: var(--text-primary);
    font-weight: 500;
}

/* ============================================================================
   Tables
   ============================================================================ */

.table-container {
    overflow-x: auto;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid var(--border);
}

table {
    width: 100%;
    border-collapse: collapse;
    background: var(--bg-primary);
}

thead {
    position: sticky;
    top: 0;
    z-index: 10;
}

table th {
    padding: 10px 14px;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    position: relative;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
    font-size: 0.875rem;
    white-space: nowrap;
}

table th:first-child {
    text-align: left;
}

table thead tr:first-child th {
    background: var(--bg-card);
    border-bottom: 2px solid var(--border-strong);
    font-weight: 600;
    color: var(--text-primary);
}

table thead tr:nth-child(2) th {
    background: var(--bg-secondary);
    font-size: 0.8125rem;
}

table th:hover {
    color: var(--accent);
}

table th.sortable::after {
    content: ' \\21C5';
    font-size: 0.75rem;
    opacity: 0.4;
}

table th.sorted-asc::after {
    content: " \\25B2";
    color: var(--accent);
    font-size: 0.625rem;
    opacity: 1;
}

table th.sorted-desc::after {
    content: " \\25BC";
    color: var(--accent);
    font-size: 0.625rem;
    opacity: 1;
}

table td {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    font-size: 0.875rem;
}

tbody tr {
    transition: background 0.15s ease;
}

tbody tr:hover td {
    background: var(--bg-secondary);
}

.crash-sdk {
    color: var(--error);
}

.crash-prover {
    color: var(--error);
    font-weight: 600;
}

.empty-result {
    color: var(--text-muted);
}

/* ============================================================================
   Summary Table
   ============================================================================ */

.summary-table {
    margin-top: 16px;
}

.summary-table th {
    background: var(--bg-card);
    color: var(--text-primary);
}

.summary-table .zkvm-cell {
    font-weight: 600;
    background: var(--bg-secondary);
    vertical-align: middle;
    border-right: 2px solid var(--border);
}

.summary-table .el-client-subrow {
    padding-left: 20px;
    font-size: 0.875rem;
}

/* ============================================================================
   Footer
   ============================================================================ */

footer {
    background: var(--bg-primary);
    padding: 24px 0;
    margin-top: 40px;
    border-top: 1px solid var(--border);
}

footer .container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
}

footer p {
    color: var(--text-muted);
    font-size: 0.8125rem;
    margin: 0;
}

footer a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.2s ease;
}

footer a:hover {
    color: var(--accent-hover);
}

/* ============================================================================
   Utility
   ============================================================================ */

.hidden {
    display: none !important;
}

/* ============================================================================
   Responsive
   ============================================================================ */

@media (max-width: 768px) {
    .header-row {
        flex-direction: column;
        align-items: flex-start;
    }

    .header-text h1 {
        font-size: 1.25rem;
    }

    .controls-row {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
    }

    .control-inline {
        flex-wrap: wrap;
    }

    .filter-section {
        flex-wrap: wrap;
    }

    .tab-button {
        flex: 1;
        min-width: 60px;
        text-align: center;
    }

    table {
        font-size: 0.8125rem;
    }

    table th, table td {
        padding: 8px;
    }

    footer .container {
        flex-direction: column;
        align-items: flex-start;
    }
}
"""

    with open(output_dir / "styles.css", 'w') as f:
        f.write(css_content)


def generate_js(website_data: Dict[str, Any], output_dir: Path):
    """Generate the JavaScript files for the website."""

    # Generate data.js with the benchmark data
    data_js_content = f"const benchmarkData = {json.dumps(website_data, indent=2)};\n"

    with open(output_dir / "data.js", 'w') as f:
        f.write(data_js_content)

    # Generate app.js with the application logic
    app_js_content = """// Current state
let currentMode = 'execution';
let currentFilters = {
    hardware: 'all',
    config: 'all',
    elClient: 'all',
    crashesOnly: false
};

// Tab information text
const TAB_INFO = {
    'execution': 'Contains execution-only runs (i.e. no proving) to detect completeness faults usually related to zkVM limits (e.g. execution length, input length, or guest program OOM). These are shown in the "SDK Crashed" column. Non-crashed execution durations aren\\'t meaningful to compare proving performance.',
    'proving': 'Contains the wall-clock proving times of fixtures.'
};

// Dark mode toggle
function setupThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        toggle.textContent = saved === 'dark' ? 'Light mode' : 'Dark mode';
    }
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        toggle.textContent = next === 'dark' ? 'Light mode' : 'Dark mode';
    });
}

// Update tab info box
function updateTabInfo() {
    const infoBox = document.getElementById('tab-info');
    if (infoBox && TAB_INFO[currentMode]) {
        infoBox.textContent = TAB_INFO[currentMode];
    }
}

// Load filters from URL query parameters
function loadFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('mode')) {
        const mode = params.get('mode');
        if (mode === 'execution' || mode === 'proving') {
            currentMode = mode;
        }
    }
    if (params.has('hardware')) {
        currentFilters.hardware = params.get('hardware');
    }
    if (params.has('config')) {
        currentFilters.config = params.get('config');
    }
    if (params.has('elClient')) {
        currentFilters.elClient = params.get('elClient');
    }
    if (params.has('crashesOnly')) {
        currentFilters.crashesOnly = params.get('crashesOnly') === 'true';
    }
}

// Update URL with current filters
function updateURL() {
    const params = new URLSearchParams();

    params.set('mode', currentMode);

    if (currentFilters.hardware !== 'all') {
        params.set('hardware', currentFilters.hardware);
    }
    if (currentFilters.config !== 'all') {
        params.set('config', currentFilters.config);
    }
    if (currentFilters.elClient !== 'all') {
        params.set('elClient', currentFilters.elClient);
    }
    if (currentFilters.crashesOnly) {
        params.set('crashesOnly', 'true');
    }

    const newURL = window.location.pathname + '?' + params.toString();
    window.history.pushState({}, '', newURL);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadFiltersFromURL();
    setupThemeToggle();
    setupTabs();
    populateFilters();
    renderResults();
    updateTabInfo();
    updateReproduceSectionVisibility();
});

// Setup tab switching
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    // Set initial active tab based on currentMode
    tabButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.tab === currentMode);
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active tab
            tabButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            // Update current mode
            currentMode = button.dataset.tab;

            // Reset filters
            currentFilters = {
                hardware: 'all',
                config: 'all',
                elClient: 'all',
                crashesOnly: false
            };
            document.getElementById('crashes-filter').checked = false;

            // Update UI
            populateFilters();
            renderResults();
            updateTabInfo();
            updateURL();
            updateReproduceSectionVisibility();
        });
    });

    // Setup filter change handlers
    document.getElementById('hardware-filter').addEventListener('change', (e) => {
        currentFilters.hardware = e.target.value;
        populateConfigFilter();
        populateElClientFilter();
        renderResults();
        updateURL();
    });

    document.getElementById('config-filter').addEventListener('change', (e) => {
        currentFilters.config = e.target.value;
        populateElClientFilter();
        renderResults();
        updateURL();
        updateReproduceSectionVisibility();
    });

    document.getElementById('el-client-filter').addEventListener('change', (e) => {
        currentFilters.elClient = e.target.value;
        renderResults();
        updateURL();
    });

    document.getElementById('crashes-filter').addEventListener('change', (e) => {
        currentFilters.crashesOnly = e.target.checked;
        renderResults();
        updateURL();
    });
}

// Populate filter dropdowns
function populateFilters() {
    populateHardwareFilter();
    populateConfigFilter();
    populateElClientFilter();
}

function populateHardwareFilter() {
    const select = document.getElementById('hardware-filter');
    const modeData = benchmarkData[currentMode] || {};
    const hardwareNames = Object.keys(modeData).sort();

    select.innerHTML = '<option value="all">All</option>';
    hardwareNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });

    // Validate and set the value
    if (hardwareNames.includes(currentFilters.hardware)) {
        select.value = currentFilters.hardware;
    } else {
        select.value = 'all';
        currentFilters.hardware = 'all';
    }
}

function populateConfigFilter() {
    const select = document.getElementById('config-filter');
    const modeData = benchmarkData[currentMode] || {};
    const configs = new Set();

    Object.entries(modeData).forEach(([hardware, hwData]) => {
        if (currentFilters.hardware !== 'all' && hardware !== currentFilters.hardware) return;

        Object.entries(hwData).forEach(([config, configData]) => {
            configs.add(config);
        });
    });

    const sortedConfigs = Array.from(configs).sort();
    select.innerHTML = '<option value="all">All</option>';
    sortedConfigs.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });

    // Validate and set the value
    if (sortedConfigs.includes(currentFilters.config)) {
        select.value = currentFilters.config;
    } else {
        select.value = 'all';
        currentFilters.config = 'all';
    }
}

function populateElClientFilter() {
    const select = document.getElementById('el-client-filter');
    const modeData = benchmarkData[currentMode] || {};
    const elClients = new Set();

    Object.entries(modeData).forEach(([hardware, hwData]) => {
        if (currentFilters.hardware !== 'all' && hardware !== currentFilters.hardware) return;

        Object.entries(hwData).forEach(([config, configData]) => {
            if (currentFilters.config !== 'all' && config !== currentFilters.config) return;

            Object.keys(configData.el_clients || {}).forEach(client => elClients.add(client));
        });
    });

    const sortedClients = Array.from(elClients).sort();
    select.innerHTML = '<option value="all">All</option>';
    sortedClients.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });

    // Validate and set the value
    if (sortedClients.includes(currentFilters.elClient)) {
        select.value = currentFilters.elClient;
    } else {
        select.value = 'all';
        currentFilters.elClient = 'all';
    }

    // Update checkbox state
    document.getElementById('crashes-filter').checked = currentFilters.crashesOnly;
}

// Render results
function renderResults() {
    const content = document.getElementById('content');
    const modeData = benchmarkData[currentMode] || {};

    let html = '';

    let hasResults = false;

    // Iterate through filtered data
    Object.entries(modeData).forEach(([hardware, hwData]) => {
        if (currentFilters.hardware !== 'all' && hardware !== currentFilters.hardware) return;

        Object.entries(hwData).forEach(([config, configData]) => {
            if (currentFilters.config !== 'all' && config !== currentFilters.config) return;

            // Collect all EL clients for this hardware+config combination
            const elClients = {};
            let hasMatchingClients = false;

            Object.entries(configData.el_clients || {}).forEach(([elClient, elClientData]) => {
                if (currentFilters.elClient !== 'all' && elClient !== currentFilters.elClient) return;

                elClients[elClient] = elClientData;
                hasMatchingClients = true;
            });

            if (hasMatchingClients) {
                hasResults = true;
                // Generate section for this hardware+config combination with all EL clients
                html += generateResultsSection(hardware, config, elClients);
            }
        });
    });

    if (!hasResults) {
        html += '<div class="no-results">No results match the current filters.</div>';
    }

    content.innerHTML = html;

    // Setup collapsible sections
    setupCollapsibleSections();

    // Setup sortable tables
    setupSortableTables();
}

// Setup collapsible section headers
function setupCollapsibleSections() {
    document.querySelectorAll('.results-section h2').forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.dataset.section;
            const content = document.getElementById(sectionId);

            header.classList.toggle('collapsed');
            content.classList.toggle('collapsed');
        });
    });
}

// Setup sortable tables
function setupSortableTables() {
    document.querySelectorAll('.table-container table').forEach(table => {
        // Check if this is a summary table or comparison table
        const isSummaryTable = table.classList.contains('summary-table');

        if (isSummaryTable) {
            // For summary tables, use the single header row
            const headers = table.querySelectorAll('thead tr th');
            headers.forEach((header, index) => {
                header.classList.add('sortable');
                header.addEventListener('click', () => {
                    sortTable(table, index, header);
                });
            });
        } else {
            // For comparison tables with double headers, we need to handle this differently
            // The actual sortable columns are in the tbody, so we count actual td cells
            const firstDataRow = table.querySelector('tbody tr:first-child');
            if (!firstDataRow) return;

            const columnCount = firstDataRow.cells.length;

            // Create clickable areas for sorting - we'll use the first header row
            const firstHeaderRow = table.querySelector('thead tr:first-child');
            const headers = firstHeaderRow.querySelectorAll('th');

            headers.forEach((header, index) => {
                header.classList.add('sortable');

                header.addEventListener('click', () => {
                    // Map the header index to actual column index
                    let actualColumnIndex;

                    if (index === 0) {
                        // Test Case column
                        actualColumnIndex = 0;
                    } else if (index === headers.length - 1) {
                        // Avg column (last column)
                        actualColumnIndex = columnCount - 1;
                    } else {
                        // zkVM columns - sort by the first EL client column under this zkVM
                        let colOffset = 1; // Skip Test Case column
                        for (let i = 1; i < index; i++) {
                            const prevColspan = parseInt(headers[i].getAttribute('colspan')) || 1;
                            colOffset += prevColspan;
                        }
                        actualColumnIndex = colOffset;
                    }

                    sortTable(table, actualColumnIndex, header);
                });
            });

            // Also make the second header row (EL clients) sortable
            const secondHeaderRow = table.querySelector('thead tr:nth-child(2)');
            if (secondHeaderRow) {
                const elHeaders = secondHeaderRow.querySelectorAll('th');
                elHeaders.forEach((header, index) => {
                    header.classList.add('sortable');
                    header.addEventListener('click', () => {
                        // EL client columns start at index 1 (after Test Case)
                        sortTable(table, index + 1, header);
                    });
                });
            }

            // Sort by Avg (last column) descending by default
            const avgColumnIndex = columnCount - 1;
            const avgHeader = headers[headers.length - 1];
            sortTable(table, avgColumnIndex, avgHeader, true);
        }
    });
}

function sortTable(table, columnIndex, header, isInitialSort = false) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Determine sort direction
    let ascending = true;
    if (!isInitialSort) {
        if (header.classList.contains('sorted-asc')) {
            ascending = false;
        } else if (header.classList.contains('sorted-desc')) {
            ascending = true;
        }
    } else {
        // Initial sort on Avg column should be descending
        ascending = false;
    }

    // Remove sort indicators from all headers in this table
    table.querySelectorAll('thead th').forEach(h => {
        h.classList.remove('sorted-asc', 'sorted-desc');
    });

    // Add sort indicator to current header
    header.classList.add(ascending ? 'sorted-asc' : 'sorted-desc');

    // Sort rows
    rows.sort((a, b) => {
        const aCell = a.cells[columnIndex];
        const bCell = b.cells[columnIndex];

        if (!aCell || !bCell) return 0;

        const aText = aCell.textContent.trim();
        const bText = bCell.textContent.trim();

        // Handle special cases (crashes, empty results)
        const aIsCrash = aText.includes('\\u274C') || aText.includes('\\uD83D\\uDCA5');
        const bIsCrash = bText.includes('\\u274C') || bText.includes('\\uD83D\\uDCA5');

        if (aIsCrash && bIsCrash) {
            return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
        }
        if (aText === '\\u2014' && bText === '\\u2014') return 0;

        // Crashes vs empty: crash always before empty
        if (aIsCrash && bText === '\\u2014') return -1;
        if (bIsCrash && aText === '\\u2014') return 1;

        // Crash vs normal
        if (aIsCrash) return ascending ? 1 : -1;
        if (bIsCrash) return ascending ? -1 : 1;

        // Empty vs normal
        if (aText === '\\u2014') return 1;
        if (bText === '\\u2014') return -1;

        // Try to parse as time values
        let aValue = parseTimeToMs(aText);
        let bValue = parseTimeToMs(bText);

        if (aValue !== null && bValue !== null) {
            return ascending ? aValue - bValue : bValue - aValue;
        }

        // Fall back to string comparison
        return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });

    // Re-append sorted rows
    rows.forEach(row => tbody.appendChild(row));
}

function parseTimeToMs(timeStr) {
    // Parse time strings like "1.23s", "2m 30.50s", "1h 5m 30.00s"
    let totalMs = 0;

    const hourMatch = timeStr.match(/(\\d+)h/);
    const minMatch = timeStr.match(/(\\d+)m/);
    const secMatch = timeStr.match(/([\\d.]+)s/);

    if (hourMatch) totalMs += parseInt(hourMatch[1]) * 3600000;
    if (minMatch) totalMs += parseInt(minMatch[1]) * 60000;
    if (secMatch) totalMs += parseFloat(secMatch[1]) * 1000;

    return totalMs > 0 ? totalMs : null;
}

function generateResultsSection(hardware, config, allElClients) {
    const sectionId = `section-${hardware}-${config}`.replace(/[^a-zA-Z0-9-]/g, '-');

    let html = `
        <div class="results-section">
            <h2 data-section="${sectionId}">${hardware} - ${config}</h2>
            <div class="results-section-content" id="${sectionId}">
    `;

    // Display hardware info if available (from first EL client)
    const firstElClient = Object.values(allElClients)[0];
    if (firstElClient && firstElClient.hardware_info) {
        html += generateHardwareInfo(firstElClient.hardware_info);
    }

    // Summary first, then comparison table
    html += generateSummary(allElClients);
    html += generateComparisonTable(allElClients);

    html += '</div></div>';

    return html;
}

function generateHardwareInfo(hardwareInfo) {
    let html = '<div class="hardware-info">';

    // CPU info
    if (hardwareInfo.cpu_model) {
        html += `<strong>CPU:</strong> ${hardwareInfo.cpu_model}`;
        if (hardwareInfo.total_ram_gib) {
            html += ` | <strong>RAM:</strong> ${hardwareInfo.total_ram_gib} GiB`;
        }
    }

    // GPU info
    if (hardwareInfo.gpus && hardwareInfo.gpus.length > 0) {
        const gpuModels = hardwareInfo.gpus.map(gpu => gpu.model).join(', ');
        html += ` | <strong>GPU:</strong> ${gpuModels}`;
    }

    html += '</div>';
    return html;
}

function generateComparisonTable(allElClients) {
    // Collect all zkVMs and EL clients
    const allZkVMs = new Set();
    const elClientNames = Object.keys(allElClients).sort();

    if (elClientNames.length === 0) return '';

    // Collect all zkVMs across all EL clients
    elClientNames.forEach(elClient => {
        const zkVMData = allElClients[elClient].zkvm_data;
        Object.keys(zkVMData).forEach(zkvm => allZkVMs.add(zkvm));
    });

    const zkVMs = Array.from(allZkVMs).sort();
    if (zkVMs.length === 0) return '';

    // Collect all test cases and organize results by zkVM -> EL -> test case
    const allTestCases = new Set();
    const results = {}; // zkvm -> elClient -> testCase -> result

    zkVMs.forEach(zkvm => {
        results[zkvm] = {};
        elClientNames.forEach(elClient => {
            results[zkvm][elClient] = {};
            const zkVMData = allElClients[elClient].zkvm_data[zkvm];

            if (zkVMData) {
                [...zkVMData.successful_runs, ...zkVMData.sdk_crashed_runs, ...zkVMData.prover_crashed_runs].forEach(run => {
                    allTestCases.add(run.name);
                    results[zkvm][elClient][run.name] = run;
                });
            }
        });
    });

    const testCases = Array.from(allTestCases).sort();
    const timeField = currentMode === 'proving' ? 'proving_time_ms' : 'execution_time_ms';

    // Build the table with double header
    let html = `<div class="table-container"><table><thead>`;

    // First header row: zkVM names with colspan
    html += '<tr><th rowspan="2">Test Case</th>';
    zkVMs.forEach(zkvm => {
        html += `<th colspan="${elClientNames.length}">${zkvm}</th>`;
    });
    html += '<th rowspan="2">Avg</th></tr>';

    // Second header row: EL client names (repeated for each zkVM)
    html += '<tr>';
    zkVMs.forEach(zkvm => {
        elClientNames.forEach(elClient => {
            html += `<th>${elClient}</th>`;
        });
    });
    html += '</tr>';

    // Proof size row for proving mode
    if (currentMode === 'proving') {
        html += '<tr><th>Proof Size</th>';
        zkVMs.forEach(zkvm => {
            elClientNames.forEach(elClient => {
                const zkVMData = allElClients[elClient].zkvm_data[zkvm];
                if (zkVMData) {
                    const proofSizes = zkVMData.successful_runs
                        .map(r => r.proof_size)
                        .filter(s => s && s > 0);
                    if (proofSizes.length > 0) {
                        const size = Math.max(...proofSizes);
                        html += `<td>${formatProofSize(size)}</td>`;
                    } else {
                        html += '<td>\\u2014</td>';
                    }
                } else {
                    html += '<td>\\u2014</td>';
                }
            });
        });
        html += '<td>\\u2014</td></tr>';
    }

    html += '</thead><tbody>';

    // Generate rows for each test case
    let rowsGenerated = 0;
    let rowsFiltered = 0;

    testCases.forEach(testCase => {
        const times = [];
        let hasCrash = false;
        const cells = [];

        zkVMs.forEach(zkvm => {
            elClientNames.forEach(elClient => {
                const result = results[zkvm][elClient][testCase];

                if (!result) {
                    cells.push('<td class="empty-result">\\u2014</td>');
                } else if (result.status === 'success' && result[timeField]) {
                    const time = result[timeField];
                    times.push(time);
                    cells.push(`<td>${formatTime(time)}</td>`);
                } else if (result.status === 'crashed') {
                    hasCrash = true;
                    cells.push('<td class="crash-sdk">\\u274C SDK</td>');
                } else if (result.status === 'prover_crashed') {
                    hasCrash = true;
                    cells.push('<td class="crash-prover">\\uD83D\\uDCA5 Prover</td>');
                } else {
                    hasCrash = true;
                    cells.push('<td class="crash-sdk">\\u274C Error</td>');
                }
            });
        });

        // Filter out rows without crashes if crashesOnly filter is active
        if (currentFilters.crashesOnly && !hasCrash) {
            rowsFiltered++;
            return;
        }

        const avgCell = times.length > 0
            ? (() => {
                const avg = times.reduce((a, b) => a + b, 0) / times.length;
                return `<td>${formatTime(avg)}</td>`;
              })()
            : '<td class="empty-result">\\u2014</td>';

        html += `<tr><td>${testCase}</td>${cells.join('')}${avgCell}</tr>`;
        rowsGenerated++;
    });

    console.log(`Table generated: ${rowsGenerated} rows (${rowsFiltered} filtered out, ${testCases.length} total test cases)`);

    html += '</tbody></table></div>';

    return html;
}

function generateSummary(allElClients) {
    // Collect all zkVMs across all EL clients
    const allZkVMs = new Set();
    const elClientNames = Object.keys(allElClients).sort();

    elClientNames.forEach(elClient => {
        const zkVMData = allElClients[elClient].zkvm_data;
        Object.keys(zkVMData).forEach(zkvm => allZkVMs.add(zkvm));
    });

    const zkVMs = Array.from(allZkVMs).sort();

    let html = `
        <h3>Summary</h3>
        <div class="table-container">
            <table class="summary-table">
                <thead>
                    <tr>
                        <th>zkVM</th>
                        <th>EL Client</th>
                        <th>Total</th>
                        <th>Successful</th>
                        <th>SDK Crashed</th>
    `;

    // Only show Prover Crashed column in proving mode
    if (currentMode === 'proving') {
        html += '<th>Prover Crashed</th>';
    }

    html += `
                    </tr>
                </thead>
                <tbody>
    `;

    zkVMs.forEach(zkvm => {
        let isFirstRow = true;
        const sortedElClients = elClientNames.slice().sort();

        sortedElClients.forEach(elClient => {
            const data = allElClients[elClient].zkvm_data[zkvm];

            if (data) {
                const successful = data.successful_runs.length;
                const sdkCrashed = data.sdk_crashed_runs.length;
                const proverCrashed = data.prover_crashed_runs.length;
                const total = successful + sdkCrashed + proverCrashed;

                html += '<tr>';

                // Only show zkVM name in the first row
                if (isFirstRow) {
                    html += `<td rowspan="${sortedElClients.length}" class="zkvm-cell">${zkvm}</td>`;
                    isFirstRow = false;
                }

                html += `
                        <td class="el-client-subrow">${elClient}</td>
                        <td>${total}</td>
                        <td>${successful}</td>
                        <td>${sdkCrashed}</td>
                `;

                // Only show Prover Crashed column in proving mode
                if (currentMode === 'proving') {
                    html += `<td>${proverCrashed}</td>`;
                }

                html += '</tr>';
            } else {
                // Show empty row for zkVM+EL combinations with no data
                html += '<tr>';

                if (isFirstRow) {
                    html += `<td rowspan="${sortedElClients.length}" class="zkvm-cell">${zkvm}</td>`;
                    isFirstRow = false;
                }

                html += `
                        <td class="el-client-subrow">${elClient}</td>
                        <td>\\u2014</td>
                        <td>\\u2014</td>
                        <td>\\u2014</td>
                `;

                if (currentMode === 'proving') {
                    html += '<td>\\u2014</td>';
                }

                html += '</tr>';
            }
        });
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    return html;
}

// Utility functions
function formatTime(ms) {
    const seconds = ms / 1000;

    if (seconds < 60) {
        return `${seconds.toFixed(2)}s`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds.toFixed(2)}s`;
    } else {
        const hours = Math.floor(seconds / 3600);
        const remainingMinutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours}h ${remainingMinutes}m ${remainingSeconds.toFixed(2)}s`;
    }
}

function formatProofSize(sizeBytes) {
    if (sizeBytes >= 1024 * 1024) {
        return `${(sizeBytes / (1024 * 1024)).toFixed(2)}MiB`;
    } else if (sizeBytes >= 1024) {
        return `${(sizeBytes / 1024).toFixed(2)}KiB`;
    } else {
        return `${sizeBytes}B`;
    }
}

// Update reproduce section visibility based on current tab
function updateReproduceSectionVisibility() {
    const reproduceSection = document.getElementById('reproduce-section');

    // Only show for execution mode AND non-mainnet datasets (EEST only)
    const isMainnetDataset = currentFilters.config !== 'all' && currentFilters.config.startsWith('mainnet-');

    if (currentMode === 'execution' && !isMainnetDataset) {
        reproduceSection.classList.remove('hidden');
    } else {
        reproduceSection.classList.add('hidden');
    }
}
"""

    with open(output_dir / "app.js", 'w') as f:
        f.write(app_js_content)


def generate_website(proving_path: Path, executions_path: Path, output_dir: Path):
    """Generate static HTML website for GitHub Pages.

    Args:
        proving_path: Path to the proving folder
        executions_path: Path to the executions folder
        output_dir: Path to the output directory for the website
    """
    print("Generating static HTML website...")

    # Create output directory if it doesn't exist
    output_dir.mkdir(parents=True, exist_ok=True)

    # Collect all data
    website_data = collect_website_data(proving_path, executions_path)

    # Generate HTML files
    generate_index_html(output_dir)
    generate_css(output_dir)
    generate_js(website_data, output_dir)

    print(f"✅ Website generated in {output_dir}")


def main():
    """Main function to generate the benchmarks website."""
    parser = argparse.ArgumentParser(
        description='Generate static HTML website for zkEVM benchmark results.'
    )
    parser.add_argument(
        '--output',
        type=str,
        default='dist/benchmarks',
        help='Output directory for the website (default: dist/benchmarks)'
    )

    args = parser.parse_args()

    script_dir = Path(__file__).parent
    proving_path = script_dir / "../data/proving"
    executions_path = script_dir / "../data/executions"
    output_dir = script_dir / f"../{args.output}"

    generate_website(proving_path, executions_path, output_dir)


if __name__ == "__main__":
    main()
