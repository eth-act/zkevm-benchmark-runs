'use strict';

/**
 * Ethereum Proving Gas Repricing Analysis Application
 * A single-page application for analyzing zkVM proving costs.
 */

// Constants
const CONFIG = Object.freeze({
    DEFAULT_PAGE_SIZE: 50,
    DEBOUNCE_MS: 150,
    PAGE_SIZE_OPTIONS: [25, 50, 100, 250],
    THEME_KEY: 'epra-theme',
    URL_PARAMS: {
        BASELINE: 'baseline',
        ZKVM_VIEW: 'view',
        SEARCH: 'q',
        HIDE_CRASHED: 'hideCrashed',
        OPERATIONS: 'ops',
        SORT_COLUMN: 'sort',
        SORT_DIR: 'dir',
        PAGE: 'page',
        PAGE_SIZE: 'pageSize',
        MIN_RELATIVE: 'minRel',
    },
});

const STATUS = Object.freeze({
    SUCCESS: 'success',
});

const VIEW = Object.freeze({
    WORST: 'worst',
    ALL: 'all',
});

const CATEGORY_ORDER = ['Opcode', 'Precompile', 'Other'];

/**
 * Escapes HTML special characters to prevent XSS.
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 */
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}

/**
 * Creates a debounced version of a function.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The debounce delay in milliseconds.
 * @returns {Function} The debounced function.
 */
function debounce(func, wait) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Main application class that encapsulates all state and logic.
 */
class BenchmarkApp {
    constructor() {
        // Data state
        this.data = null;
        this.filteredTests = [];
        this.sortedTests = [];
        this.initialized = false;

        // UI state
        this.sortColumn = 'name';
        this.sortDirection = 'asc';
        this.selectedOperations = new Set();
        this.selectedZkvmView = VIEW.WORST;
        this.baselineTestId = null;
        this.minRelativeCost = null; // null means no filter
        this.expandedRows = new Set();

        // Pagination state
        this.currentPage = 1;
        this.pageSize = CONFIG.DEFAULT_PAGE_SIZE;

        // Caches
        this.worstCaseCache = new Map();
        this.worstCaseZkvmCache = new Map();
        this.relativeCostCache = new Map();

        // DOM element references (populated in init)
        this.elements = {};
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Formatting Utilities
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Formats milliseconds into a human-readable time string.
     * @param {number|null} ms - Time in milliseconds.
     * @returns {string} Formatted time string.
     */
    formatTime(ms) {
        if (ms === null || ms === undefined) return '-';
        if (ms < 1000) return `${ms}ms`;
        if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
        const mins = Math.floor(ms / 60000);
        const secs = ((ms % 60000) / 1000).toFixed(0);
        return `${mins}m ${secs}s`;
    }

    /**
     * Formats gas throughput.
     * @param {number} gasUsed - Gas used.
     * @param {number} timeMs - Time in milliseconds.
     * @returns {string} Formatted throughput string.
     */
    formatThroughput(gasUsed, timeMs) {
        if (!gasUsed || !timeMs) return '-';
        const gasPerSecond = (gasUsed * 1000) / timeMs;
        if (gasPerSecond >= 1_000_000) return `${(gasPerSecond / 1_000_000).toFixed(2)}M gas/s`;
        if (gasPerSecond >= 1_000) return `${(gasPerSecond / 1_000).toFixed(2)}K gas/s`;
        return `${gasPerSecond.toFixed(2)} gas/s`;
    }

    /**
     * Formats relative cost as a multiplier string.
     * @param {number|null} cost - The relative cost value.
     * @returns {string} Formatted cost string.
     */
    formatRelativeCost(cost) {
        if (cost === null || cost === undefined) return '-';
        return cost.toFixed(2) + 'x';
    }

    /**
     * Gets the CSS class for a relative cost value.
     * @param {number|null} cost - The relative cost value.
     * @returns {string} CSS class name.
     */
    getRelativeClass(cost) {
        if (cost === null || cost === undefined) return '';
        if (cost < 1.5) return 'relative-low';
        if (cost < 3.0) return 'relative-moderate';
        if (cost < 10.0) return 'relative-high';
        return 'relative-extreme';
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Data Access Methods
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Gets the proving time for a test on a specific zkVM.
     * @param {Object} test - The test object.
     * @param {string} zkvm - The zkVM identifier.
     * @returns {number|null} Proving time in ms or null.
     */
    getProvingTime(test, zkvm) {
        const result = test.results[zkvm];
        if (!result || result.status !== STATUS.SUCCESS) return null;
        return result.proving_time_ms;
    }

    /**
     * Gets the worst-case proving time across all zkVMs.
     * @param {Object} test - The test object.
     * @returns {number|null} Worst-case time in ms or null.
     */
    getWorstCaseTime(test) {
        if (this.worstCaseCache.has(test.id)) {
            return this.worstCaseCache.get(test.id);
        }

        let maxTime = null;
        let worstZkvm = null;

        for (const zkvm of this.data.zkvms) {
            const time = this.getProvingTime(test, zkvm);
            if (time !== null && (maxTime === null || time > maxTime)) {
                maxTime = time;
                worstZkvm = zkvm;
            }
        }

        this.worstCaseCache.set(test.id, maxTime);
        this.worstCaseZkvmCache.set(test.id, worstZkvm);
        return maxTime;
    }

    /**
     * Gets which zkVM had the worst-case time for a test.
     * @param {Object} test - The test object.
     * @returns {string|null} The zkVM identifier or null.
     */
    getWorstCaseZkvm(test) {
        if (!this.worstCaseZkvmCache.has(test.id)) {
            this.getWorstCaseTime(test);
        }
        return this.worstCaseZkvmCache.get(test.id);
    }

    /**
     * Gets the baseline time for a zkVM view.
     * @param {string} zkvm - The zkVM identifier or 'worst'.
     * @returns {number|null} Baseline time in ms or null.
     */
    getBaselineTime(zkvm) {
        if (!this.baselineTestId) return null;
        const baselineTest = this.data.tests.find(t => t.id === this.baselineTestId);
        if (!baselineTest) return null;
        if (zkvm === VIEW.WORST) return this.getWorstCaseTime(baselineTest);
        return this.getProvingTime(baselineTest, zkvm);
    }

    /**
     * Gets the relative cost of a test compared to baseline.
     * @param {Object} test - The test object.
     * @param {string} zkvm - The zkVM identifier or 'worst'.
     * @returns {number|null} Relative cost or null.
     */
    getRelativeCost(test, zkvm) {
        const cacheKey = `${test.id}-${zkvm}-${this.baselineTestId}`;
        if (this.relativeCostCache.has(cacheKey)) {
            return this.relativeCostCache.get(cacheKey);
        }

        const baselineTime = this.getBaselineTime(zkvm);
        if (!baselineTime) return null;

        const testTime = zkvm === VIEW.WORST
            ? this.getWorstCaseTime(test)
            : this.getProvingTime(test, zkvm);

        if (!testTime) return null;

        const cost = testTime / baselineTime;
        this.relativeCostCache.set(cacheKey, cost);
        return cost;
    }

    /**
     * Clears the relative cost cache (needed when baseline changes).
     */
    clearRelativeCostCache() {
        this.relativeCostCache.clear();
    }

    /**
     * Checks if all zkVMs crashed for a test.
     * @param {Object} test - The test object.
     * @returns {boolean} True if all crashed.
     */
    isAllCrashed(test) {
        return this.data.zkvms.every(zkvm => {
            const result = test.results[zkvm];
            return !result || result.status !== STATUS.SUCCESS;
        });
    }

    /**
     * Checks if any zkVM succeeded for a test.
     * @param {Object} test - The test object.
     * @returns {boolean} True if any succeeded.
     */
    anySuccess(test) {
        return this.data.zkvms.some(zkvm => {
            const result = test.results[zkvm];
            return result && result.status === STATUS.SUCCESS;
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Filtering and Sorting
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Filters tests based on current filter settings.
     */
    filterTests() {
        const searchTerm = this.elements.search.value.toLowerCase();
        const hideCrashed = this.elements.hideCrashed.checked;
        const activeZkvm = this.selectedZkvmView === VIEW.ALL ? VIEW.WORST : this.selectedZkvmView;

        this.filteredTests = this.data.tests.filter(test => {
            if (!this.selectedOperations.has(test.operation)) return false;
            if (hideCrashed && this.isAllCrashed(test)) return false;
            if (searchTerm) {
                const searchStr = `${test.name} ${test.operation} ${test.id}`.toLowerCase();
                if (!searchStr.includes(searchTerm)) return false;
            }
            // Min relative cost filter
            if (this.minRelativeCost !== null) {
                const relativeCost = this.getRelativeCost(test, activeZkvm);
                if (relativeCost === null || relativeCost < this.minRelativeCost) return false;
            }
            return true;
        });
    }

    /**
     * Sorts the filtered tests based on current sort settings.
     */
    sortTests() {
        this.sortedTests = [...this.filteredTests].sort((a, b) => {
            let valA, valB;

            switch (this.sortColumn) {
                case 'name':
                    valA = a.name;
                    valB = b.name;
                    break;
                case 'operation':
                    valA = a.operation;
                    valB = b.operation;
                    break;
                case 'worst-time':
                    valA = this.getWorstCaseTime(a) ?? Infinity;
                    valB = this.getWorstCaseTime(b) ?? Infinity;
                    break;
                case 'worst-relative':
                    valA = this.getRelativeCost(a, VIEW.WORST) ?? Infinity;
                    valB = this.getRelativeCost(b, VIEW.WORST) ?? Infinity;
                    break;
                default:
                    if (this.sortColumn.endsWith('-time')) {
                        const zkvm = this.sortColumn.replace('-time', '');
                        valA = this.getProvingTime(a, zkvm) ?? Infinity;
                        valB = this.getProvingTime(b, zkvm) ?? Infinity;
                    } else if (this.sortColumn.endsWith('-relative')) {
                        const zkvm = this.sortColumn.replace('-relative', '');
                        valA = this.getRelativeCost(a, zkvm) ?? Infinity;
                        valB = this.getRelativeCost(b, zkvm) ?? Infinity;
                    }
            }

            if (typeof valA === 'string') {
                const cmp = valA.localeCompare(valB);
                return this.sortDirection === 'asc' ? cmp : -cmp;
            }
            return this.sortDirection === 'asc' ? valA - valB : valB - valA;
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Rendering Methods
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Renders the baseline information panel.
     */
    renderBaselineInfo() {
        const container = this.elements.baselineInfo;

        if (!this.baselineTestId) {
            container.innerHTML = '<p class="text-secondary">No baseline selected</p>';
            return;
        }

        const baselineTest = this.data.tests.find(t => t.id === this.baselineTestId);
        if (!baselineTest) {
            container.innerHTML = '<p class="text-secondary">Baseline test not found</p>';
            return;
        }

        const parts = [
            '<h2>Selected Baseline</h2>',
            '<div class="baseline-details">',
            `<div class="baseline-item operation">
                <div class="label">Operation</div>
                <div class="value">${escapeHtml(baselineTest.operation)}</div>
                <div class="subtext">${escapeHtml(baselineTest.name)}</div>
            </div>`,
            `<div class="baseline-item">
                <div class="label">Gas Used</div>
                <div class="value">${baselineTest.block_used_gas ? (baselineTest.block_used_gas / 1000000).toFixed(1) + 'M' : '-'}</div>
            </div>`,
        ];

        // Add proving time for each zkVM
        for (const zkvm of this.data.zkvms) {
            const result = baselineTest.results[zkvm];
            if (result?.status === STATUS.SUCCESS) {
                const throughput = this.formatThroughput(baselineTest.block_used_gas, result.proving_time_ms);
                parts.push(`
                    <div class="baseline-item">
                        <div class="label">${escapeHtml(zkvm)}</div>
                        <div class="value success">${this.formatTime(result.proving_time_ms)}</div>
                        <div class="subtext">${result.proving_time_ms.toLocaleString()}ms${throughput !== '-' ? ` · ${throughput}` : ''}</div>
                    </div>
                `);
            } else {
                parts.push(`
                    <div class="baseline-item">
                        <div class="label">${escapeHtml(zkvm)}</div>
                        <div class="value crashed">CRASHED</div>
                    </div>
                `);
            }
        }

        // Add worst case time
        const worstTime = this.getWorstCaseTime(baselineTest);
        const worstThroughput = baselineTest.block_used_gas && worstTime
            ? this.formatThroughput(baselineTest.block_used_gas, worstTime)
            : '-';

        parts.push(`
            <div class="baseline-item">
                <div class="label">Worst Case</div>
                <div class="value ${worstTime !== null ? 'success' : 'crashed'}">${worstTime !== null ? this.formatTime(worstTime) : 'N/A'}</div>
                ${worstTime !== null ? `<div class="subtext">${worstTime.toLocaleString()}ms${worstThroughput !== '-' ? ` · ${worstThroughput}` : ''}</div>` : ''}
            </div>
        `);

        parts.push('</div>');
        container.innerHTML = parts.join('');
    }

    /**
     * Renders a single zkVM cell for the table.
     * @param {Object} test - The test object.
     * @param {string} zkvm - The zkVM identifier.
     * @returns {string} HTML string for the cell.
     */
    renderZkvmCell(test, zkvm) {
        const result = test.results[zkvm];
        if (result?.status === STATUS.SUCCESS) {
            const time = result.proving_time_ms;
            const relative = this.getRelativeCost(test, zkvm);
            return `<td class="status-success">${this.formatTime(time)}</td><td class="${this.getRelativeClass(relative)}">${this.formatRelativeCost(relative)}</td>`;
        }
        return '<td class="status-crashed">CRASHED</td><td class="status-crashed">-</td>';
    }

    /**
     * Renders the worst-case cell for the table.
     * @param {Object} test - The test object.
     * @returns {string} HTML string for the cell.
     */
    renderWorstCaseCell(test) {
        const time = this.getWorstCaseTime(test);
        const relative = this.getRelativeCost(test, VIEW.WORST);
        const worstZkvm = this.getWorstCaseZkvm(test);

        if (time !== null) {
            return `<td class="status-success">${this.formatTime(time)} <span class="worst-zkvm-badge">${escapeHtml(worstZkvm)}</span></td><td class="${this.getRelativeClass(relative)}">${this.formatRelativeCost(relative)}</td>`;
        }
        return '<td class="status-crashed">ALL CRASHED</td><td class="status-crashed">-</td>';
    }

    /**
     * Gets the sort class for a column header.
     * @param {string} column - The column identifier.
     * @returns {string} CSS class string.
     */
    getSortClass(column) {
        if (this.sortColumn !== column) return '';
        return this.sortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc';
    }

    /**
     * Renders the data table.
     */
    renderTable() {
        const thead = this.elements.tableHeader;
        const tbody = this.elements.tableBody;
        // Update count
        this.elements.tableCount.textContent = `(${this.sortedTests.length} tests)`;

        // Build header
        const headerParts = [
            `<th data-sort="operation" class="${this.getSortClass('operation')}">Operation</th>`,
            `<th data-sort="name" class="${this.getSortClass('name')}">Test Name</th>`,
        ];

        if (this.selectedZkvmView === VIEW.ALL) {
            for (const zkvm of this.data.zkvms) {
                headerParts.push(
                    `<th data-sort="${zkvm}-time" class="${this.getSortClass(zkvm + '-time')}">${escapeHtml(zkvm)} Time</th>`,
                    `<th data-sort="${zkvm}-relative" class="${this.getSortClass(zkvm + '-relative')}">${escapeHtml(zkvm)} Rel.</th>`
                );
            }
        } else if (this.selectedZkvmView === VIEW.WORST) {
            headerParts.push(
                `<th data-sort="worst-time" class="${this.getSortClass('worst-time')}">Worst Case Time</th>`,
                `<th data-sort="worst-relative" class="${this.getSortClass('worst-relative')}">Relative Cost</th>`
            );
        } else {
            headerParts.push(
                `<th data-sort="${this.selectedZkvmView}-time" class="${this.getSortClass(this.selectedZkvmView + '-time')}">${escapeHtml(this.selectedZkvmView)} Time</th>`,
                `<th data-sort="${this.selectedZkvmView}-relative" class="${this.getSortClass(this.selectedZkvmView + '-relative')}">Relative Cost</th>`
            );
        }

        headerParts.push('<th>Test ID</th>');
        thead.innerHTML = headerParts.join('');

        // Add sort handlers
        thead.querySelectorAll('th[data-sort]').forEach(th => {
            th.addEventListener('click', () => this.handleSort(th.dataset.sort));
        });

        // Pagination
        const totalPages = Math.ceil(this.sortedTests.length / this.pageSize);
        if (this.currentPage > totalPages) {
            this.currentPage = Math.max(1, totalPages);
        }

        const startIdx = (this.currentPage - 1) * this.pageSize;
        const endIdx = Math.min(startIdx + this.pageSize, this.sortedTests.length);
        const pageTests = this.sortedTests.slice(startIdx, endIdx);

        // Build body
        const rows = pageTests.map(test => {
            const isExpanded = this.expandedRows.has(test.id);
            const rowParts = [
                `<td><span class="category-badge">${escapeHtml(test.operation)}</span></td>`,
                `<td class="expandable-cell" data-test-id="${escapeHtml(test.id)}">
                    <span class="expand-icon">${isExpanded ? '▼' : '▶'}</span>
                    ${escapeHtml(test.name)}
                </td>`,
            ];

            if (this.selectedZkvmView === VIEW.ALL) {
                for (const zkvm of this.data.zkvms) {
                    rowParts.push(this.renderZkvmCell(test, zkvm));
                }
            } else if (this.selectedZkvmView === VIEW.WORST) {
                rowParts.push(this.renderWorstCaseCell(test));
            } else {
                rowParts.push(this.renderZkvmCell(test, this.selectedZkvmView));
            }

            rowParts.push(`<td class="test-name" title="${escapeHtml(test.id)}">${escapeHtml(test.id)}</td>`);

            let html = `<tr class="data-row ${isExpanded ? 'expanded' : ''}" data-test-id="${escapeHtml(test.id)}">${rowParts.join('')}</tr>`;

            // Add expanded details row
            if (isExpanded) {
                html += this.renderExpandedRow(test);
            }

            return html;
        });

        tbody.innerHTML = rows.join('');

        // Add click handlers for row expansion
        tbody.querySelectorAll('.expandable-cell').forEach(cell => {
            cell.addEventListener('click', () => {
                const testId = cell.dataset.testId;
                this.toggleRowExpansion(testId);
            });
        });

        // Render pagination
        this.renderPagination(totalPages);
    }

    /**
     * Renders expanded row details for a single test.
     * @param {Object} test - Test object.
     * @returns {string} HTML string.
     */
    renderExpandedRow(test) {
        const colSpan = this.selectedZkvmView === VIEW.ALL
            ? 3 + this.data.zkvms.length * 2
            : 5;

        const details = [];
        details.push(`<strong>Test ID:</strong> ${escapeHtml(test.id)}`);
        details.push(`<strong>Gas Used:</strong> ${test.block_used_gas ? (test.block_used_gas / 1_000_000).toFixed(2) + 'M' : '-'}`);

        // Show all zkVM results
        details.push('<div class="expanded-zkvms">');
        for (const zkvm of this.data.zkvms) {
            const result = test.results[zkvm];
            if (result?.status === STATUS.SUCCESS) {
                const throughput = this.formatThroughput(test.block_used_gas, result.proving_time_ms);
                details.push(`<div class="zkvm-detail"><strong>${escapeHtml(zkvm)}:</strong> ${this.formatTime(result.proving_time_ms)} (${throughput})</div>`);
            } else {
                const reason = result?.crash_reason || 'Unknown';
                details.push(`<div class="zkvm-detail crashed"><strong>${escapeHtml(zkvm)}:</strong> CRASHED - ${escapeHtml(reason)}</div>`);
            }
        }
        details.push('</div>');

        return `<tr class="expanded-row"><td colspan="${colSpan}"><div class="expanded-content">${details.join('')}</div></td></tr>`;
    }

    /**
     * Toggles row expansion.
     * @param {string} id - Row identifier.
     */
    toggleRowExpansion(id) {
        if (this.expandedRows.has(id)) {
            this.expandedRows.delete(id);
        } else {
            this.expandedRows.add(id);
        }
        this.renderTable();
    }

    /**
     * Renders pagination controls.
     * @param {number} totalPages - Total number of pages.
     */
    renderPagination(totalPages) {
        if (totalPages <= 1) {
            this.elements.paginationTop.innerHTML = '';
            this.elements.paginationBottom.innerHTML = '';
            return;
        }

        const pageSizeOptions = CONFIG.PAGE_SIZE_OPTIONS
            .map(size => `<option value="${size}" ${this.pageSize === size ? 'selected' : ''}>${size} per page</option>`)
            .join('');

        const html = `
            <button data-page="1" aria-label="First page" ${this.currentPage === 1 ? 'disabled' : ''}>First</button>
            <button data-page="${this.currentPage - 1}" aria-label="Previous page" ${this.currentPage === 1 ? 'disabled' : ''}>Prev</button>
            <span class="page-info">Page ${this.currentPage} of ${totalPages}</span>
            <button data-page="${this.currentPage + 1}" aria-label="Next page" ${this.currentPage === totalPages ? 'disabled' : ''}>Next</button>
            <button data-page="${totalPages}" aria-label="Last page" ${this.currentPage === totalPages ? 'disabled' : ''}>Last</button>
            <select aria-label="Rows per page" data-action="page-size">${pageSizeOptions}</select>
        `;

        this.elements.paginationTop.innerHTML = html;
        this.elements.paginationBottom.innerHTML = html;

        // Add event listeners
        [this.elements.paginationTop, this.elements.paginationBottom].forEach(container => {
            container.querySelectorAll('button[data-page]').forEach(btn => {
                btn.addEventListener('click', () => this.goToPage(parseInt(btn.dataset.page, 10)));
            });
            const select = container.querySelector('select[data-action="page-size"]');
            if (select) {
                select.addEventListener('change', (e) => this.changePageSize(parseInt(e.target.value, 10)));
            }
        });
    }

    /**
     * Updates the statistics panel.
     */
    updateStats() {
        const statsPanel = this.elements.statsPanel;
        const totalTests = this.filteredTests.length;
        const zkvmStats = {};

        for (const zkvm of this.data.zkvms) {
            zkvmStats[zkvm] = { success: 0, crashed: 0 };
        }

        for (const test of this.filteredTests) {
            for (const zkvm of this.data.zkvms) {
                const result = test.results[zkvm];
                if (result?.status === STATUS.SUCCESS) {
                    zkvmStats[zkvm].success++;
                } else {
                    zkvmStats[zkvm].crashed++;
                }
            }
        }

        // Find top expensive operations
        const activeZkvm = this.selectedZkvmView === VIEW.ALL ? VIEW.WORST : this.selectedZkvmView;
        const withRelativeCost = [];

        for (const t of this.filteredTests) {
            const rc = this.getRelativeCost(t, activeZkvm);
            if (rc !== null) {
                withRelativeCost.push({
                    name: t.name,
                    operation: t.operation,
                    relativeCost: rc,
                });
            }
        }

        withRelativeCost.sort((a, b) => b.relativeCost - a.relativeCost);

        const topExpensive = withRelativeCost.slice(0, 5);
        const topCheap = withRelativeCost.slice(-5).reverse();

        const formatTopItem = (t) => `
            <li>
                <div class="top-text">
                    <div class="top-title" title="${escapeHtml(t.name)}">${escapeHtml(t.name)}</div>
                    <div class="top-sub" title="${escapeHtml(t.operation)}">${escapeHtml(t.operation)}</div>
                </div>
                <span class="${this.getRelativeClass(t.relativeCost)}">${this.formatRelativeCost(t.relativeCost)}</span>
            </li>
        `;

        const statsParts = [
            `<div class="stat-card">
                <h3>Total Tests (Filtered)</h3>
                <div class="value">${totalTests}</div>
                <div class="detail">out of ${this.data.tests.length} total</div>
            </div>`,
        ];

        for (const zkvm of this.data.zkvms) {
            const stats = zkvmStats[zkvm];
            const successRate = totalTests > 0 ? ((stats.success / totalTests) * 100).toFixed(1) : 0;
            statsParts.push(`
                <div class="stat-card ${stats.success > stats.crashed ? 'success' : 'error'}">
                    <h3>${escapeHtml(zkvm)}</h3>
                    <div class="value">${successRate}%</div>
                    <div class="detail">${stats.success} success, ${stats.crashed} crashed</div>
                </div>
            `);
        }

        statsParts.push(`
            <div class="stat-card warning">
                <h3>Most Expensive (Top 5)</h3>
                <ul class="top-list">${topExpensive.map(formatTopItem).join('')}</ul>
            </div>
            <div class="stat-card success">
                <h3>Least Expensive (Top 5)</h3>
                <ul class="top-list">${topCheap.map(formatTopItem).join('')}</ul>
            </div>
        `);

        statsPanel.innerHTML = statsParts.join('');
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Event Handlers
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Handles column sort clicks.
     * @param {string} column - The column to sort by.
     */
    handleSort(column) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }
        this.sortTests();
        this.renderTable();
        this.updateURL();
    }

    /**
     * Navigates to a specific page.
     * @param {number} page - The page number.
     */
    goToPage(page) {
        this.currentPage = page;
        this.renderTable();
        this.elements.resultsTable.scrollIntoView({ behavior: 'smooth' });
        this.updateURL();
    }

    /**
     * Changes the page size.
     * @param {number} size - The new page size.
     */
    changePageSize(size) {
        this.pageSize = size;
        this.currentPage = 1;
        this.renderTable();
        this.updateURL();
    }

    /**
     * Handles baseline selection change.
     * @param {string} testId - The selected test ID.
     */
    handleBaselineChange(testId) {
        this.baselineTestId = testId;
        this.clearRelativeCostCache();
        this.renderBaselineInfo();
        this.sortTests();
        this.renderTable();
        this.updateStats();
        this.updateURL();
    }

    /**
     * Handles zkVM view change.
     * @param {string} view - The selected view.
     */
    handleZkvmViewChange(view) {
        this.selectedZkvmView = view;
        this.sortTests();
        this.renderTable();
        this.updateStats();
        this.updateURL();
    }

    /**
     * Handles search input.
     */
    handleSearch() {
        this.currentPage = 1;
        this.filterTests();
        this.sortTests();
        this.renderTable();
        this.updateStats();
        this.updateURL();
    }

    /**
     * Handles hide crashed checkbox change.
     */
    handleHideCrashedChange() {
        this.currentPage = 1;
        this.filterTests();
        this.sortTests();
        this.renderTable();
        this.updateStats();
        this.updateURL();
    }

    /**
     * Handles minimum relative cost filter.
     * @param {number|null} minCost - Minimum relative cost or null to disable.
     */
    handleMinRelativeCostChange(minCost) {
        this.minRelativeCost = minCost;
        this.currentPage = 1;
        this.filterTests();
        this.sortTests();
        this.renderTable();
        this.updateStats();
        this.updateURL();
        this.updateQuickFilterButtons();
    }

    /**
     * Handles quick category filter (Opcodes only, Precompiles only, etc.).
     * @param {string|null} category - Category to filter or null for all.
     */
    handleCategoryFilter(category) {
        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        if (category === null) {
            // Select all
            this.selectedOperations = new Set(allOps);
        } else {
            // Select only operations in the specified category
            const categoryOps = this.data.operations_by_category?.[category] || [];
            this.selectedOperations = new Set(categoryOps);
        }

        // Update checkboxes
        this.elements.operationFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = this.selectedOperations.has(cb.value);
        });

        this.currentPage = 1;
        this.filterTests();
        this.sortTests();
        this.renderTable();
        this.updateStats();
        this.updateURL();
        this.updateQuickFilterButtons();
    }

    /**
     * Updates the visual state of quick filter buttons.
     */
    updateQuickFilterButtons() {
        // Update min relative cost buttons
        const minRelBtns = document.querySelectorAll('[data-min-rel]');
        minRelBtns.forEach(btn => {
            const val = btn.dataset.minRel === '' ? null : parseFloat(btn.dataset.minRel);
            btn.classList.toggle('active', this.minRelativeCost === val);
        });

        // Update category filter buttons
        const catBtns = document.querySelectorAll('[data-category]');
        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        catBtns.forEach(btn => {
            const cat = btn.dataset.category;
            let isActive = false;

            if (cat === 'all') {
                isActive = this.selectedOperations.size === allOps.length;
            } else {
                const categoryOps = this.data.operations_by_category?.[cat] || [];
                isActive = categoryOps.length > 0 &&
                    categoryOps.every(op => this.selectedOperations.has(op)) &&
                    this.selectedOperations.size === categoryOps.length;
            }

            btn.classList.toggle('active', isActive);
        });
    }

    /**
     * Handles operation filter change.
     * @param {string} operation - The operation name.
     * @param {boolean} checked - Whether it's checked.
     */
    handleOperationFilterChange(operation, checked) {
        if (checked) {
            this.selectedOperations.add(operation);
        } else {
            this.selectedOperations.delete(operation);
        }
        this.currentPage = 1;
        this.filterTests();
        this.sortTests();
        this.renderTable();
        this.updateStats();
    }

    /**
     * Selects all operations.
     */
    selectAllOperations() {
        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        this.selectedOperations = new Set(allOps);

        this.elements.operationFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
            cb.indeterminate = false;
        });

        this.currentPage = 1;
        this.filterTests();
        this.sortTests();
        this.renderTable();
        this.updateStats();
    }

    /**
     * Clears all operation selections.
     */
    clearAllOperations() {
        this.selectedOperations.clear();

        this.elements.operationFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
            cb.indeterminate = false;
        });

        this.currentPage = 1;
        this.filterTests();
        this.sortTests();
        this.renderTable();
        this.updateStats();
    }

    // ─────────────────────────────────────────────────────────────────────────
    // URL State Management
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Serializes current state to URL query parameters.
     */
    serializeStateToURL() {
        const params = new URLSearchParams();
        const P = CONFIG.URL_PARAMS;

        if (this.baselineTestId) params.set(P.BASELINE, this.baselineTestId);
        if (this.selectedZkvmView !== VIEW.WORST) params.set(P.ZKVM_VIEW, this.selectedZkvmView);
        if (this.elements.search?.value) params.set(P.SEARCH, this.elements.search.value);
        if (this.elements.hideCrashed?.checked) params.set(P.HIDE_CRASHED, '1');
        if (this.sortColumn !== 'name') params.set(P.SORT_COLUMN, this.sortColumn);
        if (this.sortDirection !== 'asc') params.set(P.SORT_DIR, this.sortDirection);
        if (this.currentPage !== 1) params.set(P.PAGE, this.currentPage.toString());
        if (this.pageSize !== CONFIG.DEFAULT_PAGE_SIZE) params.set(P.PAGE_SIZE, this.pageSize.toString());
        if (this.minRelativeCost !== null) params.set(P.MIN_RELATIVE, this.minRelativeCost.toString());

        // Only serialize operations if not all are selected
        const allOps = this.data?.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : (this.data?.operations || []);

        if (this.selectedOperations.size !== allOps.length && this.selectedOperations.size > 0) {
            params.set(P.OPERATIONS, Array.from(this.selectedOperations).join(','));
        }

        const queryString = params.toString();
        const newURL = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;

        window.history.replaceState(null, '', newURL);
    }

    /**
     * Parses URL query parameters and returns state object.
     * @returns {Object} Parsed state from URL.
     */
    parseStateFromURL() {
        const params = new URLSearchParams(window.location.search);
        const P = CONFIG.URL_PARAMS;

        return {
            baseline: params.get(P.BASELINE),
            zkvmView: params.get(P.ZKVM_VIEW),
            search: params.get(P.SEARCH),
            hideCrashed: params.get(P.HIDE_CRASHED) === '1',
            operations: params.get(P.OPERATIONS)?.split(',').filter(Boolean),
            sortColumn: params.get(P.SORT_COLUMN),
            sortDirection: params.get(P.SORT_DIR),
            page: parseInt(params.get(P.PAGE), 10) || null,
            pageSize: parseInt(params.get(P.PAGE_SIZE), 10) || null,
            minRelative: parseFloat(params.get(P.MIN_RELATIVE)) || null,
        };
    }

    /**
     * Applies parsed URL state to the application.
     * @param {Object} urlState - State object from parseStateFromURL.
     */
    applyURLState(urlState) {
        if (urlState.baseline) this.baselineTestId = urlState.baseline;
        if (urlState.zkvmView) this.selectedZkvmView = urlState.zkvmView;
        if (urlState.sortColumn) this.sortColumn = urlState.sortColumn;
        if (urlState.sortDirection) this.sortDirection = urlState.sortDirection;
        if (urlState.page) this.currentPage = urlState.page;
        if (urlState.pageSize && CONFIG.PAGE_SIZE_OPTIONS.includes(urlState.pageSize)) {
            this.pageSize = urlState.pageSize;
        }
        if (urlState.minRelative) this.minRelativeCost = urlState.minRelative;

        // Operations are applied after initialization when data is loaded
        this._pendingURLOperations = urlState.operations;
        this._pendingURLSearch = urlState.search;
        this._pendingURLHideCrashed = urlState.hideCrashed;
    }

    /**
     * Updates URL when state changes (debounced).
     */
    updateURL() {
        if (this.initialized) {
            this.serializeStateToURL();
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Theme Management
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Applies a theme.
     * @param {string} theme - 'dark' or 'light'.
     */
    applyTheme(theme) {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;

        if (this.elements.themeToggle) {
            this.elements.themeToggle.textContent = theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode';
        }

        localStorage.setItem(CONFIG.THEME_KEY, theme);
    }

    /**
     * Toggles between light and dark themes.
     */
    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        this.applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Initialization
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Caches DOM element references.
     */
    cacheElements() {
        this.elements = {
            loading: document.getElementById('loading'),
            error: document.getElementById('error'),
            app: document.getElementById('app'),
            baseline: document.getElementById('baseline'),
            zkvmView: document.getElementById('zkvm-view'),
            search: document.getElementById('search'),
            hideCrashed: document.getElementById('hide-crashed'),
            statsPanel: document.getElementById('stats-panel'),
            baselineInfo: document.getElementById('baseline-info'),
            operationFilters: document.getElementById('operation-filters'),
            tableHeader: document.getElementById('table-header'),
            tableBody: document.getElementById('table-body'),
            tableCount: document.getElementById('table-count'),
            resultsTable: document.getElementById('results-table'),
            paginationTop: document.getElementById('pagination-top'),
            paginationBottom: document.getElementById('pagination-bottom'),
            themeToggle: document.getElementById('theme-toggle'),
            generatedAt: document.getElementById('generated-at'),
            hardwareInfo: document.getElementById('hardware-info'),
            selectAllOpsBtn: document.getElementById('select-all-ops-btn'),
            clearAllOpsBtn: document.getElementById('clear-all-ops-btn'),
            quickFilters: document.getElementById('quick-filters'),
        };
    }

    /**
     * Initializes the baseline selector control.
     */
    initializeBaselineSelector() {
        const select = this.elements.baseline;
        const successfulTests = this.data.tests.filter(t => this.anySuccess(t));

        // Find default baseline (first ADD operation or first successful test)
        const defaultBaseline = successfulTests.find(t => t.operation === 'ADD') || successfulTests[0];
        this.baselineTestId = defaultBaseline?.id;

        for (const test of successfulTests) {
            const option = document.createElement('option');
            option.value = test.id;
            option.textContent = `${test.operation} - ${test.name}`;
            if (test.id === this.baselineTestId) option.selected = true;
            select.appendChild(option);
        }

        select.addEventListener('change', (e) => this.handleBaselineChange(e.target.value));
    }

    /**
     * Initializes the zkVM view radio buttons.
     */
    initializeZkvmViewSelector() {
        const container = this.elements.zkvmView;
        const views = [
            { value: VIEW.WORST, label: 'Worst Case' },
            ...this.data.zkvms.map(zkvm => ({ value: zkvm, label: zkvm })),
            { value: VIEW.ALL, label: 'All' },
        ];

        for (const view of views) {
            const label = document.createElement('label');
            label.className = 'radio-item';
            label.innerHTML = `
                <input type="radio" name="zkvm-view" value="${escapeHtml(view.value)}" ${view.value === VIEW.WORST ? 'checked' : ''}>
                ${escapeHtml(view.label)}
            `;
            container.appendChild(label);
        }

        container.addEventListener('change', (e) => this.handleZkvmViewChange(e.target.value));
    }

    /**
     * Initializes search and filter controls.
     */
    initializeSearchAndFilters() {
        // Debounced search
        const debouncedSearch = debounce(() => this.handleSearch(), CONFIG.DEBOUNCE_MS);
        this.elements.search.addEventListener('input', debouncedSearch);

        // Hide crashed checkbox
        this.elements.hideCrashed.addEventListener('change', () => this.handleHideCrashedChange());
    }

    /**
     * Initializes operation filter checkboxes.
     */
    initializeOperationFilters() {
        const container = this.elements.operationFilters;
        const grouped = this.data.operations_by_category || {};
        const allOps = Object.values(grouped).flat();

        this.selectedOperations = new Set(allOps.length ? allOps : this.data.operations);
        container.innerHTML = '';

        // Add "Select All" / "Clear All" buttons
        const btnGroup = document.createElement('div');
        btnGroup.className = 'filter-buttons';
        btnGroup.innerHTML = `
            <button id="select-all-ops-btn" class="btn btn-secondary" aria-label="Select all operations">Select All</button>
            <button id="clear-all-ops-btn" class="btn btn-secondary" aria-label="Clear all operations">Clear All</button>
        `;
        container.appendChild(btnGroup);

        // Re-cache the new button elements and add listeners
        this.elements.selectAllOpsBtn = document.getElementById('select-all-ops-btn');
        this.elements.clearAllOpsBtn = document.getElementById('clear-all-ops-btn');
        this.elements.selectAllOpsBtn.addEventListener('click', () => this.selectAllOperations());
        this.elements.clearAllOpsBtn.addEventListener('click', () => this.clearAllOperations());

        // Build category entries
        let entries = CATEGORY_ORDER
            .filter(key => grouped[key])
            .map(key => [key, grouped[key]]);

        if (entries.length === 0) {
            entries = [['All', [...this.data.operations].sort((a, b) => a.localeCompare(b))]];
        }

        for (const [title, items] of entries) {
            const wrap = document.createElement('div');
            wrap.className = 'filter-group';

            const heading = document.createElement('h3');
            heading.textContent = title;
            wrap.appendChild(heading);

            const grid = document.createElement('div');
            grid.className = 'filter-grid';

            for (const operation of items) {
                const label = document.createElement('label');
                label.className = 'checkbox-item';
                label.innerHTML = `
                    <input type="checkbox" value="${escapeHtml(operation)}" checked>
                    ${escapeHtml(operation)}
                `;

                const input = label.querySelector('input');
                input.addEventListener('change', (e) => {
                    this.handleOperationFilterChange(operation, e.target.checked);
                });

                grid.appendChild(label);
            }

            wrap.appendChild(grid);
            container.appendChild(wrap);
        }
    }

    /**
     * Initializes quick filter buttons.
     */
    initializeQuickFilters() {
        const container = this.elements.quickFilters;
        if (!container) return;

        // Add event listeners to min relative cost buttons
        container.querySelectorAll('[data-min-rel]').forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.dataset.minRel === '' ? null : parseFloat(btn.dataset.minRel);
                this.handleMinRelativeCostChange(val);
            });
        });

        // Add event listeners to category filter buttons
        container.querySelectorAll('[data-category]').forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.dataset.category;
                this.handleCategoryFilter(cat === 'all' ? null : cat);
            });
        });

        this.updateQuickFilterButtons();
    }

    /**
     * Initializes theme toggle.
     */
    initializeTheme() {
        const savedTheme = localStorage.getItem(CONFIG.THEME_KEY) || 'dark';
        this.applyTheme(savedTheme);

        if (this.elements.themeToggle) {
            this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    /**
     * Updates footer information.
     */
    updateFooter() {
        this.elements.generatedAt.textContent = new Date(this.data.generated_at).toLocaleString();

        const hw = this.data.hardware_info;
        this.elements.hardwareInfo.textContent =
            `${this.data.hardware} - ${hw.cpu_model}, ${hw.total_ram_gib}GB RAM, ${hw.gpus?.[0]?.model || 'No GPU'}`;
    }

    /**
     * Shows the application and hides loading state.
     */
    showApp() {
        this.elements.loading.classList.add('hidden');
        this.elements.app.classList.remove('hidden');
    }

    /**
     * Shows an error message.
     * @param {string} message - The error message.
     */
    showError(message) {
        this.elements.loading.classList.add('hidden');
        this.elements.error.textContent = message;
        this.elements.error.classList.remove('hidden');
    }

    /**
     * Main initialization function.
     */
    async init() {
        if (this.initialized) return;

        this.cacheElements();
        this.initializeTheme();

        // Parse URL state early (before data loads)
        const urlState = this.parseStateFromURL();
        this.applyURLState(urlState);

        try {
            const response = await fetch('data/results.json');
            if (!response.ok) {
                throw new Error(`Failed to load data: ${response.status} ${response.statusText}`);
            }

            this.data = await response.json();
            this.initialized = true;

            // Pre-compute worst case times for all tests
            for (const test of this.data.tests) {
                this.getWorstCaseTime(test);
            }

            // Initialize UI components
            this.initializeBaselineSelector();
            this.initializeZkvmViewSelector();
            this.initializeSearchAndFilters();
            this.initializeOperationFilters();
            this.initializeQuickFilters();

            // Apply pending URL state that depends on data being loaded
            this.applyPendingURLState();

            // Initial render
            this.renderBaselineInfo();
            this.filterTests();
            this.sortTests();
            this.renderTable();
            this.updateStats();
            this.updateFooter();
            this.updateQuickFilterButtons();

            // Show app
            this.showApp();
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError(`Error loading data: ${error.message}`);
        }
    }

    /**
     * Applies URL state that requires data to be loaded.
     */
    applyPendingURLState() {
        // Apply operations filter from URL
        if (this._pendingURLOperations) {
            const validOps = this._pendingURLOperations.filter(op =>
                this.data.operations.includes(op)
            );
            if (validOps.length > 0) {
                this.selectedOperations = new Set(validOps);
                // Update checkboxes
                this.elements.operationFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                    cb.checked = this.selectedOperations.has(cb.value);
                });
            }
        }

        // Apply search from URL
        if (this._pendingURLSearch) {
            this.elements.search.value = this._pendingURLSearch;
        }

        // Apply hide crashed from URL
        if (this._pendingURLHideCrashed) {
            this.elements.hideCrashed.checked = true;
        }

        // Apply zkVM view to radio buttons
        if (this.selectedZkvmView) {
            const radio = this.elements.zkvmView.querySelector(`input[value="${this.selectedZkvmView}"]`);
            if (radio) radio.checked = true;
        }

        // Apply baseline to select
        if (this.baselineTestId) {
            const option = this.elements.baseline.querySelector(`option[value="${this.baselineTestId}"]`);
            if (option) {
                this.elements.baseline.value = this.baselineTestId;
            } else {
                // If baseline from URL doesn't exist, reset to default
                this.baselineTestId = this.elements.baseline.value;
            }
        }

        // Clean up pending state
        delete this._pendingURLOperations;
        delete this._pendingURLSearch;
        delete this._pendingURLHideCrashed;
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new BenchmarkApp();
    app.init();
});
