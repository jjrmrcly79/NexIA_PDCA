import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PlanPhase from './pages/PlanPhase';
import DoPhase from './pages/DoPhase';
import CheckPhase from './pages/CheckPhase';
import ActPhase from './pages/ActPhase';
import Dashboards from './pages/Dashboards';
import Manual from './pages/Manual';
import Login from './pages/Login';

function ProtectedRoute({ children }) {
  const { session, loading } = useAuth();
  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--color-bg-primary)' }}>
        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⬡</div>
          <p>Cargando NexIA PDCA…</p>
        </div>
      </div>
    );
  }
  if (!session) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const { session, loading } = useAuth();

  // Show login without sidebar
  if (!loading && !session) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
          <Route path="/plan" element={<ProtectedRoute><PlanPhase /></ProtectedRoute>} />
          <Route path="/do" element={<ProtectedRoute><DoPhase /></ProtectedRoute>} />
          <Route path="/check" element={<ProtectedRoute><CheckPhase /></ProtectedRoute>} />
          <Route path="/act" element={<ProtectedRoute><ActPhase /></ProtectedRoute>} />
          <Route path="/dashboards" element={<ProtectedRoute><Dashboards /></ProtectedRoute>} />
          <Route path="/manual" element={<ProtectedRoute><Manual /></ProtectedRoute>} />
          <Route path="/login" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
