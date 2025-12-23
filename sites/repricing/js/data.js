/**
 * Data access layer for the Repricing Analysis Application.
 * Handles all data retrieval, calculations, and caching.
 */

import { STATUS, VIEW } from './constants.js';

// ============================================================================
// Cache Manager
// ============================================================================

/**
 * Manages computation caches with explicit dependency tracking.
 * Each cache has documented dependencies - when those dependencies change,
 * the corresponding cache must be cleared.
 */
export class CacheManager {
    constructor() {
        // Worst-case time per test (depends on: dataset)
        this.worstCase = new Map();

        // Which zkVM had the worst time per test (depends on: dataset)
        this.worstCaseZkvm = new Map();

        // Relative cost per test+zkvm+target (depends on: dataset, targetMGasPerS)
        this.relativeCost = new Map();

        // Group worst-case stats (depends on: filteredTests)
        this.groupWorstCase = new Map();
    }

    /**
     * Clear all caches. Call when dataset changes.
     */
    clearAll() {
        this.worstCase.clear();
        this.worstCaseZkvm.clear();
        this.relativeCost.clear();
        this.groupWorstCase.clear();
    }

    /**
     * Clear relative cost cache. Call when target throughput changes.
     */
    clearRelativeCost() {
        this.relativeCost.clear();
        // Group worst case also depends on relative cost indirectly
        this.groupWorstCase.clear();
    }

    /**
     * Clear group cache. Call when filters change.
     */
    clearGroupCache() {
        this.groupWorstCase.clear();
    }
}

// ============================================================================
// Data Accessor
// ============================================================================

/**
 * Provides access to benchmark data with computed values and caching.
 */
export class DataAccessor {
    /**
     * @param {Object} data - The loaded dataset
     * @param {CacheManager} cache - The cache manager instance
     */
    constructor(data, cache) {
        this.data = data;
        this.cache = cache;
        this.targetMGasPerS = 7; // Default, will be updated

        // Baseline data for marginal cost calculations
        this.baselineData = null;
        this.baselineConfig = null;
        this.marginalGas = null; // Gas difference between current and baseline
    }

    /**
     * Sets the baseline dataset for marginal cost calculations.
     * @param {Object} baselineData - The baseline dataset
     * @param {string} baselineConfig - The baseline config name (e.g., "10M-gas-limit")
     * @param {number} marginalGas - Gas difference between current and baseline datasets
     */
    setBaselineData(baselineData, baselineConfig, marginalGas) {
        this.baselineData = baselineData;
        this.baselineConfig = baselineConfig;
        this.marginalGas = marginalGas;
        // Clear caches since marginal calculations depend on baseline
        this.cache.clearAll();
    }

    /**
     * Clears the baseline data (switches back to absolute mode).
     */
    clearBaselineData() {
        this.baselineData = null;
        this.baselineConfig = null;
        this.marginalGas = null;
        this.cache.clearAll();
    }

    /**
     * Checks if baseline data is loaded for marginal calculations.
     * @returns {boolean}
     */
    hasBaselineData() {
        return this.baselineData !== null;
    }

    /**
     * Update the target throughput (invalidates relative cost cache).
     * @param {number} target - New target in MGas/s
     */
    setTarget(target) {
        if (target !== this.targetMGasPerS) {
            this.targetMGasPerS = target;
            this.cache.clearRelativeCost();
        }
    }

    // ========================================================================
    // Basic Data Access
    // ========================================================================

    /**
     * Gets the proving time for a test on a specific zkVM.
     * @param {Object} test - The test object
     * @param {string} zkvm - The zkVM identifier
     * @returns {number|null} Proving time in ms, or null if crashed/missing
     */
    getProvingTime(test, zkvm) {
        const result = test.results[zkvm];
        if (!result || result.status !== STATUS.SUCCESS) return null;
        return result.proving_time_ms;
    }

    /**
     * Checks if all zkVMs crashed for a test.
     * @param {Object} test - The test object
     * @returns {boolean} True if all zkVMs crashed
     */
    isAllCrashed(test) {
        return this.data.zkvms.every(zkvm => {
            const result = test.results[zkvm];
            return !result || result.status !== STATUS.SUCCESS;
        });
    }

    /**
     * Checks if any zkVM succeeded for a test.
     * @param {Object} test - The test object
     * @returns {boolean} True if at least one zkVM succeeded
     */
    hasAnySuccess(test) {
        return this.data.zkvms.some(zkvm => {
            const result = test.results[zkvm];
            return result && result.status === STATUS.SUCCESS;
        });
    }

    // ========================================================================
    // Worst Case Calculations (Cached)
    // ========================================================================

    /**
     * Gets the worst-case (slowest) proving time across all zkVMs.
     * Results are cached for performance.
     *
     * @param {Object} test - The test object
     * @returns {number|null} Worst-case time in ms, or null if all crashed
     */
    getWorstCaseTime(test) {
        if (this.cache.worstCase.has(test.id)) {
            return this.cache.worstCase.get(test.id);
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

        this.cache.worstCase.set(test.id, maxTime);
        this.cache.worstCaseZkvm.set(test.id, worstZkvm);
        return maxTime;
    }

    /**
     * Gets which zkVM had the worst-case time for a test.
     * @param {Object} test - The test object
     * @returns {string|null} The zkVM identifier, or null if all crashed
     */
    getWorstCaseZkvm(test) {
        // Ensure worst case is computed (populates both caches)
        if (!this.cache.worstCaseZkvm.has(test.id)) {
            this.getWorstCaseTime(test);
        }
        return this.cache.worstCaseZkvm.get(test.id);
    }

    // ========================================================================
    // Throughput & Relative Cost Calculations
    // ========================================================================

    /**
     * Gets the actual throughput in MGas/s for a test.
     *
     * @param {Object} test - The test object
     * @param {string} zkvm - The zkVM identifier, or 'worst' for worst-case
     * @returns {number|null} Throughput in MGas/s, or null if unavailable
     */
    getActualMGasPerS(test, zkvm) {
        const gasUsed = test.block_used_gas;
        if (!gasUsed) return null;

        const provingTimeMs = zkvm === VIEW.WORST
            ? this.getWorstCaseTime(test)
            : this.getProvingTime(test, zkvm);

        if (!provingTimeMs) return null;

        // Convert: (gas / time_ms) * 1000 / 1_000_000 = gas / time_ms / 1000
        return gasUsed / provingTimeMs / 1000;
    }

    /**
     * Gets the relative cost of a test based on target throughput.
     *
     * If target is 7 MGas/s and actual is 1 MGas/s, relative cost = 7x.
     * This indicates the operation is 7x more expensive than it should be.
     *
     * @param {Object} test - The test object
     * @param {string} zkvm - The zkVM identifier, or 'worst' for worst-case
     * @returns {number|null} Relative cost multiplier, or null if unavailable
     */
    getRelativeCost(test, zkvm) {
        const cacheKey = `${test.id}-${zkvm}-${this.targetMGasPerS}`;
        if (this.cache.relativeCost.has(cacheKey)) {
            return this.cache.relativeCost.get(cacheKey);
        }

        const actualMGasPerS = this.getActualMGasPerS(test, zkvm);
        if (!actualMGasPerS || actualMGasPerS <= 0) return null;

        const cost = this.targetMGasPerS / actualMGasPerS;
        this.cache.relativeCost.set(cacheKey, cost);
        return cost;
    }

    // ========================================================================
    // Marginal Cost Calculations
    // ========================================================================

    /**
     * Normalizes a test ID by removing the gas limit value.
     * e.g., "test_arithmetic[fork_Prague-benchmark-gas-value_30M-..."
     *    -> "test_arithmetic[fork_Prague-benchmark-gas-value_XXM-..."
     * @private
     */
    normalizeTestId(testId) {
        // Replace gas-value_XXM pattern with a normalized placeholder
        return testId.replace(/gas-value_\d+M/g, 'gas-value_XXM');
    }

    /**
     * Finds the matching test in the baseline dataset.
     * Matches by normalized test ID (ignoring gas limit differences).
     *
     * @param {Object} test - The test object from current dataset
     * @returns {Object|null} Matching test from baseline, or null if not found
     */
    findBaselineTest(test) {
        if (!this.baselineData) return null;
        const normalizedId = this.normalizeTestId(test.id);
        return this.baselineData.tests.find(t => this.normalizeTestId(t.id) === normalizedId) || null;
    }

    /**
     * Gets the marginal proving time (current - baseline) for a test.
     *
     * @param {Object} test - The test object from current dataset
     * @param {string} zkvm - The zkVM identifier, or 'worst' for worst-case
     * @returns {number|null} Marginal time in ms, or null if unavailable
     */
    getMarginalProvingTime(test, zkvm) {
        const baselineTest = this.findBaselineTest(test);
        if (!baselineTest) return null;

        const currentTime = zkvm === VIEW.WORST
            ? this.getWorstCaseTime(test)
            : this.getProvingTime(test, zkvm);

        // For baseline worst case, we need to use the same zkvm as current
        // to get a fair comparison
        const baselineTime = zkvm === VIEW.WORST
            ? this.getBaselineWorstCaseTime(baselineTest)
            : this.getBaselineProvingTime(baselineTest, zkvm);

        if (currentTime === null || baselineTime === null) return null;

        return currentTime - baselineTime;
    }

    /**
     * Gets the proving time for a test in the baseline dataset.
     * @private
     */
    getBaselineProvingTime(baselineTest, zkvm) {
        const result = baselineTest.results[zkvm];
        if (!result || result.status !== STATUS.SUCCESS) return null;
        return result.proving_time_ms;
    }

    /**
     * Gets the worst-case proving time for a test in the baseline dataset.
     * @private
     */
    getBaselineWorstCaseTime(baselineTest) {
        let maxTime = null;
        for (const zkvm of this.baselineData.zkvms) {
            const result = baselineTest.results[zkvm];
            if (result && result.status === STATUS.SUCCESS) {
                const time = result.proving_time_ms;
                if (time !== null && (maxTime === null || time > maxTime)) {
                    maxTime = time;
                }
            }
        }
        return maxTime;
    }

    /**
     * Gets the marginal relative cost for a test.
     * Uses marginal gas (difference between datasets) instead of absolute gas.
     *
     * @param {Object} test - The test object from current dataset
     * @param {string} zkvm - The zkVM identifier, or 'worst' for worst-case
     * @returns {number|null} Marginal relative cost multiplier, or null if unavailable
     */
    getMarginalRelativeCost(test, zkvm) {
        const marginalTime = this.getMarginalProvingTime(test, zkvm);
        if (marginalTime === null || marginalTime <= 0 || !this.marginalGas) return null;

        // Calculate marginal throughput: marginal_gas / marginal_time
        const marginalMGasPerS = this.marginalGas / marginalTime / 1000;
        if (marginalMGasPerS <= 0) return null;

        return this.targetMGasPerS / marginalMGasPerS;
    }

    /**
     * Checks if a test has valid marginal data (exists in both datasets).
     *
     * @param {Object} test - The test object from current dataset
     * @returns {boolean} True if marginal data is available
     */
    hasMarginalData(test) {
        return this.findBaselineTest(test) !== null;
    }

    // ========================================================================
    // Group Calculations
    // ========================================================================

    /**
     * Gets the worst-case proving time for a group of tests on a specific zkVM.
     *
     * @param {Object} group - The group object with tests array
     * @param {string} zkvm - The zkVM identifier, or 'worst' for worst-case
     * @returns {{ time: number|null, test: Object|null, zkvm: string|null }}
     */
    getGroupWorstCase(group, zkvm) {
        const cacheKey = `${group.operation}-${zkvm}`;
        if (this.cache.groupWorstCase.has(cacheKey)) {
            return this.cache.groupWorstCase.get(cacheKey);
        }

        let worstTime = null;
        let worstTest = null;
        let worstZkvm = null;

        for (const test of group.tests) {
            if (zkvm === VIEW.WORST) {
                const time = this.getWorstCaseTime(test);
                if (time !== null && (worstTime === null || time > worstTime)) {
                    worstTime = time;
                    worstTest = test;
                    worstZkvm = this.getWorstCaseZkvm(test);
                }
            } else {
                const time = this.getProvingTime(test, zkvm);
                if (time !== null && (worstTime === null || time > worstTime)) {
                    worstTime = time;
                    worstTest = test;
                    worstZkvm = zkvm;
                }
            }
        }

        const result = { time: worstTime, test: worstTest, zkvm: worstZkvm };
        this.cache.groupWorstCase.set(cacheKey, result);
        return result;
    }

    /**
     * Gets the relative cost for a group based on its worst-case test.
     *
     * @param {Object} group - The group object
     * @param {string} zkvm - The zkVM identifier, or 'worst' for worst-case
     * @returns {number|null} Relative cost, or null if unavailable
     */
    getGroupRelativeCost(group, zkvm) {
        const worst = this.getGroupWorstCase(group, zkvm);
        if (!worst.test) return null;

        return zkvm === VIEW.WORST
            ? this.getRelativeCost(worst.test, VIEW.WORST)
            : this.getRelativeCost(worst.test, zkvm);
    }

    // ========================================================================
    // Precomputation
    // ========================================================================

    /**
     * Precomputes worst-case times for all tests.
     * Call this after loading a new dataset for better initial performance.
     */
    precomputeWorstCases() {
        for (const test of this.data.tests) {
            this.getWorstCaseTime(test);
        }
    }
}

// ============================================================================
// Data Loading
// ============================================================================

/**
 * Loads the global manifest file containing available hardware configurations.
 * @returns {Promise<Object>} The global manifest object
 * @throws {Error} If manifest fails to load
 */
export async function loadGlobalManifest() {
    const response = await fetch('data/manifest.json');
    if (!response.ok) {
        throw new Error(`Failed to load global manifest: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

/**
 * Loads the manifest for a specific hardware configuration.
 * @param {string} hardware - The hardware identifier (e.g., "1xL40s")
 * @returns {Promise<Object>} The hardware manifest object
 * @throws {Error} If manifest fails to load
 */
export async function loadHardwareManifest(hardware) {
    const response = await fetch(`data/${hardware}/manifest.json`);
    if (!response.ok) {
        throw new Error(`Failed to load manifest for ${hardware}: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

/**
 * Loads a specific dataset by hardware and filename.
 * @param {string} hardware - The hardware identifier (e.g., "1xL40s")
 * @param {string} filename - The dataset filename (e.g., "results-10M-gas-limit.json")
 * @returns {Promise<Object>} The dataset object
 * @throws {Error} If dataset fails to load
 */
export async function loadDataset(hardware, filename) {
    const response = await fetch(`data/${hardware}/${filename}`);
    if (!response.ok) {
        throw new Error(`Failed to load dataset: ${response.status} ${response.statusText}`);
    }
    return response.json();
}
