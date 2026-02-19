// Proof Verification Dashboard — strip/dot plot
(function () {
    'use strict';

    // ── Canonical zkVM colour map ───────────────────────────────────────────
    // Colours are assigned by zkVM identity so they stay consistent across
    // dashboards even when the set of zkVMs or their order changes.
    const ZKVM_COLOR_MAP = {
        'sp1':    { bg: 'rgba(99, 102, 241, 0.55)', border: 'rgb(99, 102, 241)' },   // indigo
        'risc0':  { bg: 'rgba(16, 185, 129, 0.55)', border: 'rgb(16, 185, 129)' },   // emerald
        'zisk':   { bg: 'rgba(245, 158, 11, 0.55)', border: 'rgb(245, 158, 11)' },   // amber
        'openvm': { bg: 'rgba(239, 68, 68, 0.55)',  border: 'rgb(239, 68, 68)' },    // red
    };
    // Fallback palette for unknown zkVMs
    const FALLBACK_COLORS = [
        { bg: 'rgba(14, 165, 233, 0.55)', border: 'rgb(14, 165, 233)' },   // sky
        { bg: 'rgba(168, 85, 247, 0.55)', border: 'rgb(168, 85, 247)' },   // purple
        { bg: 'rgba(236, 72, 153, 0.55)', border: 'rgb(236, 72, 153)' },   // pink
    ];
    let _fallbackIdx = 0;

    function colorFor(zkvmName) {
        const key = zkvmName.toLowerCase();
        for (const [id, color] of Object.entries(ZKVM_COLOR_MAP)) {
            if (key.includes(id)) return color;
        }
        return FALLBACK_COLORS[_fallbackIdx++ % FALLBACK_COLORS.length];
    }

    // ── Layout constants ────────────────────────────────────────────────────
    const BASE_RADIUS = 2.5;
    const MAX_RADIUS  = 6;
    const ROW_SPACING  = 100;
    const BAND_HALF    = 38;
    const Y_STEP_FACTOR = 2.5;
    const X_STEP       = 0.7;

    // ── Helpers ─────────────────────────────────────────────────────────────
    function median(arr) {
        const sorted = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    function formatProofSize(bytes) {
        if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MiB';
        if (bytes >= 1024) return (bytes / 1024).toFixed(2) + ' KiB';
        return bytes + ' B';
    }

    // ── Proof-size → dot radius mapping ─────────────────────────────────────
    // Uses log scale so that very large proofs don't dominate.
    function buildRadiusScale(allResults) {
        const sizes = allResults.map(r => r.proof_size).filter(s => s > 0);
        if (sizes.length === 0) return () => BASE_RADIUS;
        const logMin = Math.log(Math.min(...sizes));
        const logMax = Math.log(Math.max(...sizes));
        const range = logMax - logMin || 1;
        return function (proofSize) {
            if (proofSize <= 0) return BASE_RADIUS;
            const t = (Math.log(proofSize) - logMin) / range;
            return BASE_RADIUS + t * (MAX_RADIUS - BASE_RADIUS);
        };
    }

    // ── Build beeswarm-style scatter data ──────────────────────────────────
    function buildStripData(results, rowCenter, radiusFn) {
        const groups = {};
        for (const r of results) {
            const t = r.verification_time_ms;
            if (!groups[t]) groups[t] = [];
            groups[t].push(r);
        }

        const yStep = BASE_RADIUS * Y_STEP_FACTOR;
        const maxPerCol = Math.max(1, Math.floor(BAND_HALF * 2 / yStep));
        const points = [];

        for (const [, entries] of Object.entries(groups)) {
            const n = entries.length;
            const cols = Math.ceil(n / maxPerCol);

            for (let i = 0; i < n; i++) {
                const col = Math.floor(i / maxPerCol);
                const row = i % maxPerCol;
                const xOffset = (col - (cols - 1) / 2) * X_STEP;
                const rowsInThisCol = col < cols - 1 ? maxPerCol : n - col * maxPerCol;
                const yOffset = (row - (rowsInThisCol - 1) / 2) * yStep;

                points.push({
                    x: entries[i].verification_time_ms + xOffset,
                    y: rowCenter + yOffset,
                    name: entries[i].name,
                    time: entries[i].verification_time_ms,
                    proofSize: entries[i].proof_size,
                    r: radiusFn(entries[i].proof_size),
                });
            }
        }
        return points;
    }

    // ── Main ───────────────────────────────────────────────────────────────
    function init() {
        if (typeof verificationData === 'undefined') return;

        const meta = verificationData.metadata || {};
        if (meta.date || meta.workload_commit) {
            const parts = [];
            if (meta.date) parts.push('Measured: ' + meta.date);
            if (meta.workload_commit) {
                const short = meta.workload_commit.substring(0, 7);
                parts.push('Workload: <a href="https://github.com/eth-act/zkevm-benchmark-workload/commit/' + meta.workload_commit + '">' + short + '</a>');
            }
            document.getElementById('metadata-info').innerHTML = parts.join(' · ');
        }

        // Hardware info + PassMark scores
        const hwSection = document.getElementById('hardware-section');
        if (hwSection && (meta.hardware || meta.passmark)) {
            const parts = [];
            if (meta.hardware) {
                if (meta.hardware.cpu_model) parts.push('<strong>CPU:</strong> ' + meta.hardware.cpu_model);
                if (meta.hardware.total_ram_gib) parts.push('<strong>RAM:</strong> ' + meta.hardware.total_ram_gib + ' GiB');
            }
            if (meta.passmark) {
                const pm = [];
                if (meta.passmark.single_thread) pm.push('ST ' + meta.passmark.single_thread.toLocaleString());
                if (meta.passmark.multi_thread) pm.push('MT ' + meta.passmark.multi_thread.toLocaleString());
                if (pm.length) parts.push('<strong>PassMark:</strong> ' + pm.join(' · '));
            }
            if (parts.length) {
                hwSection.innerHTML = '<div class="hardware-info">' + parts.join(' | ') + '</div>';
            }
        }

        const zkvmNames = Object.keys(verificationData.zkvms);
        if (zkvmNames.length === 0) return;

        // Collect all results for global radius scale
        const allResults = zkvmNames.flatMap(n => verificationData.zkvms[n].results);
        const radiusFn = buildRadiusScale(allResults);

        const perZkvm = {};
        const zkvmColors = {};
        for (const name of zkvmNames) {
            perZkvm[name] = verificationData.zkvms[name].results.map(r => r.verification_time_ms);
            zkvmColors[name] = colorFor(name);
        }

        const rowPositions = zkvmNames.map((_, i) => i * ROW_SPACING);

        const datasets = zkvmNames.map((name, i) => {
            const color = zkvmColors[name];
            const data = buildStripData(verificationData.zkvms[name].results, rowPositions[i], radiusFn);
            return {
                label: name,
                data,
                backgroundColor: color.bg,
                borderColor: color.border,
                borderWidth: 1,
                pointRadius: data.map(d => d.r),
                pointHoverRadius: data.map(d => d.r + 1.5),
            };
        });

        // Compute medians for reference lines
        const medians = zkvmNames.map(name => median(perZkvm[name]));

        renderChart(datasets, zkvmNames, rowPositions, medians, zkvmColors);
        renderStats(zkvmNames, perZkvm, zkvmColors);
    }

    // ── Median-line plugin ─────────────────────────────────────────────────
    function medianLinePlugin(medians, rowPositions, zkvmNames, zkvmColors) {
        return {
            id: 'medianLines',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                const xScale = chart.scales.x;
                const yScale = chart.scales.y;

                for (let i = 0; i < medians.length; i++) {
                    const xPx = xScale.getPixelForValue(medians[i]);
                    const yCenter = yScale.getPixelForValue(rowPositions[i]);
                    const halfH = BAND_HALF * 0.7 * (yScale.getPixelForValue(0) - yScale.getPixelForValue(ROW_SPACING)) / (-ROW_SPACING);

                    ctx.save();
                    ctx.strokeStyle = zkvmColors[zkvmNames[i]].border;
                    ctx.lineWidth = 2;
                    ctx.globalAlpha = 0.7;
                    ctx.setLineDash([4, 3]);
                    ctx.beginPath();
                    ctx.moveTo(xPx, yCenter - halfH);
                    ctx.lineTo(xPx, yCenter + halfH);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        };
    }

    // ── Chart ──────────────────────────────────────────────────────────────
    function renderChart(datasets, zkvmNames, rowPositions, medians, zkvmColors) {
        const ctx = document.getElementById('histogram-chart').getContext('2d');

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const gridColor = isDark ? 'rgba(148,163,184,0.15)' : 'rgba(30,41,59,0.08)';
        const tickColor = isDark ? '#94a3b8' : '#64748b';

        const chart = new Chart(ctx, {
            type: 'scatter',
            data: { datasets },
            plugins: [medianLinePlugin(medians, rowPositions, zkvmNames, zkvmColors)],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: { padding: { left: 10 } },
                plugins: {
                    legend: {
                        labels: { color: tickColor, font: { family: 'Inter', size: 13 } }
                    },
                    tooltip: {
                        mode: 'nearest',
                        intersect: true,
                        callbacks: {
                            title: (items) => items[0].raw.name,
                            label: (item) => {
                                const d = item.raw;
                                return [
                                    `Time: ${d.time} ms`,
                                    `Proof: ${formatProofSize(d.proofSize)}`,
                                ];
                            },
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Verification time (ms)', color: tickColor, font: { family: 'Inter' } },
                        ticks: { color: tickColor, font: { family: 'Inter' } },
                        grid: { color: gridColor },
                    },
                    y: {
                        type: 'linear',
                        ticks: {
                            callback: function (value) {
                                const idx = rowPositions.indexOf(value);
                                if (idx < 0) return '';
                                const name = zkvmNames[idx];
                                const count = verificationData.zkvms[name].results.length;
                                return `${name}  (n=${count})`;
                            },
                            color: tickColor,
                            font: { family: 'Inter', size: 12 },
                            autoSkip: false,
                            stepSize: rowPositions.length > 1 ? rowPositions[1] - rowPositions[0] : 100,
                        },
                        afterBuildTicks: function (axis) {
                            axis.ticks = rowPositions.map(v => ({ value: v }));
                        },
                        afterFit: function (axis) {
                            axis.width = Math.max(axis.width, 150);
                        },
                        grid: { color: gridColor },
                        min: rowPositions[0] - BAND_HALF - 15,
                        max: rowPositions[rowPositions.length - 1] + BAND_HALF + 15,
                    }
                }
            }
        });

        // Re-render on theme change
        const observer = new MutationObserver(() => {
            const dark = document.documentElement.getAttribute('data-theme') === 'dark';
            const gc = dark ? 'rgba(148,163,184,0.15)' : 'rgba(30,41,59,0.08)';
            const tc = dark ? '#94a3b8' : '#64748b';
            chart.options.scales.x.ticks.color = tc;
            chart.options.scales.x.title.color = tc;
            chart.options.scales.x.grid.color = gc;
            chart.options.scales.y.ticks.color = tc;
            chart.options.scales.y.grid.color = gc;
            chart.options.plugins.legend.labels.color = tc;
            chart.update('none');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }

    // ── Stats table (sortable) ─────────────────────────────────────────────
    let _statsData = [];
    let _sortCol = null;
    let _sortAsc = true;

    function renderStats(zkvmNames, perZkvm, zkvmColors) {
        _statsData = zkvmNames.map(name => {
            const times = perZkvm[name];
            const results = verificationData.zkvms[name].results;
            const proofSizes = results.map(r => r.proof_size);
            const minSize = Math.min(...proofSizes);
            const maxSize = Math.max(...proofSizes);
            const mean = times.reduce((a, b) => a + b, 0) / times.length;
            const med = median(times);
            const proofSizeStr = minSize === maxSize
                ? formatProofSize(minSize)
                : formatProofSize(minSize) + ' – ' + formatProofSize(maxSize);

            const securityBits = verificationData.zkvms[name].security_bits || null;

            return {
                name,
                color: zkvmColors[name].border,
                count: times.length,
                mean,
                median: med,
                min: Math.min(...times),
                max: Math.max(...times),
                proofSizeStr,
                proofSizeSort: maxSize,
                securityBits,
            };
        });

        renderStatsRows();
        setupSortHeaders();
    }

    function renderStatsRows() {
        const tbody = document.querySelector('#stats-table tbody');
        tbody.innerHTML = _statsData.map(d => `<tr>
            <td><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${d.color};margin-right:6px;vertical-align:middle;"></span>${d.name}</td>
            <td>${d.count}</td>
            <td>${d.mean.toFixed(1)}</td>
            <td>${d.median.toFixed(1)}</td>
            <td>${d.min}</td>
            <td>${d.max}</td>
            <td>${d.proofSizeStr}</td>
            <td>${d.securityBits != null ? d.securityBits : 'N/A'}</td>
        </tr>`).join('');
    }

    function setupSortHeaders() {
        const SORT_KEYS = ['name', 'count', 'mean', 'median', 'min', 'max', 'proofSizeSort', 'securityBits'];
        const ths = document.querySelectorAll('#stats-table thead th');

        ths.forEach((th, idx) => {
            th.addEventListener('click', () => {
                const key = SORT_KEYS[idx];
                if (_sortCol === key) {
                    _sortAsc = !_sortAsc;
                } else {
                    _sortCol = key;
                    _sortAsc = true;
                }
                _statsData.sort((a, b) => {
                    const va = a[key], vb = b[key];
                    // Null values always sort last
                    if (va == null && vb == null) return 0;
                    if (va == null) return 1;
                    if (vb == null) return -1;
                    const cmp = typeof va === 'string' ? va.localeCompare(vb) : va - vb;
                    return _sortAsc ? cmp : -cmp;
                });

                ths.forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));
                th.classList.add(_sortAsc ? 'sorted-asc' : 'sorted-desc');
                renderStatsRows();
            });
        });
    }

    // ── Theme toggle (shared pattern) ──────────────────────────────────────
    (function () {
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
    })();

    init();
})();
