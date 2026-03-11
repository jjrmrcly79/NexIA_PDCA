import { useState } from 'react';
import { useApp, getActiveProject } from '../context/AppContext';
import PhaseIndicator from '../components/PhaseIndicator';

const ISHIKAWA_CATEGORIES = [
    { key: 'manoDeObra', label: 'Mano de Obra', icon: '👥' },
    { key: 'maquinaria', label: 'Maquinaria', icon: '⚙️' },
    { key: 'metodo', label: 'Método', icon: '📝' },
    { key: 'material', label: 'Material', icon: '📦' },
    { key: 'medioAmbiente', label: 'Medio Ambiente', icon: '🌿' },
    { key: 'medicion', label: 'Medición', icon: '📏' },
];

export default function PlanPhase() {
    const { state, dispatch } = useApp();
    const project = getActiveProject(state);
    const [tab, setTab] = useState('problem');
    const [newIshikawaInput, setNewIshikawaInput] = useState({});

    if (!project) {
        return (
            <div className="page-container animate-fade-in">
                <div className="empty-state glass-card">
                    <div className="empty-state-icon">📋</div>
                    <h3>Sin proyecto activo</h3>
                    <p>Selecciona o crea un proyecto en la sección Proyectos.</p>
                </div>
            </div>
        );
    }

    const plan = project.plan;

    const updatePlan = (data) => {
        dispatch({ type: 'UPDATE_PLAN', payload: { projectId: project.id, ...data } });
    };

    const toggleCompleted = () => {
        updatePlan({ completed: !plan.completed });
        if (!plan.completed) {
            dispatch({ type: 'SET_PROJECT_STATUS', payload: { projectId: project.id, status: 'do' } });
        }
    };

    // 5 Whys
    const updateWhy = (idx, value) => {
        const whys = [...(plan.whys || ['', '', '', '', ''])];
        whys[idx] = value;
        updatePlan({ whys });
    };

    // Ishikawa
    const addIshikawaCause = (category) => {
        const val = (newIshikawaInput[category] || '').trim();
        if (!val) return;
        const ishikawa = { ...plan.ishikawa };
        ishikawa[category] = [...(ishikawa[category] || []), val];
        updatePlan({ ishikawa });
        setNewIshikawaInput({ ...newIshikawaInput, [category]: '' });
    };

    const removeIshikawaCause = (category, idx) => {
        const ishikawa = { ...plan.ishikawa };
        ishikawa[category] = ishikawa[category].filter((_, i) => i !== idx);
        updatePlan({ ishikawa });
    };

    // SMART Objectives
    const addObjective = () => {
        const objs = [...(plan.smartObjectives || []), { specific: '', measurable: '', achievable: '', relevant: '', timeBound: '', completed: false }];
        updatePlan({ smartObjectives: objs });
    };

    const updateObjective = (idx, field, value) => {
        const objs = [...plan.smartObjectives];
        objs[idx] = { ...objs[idx], [field]: value };
        updatePlan({ smartObjectives: objs });
    };

    const removeObjective = (idx) => {
        updatePlan({ smartObjectives: plan.smartObjectives.filter((_, i) => i !== idx) });
    };

    // Action Plan
    const addAction = () => {
        const actions = [...(plan.actionPlan || []), { id: Date.now().toString(), task: '', responsible: '', resources: '', deadline: '', completed: false }];
        updatePlan({ actionPlan: actions });
    };

    const updateAction = (idx, field, value) => {
        const actions = [...plan.actionPlan];
        actions[idx] = { ...actions[idx], [field]: value };
        updatePlan({ actionPlan: actions });
    };

    const removeAction = (idx) => {
        updatePlan({ actionPlan: plan.actionPlan.filter((_, i) => i !== idx) });
    };

    const TABS = [
        { key: 'problem', label: 'Problema', icon: '🎯' },
        { key: 'rootCause', label: 'Causa Raíz', icon: '🔎' },
        { key: 'smart', label: 'Objetivos SMART', icon: '🎯' },
        { key: 'actionPlan', label: 'Plan de Acción', icon: '📋' },
    ];

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header">
                <div>
                    <h1>📋 Planificar (Plan)</h1>
                    <p className="page-subtitle">{project.name}</p>
                </div>
                <div className="page-header-actions">
                    <button
                        className={`btn ${plan.completed ? 'btn-secondary' : 'btn-primary'}`}
                        onClick={toggleCompleted}
                    >
                        {plan.completed ? '✓ Fase Completada' : 'Marcar como Completada'}
                    </button>
                </div>
            </div>

            <PhaseIndicator currentPhase="plan" project={project} />

            <div className="tabs">
                {TABS.map(t => (
                    <button key={t.key} className={`tab-btn ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
                        {t.icon} {t.label}
                    </button>
                ))}
            </div>

            {/* Problem Definition */}
            {tab === 'problem' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '16px' }}>🎯 Definición del Problema</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px' }}>
                            Define de manera clara y concisa qué es lo que quieres mejorar o resolver.
                        </p>
                        <div className="form-group">
                            <label className="form-label">Descripción del Problema</label>
                            <textarea
                                className="form-textarea"
                                rows={5}
                                placeholder="Describe el problema o la oportunidad de mejora..."
                                value={plan.problem || ''}
                                onChange={e => updatePlan({ problem: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Root Cause Analysis */}
            {tab === 'rootCause' && (
                <div className="section-block animate-fade-in">
                    {/* 5 Whys */}
                    <div className="glass-card" style={{ marginBottom: '24px' }}>
                        <h3 style={{ marginBottom: '16px' }}>🔎 Análisis de 5 Porqués</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                            Pregunta ¿por qué? hasta llegar a la causa raíz del problema.
                        </p>
                        {(plan.whys || ['', '', '', '', '']).map((why, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    background: 'var(--color-plan-dim)', color: 'var(--color-plan)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 700, fontSize: '0.85rem', flexShrink: 0
                                }}>
                                    {idx + 1}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label className="form-label" style={{ marginBottom: '4px' }}>¿Por qué {idx === 0 ? 'ocurre el problema' : `(${idx + 1})`}?</label>
                                    <input
                                        className="form-input"
                                        style={{ width: '100%' }}
                                        placeholder={`Respuesta al porqué #${idx + 1}...`}
                                        value={why}
                                        onChange={e => updateWhy(idx, e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Ishikawa */}
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '16px' }}>🐟 Diagrama de Ishikawa (6M)</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                            Clasifica las causas potenciales en las 6 categorías (Mano de Obra, Maquinaria, Método, Material, Medio Ambiente, Medición).
                        </p>
                        <div className="grid-2">
                            {ISHIKAWA_CATEGORIES.map(cat => (
                                <div key={cat.key} style={{
                                    padding: '16px',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '12px' }}>{cat.icon} {cat.label}</h4>
                                    {(plan.ishikawa?.[cat.key] || []).map((cause, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontSize: '0.85rem' }}>
                                            <span style={{ color: 'var(--color-plan)' }}>•</span>
                                            <span style={{ flex: 1 }}>{cause}</span>
                                            <button
                                                className="btn btn-ghost btn-sm"
                                                style={{ padding: '2px 6px', fontSize: '0.7rem' }}
                                                onClick={() => removeIshikawaCause(cat.key, idx)}
                                            >✕</button>
                                        </div>
                                    ))}
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                        <input
                                            className="form-input"
                                            style={{ flex: 1, padding: '6px 10px', fontSize: '0.8rem' }}
                                            placeholder="Agregar causa..."
                                            value={newIshikawaInput[cat.key] || ''}
                                            onChange={e => setNewIshikawaInput({ ...newIshikawaInput, [cat.key]: e.target.value })}
                                            onKeyDown={e => e.key === 'Enter' && addIshikawaCause(cat.key)}
                                        />
                                        <button className="btn btn-secondary btn-sm" onClick={() => addIshikawaCause(cat.key)}>+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* SMART Objectives */}
            {tab === 'smart' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3>🎯 Objetivos SMART</h3>
                            <button className="btn btn-secondary btn-sm" onClick={addObjective}>+ Agregar Objetivo</button>
                        </div>
                        {(plan.smartObjectives || []).length === 0 ? (
                            <div className="empty-state">
                                <p>No hay objetivos definidos. Agrega un objetivo SMART para tu plan de mejora.</p>
                            </div>
                        ) : (
                            plan.smartObjectives.map((obj, idx) => (
                                <div key={idx} style={{
                                    padding: '16px',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: '16px',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <h4 style={{ fontSize: '0.9rem' }}>Objetivo #{idx + 1}</h4>
                                        <button className="btn btn-danger btn-sm" onClick={() => removeObjective(idx)}>Eliminar</button>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div className="form-group">
                                            <label className="form-label">S — Específico</label>
                                            <input className="form-input" placeholder="¿Qué exactamente?" value={obj.specific} onChange={e => updateObjective(idx, 'specific', e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">M — Medible</label>
                                            <input className="form-input" placeholder="¿Cómo medirlo?" value={obj.measurable} onChange={e => updateObjective(idx, 'measurable', e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">A — Alcanzable</label>
                                            <input className="form-input" placeholder="¿Cómo lograrlo?" value={obj.achievable} onChange={e => updateObjective(idx, 'achievable', e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">R — Relevante</label>
                                            <input className="form-input" placeholder="¿Por qué importa?" value={obj.relevant} onChange={e => updateObjective(idx, 'relevant', e.target.value)} />
                                        </div>
                                        <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                            <label className="form-label">T — Temporal</label>
                                            <input className="form-input" placeholder="¿Cuándo?" value={obj.timeBound} onChange={e => updateObjective(idx, 'timeBound', e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Action Plan */}
            {tab === 'actionPlan' && (
                <div className="section-block animate-fade-in">
                    <div className="glass-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3>📋 Plan de Acción</h3>
                            <button className="btn btn-secondary btn-sm" onClick={addAction}>+ Agregar Acción</button>
                        </div>
                        {(plan.actionPlan || []).length === 0 ? (
                            <div className="empty-state">
                                <p>No hay acciones definidas. Agrega las tareas que se llevarán a cabo.</p>
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Estado</th>
                                            <th>Tarea</th>
                                            <th>Responsable</th>
                                            <th>Recursos</th>
                                            <th>Fecha Límite</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plan.actionPlan.map((action, idx) => (
                                            <tr key={action.id || idx}>
                                                <td>
                                                    <div
                                                        className={`checklist-checkbox ${action.completed ? 'checked' : ''}`}
                                                        onClick={() => updateAction(idx, 'completed', !action.completed)}
                                                    >
                                                        {action.completed && '✓'}
                                                    </div>
                                                </td>
                                                <td>
                                                    <input className="form-input" style={{ width: '100%', padding: '6px 10px', fontSize: '0.85rem' }}
                                                        value={action.task} onChange={e => updateAction(idx, 'task', e.target.value)}
                                                        placeholder="Descripción de la tarea..." />
                                                </td>
                                                <td>
                                                    <input className="form-input" style={{ width: '120px', padding: '6px 10px', fontSize: '0.85rem' }}
                                                        value={action.responsible} onChange={e => updateAction(idx, 'responsible', e.target.value)}
                                                        placeholder="Nombre..." />
                                                </td>
                                                <td>
                                                    <input className="form-input" style={{ width: '140px', padding: '6px 10px', fontSize: '0.85rem' }}
                                                        value={action.resources} onChange={e => updateAction(idx, 'resources', e.target.value)}
                                                        placeholder="Recursos..." />
                                                </td>
                                                <td>
                                                    <input className="form-input" type="date" style={{ padding: '6px 10px', fontSize: '0.85rem' }}
                                                        value={action.deadline} onChange={e => updateAction(idx, 'deadline', e.target.value)} />
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" style={{ padding: '4px 8px' }} onClick={() => removeAction(idx)}>✕</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
