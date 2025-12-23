/**
 * Rendering functions for the Repricing Analysis Application.
 * All UI rendering logic is centralized here.
 */

import { CONFIG, STATUS, VIEW, VALUE_MODE, CATEGORY_ORDER } from './constants.js';
import {
    escapeHtml,
    formatTime,
    formatMarginalTime,
    formatRelativeCost,
    getRelativeCostClass,
} from './utils.js';

// ============================================================================
// Cell Rendering (Unified)
// ============================================================================

/**
 * Renders a proof result cell (combined relative cost + time).
 * This unified function replaces the 4 separate cell rendering methods.
 *
 * @param {Object} options - Cell options
 * @param {number|null} options.time - Proving time in ms
 * @param {number|null} options.relativeCost - Relative cost value
 * @param {string|null} options.zkvm - zkVM badge to display (for worst-case)
 * @param {boolean} options.crashed - Whether this specific zkVM crashed
 * @param {boolean} options.allCrashed - Whether all zkVMs crashed
 * @param {boolean} options.isMarginal - Whether displaying marginal (delta) values
 * @param {boolean} options.noBaseline - Whether baseline data is missing for this test
 * @returns {string} HTML string for the cell
 */
export function renderProofCell({ time, relativeCost, zkvm = null, crashed = false, allCrashed = false, isMarginal = false, noBaseline = false }) {
    if (allCrashed) {
        return '<td class="combined-cell status-crashed">CRASHED</td>';
    }
    if (crashed) {
        return '<td class="combined-cell status-crashed">CRASHED</td>';
    }
    if (noBaseline) {
        return '<td class="combined-cell status-na" title="Test not found in baseline dataset">N/A</td>';
    }

    const relativeClass = getRelativeCostClass(relativeCost);
    const zkvmBadge = zkvm ? `<span class="worst-zkvm-badge">${escapeHtml(zkvm)}</span>` : '';
    const marginalClass = isMarginal ? 'marginal-value' : '';
    const formattedTime = isMarginal ? formatMarginalTime(time) : formatTime(time);

    return `<td class="combined-cell status-success ${marginalClass}">
        <span class="cell-relative ${relativeClass}">${formatRelativeCost(relativeCost)}</span>
        <span class="cell-time">${formattedTime}</span>
        ${zkvmBadge}
    </td>`;
}

// ============================================================================
// Table Rendering
// ============================================================================

/**
 * Renderer class for managing table and UI rendering.
 */
export class Renderer {
    /**
     * @param {Object} elements - DOM element references
     * @param {import('./data.js').DataAccessor} dataAccessor - Data accessor instance
     */
    constructor(elements, dataAccessor) {
        this.elements = elements;
        this.dataAccessor = dataAccessor;
        this.valueMode = VALUE_MODE.ABSOLUTE;
    }

    /**
     * Sets the value mode for rendering.
     * @param {string} mode - VALUE_MODE.ABSOLUTE or VALUE_MODE.MARGINAL
     */
    setValueMode(mode) {
        this.valueMode = mode;
    }

    /**
     * Checks if currently in marginal mode with baseline data available.
     * @returns {boolean}
     */
    isInMarginalMode() {
        return this.valueMode === VALUE_MODE.MARGINAL && this.dataAccessor.hasBaselineData();
    }

    /**
     * Gets the CSS class for a sortable column header.
     * @param {string} column - Column identifier
     * @param {string} sortColumn - Currently sorted column
     * @param {string} sortDirection - Current sort direction
     * @returns {string} CSS class string
     */
    getSortClass(column, sortColumn, sortDirection) {
        if (sortColumn !== column) return '';
        return sortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc';
    }

    /**
     * Renders the table header row.
     *
     * @param {Object} options - Render options
     * @param {string} options.zkvmView - Current zkVM view mode
     * @param {string[]} options.zkvms - List of available zkVMs
     * @param {string} options.sortColumn - Currently sorted column
     * @param {string} options.sortDirection - Current sort direction
     * @returns {string} HTML string for header row
     */
    renderTableHeader({ zkvmView, zkvms, sortColumn, sortDirection }) {
        const parts = [
            `<th data-sort="operation" class="${this.getSortClass('operation', sortColumn, sortDirection)}">Operation</th>`,
            `<th data-sort="name" class="${this.getSortClass('name', sortColumn, sortDirection)}">Fixtures</th>`,
        ];

        if (zkvmView === VIEW.ALL) {
            for (const zkvm of zkvms) {
                parts.push(
                    `<th data-sort="${zkvm}-time" class="${this.getSortClass(zkvm + '-time', sortColumn, sortDirection)}">${escapeHtml(zkvm)}</th>`
                );
            }
        } else if (zkvmView === VIEW.WORST) {
            parts.push(
                `<th data-sort="worst-time" class="${this.getSortClass('worst-time', sortColumn, sortDirection)}">Slowest</th>`
            );
        } else {
            // Specific zkVM selected
            parts.push(
                `<th data-sort="${zkvmView}-time" class="${this.getSortClass(zkvmView + '-time', sortColumn, sortDirection)}">${escapeHtml(zkvmView)}</th>`
            );
        }

        return parts.join('');
    }

    /**
     * Renders a group row (operation row).
     *
     * @param {Object} group - The group object
     * @param {boolean} isExpanded - Whether group is expanded
     * @param {Object} options - Render options
     * @returns {string} HTML string for group row
     */
    renderGroupRow(group, isExpanded, { zkvmView, zkvms }) {
        const rowParts = [
            `<td class="expandable-cell">
                <span class="expand-icon">${isExpanded ? '\u25BC' : '\u25B6'}</span>
                <span class="category-badge">${escapeHtml(group.operation)}</span>
            </td>`,
            `<td><span class="fixture-count">${group.testCount} fixture${group.testCount !== 1 ? 's' : ''}</span></td>`,
        ];

        if (zkvmView === VIEW.ALL) {
            for (const zkvm of zkvms) {
                rowParts.push(this.renderGroupZkvmCell(group, zkvm));
            }
        } else if (zkvmView === VIEW.WORST) {
            rowParts.push(this.renderGroupWorstCell(group));
        } else {
            rowParts.push(this.renderGroupZkvmCell(group, zkvmView));
        }

        const expandedClass = isExpanded ? 'expanded' : '';
        return `<tr class="group-row ${expandedClass}" data-operation="${escapeHtml(group.operation)}">${rowParts.join('')}</tr>`;
    }

    /**
     * Checks if any test in the group crashed for a specific zkVM.
     */
    hasAnyCrashed(group, zkvm) {
        return group.tests.some(test => {
            if (zkvm === VIEW.WORST) {
                // For worst-case view, check if any zkVM crashed for this test
                return this.dataAccessor.isAllCrashed(test);
            }
            const result = test.results[zkvm];
            return !result || result.status !== STATUS.SUCCESS;
        });
    }

    /**
     * Renders a zkVM cell for a group.
     * Shows CRASHED if any fixture in the group crashed for this zkVM.
     */
    renderGroupZkvmCell(group, zkvm) {
        // If any fixture crashed, show CRASHED
        if (this.hasAnyCrashed(group, zkvm)) {
            return renderProofCell({ allCrashed: true });
        }

        const isMarginal = this.isInMarginalMode();
        const worst = this.dataAccessor.getGroupWorstCase(group, zkvm);

        if (isMarginal) {
            // Check if baseline exists for this test
            if (!this.dataAccessor.hasMarginalData(worst.test)) {
                return renderProofCell({ noBaseline: true });
            }
            const time = this.dataAccessor.getMarginalProvingTime(worst.test, zkvm);
            const relativeCost = this.dataAccessor.getMarginalRelativeCost(worst.test, zkvm);
            return renderProofCell({ time, relativeCost, isMarginal: true });
        }

        const relativeCost = this.dataAccessor.getRelativeCost(worst.test, zkvm);
        return renderProofCell({ time: worst.time, relativeCost });
    }

    /**
     * Renders the worst-case cell for a group.
     * Shows CRASHED if any fixture in the group crashed on all zkVMs.
     */
    renderGroupWorstCell(group) {
        // If any fixture crashed on all zkVMs, show CRASHED
        if (this.hasAnyCrashed(group, VIEW.WORST)) {
            return renderProofCell({ allCrashed: true });
        }

        const isMarginal = this.isInMarginalMode();
        const worst = this.dataAccessor.getGroupWorstCase(group, VIEW.WORST);

        if (isMarginal) {
            // Check if baseline exists for this test
            if (!this.dataAccessor.hasMarginalData(worst.test)) {
                return renderProofCell({ noBaseline: true });
            }
            const time = this.dataAccessor.getMarginalProvingTime(worst.test, VIEW.WORST);
            const relativeCost = this.dataAccessor.getMarginalRelativeCost(worst.test, VIEW.WORST);
            return renderProofCell({
                time,
                relativeCost,
                zkvm: worst.zkvm,
                isMarginal: true,
            });
        }

        const relativeCost = this.dataAccessor.getRelativeCost(worst.test, VIEW.WORST);
        return renderProofCell({
            time: worst.time,
            relativeCost,
            zkvm: worst.zkvm,
        });
    }

    /**
     * Renders expanded fixture rows for a group.
     *
     * @param {Object} group - The group object
     * @param {Object} options - Render options
     * @returns {string} HTML string for fixture rows
     */
    renderGroupFixtures(group, { zkvmView, zkvms }) {
        // Sort fixtures by worst case time (descending - worst first)
        const sortedFixtures = [...group.tests].sort((a, b) => {
            const timeA = zkvmView === VIEW.WORST || zkvmView === VIEW.ALL
                ? this.dataAccessor.getWorstCaseTime(a) ?? Infinity
                : this.dataAccessor.getProvingTime(a, zkvmView) ?? Infinity;
            const timeB = zkvmView === VIEW.WORST || zkvmView === VIEW.ALL
                ? this.dataAccessor.getWorstCaseTime(b) ?? Infinity
                : this.dataAccessor.getProvingTime(b, zkvmView) ?? Infinity;
            return timeB - timeA;
        });

        return sortedFixtures.map(test => {
            const rowParts = [
                '<td class="fixture-indent"></td>',
                `<td class="fixture-name" title="${escapeHtml(test.id)}">${escapeHtml(test.name)}</td>`,
            ];

            if (zkvmView === VIEW.ALL) {
                for (const zkvm of zkvms) {
                    rowParts.push(this.renderTestZkvmCell(test, zkvm));
                }
            } else if (zkvmView === VIEW.WORST) {
                rowParts.push(this.renderTestWorstCell(test));
            } else {
                rowParts.push(this.renderTestZkvmCell(test, zkvmView));
            }

            return `<tr class="fixture-row">${rowParts.join('')}</tr>`;
        }).join('');
    }

    /**
     * Renders a zkVM cell for an individual test.
     */
    renderTestZkvmCell(test, zkvm) {
        const result = test.results[zkvm];
        if (result?.status !== STATUS.SUCCESS) {
            return renderProofCell({ crashed: true });
        }

        const isMarginal = this.isInMarginalMode();

        if (isMarginal) {
            // Check if baseline exists for this test
            if (!this.dataAccessor.hasMarginalData(test)) {
                return renderProofCell({ noBaseline: true });
            }
            const time = this.dataAccessor.getMarginalProvingTime(test, zkvm);
            const relativeCost = this.dataAccessor.getMarginalRelativeCost(test, zkvm);
            return renderProofCell({ time, relativeCost, isMarginal: true });
        }

        const time = result.proving_time_ms;
        const relativeCost = this.dataAccessor.getRelativeCost(test, zkvm);
        return renderProofCell({ time, relativeCost });
    }

    /**
     * Renders the worst-case cell for an individual test.
     */
    renderTestWorstCell(test) {
        const isMarginal = this.isInMarginalMode();

        if (isMarginal) {
            // Check if baseline exists for this test
            if (!this.dataAccessor.hasMarginalData(test)) {
                return renderProofCell({ noBaseline: true });
            }
            const time = this.dataAccessor.getMarginalProvingTime(test, VIEW.WORST);
            const relativeCost = this.dataAccessor.getMarginalRelativeCost(test, VIEW.WORST);
            const worstZkvm = this.dataAccessor.getWorstCaseZkvm(test);
            if (time !== null) {
                return renderProofCell({ time, relativeCost, zkvm: worstZkvm, isMarginal: true });
            }
            return renderProofCell({ allCrashed: true });
        }

        const time = this.dataAccessor.getWorstCaseTime(test);
        const relativeCost = this.dataAccessor.getRelativeCost(test, VIEW.WORST);
        const worstZkvm = this.dataAccessor.getWorstCaseZkvm(test);

        if (time !== null) {
            return renderProofCell({ time, relativeCost, zkvm: worstZkvm });
        }
        return renderProofCell({ allCrashed: true });
    }

    // ========================================================================
    // Pagination
    // ========================================================================

    /**
     * Renders pagination controls.
     *
     * @param {Object} options - Pagination options
     * @returns {string} HTML string for pagination
     */
    renderPagination({ currentPage, totalPages, pageSize }) {
        if (totalPages <= 1) return '';

        const pageSizeOptions = CONFIG.PAGE_SIZE_OPTIONS
            .map(size => `<option value="${size}" ${pageSize === size ? 'selected' : ''}>${size} per page</option>`)
            .join('');

        return `
            <button data-page="1" aria-label="First page" ${currentPage === 1 ? 'disabled' : ''}>First</button>
            <button data-page="${currentPage - 1}" aria-label="Previous page" ${currentPage === 1 ? 'disabled' : ''}>Prev</button>
            <span class="page-info">Page ${currentPage} of ${totalPages}</span>
            <button data-page="${currentPage + 1}" aria-label="Next page" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
            <button data-page="${totalPages}" aria-label="Last page" ${currentPage === totalPages ? 'disabled' : ''}>Last</button>
            <select aria-label="Rows per page" data-action="page-size">${pageSizeOptions}</select>
        `;
    }

    // ========================================================================
    // Stats Panel
    // ========================================================================

    /**
     * Renders the statistics panel.
     *
     * @param {Object} options - Stats options
     * @returns {string} HTML string for stats panel
     */
    renderStats({ filteredTests, allTests, groupedData, zkvms, zkvmView }) {
        const totalTests = filteredTests.length;
        const zkvmStats = {};

        for (const zkvm of zkvms) {
            zkvmStats[zkvm] = { success: 0, crashed: 0 };
        }

        for (const test of filteredTests) {
            for (const zkvm of zkvms) {
                const result = test.results[zkvm];
                if (result?.status === STATUS.SUCCESS) {
                    zkvmStats[zkvm].success++;
                } else {
                    zkvmStats[zkvm].crashed++;
                }
            }
        }

        const parts = [
            `<div class="stat-card">
                <h3>Total Tests (Filtered)</h3>
                <div class="value">${totalTests}</div>
                <div class="detail">out of ${allTests.length} total</div>
            </div>`,
        ];

        for (const zkvm of zkvms) {
            const stats = zkvmStats[zkvm];
            const successRate = totalTests > 0 ? ((stats.success / totalTests) * 100).toFixed(1) : 0;
            parts.push(`
                <div class="stat-card ${stats.success > stats.crashed ? 'success' : 'error'}">
                    <h3>${escapeHtml(zkvm)}</h3>
                    <div class="value">${successRate}%</div>
                    <div class="detail">${stats.success} success, ${stats.crashed} crashed</div>
                </div>
            `);
        }

        return parts.join('');
    }

    // ========================================================================
    // Target Info Panel
    // ========================================================================

    /**
     * Renders the target throughput information panel.
     *
     * @param {Object} options - Target info options
     * @returns {string} HTML string for target info
     */
    renderTargetInfo({ targetMGasPerS, filteredTests, zkvmView }) {
        const activeZkvm = zkvmView === VIEW.ALL ? VIEW.WORST : zkvmView;
        let testsAboveTarget = 0;
        let testsBelowTarget = 0;
        let totalWithThroughput = 0;

        for (const test of filteredTests) {
            const throughput = this.dataAccessor.getActualMGasPerS(test, activeZkvm);
            if (throughput !== null) {
                totalWithThroughput++;
                if (throughput >= targetMGasPerS) {
                    testsAboveTarget++;
                } else {
                    testsBelowTarget++;
                }
            }
        }

        const percentAbove = totalWithThroughput > 0
            ? ((testsAboveTarget / totalWithThroughput) * 100).toFixed(1)
            : 0;

        return `
            <h2>Target Throughput Analysis</h2>
            <div class="target-details">
                <div class="target-item highlight">
                    <div class="label">Target</div>
                    <div class="value">${targetMGasPerS} MGas/s</div>
                    <div class="subtext">Operations meeting target show relative cost ~1x</div>
                </div>
                <div class="target-item">
                    <div class="label">Meeting Target</div>
                    <div class="value success">${testsAboveTarget}</div>
                    <div class="subtext">${percentAbove}% of filtered tests</div>
                </div>
                <div class="target-item">
                    <div class="label">Below Target</div>
                    <div class="value">${testsBelowTarget}</div>
                    <div class="subtext">May need gas repricing</div>
                </div>
            </div>
        `;
    }

    // ========================================================================
    // Operation Filters
    // ========================================================================

    /**
     * Renders operation filter checkboxes grouped by category.
     *
     * @param {Object} options - Filter options
     * @returns {string} HTML string for operation filters
     */
    renderOperationFilters({ operationsByCategory, operations, selectedOperations }) {
        const parts = [
            `<div class="filter-buttons">
                <button id="select-all-ops-btn" class="btn btn-secondary" aria-label="Select all operations">Select All</button>
                <button id="clear-all-ops-btn" class="btn btn-secondary" aria-label="Clear all operations">Clear All</button>
            </div>`,
        ];

        // Build category entries
        let entries = CATEGORY_ORDER
            .filter(key => operationsByCategory[key])
            .map(key => [key, operationsByCategory[key]]);

        // Fallback if no categories
        if (entries.length === 0) {
            entries = [['All', [...operations].sort((a, b) => a.localeCompare(b))]];
        }

        for (const [title, items] of entries) {
            const checkboxes = items.map(operation => {
                const checked = selectedOperations.has(operation) ? 'checked' : '';
                return `
                    <label class="checkbox-item">
                        <input type="checkbox" value="${escapeHtml(operation)}" ${checked}>
                        ${escapeHtml(operation)}
                    </label>
                `;
            }).join('');

            parts.push(`
                <div class="filter-group">
                    <h3>${escapeHtml(title)}</h3>
                    <div class="filter-grid">${checkboxes}</div>
                </div>
            `);
        }

        return parts.join('');
    }

    // ========================================================================
    // zkVM View Selector
    // ========================================================================

    /**
     * Renders zkVM view radio buttons.
     *
     * @param {Object} options - View selector options
     * @returns {string} HTML string for zkVM view selector
     */
    renderZkvmViewSelector({ zkvms, selectedView }) {
        const views = [
            { value: VIEW.WORST, label: 'Slowest' },
            ...zkvms.map(zkvm => ({ value: zkvm, label: zkvm })),
            { value: VIEW.ALL, label: 'All' },
        ];

        return views.map(view => {
            const checked = view.value === selectedView ? 'checked' : '';
            return `
                <label class="radio-item">
                    <input type="radio" name="zkvm-view" value="${escapeHtml(view.value)}" ${checked}>
                    ${escapeHtml(view.label)}
                </label>
            `;
        }).join('');
    }

    // ========================================================================
    // Value Mode Toggle (Absolute vs Marginal)
    // ========================================================================

    /**
     * Renders value mode radio buttons.
     *
     * @param {Object} options - Toggle options
     * @param {string} options.selectedMode - Currently selected mode
     * @param {boolean} options.hasBaseline - Whether a baseline dataset exists
     * @param {string} options.currentDataset - Current dataset name
     * @param {string|null} options.baselineDataset - Baseline dataset name
     * @returns {string} HTML string for value mode toggle
     */
    renderValueModeToggle({ selectedMode, hasBaseline, currentDataset, baselineDataset }) {
        const absoluteChecked = selectedMode === VALUE_MODE.ABSOLUTE ? 'checked' : '';
        const marginalChecked = selectedMode === VALUE_MODE.MARGINAL ? 'checked' : '';
        const marginalDisabled = !hasBaseline ? 'disabled' : '';

        let marginalLabel = 'Marginal';
        let marginalTitle = '';

        if (!hasBaseline) {
            marginalTitle = 'title="No baseline available - this is the smallest gas limit dataset"';
        } else {
            marginalLabel = `Marginal (${currentDataset} − ${baselineDataset})`;
        }

        return `
            <label class="radio-item">
                <input type="radio" name="value-mode" value="${VALUE_MODE.ABSOLUTE}" ${absoluteChecked}>
                Absolute
            </label>
            <label class="radio-item ${marginalDisabled ? 'disabled' : ''}" ${marginalTitle}>
                <input type="radio" name="value-mode" value="${VALUE_MODE.MARGINAL}" ${marginalChecked} ${marginalDisabled}>
                ${escapeHtml(marginalLabel)}
            </label>
        `;
    }

}
