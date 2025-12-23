/**
 * Main application class for the Repricing Analysis Application.
 * Orchestrates data loading, state management, and UI rendering.
 */

import { CONFIG, VIEW, VALUE_MODE, STATUS, HARDWARE_TARGET_DEFAULTS, getBaselineConfig, getMarginalGasLimit } from './constants.js';
import { debounce, createComparator, parseColumn } from './utils.js';
import { CacheManager, DataAccessor, loadGlobalManifest, loadHardwareManifest, loadDataset } from './data.js';
import { URLState, applyURLStateToApp, applyPendingURLState } from './state.js';
import { Renderer } from './render.js';

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
        this.selectedDataset = null;
        this.selectedOperations = new Set();
        this.selectedZkvmView = VIEW.ALL;
        this.valueMode = VALUE_MODE.ABSOLUTE;  // 'absolute' or 'marginal'
        this.expandedOperations = new Set();

        // ====================================================================
        // Filter State
        // ====================================================================
        this.targetMGasPerS = CONFIG.DEFAULT_TARGET_MGAS_PER_S;
        this.minRelativeCost = null;

        // ====================================================================
        // Sort State
        // ====================================================================
        this.sortColumn = 'worst-time';
        this.sortDirection = 'desc';

        // ====================================================================
        // Pagination State
        // ====================================================================
        this.currentPage = 1;
        this.pageSize = CONFIG.DEFAULT_PAGE_SIZE;

        // ====================================================================
        // Pending URL State (applied after data loads)
        // ====================================================================
        this.pendingURLState = null;

        // ====================================================================
        // Services (initialized during init)
        // ====================================================================
        this.cache = new CacheManager();
        this.dataAccessor = null;
        this.renderer = null;

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
            dataset: document.getElementById('dataset'),
            target: document.getElementById('target'),
            zkvmView: document.getElementById('zkvm-view'),
            search: document.getElementById('search'),
            hideCrashed: document.getElementById('hide-crashed'),
            statsPanel: document.getElementById('stats-panel'),
            targetInfo: document.getElementById('target-info'),
            operationFilters: document.getElementById('operation-filters'),
            tableHeader: document.getElementById('table-header'),
            tableBody: document.getElementById('table-body'),
            tableCount: document.getElementById('table-count'),
            resultsTable: document.getElementById('results-table'),
            paginationTop: document.getElementById('pagination-top'),
            paginationBottom: document.getElementById('pagination-bottom'),
            themeToggle: document.getElementById('theme-toggle'),
            generatedAt: document.getElementById('generated-at'),
            hardwareInfo: document.getElementById('hardware-info'),
            rawDataLink: document.getElementById('raw-data-link'),
            quickFilters: document.getElementById('quick-filters'),
            valueModeSelector: document.getElementById('value-mode'),
            marginalInfo: document.getElementById('marginal-info'),
        };
    }

    /**
     * Main initialization function.
     */
    async init() {
        if (this.initialized) return;

        this.cacheElements();
        this.initializeTheme();

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

            // Load hardware manifest
            this.manifest = await loadHardwareManifest(this.selectedHardware);

            // Determine which dataset to load
            if (!this.selectedDataset || !this.manifest.datasets.find(d => d.id === this.selectedDataset)) {
                this.selectedDataset = this.manifest.default_dataset;
            }

            // Initialize dataset selector
            this.initializeDatasetSelector();

            // Load the selected dataset
            await this.loadDatasetById(this.selectedDataset);

            this.initialized = true;

            // Initialize UI components
            this.initializeTargetInput();
            this.initializeZkvmViewSelector();
            this.initializeValueModeToggle();
            this.initializeSearchAndFilters();
            this.initializeOperationFilters();
            this.initializeQuickFilters();

            // Apply pending URL state
            applyPendingURLState(this.pendingURLState, this, this.data, this.elements);
            this.pendingURLState = null;

            // Initial render
            this.refresh({ resetPage: false, updateUrl: false });
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
     * Loads a dataset by ID.
     * @param {string} datasetId - The dataset ID to load
     */
    async loadDatasetById(datasetId) {
        const datasetInfo = this.manifest.datasets.find(d => d.id === datasetId);
        if (!datasetInfo) {
            throw new Error(`Dataset not found: ${datasetId}`);
        }

        this.data = await loadDataset(this.selectedHardware, datasetInfo.file);
        this.cache.clearAll();

        // Initialize data accessor with new data
        this.dataAccessor = new DataAccessor(this.data, this.cache);
        this.dataAccessor.setTarget(this.targetMGasPerS);
        this.dataAccessor.precomputeWorstCases();

        // Initialize renderer
        this.renderer = new Renderer(this.elements, this.dataAccessor);

        // Update raw data link
        if (this.elements.rawDataLink) {
            this.elements.rawDataLink.href = `data/${this.selectedHardware}/${datasetInfo.file}`;
        }
    }

    /**
     * Handles dataset change.
     * @param {string} datasetId - The new dataset ID
     */
    async handleDatasetChange(datasetId) {
        if (datasetId === this.selectedDataset) return;

        this.selectedDataset = datasetId;

        // Show loading state
        this.elements.app.classList.add('hidden');
        this.elements.loading.classList.remove('hidden');
        this.elements.loading.textContent = 'Loading dataset...';

        try {
            await this.loadDatasetById(datasetId);
            this.reinitializeUI();
            this.showApp();
            this.updateURL();
        } catch (error) {
            console.error('Error loading dataset:', error);
            this.showError(`Error loading dataset: ${error.message}`);
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
            // Load new hardware manifest
            this.manifest = await loadHardwareManifest(hardwareId);

            // Update dataset selector with new datasets
            this.initializeDatasetSelector();

            // Select default dataset for this hardware (or keep if same name exists)
            const existingDataset = this.manifest.datasets.find(d => d.id === this.selectedDataset);
            if (existingDataset) {
                // Keep same dataset name if it exists in new hardware
                await this.loadDatasetById(this.selectedDataset);
            } else {
                // Use default dataset for this hardware
                this.selectedDataset = this.manifest.default_dataset;
                await this.loadDatasetById(this.selectedDataset);
            }

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
     */
    reinitializeUI() {
        // Reset state
        this.selectedOperations.clear();
        this.expandedOperations.clear();
        this.currentPage = 1;

        // Reset to absolute mode (baseline may have changed)
        this.valueMode = VALUE_MODE.ABSOLUTE;
        this.dataAccessor.clearBaselineData();

        // Reinitialize components
        this.initializeTargetInput();
        this.elements.zkvmView.innerHTML = '';
        this.initializeZkvmViewSelector();
        this.initializeValueModeToggle();
        this.initializeOperationFilters();
        this.initializeQuickFilters();

        // Render
        this.refresh({ resetPage: true, updateUrl: false });
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
     * Checks if any test in a group crashed for a specific zkVM.
     * Matches the display logic in renderer.hasAnyCrashed.
     */
    hasAnyCrashed(group, zkvm) {
        return group.tests.some(test => {
            if (zkvm === VIEW.WORST) {
                return this.dataAccessor.isAllCrashed(test);
            }
            const result = test.results[zkvm];
            return !result || result.status !== STATUS.SUCCESS;
        });
    }

    /**
     * Sorts grouped data based on current sort settings.
     */
    sortGroupedData() {
        const activeZkvm = this.selectedZkvmView === VIEW.ALL ? VIEW.WORST : this.selectedZkvmView;
        const { type, zkvm } = parseColumn(this.sortColumn);

        const getValue = (group) => {
            switch (type) {
                case 'operation':
                    return group.operation;
                case 'name':
                    return group.testCount;
                case 'worst-time':
                    if (this.hasAnyCrashed(group, VIEW.WORST)) return Infinity;
                    return this.dataAccessor.getGroupWorstCase(group, VIEW.WORST).time ?? Infinity;
                case 'worst-relative':
                    if (this.hasAnyCrashed(group, VIEW.WORST)) return Infinity;
                    return this.dataAccessor.getGroupRelativeCost(group, VIEW.WORST) ?? Infinity;
                case 'zkvm-time':
                    if (this.hasAnyCrashed(group, zkvm)) return Infinity;
                    return this.dataAccessor.getGroupWorstCase(group, zkvm).time ?? Infinity;
                case 'zkvm-relative':
                    if (this.hasAnyCrashed(group, zkvm)) return Infinity;
                    return this.dataAccessor.getGroupRelativeCost(group, zkvm) ?? Infinity;
                default:
                    if (this.hasAnyCrashed(group, activeZkvm)) return Infinity;
                    return this.dataAccessor.getGroupRelativeCost(group, activeZkvm) ?? Infinity;
            }
        };

        this.groupedData.sort(createComparator(this.sortDirection, getValue));
    }

    /**
     * Refreshes the UI after filter/sort changes.
     */
    refresh({ resetPage = true, updateUrl = true } = {}) {
        if (resetPage) this.currentPage = 1;
        this.cache.clearGroupCache();
        // Sync value mode to renderer
        if (this.renderer) {
            this.renderer.setValueMode(this.valueMode);
        }
        this.filterTests();
        this.groupTestsByOperation();
        this.sortGroupedData();
        this.renderTable();
        this.updateStats();
        this.renderTargetInfo();
        this.updateQuickFilterButtons();
        if (updateUrl) this.updateURL();
    }

    // ========================================================================
    // Rendering
    // ========================================================================

    /**
     * Renders the data table.
     */
    renderTable() {
        const { tableHeader, tableBody, tableCount, paginationTop, paginationBottom } = this.elements;

        // Update count
        tableCount.textContent = `(${this.groupedData.length} operations, ${this.filteredTests.length} tests)`;

        // Render header
        tableHeader.innerHTML = this.renderer.renderTableHeader({
            zkvmView: this.selectedZkvmView,
            zkvms: this.data.zkvms,
            sortColumn: this.sortColumn,
            sortDirection: this.sortDirection,
        });

        // Add sort handlers
        tableHeader.querySelectorAll('th[data-sort]').forEach(th => {
            th.addEventListener('click', () => this.handleSort(th.dataset.sort));
        });

        // Calculate pagination
        const totalPages = Math.ceil(this.groupedData.length / this.pageSize);
        if (this.currentPage > totalPages) {
            this.currentPage = Math.max(1, totalPages);
        }

        const startIdx = (this.currentPage - 1) * this.pageSize;
        const endIdx = Math.min(startIdx + this.pageSize, this.groupedData.length);
        const pageGroups = this.groupedData.slice(startIdx, endIdx);

        // Render body
        const rows = [];
        const renderOptions = { zkvmView: this.selectedZkvmView, zkvms: this.data.zkvms };

        for (const group of pageGroups) {
            const isExpanded = this.expandedOperations.has(group.operation);
            rows.push(this.renderer.renderGroupRow(group, isExpanded, renderOptions));

            if (isExpanded) {
                rows.push(this.renderer.renderGroupFixtures(group, renderOptions));
            }
        }

        tableBody.innerHTML = rows.join('');

        // Add expansion handlers
        tableBody.querySelectorAll('.group-row').forEach(row => {
            row.addEventListener('click', () => {
                this.toggleOperationExpansion(row.dataset.operation);
            });
        });

        // Render pagination
        const paginationHtml = this.renderer.renderPagination({
            currentPage: this.currentPage,
            totalPages,
            pageSize: this.pageSize,
        });

        paginationTop.innerHTML = paginationHtml;
        paginationBottom.innerHTML = paginationHtml;

        // Add pagination handlers
        [paginationTop, paginationBottom].forEach(container => {
            container.querySelectorAll('button[data-page]').forEach(btn => {
                btn.addEventListener('click', () => this.goToPage(parseInt(btn.dataset.page, 10)));
            });
            const select = container.querySelector('select[data-action="page-size"]');
            if (select) {
                select.addEventListener('change', (e) => this.changePageSize(parseInt(e.target.value, 10)));
            }
        });
    }

    /**
     * Updates the statistics panel.
     */
    updateStats() {
        this.elements.statsPanel.innerHTML = this.renderer.renderStats({
            filteredTests: this.filteredTests,
            allTests: this.data.tests,
            groupedData: this.groupedData,
            zkvms: this.data.zkvms,
            zkvmView: this.selectedZkvmView,
        });
    }

    /**
     * Renders the target info panel.
     */
    renderTargetInfo() {
        this.elements.targetInfo.innerHTML = this.renderer.renderTargetInfo({
            targetMGasPerS: this.targetMGasPerS,
            filteredTests: this.filteredTests,
            zkvmView: this.selectedZkvmView,
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

    handleSort(column) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }
        this.sortGroupedData();
        this.renderTable();
        this.updateURL();
    }

    toggleOperationExpansion(operation) {
        if (this.expandedOperations.has(operation)) {
            this.expandedOperations.delete(operation);
        } else {
            this.expandedOperations.add(operation);
        }
        this.renderTable();
    }

    goToPage(page) {
        this.currentPage = page;
        this.renderTable();
        this.elements.resultsTable.scrollIntoView({ behavior: 'smooth' });
        this.updateURL();
    }

    changePageSize(size) {
        this.pageSize = size;
        this.currentPage = 1;
        this.renderTable();
        this.updateURL();
    }

    handleTargetChange(target) {
        if (target <= 0 || isNaN(target)) return;
        this.targetMGasPerS = target;
        this.dataAccessor.setTarget(target);
        this.refresh({ resetPage: false });
    }

    handleZkvmViewChange(view) {
        this.selectedZkvmView = view;
        this.refresh({ resetPage: false });
    }

    /**
     * Handles value mode change (absolute vs marginal).
     * @param {string} mode - The new value mode
     */
    async handleValueModeChange(mode) {
        if (mode === this.valueMode) return;

        this.valueMode = mode;

        if (mode === VALUE_MODE.MARGINAL) {
            // Load baseline data
            const allConfigs = this.manifest.datasets.map(d => d.id);
            const baselineConfig = getBaselineConfig(this.selectedDataset, allConfigs);

            if (baselineConfig) {
                try {
                    const baselineDatasetInfo = this.manifest.datasets.find(d => d.id === baselineConfig);
                    if (baselineDatasetInfo) {
                        const baselineData = await loadDataset(this.selectedHardware, baselineDatasetInfo.file);
                        const marginalGas = getMarginalGasLimit(this.selectedDataset, baselineConfig);
                        this.dataAccessor.setBaselineData(baselineData, baselineConfig, marginalGas);
                    }
                } catch (error) {
                    console.error('Error loading baseline data:', error);
                    // Fall back to absolute mode
                    this.valueMode = VALUE_MODE.ABSOLUTE;
                    this.dataAccessor.clearBaselineData();
                }
            }
        } else {
            // Clear baseline data
            this.dataAccessor.clearBaselineData();
        }

        this.updateMarginalInfo();
        this.refresh({ resetPage: false });
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

    initializeDatasetSelector() {
        const select = this.elements.dataset;
        // Render directly without renderer (called before data loads)
        select.innerHTML = this.manifest.datasets.map(dataset => {
            const selected = dataset.id === this.selectedDataset ? 'selected' : '';
            return `<option value="${dataset.id}" ${selected}>${dataset.name} (${dataset.test_count} tests)</option>`;
        }).join('');
        select.addEventListener('change', (e) => this.handleDatasetChange(e.target.value));
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

    initializeValueModeToggle() {
        const container = this.elements.valueModeSelector;
        if (!container) return;

        // Check if baseline is available for current dataset
        const allConfigs = this.manifest.datasets.map(d => d.id);
        const baselineConfig = getBaselineConfig(this.selectedDataset, allConfigs);

        container.innerHTML = this.renderer.renderValueModeToggle({
            selectedMode: this.valueMode,
            hasBaseline: baselineConfig !== null,
            currentDataset: this.selectedDataset,
            baselineDataset: baselineConfig,
        });

        container.addEventListener('change', (e) => {
            if (e.target.name === 'value-mode') {
                this.handleValueModeChange(e.target.value);
            }
        });

        // Update marginal info display
        this.updateMarginalInfo();
    }

    /**
     * Updates the marginal info display showing baseline details.
     */
    updateMarginalInfo() {
        const infoEl = this.elements.marginalInfo;
        if (!infoEl) return;

        if (this.valueMode === VALUE_MODE.MARGINAL && this.dataAccessor.hasBaselineData()) {
            const marginalGasM = (this.dataAccessor.marginalGas / 1_000_000).toFixed(0);
            infoEl.innerHTML = `<span class="marginal-badge">Showing: ${this.selectedDataset} − ${this.dataAccessor.baselineConfig} (${marginalGasM}M gas delta)</span>`;
            infoEl.classList.remove('hidden');
        } else {
            infoEl.classList.add('hidden');
        }
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
    // URL State
    // ========================================================================

    updateURL() {
        if (!this.initialized) return;

        const allOps = this.data.operations_by_category
            ? Object.values(this.data.operations_by_category).flat()
            : this.data.operations;

        URLState.serialize({
            hardware: this.selectedHardware,
            dataset: this.selectedDataset,
            target: this.targetMGasPerS,
            zkvmView: this.selectedZkvmView,
            valueMode: this.valueMode,
            search: this.elements.search?.value || '',
            hideCrashed: this.elements.hideCrashed?.checked || false,
            sortColumn: this.sortColumn,
            sortDirection: this.sortDirection,
            page: this.currentPage,
            pageSize: this.pageSize,
            minRelativeCost: this.minRelativeCost,
            selectedOperations: this.selectedOperations,
        }, {
            hardware: this.globalManifest?.default_hardware,
            dataset: this.manifest?.default_dataset,
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
