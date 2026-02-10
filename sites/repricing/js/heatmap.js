/**
 * Heatmap visualization module for the Repricing Analysis Application.
 * Unified view combining compact operation overview with detailed fixture data.
 *
 * Level 1: Each row = one operation, each column = one zkVM.
 *   Cells show proportional bars (green/yellow/red segments) with worst-case cost label.
 * Level 2: Clicking a row expands to show individual fixture rows with full numeric detail.
 */

import { VIEW, CATEGORY_ORDER } from './constants.js';
import { escapeHtml, formatRelativeCost, getRelativeCostClass } from './utils.js';

/**
 * Renders the performance heatmap visualization.
 */
export class HeatmapRenderer {
    /**
     * @param {import('./data.js').DataAccessor} dataAccessor
     * @param {import('./render.js').Renderer} renderer - For rendering fixture detail cells
     */
    constructor(dataAccessor, renderer) {
        this.dataAccessor = dataAccessor;
        this.renderer = renderer;
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
        return !result || result.status !== 'success';
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
     * Renders a proportional bar with worst-case cost label for one cell.
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

        // Worst-cost label below the bar
        let worstLabel = '';
        if (crashed === total) {
            worstLabel = '<div class="hm-cell-worst hm-worst-crashed">CRASHED</div>';
        } else if (worstCost !== null) {
            const cls = getRelativeCostClass(worstCost);
            worstLabel = `<div class="hm-cell-worst ${cls}">${formatRelativeCost(worstCost)}</div>`;
        }

        return `<div class="hm-cell" title="${title}"><div class="hm-bar">${segments.join('')}</div>${worstLabel}</div>`;
    }

    // ========================================================================
    // Expanded Fixture Table
    // ========================================================================

    /**
     * Renders expanded fixture rows for an operation.
     * Uses the Renderer's cell rendering for consistent formatting with marginal mode support.
     * @private
     */
    _renderExpandedRows(group, columns, colSpan) {
        // Sort fixtures by worst cost descending (worst first)
        const sorted = [...group.tests].sort((a, b) => {
            const costA = this.dataAccessor.getRelativeCost(a, columns[0].id) ?? Infinity;
            const costB = this.dataAccessor.getRelativeCost(b, columns[0].id) ?? Infinity;
            return costB - costA;
        });

        // Build fixture rows as a nested scrollable table
        const fixtureRows = sorted.map(test => {
            const cells = columns.map(col => {
                if (col.id === VIEW.WORST) {
                    return this.renderer.renderTestWorstCell(test);
                }
                return this.renderer.renderTestZkvmCell(test, col.id);
            });

            return `<tr class="hm-fixture-row">` +
                `<td class="hm-fixture-indent"></td>` +
                `<td class="hm-fixture-name" title="${escapeHtml(test.id)}">${escapeHtml(test.id)}</td>` +
                cells.join('') +
                `</tr>`;
        });

        // Wrap in scrollable container using a nested table
        const colHeaders = columns.map(c =>
            `<th class="hm-th">${escapeHtml(c.label)}</th>`
        ).join('');

        return `<tr class="hm-detail-row"><td colspan="${colSpan}">` +
            `<div class="hm-fixture-scroll">` +
            `<table class="hm-fixture-table">` +
            `<thead><tr>` +
            `<th class="hm-th hm-fixture-th-indent"></th>` +
            `<th class="hm-th hm-fixture-th-name">Fixture</th>` +
            colHeaders +
            `</tr></thead>` +
            `<tbody>${fixtureRows.join('')}</tbody>` +
            `</table>` +
            `</div>` +
            `</td></tr>`;
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
                    rows.push(this._renderExpandedRows(group, columns, colSpan));
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
