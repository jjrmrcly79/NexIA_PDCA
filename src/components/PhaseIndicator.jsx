import { useNavigate } from 'react-router-dom';
import { PHASE_CONFIG, PHASES } from '../utils/pdcaUtils';

const PHASE_ROUTES = { plan: '/plan', do: '/do', check: '/check', act: '/act' };

export default function PhaseIndicator({ currentPhase, project }) {
    const navigate = useNavigate();

    return (
        <div className="phase-stepper">
            {PHASES.map((phase, i) => {
                const cfg = PHASE_CONFIG[phase];
                const phaseData = phase === 'plan' ? project?.plan
                    : phase === 'do' ? project?.doPhase
                    : phase === 'check' ? project?.checkPhase
                    : project?.actPhase;
                const isCompleted = phaseData?.completed;
                const isActive = currentPhase === phase;
                return (
                    <div
                        key={phase}
                        className={`phase-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                        style={{ color: cfg.color, cursor: 'pointer' }}
                        onClick={() => navigate(PHASE_ROUTES[phase])}
                        title={`Ir a ${cfg.label}`}
                    >
                        <div className="phase-step-circle" style={{ transition: 'transform 0.15s ease', }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            {isCompleted ? '✓' : i + 1}
                        </div>
                        <span className="phase-step-label">{cfg.label}</span>
                    </div>
                );
            })}
        </div>
    );
}
