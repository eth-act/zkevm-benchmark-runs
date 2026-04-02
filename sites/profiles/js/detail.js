import { COST_CATEGORIES, PHASE_COLORS, formatNumber, formatCost, formatPct } from './constants.js';

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
        markPanel.appendChild(makePhaseBar(detail.mark_ids));
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
    const sorted = [...opcodes].sort((a, b) => b.cost - a.cost);
    return buildTable(
        ['Opcode', 'Count', 'Count %', 'Cost', 'Cost %', 'Rank'],
        sorted.map(o => [
            `<code>${o.name}</code>`,
            formatNumber(o.count),
            formatPct(o.count_pct),
            formatCost(o.cost),
            formatPct(o.cost_pct),
            o.rank ? `#${o.rank}` : '',
        ]),
        [false, true, true, true, true, true]
    );
}

function makePhaseBar(marks) {
    const total = marks.reduce((s, m) => s + m.total_cost, 0);
    if (!total) return document.createDocumentFragment();

    const bar = document.createElement('div');
    bar.className = 'phase-bar';

    marks.forEach((m, i) => {
        const pct = (m.total_cost / total) * 100;
        if (pct < 0.05) return;
        const seg = document.createElement('div');
        seg.className = 'phase-bar-seg';
        seg.style.width = `${pct}%`;
        seg.style.background = PHASE_COLORS[i % PHASE_COLORS.length];
        seg.title = `${m.name}: ${pct.toFixed(1)}%`;
        bar.appendChild(seg);
    });

    return bar;
}

function makeMarkIdTable(marks) {
    return buildTable(
        ['Phase', 'Total Cost', 'Cost %', 'Main', 'Opcodes', 'Precompiles', 'Memory'],
        marks.map(m => [
            m.name,
            formatCost(m.total_cost),
            formatPct(m.total_cost_pct),
            formatCost(m.main_cost),
            formatCost(m.opcode_cost),
            formatCost(m.precompile_cost),
            formatCost(m.memory_cost),
        ]),
        [false, true, true, true, true, true, true]
    );
}

function makeFunctionTable(funcs) {
    return buildTable(
        ['Function', 'Cost', 'Cost %', 'Calls', 'Cost/Call'],
        funcs.map(f => [
            `<span class="fn-name" title="${escapeHtml(f.function)}">${escapeHtml(f.function_short)}</span>`,
            formatCost(f.cost),
            formatPct(f.cost_pct),
            formatNumber(f.calls),
            formatCost(f.cost_per_call),
        ]),
        [false, true, true, true, true]
    );
}

function buildTable(headers, rows, numCols) {
    const wrap = document.createElement('div');
    wrap.className = 'table-container';
    const table = document.createElement('table');
    table.className = 'compact-table';

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    headers.forEach(h => {
        const th = document.createElement('th');
        th.textContent = h;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    for (const row of rows) {
        const tr = document.createElement('tr');
        row.forEach((cell, i) => {
            const td = document.createElement('td');
            if (numCols && numCols[i]) td.className = 'num';
            td.innerHTML = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    wrap.appendChild(table);
    return wrap;
}

function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
