import { useState } from 'react';
import { useApp, getActiveProject } from '../context/AppContext';
import PhaseIndicator from '../components/PhaseIndicator';
import { getMetricTrend } from '../utils/pdcaUtils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function CheckPhase() {
    const { state, dispatch } = useApp();
    const project = getActiveProject(state);
    const [tab, setTab] = useState('results');
    const [newLesson, setNewLesson] = useState('');

    if (!project) {
        return (
            <div className="page-container animate-fade-in">
                <div className="empty-state glass-card">
                    <div className="empty-state-icon">🔍</div>
                    <h3>Sin proyecto activo</h3>
                    <p>Selecciona o crea un proyecto en la sección Proyectos.</p>
                </div>
            </div>
        );
    }

    const check = project.checkPhase;
    const metrics = project.doPhase?.metrics || [];

    const updateCheck = (data) => {
        dispatch({ type: 'UPDATE_CHECK', payload: { projectId: project.id, ...data } });
    };

    const toggleCompleted = () => {
        updateCheck({ completed: !check.completed });
        if (!check.completed) {
            dispatch({ type: 'SET_PROJECT_STATUS', payload: { projectId: project.id, status: 'act' } });
        }
    };

    // Lessons
    const addLesson = () => {
        if (!newLesson.trim()) return;
        updateCheck({ lessonsLearned: [...(check.lessonsLearned || []), newLesson.trim()] });
        setNewLesson('');
    };

    const removeLesson = (idx) => {
        updateCheck({ lessonsLearned: check.lessonsLearned.filter((_, i) => i !== idx) });
    };

    // Objectives evaluation
    const setObjectiveMet = (idx, met) => {
        const objs = [...(check.objectivesMet || [])];
        if (!objs[idx]) {
            objs[idx] = { objective: project.plan?.smartObjectives?.[idx]?.specific || '', met, notes: '' };
        } else {
            objs[idx] = { ...objs[idx], met };
        }
        updateCheck({ objectivesMet: objs });
    };

    const setObjectiveNotes = (idx, notes) => {
        const objs = [...(check.objectivesMet || [])];
        if (!objs[idx]) {
            objs[idx] = { objective: project.plan?.smartObjectives?.[idx]?.specific || '', met: false, notes };
        } else {
            objs[idx] = { ...objs[idx], notes };
        }
        updateCheck({ objectivesMet: objs });
    };

    const TABS = [
        { key: 'results', label: 'Resultados', icon: '📊' },
        { key: 'objectives', label: 'Evaluación', icon: '✅' },
        { key: 'lessons', label: 'Lecciones', icon: '💡' },
    ];

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header">
                <div>
                    <h1>🔍 Verificar (Check)</h1>
                    <p className="page-subtitle">{project.name}</p>
                </div>
                <div className="page-header-actions">
                    <button
                        className={`btn ${check.completed ? 'btn-secondary' : 'btn-primary'}`}
                        onClick={toggleCompleted}
                    >
                        {check.completed ? '✓ Fase Completada' : 'Marcar como Completada'}
                    </button>
                </div>
            </div>

            <PhaseIndicator currentPhase="check" project={project} />

            <div className="tabs">
                {TABS.map(t => (
                    <button key={t.key} className={`tab-btn ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
                        {t.icon} {t.label}
                    </button>
                ))}
            </div>

            {/* Results Analysis */}
            {tab === 'results' && (
                <div className="section-block animate-fade-in">
                    {/* Metric Charts */}
                    {metrics.length > 0 ? (
                        <div style={{ marginBottom: '24px' }}>
                            {metrics.map((metric) => {
                                const trend = getMetricTrend(metric);
                                const chartData = (metric.entries || []).map(e => ({
                                    date: e.date,
                                    value: e.value
                                }));

                                return (
                                    <div key={metric.id} className="glass-card" style={{ marginBottom: '16px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                            <h3 style={{ fontSize: '1rem' }}>{metric.name}</h3>
                                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                                <span className={`badge ${trend === 'improving' ? 'badge-green' : trend === 'declining' ? 'badge-red' : 'badge-amber'}`}>
                                                    {trend === 'improving' ? '↗ Mejorando' : trend === 'declining' ? '↘ Declinando' : '→ Estable'}
                                                </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', fontSize: '0.85rem' }}>
                                            <div>
                                                <span style={{ color: 'var(--color-text-muted)' }}>Línea Base: </span>
                                                <strong style={{ fontFamily: 'var(--font-mono)' }}>{metric.baseline} {metric.unit}</strong>
                                            </div>
                                            <div>
                                                <span style={{ color: 'var(--color-text-muted)' }}>Meta: </span>
                                                <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-do)' }}>{metric.target} {metric.unit}</strong>
                                            </div>
                                            {chartData.length > 0 && (
                                                <div>
                                                    <span style={{ color: 'var(--color-text-muted)' }}>Actual: </span>
                                                    <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-check)' }}>{chartData[chartData.length - 1].value} {metric.unit}</strong>
                                                </div>
                                            )}
                                        </div>

                                        {chartData.length > 1 ? (
                                            <ResponsiveContainer width="100%" height={250}>
                                                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                                                    <XAxis dataKey="date" stroke="var(--color-text-muted)" fontSize={11} />
                                                    <YAxis stroke="var(--color-text-muted)" fontSize={11} />
                                                    <Tooltip
                                                        contentStyle={{
                                                            background: 'var(--color-bg-secondary)',
                                                            border: '1px solid var(--color-border)',
                                                            borderRadius: '8px',
                                                            color: 'var(--color-text-primary)'
                                                        }}
                                                    />
                                                    <ReferenceLine y={metric.baseline} stroke="var(--color-red)" strokeDasharray="5 5" label={{ value: 'Base', fill: 'var(--color-red)', fontSize: 11 }} />
                                                    <ReferenceLine y={metric.target} stroke="var(--color-do)" strokeDasharray="5 5" label={{ value: 'Meta', fill: 'var(--color-do)', fontSize: 11 }} />
                                                    <Line type="monotone" dataKey="value" stroke="var(--color-check)" strokeWidth={2} dot={{ fill: 'var(--color-check)', r: 4 }} activeDot={{ r: 6 }} />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        ) : (
                                            <div className="empty-state" style={{ padding: '24px' }}>
                                                <p>Se necesitan al menos 2 registros para mostrar la gráfica.</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="glass-card empty-state">
                            <div className="empty-state-icon">📊</div>
                            <h3>Sin métricas</h3>
                            <p>Registra métricas en la fase Hacer para visualizar los resultados aquí.</p>
                        </div>
                    )}

                    {/* Analysis Text */}
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '16px' }}>📝 Análisis de Resultados</h3>
                        <textarea
                            className="form-textarea"
                            rows={5}
                            placeholder="Describe tu análisis de los resultados obtenidos vs. los esperados..."
                            value={check.analysis || ''}
                            onChange={e => updateCheck({ analysis: e.target.value })}
                        />
                    </div>
                </div>
            )}

            {/* Objectives Evaluation */}
            {tab === 'objectives' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '16px' }}>✅ Evaluación de Objetivos</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                            Evalúa si cada objetivo SMART fue alcanzado.
                        </p>
                        {(project.plan?.smartObjectives || []).length === 0 ? (
                            <div className="empty-state">
                                <p>No hay objetivos SMART definidos en la fase Planificar.</p>
                            </div>
                        ) : (
                            project.plan.smartObjectives.map((obj, idx) => {
                                const evaluation = check.objectivesMet?.[idx] || { met: false, notes: '' };
                                return (
                                    <div key={idx} style={{
                                        padding: '16px',
                                        background: 'var(--color-bg-tertiary)',
                                        borderRadius: 'var(--radius-md)',
                                        marginBottom: '12px',
                                        border: '1px solid var(--color-border)',
                                        borderLeft: `3px solid ${evaluation.met ? 'var(--color-do)' : 'var(--color-red)'}`
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                            <div>
                                                <strong>{obj.specific || `Objetivo #${idx + 1}`}</strong>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                                                    {obj.measurable} • {obj.timeBound}
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <button
                                                    className={`btn btn-sm ${evaluation.met ? 'btn-primary' : 'btn-ghost'}`}
                                                    style={{ background: evaluation.met ? 'var(--color-do)' : undefined }}
                                                    onClick={() => setObjectiveMet(idx, true)}
                                                >
                                                    ✓ Alcanzado
                                                </button>
                                                <button
                                                    className={`btn btn-sm ${!evaluation.met ? 'btn-danger' : 'btn-ghost'}`}
                                                    onClick={() => setObjectiveMet(idx, false)}
                                                >
                                                    ✗ No Alcanzado
                                                </button>
                                            </div>
                                        </div>
                                        <input
                                            className="form-input"
                                            style={{ width: '100%', fontSize: '0.85rem' }}
                                            placeholder="Notas de evaluación..."
                                            value={evaluation.notes}
                                            onChange={e => setObjectiveNotes(idx, e.target.value)}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}

            {/* Lessons Learned */}
            {tab === 'lessons' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '16px' }}>💡 Lecciones Aprendidas</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                            Documenta qué funcionó, qué no y qué aprendió el equipo.
                        </p>

                        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                            <input
                                className="form-input"
                                style={{ flex: 1 }}
                                placeholder="Escribe una lección aprendida..."
                                value={newLesson}
                                onChange={e => setNewLesson(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addLesson()}
                            />
                            <button className="btn btn-secondary" onClick={addLesson}>Agregar</button>
                        </div>

                        {(check.lessonsLearned || []).length === 0 ? (
                            <div className="empty-state"><p>No hay lecciones registradas aún.</p></div>
                        ) : (
                            check.lessonsLearned.map((lesson, idx) => (
                                <div key={idx} style={{
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    padding: '12px 16px',
                                    borderBottom: '1px solid rgba(16, 185, 129, 0.05)'
                                }}>
                                    <span style={{ color: 'var(--color-check)', fontSize: '1.1rem' }}>💡</span>
                                    <span style={{ flex: 1, fontSize: '0.9rem' }}>{lesson}</span>
                                    <button className="btn btn-ghost btn-sm" style={{ padding: '2px 6px' }} onClick={() => removeLesson(idx)}>✕</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
