import { COST_CATEGORIES, formatCost, formatPct } from './constants.js';

export function renderCostDistribution(container, aggregates, elClients) {
    container.innerHTML = '';

    for (const el of elClients) {
        const dist = aggregates[el]?.cost_distribution;
        if (!dist) continue;

        const row = document.createElement('div');
        row.className = 'cost-dist-row';

        const label = document.createElement('div');
        label.className = 'cost-dist-label';
        label.textContent = el;
        row.appendChild(label);

        const bar = document.createElement('div');
        bar.className = 'cost-dist-bar';

        for (const cat of COST_CATEGORIES) {
            const val = dist[cat.key]?.mean || 0;
            if (val < 0.1) continue;
            const seg = document.createElement('div');
            seg.className = `cost-dist-segment ${cat.cssClass}`;
            seg.style.width = `${val}%`;
            seg.title = `${cat.label}: ${val.toFixed(2)}%`;
            if (val > 5) seg.textContent = `${val.toFixed(1)}%`;
            bar.appendChild(seg);
        }

        row.appendChild(bar);
        container.appendChild(row);
    }

    // Legend
    const legend = document.createElement('div');
    legend.className = 'cost-dist-legend';
    for (const cat of COST_CATEGORIES) {
        const item = document.createElement('span');
        item.className = 'cost-dist-legend-item';
        const swatch = document.createElement('span');
        swatch.className = `cost-dist-legend-swatch ${cat.cssClass}`;
        const tmp = document.createElement('div');
        tmp.className = `cost-dist-segment ${cat.cssClass}`;
        document.body.appendChild(tmp);
        swatch.style.background = getComputedStyle(tmp).backgroundColor;
        document.body.removeChild(tmp);
        item.appendChild(swatch);
        item.appendChild(document.createTextNode(cat.label));
        legend.appendChild(item);
    }
    container.appendChild(legend);
}

export function renderTestTableHeader(thead, elClients) {
    thead.innerHTML = '';

    const row1 = document.createElement('tr');
    const thTest = document.createElement('th');
    thTest.setAttribute('rowspan', '2');
    thTest.dataset.sort = 'name';
    thTest.textContent = 'Test';
    row1.appendChild(thTest);


    for (const el of elClients) {
        const th = document.createElement('th');
        th.setAttribute('colspan', '3');
        th.className = 'el-group-header';
        th.textContent = el;
        row1.appendChild(th);
    }

    const row2 = document.createElement('tr');
    for (let i = 0; i < elClients.length; i++) {
        const el = elClients[i];
        const isLast = i === elClients.length - 1;

        const thCost = document.createElement('th');
        thCost.dataset.sort = 'cost';
        thCost.dataset.el = el;
        thCost.classList.add('el-group-first');
        thCost.textContent = 'Cost';
        row2.appendChild(thCost);

        const thTopOp = document.createElement('th');
        thTopOp.dataset.sort = 'top_opcode';
        thTopOp.dataset.el = el;
        thTopOp.textContent = 'Top Opcode';
        row2.appendChild(thTopOp);

        const thStatus = document.createElement('th');
        thStatus.dataset.sort = 'status';
        thStatus.dataset.el = el;
        thStatus.textContent = 'Status';
        if (!isLast) thStatus.classList.add('el-group-last');
        row2.appendChild(thStatus);
    }

    thead.appendChild(row1);
    thead.appendChild(row2);
}

function escapeAttr(s) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

const PAGE_SIZE_OPTIONS = [25, 50, 100];

export function renderPagination(container, page, totalPages, totalTests, pageSize) {
    container.innerHTML = '';

    const prev = document.createElement('button');
    prev.textContent = '\u2190 Prev';
    prev.disabled = page <= 1;
    prev.dataset.action = 'prev';
    container.appendChild(prev);

    const info = document.createElement('span');
    info.className = 'page-info';
    if (pageSize === 0) {
        info.textContent = `${totalTests} tests`;
    } else {
        info.textContent = `Page ${page} of ${totalPages} (${totalTests} tests)`;
    }
    container.appendChild(info);

    const next = document.createElement('button');
    next.textContent = 'Next \u2192';
    next.disabled = page >= totalPages;
    next.dataset.action = 'next';
    container.appendChild(next);

    const sizeSelect = document.createElement('select');
    for (const opt of PAGE_SIZE_OPTIONS) {
        const o = document.createElement('option');
        o.value = opt;
        o.textContent = `${opt} / page`;
        if (opt === pageSize) o.selected = true;
        sizeSelect.appendChild(o);
    }
    const allOpt = document.createElement('option');
    allOpt.value = '0';
    allOpt.textContent = 'All';
    if (pageSize === 0) allOpt.selected = true;
    sizeSelect.appendChild(allOpt);
    sizeSelect.dataset.action = 'pageSize';
    container.appendChild(sizeSelect);
}

export function renderTestList(tbody, tests, elClients) {
    tbody.innerHTML = '';
    for (const t of tests) {
        const tr = document.createElement('tr');
        tr.dataset.hash = t.hash;

        let cells = `
            <td title="${escapeAttr(t.id)}"><span class="test-link">${t.name}</span></td>
        `;

        for (let i = 0; i < elClients.length; i++) {
            const el = elClients[i];
            const d = t.el_clients[el];
            const isLast = i === elClients.length - 1;
            const lastClass = !isLast ? ' el-group-last' : '';

            if (d && d.status === 'success') {
                cells += `
                    <td class="num el-group-first">${formatCost(d.total_cost)}</td>
                    <td>${d.top_opcode || '-'}</td>
                    <td class="${lastClass}"><span class="status-badge success">success</span></td>
                `;
            } else if (d && d.status === 'error') {
                cells += `
                    <td class="num el-group-first">-</td>
                    <td>-</td>
                    <td class="${lastClass}"><span class="status-badge error">error</span></td>
                `;
            } else {
                cells += `
                    <td class="num el-missing el-group-first">-</td>
                    <td class="el-missing">-</td>
                    <td class="el-missing${lastClass}">-</td>
                `;
            }
        }

        tr.innerHTML = cells;
        tbody.appendChild(tr);
    }
}
