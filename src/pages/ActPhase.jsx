import { useState } from 'react';
import { useApp, getActiveProject } from '../context/AppContext';
import PhaseIndicator from '../components/PhaseIndicator';
import { formatDate } from '../utils/pdcaUtils';

export default function ActPhase() {
    const { state, dispatch } = useApp();
    const project = getActiveProject(state);
    const [newStandard, setNewStandard] = useState('');
    const [newAdjustment, setNewAdjustment] = useState('');

    if (!project) {
        return (
            <div className="page-container animate-fade-in">
                <div className="empty-state glass-card">
                    <div className="empty-state-icon">🚀</div>
                    <h3>Sin proyecto activo</h3>
                    <p>Selecciona o crea un proyecto en la sección Proyectos.</p>
                </div>
            </div>
        );
    }

    const act = project.actPhase;
    const updateAct = (data) => {
        dispatch({ type: 'UPDATE_ACT', payload: { projectId: project.id, ...data } });
    };

    const toggleCompleted = () => {
        updateAct({ completed: !act.completed });
        if (!act.completed) {
            dispatch({ type: 'SET_PROJECT_STATUS', payload: { projectId: project.id, status: 'completed' } });
        }
    };

    const addStandard = () => {
        if (!newStandard.trim()) return;
        updateAct({ standardProcedures: [...(act.standardProcedures || []), { id: Date.now().toString(), text: newStandard.trim(), date: new Date().toISOString() }] });
        setNewStandard('');
    };
    const removeStandard = (idx) => updateAct({ standardProcedures: act.standardProcedures.filter((_, i) => i !== idx) });

    const addAdjustment = () => {
        if (!newAdjustment.trim()) return;
        updateAct({ adjustments: [...(act.adjustments || []), { id: Date.now().toString(), text: newAdjustment.trim(), date: new Date().toISOString() }] });
        setNewAdjustment('');
    };
    const removeAdjustment = (idx) => updateAct({ adjustments: act.adjustments.filter((_, i) => i !== idx) });

    const restartCycle = () => {
        if (!window.confirm('¿Reiniciar el ciclo PDCA con los ajustes propuestos?')) return;
        const historyEntry = {
            id: Date.now().toString(), date: new Date().toISOString(), decision: act.decision,
            adjustments: act.adjustments?.map(a => a.text) || [],
            metrics: project.doPhase?.metrics?.map(m => ({ name: m.name, lastValue: m.entries?.length > 0 ? m.entries[m.entries.length - 1].value : null, target: m.target })) || []
        };
        updateAct({ cycleHistory: [...(act.cycleHistory || []), historyEntry] });
        dispatch({ type: 'UPDATE_PLAN', payload: { projectId: project.id, completed: false, actionPlan: [], smartObjectives: [] } });
        dispatch({ type: 'UPDATE_DO', payload: { projectId: project.id, actionStatus: {}, metrics: [], observations: [], completed: false } });
        dispatch({ type: 'UPDATE_CHECK', payload: { projectId: project.id, analysis: '', objectivesMet: [], lessonsLearned: [], completed: false } });
        updateAct({ decision: '', standardProcedures: [], adjustments: [], completed: false });
        dispatch({ type: 'SET_PROJECT_STATUS', payload: { projectId: project.id, status: 'plan' } });
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header">
                <div>
                    <h1>🚀 Actuar (Act)</h1>
                    <p className="page-subtitle">{project.name}</p>
                </div>
                <div className="page-header-actions">
                    <button className={`btn ${act.completed ? 'btn-secondary' : 'btn-primary'}`} onClick={toggleCompleted}>
                        {act.completed ? '✓ Ciclo Completado' : 'Finalizar Ciclo'}
                    </button>
                </div>
            </div>

            <PhaseIndicator currentPhase="act" project={project} />

            {/* Decision */}
            <div className="glass-card" style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '16px' }}>🎯 Decisión</h3>
                <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                    Basándote en la verificación, ¿cuál es el siguiente paso?
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                        className={`btn ${act.decision === 'standardize' ? 'btn-primary' : 'btn-ghost'}`}
                        style={{ flex: 1, padding: '20px', flexDirection: 'column', gap: '8px', background: act.decision === 'standardize' ? 'var(--color-do)' : undefined }}
                        onClick={() => updateAct({ decision: 'standardize' })}
                    >
                        <span style={{ fontSize: '1.5rem' }}>✅</span>
                        <strong>Estandarizar</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Exitoso. Documentar y desplegar.</span>
                    </button>
                    <button
                        className={`btn ${act.decision === 'adjust' ? 'btn-primary' : 'btn-ghost'}`}
                        style={{ flex: 1, padding: '20px', flexDirection: 'column', gap: '8px', background: act.decision === 'adjust' ? 'var(--color-act)' : undefined }}
                        onClick={() => updateAct({ decision: 'adjust' })}
                    >
                        <span style={{ fontSize: '1.5rem' }}>🔄</span>
                        <strong>Ajustar y Reiniciar</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Insatisfactorio. Nuevo ciclo.</span>
                    </button>
                </div>
            </div>

            {/* Standardize */}
            {act.decision === 'standardize' && (
                <div className="glass-card animate-fade-in" style={{ marginBottom: '24px' }}>
                    <h3 style={{ marginBottom: '16px' }}>📄 Nuevos Estándares</h3>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        <input className="form-input" style={{ flex: 1 }} placeholder="Nuevo procedimiento estándar..." value={newStandard} onChange={e => setNewStandard(e.target.value)} onKeyDown={e => e.key === 'Enter' && addStandard()} />
                        <button className="btn btn-secondary" onClick={addStandard}>Agregar</button>
                    </div>
                    {(act.standardProcedures || []).map((std, idx) => (
                        <div key={std.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderBottom: '1px solid rgba(16,185,129,0.05)' }}>
                            <span style={{ color: 'var(--color-do)' }}>📄</span>
                            <span style={{ flex: 1, fontSize: '0.9rem' }}>{std.text}</span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{formatDate(std.date)}</span>
                            <button className="btn btn-ghost btn-sm" style={{ padding: '2px 6px' }} onClick={() => removeStandard(idx)}>✕</button>
                        </div>
                    ))}
                </div>
            )}

            {/* Adjust */}
            {act.decision === 'adjust' && (
                <div className="glass-card animate-fade-in" style={{ marginBottom: '24px' }}>
                    <h3 style={{ marginBottom: '16px' }}>🔄 Ajustes para Nuevo Ciclo</h3>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        <input className="form-input" style={{ flex: 1 }} placeholder="Ajuste o nueva hipótesis..." value={newAdjustment} onChange={e => setNewAdjustment(e.target.value)} onKeyDown={e => e.key === 'Enter' && addAdjustment()} />
                        <button className="btn btn-secondary" onClick={addAdjustment}>Agregar</button>
                    </div>
                    {(act.adjustments || []).map((adj, idx) => (
                        <div key={adj.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderBottom: '1px solid rgba(16,185,129,0.05)' }}>
                            <span style={{ color: 'var(--color-act)' }}>🔄</span>
                            <span style={{ flex: 1, fontSize: '0.9rem' }}>{adj.text}</span>
                            <button className="btn btn-ghost btn-sm" style={{ padding: '2px 6px' }} onClick={() => removeAdjustment(idx)}>✕</button>
                        </div>
                    ))}
                    {(act.adjustments || []).length > 0 && (
                        <div style={{ marginTop: '24px', textAlign: 'center' }}>
                            <button className="btn btn-primary" onClick={restartCycle} style={{ background: 'var(--color-act)' }}>🔄 Reiniciar Ciclo PDCA</button>
                        </div>
                    )}
                </div>
            )}

            {/* Cycle History */}
            {(act.cycleHistory || []).length > 0 && (
                <div className="glass-card animate-fade-in">
                    <h3 style={{ marginBottom: '16px' }}>📜 Historial de Ciclos</h3>
                    <div className="timeline">
                        {act.cycleHistory.map((entry) => (
                            <div key={entry.id} className="timeline-item">
                                <div className="timeline-date">{formatDate(entry.date)}</div>
                                <div className="timeline-content">
                                    <span className={`badge ${entry.decision === 'standardize' ? 'badge-green' : 'badge-amber'}`}>
                                        {entry.decision === 'standardize' ? 'Estandarizado' : 'Ajustado'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
