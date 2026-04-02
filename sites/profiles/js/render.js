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

export function renderTestList(tbody, tests, elClients, primaryEl) {
    tbody.innerHTML = '';
    for (const t of tests) {
        const tr = document.createElement('tr');
        tr.dataset.hash = t.hash;

        // Pick the primary EL client data for display
        const el = primaryEl !== 'all' ? primaryEl : elClients[0];
        const d = t.el_clients[el] || Object.values(t.el_clients)[0] || {};

        const isSuccess = d.status === 'success';
        tr.innerHTML = `
            <td title="${t.id}"><span class="test-link">${t.name}</span></td>
            <td>${t.operation || '-'}</td>
            <td class="num">${isSuccess ? formatCost(d.total_cost) : '-'}</td>
            <td>${isSuccess ? (d.top_opcode || '-') : '-'}</td>
            <td><span class="status-badge ${d.status}">${d.status}</span></td>
        `;
        tbody.appendChild(tr);
    }
}
