/**
 * Constants and configuration for the Repricing Analysis Application.
 * All magic numbers and configuration values are centralized here.
 */

// ============================================================================
// Application Configuration
// ============================================================================

export const CONFIG = Object.freeze({
    // Pagination defaults
    DEFAULT_PAGE_SIZE: 50,
    PAGE_SIZE_OPTIONS: [25, 50, 100, 250],

    // Input debounce delay (milliseconds)
    DEBOUNCE_MS: 150,

    // Local storage key for theme preference
    THEME_KEY: 'epra-theme',

    // Default target throughput for gas repricing analysis (MGas/s)
    // This represents the target proving speed for zkVM provers
    DEFAULT_TARGET_MGAS_PER_S: 7,
});

// ============================================================================
// Status Constants
// ============================================================================

export const STATUS = Object.freeze({
    SUCCESS: 'success',
    CRASHED: 'crashed',
});

// ============================================================================
// View Mode Constants
// ============================================================================

export const VIEW = Object.freeze({
    // Show worst-case (slowest) zkVM for each test
    WORST: 'worst',
    // Show all zkVMs in separate columns
    ALL: 'all',
});

// ============================================================================
// Thresholds
// ============================================================================

export const THRESHOLDS = Object.freeze({
    // Time formatting thresholds (milliseconds)
    TIME: {
        MS_PER_SECOND: 1000,
        MS_PER_MINUTE: 60000,
    },

    // Relative cost severity thresholds
    // These determine the color coding in the UI:
    // - LOW (green): Operation is efficient, meets target well
    // - MODERATE (yellow): Operation is slightly over target
    // - HIGH (orange): Operation is significantly over target
    // - EXTREME (red): Operation needs serious attention for repricing
    RELATIVE_COST: {
        LOW: 1.5,       // < 1.5x is considered good
        MODERATE: 3.0,  // 1.5x - 3.0x is moderate concern
        HIGH: 10.0,     // 3.0x - 10.0x is high concern
        // > 10.0x is extreme
    },

    // Gas formatting thresholds
    GAS: {
        MILLION: 1_000_000,
        THOUSAND: 1_000,
    },

    // UI constants
    TOP_LIST_COUNT: 5,  // Number of items in "most expensive" / "least expensive" lists
});

// ============================================================================
// URL Parameter Keys
// ============================================================================

export const URL_PARAMS = Object.freeze({
    HARDWARE: 'hw',
    DATASET: 'dataset',
    TARGET: 'target',
    ZKVM_VIEW: 'view',
    SEARCH: 'q',
    HIDE_CRASHED: 'hideCrashed',
    OPERATIONS: 'ops',
    SORT_COLUMN: 'sort',
    SORT_DIR: 'dir',
    PAGE: 'page',
    PAGE_SIZE: 'pageSize',
    MIN_RELATIVE: 'minRel',
});

// ============================================================================
// Operation Categories
// ============================================================================

// Order in which categories appear in the UI
export const CATEGORY_ORDER = ['Opcode', 'Precompile', 'Other'];
