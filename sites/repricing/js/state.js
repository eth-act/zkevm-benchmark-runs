/**
 * URL State Management for the Repricing Analysis Application.
 * Handles serialization and deserialization of application state to/from URL.
 * This enables shareable links that preserve the current view.
 */

import { CONFIG, URL_PARAMS, VIEW, VALUE_MODE, HARDWARE_TARGET_DEFAULTS } from './constants.js';

// ============================================================================
// URL State Manager
// ============================================================================

/**
 * Manages bidirectional sync between application state and URL parameters.
 */
export const URLState = {
    /**
     * Parses URL query parameters into a state object.
     * @returns {Object} Parsed state from current URL
     */
    parse() {
        const params = new URLSearchParams(window.location.search);

        return {
            hardware: params.get(URL_PARAMS.HARDWARE),
            dataset: params.get(URL_PARAMS.DATASET),
            target: parseFloat(params.get(URL_PARAMS.TARGET)) || null,
            zkvmView: params.get(URL_PARAMS.ZKVM_VIEW),
            valueMode: params.get(URL_PARAMS.VALUE_MODE),
            search: params.get(URL_PARAMS.SEARCH),
            hideCrashed: params.get(URL_PARAMS.HIDE_CRASHED) === '1',
            operations: params.get(URL_PARAMS.OPERATIONS)?.split(',').filter(Boolean) || null,
            sortColumn: params.get(URL_PARAMS.SORT_COLUMN),
            sortDirection: params.get(URL_PARAMS.SORT_DIR),
            page: parseInt(params.get(URL_PARAMS.PAGE), 10) || null,
            pageSize: parseInt(params.get(URL_PARAMS.PAGE_SIZE), 10) || null,
            minRelativeCost: parseFloat(params.get(URL_PARAMS.MIN_RELATIVE)) || null,
        };
    },

    /**
     * Serializes application state to URL query parameters.
     * Only includes non-default values to keep URLs clean.
     *
     * @param {Object} state - Current application state
     * @param {Object} defaults - Default values for comparison
     * @param {string[]} allOperations - All available operations (to detect if all selected)
     */
    serialize(state, defaults, allOperations) {
        const params = new URLSearchParams();

        // Hardware (only if not default)
        if (state.hardware && state.hardware !== defaults.hardware) {
            params.set(URL_PARAMS.HARDWARE, state.hardware);
        }

        // Dataset (only if not default)
        if (state.dataset && state.dataset !== defaults.dataset) {
            params.set(URL_PARAMS.DATASET, state.dataset);
        }

        // Target throughput (compare against hardware-specific default)
        const defaultTarget = HARDWARE_TARGET_DEFAULTS[state.hardware] ?? CONFIG.DEFAULT_TARGET_MGAS_PER_S;
        if (state.target !== defaultTarget) {
            params.set(URL_PARAMS.TARGET, state.target.toString());
        }

        // zkVM view mode
        if (state.zkvmView !== VIEW.WORST) {
            params.set(URL_PARAMS.ZKVM_VIEW, state.zkvmView);
        }

        // Value mode (absolute vs marginal)
        if (state.valueMode && state.valueMode !== VALUE_MODE.ABSOLUTE) {
            params.set(URL_PARAMS.VALUE_MODE, state.valueMode);
        }

        // Search query
        if (state.search) {
            params.set(URL_PARAMS.SEARCH, state.search);
        }

        // Hide crashed filter
        if (state.hideCrashed) {
            params.set(URL_PARAMS.HIDE_CRASHED, '1');
        }

        // Sort column (only if not default)
        const defaultSortColumn = defaults.sortColumn || 'worst-time';
        if (state.sortColumn !== defaultSortColumn) {
            params.set(URL_PARAMS.SORT_COLUMN, state.sortColumn);
        }

        // Sort direction (only if not default)
        if (state.sortDirection !== 'desc') {
            params.set(URL_PARAMS.SORT_DIR, state.sortDirection);
        }

        // Current page (only if not first page)
        if (state.page !== 1) {
            params.set(URL_PARAMS.PAGE, state.page.toString());
        }

        // Page size (only if not default)
        if (state.pageSize !== CONFIG.DEFAULT_PAGE_SIZE) {
            params.set(URL_PARAMS.PAGE_SIZE, state.pageSize.toString());
        }

        // Minimum relative cost filter
        if (state.minRelativeCost !== null) {
            params.set(URL_PARAMS.MIN_RELATIVE, state.minRelativeCost.toString());
        }

        // Operations filter (only if not all selected)
        if (state.selectedOperations &&
            state.selectedOperations.size > 0 &&
            state.selectedOperations.size !== allOperations.length) {
            params.set(URL_PARAMS.OPERATIONS, Array.from(state.selectedOperations).join(','));
        }

        // Update browser URL without reload
        const queryString = params.toString();
        const newURL = queryString
            ? `${window.location.pathname}?${queryString}`
            : window.location.pathname;

        window.history.replaceState(null, '', newURL);
    },
};

// ============================================================================
// State Application Helper
// ============================================================================

/**
 * Applies parsed URL state to application state object.
 * Returns the state that requires data to be loaded first.
 *
 * @param {Object} urlState - Parsed URL state
 * @param {Object} appState - Application state to update
 * @returns {Object} Pending state that needs data to be loaded first
 */
export function applyURLStateToApp(urlState, appState) {
    // Apply state that doesn't require data
    if (urlState.hardware) appState.selectedHardware = urlState.hardware;
    if (urlState.dataset) appState.selectedDataset = urlState.dataset;
    if (urlState.target && urlState.target > 0) appState.targetMGasPerS = urlState.target;
    if (urlState.zkvmView) appState.selectedZkvmView = urlState.zkvmView;
    if (urlState.valueMode && Object.values(VALUE_MODE).includes(urlState.valueMode)) {
        appState.valueMode = urlState.valueMode;
    }
    if (urlState.sortColumn) appState.sortColumn = urlState.sortColumn;
    if (urlState.sortDirection) appState.sortDirection = urlState.sortDirection;
    if (urlState.page) appState.currentPage = urlState.page;
    if (urlState.pageSize && CONFIG.PAGE_SIZE_OPTIONS.includes(urlState.pageSize)) {
        appState.pageSize = urlState.pageSize;
    }
    if (urlState.minRelativeCost) appState.minRelativeCost = urlState.minRelativeCost;

    // Return state that needs to be applied after data loads
    return {
        operations: urlState.operations,
        search: urlState.search,
        hideCrashed: urlState.hideCrashed,
    };
}

/**
 * Applies pending URL state after data has loaded.
 * This handles operations, search, and other data-dependent state.
 *
 * @param {Object} pendingState - State that was deferred
 * @param {Object} appState - Application state to update
 * @param {Object} data - Loaded dataset
 * @param {Object} elements - DOM element references
 */
export function applyPendingURLState(pendingState, appState, data, elements) {
    // Apply operations filter
    if (pendingState.operations) {
        const validOps = pendingState.operations.filter(op =>
            data.operations.includes(op)
        );
        if (validOps.length > 0) {
            appState.selectedOperations = new Set(validOps);
            // Update checkboxes to match
            elements.operationFilters?.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.checked = appState.selectedOperations.has(cb.value);
            });
        }
    }

    // Apply search
    if (pendingState.search && elements.search) {
        elements.search.value = pendingState.search;
    }

    // Apply hide crashed
    if (pendingState.hideCrashed && elements.hideCrashed) {
        elements.hideCrashed.checked = true;
    }

    // Apply zkVM view to radio buttons
    if (appState.selectedZkvmView && elements.zkvmView) {
        const radio = elements.zkvmView.querySelector(
            `input[value="${appState.selectedZkvmView}"]`
        );
        if (radio) radio.checked = true;
    }
}
