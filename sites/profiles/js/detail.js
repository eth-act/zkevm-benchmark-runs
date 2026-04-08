import { COST_CATEGORIES, formatNumber, formatCost, formatPct } from './constants.js';

export async function loadAndRenderDetail(container, fixtureSet, elClients, testHash, testInfo) {
    container.innerHTML = '';

    // Load detail files for each EL client
    const details = {};
    for (const el of elClients) {
        try {
            const resp = await fetch(`data/detail-${fixtureSet}-${el}-${testHash}.json`);
            if (resp.ok) details[el] = await resp.json();
        } catch { /* skip */ }
    }

    if (Object.keys(details).length === 0) {
        container.innerHTML = '<p>No detail data available for this test.</p>';
        return;
    }

    // EL client tabs if multiple
    const availableEls = Object.keys(details);
    let activeEl = availableEls[0];

    if (availableEls.length > 1) {
        const tabs = document.createElement('div');
        tabs.className = 'el-tabs';
        for (const el of availableEls) {
            const btn = document.createElement('button');
            btn.className = `el-tab${el === activeEl ? ' active' : ''}`;
            btn.textContent = el;
            btn.addEventListener('click', () => {
                activeEl = el;
                tabs.querySelectorAll('.el-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderDetailContent(contentDiv, details[el]);
            });
            tabs.appendChild(btn);
        }
        container.appendChild(tabs);
    }

    const contentDiv = document.createElement('div');
    container.appendChild(contentDiv);
    renderDetailContent(contentDiv, details[activeEl]);
}

function renderDetailContent(container, detail) {
    container.innerHTML = '';

    // Cost Distribution bar
    const distPanel = panel('Cost Distribution');
    const bar = document.createElement('div');
    bar.className = 'cost-dist-bar';
    bar.style.height = '32px';
    bar.style.marginBottom = '8px';

    const dist = detail.report?.cost_distribution || {};
    for (const cat of COST_CATEGORIES) {
        const val = dist[cat.key]?.pct || 0;
        if (val < 0.1) continue;
        const seg = document.createElement('div');
        seg.className = `cost-dist-segment ${cat.cssClass}`;
        seg.style.width = `${val}%`;
        seg.title = `${cat.label}: ${val.toFixed(2)}%`;
        if (val > 4) seg.textContent = `${cat.label} ${val.toFixed(1)}%`;
        bar.appendChild(seg);
    }
    distPanel.appendChild(bar);

    // Summary stats
    const stats = document.createElement('div');
    stats.className = 'summary-bar';
    stats.innerHTML = `
        <strong>Total Cost:</strong> ${formatCost(detail.report?.total_cost)}
        &nbsp;|&nbsp;
        <strong>RAM Usage:</strong> ${formatNumber(detail.report?.ram_usage?.count)} (${formatPct(detail.report?.ram_usage?.pct)})
    `;
    distPanel.appendChild(stats);
    container.appendChild(distPanel);

    // Grid layout for tables
    const grid = document.createElement('div');
    grid.className = 'detail-grid';

    // Cost by Opcode
    const opcodePanel = panel('Cost by Opcode');
    opcodePanel.appendChild(makeOpcodeTable(detail.cost_by_opcode || []));
    grid.appendChild(opcodePanel);

    // Execution Phases (MARK_ID)
    if (detail.mark_ids?.length) {
        const markPanel = panel('Execution Phases');
        markPanel.appendChild(makeMarkIdTable(detail.mark_ids));
        grid.appendChild(markPanel);
    }

    container.appendChild(grid);

    // Top Functions by Cost
    if (detail.top_cost_functions?.length) {
        const funcPanel = panel('Top Functions by Cost');
        funcPanel.appendChild(makeFunctionTable(detail.top_cost_functions));
        container.appendChild(funcPanel);
    }

}

function panel(title) {
    const div = document.createElement('div');
    div.className = 'panel';
    const h = document.createElement('h3');
    h.textContent = title;
    h.style.fontSize = '0.9rem';
    h.style.marginBottom = '8px';
    div.appendChild(h);
    return div;
}

function makeOpcodeTable(opcodes) {
    return makeSortableTable(
        ['Opcode', 'Count', 'Count %', 'Cost', 'Cost %', 'Rank'],
        opcodes,
        [
            { value: o => o.name,      format: o => `<code>${o.name}</code>`, numeric: false },
            { value: o => o.count,     format: o => formatNumber(o.count),    numeric: true },
            { value: o => o.count_pct, format: o => formatPct(o.count_pct),   numeric: true },
            { value: o => o.cost,      format: o => formatCost(o.cost),       numeric: true },
            { value: o => o.cost_pct,  format: o => formatPct(o.cost_pct),    numeric: true },
            { value: o => o.rank,      format: o => o.rank ? `#${o.rank}` : '', numeric: true },
        ],
        { col: 3, dir: 'desc' }
    );
}

function makeMarkIdTable(marks) {
    return makeSortableTable(
        ['Phase', 'Total Cost', 'Cost %', 'Main', 'Opcodes', 'Precompiles', 'Memory'],
        marks,
        [
            { value: m => m.name,            format: m => m.name,                       numeric: false },
            { value: m => m.total_cost,      format: m => formatCost(m.total_cost),     numeric: true },
            { value: m => m.total_cost_pct,  format: m => formatPct(m.total_cost_pct),  numeric: true },
            { value: m => m.main_cost,       format: m => formatCost(m.main_cost),      numeric: true },
            { value: m => m.opcode_cost,     format: m => formatCost(m.opcode_cost),    numeric: true },
            { value: m => m.precompile_cost, format: m => formatCost(m.precompile_cost),numeric: true },
            { value: m => m.memory_cost,     format: m => formatCost(m.memory_cost),    numeric: true },
        ]
    );
}

function makeFunctionTable(funcs) {
    return makeSortableTable(
        ['Function', 'Cost', 'Cost %', 'Calls', 'Cost/Call'],
        funcs,
        [
            { value: f => f.function_short, format: f => `<span class="fn-name" title="${escapeHtml(f.function)}">${escapeHtml(f.function_short)}</span>`, numeric: false },
            { value: f => f.cost,           format: f => formatCost(f.cost),          numeric: true },
            { value: f => f.cost_pct,       format: f => formatPct(f.cost_pct),       numeric: true },
            { value: f => f.calls,          format: f => formatNumber(f.calls),       numeric: true },
            { value: f => f.cost_per_call,  format: f => formatCost(f.cost_per_call), numeric: true },
        ]
    );
}

function makeSortableTable(headers, data, columns, defaultSort) {
    const wrap = document.createElement('div');
    wrap.className = 'table-container';
    const table = document.createElement('table');
    table.className = 'compact-table';

    // State
    let sortCol = defaultSort ? defaultSort.col : null;
    let sortDir = defaultSort ? defaultSort.dir : 'desc';
    let items = [...data];

    // thead
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const ths = headers.map((h, i) => {
        const th = document.createElement('th');
        th.textContent = h;
        th.className = 'sortable';
        th.addEventListener('click', () => {
            if (sortCol === i) {
                sortDir = sortDir === 'asc' ? 'desc' : 'asc';
            } else {
                sortCol = i;
                sortDir = columns[i].numeric ? 'desc' : 'asc';
            }
            renderRows();
            updateSortIndicators();
        });
        headRow.appendChild(th);
        return th;
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    function updateSortIndicators() {
        ths.forEach((th, i) => {
            th.classList.remove('sorted-asc', 'sorted-desc');
            if (i === sortCol) th.classList.add(sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
        });
    }

    function renderRows() {
        const sorted = [...items];
        if (sortCol !== null) {
            const col = columns[sortCol];
            sorted.sort((a, b) => {
                const va = col.value(a);
                const vb = col.value(b);
                if (va == null && vb == null) return 0;
                if (va == null) return 1;
                if (vb == null) return -1;
                let cmp;
                if (col.numeric) {
                    cmp = va - vb;
                } else {
                    cmp = String(va).localeCompare(String(vb));
                }
                return sortDir === 'asc' ? cmp : -cmp;
            });
        }
        tbody.innerHTML = '';
        for (const item of sorted) {
            const tr = document.createElement('tr');
            columns.forEach((col, i) => {
                const td = document.createElement('td');
                if (col.numeric) td.className = 'num';
                td.innerHTML = col.format(item);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        }
    }

    // Initial render
    if (defaultSort) updateSortIndicators();
    renderRows();

    wrap.appendChild(table);
    return wrap;
}

function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
