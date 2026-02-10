// Current state
let currentMode = 'execution';
let currentFilters = {
    hardware: 'all',
    config: 'all',
    elClient: 'all',
    crashesOnly: false
};

// Tab information text
const TAB_INFO = {
    'execution': 'Contains execution-only runs (i.e. no proving) to detect completeness faults usually related to zkVM limits (e.g. execution length, input length, or guest program OOM). These are shown in the "SDK Crashed" column. Non-crashed execution durations aren\'t meaningful to compare proving performance.',
    'proving': 'Contains the wall-clock proving times of fixtures.'
};

// Dark mode toggle
function setupThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        document.documentElement.style.colorScheme = saved;
        toggle.textContent = saved === 'dark' ? 'Light mode' : 'Dark mode';
    }
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        document.documentElement.style.colorScheme = next;
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
        const aIsCrash = aText.includes('\u274C') || aText.includes('\uD83D\uDCA5');
        const bIsCrash = bText.includes('\u274C') || bText.includes('\uD83D\uDCA5');

        if (aIsCrash && bIsCrash) {
            return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
        }
        if (aText === '\u2014' && bText === '\u2014') return 0;

        // Crashes vs empty: crash always before empty
        if (aIsCrash && bText === '\u2014') return -1;
        if (bIsCrash && aText === '\u2014') return 1;

        // Crash vs normal
        if (aIsCrash) return ascending ? 1 : -1;
        if (bIsCrash) return ascending ? -1 : 1;

        // Empty vs normal
        if (aText === '\u2014') return 1;
        if (bText === '\u2014') return -1;

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

    const hourMatch = timeStr.match(/(\d+)h/);
    const minMatch = timeStr.match(/(\d+)m/);
    const secMatch = timeStr.match(/([\d.]+)s/);

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
                        html += '<td>\u2014</td>';
                    }
                } else {
                    html += '<td>\u2014</td>';
                }
            });
        });
        html += '<td>\u2014</td></tr>';
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
                    cells.push('<td class="empty-result">\u2014</td>');
                } else if (result.status === 'success' && result[timeField]) {
                    const time = result[timeField];
                    times.push(time);
                    cells.push(`<td>${formatTime(time)}</td>`);
                } else if (result.status === 'crashed') {
                    hasCrash = true;
                    cells.push('<td class="crash-sdk">\u274C SDK</td>');
                } else if (result.status === 'prover_crashed') {
                    hasCrash = true;
                    cells.push('<td class="crash-prover">\uD83D\uDCA5 Prover</td>');
                } else {
                    hasCrash = true;
                    cells.push('<td class="crash-sdk">\u274C Error</td>');
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
            : '<td class="empty-result">\u2014</td>';

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
                        <td>\u2014</td>
                        <td>\u2014</td>
                        <td>\u2014</td>
                `;

                if (currentMode === 'proving') {
                    html += '<td>\u2014</td>';
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
