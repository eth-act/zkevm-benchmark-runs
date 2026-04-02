import { readState, pushState } from './state.js';
import { renderCostDistribution, renderTestList, renderTestTableHeader } from './render.js';
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

        // Table sort (event delegation since headers are dynamic)
        document.getElementById('tests-thead').addEventListener('click', (e) => {
            const th = e.target.closest('th[data-sort]');
            if (!th) return;
            const col = th.dataset.sort;
            const el = th.dataset.el || '';

            if (this.state.sort === col && this.state.sortEl === el) {
                this.state.sortDir = this.state.sortDir === 'asc' ? 'desc' : 'asc';
            } else {
                this.state.sort = col;
                this.state.sortEl = el;
                this.state.sortDir = 'asc';
            }
            pushState(this.state);
            this.renderTestList();
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

        // Build dynamic table headers
        renderTestTableHeader(
            document.getElementById('tests-thead'),
            this.aggregates.el_clients
        );

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
        const elClients = this.aggregates.el_clients;

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

    renderTestList() {
        let tests = this.allTests;
        const elClients = this.aggregates.el_clients;

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

        // Filter by status — match if ANY client has the filtered status
        if (this.state.status !== 'all') {
            tests = tests.filter(t =>
                Object.values(t.el_clients).some(d => d.status === this.state.status)
            );
        }

        // Sort — use sortEl to determine which client's data to sort by
        const sortEl = this.state.sortEl && elClients.includes(this.state.sortEl)
            ? this.state.sortEl
            : elClients[0];
        const dir = this.state.sortDir === 'asc' ? 1 : -1;
        tests = [...tests].sort((a, b) => {
            const da = a.el_clients[sortEl] || {};
            const db = b.el_clients[sortEl] || {};

            switch (this.state.sort) {
                case 'name': return dir * a.name.localeCompare(b.name);
                case 'operation': return dir * (a.operation || '').localeCompare(b.operation || '');
                case 'cost': return dir * ((da.total_cost || 0) - (db.total_cost || 0));
                case 'top_opcode': return dir * (da.top_opcode || '').localeCompare(db.top_opcode || '');
                case 'status': return dir * (da.status || '').localeCompare(db.status || '');
                default: return dir * a.name.localeCompare(b.name);
            }
        });

        // Update sort indicators
        document.querySelectorAll('#tests-thead th[data-sort]').forEach(th => {
            th.classList.remove('sorted-asc', 'sorted-desc');
            const thEl = th.dataset.el || '';
            if (th.dataset.sort === this.state.sort && thEl === (this.state.sortEl || '')) {
                th.classList.add(`sorted-${this.state.sortDir}`);
            }
        });

        document.getElementById('test-count').textContent = `(${tests.length})`;
        renderTestList(
            document.querySelector('#tests-table tbody'),
            tests,
            elClients
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
