import { useState } from 'react';
import { useApp, getActiveProject } from '../context/AppContext';
import PhaseIndicator from '../components/PhaseIndicator';
import { formatDate } from '../utils/pdcaUtils';

export default function DoPhase() {
    const { state, dispatch } = useApp();
    const project = getActiveProject(state);
    const [tab, setTab] = useState('actions');
    const [newMetricName, setNewMetricName] = useState('');
    const [newObservation, setNewObservation] = useState('');

    if (!project) {
        return (
            <div className="page-container animate-fade-in">
                <div className="empty-state glass-card">
                    <div className="empty-state-icon">⚡</div>
                    <h3>Sin proyecto activo</h3>
                    <p>Selecciona o crea un proyecto en la sección Proyectos.</p>
                </div>
            </div>
        );
    }

    const doPhase = project.doPhase;
    const actionPlan = project.plan?.actionPlan || [];

    const updateDo = (data) => {
        dispatch({ type: 'UPDATE_DO', payload: { projectId: project.id, ...data } });
    };

    const toggleCompleted = () => {
        updateDo({ completed: !doPhase.completed });
        if (!doPhase.completed) {
            dispatch({ type: 'SET_PROJECT_STATUS', payload: { projectId: project.id, status: 'check' } });
        }
    };

    // Action Status
    const updateActionStatus = (actionId, field, value) => {
        const actionStatus = { ...(doPhase.actionStatus || {}) };
        actionStatus[actionId] = { ...(actionStatus[actionId] || { status: 'pending', notes: '' }), [field]: value };
        updateDo({ actionStatus });
    };

    // Metrics
    const addMetric = () => {
        if (!newMetricName.trim()) return;
        const metrics = [...(doPhase.metrics || []), {
            id: Date.now().toString(),
            name: newMetricName.trim(),
            unit: '',
            baseline: 0,
            target: 0,
            entries: []
        }];
        updateDo({ metrics });
        setNewMetricName('');
    };

    const updateMetric = (idx, field, value) => {
        const metrics = [...doPhase.metrics];
        metrics[idx] = { ...metrics[idx], [field]: value };
        updateDo({ metrics });
    };

    const addMetricEntry = (metricIdx) => {
        const metrics = [...doPhase.metrics];
        const entries = [...(metrics[metricIdx].entries || []), { value: 0, date: new Date().toISOString().split('T')[0] }];
        metrics[metricIdx] = { ...metrics[metricIdx], entries };
        updateDo({ metrics });
    };

    const updateMetricEntry = (metricIdx, entryIdx, field, value) => {
        const metrics = [...doPhase.metrics];
        const entries = [...metrics[metricIdx].entries];
        entries[entryIdx] = { ...entries[entryIdx], [field]: field === 'value' ? parseFloat(value) || 0 : value };
        metrics[metricIdx] = { ...metrics[metricIdx], entries };
        updateDo({ metrics });
    };

    const removeMetricEntry = (metricIdx, entryIdx) => {
        const metrics = [...doPhase.metrics];
        metrics[metricIdx] = { ...metrics[metricIdx], entries: metrics[metricIdx].entries.filter((_, i) => i !== entryIdx) };
        updateDo({ metrics });
    };

    const removeMetric = (idx) => {
        updateDo({ metrics: doPhase.metrics.filter((_, i) => i !== idx) });
    };

    // Observations
    const addObservation = () => {
        if (!newObservation.trim()) return;
        const observations = [...(doPhase.observations || []), {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            text: newObservation.trim()
        }];
        updateDo({ observations });
        setNewObservation('');
    };

    const removeObservation = (idx) => {
        updateDo({ observations: doPhase.observations.filter((_, i) => i !== idx) });
    };

    const STATUS_OPTIONS = [
        { value: 'pending', label: 'Pendiente', color: 'var(--color-text-muted)' },
        { value: 'in-progress', label: 'En Progreso', color: 'var(--color-check)' },
        { value: 'completed', label: 'Completado', color: 'var(--color-do)' },
        { value: 'blocked', label: 'Bloqueado', color: 'var(--color-red)' },
    ];

    const TABS = [
        { key: 'actions', label: 'Ejecución', icon: '⚡' },
        { key: 'metrics', label: 'Datos', icon: '📊' },
        { key: 'observations', label: 'Observaciones', icon: '📝' },
    ];

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header">
                <div>
                    <h1>⚡ Hacer (Do)</h1>
                    <p className="page-subtitle">{project.name}</p>
                </div>
                <div className="page-header-actions">
                    <button
                        className={`btn ${doPhase.completed ? 'btn-secondary' : 'btn-primary'}`}
                        onClick={toggleCompleted}
                    >
                        {doPhase.completed ? '✓ Fase Completada' : 'Marcar como Completada'}
                    </button>
                </div>
            </div>

            <PhaseIndicator currentPhase="do" project={project} />

            <div className="tabs">
                {TABS.map(t => (
                    <button key={t.key} className={`tab-btn ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
                        {t.icon} {t.label}
                    </button>
                ))}
            </div>

            {/* Action Execution Tracker */}
            {tab === 'actions' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '16px' }}>⚡ Ejecución de Plan de Acción</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                            Ejecuta las acciones del plan como prueba piloto. Documenta el estatus y notas de cada actividad.
                        </p>
                        {actionPlan.length === 0 ? (
                            <div className="empty-state">
                                <p>No hay acciones en el plan. Ve a la fase Planificar para agregar acciones.</p>
                            </div>
                        ) : (
                            actionPlan.map((action) => {
                                const status = doPhase.actionStatus?.[action.id] || { status: 'pending', notes: '' };
                                const statusCfg = STATUS_OPTIONS.find(s => s.value === status.status) || STATUS_OPTIONS[0];
                                return (
                                    <div key={action.id} style={{
                                        padding: '16px',
                                        background: 'var(--color-bg-tertiary)',
                                        borderRadius: 'var(--radius-md)',
                                        marginBottom: '12px',
                                        borderLeft: `3px solid ${statusCfg.color}`
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                            <div>
                                                <strong style={{ fontSize: '0.95rem' }}>{action.task || '(Sin nombre)'}</strong>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                                                    👤 {action.responsible || '—'} • 📅 {action.deadline || '—'} • 🔧 {action.resources || '—'}
                                                </div>
                                            </div>
                                            <select
                                                className="form-select"
                                                style={{ padding: '6px 10px', fontSize: '0.8rem', width: 'auto', color: statusCfg.color }}
                                                value={status.status}
                                                onChange={e => updateActionStatus(action.id, 'status', e.target.value)}
                                            >
                                                {STATUS_OPTIONS.map(s => (
                                                    <option key={s.value} value={s.value}>{s.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <input
                                            className="form-input"
                                            style={{ width: '100%', padding: '6px 10px', fontSize: '0.85rem' }}
                                            placeholder="Notas de ejecución..."
                                            value={status.notes}
                                            onChange={e => updateActionStatus(action.id, 'notes', e.target.value)}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}

            {/* Metrics / Data Collection */}
            {tab === 'metrics' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3>📊 Recolección de Datos</h3>
                        </div>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                            Registra las métricas que estás midiendo durante la prueba piloto.
                        </p>

                        {/* Add Metric */}
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                            <input
                                className="form-input"
                                style={{ flex: 1 }}
                                placeholder="Nombre de la métrica (ej: Tasa de Defectos)..."
                                value={newMetricName}
                                onChange={e => setNewMetricName(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addMetric()}
                            />
                            <button className="btn btn-secondary" onClick={addMetric}>+ Agregar</button>
                        </div>

                        {(doPhase.metrics || []).map((metric, mIdx) => (
                            <div key={metric.id} style={{
                                padding: '16px',
                                background: 'var(--color-bg-tertiary)',
                                borderRadius: 'var(--radius-md)',
                                marginBottom: '16px',
                                border: '1px solid var(--color-border)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                    <h4 style={{ fontSize: '0.95rem' }}>{metric.name}</h4>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeMetric(mIdx)}>Eliminar</button>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                                    <div className="form-group">
                                        <label className="form-label">Unidad</label>
                                        <input className="form-input" placeholder="%, min, uds..." value={metric.unit} onChange={e => updateMetric(mIdx, 'unit', e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Línea Base</label>
                                        <input className="form-input" type="number" value={metric.baseline} onChange={e => updateMetric(mIdx, 'baseline', parseFloat(e.target.value) || 0)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Meta</label>
                                        <input className="form-input" type="number" value={metric.target} onChange={e => updateMetric(mIdx, 'target', parseFloat(e.target.value) || 0)} />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="form-label" style={{ fontSize: '0.75rem' }}>Registros</span>
                                    <button className="btn btn-secondary btn-sm" onClick={() => addMetricEntry(mIdx)}>+ Registro</button>
                                </div>

                                {(metric.entries || []).map((entry, eIdx) => (
                                    <div key={eIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                                        <input className="form-input" type="date" style={{ padding: '4px 8px', fontSize: '0.8rem' }}
                                            value={entry.date} onChange={e => updateMetricEntry(mIdx, eIdx, 'date', e.target.value)} />
                                        <input className="form-input" type="number" style={{ width: '100px', padding: '4px 8px', fontSize: '0.8rem' }}
                                            value={entry.value} onChange={e => updateMetricEntry(mIdx, eIdx, 'value', e.target.value)} />
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{metric.unit}</span>
                                        <button className="btn btn-ghost btn-sm" style={{ padding: '2px 6px' }} onClick={() => removeMetricEntry(mIdx, eIdx)}>✕</button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Observations Log */}
            {tab === 'observations' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '16px' }}>📝 Bitácora de Observaciones</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                            Documenta cualquier desviación del plan, hallazgos inesperados o notas importantes.
                        </p>

                        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                            <textarea
                                className="form-textarea"
                                style={{ flex: 1, minHeight: '60px' }}
                                placeholder="Escribe una observación..."
                                value={newObservation}
                                onChange={e => setNewObservation(e.target.value)}
                            />
                            <button className="btn btn-secondary" onClick={addObservation} style={{ alignSelf: 'flex-end' }}>Agregar</button>
                        </div>

                        <div className="timeline">
                            {(doPhase.observations || []).map((obs, idx) => (
                                <div key={obs.id} className="timeline-item">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <div className="timeline-date">{formatDate(obs.date)}</div>
                                            <div className="timeline-content">{obs.text}</div>
                                        </div>
                                        <button className="btn btn-ghost btn-sm" style={{ padding: '2px 6px', flexShrink: 0 }} onClick={() => removeObservation(idx)}>✕</button>
                                    </div>
                                </div>
                            ))}
                            {(doPhase.observations || []).length === 0 && (
                                <div className="empty-state"><p>Sin observaciones registradas aún.</p></div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
