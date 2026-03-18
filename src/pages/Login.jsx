import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);
    try {
      if (isSignUp) {
        await signUp(email, password, fullName);
        setSuccessMsg('✅ Registro exitoso. Revisa tu correo para confirmar tu cuenta.');
      } else {
        await signIn(email, password);
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Error al autenticar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Brand */}
        <div className="login-brand">
          <span className="logo-hex">⬡</span>
          <div>
            <span className="brand-name">NexIA</span>
            <span className="brand-sub">PDCA</span>
          </div>
        </div>

        <h2 className="login-title">
          {isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
        </h2>
        <p className="login-subtitle">
          {isSignUp
            ? 'Registrate para comenzar a gestionar tus ciclos PDCA'
            : 'Accede a tus proyectos de mejora continua'}
        </p>

        {error && <div className="login-error">{error}</div>}
        {successMsg && <div className="login-success">{successMsg}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          {isSignUp && (
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-input"
                placeholder="Tu nombre"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-input"
              placeholder="correo@empresa.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
            disabled={loading}
          >
            {loading ? 'Procesando...' : (isSignUp ? 'Crear cuenta' : 'Iniciar sesión')}
          </button>
        </form>

        <div className="login-toggle">
          {isSignUp ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => { setIsSignUp(!isSignUp); setError(''); setSuccessMsg(''); }}
            style={{ marginLeft: '8px' }}
          >
            {isSignUp ? 'Iniciar sesión' : 'Registrarte'}
          </button>
        </div>
      </div>
    </div>
  );
}
