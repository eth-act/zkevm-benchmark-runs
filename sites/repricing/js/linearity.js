/**
 * Linearity analysis overlay for the Repricing Analysis Application.
 * Shows gas_used vs proving_time scatter plots with regression analysis
 * when a fixture row is clicked in the heatmap.
 */

import { escapeHtml } from './utils.js';

// Distinct colors for different zkVM series
const SERIES_COLORS = [
    { bg: 'rgba(59, 130, 246, 0.6)',  border: 'rgb(59, 130, 246)',  dash: 'rgb(59, 130, 246)' },   // blue
    { bg: 'rgba(239, 68, 68, 0.6)',   border: 'rgb(239, 68, 68)',   dash: 'rgb(239, 68, 68)' },    // red
    { bg: 'rgba(34, 197, 94, 0.6)',   border: 'rgb(34, 197, 94)',   dash: 'rgb(34, 197, 94)' },    // green
    { bg: 'rgba(168, 85, 247, 0.6)',  border: 'rgb(168, 85, 247)',  dash: 'rgb(168, 85, 247)' },   // purple
    { bg: 'rgba(251, 146, 60, 0.6)',  border: 'rgb(251, 146, 60)',  dash: 'rgb(251, 146, 60)' },   // orange
    { bg: 'rgba(236, 72, 153, 0.6)',  border: 'rgb(236, 72, 153)',  dash: 'rgb(236, 72, 153)' },   // pink
];

// ============================================================================
// Linear Regression
// ============================================================================

/**
 * Computes ordinary least squares regression on {x, y} points.
 * @param {Array<{x: number, y: number}>} points
 * @returns {{slope: number, intercept: number, rSquared: number} | null}
 */
function linearRegression(points) {
    const n = points.length;
    if (n < 2) return null;

    let sx = 0, sy = 0, sxx = 0, sxy = 0, syy = 0;
    for (const p of points) {
        sx += p.x;
        sy += p.y;
        sxx += p.x * p.x;
        sxy += p.x * p.y;
        syy += p.y * p.y;
    }

    const denom = n * sxx - sx * sx;
    if (Math.abs(denom) < 1e-12) return null;

    const slope = (n * sxy - sx * sy) / denom;
    const intercept = (sy - slope * sx) / n;

    // R-squared
    const yMean = sy / n;
    let ssTot = 0, ssRes = 0;
    for (const p of points) {
        ssTot += (p.y - yMean) ** 2;
        const predicted = slope * p.x + intercept;
        ssRes += (p.y - predicted) ** 2;
    }
    const rSquared = ssTot > 0 ? 1 - ssRes / ssTot : 1;

    return { slope, intercept, rSquared };
}

/**
 * Classifies the scaling behavior by fitting a log-log regression.
 * The exponent of log(y) vs log(x) tells us:
 *   ~1 = linear, <1 = sublinear, >1 = superlinear
 * @param {Array<{x: number, y: number}>} points
 * @returns {{exponent: number, classification: string} | null}
 */
function classifyLinearity(points) {
    // Filter to positive values for log
    const logPoints = points
        .filter(p => p.x > 0 && p.y > 0)
        .map(p => ({ x: Math.log(p.x), y: Math.log(p.y) }));

    if (logPoints.length < 2) return null;

    const reg = linearRegression(logPoints);
    if (!reg) return null;

    const exponent = reg.slope;
    let classification;
    if (exponent < 0.90) classification = 'sublinear';
    else if (exponent > 1.10) classification = 'superlinear';
    else classification = 'linear';

    return { exponent, classification };
}

// ============================================================================
// LinearityModal
// ============================================================================

export class LinearityModal {
    /**
     * @param {import('./data.js').DataAccessor} dataAccessor
     */
    constructor(dataAccessor) {
        this.dataAccessor = dataAccessor;
        this.chart = null;

        // Cache DOM
        this.modal = document.getElementById('linearity-modal');
        this.title = document.getElementById('linearity-modal-title');
        this.canvas = document.getElementById('linearity-chart');
        this.statsContainer = document.getElementById('linearity-stats');

        // Wire close handlers
        const closeBtn = this.modal.querySelector('.linearity-modal-close');
        const backdrop = this.modal.querySelector('.linearity-modal-backdrop');
        closeBtn.addEventListener('click', () => this.close());
        backdrop.addEventListener('click', () => this.close());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.close();
            }
        });
    }

    /**
     * Opens the linearity analysis modal for a test.
     * @param {Object} test - The combined test object with data_points
     * @param {string[]} zkvms - Available zkVM identifiers
     */
    open(test, zkvms) {
        this.title.textContent = `Linearity: ${test.name || test.id}`;

        // Collect series data
        const seriesData = [];
        for (let i = 0; i < zkvms.length; i++) {
            const zkvm = zkvms[i];
            const points = this.dataAccessor.getDataPoints(test, zkvm);
            if (points.length === 0) continue;

            const xyPoints = points.map(p => ({ x: p.gas_used, y: p.proving_time_ms }));
            const regression = linearRegression(xyPoints);
            const linearity = classifyLinearity(xyPoints);

            seriesData.push({
                zkvm,
                points: xyPoints,
                gasLimits: points.map(p => p.gas_limit),
                regression,
                linearity,
                color: SERIES_COLORS[i % SERIES_COLORS.length],
            });
        }

        this._renderChart(seriesData);
        this._renderStats(seriesData);
        this.modal.classList.remove('hidden');
    }

    close() {
        this.modal.classList.add('hidden');
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    /**
     * Renders the Chart.js scatter plot with regression lines.
     * @private
     */
    _renderChart(seriesData) {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }

        const datasets = [];

        for (const series of seriesData) {
            // Scatter points
            datasets.push({
                label: series.zkvm,
                data: series.points,
                backgroundColor: series.color.bg,
                borderColor: series.color.border,
                pointRadius: 6,
                pointHoverRadius: 8,
                showLine: false,
            });

            // Regression line
            if (series.regression && series.points.length >= 2) {
                const xMin = Math.min(...series.points.map(p => p.x));
                const xMax = Math.max(...series.points.map(p => p.x));
                const { slope, intercept } = series.regression;
                datasets.push({
                    label: `${series.zkvm} (fit)`,
                    data: [
                        { x: xMin, y: slope * xMin + intercept },
                        { x: xMax, y: slope * xMax + intercept },
                    ],
                    borderColor: series.color.dash,
                    borderDash: [6, 4],
                    borderWidth: 2,
                    pointRadius: 0,
                    showLine: true,
                    fill: false,
                });
            }
        }

        const ctx = this.canvas.getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'scatter',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'nearest',
                    intersect: true,
                },
                plugins: {
                    legend: {
                        labels: {
                            filter: (item) => !item.text.endsWith('(fit)'),
                        },
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => {
                                const ds = seriesData.find(s => s.zkvm === ctx.dataset.label);
                                const gasLabel = ds?.gasLimits?.[ctx.dataIndex] || '';
                                const gasM = (ctx.parsed.x / 1e6).toFixed(1);
                                const timeS = (ctx.parsed.y / 1000).toFixed(2);
                                return `${ctx.dataset.label}: ${gasM}M gas, ${timeS}s${gasLabel ? ` (${gasLabel})` : ''}`;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Block Gas Used' },
                        ticks: {
                            callback: (v) => `${(v / 1e6).toFixed(0)}M`,
                        },
                    },
                    y: {
                        title: { display: true, text: 'Proving Time (ms)' },
                        beginAtZero: true,
                        ticks: {
                            callback: (v) => v >= 1000 ? `${(v / 1000).toFixed(1)}s` : `${v}ms`,
                        },
                    },
                },
            },
        });
    }

    /**
     * Renders the regression stats table.
     * @private
     */
    _renderStats(seriesData) {
        if (seriesData.length === 0) {
            this.statsContainer.innerHTML = '<p>No data available for linearity analysis.</p>';
            return;
        }

        const rows = seriesData.map(series => {
            const reg = series.regression;
            const lin = series.linearity;

            if (!reg) {
                return `<tr>
                    <td>${escapeHtml(series.zkvm)}</td>
                    <td colspan="5">Insufficient data</td>
                </tr>`;
            }

            const badgeClass = lin ? `linearity-${lin.classification}` : '';
            const badgeText = lin ? `${lin.classification} (exp: ${lin.exponent.toFixed(2)})` : '-';
            const slopeMs = reg.slope * 1e6; // ms per MGas
            const throughput = slopeMs > 0 ? (1000 / slopeMs) : null;

            return `<tr>
                <td>${escapeHtml(series.zkvm)}</td>
                <td>${reg.rSquared.toFixed(4)}</td>
                <td>${slopeMs.toFixed(1)} ms/MGas</td>
                <td>${(reg.intercept / 1000).toFixed(2)}s</td>
                <td><span class="linearity-badge ${badgeClass}">${badgeText}</span></td>
                <td>${throughput !== null ? throughput.toFixed(2) + ' MGas/s' : '-'}</td>
            </tr>`;
        }).join('');

        this.statsContainer.innerHTML = `
            <table class="linearity-stats-table">
                <thead>
                    <tr>
                        <th>EL/zkVM</th>
                        <th>R&sup2;</th>
                        <th>Slope</th>
                        <th>Intercept</th>
                        <th>Scaling</th>
                        <th>Throughput (slope)</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        `;
    }
}
