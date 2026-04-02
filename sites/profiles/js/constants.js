export const COST_CATEGORIES = [
    { key: 'base', label: 'Base', cssClass: 'seg-base' },
    { key: 'main', label: 'Main', cssClass: 'seg-main' },
    { key: 'opcodes', label: 'Opcodes', cssClass: 'seg-opcodes' },
    { key: 'precompiles', label: 'Precompiles', cssClass: 'seg-precompiles' },
    { key: 'memory', label: 'Memory', cssClass: 'seg-memory' },
];

export const PHASE_COLORS = [
    '#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
    '#0ea5e9', '#f97316', '#14b8a6', '#e879f9', '#64748b',
    '#ec4899', '#22d3ee', '#84cc16', '#a855f7', '#f43f5e',
    '#06b6d4', '#d946ef', '#facc15', '#fb923c',
];

export function formatNumber(n) {
    if (n == null) return '-';
    return n.toLocaleString('en-US');
}

export function formatCost(n) {
    if (n == null) return '-';
    if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T';
    if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
    return n.toString();
}

export function formatPct(n) {
    if (n == null) return '-';
    return n.toFixed(2) + '%';
}
