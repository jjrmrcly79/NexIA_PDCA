export default function About() {
  return (
    <div className="page-container animate-fade-in">
      <div className="about-wrapper">

        {/* App identity */}
        <div className="about-hero glass-card">
          <div className="about-logo">🔄</div>
          <h1 className="about-app-name">NexIA PDCA</h1>
          <span className="badge badge-accent about-badge">Beta v1.1.0</span>
          <p className="about-description">
            Plataforma profesional de mejora continua basada en el ciclo{' '}
            <strong>Plan → Do → Check → Act</strong>. Gestiona proyectos de
            calidad, analiza causas raíz con diagramas Ishikawa y los 5 Porqués,
            define objetivos SMART y da seguimiento a métricas en tiempo real,
            todo en un solo lugar.
          </p>
        </div>

        {/* Developer */}
        <div className="about-section glass-card">
          <p className="about-section-label">Desarrollado por</p>
          <p className="about-company-name">NexIA Soluciones</p>
          <a
            href="https://www.nexiasoluciones.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="about-website-link"
          >
            www.nexiasoluciones.com.mx ↗
          </a>
        </div>

        {/* Contact */}
        <div className="about-section glass-card">
          <p className="about-section-label">¿Te interesa esta herramienta?</p>
          <p className="about-contact-desc">
            Escríbenos y con gusto te asesoramos sobre cómo NexIA puede
            impulsar la mejora continua en tu organización.
          </p>
          <a
            href="mailto:soporte@nexiasoluciones.com.mx?subject=Información sobre NexIA PDCA"
            className="btn btn-primary about-contact-btn"
          >
            ✉️ Contactar a NexIA
          </a>
        </div>

        {/* Footer */}
        <p className="about-footer">
          © {new Date().getFullYear()} NexIA Soluciones · Todos los derechos reservados
        </p>

      </div>
    </div>
  );
}
