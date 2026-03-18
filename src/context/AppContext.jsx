import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import * as db from '../lib/db';

const AppContext = createContext();

const initialState = {
  projects: [],
  activeProjectId: null,
  settings: { companyName: 'NexIA Manufacturing' },
  loading: true,
};

function appReducer(state, action) {
  switch (action.type) {
    // Projects (state is already updated optimistically after Supabase calls)
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload, loading: false };

    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
        activeProjectId: action.payload.id,
      };

    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(p => p.id !== action.payload),
        activeProjectId: state.activeProjectId === action.payload
          ? (state.projects.length > 1 ? state.projects.find(p => p.id !== action.payload)?.id ?? null : null)
          : state.activeProjectId,
      };

    case 'SET_ACTIVE_PROJECT':
      return { ...state, activeProjectId: action.payload };

    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === action.payload.id ? { ...p, ...action.payload } : p
        ),
      };

    case 'UPDATE_PLAN': {
      const { projectId, ...planData } = action.payload;
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === projectId ? { ...p, plan: { ...p.plan, ...planData } } : p
        ),
      };
    }

    case 'UPDATE_DO': {
      const { projectId, ...doData } = action.payload;
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === projectId ? { ...p, doPhase: { ...p.doPhase, ...doData } } : p
        ),
      };
    }

    case 'UPDATE_CHECK': {
      const { projectId, ...checkData } = action.payload;
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === projectId ? { ...p, checkPhase: { ...p.checkPhase, ...checkData } } : p
        ),
      };
    }

    case 'UPDATE_ACT': {
      const { projectId, ...actData } = action.payload;
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === projectId ? { ...p, actPhase: { ...p.actPhase, ...actData } } : p
        ),
      };
    }

    case 'SET_PROJECT_STATUS': {
      const { projectId, status } = action.payload;
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === projectId ? { ...p, status } : p
        ),
      };
    }

    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };

    case 'RESET_ALL':
      return { ...initialState, loading: false };

    default:
      return state;
  }
}

// -------------------------------------------------------
// Supabase-aware dispatch wrapper: debounce project saves
// -------------------------------------------------------
let saveTimer = null;

function scheduleSave(projectId, getProject) {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try {
      const project = getProject(projectId);
      if (!project) return;
      const row = db.projectToDbRow(project);
      await db.updateProject(projectId, row);
    } catch (err) {
      console.error('Auto-save error:', err);
    }
  }, 800); // 800 ms debounce
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load projects from Supabase on mount
  useEffect(() => {
    let mounted = true;
    db.getProjects()
      .then(rows => {
        if (!mounted) return;
        const projects = rows.map(db.dbRowToProject);
        dispatch({ type: 'SET_PROJECTS', payload: projects });
        if (projects.length > 0) {
          dispatch({ type: 'SET_ACTIVE_PROJECT', payload: projects[0].id });
        }
      })
      .catch(err => {
        console.error('Error loading projects:', err);
        dispatch({ type: 'SET_LOADING', payload: false });
      });
    return () => { mounted = false; };
  }, []);

  // Project getter ref for debounced save
  const getProject = useCallback(
    (projectId) => state.projects.find(p => p.id === projectId) || null,
    [state.projects]
  );

  // Enhanced dispatch: intercept mutations that need Supabase sync
  const supabaseDispatch = useCallback(async (action) => {
    switch (action.type) {
      case 'ADD_PROJECT': {
        try {
          const newProject = await db.createProject(action.payload);
          dispatch({ type: 'ADD_PROJECT', payload: newProject });
        } catch (err) {
          console.error('Error creating project:', err);
        }
        break;
      }

      case 'DELETE_PROJECT': {
        try {
          await db.deleteProject(action.payload);
          dispatch({ type: 'DELETE_PROJECT', payload: action.payload });
        } catch (err) {
          console.error('Error deleting project:', err);
        }
        break;
      }

      case 'UPDATE_PLAN':
      case 'UPDATE_DO':
      case 'UPDATE_CHECK':
      case 'UPDATE_ACT':
      case 'SET_PROJECT_STATUS': {
        // Apply locally first (optimistic update)
        dispatch(action);
        // Then debounce-save entire project to Supabase
        const projectId = action.payload.projectId || action.payload.projectId;
        if (projectId) {
          setTimeout(() => scheduleSave(projectId, (id) =>
            state.projects.find(p => p.id === id)
          ), 0);
        }
        break;
      }

      default:
        dispatch(action);
    }
  }, [state.projects]);

  return (
    <AppContext.Provider value={{ state, dispatch: supabaseDispatch }}>
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
