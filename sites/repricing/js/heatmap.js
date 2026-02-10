/**
 * Heatmap visualization module for the Repricing Analysis Application.
 * Provides a compact overview of operation performance across zkVMs.
 *
 * Level 1: Each row = one operation, each column = one zkVM.
 *   Cells show proportional bars (green/yellow/red segments).
 * Level 2: Clicking a row expands to show individual fixture squares.
 */

import { STATUS, VIEW, CATEGORY_ORDER } from './constants.js';
import { escapeHtml, formatRelativeCost } from './utils.js';

// Fixture cost thresholds for color classification
const FIXTURE_THRESHOLDS = { MODERATE: 3.0, HIGH: 10.0 };

/**
 * Renders the performance heatmap visualization.
 */
export class HeatmapRenderer {
    /**
     * @param {import('./data.js').DataAccessor} dataAccessor
     */
    constructor(dataAccessor) {
        this.dataAccessor = dataAccessor;
    }

    // ========================================================================
    // Cell Summary Computation
    // ========================================================================

    /**
     * Computes summary statistics for one cell (operation x zkVM).
     *
     * @param {Object[]} tests - Tests for this operation
     * @param {string} zkvm - zkVM identifier or VIEW.WORST
     * @returns {{ meetsTarget: number, below: number, crashed: number, total: number, worstCost: number|null }}
     */
    computeCellSummary(tests, zkvm) {
        let meetsTarget = 0;
        let below = 0;
        let crashed = 0;
        let worstCost = null;

        for (const test of tests) {
            if (this._isFixtureCrashed(test, zkvm)) {
                crashed++;
                continue;
            }

            const cost = this.dataAccessor.getRelativeCost(test, zkvm);
            if (cost === null) {
                crashed++;
                continue;
            }

            if (cost <= 1.0) {
                meetsTarget++;
            } else {
                below++;
            }

            if (worstCost === null || cost > worstCost) {
                worstCost = cost;
            }
        }

        return { meetsTarget, below, crashed, total: tests.length, worstCost };
    }

    // ========================================================================
    // Fixture Status Helpers
    // ========================================================================

    /**
     * Checks if a fixture is crashed for a given zkVM.
     * @private
     */
    _isFixtureCrashed(test, zkvm) {
        if (zkvm === VIEW.WORST) {
            return this.dataAccessor.isAllCrashed(test) ||
                this.dataAccessor.getWorstCaseTime(test) === null;
        }
        const result = test.results[zkvm];
        return !result || result.status !== STATUS.SUCCESS;
    }

    /**
     * Returns a CSS color class for a fixture square based on its cost.
     * @private
     */
    _getFixtureClass(test, zkvm) {
        if (this._isFixtureCrashed(test, zkvm)) return 'hm-fx-crashed';

        const cost = this.dataAccessor.getRelativeCost(test, zkvm);
        if (cost === null) return 'hm-fx-crashed';
        if (cost <= 1.0) return 'hm-fx-ok';
        if (cost < FIXTURE_THRESHOLDS.MODERATE) return 'hm-fx-warn';
        if (cost < FIXTURE_THRESHOLDS.HIGH) return 'hm-fx-bad';
        return 'hm-fx-crashed';
    }

    // ========================================================================
    // Sorting
    // ========================================================================

    /**
     * Computes a sort score for a group (higher = worse performance).
     * All-crashed operations sort first, then by worst cost ratio.
     * @private
     */
    _getGroupSortScore(group, columns) {
        let maxCost = 0;
        let anyAllCrashed = false;

        for (const col of columns) {
            const summary = this.computeCellSummary(group.tests, col.id);
            if (summary.total > 0 && summary.crashed === summary.total) {
                anyAllCrashed = true;
            }
            if (summary.worstCost !== null && summary.worstCost > maxCost) {
                maxCost = summary.worstCost;
            }
        }

        return anyAllCrashed ? 10000 + maxCost : maxCost;
    }

    /**
     * Groups operations by category and sorts within each category.
     * @private
     */
    _categorizeAndSort(groupedData, operationsByCategory, columns, sortMode) {
        const categoryMap = {};
        if (operationsByCategory) {
            for (const [cat, ops] of Object.entries(operationsByCategory)) {
                for (const op of ops) {
                    categoryMap[op] = cat;
                }
            }
        }

        const byCategory = {};
        for (const group of groupedData) {
            const cat = categoryMap[group.operation] || 'Other';
            if (!byCategory[cat]) byCategory[cat] = [];
            byCategory[cat].push(group);
        }

        for (const groups of Object.values(byCategory)) {
            if (sortMode === 'name') {
                groups.sort((a, b) => a.operation.localeCompare(b.operation));
            } else {
                groups.sort((a, b) =>
                    this._getGroupSortScore(b, columns) - this._getGroupSortScore(a, columns)
                );
            }
        }

        return CATEGORY_ORDER
            .filter(cat => byCategory[cat]?.length > 0)
            .map(cat => ({ category: cat, groups: byCategory[cat] }));
    }

    // ========================================================================
    // Cell Rendering
    // ========================================================================

    /**
     * Renders a proportional bar for one cell (operation x zkVM).
     * @private
     */
    _renderBar(summary) {
        const { meetsTarget, below, crashed, total, worstCost } = summary;
        if (total === 0) return '<div class="hm-cell hm-cell-empty"></div>';

        const pOk = meetsTarget / total * 100;
        const pBelow = below / total * 100;
        const pCrashed = crashed / total * 100;

        const parts = [];
        if (meetsTarget > 0) parts.push(`${meetsTarget} meeting target`);
        if (below > 0) parts.push(`${below} below target`);
        if (crashed > 0) parts.push(`${crashed} crashed`);
        if (worstCost !== null) parts.push(`worst: ${formatRelativeCost(worstCost)}`);
        const title = escapeHtml(parts.join(', '));

        const segments = [];
        if (pOk > 0) segments.push(`<div class="hm-seg hm-seg-ok" style="width:${pOk.toFixed(1)}%"></div>`);
        if (pBelow > 0) segments.push(`<div class="hm-seg hm-seg-below" style="width:${pBelow.toFixed(1)}%"></div>`);
        if (pCrashed > 0) segments.push(`<div class="hm-seg hm-seg-crashed" style="width:${pCrashed.toFixed(1)}%"></div>`);

        return `<div class="hm-cell" title="${title}"><div class="hm-bar">${segments.join('')}</div></div>`;
    }

    /**
     * Renders expanded fixture squares for an operation.
     * Sorted by cost descending (worst first).
     * @private
     */
    _renderFixtures(tests, zkvm) {
        const sorted = [...tests].sort((a, b) => {
            const costA = this.dataAccessor.getRelativeCost(a, zkvm) ?? Infinity;
            const costB = this.dataAccessor.getRelativeCost(b, zkvm) ?? Infinity;
            return costB - costA;
        });

        const squares = sorted.map(test => {
            const cls = this._getFixtureClass(test, zkvm);
            const name = test.name || test.id;
            const cost = this.dataAccessor.getRelativeCost(test, zkvm);
            const label = this._isFixtureCrashed(test, zkvm)
                ? 'Crashed'
                : (cost ? formatRelativeCost(cost) : 'N/A');
            const tooltip = escapeHtml(`${name}: ${label}`);
            return `<div class="hm-fx ${cls}" title="${tooltip}"></div>`;
        });

        return `<div class="hm-fixtures">${squares.join('')}</div>`;
    }

    // ========================================================================
    // Main Render
    // ========================================================================

    /**
     * Renders the complete heatmap HTML.
     *
     * @param {Object} options
     * @param {Object[]} options.groupedData - Grouped test data (from app filtering)
     * @param {string} options.zkvmView - Current zkVM view mode
     * @param {string[]} options.zkvms - Available zkVM identifiers
     * @param {Object} options.operationsByCategory - Operations grouped by category
     * @param {Set<string>} options.expandedOps - Currently expanded operations
     * @param {string} options.sortMode - 'cost' or 'name'
     * @returns {string} HTML string
     */
    render({ groupedData, zkvmView, zkvms, operationsByCategory, expandedOps = new Set(), sortMode = 'cost' }) {
        if (!groupedData || groupedData.length === 0) {
            return '<p class="hm-empty">No data to display</p>';
        }

        // Determine columns based on zkVM view
        let columns;
        if (zkvmView === VIEW.ALL) {
            columns = zkvms.map(z => ({ id: z, label: z }));
        } else if (zkvmView === VIEW.WORST) {
            columns = [{ id: VIEW.WORST, label: 'Slowest' }];
        } else {
            columns = [{ id: zkvmView, label: zkvmView }];
        }

        // Categorize and sort
        const categorized = this._categorizeAndSort(
            groupedData, operationsByCategory, columns, sortMode
        );

        // Build column headers
        const colHeaders = columns.map(c =>
            `<th class="hm-th">${escapeHtml(c.label)}</th>`
        ).join('');

        // Build rows
        const colSpan = 2 + columns.length;
        const rows = [];

        for (const { category, groups } of categorized) {
            rows.push(
                `<tr class="hm-cat-row"><td colspan="${colSpan}">${escapeHtml(category)}</td></tr>`
            );

            for (const group of groups) {
                const isExpanded = expandedOps.has(group.operation);
                const icon = isExpanded ? '\u25BC' : '\u25B6';
                const cls = isExpanded ? 'hm-row-expanded' : '';

                const cells = columns.map(col => {
                    const summary = this.computeCellSummary(group.tests, col.id);
                    return `<td class="hm-cell-td">${this._renderBar(summary)}</td>`;
                });

                rows.push(
                    `<tr class="hm-row ${cls}" data-hm-operation="${escapeHtml(group.operation)}">` +
                    `<td class="hm-op-name"><span class="hm-icon">${icon}</span>${escapeHtml(group.operation)}</td>` +
                    `<td class="hm-count">${group.testCount}</td>` +
                    cells.join('') +
                    `</tr>`
                );

                if (isExpanded) {
                    const fxCells = columns.map(col =>
                        `<td class="hm-fx-td">${this._renderFixtures(group.tests, col.id)}</td>`
                    );
                    rows.push(
                        `<tr class="hm-detail-row"><td colspan="2"></td>${fxCells.join('')}</tr>`
                    );
                }
            }
        }

        return (
            `<table class="hm-table">` +
            `<thead><tr>` +
            `<th class="hm-th hm-th-op">Operation</th>` +
            `<th class="hm-th hm-th-count">#</th>` +
            colHeaders +
            `</tr></thead>` +
            `<tbody>${rows.join('')}</tbody>` +
            `</table>`
        );
    }
}
