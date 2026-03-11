import { useApp, getActiveProject } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { calculateProjectProgress, PHASE_CONFIG } from '../utils/pdcaUtils';

export default function Home() {
    const { state } = useApp();
    const { projects } = state;

    const activeCount = projects.filter(p => p.status !== 'completed').length;
    const completedCount = projects.filter(p => p.actPhase?.completed).length;
    const avgProgress = projects.length > 0
        ? projects.reduce((sum, p) => sum + calculateProjectProgress(p), 0) / projects.length
        : 0;

    const MODULES = [
        { path: '/projects', icon: '📁', title: 'Proyectos PDCA', desc: 'Gestiona tus ciclos de mejora continua' },
        { path: '/plan', icon: '📋', title: 'Planificar (Plan)', desc: 'Define problemas, analiza causas raíz y establece objetivos SMART' },
        { path: '/do', icon: '⚡', title: 'Hacer (Do)', desc: 'Ejecuta pruebas piloto y recopila datos' },
        { path: '/check', icon: '🔍', title: 'Verificar (Check)', desc: 'Analiza resultados y compara con objetivos' },
        { path: '/act', icon: '🚀', title: 'Actuar (Act)', desc: 'Estandariza mejoras o ajusta el enfoque' },
        { path: '/dashboards', icon: '📈', title: 'Dashboards', desc: 'Visualiza métricas y tendencias globales' },
    ];

    return (
        <div className="page-container animate-fade-in">
            {/* Hero */}
            <section className="home-hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-accent">⬡</span> NexIA PDCA
                    </h1>
                    <p className="hero-subtitle">
                        Sistema de Mejora Continua — Ciclo Plan-Do-Check-Act
                    </p>
                    <p className="hero-desc">
                        Gestione sus proyectos de mejora continua con la metodología PDCA de Deming.
                        Identifique problemas, implemente soluciones, verifique resultados y estandarice las mejoras exitosas.
                    </p>
                    <div style={{ marginTop: '24px' }}>
                        <div className="pdca-cycle">
                            <div className="pdca-quadrant q-plan">PLAN</div>
                            <div className="pdca-quadrant q-do">DO</div>
                            <div className="pdca-quadrant q-check">CHECK</div>
                            <div className="pdca-quadrant q-act">ACT</div>
                        </div>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="glass-card stat-card">
                        <span className="stat-label">Proyectos Activos</span>
                        <span className="stat-value">{activeCount}</span>
                        <span className="stat-sub">Ciclos en progreso</span>
                    </div>
                    <div className="glass-card stat-card">
                        <span className="stat-label">Completados</span>
                        <span className="stat-value">{completedCount}</span>
                        <span className="stat-sub">Ciclos finalizados</span>
                    </div>
                    <div className="glass-card stat-card">
                        <span className="stat-label">Proyectos Totales</span>
                        <span className="stat-value">{projects.length}</span>
                        <span className="stat-sub">En el sistema</span>
                    </div>
                    <div className="glass-card stat-card">
                        <span className="stat-label">Progreso Promedio</span>
                        <span className="stat-value">{Math.round(avgProgress)}<span className="stat-unit">%</span></span>
                        <span className="stat-sub">Avance general</span>
                    </div>
                </div>
            </section>

            {/* Module Cards */}
            <section className="home-modules">
                <h2>Módulos</h2>
                <div className="modules-grid">
                    {MODULES.map((m, i) => (
                        <Link key={m.path} to={m.path} className="module-card glass-card" style={{ animationDelay: `${i * 80}ms` }}>
                            <span className="module-icon">{m.icon}</span>
                            <div className="module-info">
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                            </div>
                            <span className="module-arrow">→</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Active Projects Quick View */}
            {projects.length > 0 && (
                <section className="section-block">
                    <h2 style={{ marginBottom: '16px' }}>Proyectos Recientes</h2>
                    <div className="grid-2">
                        {projects.slice(0, 4).map(project => {
                            const progress = calculateProjectProgress(project);
                            const phaseCfg = PHASE_CONFIG[project.status] || PHASE_CONFIG.plan;
                            return (
                                <Link key={project.id} to="/projects" className="glass-card" style={{ textDecoration: 'none' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                        <h4 style={{ fontSize: '0.95rem' }}>{project.name}</h4>
                                        <span className={`badge ${phaseCfg.badge}`}>{phaseCfg.label}</span>
                                    </div>
                                    <p style={{ fontSize: '0.8rem', marginBottom: '12px' }}>{project.description}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>
                                        {Math.round(progress)}% completado
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
}
