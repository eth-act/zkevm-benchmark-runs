/**
 * Main application class for the Repricing Analysis Application.
 * Orchestrates data loading, state management, and UI rendering.
 */

import { CONFIG, VIEW, HARDWARE_TARGET_DEFAULTS } from './constants.js';
import { debounce } from './utils.js';
import { CacheManager, DataAccessor, loadGlobalManifest, loadHardwareManifest, loadDataset } from './data.js';
import { URLState, applyURLStateToApp, applyPendingURLState } from './state.js';
import { Renderer } from './render.js';
import { HeatmapRenderer } from './heatmap.js';
import { LinearityModal } from './linearity.js';

// ============================================================================
// BenchmarkApp Class
// ============================================================================

export class BenchmarkApp {
    constructor() {
        // ====================================================================
        // Data State
        // ====================================================================
        this.globalManifest = null;  // Global manifest with hardware configs
        this.manifest = null;        // Current hardware's manifest
        this.data = null;
        this.filteredTests = [];
        this.groupedData = [];
        this.initialized = false;

        // ====================================================================
        // Selection State
        // ====================================================================
        this.selectedHardware = null;
        this.selectedOperations = new Set();
        this.selectedZkvmView = VIEW.ALL;
        // ====================================================================
        // Filter State
        // ====================================================================
        this.targetMGasPerS = CONFIG.DEFAULT_TARGET_MGAS_PER_S;
        this.minRelativeCost = null;

        // ====================================================================
        // Pending URL State (applied after data loads)
        // ====================================================================
        this.pendingURLState = null;

        // ====================================================================
        // Heatmap State
        // ====================================================================
        this.heatmapSortMode = 'cost';
        this.heatmapExpandedOps = new Set();

        // ====================================================================
        // Services (initialized during init)
        // ====================================================================
        this.cache = new CacheManager();
        this.dataAccessor = null;
        this.renderer = null;
        this.heatmapRenderer = null;
        this.linearityModal = null;

        // ====================================================================
        // DOM Elements (cached during init)
        // ====================================================================
        this.elements = {};
    }

    // ========================================================================
    // Helpers
    // ========================================================================

    /**
     * Gets the default target MGas/s for a given hardware configuration.
     * @param {string} hardwareId - The hardware ID
     * @returns {number} The default target value
     */
    getDefaultTargetForHardware(hardwareId) {
        return HARDWARE_TARGET_DEFAULTS[hardwareId] ?? CONFIG.DEFAULT_TARGET_MGAS_PER_S;
    }

    // ========================================================================
    // Initialization
    // ========================================================================

    /**
     * Caches DOM element references for efficient access.
     */
    cacheElements() {
        this.elements = {
            loading: document.getElementById('loading'),
            error: document.getElementById('error'),
            app: document.getElementById('app'),
            hardware: document.getElementById('hardware'),
            target: document.getElementById('target'),
            zkvmView: document.getElementById('zkvm-view'),
            search: document.getElementById('search'),
            hideCrashed: document.getElementById('hide-crashed'),
            summaryBar: document.getElementById('summary-bar'),
            operationFilters: document.getElementById('operation-filters'),
            themeToggle: document.getElementById('theme-toggle'),
            generatedAt: document.getElementById('generated-at'),
            hardwareInfo: document.getElementById('hardware-info'),
            rawDataLink: document.getElementById('raw-data-link'),
            quickFilters: document.getElementById('quick-filters'),
            heatmapSection: document.getElementById('heatmap-section'),
            heatmapGrid: document.getElementById('heatmap-grid'),
            heatmapCount: document.getElementById('heatmap-count'),
        };
    }

    /**
     * Main initialization function.
     */
    async init() {
        if (this.initialized) return;

        this.cacheElements();
        this.initializeTheme();
        this.initializeCrashModal();

        // Parse URL state early
        const urlState = URLState.parse();
        this.pendingURLState = applyURLStateToApp(urlState, this);

        try {
            // Load global manifest (contains hardware configs)
            this.globalManifest = await loadGlobalManifest();

            // Determine which hardware to use
            if (!this.selectedHardware || !this.globalManifest.hardware_configs.find(h => h.id === this.selectedHardware)) {
                this.selectedHardware = this.globalManifest.default_hardware;
            }

            // Apply hardware-specific default target if not specified in URL
            if (!urlState.target) {
                this.targetMGasPerS = this.getDefaultTargetForHardware(this.selectedHardware);
            }

            // Initialize hardware selector
            this.initializeHardwareSelector();

            // Load hardware manifest and auto-select combined dataset
            this.manifest = await loadHardwareManifest(this.selectedHardware);
            await this.loadCombinedDataset();

            this.initialized = true;

            // Initialize UI components
            this.initializeTargetInput();
            this.initializeZkvmViewSelector();
            this.initializeSearchAndFilters();
            this.initializeOperationFilters();
            this.initializeQuickFilters();
            this.initializeHeatmap();
            this.initializeLinearityModal();

            // Apply pending URL state
            applyPendingURLState(this.pendingURLState, this, this.data, this.elements);
            this.pendingURLState = null;

            // Restore heatmap sort button state from URL
            if (this.heatmapSortMode !== 'cost') {
                this.elements.heatmapSection?.querySelectorAll('[data-hm-sort]').forEach(b =>
                    b.classList.toggle('active', b.dataset.hmSort === this.heatmapSortMode)
                );
            }

            // Initial render
            this.refresh({ updateUrl: false });
            this.updateFooter();

            this.showApp();
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError(`Error loading data: ${error.message}`);
        }
    }

    // ========================================================================
    // Data Loading
    // ========================================================================

    /**
     * Finds and loads the combined dataset from the current hardware manifest.
     */
    async loadCombinedDataset() {
        // Prefer combined dataset, fall back to default
        const combined = this.manifest.datasets.find(d => d.combined);
        const datasetInfo = combined || this.manifest.datasets.find(d => d.id === this.manifest.default_dataset) || this.manifest.datasets[0];
        if (!datasetInfo) {
            throw new Error('No datasets available');
        }

        this.data = await loadDataset(this.selectedHardware, datasetInfo.file);
        this.cache.clearAll();

        // Initialize data accessor with new data
        this.dataAccessor = new DataAccessor(this.data, this.cache);
        this.dataAccessor.setTarget(this.targetMGasPerS);
        this.dataAccessor.precomputeWorstCases();

        // Initialize renderers
        this.renderer = new Renderer(this.elements, this.dataAccessor);
        this.heatmapRenderer = new HeatmapRenderer(this.dataAccessor, this.renderer);

        // Update linearity modal reference if it exists
        if (this.linearityModal) {
            this.linearityModal.dataAccessor = this.dataAccessor;
        }

        // Update raw data link
        if (this.elements.rawDataLink) {
            this.elements.rawDataLink.href = `data/${this.selectedHardware}/${datasetInfo.file}`;
        }
    }

    /**
     * Handles hardware change.
     * @param {string} hardwareId - The new hardware ID
     */
    async handleHardwareChange(hardwareId) {
        if (hardwareId === this.selectedHardware) return;

        this.selectedHardware = hardwareId;

        // Update target to hardware-specific default
        this.targetMGasPerS = this.getDefaultTargetForHardware(hardwareId);

        // Show loading state
        this.elements.app.classList.add('hidden');
        this.elements.loading.classList.remove('hidden');
        this.elements.loading.textContent = 'Loading hardware configuration...';

        try {
            // Load new hardware manifest and combined dataset
            this.manifest = await loadHardwareManifest(hardwareId);
            await this.loadCombinedDataset();

            this.reinitializeUI();
            this.showApp();
            this.updateURL();
        } catch (error) {
            console.error('Error loading hardware:', error);
            this.showError(`Error loading hardware: ${error.message}`);
        }
    }

    /**
     * Reinitializes UI after dataset change.
     * Resets all filters to provide a clean slate for the new dataset.
     */
    reinitializeUI() {
        // Reset filter state
        this.selectedOperations.clear();
        this.heatmapExpandedOps.clear();
        this.heatmapSortMode = 'cost';
        this.minRelativeCost = null;

        // Reset search input
        if (this.elements.search) {
            this.elements.search.value = '';
        }

        // Reset hide crashed checkbox
        if (this.elements.hideCrashed) {
            this.elements.hideCrashed.checked = false;
        }

        // Reinitialize components
        this.initializeTargetInput();
        this.elements.zkvmView.innerHTML = '';
        this.initializeZkvmViewSelector();
        this.initializeOperationFilters();
        this.initializeQuickFilters();

        // Render
        this.refresh({ updateUrl: false });
        this.updateFooter();
    }

    // ========================================================================
    // Filtering & Sorting
    // ========================================================================

    /**
     * Filters tests based on current filter settings.
     */
    filterTests() {
        const searchTerm = this.elements.search.value.toLowerCase();
        const hideCrashed = this.elements.hideCrashed.checked;
        const activeZkvm = this.selectedZkvmView === VIEW.ALL ? VIEW.WORST : this.selectedZkvmView;

        this.filteredTests = this.data.tests.filter(test => {
            // Operation filter
            if (!this.selectedOperations.has(test.operation)) return false;

            // Hide crashed filter
            if (hideCrashed && this.dataAccessor.isAllCrashed(test)) return false;

            // Search filter
            if (searchTerm) {
                const searchStr = `${test.name} ${test.operation} ${test.id}`.toLowerCase();
                if (!searchStr.includes(searchTerm)) return false;
            }

            // Min relative cost filter (crashed tests = infinite cost, always pass)
            if (this.minRelativeCost !== null) {
                const relativeCost = this.dataAccessor.getRelativeCost(test, activeZkvm);
                if (relativeCost !== null && relativeCost < this.minRelativeCost) return false;
            }

            return true;
        });
    }

    /**
     * Groups filtered tests by operation.
     */
    groupTestsByOperation() {
        const groups = new Map();

        for (const test of this.filteredTests) {
            if (!groups.has(test.operation)) {
                groups.set(test.operation, []);
            }
            groups.get(test.operation).push(test);
        }

        this.groupedData = Array.from(groups.entries()).map(([operation, tests]) => ({
            operation,
            tests,
            testCount: tests.length,
        }));
    }

    /**
     * Refreshes the UI after filter changes.
     */
    refresh({ updateUrl = true } = {}) {
        this.cache.clearGroupCache();
        this.filterTests();
        this.groupTestsByOperation();
        this.renderHeatmap();
        this.updateSummaryBar();
        this.updateQuickFilterButtons();
        if (updateUrl) this.updateURL();
    }

    /**
     * Updates the inline summary bar.
     */
    updateSummaryBar() {
        this.elements.summaryBar.innerHTML = this.renderer.renderSummaryBar({
            filteredTests: this.filteredTests,
            allTests: this.data.tests,
            zkvms: this.data.zkvms,
            zkvmView: this.selectedZkvmView,
            targetMGasPerS: this.targetMGasPerS,
        });
    }

    /**
     * Updates footer information.
     */
    updateFooter() {
        this.elements.generatedAt.textContent = new Date(this.data.generated_at).toLocaleString();

        const hw = this.data.hardware_info;
        const hwConfig = this.globalManifest?.hardware_configs?.find(h => h.id === this.selectedHardware);
        const hwName = hwConfig?.name || this.data.hardware;
        this.elements.hardwareInfo.textContent =
            `${hwName} - ${hw.cpu_model}, ${hw.total_ram_gib}GB RAM, ${hw.gpus?.[0]?.model || 'No GPU'}`;
    }

    // ========================================================================
    // Event Handlers
    // ========================================================================

    handleTargetChange(target) {
        if (target <= 0 || isNaN(target)) return;
        this.targetMGasPerS = target;
        this.dataAccessor.setTarget(target);
        this.refresh();
    }

    handleZkvmViewChange(view) {
        this.selectedZkvmView = view;
        this.refresh();
    }

    handleSearch() {
        this.refresh();
    }

    handleHideCrashedChange() {
        this.refresh();
    }

    handleMinRelativeCostChange(minCost) {
        this.minRelativeCost = minCost;
        this.refresh();
    }

    handleCategoryFilter(category) {
        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        if (category === null) {
            this.selectedOperations = new Set(allOps);
        } else {
            const categoryOps = this.data.operations_by_category?.[category] || [];
            this.selectedOperations = new Set(categoryOps);
        }

        // Update checkboxes
        this.elements.operationFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = this.selectedOperations.has(cb.value);
        });

        this.refresh();
    }

    handleOperationFilterChange(operation, checked) {
        if (checked) {
            this.selectedOperations.add(operation);
        } else {
            this.selectedOperations.delete(operation);
        }
        this.refresh({ updateUrl: false });
    }

    selectAllOperations() {
        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        this.selectedOperations = new Set(allOps);
        this.elements.operationFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
        this.refresh({ updateUrl: false });
    }

    clearAllOperations() {
        this.selectedOperations.clear();
        this.elements.operationFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
        this.refresh({ updateUrl: false });
    }

    // ========================================================================
    // UI Initialization
    // ========================================================================

    initializeHardwareSelector() {
        const select = this.elements.hardware;
        if (!select) return;

        // Render directly without renderer (called before data loads)
        select.innerHTML = this.globalManifest.hardware_configs.map(hw => {
            const selected = hw.id === this.selectedHardware ? 'selected' : '';
            return `<option value="${hw.id}" ${selected}>${hw.name} (${hw.dataset_count} datasets)</option>`;
        }).join('');
        select.addEventListener('change', (e) => this.handleHardwareChange(e.target.value));
    }

    initializeTargetInput() {
        const input = this.elements.target;
        input.value = this.targetMGasPerS;

        const debouncedChange = debounce(() => {
            const value = parseFloat(input.value);
            if (value > 0) {
                this.handleTargetChange(value);
            }
        }, CONFIG.DEBOUNCE_MS);

        input.addEventListener('input', debouncedChange);
    }

    initializeZkvmViewSelector() {
        const container = this.elements.zkvmView;
        container.innerHTML = this.renderer.renderZkvmViewSelector({
            zkvms: this.data.zkvms,
            selectedView: this.selectedZkvmView,
        });
        container.addEventListener('change', (e) => this.handleZkvmViewChange(e.target.value));
    }

    initializeSearchAndFilters() {
        const debouncedSearch = debounce(() => this.handleSearch(), CONFIG.DEBOUNCE_MS);
        this.elements.search.addEventListener('input', debouncedSearch);
        this.elements.hideCrashed.addEventListener('change', () => this.handleHideCrashedChange());
    }

    initializeOperationFilters() {
        const container = this.elements.operationFilters;
        const grouped = this.data.operations_by_category || {};
        const allOps = Object.values(grouped).flat();

        this.selectedOperations = new Set(allOps.length ? allOps : this.data.operations);

        container.innerHTML = this.renderer.renderOperationFilters({
            operationsByCategory: grouped,
            operations: this.data.operations,
            selectedOperations: this.selectedOperations,
        });

        // Add button handlers
        document.getElementById('select-all-ops-btn')?.addEventListener('click', () => this.selectAllOperations());
        document.getElementById('clear-all-ops-btn')?.addEventListener('click', () => this.clearAllOperations());

        // Add checkbox handlers
        container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', (e) => {
                this.handleOperationFilterChange(cb.value, e.target.checked);
            });
        });
    }

    initializeQuickFilters() {
        const container = this.elements.quickFilters;
        if (!container) return;

        // Min relative cost buttons
        container.querySelectorAll('[data-min-rel]').forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.dataset.minRel === '' ? null : parseFloat(btn.dataset.minRel);
                this.handleMinRelativeCostChange(val);
            });
        });

        // Category filter buttons
        container.querySelectorAll('[data-category]').forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.dataset.category;
                this.handleCategoryFilter(cat === 'all' ? null : cat);
            });
        });
    }

    updateQuickFilterButtons() {
        // Update min relative cost buttons
        document.querySelectorAll('[data-min-rel]').forEach(btn => {
            const val = btn.dataset.minRel === '' ? null : parseFloat(btn.dataset.minRel);
            btn.classList.toggle('active', this.minRelativeCost === val);
        });

        // Update category filter buttons
        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        document.querySelectorAll('[data-category]').forEach(btn => {
            const cat = btn.dataset.category;
            let isActive = false;

            if (cat === 'all') {
                isActive = this.selectedOperations.size === allOps.length;
            } else {
                const categoryOps = this.data.operations_by_category?.[cat] || [];
                isActive = categoryOps.length > 0 &&
                    categoryOps.every(op => this.selectedOperations.has(op)) &&
                    this.selectedOperations.size === categoryOps.length;
            }

            btn.classList.toggle('active', isActive);
        });
    }

    // ========================================================================
    // Heatmap
    // ========================================================================

    /**
     * Initializes heatmap event listeners (called once).
     * Uses event delegation so handlers survive re-renders.
     */
    initializeHeatmap() {
        const grid = this.elements.heatmapGrid;
        if (!grid) return;

        // Row click → toggle expansion
        grid.addEventListener('click', (e) => {
            const row = e.target.closest('.hm-row');
            if (!row) return;
            const op = row.dataset.hmOperation;
            if (this.heatmapExpandedOps.has(op)) {
                this.heatmapExpandedOps.delete(op);
            } else {
                this.heatmapExpandedOps.add(op);
            }
            this.renderHeatmap();
        });

        // Sort buttons
        const section = this.elements.heatmapSection;
        if (section) {
            section.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-hm-sort]');
                if (!btn) return;
                this.heatmapSortMode = btn.dataset.hmSort;
                section.querySelectorAll('[data-hm-sort]').forEach(b =>
                    b.classList.toggle('active', b.dataset.hmSort === this.heatmapSortMode)
                );
                this.renderHeatmap();
                this.updateURL();
            });
        }
    }

    /**
     * Initializes the linearity analysis modal.
     * Fixture rows (.hm-fixture-row) open the linearity overlay on click.
     */
    initializeLinearityModal() {
        this.linearityModal = new LinearityModal(this.dataAccessor);

        const grid = this.elements.heatmapGrid;
        if (!grid) return;

        grid.addEventListener('click', (e) => {
            const fixtureRow = e.target.closest('.hm-fixture-row[data-linearity-test]');
            if (!fixtureRow) return;

            // Don't open modal when clicking crash cells
            if (e.target.closest('.status-crashed')) return;

            const testId = fixtureRow.dataset.linearityTest;
            const test = this.data.tests.find(t => t.id === testId);
            if (test) {
                e.stopPropagation();
                this.linearityModal.open(test, this.data.zkvms);
            }
        });
    }

    /**
     * Renders the performance heatmap.
     */
    renderHeatmap() {
        if (!this.heatmapRenderer || !this.elements.heatmapGrid) return;

        this.elements.heatmapGrid.innerHTML = this.heatmapRenderer.render({
            groupedData: this.groupedData,
            zkvmView: this.selectedZkvmView,
            zkvms: this.data.zkvms,
            operationsByCategory: this.data.operations_by_category,
            expandedOps: this.heatmapExpandedOps,
            sortMode: this.heatmapSortMode,
        });

        if (this.elements.heatmapCount) {
            this.elements.heatmapCount.textContent = `(${this.groupedData.length} operations, ${this.filteredTests.length} tests)`;
        }
    }

    // ========================================================================
    // Theme Management
    // ========================================================================

    initializeTheme() {
        const savedTheme = localStorage.getItem(CONFIG.THEME_KEY) || 'light';
        this.applyTheme(savedTheme);

        this.elements.themeToggle?.addEventListener('click', () => this.toggleTheme());
    }

    applyTheme(theme) {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;

        if (this.elements.themeToggle) {
            this.elements.themeToggle.textContent = theme === 'light' ? 'Dark mode' : 'Light mode';
        }

        localStorage.setItem(CONFIG.THEME_KEY, theme);
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        this.applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    // ========================================================================
    // Crash Reason Modal
    // ========================================================================

    initializeCrashModal() {
        const modal = document.getElementById('crash-modal');
        if (!modal) return;

        const body = modal.querySelector('.crash-modal-body');
        const closeBtn = modal.querySelector('.crash-modal-close');
        const backdrop = modal.querySelector('.crash-modal-backdrop');

        const show = (reason) => {
            body.textContent = reason;
            modal.classList.remove('hidden');
        };
        const hide = () => modal.classList.add('hidden');

        document.addEventListener('click', (e) => {
            const cell = e.target.closest('[data-crash-reason]');
            if (cell) {
                e.stopPropagation();
                show(cell.dataset.crashReason);
            }
        });

        closeBtn.addEventListener('click', hide);
        backdrop.addEventListener('click', hide);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') hide();
        });
    }

    // ========================================================================
    // URL State
    // ========================================================================

    updateURL() {
        if (!this.initialized) return;

        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        URLState.serialize({
            hardware: this.selectedHardware,
            target: this.targetMGasPerS,
            zkvmView: this.selectedZkvmView,
            search: this.elements.search?.value || '',
            hideCrashed: this.elements.hideCrashed?.checked || false,
            minRelativeCost: this.minRelativeCost,
            heatmapSort: this.heatmapSortMode,
            selectedOperations: this.selectedOperations,
        }, {
            hardware: this.globalManifest?.default_hardware,
        }, allOps);
    }

    // ========================================================================
    // UI State
    // ========================================================================

    showApp() {
        this.elements.loading.classList.add('hidden');
        this.elements.app.classList.remove('hidden');
    }

    showError(message) {
        this.elements.loading.classList.add('hidden');
        this.elements.error.textContent = message;
        this.elements.error.classList.remove('hidden');
    }
}
