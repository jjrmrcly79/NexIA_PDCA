import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NAV_ITEMS = [
  { path: '/', label: 'Inicio', icon: '🏠' },
  { path: '/projects', label: 'Proyectos', icon: '📁' },
  { path: '/plan', label: 'Planificar', icon: '📋' },
  { path: '/do', label: 'Hacer', icon: '⚡' },
  { path: '/check', label: 'Verificar', icon: '🔍' },
  { path: '/act', label: 'Actuar', icon: '🚀' },
  { path: '/dashboards', label: 'Dashboards', icon: '📈' },
  { path: '/manual', label: 'Manual', icon: '📘' },
];

export default function Sidebar() {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try { await signOut(); } catch (err) { console.error(err); }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <span className="logo-hex">⬡</span>
        </div>
        <div className="sidebar-brand-text">
          <span className="brand-name">NexIA</span>
          <span className="brand-sub">PDCA</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
            end={item.path === '/'}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {location.pathname === item.path && (
              <span className="nav-indicator" />
            )}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        {user && (
          <div className="sidebar-user">
            <div className="sidebar-user-avatar">
              {(user.email?.[0] || '?').toUpperCase()}
            </div>
            <div className="sidebar-user-info">
              <span className="sidebar-user-email" title={user.email}>
                {user.email}
              </span>
              <button
                className="sidebar-logout-btn"
                onClick={handleSignOut}
                title="Cerrar sesión"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        )}
        <div className="sidebar-version">v1.1.0</div>
        <div className="sidebar-tagline">Mejora Continua</div>
      </div>
    </aside>
  );
}
