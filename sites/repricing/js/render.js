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
    formatThroughput,
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
 * @param {string|null} options.crashInfo - Crash annotation text (e.g. "3/5 crashed") for partial group crashes
 * @param {string|null} options.secondaryLabel - Override for the time line (e.g. formatted throughput)
 * @returns {string} HTML string for the cell
 */
export function renderProofCell({ time, relativeCost, zkvm = null, crashed = false, allCrashed = false, missing = false, isMarginal = false, noBaseline = false, crashInfo = null, secondaryLabel = null }) {
    if (allCrashed) {
        return '<td class="combined-cell status-crashed">CRASHED</td>';
    }
    if (crashed) {
        return '<td class="combined-cell status-crashed">CRASHED</td>';
    }
    if (missing) {
        return '<td class="combined-cell status-na" title="No data available for this combination">-</td>';
    }
    if (noBaseline) {
        return '<td class="combined-cell status-na" title="Test not found in baseline dataset">N/A</td>';
    }

    const relativeClass = getRelativeCostClass(relativeCost);
    const zkvmBadge = zkvm ? `<span class="worst-zkvm-badge">${escapeHtml(zkvm)}</span>` : '';
    const marginalClass = isMarginal ? 'marginal-value' : '';
    const secondary = secondaryLabel ?? (isMarginal ? formatMarginalTime(time) : formatTime(time));

    const crashBadge = crashInfo ? `<span class="cell-crash-info">${escapeHtml(crashInfo)}</span>` : '';

    return `<td class="combined-cell status-success ${marginalClass}">
        <span class="cell-relative ${relativeClass}">${formatRelativeCost(relativeCost)}</span>
        <span class="cell-time">${secondary}</span>
        ${zkvmBadge}
        ${crashBadge}
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
                // For worst-case view, check if any zkVM actually crashed for this test
                return this.dataAccessor.isAllCrashed(test);
            }
            const result = test.results[zkvm];
            // Only flag actual crashes, not missing data
            return result && result.status === STATUS.CRASHED;
        });
    }

    /**
     * Counts crashed vs total tests in a group for a specific zkVM.
     * @returns {{ crashed: number, total: number }}
     */
    getGroupCrashCount(group, zkvm) {
        let crashed = 0;
        const total = group.tests.length;
        for (const test of group.tests) {
            if (zkvm === VIEW.WORST) {
                if (this.dataAccessor.isAllCrashed(test)) crashed++;
            } else {
                const result = test.results[zkvm];
                if (result && result.status === STATUS.CRASHED) crashed++;
            }
        }
        return { crashed, total };
    }

    /**
     * Renders a zkVM cell for a group.
     * Shows CRASHED only if all fixtures crashed; shows worst successful result
     * with crash count annotation if some fixtures crashed.
     */
    renderGroupZkvmCell(group, zkvm) {
        const { crashed: crashCount, total } = this.getGroupCrashCount(group, zkvm);
        const crashInfo = crashCount > 0 ? `${crashCount}/${total} crashed` : null;

        // If ALL fixtures crashed, show CRASHED
        if (crashCount === total) {
            return renderProofCell({ allCrashed: true });
        }

        const isMarginal = this.isInMarginalMode();
        const worst = this.dataAccessor.getGroupWorstCase(group, zkvm);

        // If no test had data for this zkVM, show missing
        if (!worst.test) {
            return renderProofCell({ missing: true });
        }

        const throughput = formatThroughput(worst.test.block_used_gas, worst.time);

        if (isMarginal) {
            // Check if baseline exists for this test
            if (!this.dataAccessor.hasMarginalData(worst.test)) {
                return renderProofCell({ noBaseline: true });
            }
            const time = this.dataAccessor.getMarginalProvingTime(worst.test, zkvm);
            const relativeCost = this.dataAccessor.getMarginalRelativeCost(worst.test, zkvm);
            return renderProofCell({ time, relativeCost, isMarginal: true, crashInfo, secondaryLabel: throughput });
        }

        const relativeCost = this.dataAccessor.getRelativeCost(worst.test, zkvm);
        return renderProofCell({ time: worst.time, relativeCost, crashInfo, secondaryLabel: throughput });
    }

    /**
     * Renders the worst-case cell for a group.
     * Shows CRASHED only if all fixtures crashed on all zkVMs; shows worst successful
     * result with crash count annotation if some fixtures crashed.
     */
    renderGroupWorstCell(group) {
        const { crashed: crashCount, total } = this.getGroupCrashCount(group, VIEW.WORST);
        const crashInfo = crashCount > 0 ? `${crashCount}/${total} crashed` : null;

        // If ALL fixtures crashed on all zkVMs, show CRASHED
        if (crashCount === total) {
            return renderProofCell({ allCrashed: true });
        }

        const isMarginal = this.isInMarginalMode();
        const worst = this.dataAccessor.getGroupWorstCase(group, VIEW.WORST);

        // If no test had any successful data, show missing
        if (!worst.test) {
            return renderProofCell({ missing: true });
        }

        const throughput = formatThroughput(worst.test.block_used_gas, worst.time);

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
                crashInfo,
                secondaryLabel: throughput,
            });
        }

        const relativeCost = this.dataAccessor.getRelativeCost(worst.test, VIEW.WORST);
        return renderProofCell({
            time: worst.time,
            relativeCost,
            zkvm: worst.zkvm,
            crashInfo,
            secondaryLabel: throughput,
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
                `<td class="fixture-name">${escapeHtml(test.id)}</td>`,
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
        if (!result) {
            return renderProofCell({ missing: true });
        }
        if (result.status !== STATUS.SUCCESS) {
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
            if (this.dataAccessor.isAllMissing(test)) {
                return renderProofCell({ missing: true });
            }
            return renderProofCell({ allCrashed: true });
        }

        const time = this.dataAccessor.getWorstCaseTime(test);
        const relativeCost = this.dataAccessor.getRelativeCost(test, VIEW.WORST);
        const worstZkvm = this.dataAccessor.getWorstCaseZkvm(test);

        if (time !== null) {
            return renderProofCell({ time, relativeCost, zkvm: worstZkvm });
        }
        if (this.dataAccessor.isAllMissing(test)) {
            return renderProofCell({ missing: true });
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
    // Summary Bar (replaces Stats Panel + Target Info)
    // ========================================================================

    /**
     * Renders a compact inline summary bar with key stats.
     *
     * @param {Object} options - Summary options
     * @returns {string} HTML string for summary bar
     */
    renderSummaryBar({ filteredTests, allTests, zkvms, zkvmView, targetMGasPerS }) {
        const totalTests = filteredTests.length;

        // Per-zkVM stats
        const zkvmStats = {};
        for (const zkvm of zkvms) {
            zkvmStats[zkvm] = { success: 0, crashed: 0 };
        }
        for (const test of filteredTests) {
            for (const zkvm of zkvms) {
                const result = test.results[zkvm];
                if (result?.status === STATUS.SUCCESS) {
                    zkvmStats[zkvm].success++;
                } else if (result) {
                    zkvmStats[zkvm].crashed++;
                }
            }
        }

        // Target throughput stats
        const activeZkvm = zkvmView === VIEW.ALL ? VIEW.WORST : zkvmView;
        let testsAboveTarget = 0;
        let totalWithThroughput = 0;
        for (const test of filteredTests) {
            const throughput = this.dataAccessor.getActualMGasPerS(test, activeZkvm);
            if (throughput !== null) {
                totalWithThroughput++;
                if (throughput >= targetMGasPerS) {
                    testsAboveTarget++;
                }
            }
        }
        const testsBelowTarget = totalWithThroughput - testsAboveTarget;
        const percentAbove = totalWithThroughput > 0
            ? ((testsAboveTarget / totalWithThroughput) * 100).toFixed(1)
            : 0;

        const sep = '<span class="summary-sep">|</span>';

        const parts = [
            `<span class="summary-value">${totalTests}</span> <span class="summary-detail">of ${allTests.length} tests</span>`,
        ];

        for (const zkvm of zkvms) {
            const stats = zkvmStats[zkvm];
            const rate = totalTests > 0 ? ((stats.success / totalTests) * 100).toFixed(1) : 0;
            const cls = stats.success > stats.crashed ? 'success' : 'error';
            parts.push(
                `${escapeHtml(zkvm)}: <span class="summary-value ${cls}">${rate}%</span> ok` +
                (stats.crashed > 0 ? ` <span class="summary-detail">(${stats.crashed} crashed)</span>` : '')
            );
        }

        parts.push(
            `<span class="summary-label">Target ${targetMGasPerS} MGas/s:</span> ` +
            `<span class="summary-value success">${testsAboveTarget}</span> meeting` +
            ` ${sep} <span class="summary-value">${testsBelowTarget}</span> below ` +
            `<span class="summary-detail">(${percentAbove}%)</span>`
        );

        return parts.join(` ${sep} `);
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
