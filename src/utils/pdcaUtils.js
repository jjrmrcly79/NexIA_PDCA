export const PHASE_CONFIG = {
    plan:  { label: 'Planificar', icon: '📋', color: 'var(--color-plan)', dimColor: 'var(--color-plan-dim)', badge: 'badge-plan' },
    do:    { label: 'Hacer',      icon: '⚡', color: 'var(--color-do)',   dimColor: 'var(--color-do-dim)',   badge: 'badge-do' },
    check: { label: 'Verificar',  icon: '🔍', color: 'var(--color-check)', dimColor: 'var(--color-check-dim)', badge: 'badge-check' },
    act:   { label: 'Actuar',     icon: '🚀', color: 'var(--color-act)',  dimColor: 'var(--color-act-dim)',  badge: 'badge-act' },
};

export const PHASES = ['plan', 'do', 'check', 'act'];

export function getPhaseIndex(phase) {
    return PHASES.indexOf(phase);
}

export function calculateProjectProgress(project) {
    if (!project) return 0;
    let completed = 0;
    if (project.plan?.completed) completed++;
    if (project.doPhase?.completed) completed++;
    if (project.checkPhase?.completed) completed++;
    if (project.actPhase?.completed) completed++;
    return (completed / 4) * 100;
}

export function getActionPlanProgress(project) {
    if (!project?.plan?.actionPlan?.length) return { total: 0, completed: 0, percent: 0 };
    const total = project.plan.actionPlan.length;
    const completed = project.plan.actionPlan.filter(a => a.completed).length;
    return { total, completed, percent: total > 0 ? (completed / total) * 100 : 0 };
}

export function getMetricTrend(metric) {
    if (!metric?.entries?.length || metric.entries.length < 2) return 'neutral';
    const last = metric.entries[metric.entries.length - 1].value;
    const prev = metric.entries[metric.entries.length - 2].value;
    const targetBelow = metric.target < metric.baseline;
    if (targetBelow) {
        return last < prev ? 'improving' : last > prev ? 'declining' : 'neutral';
    }
    return last > prev ? 'improving' : last < prev ? 'declining' : 'neutral';
}

export function formatDate(dateStr) {
    if (!dateStr) return '—';
    try {
        return new Date(dateStr).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
        return dateStr;
    }
}

export function formatDateTime(dateStr) {
    if (!dateStr) return '—';
    try {
        return new Date(dateStr).toLocaleString('es-MX', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    } catch {
        return dateStr;
    }
}
