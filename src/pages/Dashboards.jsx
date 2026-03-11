import { useApp } from '../context/AppContext';
import { calculateProjectProgress, PHASE_CONFIG, PHASES, getActionPlanProgress, formatDate } from '../utils/pdcaUtils';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const PHASE_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export default function Dashboards() {
    const { state } = useApp();
    const { projects } = state;

    // Phase distribution
    const phaseDistribution = PHASES.map((phase, i) => ({
        name: PHASE_CONFIG[phase].label,
        value: projects.filter(p => p.status === phase).length,
        color: PHASE_COLORS[i]
    })).filter(d => d.value > 0);

    const completedProjects = projects.filter(p => p.actPhase?.completed);
    if (completedProjects.length > 0) {
        phaseDistribution.push({ name: 'Completado', value: completedProjects.length, color: '#34d399' });
    }

    // Progress per project
    const progressData = projects.map(p => ({
        name: p.name.length > 20 ? p.name.substring(0, 20) + '...' : p.name,
        progreso: Math.round(calculateProjectProgress(p))
    }));

    // Action plan completion per project
    const actionData = projects.map(p => {
        const ap = getActionPlanProgress(p);
        return { name: p.name.length > 20 ? p.name.substring(0, 20) + '...' : p.name, completadas: ap.completed, pendientes: ap.total - ap.completed };
    }).filter(d => d.completadas + d.pendientes > 0);

    // Aggregate metrics from all projects
    const allMetrics = [];
    projects.forEach(p => {
        (p.doPhase?.metrics || []).forEach(m => {
            if (m.entries?.length > 0) {
                allMetrics.push({ project: p.name, metric: m });
            }
        });
    });

    const totalActions = projects.reduce((s, p) => s + (p.plan?.actionPlan?.length || 0), 0);
    const completedActions = projects.reduce((s, p) => s + (p.plan?.actionPlan?.filter(a => a.completed)?.length || 0), 0);
    const totalObjectives = projects.reduce((s, p) => s + (p.plan?.smartObjectives?.length || 0), 0);
    const totalLessons = projects.reduce((s, p) => s + (p.checkPhase?.lessonsLearned?.length || 0), 0);

    const tooltipStyle = {
        contentStyle: { background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text-primary)' }
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header">
                <div>
                    <h1>📈 Dashboards</h1>
                    <p className="page-subtitle">Vista general de todos los proyectos PDCA</p>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid-4" style={{ marginBottom: '32px' }}>
                <div className="glass-card stat-card">
                    <span className="stat-label">Proyectos</span>
                    <span className="stat-value">{projects.length}</span>
                    <span className="stat-sub">{completedProjects.length} completados</span>
                </div>
                <div className="glass-card stat-card">
                    <span className="stat-label">Acciones</span>
                    <span className="stat-value">{completedActions}<span className="stat-unit">/{totalActions}</span></span>
                    <span className="stat-sub">completadas</span>
                </div>
                <div className="glass-card stat-card">
                    <span className="stat-label">Objetivos SMART</span>
                    <span className="stat-value">{totalObjectives}</span>
                    <span className="stat-sub">definidos globalmente</span>
                </div>
                <div className="glass-card stat-card">
                    <span className="stat-label">Lecciones</span>
                    <span className="stat-value">{totalLessons}</span>
                    <span className="stat-sub">aprendidas</span>
                </div>
            </div>

            <div className="grid-2" style={{ marginBottom: '32px' }}>
                {/* Phase Distribution Pie */}
                <div className="glass-card">
                    <h3 style={{ marginBottom: '16px' }}>Distribución por Fase</h3>
                    {phaseDistribution.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie data={phaseDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name, value }) => `${name}: ${value}`}>
                                    {phaseDistribution.map((entry, idx) => (
                                        <Cell key={idx} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip {...tooltipStyle} />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="empty-state"><p>Sin datos</p></div>
                    )}
                </div>

                {/* Progress per Project */}
                <div className="glass-card">
                    <h3 style={{ marginBottom: '16px' }}>Progreso por Proyecto</h3>
                    {progressData.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={progressData} layout="vertical" margin={{ left: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(16,185,129,0.1)" />
                                <XAxis type="number" domain={[0, 100]} stroke="var(--color-text-muted)" fontSize={11} />
                                <YAxis type="category" dataKey="name" stroke="var(--color-text-muted)" fontSize={11} width={100} />
                                <Tooltip {...tooltipStyle} />
                                <Bar dataKey="progreso" fill="#10b981" radius={[0, 4, 4, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="empty-state"><p>Sin datos</p></div>
                    )}
                </div>
            </div>

            {/* Action Plan Completion */}
            {actionData.length > 0 && (
                <div className="glass-card" style={{ marginBottom: '32px' }}>
                    <h3 style={{ marginBottom: '16px' }}>Acciones del Plan (completadas vs pendientes)</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={actionData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(16,185,129,0.1)" />
                            <XAxis dataKey="name" stroke="var(--color-text-muted)" fontSize={11} />
                            <YAxis stroke="var(--color-text-muted)" fontSize={11} />
                            <Tooltip {...tooltipStyle} />
                            <Legend />
                            <Bar dataKey="completadas" stackId="a" fill="#10b981" />
                            <Bar dataKey="pendientes" stackId="a" fill="#f59e0b" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}

            {/* Metric Trends */}
            {allMetrics.length > 0 && (
                <div className="glass-card" style={{ marginBottom: '32px' }}>
                    <h3 style={{ marginBottom: '16px' }}>Tendencias de Métricas</h3>
                    {allMetrics.map(({ project: pName, metric }) => {
                        const data = metric.entries.map(e => ({ date: e.date, value: e.value }));
                        return (
                            <div key={metric.id} style={{ marginBottom: '24px' }}>
                                <h4 style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
                                    {metric.name} <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>— {pName}</span>
                                </h4>
                                <ResponsiveContainer width="100%" height={180}>
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(16,185,129,0.1)" />
                                        <XAxis dataKey="date" stroke="var(--color-text-muted)" fontSize={10} />
                                        <YAxis stroke="var(--color-text-muted)" fontSize={10} />
                                        <Tooltip {...tooltipStyle} />
                                        <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b', r: 3 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Projects Summary Table */}
            <div className="glass-card">
                <h3 style={{ marginBottom: '16px' }}>Resumen de Proyectos</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Proyecto</th>
                                <th>Fase</th>
                                <th>Progreso</th>
                                <th>Acciones</th>
                                <th>Creado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(p => {
                                const progress = calculateProjectProgress(p);
                                const ap = getActionPlanProgress(p);
                                const phaseCfg = PHASE_CONFIG[p.status] || PHASE_CONFIG.plan;
                                return (
                                    <tr key={p.id}>
                                        <td><strong>{p.name}</strong></td>
                                        <td><span className={`badge ${phaseCfg.badge}`}>{phaseCfg.icon} {phaseCfg.label}</span></td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <div className="progress-bar" style={{ width: '80px' }}>
                                                    <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                                                </div>
                                                <span className="mono" style={{ fontSize: '0.8rem' }}>{Math.round(progress)}%</span>
                                            </div>
                                        </td>
                                        <td><span className="mono">{ap.completed}/{ap.total}</span></td>
                                        <td style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{formatDate(p.createdAt)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
