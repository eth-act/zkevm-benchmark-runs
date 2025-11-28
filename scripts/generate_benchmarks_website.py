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

            # Handle different structures for mainnet vs gas limit
            if config_name.startswith('mainnet-'):
                # Mainnet: config -> EL client -> zkVM
                el_client_folders = [item for item in config_folder.iterdir()
                                   if item.is_dir() and not item.name.startswith('.')]

                for el_client_folder in el_client_folders:
                    el_client_name = el_client_folder.name
                    # Hardware info is always at config level
                    el_client_data = collect_el_client_data(el_client_folder, mode, config_folder)
                    mode_data[hardware_name][config_name]['el_clients'][el_client_name] = el_client_data
            else:
                # Gas limit: config -> EL client -> [eest-benchmark] -> zkVM
                el_client_folders = [item for item in config_folder.iterdir()
                                   if item.is_dir() and not item.name.startswith('.')]

                for el_client_folder in el_client_folders:
                    el_client_name = el_client_folder.name

                    if mode == 'proving':
                        # For proving, look inside eest-benchmark folder
                        benchmark_folder = el_client_folder / "eest-benchmark"
                        if benchmark_folder.exists():
                            # Hardware info is always at config level
                            el_client_data = collect_el_client_data(benchmark_folder, mode, config_folder)
                        else:
                            el_client_data = {'hardware_info': load_hardware_info(config_folder), 'zkvm_data': {}}
                    else:
                        # For execution, zkVMs are directly under el_client_folder
                        # Hardware info is always at config level
                        el_client_data = collect_el_client_data(el_client_folder, mode, config_folder)

                    mode_data[hardware_name][config_name]['el_clients'][el_client_name] = el_client_data

    return mode_data


def compute_cycles_gas_data(execution_data: Dict[str, Any]) -> Dict[str, Any]:
    """Compute cycles/gas ratios from execution data.

    Args:
        execution_data: Execution mode data structure

    Returns:
        Dictionary with same structure but containing cycles/gas ratios instead of execution times
    """
    import copy
    cycles_gas_data = copy.deepcopy(execution_data)

    # Traverse the nested structure: hardware -> config -> el_clients -> zkVM -> results
    for hardware_name, hardware_data in cycles_gas_data.items():
        for config_name, config_data in hardware_data.items():
            for el_client_name, el_client_data in config_data.get('el_clients', {}).items():
                for zkvm_name, zkvm_data in el_client_data.get('zkvm_data', {}).items():
                    # Process successful runs
                    for run in zkvm_data.get('successful_runs', []):
                        cycles = run.get('total_num_cycles', 0)
                        gas = run.get('gas_used', 0)

                        if gas > 0 and cycles > 0:
                            # Compute cycles/gas ratio
                            run['cycles_per_gas'] = cycles / gas
                        else:
                            run['cycles_per_gas'] = 0

                    # SDK and prover crashed runs don't have cycles/gas data
                    # but we keep them to show crashes in the table

    return cycles_gas_data


def collect_website_data(proving_path: Path, executions_path: Path) -> Dict[str, Any]:
    """Collect all benchmark data for the website.

    Returns:
        Dictionary containing all benchmark data organized by mode, hardware, config, EL client, and zkVM
    """
    data = {
        'proving': {},
        'execution': {},
        'cycles-gas': {}
    }

    # Process proving data
    if proving_path.exists():
        data['proving'] = collect_mode_data(proving_path, 'proving')

    # Process execution data
    if executions_path.exists():
        data['execution'] = collect_mode_data(executions_path, 'execution')
        # Compute cycles/gas data from execution data
        data['cycles-gas'] = compute_cycles_gas_data(data['execution'])

    return data


def generate_index_html(output_dir: Path):
    """Generate the main index.html file."""
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>zkEVM Benchmark Results</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>zkEVM Benchmark Results</h1>
            <p class="subtitle">Performance comparison of zkEVM provers and executors</p>
        </header>

        <div class="tabs">
            <button class="tab-button active" data-tab="execution">Execution</button>
            <button class="tab-button" data-tab="cycles-gas">Cycles/gas</button>
            <button class="tab-button" data-tab="proving">Proving</button>
        </div>

        <div class="filters">
            <div class="filter-group">
                <label for="hardware-filter">Machine:</label>
                <select id="hardware-filter">
                    <option value="all">All</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="config-filter">Configuration:</label>
                <select id="config-filter">
                    <option value="all">All</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="el-client-filter">EL Client:</label>
                <select id="el-client-filter">
                    <option value="all">All</option>
                </select>
            </div>

            <div class="filter-group checkbox-group">
                <label>
                    <input type="checkbox" id="crashes-filter">
                    Show crashes only
                </label>
            </div>
        </div>

        <div id="reproduce-section" class="reproduce-section">
            <div class="reproduce-header" id="reproduce-header">
                <span>How to reproduce?</span>
                <span class="reproduce-toggle">▶</span>
            </div>
            <div class="reproduce-content" id="reproduce-content">
                <p>To reproduce do:</p>
                <pre><code>$ git clone git@github.com:eth-act/zkevm-benchmark-workload.git
$ cd zkevm-benchmark-workload
# Change 60M to 10M or 45M as desired.
$ RUST_LOG=info cargo run --release -p witness-generator-cli -- tests --include 60M- --include Prague --tag v5.1.0
# Change 'zisk' to any other zkvm name.
$ RUST_LOG=info cargo run --release -p ere-hosts -- --zkvms zisk stateless-validator --execution-client reth</code></pre>
            </div>
        </div>

        <div id="content">
            <div class="loading">Loading benchmark data...</div>
        </div>
    </div>

    <script src="data.js"></script>
    <script src="app.js"></script>
</body>
</html>
"""

    with open(output_dir / "index.html", 'w') as f:
        f.write(html_content)


def generate_css(output_dir: Path):
    """Generate the CSS file for the website."""
    css_content = """* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}

.container {
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #2c3e50;
}

.subtitle {
    color: #666;
    font-size: 1.1em;
}

.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab-button {
    flex: 1;
    padding: 15px 30px;
    border: none;
    background: white;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.tab-button:hover {
    background: #e8f4f8;
}

.tab-button.active {
    background: #3498db;
    color: white;
}

.filters {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    flex-wrap: wrap;
}

.filter-group {
    flex: 1;
    min-width: 200px;
}

.filter-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #555;
}

.filter-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
    background: white;
}

.filter-group.checkbox-group {
    display: flex;
    align-items: center;
    min-width: auto;
}

.filter-group.checkbox-group label {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    cursor: pointer;
    font-weight: 500;
}

.filter-group.checkbox-group input[type="checkbox"] {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.reproduce-section {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    overflow: hidden;
}

.reproduce-section.hidden {
    display: none;
}

.reproduce-header {
    padding: 10px 15px;
    background: #f8f9fa;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: #555;
    font-size: 0.95em;
}

.reproduce-header:hover {
    background: #e9ecef;
}

.reproduce-toggle {
    transition: transform 0.3s ease;
    font-size: 0.8em;
}

.reproduce-header.expanded .reproduce-toggle {
    transform: rotate(90deg);
}

.reproduce-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.reproduce-content.expanded {
    max-height: 500px;
    padding: 15px;
    border-top: 1px solid #dee2e6;
}

.reproduce-content p {
    margin-bottom: 10px;
    color: #555;
    font-size: 0.95em;
}

.reproduce-content pre {
    background: #f8f9fa;
    padding: 12px;
    border-radius: 4px;
    border-left: 3px solid #3498db;
    overflow-x: auto;
}

.reproduce-content code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9em;
    line-height: 1.4;
    color: #2c3e50;
}

#content {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.loading {
    text-align: center;
    padding: 40px;
    color: #666;
    font-size: 1.2em;
}

.results-section {
    margin-bottom: 40px;
}

.results-section h2 {
    color: #2c3e50;
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 2px solid #3498db;
    background: #f8f9fa;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.results-section h2:hover {
    background: #e9ecef;
}

.results-section h2::after {
    content: '▼';
    font-size: 0.8em;
    transition: transform 0.3s ease;
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
    color: #555;
    margin-top: 20px;
    margin-bottom: 15px;
}

.info-box {
    background: #e8f4f8;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
    border-left: 4px solid #3498db;
}

.info-box p {
    margin-bottom: 5px;
}

.hardware-info {
    background: #f8f9fa;
    padding: 12px 15px;
    border-radius: 4px;
    margin-bottom: 20px;
    border-left: 3px solid #6c757d;
    font-size: 0.95em;
}

.hardware-info strong {
    color: #495057;
}

.table-container {
    overflow-x: auto;
    margin-bottom: 30px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

table thead {
    background: #34495e;
    color: white;
}

table th {
    padding: 12px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-left: 1px solid #555;
}

table th:first-child {
    border-left: none;
    text-align: left;
}

table thead tr:first-child th {
    background: #2c3e50;
    border-bottom: 2px solid #555;
}

table thead tr:nth-child(2) th {
    background: #34495e;
    font-size: 0.9em;
}

table th:hover {
    background: #2c3e50;
}

table th.sortable::after {
    content: ' ⇅';
    font-size: 0.8em;
    opacity: 0.5;
}

table th.sorted-asc::after {
    content: ' ▲';
    opacity: 1;
}

table th.sorted-desc::after {
    content: ' ▼';
    opacity: 1;
}

table td {
    padding: 10px 12px;
    border-bottom: 1px solid #ddd;
}

table tbody tr:hover {
    background: #f8f9fa;
}

table tbody tr:nth-child(even) {
    background: #fafafa;
}

.crash-sdk {
    color: #e74c3c;
}

.crash-prover {
    color: #c0392b;
    font-weight: bold;
}

.empty-result {
    color: #999;
}

.no-results {
    text-align: center;
    padding: 40px;
    color: #666;
    font-style: italic;
}

.summary-table {
    margin-top: 30px;
}

.summary-table th {
    background: #2c3e50;
}

.summary-table .zkvm-cell {
    font-weight: 600;
    background: #f8f9fa;
    vertical-align: middle;
    border-right: 2px solid #ddd;
}

.summary-table .el-client-subrow {
    padding-left: 20px;
    font-size: 0.95em;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.notes {
    background: #fff9e6;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
    border-left: 4px solid #f39c12;
}

.notes ul {
    margin-left: 20px;
}

.notes li {
    margin-bottom: 5px;
}

@media (max-width: 768px) {
    .filters {
        flex-direction: column;
    }

    .filter-group {
        width: 100%;
    }

    .tabs {
        flex-direction: column;
    }

    table {
        font-size: 0.9em;
    }

    table th, table td {
        padding: 8px;
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

// Load filters from URL query parameters
function loadFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('mode')) {
        currentMode = params.get('mode');
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
    setupTabs();
    setupReproduceSection();
    populateFilters();
    renderResults();
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
                        // zkVM columns - we can't sort by these directly
                        // Instead, sort by the first EL client column under this zkVM
                        const elClientCount = parseInt(header.getAttribute('colspan')) || 1;
                        // Calculate which column this zkVM's first EL client is
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
        // Check crashes first, then empty results
        const aIsCrash = aText.includes('❌') || aText.includes('💥');
        const bIsCrash = bText.includes('❌') || bText.includes('💥');

        if (aIsCrash && bIsCrash) {
            // Both crashes - sort alphabetically
            return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
        }
        if (aText === '—' && bText === '—') return 0;

        // Crashes vs empty: crash always before empty
        if (aIsCrash && bText === '—') return -1;
        if (bIsCrash && aText === '—') return 1;

        // Crash vs normal: when descending, crashes at top; when ascending, crashes at bottom
        if (aIsCrash) return ascending ? 1 : -1;
        if (bIsCrash) return ascending ? -1 : 1;

        // Empty vs normal: empty always after normal
        if (aText === '—') return 1;
        if (bText === '—') return -1;

        // Try to parse as time values or cycles/gas values
        let aValue = parseTimeToMs(aText);
        let bValue = parseTimeToMs(bText);

        // If time parsing failed, try parsing as cycles/gas
        if (aValue === null) aValue = parseCyclesPerGas(aText);
        if (bValue === null) bValue = parseCyclesPerGas(bText);

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

function parseCyclesPerGas(cyclesStr) {
    // Parse cycles/gas strings like "1.23K", "45.67M", "123.45"
    const mMatch = cyclesStr.match(/([\\d.]+)M/);
    const kMatch = cyclesStr.match(/([\\d.]+)K/);
    const plainMatch = cyclesStr.match(/^([\\d.]+)$/);

    if (mMatch) {
        return parseFloat(mMatch[1]) * 1_000_000;
    } else if (kMatch) {
        return parseFloat(kMatch[1]) * 1_000;
    } else if (plainMatch) {
        return parseFloat(plainMatch[1]);
    }

    return null;
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

    // Summary first, then comparison table (for both modes)
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
    const timeField = currentMode === 'proving' ? 'proving_time_ms' :
                      currentMode === 'cycles-gas' ? 'cycles_per_gas' :
                      'execution_time_ms';

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
                        html += '<td>—</td>';
                    }
                } else {
                    html += '<td>—</td>';
                }
            });
        });
        html += '<td>—</td></tr>';
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
                    cells.push('<td class="empty-result">—</td>');
                } else if (result.status === 'success' && currentMode === 'cycles-gas' && result[timeField] === 0) {
                    // In cycles-gas mode, if cycles is 0, show em-dash instead of error
                    cells.push('<td class="empty-result">—</td>');
                } else if (result.status === 'success' && result[timeField]) {
                    const time = result[timeField];
                    times.push(time);
                    const formattedValue = currentMode === 'cycles-gas' ?
                                          formatCyclesPerGas(time) :
                                          formatTime(time);
                    cells.push(`<td>${formattedValue}</td>`);
                } else if (result.status === 'crashed') {
                    hasCrash = true;
                    cells.push('<td class="crash-sdk">❌ SDK</td>');
                } else if (result.status === 'prover_crashed') {
                    hasCrash = true;
                    cells.push('<td class="crash-prover">💥 Prover</td>');
                } else {
                    hasCrash = true;
                    cells.push('<td class="crash-sdk">❌ Error</td>');
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
                const formattedAvg = currentMode === 'cycles-gas' ?
                                    formatCyclesPerGas(avg) :
                                    formatTime(avg);
                return `<td>${formattedAvg}</td>`;
              })()
            : '<td class="empty-result">—</td>';

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
                        <th>✅ Successful</th>
                        <th>❌ SDK Crashed</th>
    `;

    // Only show Prover Crashed column in proving mode
    if (currentMode === 'proving') {
        html += '<th>💥 Prover Crashed</th>';
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
                        <td>—</td>
                        <td>—</td>
                        <td>—</td>
                `;

                if (currentMode === 'proving') {
                    html += '<td>—</td>';
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

function formatCyclesPerGas(cyclesPerGas) {
    if (cyclesPerGas >= 1_000_000) {
        return `${(cyclesPerGas / 1_000_000).toFixed(2)}M`;
    } else if (cyclesPerGas >= 1_000) {
        return `${(cyclesPerGas / 1_000).toFixed(2)}K`;
    } else {
        return cyclesPerGas.toFixed(2);
    }
}

// Setup reproduce section toggle
function setupReproduceSection() {
    const header = document.getElementById('reproduce-header');
    const content = document.getElementById('reproduce-content');

    header.addEventListener('click', () => {
        header.classList.toggle('expanded');
        content.classList.toggle('expanded');
    });
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
