import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { calculateProjectProgress, PHASE_CONFIG, formatDate } from '../utils/pdcaUtils';

const PHASE_ROUTES = { plan: '/plan', do: '/do', check: '/check', act: '/act' };

export default function Projects() {
    const { state, dispatch } = useApp();
    const navigate = useNavigate();
    const { projects, activeProjectId } = state;
    const [showModal, setShowModal] = useState(false);
    const [newName, setNewName] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const handleCreate = () => {
        if (!newName.trim()) return;
        dispatch({ type: 'ADD_PROJECT', payload: { name: newName.trim(), description: newDesc.trim() } });
        setNewName('');
        setNewDesc('');
        setShowModal(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Eliminar este proyecto PDCA?')) {
            dispatch({ type: 'DELETE_PROJECT', payload: id });
        }
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header">
                <div>
                    <h1>📁 Proyectos PDCA</h1>
                    <p className="page-subtitle">Gestiona tus ciclos de mejora continua</p>
                </div>
                <div className="page-header-actions">
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Nuevo Proyecto</button>
                </div>
            </div>

            {projects.length === 0 ? (
                <div className="empty-state glass-card">
                    <div className="empty-state-icon">📁</div>
                    <h3>Sin proyectos</h3>
                    <p>Crea tu primer ciclo PDCA para comenzar la mejora continua.</p>
                    <button className="btn btn-primary" style={{ marginTop: '16px' }} onClick={() => setShowModal(true)}>
                        Crear Proyecto
                    </button>
                </div>
            ) : (
                <div className="grid-2">
                    {projects.map(project => {
                        const progress = calculateProjectProgress(project);
                        const phaseCfg = PHASE_CONFIG[project.status] || PHASE_CONFIG.plan;
                        const isActive = project.id === activeProjectId;
                        return (
                            <div
                                key={project.id}
                                className="glass-card"
                                style={{
                                    border: isActive ? '1px solid var(--color-accent)' : undefined,
                                    cursor: 'pointer'
                                }}
                                onClick={() => {
                                    dispatch({ type: 'SET_ACTIVE_PROJECT', payload: project.id });
                                    navigate(PHASE_ROUTES[project.status] || '/plan');
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                            <h3 style={{ fontSize: '1.05rem' }}>{project.name}</h3>
                                            {isActive && <span className="badge badge-accent">ACTIVO</span>}
                                        </div>
                                        <p style={{ fontSize: '0.85rem' }}>{project.description}</p>
                                    </div>
                                    <span className={`badge ${phaseCfg.badge}`} style={{ marginLeft: '12px', flexShrink: 0 }}>
                                        {phaseCfg.icon} {phaseCfg.label}
                                    </span>
                                </div>

                                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                                    <span>📅 {formatDate(project.createdAt)}</span>
                                    <span>📊 {Math.round(progress)}% completado</span>
                                </div>

                                <div className="progress-bar" style={{ marginBottom: '12px' }}>
                                    <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                                </div>

                                {/* Phase indicators mini */}
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                                    {['plan', 'do', 'check', 'act'].map(phase => {
                                        const pd = phase === 'plan' ? project.plan
                                            : phase === 'do' ? project.doPhase
                                            : phase === 'check' ? project.checkPhase
                                            : project.actPhase;
                                        const pc = PHASE_CONFIG[phase];
                                        return (
                                            <div key={phase} style={{
                                                display: 'flex', alignItems: 'center', gap: '4px',
                                                padding: '4px 8px', borderRadius: '6px',
                                                background: pd?.completed ? pc.dimColor : 'var(--color-bg-tertiary)',
                                                fontSize: '0.7rem', fontWeight: 600,
                                                color: pd?.completed ? pc.color : 'var(--color-text-muted)'
                                            }}>
                                                {pd?.completed ? '✓' : '○'} {pc.label}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                    {isActive ? (
                                        <button className="btn btn-primary btn-sm" onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(PHASE_ROUTES[project.status] || '/plan');
                                        }}>
                                            Ir a {phaseCfg.label} →
                                        </button>
                                    ) : (
                                        <button className="btn btn-secondary btn-sm" onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch({ type: 'SET_ACTIVE_PROJECT', payload: project.id });
                                            navigate(PHASE_ROUTES[project.status] || '/plan');
                                        }}>
                                            Activar y abrir
                                        </button>
                                    )}
                                    <button className="btn btn-danger btn-sm" onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(project.id);
                                    }}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Create Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Nuevo Proyecto PDCA</h3>
                            <button className="btn btn-ghost btn-sm" onClick={() => setShowModal(false)}>✕</button>
                        </div>
                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label className="form-label">Nombre del Proyecto</label>
                            <input
                                className="form-input"
                                placeholder="Ej: Reducción de defectos en Línea 3"
                                value={newName}
                                onChange={e => setNewName(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Descripción</label>
                            <textarea
                                className="form-textarea"
                                placeholder="Describe el objetivo general de este ciclo PDCA..."
                                value={newDesc}
                                onChange={e => setNewDesc(e.target.value)}
                            />
                        </div>
                        <div className="modal-actions">
                            <button className="btn btn-ghost" onClick={() => setShowModal(false)}>Cancelar</button>
                            <button className="btn btn-primary" onClick={handleCreate} disabled={!newName.trim()}>
                                Crear Proyecto
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
