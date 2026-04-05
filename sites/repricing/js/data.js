/**
 * Data access layer for the Repricing Analysis Application.
 * Handles all data retrieval, calculations, and caching.
 *
 * Supports two data formats:
 * - Legacy: each test has flat `results` and `block_used_gas`
 * - Combined: each test has `data_points[]`, each with `gas_limit`, `block_used_gas`, `results`
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

        // Worst data point per test+zkvm+target (depends on: dataset, targetMGasPerS)
        this.worstDataPoint = new Map();
    }

    /**
     * Clear all caches. Call when dataset changes.
     */
    clearAll() {
        this.worstCase.clear();
        this.worstCaseZkvm.clear();
        this.relativeCost.clear();
        this.groupWorstCase.clear();
        this.worstDataPoint.clear();
    }

    /**
     * Clear relative cost cache. Call when target throughput changes.
     */
    clearRelativeCost() {
        this.relativeCost.clear();
        this.groupWorstCase.clear();
        this.worstDataPoint.clear();
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
        /** True when the loaded dataset uses the combined (multi-gas) format. */
        this.isCombined = Array.isArray(data.gas_limits);
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
    // Combined-mode helpers
    // ========================================================================

    /**
     * For combined data: finds the data point with the worst (highest) relative
     * cost for a given test and zkvm. Returns {dp, throughput} or null.
     * Results are cached per test+zkvm+target.
     */
    getWorstDataPoint(test, zkvm) {
        if (!this.isCombined) return null;

        const cacheKey = `${test.id}-${zkvm}-${this.targetMGasPerS}`;
        if (this.cache.worstDataPoint.has(cacheKey)) {
            return this.cache.worstDataPoint.get(cacheKey);
        }

        let worstDp = null;
        let worstThroughput = Infinity;

        for (const dp of test.data_points) {
            const gasUsed = dp.block_used_gas;
            if (!gasUsed) continue;

            let provingTimeMs;
            if (zkvm === VIEW.WORST) {
                // Find slowest successful zkvm in this data point
                provingTimeMs = null;
                for (const z of this.data.zkvms) {
                    const r = dp.results[z];
                    if (r && r.status === STATUS.SUCCESS) {
                        if (provingTimeMs === null || r.proving_time_ms > provingTimeMs) {
                            provingTimeMs = r.proving_time_ms;
                        }
                    }
                }
            } else {
                const r = dp.results[zkvm];
                provingTimeMs = (r && r.status === STATUS.SUCCESS) ? r.proving_time_ms : null;
            }

            if (provingTimeMs === null || provingTimeMs <= 0) continue;

            const throughput = gasUsed / provingTimeMs / 1000;
            if (throughput < worstThroughput) {
                worstThroughput = throughput;
                worstDp = dp;
            }
        }

        const result = worstDp ? { dp: worstDp, throughput: worstThroughput } : null;
        this.cache.worstDataPoint.set(cacheKey, result);
        return result;
    }

    /**
     * For combined data + VIEW.WORST: finds which zkvm is slowest in the worst data point.
     * @private
     */
    _getWorstZkvmInDp(dp) {
        let worstZkvm = null;
        let worstTime = null;
        for (const z of this.data.zkvms) {
            const r = dp.results[z];
            if (r && r.status === STATUS.SUCCESS) {
                if (worstTime === null || r.proving_time_ms > worstTime) {
                    worstTime = r.proving_time_ms;
                    worstZkvm = z;
                }
            }
        }
        return worstZkvm;
    }

    /**
     * For the linearity overlay: returns all successful data points for a test+zkvm.
     * @param {Object} test - The test object
     * @param {string} zkvm - The zkVM identifier (not VIEW.WORST)
     * @returns {Array<{gas_limit: string, gas_used: number, proving_time_ms: number}>}
     */
    getDataPoints(test, zkvm) {
        if (!this.isCombined) {
            // Legacy: single data point
            const r = test.results[zkvm];
            if (!r || r.status !== STATUS.SUCCESS) return [];
            return [{
                gas_limit: this.data.gas_limit || 'unknown',
                gas_used: test.block_used_gas,
                proving_time_ms: r.proving_time_ms,
            }];
        }

        const points = [];
        for (const dp of test.data_points) {
            const r = dp.results[zkvm];
            if (r && r.status === STATUS.SUCCESS && dp.block_used_gas) {
                points.push({
                    gas_limit: dp.gas_limit,
                    gas_used: dp.block_used_gas,
                    proving_time_ms: r.proving_time_ms,
                });
            }
        }
        return points;
    }

    /**
     * For combined data: returns true if ANY data point crashed for the given zkvm.
     * For VIEW.WORST: returns true if any data point has all zkvms crashed.
     */
    hasAnyCrash(test, zkvm) {
        if (!this.isCombined) return false;

        for (const dp of test.data_points) {
            if (zkvm === VIEW.WORST) {
                // This data point is "crashed" if no zkvm succeeded
                const anySuccess = this.data.zkvms.some(z => {
                    const r = dp.results[z];
                    return r && r.status === STATUS.SUCCESS;
                });
                if (!anySuccess) return true;
            } else {
                const r = dp.results[zkvm];
                if (!r || r.status !== STATUS.SUCCESS) return true;
            }
        }
        return false;
    }

    // ========================================================================
    // Basic Data Access
    // ========================================================================

    /**
     * Gets the proving time for a test on a specific zkVM.
     * In combined mode, returns proving time from the worst (highest cost) data point.
     */
    getProvingTime(test, zkvm) {
        if (this.isCombined) {
            const worst = this.getWorstDataPoint(test, zkvm);
            if (!worst) return null;
            if (zkvm === VIEW.WORST) {
                // Return the slowest zkvm's time in the worst data point
                let maxTime = null;
                for (const z of this.data.zkvms) {
                    const r = worst.dp.results[z];
                    if (r && r.status === STATUS.SUCCESS) {
                        if (maxTime === null || r.proving_time_ms > maxTime) {
                            maxTime = r.proving_time_ms;
                        }
                    }
                }
                return maxTime;
            }
            const r = worst.dp.results[zkvm];
            return (r && r.status === STATUS.SUCCESS) ? r.proving_time_ms : null;
        }

        const result = test.results[zkvm];
        if (!result || result.status !== STATUS.SUCCESS) return null;
        return result.proving_time_ms;
    }

    /**
     * Checks if all zkVMs crashed for a test.
     */
    isAllCrashed(test) {
        if (this.isCombined) {
            // All crashed = no successful result in ANY data point for ANY zkvm
            for (const dp of test.data_points) {
                for (const zkvm of this.data.zkvms) {
                    const r = dp.results[zkvm];
                    if (r && r.status === STATUS.SUCCESS) return false;
                }
            }
            // At least one crash must exist
            for (const dp of test.data_points) {
                for (const zkvm of this.data.zkvms) {
                    const r = dp.results[zkvm];
                    if (r && r.status === STATUS.CRASHED) return true;
                }
            }
            return false;
        }

        let hasCrash = false;
        for (const zkvm of this.data.zkvms) {
            const result = test.results[zkvm];
            if (result && result.status === STATUS.SUCCESS) return false;
            if (result && result.status === STATUS.CRASHED) hasCrash = true;
        }
        return hasCrash;
    }

    /**
     * Checks if all zkVMs are missing data for a test.
     */
    isAllMissing(test) {
        if (this.isCombined) {
            return test.data_points.every(dp =>
                this.data.zkvms.every(zkvm => !dp.results[zkvm])
            );
        }
        return this.data.zkvms.every(zkvm => !test.results[zkvm]);
    }

    /**
     * Collects crash reasons from all crashed zkVMs for a test.
     */
    getAllCrashReasons(test) {
        const reasons = [];
        if (this.isCombined) {
            // Collect unique crash reasons across all data points
            const seen = new Set();
            for (const dp of test.data_points) {
                for (const zkvm of this.data.zkvms) {
                    const r = dp.results[zkvm];
                    if (r && r.status !== STATUS.SUCCESS && r.crash_reason) {
                        const key = `${zkvm}: ${r.crash_reason}`;
                        if (!seen.has(key)) {
                            seen.add(key);
                            reasons.push(key);
                        }
                    }
                }
            }
        } else {
            for (const zkvm of this.data.zkvms) {
                const result = test.results[zkvm];
                if (result && result.status !== STATUS.SUCCESS && result.crash_reason) {
                    reasons.push(`${zkvm}: ${result.crash_reason}`);
                }
            }
        }
        return reasons.length > 0 ? reasons.join('\n\n') : null;
    }

    /**
     * Checks if any zkVM succeeded for a test.
     */
    hasAnySuccess(test) {
        if (this.isCombined) {
            return test.data_points.some(dp =>
                this.data.zkvms.some(zkvm => {
                    const r = dp.results[zkvm];
                    return r && r.status === STATUS.SUCCESS;
                })
            );
        }
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
     * In combined mode, uses the worst data point (highest cost).
     */
    getWorstCaseTime(test) {
        if (this.cache.worstCase.has(test.id)) {
            return this.cache.worstCase.get(test.id);
        }

        if (this.isCombined) {
            const worst = this.getWorstDataPoint(test, VIEW.WORST);
            if (!worst) {
                this.cache.worstCase.set(test.id, null);
                this.cache.worstCaseZkvm.set(test.id, null);
                return null;
            }
            // Find which zkvm is slowest in that data point
            let maxTime = null;
            let worstZkvm = null;
            for (const z of this.data.zkvms) {
                const r = worst.dp.results[z];
                if (r && r.status === STATUS.SUCCESS) {
                    if (maxTime === null || r.proving_time_ms > maxTime) {
                        maxTime = r.proving_time_ms;
                        worstZkvm = z;
                    }
                }
            }
            this.cache.worstCase.set(test.id, maxTime);
            this.cache.worstCaseZkvm.set(test.id, worstZkvm);
            return maxTime;
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
     */
    getWorstCaseZkvm(test) {
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
     * In combined mode, returns throughput from the worst data point.
     */
    getActualMGasPerS(test, zkvm) {
        if (this.isCombined) {
            const worst = this.getWorstDataPoint(test, zkvm);
            return worst ? worst.throughput : null;
        }

        const gasUsed = test.block_used_gas;
        if (!gasUsed) return null;

        const provingTimeMs = zkvm === VIEW.WORST
            ? this.getWorstCaseTime(test)
            : this.getProvingTime(test, zkvm);

        if (!provingTimeMs) return null;

        return gasUsed / provingTimeMs / 1000;
    }

    /**
     * Gets the relative cost of a test based on target throughput.
     */
    getRelativeCost(test, zkvm) {
        const cacheKey = `${test.id}-${zkvm}-${this.targetMGasPerS}`;
        if (this.cache.relativeCost.has(cacheKey)) {
            return this.cache.relativeCost.get(cacheKey);
        }

        if (this.isCombined) {
            const worst = this.getWorstDataPoint(test, zkvm);
            if (!worst) return null;
            // Check for zero-gas edge case
            if (!worst.dp.block_used_gas) {
                this.cache.relativeCost.set(cacheKey, 0);
                return 0;
            }
            const cost = this.targetMGasPerS / worst.throughput;
            this.cache.relativeCost.set(cacheKey, cost);
            return cost;
        }

        // Legacy mode
        if (!test.block_used_gas) {
            const hasProvingTime = zkvm === VIEW.WORST
                ? this.getWorstCaseTime(test) !== null
                : this.getProvingTime(test, zkvm) !== null;
            if (hasProvingTime) {
                this.cache.relativeCost.set(cacheKey, 0);
                return 0;
            }
            return null;
        }

        const actualMGasPerS = this.getActualMGasPerS(test, zkvm);
        if (!actualMGasPerS || actualMGasPerS <= 0) return null;

        const cost = this.targetMGasPerS / actualMGasPerS;
        this.cache.relativeCost.set(cacheKey, cost);
        return cost;
    }

    // ========================================================================
    // Group Calculations
    // ========================================================================

    /**
     * Gets the worst-case proving time for a group of tests on a specific zkVM.
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
 */
export async function loadDataset(hardware, filename) {
    const response = await fetch(`data/${hardware}/${filename}`);
    if (!response.ok) {
        throw new Error(`Failed to load dataset: ${response.status} ${response.statusText}`);
    }
    return response.json();
}
