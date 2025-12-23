/**
 * Utility functions for the Repricing Analysis Application.
 * Pure functions with no side effects - safe to use anywhere.
 */

import { THRESHOLDS } from './constants.js';

// ============================================================================
// Security Utilities
// ============================================================================

/**
 * Escapes HTML special characters to prevent XSS attacks.
 * @param {string|null|undefined} str - The string to escape
 * @returns {string} The escaped string, safe for HTML insertion
 */
export function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}

// ============================================================================
// Timing Utilities
// ============================================================================

/**
 * Creates a debounced version of a function.
 * The function will only be called after the specified delay has passed
 * since the last invocation.
 *
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce delay in milliseconds
 * @returns {Function} The debounced function
 */
export function debounce(func, wait) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), wait);
    };
}

// ============================================================================
// Formatting Utilities
// ============================================================================

/**
 * Formats milliseconds into a human-readable time string.
 *
 * @param {number|null|undefined} ms - Time in milliseconds
 * @returns {string} Formatted time (e.g., "500ms", "2.5s", "3m 45s")
 */
export function formatTime(ms) {
    if (ms === null || ms === undefined) return '-';

    const { MS_PER_SECOND, MS_PER_MINUTE } = THRESHOLDS.TIME;

    if (ms < MS_PER_SECOND) {
        return `${ms}ms`;
    }
    if (ms < MS_PER_MINUTE) {
        return `${(ms / MS_PER_SECOND).toFixed(1)}s`;
    }

    const mins = Math.floor(ms / MS_PER_MINUTE);
    const secs = ((ms % MS_PER_MINUTE) / MS_PER_SECOND).toFixed(0);
    return `${mins}m ${secs}s`;
}

/**
 * Formats a marginal (delta) time with +/- prefix.
 *
 * @param {number|null|undefined} ms - Delta time in milliseconds
 * @returns {string} Formatted time with sign (e.g., "+2.5s", "-500ms")
 */
export function formatMarginalTime(ms) {
    if (ms === null || ms === undefined) return '-';

    const sign = ms >= 0 ? '+' : '';
    const absMs = Math.abs(ms);

    const { MS_PER_SECOND, MS_PER_MINUTE } = THRESHOLDS.TIME;

    if (absMs < MS_PER_SECOND) {
        return `${sign}${ms}ms`;
    }
    if (absMs < MS_PER_MINUTE) {
        return `${sign}${(ms / MS_PER_SECOND).toFixed(1)}s`;
    }

    const mins = Math.floor(absMs / MS_PER_MINUTE);
    const secs = ((absMs % MS_PER_MINUTE) / MS_PER_SECOND).toFixed(0);
    return `${sign}${mins}m ${secs}s`;
}

/**
 * Formats gas throughput as a human-readable string.
 *
 * @param {number} gasUsed - Gas used in the operation
 * @param {number} timeMs - Time taken in milliseconds
 * @returns {string} Formatted throughput (e.g., "7.50M gas/s", "500K gas/s")
 */
export function formatThroughput(gasUsed, timeMs) {
    if (!gasUsed || !timeMs) return '-';

    const gasPerSecond = (gasUsed * 1000) / timeMs;
    const { MILLION, THOUSAND } = THRESHOLDS.GAS;

    if (gasPerSecond >= MILLION) {
        return `${(gasPerSecond / MILLION).toFixed(2)}M gas/s`;
    }
    if (gasPerSecond >= THOUSAND) {
        return `${(gasPerSecond / THOUSAND).toFixed(2)}K gas/s`;
    }
    return `${gasPerSecond.toFixed(2)} gas/s`;
}

/**
 * Formats relative cost as a multiplier string.
 *
 * @param {number|null|undefined} cost - The relative cost value
 * @returns {string} Formatted cost (e.g., "2.50x", "-")
 */
export function formatRelativeCost(cost) {
    if (cost === null || cost === undefined) return '-';
    return cost.toFixed(2) + 'x';
}

/**
 * Gets the CSS class for a relative cost value.
 * Used to color-code operations by their cost severity.
 *
 * @param {number|null|undefined} cost - The relative cost value
 * @returns {string} CSS class name for styling
 */
export function getRelativeCostClass(cost) {
    if (cost === null || cost === undefined) return '';

    const { LOW, MODERATE, HIGH } = THRESHOLDS.RELATIVE_COST;

    if (cost < LOW) return 'relative-low';
    if (cost < MODERATE) return 'relative-moderate';
    if (cost < HIGH) return 'relative-high';
    return 'relative-extreme';
}

// ============================================================================
// Sorting Utilities
// ============================================================================

/**
 * Creates a comparator function for sorting.
 * Handles both string and numeric comparisons with direction support.
 *
 * @param {string} direction - Sort direction ('asc' or 'desc')
 * @param {Function} getValue - Function to extract comparison value from item
 * @returns {Function} Comparator function for Array.sort()
 */
export function createComparator(direction, getValue) {
    return (a, b) => {
        const valueA = getValue(a);
        const valueB = getValue(b);

        // Handle string comparison
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            const comparison = valueA.localeCompare(valueB);
            return direction === 'asc' ? comparison : -comparison;
        }

        // Handle numeric comparison (including Infinity for null values)
        const numA = valueA ?? Infinity;
        const numB = valueB ?? Infinity;
        return direction === 'asc' ? numA - numB : numB - numA;
    };
}

// ============================================================================
// Column Type Utilities
// ============================================================================

/**
 * Column types for the data table.
 * Used for consistent column identification across sorting and rendering.
 */
export const COLUMN = {
    OPERATION: 'operation',
    NAME: 'name',
    WORST_TIME: 'worst-time',
    WORST_RELATIVE: 'worst-relative',

    // Dynamic column generators for zkVM-specific columns
    zkvmTime: (zkvm) => `${zkvm}-time`,
    zkvmRelative: (zkvm) => `${zkvm}-relative`,
};

/**
 * Parses a column identifier to determine its type and associated zkVM.
 *
 * @param {string} column - The column identifier
 * @returns {{ type: string, zkvm?: string }} Parsed column info
 */
export function parseColumn(column) {
    if (column === COLUMN.OPERATION) return { type: 'operation' };
    if (column === COLUMN.NAME) return { type: 'name' };
    if (column === COLUMN.WORST_TIME) return { type: 'worst-time' };
    if (column === COLUMN.WORST_RELATIVE) return { type: 'worst-relative' };

    if (column.endsWith('-time')) {
        return { type: 'zkvm-time', zkvm: column.slice(0, -5) };
    }
    if (column.endsWith('-relative')) {
        return { type: 'zkvm-relative', zkvm: column.slice(0, -9) };
    }

    return { type: 'unknown' };
}
