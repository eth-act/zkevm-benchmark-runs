import { readState, pushState } from './state.js';
import { renderCostDistribution, renderTestList } from './render.js';
import { loadAndRenderDetail } from './detail.js';

export class App {
    constructor() {
        this.manifest = null;
        this.aggregates = null;
        this.state = readState();
        this.allTests = [];
    }

    async init() {
        try {
            const resp = await fetch('data/manifest.json');
            if (!resp.ok) throw new Error('Failed to load manifest');
            this.manifest = await resp.json();

            if (!this.manifest.fixture_sets.length) {
                throw new Error('No fixture sets found');
            }

            // Default fixture set
            if (!this.state.fixtureSet) {
                this.state.fixtureSet = this.manifest.fixture_sets[0].id;
            }

            this.setupControls();
            await this.loadFixtureSet(this.state.fixtureSet);

            document.getElementById('loading').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');

            // Handle back/forward
            window.addEventListener('popstate', () => {
                this.state = readState();
                this.render();
            });
        } catch (e) {
            document.getElementById('loading').classList.add('hidden');
            const err = document.getElementById('error');
            err.textContent = `Error: ${e.message}`;
            err.classList.remove('hidden');
        }
    }

    setupControls() {
        // Fixture set selector
        const fsSelect = document.getElementById('fixture-set');
        for (const fs of this.manifest.fixture_sets) {
            const opt = document.createElement('option');
            opt.value = fs.id;
            opt.textContent = fs.id;
            fsSelect.appendChild(opt);
        }
        fsSelect.value = this.state.fixtureSet;
        fsSelect.addEventListener('change', async () => {
            this.state.fixtureSet = fsSelect.value;
            pushState(this.state);
            await this.loadFixtureSet(fsSelect.value);
            this.render();
        });

        // EL client selector
        const elSelect = document.getElementById('el-client');
        elSelect.addEventListener('change', () => {
            this.state.elClient = elSelect.value;
            pushState(this.state);
            this.render();
        });

        // Search
        const search = document.getElementById('search');
        search.value = this.state.search;
        let searchTimer;
        search.addEventListener('input', () => {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                this.state.search = search.value;
                pushState(this.state);
                this.renderTestList();
            }, 200);
        });

        // Operation filter
        const opFilter = document.getElementById('op-filter');
        opFilter.addEventListener('change', () => {
            this.state.operation = opFilter.value;
            pushState(this.state);
            this.renderTestList();
        });

        // Status filters
        document.querySelectorAll('[data-status]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-status]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.state.status = btn.dataset.status;
                pushState(this.state);
                this.renderTestList();
            });
        });

        // Table sort
        document.querySelectorAll('#tests-table th[data-sort]').forEach(th => {
            th.addEventListener('click', () => {
                const col = th.dataset.sort;
                if (this.state.sort === col) {
                    this.state.sortDir = this.state.sortDir === 'asc' ? 'desc' : 'asc';
                } else {
                    this.state.sort = col;
                    this.state.sortDir = 'asc';
                }
                pushState(this.state);
                this.renderTestList();
            });
        });

        // Test row clicks
        document.getElementById('tests-table').querySelector('tbody').addEventListener('click', (e) => {
            const tr = e.target.closest('tr');
            if (!tr || !tr.dataset.hash) return;
            this.state.test = tr.dataset.hash;
            pushState(this.state);
            this.showDetail(tr.dataset.hash);
        });

        // Back button
        document.getElementById('detail-back').addEventListener('click', () => {
            this.state.test = '';
            pushState(this.state);
            this.hideDetail();
        });

        // Theme toggle
        const toggle = document.getElementById('theme-toggle');
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        toggle.textContent = current === 'dark' ? 'Light mode' : 'Dark mode';
        toggle.addEventListener('click', () => {
            const cur = document.documentElement.getAttribute('data-theme');
            const next = cur === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            document.documentElement.style.colorScheme = next;
            localStorage.setItem('theme', next);
            toggle.textContent = next === 'dark' ? 'Light mode' : 'Dark mode';
        });
    }

    async loadFixtureSet(fsId) {
        const resp = await fetch(`data/aggregates-${fsId}.json`);
        if (!resp.ok) throw new Error(`Failed to load aggregates for ${fsId}`);
        this.aggregates = await resp.json();
        this.allTests = this.aggregates.tests || [];

        // Update EL client selector
        const elSelect = document.getElementById('el-client');
        const currentVal = elSelect.value;
        elSelect.innerHTML = '<option value="all">All</option>';
        for (const el of this.aggregates.el_clients) {
            const opt = document.createElement('option');
            opt.value = el;
            opt.textContent = el;
            elSelect.appendChild(opt);
        }
        if (this.state.elClient && this.aggregates.el_clients.includes(this.state.elClient)) {
            elSelect.value = this.state.elClient;
        } else {
            elSelect.value = 'all';
            this.state.elClient = 'all';
        }

        // Populate operation filter
        const opFilter = document.getElementById('op-filter');
        opFilter.innerHTML = '<option value="">All</option>';
        const ops = new Set(this.allTests.map(t => t.operation).filter(Boolean));
        for (const op of [...ops].sort()) {
            const opt = document.createElement('option');
            opt.value = op;
            opt.textContent = op;
            opFilter.appendChild(opt);
        }
        if (this.state.operation) opFilter.value = this.state.operation;

        this.render();
    }

    render() {
        const elClients = this.getActiveElClients();

        // Restore status filter button
        document.querySelectorAll('[data-status]').forEach(b => {
            b.classList.toggle('active', b.dataset.status === this.state.status);
        });

        // Overview sections
        renderCostDistribution(
            document.getElementById('cost-dist-bars'),
            this.aggregates.aggregates,
            elClients
        );

        this.renderTestList();

        // If URL has test selected, show detail
        if (this.state.test) {
            this.showDetail(this.state.test);
        }
    }

    getActiveElClients() {
        if (this.state.elClient !== 'all') {
            return [this.state.elClient];
        }
        return this.aggregates.el_clients;
    }

    renderTestList() {
        let tests = this.allTests;

        // Filter by search
        if (this.state.search) {
            const q = this.state.search.toLowerCase();
            tests = tests.filter(t =>
                t.name.toLowerCase().includes(q) ||
                t.id.toLowerCase().includes(q) ||
                (t.operation || '').toLowerCase().includes(q)
            );
        }

        // Filter by operation
        if (this.state.operation) {
            tests = tests.filter(t => t.operation === this.state.operation);
        }

        // Filter by status
        if (this.state.status !== 'all') {
            const el = this.state.elClient !== 'all' ? this.state.elClient : this.aggregates.el_clients[0];
            tests = tests.filter(t => {
                const d = t.el_clients[el] || Object.values(t.el_clients)[0];
                return d && d.status === this.state.status;
            });
        }

        // Sort
        const el = this.state.elClient !== 'all' ? this.state.elClient : this.aggregates.el_clients[0];
        const dir = this.state.sortDir === 'asc' ? 1 : -1;
        tests = [...tests].sort((a, b) => {
            const da = a.el_clients[el] || Object.values(a.el_clients)[0] || {};
            const db = b.el_clients[el] || Object.values(b.el_clients)[0] || {};

            switch (this.state.sort) {
                case 'name': return dir * a.name.localeCompare(b.name);
                case 'operation': return dir * (a.operation || '').localeCompare(b.operation || '');
                case 'cost': return dir * ((da.total_cost || 0) - (db.total_cost || 0));
                case 'status': return dir * (da.status || '').localeCompare(db.status || '');
                default: return dir * a.name.localeCompare(b.name);
            }
        });

        // Update sort indicators
        document.querySelectorAll('#tests-table th[data-sort]').forEach(th => {
            th.classList.remove('sorted-asc', 'sorted-desc');
            if (th.dataset.sort === this.state.sort) {
                th.classList.add(`sorted-${this.state.sortDir}`);
            }
        });

        document.getElementById('test-count').textContent = `(${tests.length})`;
        renderTestList(
            document.querySelector('#tests-table tbody'),
            tests,
            this.aggregates.el_clients,
            this.state.elClient
        );
    }

    async showDetail(testHash) {
        document.getElementById('overview-section').classList.add('hidden');
        document.getElementById('test-list-section').classList.add('hidden');
        document.getElementById('detail-section').classList.remove('hidden');

        const test = this.allTests.find(t => t.hash === testHash);
        document.getElementById('detail-title').textContent = test ? test.name : testHash;

        await loadAndRenderDetail(
            document.getElementById('detail-content'),
            this.state.fixtureSet,
            this.aggregates.el_clients,
            testHash,
            test
        );
    }

    hideDetail() {
        document.getElementById('overview-section').classList.remove('hidden');
        document.getElementById('test-list-section').classList.remove('hidden');
        document.getElementById('detail-section').classList.add('hidden');
    }
}
