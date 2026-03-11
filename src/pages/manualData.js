// Manual sections data — each section has an id, icon, title, and content (JSX-ready HTML string)
// This file separates data from presentation for the Manual page

export const MANUAL_SECTIONS = [
  {
    id: 'intro',
    num: 1,
    icon: '🎓',
    title: 'Introducción a la Metodología PDCA',
    keywords: 'pdca deming ciclo mejora continua kaizen lean six sigma calidad',
    content: `
      <h3>¿Qué es el Ciclo PDCA?</h3>
      <p>El Ciclo PDCA, también conocido como <strong>Ciclo de Deming</strong> o <strong>Ciclo de Mejora Continua</strong>, es un marco de gestión iterativo compuesto por cuatro fases que se repiten cíclicamente para lograr mejoras incrementales y sostenibles en procesos, productos y servicios.</p>
      <p>Fue popularizado por el Dr. <strong>W. Edwards Deming</strong> en la década de 1950. Hoy en día es un pilar fundamental en sistemas de gestión de calidad como <strong>ISO 9001</strong>, <strong>Lean Manufacturing</strong>, <strong>Six Sigma</strong> y <strong>Kaizen</strong>.</p>

      <h3>Las Cuatro Fases</h3>
      <table class="manual-table"><thead><tr><th>Fase</th><th>Nombre</th><th>Propósito Principal</th><th>Preguntas Clave</th></tr></thead><tbody>
        <tr><td><strong>Plan</strong></td><td>Planificar</td><td>Identificar el problema, analizar las causas raíz y definir un plan de acción con objetivos claros</td><td>¿Cuál es el problema? ¿Por qué ocurre? ¿Qué queremos lograr?</td></tr>
        <tr><td><strong>Do</strong></td><td>Hacer</td><td>Implementar el plan de acción a pequeña escala (prueba piloto) y recopilar datos cuantitativos</td><td>¿Se ejecutó según lo planeado? ¿Qué datos recopilamos?</td></tr>
        <tr><td><strong>Check</strong></td><td>Verificar</td><td>Comparar los resultados obtenidos contra los objetivos establecidos, identificar desviaciones</td><td>¿Se alcanzaron las metas? ¿Qué funcionó? ¿Qué no?</td></tr>
        <tr><td><strong>Act</strong></td><td>Actuar</td><td>Si los resultados son satisfactorios, estandarizar la mejora. Si no, ajustar y reiniciar</td><td>¿Estandarizamos o ajustamos? ¿Cómo replicar el éxito?</td></tr>
      </tbody></table>

      <h3>¿Por qué usar PDCA?</h3>
      <table class="manual-table"><thead><tr><th>Beneficio</th><th>Descripción</th></tr></thead><tbody>
        <tr><td><strong>Estructura</strong></td><td>Proporciona un marco claro y repetible para abordar cualquier tipo de problema o mejora</td></tr>
        <tr><td><strong>Base en datos</strong></td><td>Las decisiones se toman con evidencia cuantitativa, no con suposiciones</td></tr>
        <tr><td><strong>Aprendizaje continuo</strong></td><td>Cada ciclo genera lecciones documentadas que alimentan el siguiente</td></tr>
        <tr><td><strong>Escalabilidad</strong></td><td>Permite probar cambios a pequeña escala antes de implementarlos completamente</td></tr>
        <tr><td><strong>Trazabilidad</strong></td><td>Toda la información queda documentada: problema, causas, acciones, métricas y decisiones</td></tr>
      </tbody></table>

      <h3>¿Para quién es NexIA PDCA?</h3>
      <table class="manual-table"><thead><tr><th>Perfil de Usuario</th><th>Uso Principal</th></tr></thead><tbody>
        <tr><td><strong>Ingenieros de calidad</strong></td><td>Reducción de defectos, mejora de procesos de manufactura</td></tr>
        <tr><td><strong>Líderes de mejora continua</strong></td><td>Gestión de portafolio de proyectos Kaizen</td></tr>
        <tr><td><strong>Gerentes de operaciones</strong></td><td>Optimización de KPIs operativos</td></tr>
        <tr><td><strong>Equipos de producción</strong></td><td>Documentación de pruebas piloto y resultados</td></tr>
        <tr><td><strong>Consultores Lean / Six Sigma</strong></td><td>Estandarización de metodología con clientes</td></tr>
      </tbody></table>
    `
  },
  {
    id: 'quickstart',
    num: 2,
    icon: '🚀',
    title: 'Inicio Rápido',
    keywords: 'inicio instalación requisitos npm ejecutar tutorial primeros pasos',
    content: `
      <h3>Requisitos del Sistema</h3>
      <table class="manual-table"><thead><tr><th>Requisito</th><th>Especificación</th></tr></thead><tbody>
        <tr><td><strong>Runtime</strong></td><td>Node.js versión 18 o superior</td></tr>
        <tr><td><strong>Navegador</strong></td><td>Chrome, Firefox, Edge o Safari (versiones recientes)</td></tr>
        <tr><td><strong>Sistema operativo</strong></td><td>Windows, macOS o Linux</td></tr>
        <tr><td><strong>Resolución recomendada</strong></td><td>1280 × 720 px o superior</td></tr>
      </tbody></table>

      <h3>Instalación y Ejecución</h3>
      <table class="manual-table"><thead><tr><th>Paso</th><th>Comando</th><th>Descripción</th></tr></thead><tbody>
        <tr><td>1</td><td><code>npm install</code></td><td>Descarga e instala todas las dependencias del proyecto</td></tr>
        <tr><td>2</td><td><code>npm run dev</code></td><td>Inicia el servidor de desarrollo en modo local</td></tr>
      </tbody></table>
      <p>Una vez iniciado, la aplicación estará disponible en <strong>http://localhost:5173/</strong></p>

      <h3>Primeros Pasos (Tutorial Rápido)</h3>
      <table class="manual-table"><thead><tr><th>Paso</th><th>Acción</th><th>Resultado Esperado</th></tr></thead><tbody>
        <tr><td>1</td><td>Abre la aplicación en tu navegador</td><td>Verás la pantalla de Inicio con estadísticas y módulos</td></tr>
        <tr><td>2</td><td>Haz clic en <strong>Proyectos</strong> en la barra lateral</td><td>Se muestra la lista de proyectos (incluye 2 demos)</td></tr>
        <tr><td>3</td><td>Haz clic en <strong>"+ Nuevo Proyecto"</strong></td><td>Se abre el formulario para crear un ciclo PDCA</td></tr>
        <tr><td>4</td><td>Ingresa nombre y descripción, luego clic en <strong>"Crear Proyecto"</strong></td><td>El proyecto se crea y se activa automáticamente</td></tr>
        <tr><td>5</td><td>Haz clic en la tarjeta del proyecto</td><td>Te lleva a la fase Planificar</td></tr>
        <tr><td>6</td><td>Sigue las 4 fases: Planificar → Hacer → Verificar → Actuar</td><td>Completa el ciclo de mejora continua</td></tr>
      </tbody></table>
      <div class="manual-note"><span class="manual-note-icon">📝</span><span>La aplicación viene con <strong>2 proyectos de demostración</strong> precargados con datos de ejemplo. Son ideales para explorar todas las funcionalidades.</span></div>
    `
  },
  {
    id: 'navigation',
    num: 3,
    icon: '🧭',
    title: 'Navegación General',
    keywords: 'navegación barra lateral sidebar stepper fases persistencia datos localstorage interfaz',
    content: `
      <h3>3.1 Barra Lateral</h3>
      <p>La barra lateral izquierda es permanente y siempre visible. Es el punto central de navegación.</p>
      <table class="manual-table"><thead><tr><th>Icono</th><th>Sección</th><th>Ruta</th><th>Descripción</th></tr></thead><tbody>
        <tr><td>🏠</td><td><strong>Inicio</strong></td><td>/</td><td>Panel principal con estadísticas, diagrama PDCA y accesos rápidos</td></tr>
        <tr><td>📁</td><td><strong>Proyectos</strong></td><td>/projects</td><td>Gestión de todos los ciclos PDCA</td></tr>
        <tr><td>📋</td><td><strong>Planificar</strong></td><td>/plan</td><td>Fase 1: Problema, Causa Raíz, SMART, Plan de Acción</td></tr>
        <tr><td>⚡</td><td><strong>Hacer</strong></td><td>/do</td><td>Fase 2: Ejecución, Datos y Observaciones</td></tr>
        <tr><td>🔍</td><td><strong>Verificar</strong></td><td>/check</td><td>Fase 3: Resultados, Evaluación y Lecciones</td></tr>
        <tr><td>🚀</td><td><strong>Actuar</strong></td><td>/act</td><td>Fase 4: Estandarizar o Ajustar y Reiniciar</td></tr>
        <tr><td>📈</td><td><strong>Dashboards</strong></td><td>/dashboards</td><td>Métricas globales, gráficas y tabla resumen</td></tr>
      </tbody></table>

      <h3>3.2 Indicador de Fase (Stepper)</h3>
      <p>En cada página de fase aparece un indicador visual con 4 pasos interactivos.</p>
      <table class="manual-table"><thead><tr><th>Estado</th><th>Apariencia</th><th>Significado</th></tr></thead><tbody>
        <tr><td>Fase completada</td><td>Círculo verde con ✓</td><td>Todas las actividades de esa fase están terminadas</td></tr>
        <tr><td>Fase actual</td><td>Círculo grande resaltado</td><td>Es la fase en la que se encuentra el proyecto</td></tr>
        <tr><td>Fase pendiente</td><td>Círculo pequeño gris</td><td>Aún no se ha llegado a esta fase</td></tr>
      </tbody></table>
      <p>La secuencia siempre es: <strong>① Planificar → ② Hacer → ③ Verificar → ④ Actuar</strong>. Para avanzar, debes hacer clic en <strong>"Marcar como Completada"</strong>.</p>

      <h3>3.3 Persistencia de Datos</h3>
      <table class="manual-table"><thead><tr><th>Característica</th><th>Detalle</th></tr></thead><tbody>
        <tr><td><strong>Guardado automático</strong></td><td>Cada modificación se guarda inmediatamente sin presionar "Guardar"</td></tr>
        <tr><td><strong>Datos entre sesiones</strong></td><td>Al cerrar y reabrir el navegador, tus datos estarán donde los dejaste</td></tr>
        <tr><td><strong>Datos locales</strong></td><td>La información se almacena únicamente en el navegador en el que trabajas</td></tr>
        <tr><td><strong>Datos demo</strong></td><td>Al iniciar por primera vez, la aplicación carga 2 proyectos de ejemplo</td></tr>
      </tbody></table>

      <h3>3.4 Convenciones de la Interfaz</h3>
      <table class="manual-table"><thead><tr><th>Elemento</th><th>Descripción</th><th>Ejemplo de Uso</th></tr></thead><tbody>
        <tr><td><strong>Tarjetas de cristal</strong></td><td>Contenedores con efecto de transparencia y borde sutil</td><td>Tarjetas de proyectos, KPIs</td></tr>
        <tr><td><strong>Badges de color</strong></td><td>Etiquetas que indican estado o fase</td><td>Planificar (azul), Hacer (verde)</td></tr>
        <tr><td><strong>Barras de progreso</strong></td><td>Indicadores horizontales de avance</td><td>25% por cada fase completada</td></tr>
        <tr><td><strong>Botones primarios</strong></td><td>Acción principal de la sección</td><td>"Marcar como Completada"</td></tr>
        <tr><td><strong>Pestañas</strong></td><td>Navegación horizontal dentro de una fase</td><td>Problema / Causa Raíz / SMART</td></tr>
      </tbody></table>
    `
  },
  {
    id: 'home',
    num: 4,
    icon: '🏠',
    title: 'Página de Inicio',
    keywords: 'inicio home estadísticas módulos proyectos recientes hero panel',
    content: `
      <h3>4.1 Sección Hero</h3>
      <p>En la parte superior se presenta el encabezado de bienvenida con el diagrama visual del Ciclo PDCA con los cuatro cuadrantes: <strong>Plan</strong>, <strong>Do</strong>, <strong>Check</strong> y <strong>Act</strong>.</p>

      <h3>4.2 Tarjetas de Estadísticas</h3>
      <table class="manual-table"><thead><tr><th>Tarjeta</th><th>Indicador</th><th>Interpretación</th></tr></thead><tbody>
        <tr><td><strong>Proyectos Activos</strong></td><td>Ciclos en progreso</td><td>Carga de trabajo actual del equipo</td></tr>
        <tr><td><strong>Completados</strong></td><td>Ciclos finalizados</td><td>Mejoras implementadas exitosamente</td></tr>
        <tr><td><strong>Proyectos Totales</strong></td><td>Total de ciclos</td><td>Volumen total de iniciativas</td></tr>
        <tr><td><strong>Progreso Promedio</strong></td><td>% promedio de avance</td><td>Nivel general de avance del portafolio</td></tr>
      </tbody></table>

      <h3>4.3 Tarjetas de Módulos</h3>
      <p>Seis tarjetas de acceso rápido permiten navegar directamente a cualquier sección.</p>

      <h3>4.4 Proyectos Recientes</h3>
      <p>En la parte inferior se muestran hasta 4 proyectos recientes como tarjetas con nombre, descripción, badge de fase y barra de progreso.</p>
    `
  },
  {
    id: 'projects',
    num: 5,
    icon: '📁',
    title: 'Gestión de Proyectos PDCA',
    keywords: 'proyectos crear activar eliminar tarjeta proyecto activo gestión',
    content: `
      <h3>5.1 Crear un Nuevo Proyecto</h3>
      <table class="manual-table"><thead><tr><th>Paso</th><th>Acción</th><th>Detalle</th></tr></thead><tbody>
        <tr><td>1</td><td>Clic en <strong>"+ Nuevo Proyecto"</strong></td><td>Se despliega un formulario</td></tr>
        <tr><td>2</td><td>Escribe el <strong>nombre</strong> del proyecto</td><td>Ej: "Reducción de defectos en Línea 3"</td></tr>
        <tr><td>3</td><td>Escribe la <strong>descripción</strong></td><td>Objetivo general del ciclo</td></tr>
        <tr><td>4</td><td>Clic en <strong>"Crear Proyecto"</strong></td><td>Se crea y activa automáticamente</td></tr>
      </tbody></table>
      <div class="manual-tip"><span class="manual-tip-icon">💡</span><span>Usa nombres descriptivos que incluyan el área, proceso o indicador a mejorar.</span></div>

      <h3>5.2 Anatomía de una Tarjeta</h3>
      <table class="manual-table"><thead><tr><th>Elemento</th><th>Ubicación</th><th>Descripción</th></tr></thead><tbody>
        <tr><td><strong>Nombre</strong></td><td>Superior izquierda</td><td>Título del proyecto</td></tr>
        <tr><td><strong>Badge de fase</strong></td><td>Superior derecha</td><td>Etiqueta de color con fase actual</td></tr>
        <tr><td><strong>Barra de progreso</strong></td><td>Parte inferior</td><td>25% por cada fase completada</td></tr>
      </tbody></table>

      <h3>5.3 Acciones Disponibles</h3>
      <table class="manual-table"><thead><tr><th>Acción</th><th>Cómo</th><th>Efecto</th></tr></thead><tbody>
        <tr><td><strong>Activar y abrir</strong></td><td>Clic en la tarjeta</td><td>Se activa y navega a su fase actual</td></tr>
        <tr><td><strong>Navegar a fase</strong></td><td>Clic en "Ir a [Fase] →"</td><td>Navega a la fase correspondiente</td></tr>
        <tr><td><strong>Eliminar</strong></td><td>Clic en icono eliminar</td><td>Se elimina permanentemente</td></tr>
      </tbody></table>

      <h3>5.4 Concepto de Proyecto Activo</h3>
      <p>En cualquier momento, solo un proyecto puede estar activo. Las páginas de las 4 fases siempre muestran los datos del proyecto activo.</p>
    `
  },
  {
    id: 'plan',
    num: 6,
    icon: '📋',
    title: 'Fase 1 — Planificar (Plan)',
    keywords: 'planificar plan problema causa raíz ishikawa 5 porqués smart objetivos plan de acción fase 1',
    content: `
      <p><strong>Propósito:</strong> Sentar las bases del ciclo de mejora. Se identifica el problema, se analizan causas raíz, se definen objetivos SMART y se crea un plan de acción.</p>

      <h3>6.1 Pestaña: Problema</h3>
      <p>Un área de texto libre donde redactar la descripción completa del problema. Guardado automático.</p>
      <table class="manual-table"><thead><tr><th>Elemento</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td><strong>Qué</strong> está pasando</td><td>"Tasa de defectos del 4.2% en la línea de ensamblaje 3"</td></tr>
        <tr><td><strong>Dónde</strong> ocurre</td><td>"Estación de soldadura #5 del turno matutino"</td></tr>
        <tr><td><strong>Cuándo</strong> se detectó</td><td>"Durante las últimas 8 semanas de producción"</td></tr>
        <tr><td><strong>Cuánto</strong> impacto tiene</td><td>"$12,000 mensuales en retrabajo y scrap"</td></tr>
      </tbody></table>

      <h3>6.2 Pestaña: Causa Raíz</h3>
      <h4>6.2.1 Análisis de los 5 Porqués</h4>
      <p>Técnica interrogativa iterativa en la que se pregunta "¿Por qué?" sucesivamente para llegar a la causa raíz.</p>
      <table class="manual-table"><thead><tr><th>Campo</th><th>Instrucción</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td><strong>¿Por qué 1?</strong></td><td>Síntoma principal</td><td>"Piezas con dimensiones fuera de tolerancia"</td></tr>
        <tr><td><strong>¿Por qué 2?</strong></td><td>¿Por qué ocurre lo anterior?</td><td>"Herramental desgastado"</td></tr>
        <tr><td><strong>¿Por qué 3?</strong></td><td>Profundizar</td><td>"No hay mantenimiento preventivo"</td></tr>
        <tr><td><strong>¿Por qué 4?</strong></td><td>Más profundo</td><td>"No hay visibilidad del desgaste"</td></tr>
        <tr><td><strong>¿Por qué 5?</strong></td><td>Causa raíz sistémica</td><td>"No hay sistema de monitoreo ni indicadores"</td></tr>
      </tbody></table>

      <h4>6.2.2 Diagrama de Ishikawa (6M)</h4>
      <table class="manual-table"><thead><tr><th>Categoría</th><th>Icono</th><th>¿Qué Analizar?</th></tr></thead><tbody>
        <tr><td><strong>Mano de Obra</strong></td><td>👥</td><td>Competencias, capacitación, experiencia, motivación</td></tr>
        <tr><td><strong>Maquinaria</strong></td><td>⚙️</td><td>Estado de equipos, mantenimiento, calibración</td></tr>
        <tr><td><strong>Método</strong></td><td>📝</td><td>Procedimientos, instrucciones de trabajo, estándares</td></tr>
        <tr><td><strong>Material</strong></td><td>📦</td><td>Materias primas, especificaciones, proveedores</td></tr>
        <tr><td><strong>Medio Ambiente</strong></td><td>🌿</td><td>Temperatura, humedad, iluminación, orden</td></tr>
        <tr><td><strong>Medición</strong></td><td>📏</td><td>Instrumentos, frecuencia de inspección, criterios</td></tr>
      </tbody></table>

      <h3>6.3 Pestaña: Objetivos SMART</h3>
      <table class="manual-table"><thead><tr><th>Letra</th><th>Criterio</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td><strong>S</strong></td><td>Específico</td><td>"Reducir defectos en estación #5"</td></tr>
        <tr><td><strong>M</strong></td><td>Medible</td><td>"Del 4.2% al 1.5% o menor"</td></tr>
        <tr><td><strong>A</strong></td><td>Alcanzable</td><td>"Con mantenimiento preventivo y calibración"</td></tr>
        <tr><td><strong>R</strong></td><td>Relevante</td><td>"Reduce costos en $8,000/mes"</td></tr>
        <tr><td><strong>T</strong></td><td>Temporal</td><td>"En 6 semanas"</td></tr>
      </tbody></table>

      <h3>6.4 Pestaña: Plan de Acción</h3>
      <table class="manual-table"><thead><tr><th>Columna</th><th>Tipo</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td><strong>Estado</strong></td><td>Checkbox</td><td>☐ / ✓</td></tr>
        <tr><td><strong>Tarea</strong></td><td>Texto</td><td>"Calibrar instrumentos de la estación 5"</td></tr>
        <tr><td><strong>Responsable</strong></td><td>Texto</td><td>"Ing. María López"</td></tr>
        <tr><td><strong>Recursos</strong></td><td>Texto</td><td>"Kit de calibración, $2,500"</td></tr>
        <tr><td><strong>Fecha Límite</strong></td><td>Fecha</td><td>"2026-03-25"</td></tr>
      </tbody></table>

      <h3>6.5 Completar la Fase</h3>
      <p>Haz clic en <strong>"Marcar como Completada"</strong>. El progreso sube al 25% y el proyecto avanza a la fase Hacer.</p>
    `
  },
  {
    id: 'do',
    num: 7,
    icon: '⚡',
    title: 'Fase 2 — Hacer (Do)',
    keywords: 'hacer do ejecución acciones datos métricas registro observaciones bitácora prueba piloto fase 2',
    content: `
      <p><strong>Propósito:</strong> Implementar el plan de acción como prueba piloto, recopilar datos cuantitativos y documentar observaciones.</p>

      <h3>7.1 Pestaña: Ejecución</h3>
      <p>Cada acción del Plan de Acción con controles para rastrear su estatus:</p>
      <table class="manual-table"><thead><tr><th>Estado</th><th>Indicador</th><th>Significado</th></tr></thead><tbody>
        <tr><td>Pendiente</td><td>🔘 Gris</td><td>No ha comenzado</td></tr>
        <tr><td>En Progreso</td><td>🟡 Amarillo</td><td>En ejecución</td></tr>
        <tr><td>Completado</td><td>🟢 Verde</td><td>Ejecutada exitosamente</td></tr>
        <tr><td>Bloqueado</td><td>🔴 Rojo</td><td>Detenida por impedimento</td></tr>
      </tbody></table>

      <h3>7.2 Pestaña: Datos</h3>
      <p>Corazón de la recolección cuantitativa. Crear métricas y registrar valores periódicos.</p>
      <table class="manual-table"><thead><tr><th>Campo</th><th>Descripción</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td><strong>Unidad</strong></td><td>Unidad de medida</td><td>%, minutos, ppm</td></tr>
        <tr><td><strong>Línea Base</strong></td><td>Valor antes de la mejora</td><td>4.2</td></tr>
        <tr><td><strong>Meta</strong></td><td>Valor objetivo</td><td>1.5</td></tr>
      </tbody></table>
      <div class="manual-important"><span class="manual-tip-icon">⚠️</span><span>Se necesitan <strong>mínimo 2 registros</strong> por métrica para que las gráficas de tendencia se generen en la fase Verificar.</span></div>

      <h3>7.3 Pestaña: Observaciones</h3>
      <p>Registro cronológico de hallazgos, incidencias y comentarios durante la ejecución.</p>
      <table class="manual-table"><thead><tr><th>Tipo de Observación</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td>Desviaciones del plan</td><td>"Se modificó la secuencia de calibración"</td></tr>
        <tr><td>Hallazgos inesperados</td><td>"La variación de temperatura también afecta"</td></tr>
        <tr><td>Problemas encontrados</td><td>"Material fuera de especificación el día 3"</td></tr>
        <tr><td>Resultados parciales</td><td>"La tasa de defectos bajó a 3.1%"</td></tr>
      </tbody></table>

      <h3>7.4 Completar la Fase</h3>
      <p>Haz clic en <strong>"Marcar como Completada"</strong> para avanzar a Verificar. El progreso sube al 50%.</p>
    `
  },
  {
    id: 'check',
    num: 8,
    icon: '🔍',
    title: 'Fase 3 — Verificar (Check)',
    keywords: 'verificar check resultados gráficas evaluación lecciones aprendidas objetivos SMART tendencia fase 3',
    content: `
      <p><strong>Propósito:</strong> Analizar datos, comparar resultados contra objetivos SMART y documentar lecciones aprendidas.</p>

      <h3>8.1 Pestaña: Resultados</h3>
      <p>Para cada métrica con al menos 2 registros, se genera automáticamente una <strong>gráfica de tendencia</strong>.</p>
      <table class="manual-table"><thead><tr><th>Elemento Visual</th><th>Color / Estilo</th><th>Significado</th></tr></thead><tbody>
        <tr><td><strong>Línea base</strong></td><td>Roja punteada</td><td>Valor antes de la mejora</td></tr>
        <tr><td><strong>Meta</strong></td><td>Verde punteada</td><td>Valor objetivo</td></tr>
        <tr><td><strong>Valores reales</strong></td><td>Amarilla sólida</td><td>Datos registrados durante el piloto</td></tr>
        <tr><td><strong>Badge de tendencia</strong></td><td>Automático</td><td>↗ MEJORANDO, ↘ DECLINANDO o → ESTABLE</td></tr>
      </tbody></table>

      <h3>8.2 Pestaña: Evaluación</h3>
      <table class="manual-table"><thead><tr><th>Control</th><th>Opciones</th><th>Efecto Visual</th></tr></thead><tbody>
        <tr><td><strong>✓ Alcanzado</strong></td><td>Marca como cumplido</td><td>Borde verde 🟢</td></tr>
        <tr><td><strong>✗ No Alcanzado</strong></td><td>Marca como no cumplido</td><td>Borde rojo 🔴</td></tr>
        <tr><td><strong>Notas</strong></td><td>Detallar por qué sí o por qué no</td><td>Área de texto</td></tr>
      </tbody></table>

      <h3>8.3 Pestaña: Lecciones Aprendidas</h3>
      <table class="manual-table"><thead><tr><th>Categoría</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td>Lo que funcionó bien</td><td>"La calibración semanal demostró ser la frecuencia óptima"</td></tr>
        <tr><td>Lo que no funcionó</td><td>"El cambio de proveedor generó más variación"</td></tr>
        <tr><td>Mejores prácticas</td><td>"Registrar métricas al inicio y final de cada turno"</td></tr>
      </tbody></table>

      <h3>8.4 Completar la Fase</h3>
      <p>Haz clic en <strong>"Marcar como Completada"</strong> para avanzar a Actuar. El progreso sube al 75%.</p>
    `
  },
  {
    id: 'act',
    num: 9,
    icon: '🚀',
    title: 'Fase 4 — Actuar (Act)',
    keywords: 'actuar act estandarizar ajustar reiniciar ciclo historial finalizar SOP fase 4',
    content: `
      <p><strong>Propósito:</strong> Tomar una decisión estratégica basada en los resultados. Dos caminos: estandarizar o ajustar y reiniciar.</p>

      <h3>9.1 La Decisión</h3>
      <table class="manual-table"><thead><tr><th>Opción</th><th>Icono</th><th>Cuándo Usarla</th></tr></thead><tbody>
        <tr><td><strong>Estandarizar</strong></td><td>✅</td><td>Resultados satisfactorios y objetivos alcanzados</td></tr>
        <tr><td><strong>Ajustar y Reiniciar</strong></td><td>🔄</td><td>Resultados no satisfactorios o hipótesis no funcionó</td></tr>
      </tbody></table>

      <h3>9.2 Estandarizar</h3>
      <table class="manual-table"><thead><tr><th>Tipo de Estándar</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td>Nuevo SOP</td><td>"SOP-CAL-005: Calibración semanal de instrumentos"</td></tr>
        <tr><td>Plan de capacitación</td><td>"Capacitar a los 3 turnos en el nuevo procedimiento"</td></tr>
        <tr><td>Cambio en proceso</td><td>"Verificación dimensional cada 50 piezas"</td></tr>
      </tbody></table>

      <h3>9.3 Ajustar y Reiniciar</h3>
      <p>Documenta los ajustes propuestos y haz clic en <strong>"🔄 Reiniciar Ciclo PDCA"</strong>.</p>
      <div class="manual-note"><span class="manual-note-icon">📝</span><span>Al reiniciar, se conserva la fase Planificar pero se limpian las fases Hacer, Verificar y Actuar.</span></div>

      <h3>9.4 Historial de Ciclos</h3>
      <p>Si un proyecto ha pasado por múltiples iteraciones, se muestra un timeline cronológico con fecha, decisión y métricas al cierre.</p>

      <h3>9.5 Finalizar Ciclo</h3>
      <p>Haz clic en <strong>"Finalizar Ciclo"</strong> para marcar el proyecto como completado (100%). Se contabilizará en "Completados".</p>
    `
  },
  {
    id: 'dashboards',
    num: 10,
    icon: '📈',
    title: 'Dashboards',
    keywords: 'dashboard métricas gráficas resumen KPI distribución progreso acciones tendencias tabla',
    content: `
      <h3>10.1 Tarjetas de Resumen Global</h3>
      <table class="manual-table"><thead><tr><th>Tarjeta</th><th>Indicador</th><th>Detalle</th></tr></thead><tbody>
        <tr><td><strong>Proyectos</strong></td><td>Total en el sistema</td><td>Incluye conteo de completados</td></tr>
        <tr><td><strong>Acciones</strong></td><td>Completadas del total</td><td>Suma de todas las acciones completadas</td></tr>
        <tr><td><strong>Objetivos SMART</strong></td><td>Total definidos</td><td>Suma de todos los proyectos</td></tr>
        <tr><td><strong>Lecciones</strong></td><td>Total documentadas</td><td>Suma de todas las lecciones</td></tr>
      </tbody></table>

      <h3>10.2 Gráficas de Análisis</h3>
      <table class="manual-table"><thead><tr><th>Gráfica</th><th>Formato</th><th>Utilidad</th></tr></thead><tbody>
        <tr><td><strong>Distribución por Fase</strong></td><td>Gráfico de pastel</td><td>Identificar cuellos de botella</td></tr>
        <tr><td><strong>Progreso por Proyecto</strong></td><td>Barras horizontales</td><td>Comparar avance relativo</td></tr>
        <tr><td><strong>Acciones del Plan</strong></td><td>Barras apiladas</td><td>Evaluar nivel de ejecución</td></tr>
        <tr><td><strong>Tendencias de Métricas</strong></td><td>Gráficas de línea</td><td>Evolución temporal de indicadores</td></tr>
      </tbody></table>

      <h3>10.3 Tabla Resumen</h3>
      <table class="manual-table"><thead><tr><th>Columna</th><th>Descripción</th></tr></thead><tbody>
        <tr><td><strong>Nombre</strong></td><td>Nombre del proyecto</td></tr>
        <tr><td><strong>Fase Actual</strong></td><td>Badge de color</td></tr>
        <tr><td><strong>Progreso</strong></td><td>Barra visual de %</td></tr>
        <tr><td><strong>Acciones</strong></td><td>completadas / total</td></tr>
        <tr><td><strong>Fecha de Creación</strong></td><td>Cuándo se creó</td></tr>
      </tbody></table>
    `
  },
  {
    id: 'glossary',
    num: 11,
    icon: '📖',
    title: 'Glosario de Términos',
    keywords: 'glosario términos definiciones pdca kaizen lean six sigma causa raíz ishikawa smart kpi',
    content: `
      <table class="manual-table"><thead><tr><th>Término</th><th>Definición</th></tr></thead><tbody>
        <tr><td><strong>PDCA</strong></td><td>Plan-Do-Check-Act — Ciclo iterativo de mejora continua de Deming</td></tr>
        <tr><td><strong>Causa Raíz</strong></td><td>Razón fundamental por la que ocurre un problema; eliminarla previene la recurrencia</td></tr>
        <tr><td><strong>5 Porqués</strong></td><td>Técnica que pregunta "¿por qué?" iterativamente para llegar al origen del problema</td></tr>
        <tr><td><strong>Diagrama de Ishikawa</strong></td><td>Herramienta causa-efecto que clasifica causas en 6 categorías (6M)</td></tr>
        <tr><td><strong>6M</strong></td><td>Mano de Obra, Maquinaria, Método, Material, Medio Ambiente, Medición</td></tr>
        <tr><td><strong>Objetivos SMART</strong></td><td>Específicos, Medibles, Alcanzables, Relevantes y con Tiempo definido</td></tr>
        <tr><td><strong>KPI</strong></td><td>Key Performance Indicator — Indicador Clave de Desempeño</td></tr>
        <tr><td><strong>Línea Base</strong></td><td>Valor del indicador antes de implementar la mejora</td></tr>
        <tr><td><strong>SOP</strong></td><td>Standard Operating Procedure — Procedimiento Operativo Estándar</td></tr>
        <tr><td><strong>Kaizen</strong></td><td>"Cambio para mejor" o "mejora continua" (japonés)</td></tr>
        <tr><td><strong>Lean Manufacturing</strong></td><td>Filosofía enfocada en eliminación de desperdicios y maximización de valor</td></tr>
        <tr><td><strong>Six Sigma</strong></td><td>Metodología para reducir variabilidad y defectos</td></tr>
        <tr><td><strong>localStorage</strong></td><td>Almacenamiento del navegador que guarda datos entre sesiones</td></tr>
      </tbody></table>
    `
  },
  {
    id: 'faq',
    num: 12,
    icon: '❓',
    title: 'Preguntas Frecuentes',
    keywords: 'preguntas frecuentes faq dudas ayuda resetear exportar editar múltiples ciclos',
    content: `
      <table class="manual-table"><thead><tr><th>Nº</th><th>Pregunta</th><th>Respuesta</th></tr></thead><tbody>
        <tr><td>1</td><td><strong>¿Cómo veo los datos de otro proyecto?</strong></td><td>Navega a Proyectos y haz clic en la tarjeta del proyecto deseado.</td></tr>
        <tr><td>2</td><td><strong>¿Puedo tener múltiples ciclos?</strong></td><td>Sí. Cada proyecto tiene su progreso independiente, pero solo uno se muestra a la vez.</td></tr>
        <tr><td>3</td><td><strong>¿Dónde se guardan los datos?</strong></td><td>En el localStorage del navegador. Son locales a ese navegador.</td></tr>
        <tr><td>4</td><td><strong>¿Cómo reseteo los datos demo?</strong></td><td>Consola del navegador: <code>localStorage.removeItem('nexia-pdca-data')</code> y recarga.</td></tr>
        <tr><td>5</td><td><strong>¿Puedo volver a una fase anterior?</strong></td><td>Sí. Usa el stepper o la barra lateral.</td></tr>
        <tr><td>6</td><td><strong>¿Qué significa cada color?</strong></td><td>🔵 Planificar, 🟢 Hacer, 🟡 Verificar, 🟣 Actuar</td></tr>
        <tr><td>7</td><td><strong>¿Puedo editar una fase completada?</strong></td><td>Sí. Los datos siguen siendo editables. Puedes revertir el estado.</td></tr>
        <tr><td>8</td><td><strong>¿Cuántas métricas puedo crear?</strong></td><td>No hay límite definido.</td></tr>
        <tr><td>9</td><td><strong>¿Qué pasa si reinicio el ciclo?</strong></td><td>Se guarda en el historial. Hacer, Verificar y Actuar se limpian. Planificar se conserva.</td></tr>
        <tr><td>10</td><td><strong>¿Puedo exportar mis datos?</strong></td><td>Actualmente no hay exportación nativa. Puedes copiar del localStorage por consola.</td></tr>
      </tbody></table>
    `
  },
  {
    id: 'flow',
    num: 13,
    icon: '🔁',
    title: 'Flujo Recomendado del Ciclo PDCA',
    keywords: 'flujo recomendado recorrido paso a paso ciclo completo secuencia',
    content: `
      <h3>Paso 1: Crear el Proyecto</h3>
      <p>Navega a <strong>Proyectos → "+ Nuevo Proyecto"</strong>. Asigna un nombre descriptivo y una descripción.</p>

      <h3>Paso 2: Planificar (Fase 1)</h3>
      <table class="manual-table"><thead><tr><th>Actividad</th><th>Pestaña</th><th>Entregable</th></tr></thead><tbody>
        <tr><td>Definir el problema</td><td>Problema</td><td>Descripción clara con datos cuantitativos</td></tr>
        <tr><td>Analizar causa raíz</td><td>Causa Raíz</td><td>5 Porqués + Ishikawa 6M</td></tr>
        <tr><td>Establecer objetivos</td><td>SMART</td><td>Al menos 1 objetivo SMART</td></tr>
        <tr><td>Crear plan de acción</td><td>Plan de Acción</td><td>Tabla de actividades</td></tr>
      </tbody></table>

      <h3>Paso 3: Hacer (Fase 2)</h3>
      <table class="manual-table"><thead><tr><th>Actividad</th><th>Pestaña</th><th>Entregable</th></tr></thead><tbody>
        <tr><td>Ejecutar acciones</td><td>Ejecución</td><td>Estatus actualizado por acción</td></tr>
        <tr><td>Medir métricas</td><td>Datos</td><td>Línea base, meta y ≥2 registros</td></tr>
        <tr><td>Documentar hallazgos</td><td>Observaciones</td><td>Bitácora cronológica</td></tr>
      </tbody></table>

      <h3>Paso 4: Verificar (Fase 3)</h3>
      <table class="manual-table"><thead><tr><th>Actividad</th><th>Pestaña</th><th>Entregable</th></tr></thead><tbody>
        <tr><td>Analizar gráficas</td><td>Resultados</td><td>Interpretación de tendencias</td></tr>
        <tr><td>Evaluar objetivos</td><td>Evaluación</td><td>SMART alcanzado o no con notas</td></tr>
        <tr><td>Registrar aprendizajes</td><td>Lecciones</td><td>Lista de lecciones útiles</td></tr>
      </tbody></table>

      <h3>Paso 5: Actuar (Fase 4)</h3>
      <table class="manual-table"><thead><tr><th>Actividad</th><th>Opción</th><th>Entregable</th></tr></thead><tbody>
        <tr><td>Tomar la decisión</td><td>Estandarizar o Ajustar</td><td>Selección del camino</td></tr>
        <tr><td>Documentar</td><td>Según decisión</td><td>SOPs o ajustes al enfoque</td></tr>
        <tr><td>Cerrar o reiniciar</td><td>Finalizar o Reiniciar</td><td>100% completado o nuevo ciclo</td></tr>
      </tbody></table>

      <div class="manual-tip"><span class="manual-tip-icon">💡</span><span><strong>NexIA PDCA v1.0.0</strong> — Sistema de Gestión de Mejora Continua. Desarrollado con ❤️ por NexIA</span></div>
    `
  }
];
