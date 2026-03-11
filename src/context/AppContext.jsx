import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();
const STORAGE_KEY = 'nexia-pdca-data';
const DATA_VERSION = 2; // Bump to force reload of demo data

const DEMO_PROJECTS = [
    {
        id: '1',
        name: 'Reducción de Defectos en Línea 3',
        description: 'Disminuir la tasa de defectos del 4.2% al 1.5% mediante análisis de causa raíz y controles estadísticos.',
        createdAt: '2026-02-15T10:00:00Z',
        status: 'check',
        plan: {
            problem: 'La línea de producción 3 presenta una tasa de defectos del 4.2%, generando reprocesos y costos adicionales estimados en $15,000/mes.',
            whys: [
                'Las piezas salen con dimensiones fuera de tolerancia',
                'El herramental de la estación 5 está desgastado',
                'No existe un programa de mantenimiento preventivo para herramentales',
                'El departamento de mantenimiento no tiene visibilidad del desgaste acumulado',
                'No se ha implementado un sistema de monitoreo de vida útil del herramental'
            ],
            ishikawa: {
                manoDeObra: ['Falta de capacitación en ajustes', 'Rotación de personal alta'],
                maquinaria: ['Herramental desgastado', 'Calibración no regular'],
                metodo: ['Procedimiento desactualizado', 'Sin checklist de arranque'],
                material: ['Variación en dureza del proveedor B'],
                medioAmbiente: ['Temperatura variable en turno nocturno'],
                medicion: ['Instrumento de medición sin certificar']
            },
            smartObjectives: [
                { specific: 'Reducir defectos de dimensión en estación 5', measurable: 'De 4.2% a 1.5%', achievable: 'Mediante cambio de herramental y programa preventivo', relevant: 'Impacta directamente en costos de calidad', timeBound: '3 meses', completed: false }
            ],
            actionPlan: [
                { id: 'a1', task: 'Cambiar herramental de estación 5', responsible: 'Ing. Martínez', resources: 'Herramental nuevo ($2,500)', deadline: '2026-03-01', completed: true },
                { id: 'a2', task: 'Implementar checklist de arranque', responsible: 'Sup. López', resources: 'Formatos impresos', deadline: '2026-03-05', completed: true },
                { id: 'a3', task: 'Crear programa de mantenimiento preventivo', responsible: 'Mtto. García', resources: 'Software CMMS', deadline: '2026-03-15', completed: true },
                { id: 'a4', task: 'Capacitar operadores en ajustes finos', responsible: 'Ing. Martínez', resources: '8 horas de training', deadline: '2026-03-10', completed: true }
            ],
            completed: true
        },
        doPhase: {
            actionStatus: {
                'a1': { status: 'completed', notes: 'Herramental instalado sin contratiempos' },
                'a2': { status: 'completed', notes: 'Checklist implementado, operadores capacitados' },
                'a3': { status: 'completed', notes: 'Programa configurado en CMMS' },
                'a4': { status: 'completed', notes: 'Capacitación completada con 12 operadores' }
            },
            metrics: [
                { id: 'm1', name: 'Tasa de Defectos', unit: '%', baseline: 4.2, target: 1.5, entries: [
                    { value: 4.2, date: '2026-02-15' },
                    { value: 3.8, date: '2026-02-22' },
                    { value: 2.9, date: '2026-03-01' },
                    { value: 2.1, date: '2026-03-08' }
                ]},
                { id: 'm2', name: 'Costo de Reproceso', unit: '$/mes', baseline: 15000, target: 5000, entries: [
                    { value: 15000, date: '2026-02-15' },
                    { value: 12500, date: '2026-02-22' },
                    { value: 8900, date: '2026-03-01' },
                    { value: 6200, date: '2026-03-08' }
                ]}
            ],
            observations: [
                { id: 'o1', date: '2026-02-20', text: 'Los operadores del turno nocturno requirieron refuerzo adicional en la capacitación' },
                { id: 'o2', date: '2026-03-02', text: 'Se detectó que el proveedor B entregó material con dureza fuera de especificación. Se notificó a compras.' },
                { id: 'o3', date: '2026-03-06', text: 'La reducción de defectos fue más rápida de lo esperado después de implementar el checklist de arranque.' }
            ],
            completed: true
        },
        checkPhase: {
            analysis: 'La tasa de defectos bajó de 4.2% a 2.1% en 3 semanas. Si bien no se ha alcanzado la meta del 1.5%, la tendencia es positiva y consistente.',
            objectivesMet: [
                { objective: 'Reducir defectos de dimensión', met: false, notes: 'Se alcanzó 2.1%, meta era 1.5%. Se requiere una iteración más.' }
            ],
            lessonsLearned: [
                'El checklist de arranque tuvo un impacto inmediato mayor al esperado',
                'La variación de material del proveedor B es un factor importante que no se consideró inicialmente',
                'La capacitación en turno nocturno requiere metodología diferente por el perfil del personal'
            ],
            completed: false
        },
        actPhase: {
            decision: '',
            standardProcedures: [],
            adjustments: [],
            cycleHistory: [],
            completed: false
        }
    },
    {
        id: '2',
        name: 'Optimización de Tiempo de Setup',
        description: 'Reducir el tiempo de cambio de molde de 45 min a 15 min usando técnicas SMED.',
        createdAt: '2026-03-01T08:00:00Z',
        status: 'do',
        plan: {
            problem: 'El tiempo de cambio de molde promedio es de 45 minutos, lo que limita la flexibilidad de producción y genera tiempos muertos significativos.',
            whys: [
                'El cambio de molde toma demasiado tiempo',
                'Muchas actividades se realizan con la máquina detenida',
                'No se han separado las actividades internas de las externas',
                'Nunca se ha aplicado análisis SMED al proceso',
                'La empresa no tenía personal capacitado en SMED'
            ],
            ishikawa: {
                manoDeObra: ['Personal no capacitado en SMED'],
                maquinaria: ['Falta de conexiones rápidas', 'Prensas manuales lentas'],
                metodo: ['Sin separación interna/externa', 'Sin procedimiento estándar'],
                material: ['Moldes sin pre-calentamiento'],
                medioAmbiente: ['Herramientas desorganizadas'],
                medicion: ['No se mide el tiempo de setup']
            },
            smartObjectives: [
                { specific: 'Reducir tiempo de cambio de molde', measurable: 'De 45 min a 15 min', achievable: 'Aplicando SMED en 3 fases', relevant: 'Aumentará capacidad efectiva un 12%', timeBound: '2 meses', completed: false }
            ],
            actionPlan: [
                { id: 'b1', task: 'Filmar y cronometrar proceso actual', responsible: 'Ing. Pérez', resources: 'Cámara, cronómetro', deadline: '2026-03-05', completed: true },
                { id: 'b2', task: 'Clasificar actividades internas/externas', responsible: 'Ing. Pérez', resources: 'Formato SMED', deadline: '2026-03-10', completed: true },
                { id: 'b3', task: 'Externalizar actividades posibles', responsible: 'Equipo SMED', resources: 'Capacitación', deadline: '2026-03-20', completed: false },
                { id: 'b4', task: 'Instalar conexiones rápidas', responsible: 'Mtto.', resources: '$1,800 en conectores', deadline: '2026-03-25', completed: false }
            ],
            completed: true
        },
        doPhase: {
            actionStatus: {
                'b1': { status: 'completed', notes: 'Video de 45 min grabado, se identificaron 28 actividades' },
                'b2': { status: 'completed', notes: '18 internas, 10 externas identificadas' },
                'b3': { status: 'in-progress', notes: 'Se han externalizado 6 de 10 actividades' },
                'b4': { status: 'pending', notes: '' }
            },
            metrics: [
                { id: 'm3', name: 'Tiempo de Setup', unit: 'min', baseline: 45, target: 15, entries: [
                    { value: 45, date: '2026-03-01' },
                    { value: 38, date: '2026-03-10' }
                ]}
            ],
            observations: [
                { id: 'o4', date: '2026-03-08', text: 'El equipo mostró resistencia inicial al cambio de método. Se realizó sesión de sensibilización.' }
            ],
            completed: false
        },
        checkPhase: {
            analysis: '',
            objectivesMet: [],
            lessonsLearned: [],
            completed: false
        },
        actPhase: {
            decision: '',
            standardProcedures: [],
            adjustments: [],
            cycleHistory: [],
            completed: false
        }
    }
];

const initialState = {
    projects: DEMO_PROJECTS,
    activeProjectId: '1',
    settings: {
        companyName: 'NexIA Manufacturing'
    }
};

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            // If version mismatch, clear stale data and reload fresh demo
            if (parsed._dataVersion !== DATA_VERSION) {
                localStorage.removeItem(STORAGE_KEY);
                return { ...initialState, _dataVersion: DATA_VERSION };
            }
            return { ...initialState, ...parsed };
        }
    } catch (e) {
        console.warn('Failed to load state:', e);
        localStorage.removeItem(STORAGE_KEY);
    }
    return { ...initialState, _dataVersion: DATA_VERSION };
}

function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, _dataVersion: DATA_VERSION }));
    } catch (e) {
        console.warn('Failed to save state:', e);
    }
}

function appReducer(state, action) {
    switch (action.type) {
        // Projects
        case 'ADD_PROJECT': {
            const id = Date.now().toString();
            const newProject = {
                id,
                ...action.payload,
                createdAt: new Date().toISOString(),
                status: 'plan',
                plan: { problem: '', whys: ['', '', '', '', ''], ishikawa: { manoDeObra: [], maquinaria: [], metodo: [], material: [], medioAmbiente: [], medicion: [] }, smartObjectives: [], actionPlan: [], completed: false },
                doPhase: { actionStatus: {}, metrics: [], observations: [], completed: false },
                checkPhase: { analysis: '', objectivesMet: [], lessonsLearned: [], completed: false },
                actPhase: { decision: '', standardProcedures: [], adjustments: [], cycleHistory: [], completed: false }
            };
            return { ...state, projects: [...state.projects, newProject], activeProjectId: id };
        }

        case 'DELETE_PROJECT':
            return {
                ...state,
                projects: state.projects.filter(p => p.id !== action.payload),
                activeProjectId: state.activeProjectId === action.payload
                    ? (state.projects.length > 1 ? state.projects.find(p => p.id !== action.payload)?.id : null)
                    : state.activeProjectId
            };

        case 'SET_ACTIVE_PROJECT':
            return { ...state, activeProjectId: action.payload };

        case 'UPDATE_PROJECT':
            return {
                ...state,
                projects: state.projects.map(p => p.id === action.payload.id ? { ...p, ...action.payload } : p)
            };

        // Plan Phase
        case 'UPDATE_PLAN': {
            const { projectId, ...planData } = action.payload;
            return {
                ...state,
                projects: state.projects.map(p => p.id === projectId ? { ...p, plan: { ...p.plan, ...planData } } : p)
            };
        }

        // Do Phase
        case 'UPDATE_DO': {
            const { projectId, ...doData } = action.payload;
            return {
                ...state,
                projects: state.projects.map(p => p.id === projectId ? { ...p, doPhase: { ...p.doPhase, ...doData } } : p)
            };
        }

        // Check Phase
        case 'UPDATE_CHECK': {
            const { projectId, ...checkData } = action.payload;
            return {
                ...state,
                projects: state.projects.map(p => p.id === projectId ? { ...p, checkPhase: { ...p.checkPhase, ...checkData } } : p)
            };
        }

        // Act Phase
        case 'UPDATE_ACT': {
            const { projectId, ...actData } = action.payload;
            return {
                ...state,
                projects: state.projects.map(p => p.id === projectId ? { ...p, actPhase: { ...p.actPhase, ...actData } } : p)
            };
        }

        // Update project status
        case 'SET_PROJECT_STATUS': {
            const { projectId, status } = action.payload;
            return {
                ...state,
                projects: state.projects.map(p => p.id === projectId ? { ...p, status } : p)
            };
        }

        case 'UPDATE_SETTINGS':
            return { ...state, settings: { ...state.settings, ...action.payload } };

        case 'RESET_ALL':
            return initialState;

        default:
            return state;
    }
}

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, null, loadState);

    useEffect(() => {
        saveState(state);
    }, [state]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) throw new Error('useApp must be used within AppProvider');
    return context;
}

export function getActiveProject(state) {
    return state.projects.find(p => p.id === state.activeProjectId) || null;
}
