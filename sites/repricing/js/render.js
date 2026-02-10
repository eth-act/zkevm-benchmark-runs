/**
 * Rendering functions for the Repricing Analysis Application.
 * All UI rendering logic is centralized here.
 */

import { STATUS, VIEW, VALUE_MODE, CATEGORY_ORDER } from './constants.js';
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
