# 📘 Manual de Usuario — NexIA PDCA

**Sistema de Gestión de Mejora Continua con Ciclo Plan-Do-Check-Act**
**Versión 1.0.0**

> NexIA PDCA es una aplicación web diseñada para ayudar a equipos y organizaciones a gestionar proyectos de mejora continua utilizando la metodología PDCA (Plan-Do-Check-Act) del Dr. W. Edwards Deming. La herramienta guía al usuario a través de las cuatro fases del ciclo, proporcionando formularios estructurados, análisis de causa raíz, seguimiento de métricas en tiempo real y dashboards ejecutivos. Cada paso queda documentado y medido para garantizar la trazabilidad y la efectividad de las mejoras implementadas.

---

## 📑 Tabla de Contenido

| Nº  | Sección | Descripción |
|-----|---------|-------------|
| 1   | [Introducción a la Metodología PDCA](#-1-introducción-a-la-metodología-pdca) | Fundamentos teóricos del ciclo de Deming |
| 2   | [Inicio Rápido](#-2-inicio-rápido) | Requisitos, instalación y primeros pasos |
| 3   | [Navegación General](#-3-navegación-general) | Barra lateral, stepper de fases y persistencia |
| 4   | [Página de Inicio](#-4-página-de-inicio) | Panel de estadísticas y accesos directos |
| 5   | [Gestión de Proyectos PDCA](#-5-gestión-de-proyectos-pdca) | Crear, activar, administrar y eliminar proyectos |
| 6   | [Fase 1 — Planificar (Plan)](#-6-fase-1--planificar-plan) | Problema, Causa Raíz, SMART, Plan de Acción |
| 7   | [Fase 2 — Hacer (Do)](#-7-fase-2--hacer-do) | Ejecución, recolección de datos y observaciones |
| 8   | [Fase 3 — Verificar (Check)](#-8-fase-3--verificar-check) | Resultados, evaluación y lecciones aprendidas |
| 9   | [Fase 4 — Actuar (Act)](#-9-fase-4--actuar-act) | Estandarizar o ajustar y reiniciar ciclo |
| 10  | [Dashboards](#-10-dashboards) | Métricas globales, gráficas y tabla resumen |
| 11  | [Glosario de Términos](#-11-glosario-de-términos) | Definiciones clave de Lean y PDCA |
| 12  | [Preguntas Frecuentes](#-12-preguntas-frecuentes) | Soluciones a dudas comunes |
| 13  | [Flujo Recomendado](#-13-flujo-recomendado-del-ciclo-pdca) | Recorrido paso a paso del ciclo completo |

---

## 🎓 1. Introducción a la Metodología PDCA

### ¿Qué es el Ciclo PDCA?

El Ciclo PDCA, también conocido como **Ciclo de Deming** o **Ciclo de Mejora Continua**, es un marco de gestión iterativo compuesto por cuatro fases que se repiten cíclicamente para lograr mejoras incrementales y sostenibles en procesos, productos y servicios.

Fue popularizado por el Dr. **W. Edwards Deming** en la década de 1950, basándose en el trabajo previo de Walter A. Shewhart. Hoy en día es un pilar fundamental en sistemas de gestión de calidad como **ISO 9001**, **Lean Manufacturing**, **Six Sigma** y **Kaizen**.

### Las Cuatro Fases

| Fase | Nombre en Español | Propósito Principal | Preguntas Clave |
|------|-------------------|---------------------|-----------------|
| **Plan** | Planificar | Identificar el problema, analizar las causas raíz y definir un plan de acción con objetivos claros | ¿Cuál es el problema? ¿Por qué ocurre? ¿Qué queremos lograr? |
| **Do** | Hacer | Implementar el plan de acción a pequeña escala (prueba piloto) y recopilar datos cuantitativos | ¿Se ejecutó según lo planeado? ¿Qué datos recopilamos? |
| **Check** | Verificar | Comparar los resultados obtenidos contra los objetivos establecidos, identificar desviaciones y documentar aprendizajes | ¿Se alcanzaron las metas? ¿Qué funcionó? ¿Qué no? |
| **Act** | Actuar | Si los resultados son satisfactorios, estandarizar la mejora. Si no, ajustar el enfoque y reiniciar el ciclo | ¿Estandarizamos o ajustamos? ¿Cómo replicar el éxito? |

### ¿Por qué usar PDCA?

El enfoque PDCA ofrece múltiples beneficios para cualquier organización que busque la excelencia operativa:

| Beneficio | Descripción |
|-----------|-------------|
| **Estructura** | Proporciona un marco claro y repetible para abordar cualquier tipo de problema o mejora |
| **Base en datos** | Las decisiones se toman con evidencia cuantitativa, no con suposiciones |
| **Aprendizaje continuo** | Cada ciclo genera lecciones documentadas que alimentan el siguiente |
| **Escalabilidad** | Permite probar cambios a pequeña escala antes de implementarlos completamente |
| **Trazabilidad** | Toda la información queda documentada: problema, causas, acciones, métricas y decisiones |
| **Flexibilidad** | Si los resultados no son satisfactorios, el ciclo se reinicia con nuevos aprendizajes |

### ¿Para quién es NexIA PDCA?

Esta aplicación está diseñada para cualquier profesional o equipo que desee aplicar la metodología PDCA de forma sistemática y digital. Los perfiles típicos de usuario incluyen:

| Perfil de Usuario | Uso Principal |
|-------------------|---------------|
| Ingenieros de calidad | Reducción de defectos, mejora de procesos de manufactura |
| Líderes de mejora continua | Gestión de portafolio de proyectos Kaizen |
| Gerentes de operaciones | Optimización de KPIs operativos |
| Equipos de producción | Documentación de pruebas piloto y resultados |
| Consultores Lean / Six Sigma | Estandarización de metodología con clientes |
| Equipos administrativos | Mejora de procesos de servicio y atención |

---

## 🚀 2. Inicio Rápido

### Requisitos del Sistema

| Requisito | Especificación |
|-----------|----------------|
| Runtime | Node.js versión 18 o superior |
| Navegador | Chrome, Firefox, Edge o Safari (versiones recientes) |
| Sistema operativo | Windows, macOS o Linux |
| Resolución recomendada | 1280 × 720 px o superior |
| Espacio en disco | Mínimo 100 MB (incluyendo dependencias) |

### Instalación y Ejecución

Para poner en marcha la aplicación, abre una terminal en la carpeta del proyecto y ejecuta los siguientes dos comandos:

| Paso | Comando | Descripción |
|------|---------|-------------|
| 1 | `npm install` | Descarga e instala todas las dependencias del proyecto |
| 2 | `npm run dev` | Inicia el servidor de desarrollo en modo local |

Una vez iniciado, la aplicación estará disponible en **http://localhost:5173/** — abre esa dirección en tu navegador web.

### Primeros Pasos (Tutorial Rápido)

Sigue estos pasos para familiarizarte rápidamente con la aplicación:

| Paso | Acción | Resultado Esperado |
|------|--------|---------------------|
| 1 | Abre la aplicación en tu navegador | Verás la pantalla de Inicio con estadísticas y módulos |
| 2 | Haz clic en **Proyectos** en la barra lateral | Se muestra la lista de proyectos (incluye 2 demos) |
| 3 | Haz clic en **"+ Nuevo Proyecto"** | Se abre el formulario para crear un ciclo PDCA |
| 4 | Ingresa un nombre y una descripción, luego haz clic en **"Crear Proyecto"** | El proyecto se crea y se activa automáticamente |
| 5 | Haz clic en la tarjeta del proyecto | Te lleva a la fase Planificar (primera fase del ciclo) |
| 6 | Sigue las 4 fases: Planificar → Hacer → Verificar → Actuar | Completa el ciclo de mejora continua |

> **Nota:** La aplicación viene con **2 proyectos de demostración** precargados con datos de ejemplo. Son ideales para explorar todas las funcionalidades antes de crear tus propios proyectos.

---

## 🧭 3. Navegación General

### 3.1 Barra Lateral

La barra lateral izquierda es permanente y siempre visible. Es el punto central de navegación de la aplicación y contiene las siguientes secciones:

| Icono | Sección | Ruta | Descripción Detallada |
|-------|---------|------|------------------------|
| 🏠 | **Inicio** | `/` | Panel principal con 4 tarjetas de estadísticas (proyectos activos, completados, totales y progreso promedio), el diagrama visual PDCA, tarjetas de acceso rápido a módulos y una vista resumida de proyectos recientes |
| 📁 | **Proyectos** | `/projects` | Centro de gestión de todos los ciclos PDCA: crear nuevos proyectos, activar uno existente, navegar a su fase actual o eliminarlo. Cada proyecto se presenta como una tarjeta con nombre, descripción, badge de fase, fecha y barra de progreso |
| 📋 | **Planificar** | `/plan` | Fase 1 del ciclo — Contiene 4 pestañas: Definición del Problema, Análisis de Causa Raíz (5 Porqués + Diagrama de Ishikawa 6M), Objetivos SMART y Plan de Acción con tabla de tareas |
| ⚡ | **Hacer** | `/do` | Fase 2 del ciclo — Contiene 3 pestañas: Ejecución del plan (seguimiento de estatus por acción), Datos (creación de métricas con registros temporales) y Observaciones (bitácora cronológica) |
| 🔍 | **Verificar** | `/check` | Fase 3 del ciclo — Contiene 3 pestañas: Resultados (gráficas de tendencia automáticas con línea base, meta y actual), Evaluación (cumplimiento de objetivos SMART) y Lecciones Aprendidas |
| 🚀 | **Actuar** | `/act` | Fase 4 del ciclo — Decisión entre Estandarizar (documentar nuevos estándares) o Ajustar y Reiniciar (registrar cambios para nuevo ciclo). Incluye historial de ciclos y opción de finalizar |
| 📈 | **Dashboards** | `/dashboards` | Vista consolidada: 4 tarjetas de resumen global, gráfica de distribución por fase (pie), progreso por proyecto (barras horizontales), acciones del plan (barras apiladas), tendencias de métricas (líneas) y tabla resumen con todos los proyectos |

### 3.2 Indicador de Fase (Stepper)

En cada página de fase aparece un indicador visual con 4 pasos que muestra el progreso del proyecto activo a través del ciclo PDCA. Este indicador es interactivo: al hacer clic en cualquier paso, navegas directamente a esa fase.

| Estado del Paso | Apariencia Visual | Significado |
|----------------|-------------------|-------------|
| Fase completada | Círculo verde con marca de verificación ✓ | Todas las actividades de esa fase están terminadas |
| Fase actual | Círculo grande resaltado con borde brillante | Es la fase en la que se encuentra el proyecto actualmente |
| Fase pendiente | Círculo pequeño gris | Aún no se ha llegado a esta fase |

La secuencia siempre es: **① Planificar → ② Hacer → ③ Verificar → ④ Actuar**. Para avanzar a la siguiente fase, debes hacer clic en el botón **"Marcar como Completada"** que aparece en la esquina superior derecha de cada página de fase.

### 3.3 Persistencia de Datos

NexIA PDCA guarda automáticamente toda la información en el almacenamiento local del navegador (**localStorage**). Esto significa que:

| Característica | Detalle |
|----------------|---------|
| **Guardado automático** | Cada vez que modificas un campo, el dato se guarda inmediatamente sin necesidad de presionar ningún botón de "Guardar" |
| **Datos entre sesiones** | Al cerrar y reabrir el navegador, tus datos estarán exactamente donde los dejaste |
| **Datos locales** | La información se almacena únicamente en el navegador en el que trabajas. Si cambias de navegador o de computadora, los datos no se transferirán automáticamente |
| **Datos demo** | Al iniciar por primera vez, la aplicación carga 2 proyectos de ejemplo. Si los eliminas o modificas, puedes restaurarlos limpiando el almacenamiento local |

### 3.4 Convenciones de la Interfaz

A lo largo de la aplicación encontrarás los siguientes elementos de interfaz de manera consistente:

| Elemento | Descripción | Ejemplo de Uso |
|----------|-------------|----------------|
| **Tarjetas de cristal** (glass-card) | Contenedores con efecto de transparencia y borde sutil que agrupan información relacionada | Tarjetas de proyectos, secciones de formulario, KPIs |
| **Badges de color** | Etiquetas redondeadas que indican el estado o la fase de un elemento | `Planificar` (azul), `Hacer` (verde), `Verificar` (ámbar), `Actuar` (púrpura) |
| **Barras de progreso** | Indicadores horizontales que representan el porcentaje de avance de un proyecto | Tarjeta de proyecto: 25% por cada fase completada |
| **Botones primarios** | Botones con fondo de color que ejecutan la acción principal de la sección | "Marcar como Completada", "Crear Proyecto" |
| **Botones secundarios** | Botones con borde y fondo transparente para acciones complementarias | "+ Agregar Acción", "+ Agregar Objetivo" |
| **Botones de peligro** | Botones rojos para acciones destructivas que requieren precaución | "Eliminar", "✕" (eliminar elemento) |
| **Pestañas** (tabs) | Controles de navegación horizontal dentro de una fase para alternar entre sub-secciones | Problema / Causa Raíz / Objetivos SMART / Plan de Acción |
| **Estados vacíos** | Mensajes con icono que aparecen cuando no hay datos en una sección | "Sin proyecto activo", "No hay acciones definidas" |

---

## 🏠 4. Página de Inicio

La página de Inicio es el panel ejecutivo de NexIA PDCA. Presenta un resumen visual del estado general de tus proyectos de mejora continua y ofrece accesos directos a cada módulo.

### 4.1 Sección Hero

En la parte superior se presenta el encabezado de bienvenida con el nombre de la aplicación, una breve descripción de su propósito y el diagrama visual del Ciclo PDCA con los cuatro cuadrantes: **Plan**, **Do**, **Check** y **Act**, cada uno con su color representativo.

### 4.2 Tarjetas de Estadísticas

Cuatro tarjetas de cristal presentan las métricas clave del sistema en tiempo real:

| Tarjeta | Indicador | Cálculo | Interpretación |
|---------|-----------|---------|----------------|
| **Proyectos Activos** | Número de ciclos en progreso | Total de proyectos que no están en estado "completado" | Indica la carga de trabajo actual del equipo de mejora |
| **Completados** | Número de ciclos finalizados | Proyectos cuya fase Actuar está marcada como completada | Indica cuántas mejoras se han implementado exitosamente |
| **Proyectos Totales** | Número total de ciclos | Conteo simple de todos los proyectos en el sistema | Indica el volumen total de iniciativas de mejora |
| **Progreso Promedio** | Porcentaje promedio de avance | Suma del progreso individual de cada proyecto ÷ número de proyectos | Indica el nivel general de avance del portafolio |

### 4.3 Tarjetas de Módulos

Seis tarjetas de acceso rápido permiten navegar directamente a cualquier sección de la aplicación con un solo clic:

| Módulo | Descripción en Tarjeta |
|--------|------------------------|
| 📁 Proyectos PDCA | Gestiona tus ciclos de mejora continua |
| 📋 Planificar (Plan) | Define problemas, analiza causas raíz y establece objetivos SMART |
| ⚡ Hacer (Do) | Ejecuta pruebas piloto y recopila datos |
| 🔍 Verificar (Check) | Analiza resultados y compara con objetivos |
| 🚀 Actuar (Act) | Estandariza mejoras o ajusta el enfoque |
| 📈 Dashboards | Visualiza métricas y tendencias globales |

### 4.4 Proyectos Recientes

En la parte inferior se muestran hasta 4 proyectos recientes como tarjetas, cada una con el nombre del proyecto, su descripción, un badge de color indicando la fase actual y una barra de progreso con porcentaje. Al hacer clic en cualquier tarjeta, se navega a la página de Proyectos.

---

## 📁 5. Gestión de Proyectos PDCA

Esta sección es el centro de comando para administrar todos tus ciclos de mejora continua. Desde aquí puedes crear nuevos proyectos, activar uno existente para trabajar en él, navegar a su fase actual o eliminarlo del sistema.

### 5.1 Crear un Nuevo Proyecto

Para crear un nuevo ciclo PDCA, sigue estos pasos:

| Paso | Acción | Detalle |
|------|--------|---------|
| 1 | Haz clic en **"+ Nuevo Proyecto"** | Se despliega un formulario en la parte superior de la página |
| 2 | Escribe el **nombre** del proyecto | Ejemplo: "Reducción de defectos en Línea 3", "Mejora de tiempos de entrega Almacén B" |
| 3 | Escribe la **descripción** | Una oración o párrafo que describa el objetivo general del ciclo |
| 4 | Haz clic en **"Crear Proyecto"** | El proyecto se crea, se activa automáticamente y comienza en la fase Planificar |

> **Consejo:** Usa nombres descriptivos que incluyan el área, proceso o indicador a mejorar. Esto facilita la identificación posterior en el dashboard.

### 5.2 Anatomía de una Tarjeta de Proyecto

Cada proyecto se presenta como una tarjeta visual que contiene la siguiente información:

| Elemento | Ubicación | Descripción |
|----------|-----------|-------------|
| **Nombre** | Parte superior izquierda | Título del proyecto de mejora |
| **Descripción** | Debajo del nombre | Objetivo general del ciclo |
| **Badge de fase** | Parte superior derecha | Etiqueta de color que indica la fase actual (Planificar, Hacer, Verificar o Actuar) |
| **Fecha de creación** | Debajo de la descripción | Fecha en que se creó el proyecto |
| **Barra de progreso** | Parte inferior | Barra horizontal que indica el porcentaje de avance (25% por cada fase completada) |
| **Indicadores de fase** | Parte inferior | Cuatro círculos con marca ✓ en las fases que ya se completaron |

### 5.3 Acciones Disponibles

| Acción | Cómo Activarla | Efecto |
|--------|-----------------|--------|
| **Activar y abrir** | Hacer clic en la tarjeta de un proyecto inactivo | El proyecto se convierte en el proyecto activo y la navegación te lleva a su fase actual |
| **Navegar a fase** | Hacer clic en el botón **"Ir a [Fase] →"** | Te lleva directamente a la página de la fase correspondiente del proyecto activo |
| **Eliminar proyecto** | Hacer clic en el icono de eliminar dentro de la tarjeta | Se solicita confirmación y, si se acepta, el proyecto se elimina permanentemente del sistema |

### 5.4 Concepto de Proyecto Activo

NexIA PDCA trabaja con un concepto de **proyecto activo**: en cualquier momento, solo un proyecto puede estar activo. Las páginas de las 4 fases (Planificar, Hacer, Verificar y Actuar) siempre muestran los datos del proyecto que esté activo en ese momento.

| Situación | Resultado |
|-----------|-----------|
| Hay un proyecto activo | Las páginas de fase muestran los datos de ese proyecto |
| No hay proyecto activo | Las páginas de fase muestran un mensaje: "Sin proyecto activo — Selecciona o crea un proyecto en la sección Proyectos" |
| Se hace clic en otro proyecto | El nuevo proyecto se convierte en el activo, reemplazando al anterior |

---

## 📋 6. Fase 1 — Planificar (Plan)

**Propósito:** Sentar las bases del ciclo de mejora. En esta fase se identifica y documenta el problema, se analizan las causas raíz mediante herramientas Lean, se definen objetivos SMART y se crea un plan de acción estructurado.

Esta es la fase más importante del ciclo, ya que un buen planteamiento determina la calidad de la ejecución y los resultados. La fase se divide en **4 pestañas**.

### 6.1 Pestaña: Problema

| Aspecto | Detalle |
|---------|---------|
| **Propósito** | Definir de forma clara, concisa y cuantificable el problema u oportunidad de mejora que se quiere abordar |
| **Componente** | Un área de texto libre donde redactar la descripción completa del problema |
| **Guardado** | Automático — cada carácter que escribas se guarda al instante |

**¿Qué incluir en la definición del problema?**

| Elemento | Ejemplo |
|----------|---------|
| **Qué** está pasando | "Se registra una tasa de defectos del 4.2% en la línea de ensamblaje 3" |
| **Dónde** ocurre | "En la estación de soldadura #5 del turno matutino" |
| **Cuándo** se detectó | "Durante las últimas 8 semanas de producción" |
| **Cuánto** impacto tiene | "Genera un costo adicional de $12,000 mensuales en retrabajo y scrap" |
| **A quién** afecta | "Al equipo de producción y al departamento de calidad" |

### 6.2 Pestaña: Causa Raíz

Esta pestaña contiene dos herramientas complementarias de análisis de causa raíz.

#### 6.2.1 Análisis de los 5 Porqués

Los 5 Porqués es una técnica interrogativa iterativa en la que se pregunta "¿Por qué?" sucesivamente (generalmente 5 veces) para llegar a la causa raíz de un problema. La premisa es que al profundizar en cada respuesta, se pasa del síntoma superficial a la causa fundamental.

| Campo | Instrucción | Ejemplo Ilustrativo |
|-------|-------------|---------------------|
| **¿Por qué 1?** | Describe el síntoma principal o la manifestación directa del problema | "Las piezas salen con dimensiones fuera de tolerancia" |
| **¿Por qué 2?** | Responde por qué ocurre lo descrito en el porqué anterior | "El herramental de la estación 5 está desgastado" |
| **¿Por qué 3?** | Continúa profundizando en la cadena causal | "No existe un programa de mantenimiento preventivo del herramental" |
| **¿Por qué 4?** | Sigue preguntando para acercarte a la raíz | "El departamento no tiene visibilidad del nivel de desgaste" |
| **¿Por qué 5?** | Normalmente en este punto se llega a la causa raíz sistémica | "No se ha implementado un sistema de monitoreo ni indicadores de vida útil" |

> **Consejo:** No siempre se necesitan exactamente 5 niveles. A veces la causa raíz se identifica al tercer porqué, y otras veces se necesitan más de 5 iteraciones. Lo importante es detenerse cuando se identifique una causa sobre la que se pueda actuar.

#### 6.2.2 Diagrama de Ishikawa (6M)

El Diagrama de Ishikawa (también llamado Diagrama de Causa-Efecto o Diagrama de Espina de Pescado) organiza las posibles causas de un problema en **6 categorías** conocidas como las **6M**. Esto permite un análisis exhaustivo y estructurado.

| Categoría (6M) | Icono | ¿Qué Analizar? | Ejemplos de Causas |
|-----------------|-------|-----------------|---------------------|
| **Mano de Obra** | 👥 | Competencias, capacitación, experiencia, motivación y organización del personal | Falta de capacitación en el nuevo proceso, alta rotación de personal, error humano por fatiga |
| **Maquinaria** | ⚙️ | Estado de equipos, mantenimiento, calibración, antigüedad y capacidad de máquinas | Desgaste de herramental, falta de calibración, equipo obsoleto, mantenimiento reactivo |
| **Método** | 📝 | Procedimientos, instrucciones de trabajo, secuencias de operación y estándares vigentes | Procedimiento desactualizado, falta de checklist, método no estandarizado entre turnos |
| **Material** | 📦 | Materias primas, insumos, componentes, especificaciones y proveedores | Variación de proveedor, material fuera de especificación, almacenamiento inadecuado |
| **Medio Ambiente** | 🌿 | Condiciones físicas del entorno: temperatura, humedad, iluminación, ruido, orden y limpieza | Temperatura variable en la planta, iluminación deficiente, contaminación cruzada |
| **Medición** | 📏 | Instrumentos de medición, frecuencia de inspección, criterios de aceptación y metrología | Instrumentos sin certificar, frecuencia de inspección inadecuada, criterios ambiguos |

**Cómo usar el diagrama en NexIA PDCA:**

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Localiza la categoría que quieras analizar (las 6 se muestran en una cuadrícula de 2 columnas) | Cada categoría tiene su propio campo de entrada |
| 2 | Escribe una causa potencial en el campo de texto de esa categoría | El texto queda listo para agregarse |
| 3 | Haz clic en el botón **"+"** o presiona **Enter** | La causa se agrega a la lista de esa categoría |
| 4 | Para eliminar una causa, haz clic en el botón **"✕"** junto a ella | La causa se elimina de la lista |

### 6.3 Pestaña: Objetivos SMART

Los objetivos SMART son el estándar de oro para definir metas claras y alcanzables. Cada objetivo debe cumplir con los 5 criterios del acrónimo:

| Letra | Criterio | Pregunta Guía | Ejemplo |
|-------|----------|---------------|---------|
| **S** | Específico | ¿Qué exactamente quieres lograr? | "Reducir la tasa de defectos en la estación de soldadura #5" |
| **M** | Medible | ¿Cómo cuantificarás el resultado? | "Del 4.2% actual al 1.5% o menor" |
| **A** | Alcanzable | ¿Con qué recursos o métodos lo lograrás? | "Implementando mantenimiento preventivo y calibración semanal" |
| **R** | Relevante | ¿Por qué es importante para la organización? | "Reduce costos de retrabajo en $8,000/mes y mejora entrega a cliente" |
| **T** | Temporal | ¿En qué plazo se debe completar? | "En un período de 6 semanas a partir del inicio del piloto" |

**Operaciones disponibles:**

| Acción | Cómo | Resultado |
|--------|------|-----------|
| Agregar un objetivo | Clic en **"+ Agregar Objetivo"** | Se crea un formulario nuevo con los 5 campos para completar |
| Editar un objetivo | Modifica directamente los campos de texto | Los cambios se guardan automáticamente |
| Eliminar un objetivo | Clic en **"Eliminar"** dentro del objetivo | El objetivo se elimina permanentemente |

### 6.4 Pestaña: Plan de Acción

El Plan de Acción es una tabla estructurada que define las actividades concretas que se llevarán a cabo durante la fase de ejecución (Hacer). Cada fila representa una tarea con los siguientes campos:

| Columna | Tipo | Descripción | Ejemplo |
|---------|------|-------------|---------|
| **Estado** | Checkbox | Marca para indicar si la tarea está completada | ☐ / ✓ |
| **Tarea** | Texto | Descripción específica de la actividad a realizar | "Calibrar instrumentos de medición de la estación 5" |
| **Responsable** | Texto | Nombre de la persona encargada de ejecutar la tarea | "Ing. María López" |
| **Recursos** | Texto | Equipos, materiales, presupuesto o soporte necesarios | "Kit de calibración, técnico externo, $2,500" |
| **Fecha Límite** | Fecha | Fecha de entrega esperada (selector de calendario) | "2026-03-25" |

**Operaciones disponibles:**

| Acción | Cómo | Resultado |
|--------|------|-----------|
| Agregar una acción | Clic en **"+ Agregar Acción"** | Se agrega una fila nueva a la tabla |
| Marcar como completada | Clic en el checkbox de la columna Estado | La tarea se marca con ✓ |
| Eliminar una acción | Clic en el botón **"✕"** al final de la fila | La fila se elimina de la tabla |

### 6.5 Completar la Fase Planificar

Cuando hayas completado todas las pestañas y estés satisfecho con el análisis, haz clic en el botón **"Marcar como Completada"** en la esquina superior derecha. Esto tendrá los siguientes efectos:

| Efecto | Descripción |
|--------|-------------|
| La fase se marca con ✓ en el stepper | El círculo "1" cambia a verde con marca de verificación |
| El proyecto avanza a la fase Hacer | El estatus del proyecto cambia de "Planificar" a "Hacer" |
| El progreso sube al 25% | La barra de progreso refleja que se completó 1 de 4 fases |
| El badge de la tarjeta cambia | En la página de Proyectos, el badge cambia de "Planificar" a "Hacer" |

> **Nota:** Puedes revertir la fase haciendo clic nuevamente en el botón, que ahora dirá "✓ Fase Completada". Esto regresará el proyecto a la fase Planificar.

---

## ⚡ 7. Fase 2 — Hacer (Do)

**Propósito:** Implementar el plan de acción a pequeña escala como prueba piloto, recopilar datos cuantitativos para medir los resultados y documentar observaciones sobre el desempeño de las acciones.

Esta es la fase de ejecución donde las ideas se ponen en práctica. La clave es trabajar a escala reducida para minimizar riesgos y recopilar evidencia suficiente para tomar decisiones informadas en la siguiente fase. Se divide en **3 pestañas**.

### 7.1 Pestaña: Ejecución

Muestra cada una de las acciones definidas en el Plan de Acción (Fase 1) con controles para rastrear su estatus de ejecución.

**Para cada acción se puede:**

| Campo | Tipo | Opciones / Descripción |
|-------|------|------------------------|
| **Estatus** | Selector desplegable | Selecciona el estado actual de la acción |
| **Notas de ejecución** | Área de texto | Espacio libre para documentar detalles, incidencias o comentarios sobre la ejecución |

Los posibles estados de una acción son:

| Estado | Indicador | Significado | Cuándo Usarlo |
|--------|-----------|-------------|---------------|
| Pendiente | 🔘 Gris | La acción aún no ha comenzado a ejecutarse | Estado inicial por defecto |
| En Progreso | 🟡 Amarillo | La acción está actualmente en ejecución | Cuando comienzas a trabajar en ella |
| Completado | 🟢 Verde | La acción se ha ejecutado exitosamente | Cuando la tarea ha sido terminada |
| Bloqueado | 🔴 Rojo | La acción está detenida por algún impedimento | Cuando hay un obstáculo que impide avanzar |

> **Importante:** Si la lista de acciones aparece vacía, esto significa que no se definieron acciones en la pestaña "Plan de Acción" de la fase Planificar. Regresa a la Fase 1 para agregarlas.

### 7.2 Pestaña: Datos

Esta pestaña es el corazón de la recolección cuantitativa. Aquí se crean las métricas que medirán el impacto de las acciones y se registran valores periódicos.

#### Crear una nueva métrica

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Escribe el nombre de la métrica en el campo de texto | Ejemplo: "Tasa de Defectos", "Tiempo de Ciclo", "OEE" |
| 2 | Haz clic en **"+ Agregar"** | Se crea la métrica con un panel expandido para configurarla |

#### Configurar la métrica

Cada métrica tiene los siguientes campos de configuración:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Unidad** | Unidad de medida del indicador | %, minutos, unidades, $/mes, ppm, etc. |
| **Línea Base** | Valor del indicador antes de implementar la mejora (punto de partida) | 4.2 (si la tasa de defectos es 4.2%) |
| **Meta** | Valor objetivo que se espera alcanzar con la mejora | 1.5 (si se busca reducir a 1.5%) |

#### Registrar datos

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Haz clic en **"+ Registro"** dentro de la métrica | Se agrega una nueva fila de registro |
| 2 | Selecciona la **fecha** del registro | Usa el selector de calendario |
| 3 | Ingresa el **valor** medido en esa fecha | El dato se guarda automáticamente |

> **Importante:** Se necesitan **mínimo 2 registros** por métrica para que las gráficas de tendencia se generen en la fase Verificar. Se recomienda registrar datos de manera regular (diario, semanal o según la frecuencia de medición del indicador).

### 7.3 Pestaña: Observaciones

La bitácora de observaciones es un registro cronológico (tipo diario) donde se documentan hallazgos, incidencias y comentarios durante la ejecución de la prueba piloto.

**¿Qué documentar aquí?**

| Tipo de Observación | Ejemplo |
|---------------------|---------|
| Desviaciones del plan original | "Se modificó la secuencia de calibración por disponibilidad del técnico" |
| Hallazgos inesperados | "Se descubrió que la variación de temperatura también afecta las dimensiones" |
| Problemas encontrados | "El proveedor B entregó material fuera de especificación el día 3" |
| Comentarios del equipo | "Los operadores sugieren agregar un paso de verificación visual" |
| Resultados parciales | "Después de la primera semana, la tasa de defectos bajó a 3.1%" |

**Cómo agregar una observación:**

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Escribe la observación en el área de texto | Redacta con suficiente detalle para que sea útil después |
| 2 | Haz clic en **"Agregar"** | La observación se agrega a la bitácora con la fecha y hora actuales registradas automáticamente |

### 7.4 Completar la Fase Hacer

Una vez que hayas ejecutado las acciones, recopilado datos suficientes y documentado tus observaciones, haz clic en **"Marcar como Completada"** para avanzar a la fase Verificar. El progreso del proyecto subirá al 50%.

---

## 🔍 8. Fase 3 — Verificar (Check)

**Propósito:** Analizar los datos recopilados durante la fase Hacer, comparar los resultados contra los objetivos SMART definidos en la fase Planificar y documentar las lecciones aprendidas del ciclo.

Esta fase es de naturaleza analítica y reflexiva. Se divide en **3 pestañas**.

### 8.1 Pestaña: Resultados

Para cada métrica definida en la fase Hacer (que tenga al menos 2 registros), la aplicación genera automáticamente una **gráfica de tendencia** que muestra la evolución temporal de los valores.

#### Elementos de la gráfica

| Elemento Visual | Color / Estilo | Significado |
|----------------|----------------|-------------|
| **Línea base** | Roja punteada | Valor del indicador antes de la mejora (punto de partida) |
| **Meta** | Verde punteada | Valor objetivo que se espera alcanzar |
| **Valores reales** | Amarilla sólida | Datos registrados durante la prueba piloto, conectados cronológicamente |
| **Badge de tendencia** | Automático | Indica si el indicador está ↗ MEJORANDO, ↘ DECLINANDO o → ESTABLE comparando los últimos dos registros |

#### Resumen numérico de cada métrica

| Dato | Descripción |
|------|-------------|
| **Línea Base** | Valor inicial configurado |
| **Meta** | Valor objetivo configurado |
| **Actual** | Último valor registrado |
| **Tendencia** | Dirección del cambio entre los dos últimos registros, considerando si la meta es mayor o menor que la línea base |

#### Análisis de Resultados

Debajo de las gráficas se encuentra un área de texto donde puedes escribir tu análisis cualitativo de los resultados. Este análisis complementa los datos numéricos con tu interpretación experta.

| Pregunta guía para el análisis | Propósito |
|--------------------------------|-----------|
| ¿Se alcanzaron las metas numéricas? | Confirmar o negar el cumplimiento del objetivo |
| ¿Qué factores influyeron positivamente? | Identificar qué fue clave para el éxito |
| ¿Qué factores limitaron los resultados? | Identificar barreras u obstáculos |
| ¿Hay datos atípicos que requieran investigación? | Detectar anomalías o mediciones sospechosas |
| ¿Son los resultados sostenibles en el tiempo? | Evaluar la viabilidad a largo plazo |

### 8.2 Pestaña: Evaluación

Esta pestaña permite evaluar formalmente si cada objetivo SMART definido en la fase Planificar fue alcanzado o no.

**Para cada objetivo SMART:**

| Control | Opciones | Efecto Visual |
|---------|----------|---------------|
| **Botón "✓ Alcanzado"** | Marca el objetivo como cumplido | El borde izquierdo cambia a color verde 🟢 |
| **Botón "✗ No Alcanzado"** | Marca el objetivo como no cumplido | El borde izquierdo cambia a color rojo 🔴 |
| **Notas de evaluación** | Área de texto | Espacio para detallar por qué sí o por qué no se alcanzó el objetivo |

> **Consejo:** Sé lo más específico y honesto posible en las notas de evaluación. Esta información es valiosa tanto para estandarizar lo que funcionó como para ajustar lo que no.

### 8.3 Pestaña: Lecciones Aprendidas

Las lecciones aprendidas son uno de los productos más valiosos del ciclo PDCA. Documentan el conocimiento generado durante el proceso para que pueda ser reutilizado en futuros ciclos.

**¿Qué registrar como lección aprendida?**

| Categoría | Ejemplo |
|-----------|---------|
| Lo que funcionó bien y por qué | "La calibración semanal demostró ser la frecuencia óptima para mantener tolerancias" |
| Lo que no funcionó y qué se aprendió | "El cambio de proveedor generó más variación de la esperada en la primera semana" |
| Lo que se haría diferente | "Incluir al equipo de mantenimiento desde la fase de planificación, no solo en la ejecución" |
| Mejores prácticas descubiertas | "Registrar métricas al inicio y al final de cada turno reduce la variabilidad entre turnos" |
| Recomendaciones para futuros ciclos | "Considerar factores ambientales como la temperatura para procesos de soldadura" |

**Cómo agregar lecciones:**

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Escribe la lección en el campo de texto | Redacta con claridad para que sea comprensible fuera de contexto |
| 2 | Presiona **Enter** o haz clic en **"Agregar"** | La lección se añade a la lista de aprendizajes del ciclo |

### 8.4 Completar la Fase Verificar

Al finalizar el análisis, haz clic en **"Marcar como Completada"** para avanzar a la fase Actuar. El progreso del proyecto subirá al 75%.

---

## 🚀 9. Fase 4 — Actuar (Act)

**Propósito:** Tomar una decisión estratégica basada en los resultados y lecciones de las fases anteriores. Hay dos caminos posibles: estandarizar la mejora exitosa o ajustar el enfoque e iniciar un nuevo ciclo.

### 9.1 La Decisión

La fase Actuar presenta dos opciones centrales que definen el cierre del ciclo:

| Opción | Icono | Cuándo Usarla | Resultado |
|--------|-------|---------------|-----------|
| **Estandarizar** | ✅ | Los resultados de la prueba piloto fueron satisfactorios y los objetivos se alcanzaron | Se documenta la mejora como nuevo estándar para implementación permanente |
| **Ajustar y Reiniciar** | 🔄 | Los resultados no fueron satisfactorios o la hipótesis original no funcionó | Se documentan los ajustes necesarios y se inicia un nuevo ciclo con los aprendizajes |

### 9.2 Camino A: Estandarizar

Si se selecciona la opción **Estandarizar**, se abre una sección donde puedes documentar los nuevos estándares que resultaron de la mejora exitosa.

**¿Qué documentar al estandarizar?**

| Tipo de Estándar | Ejemplo |
|------------------|---------|
| Nuevo Procedimiento Operativo Estándar (SOP) | "SOP-CAL-005: Calibración semanal de instrumentos de medición en estación 5" |
| Plan de capacitación | "Capacitar a los 3 turnos de producción en el nuevo procedimiento de calibración" |
| Cambio permanente en el proceso | "Integrar verificación dimensional automática cada 50 piezas" |
| Actualización de documentación | "Actualizar la hoja de proceso HDP-L3-005 con los nuevos parámetros" |
| Controles visuales | "Instalar tablero de control con indicadores de vida útil de herramental" |

**Cómo documentar estándares:**

| Paso | Acción |
|------|--------|
| 1 | Escribe el nuevo estándar o procedimiento en el campo de texto |
| 2 | Haz clic en **"Agregar"** |
| 3 | La fecha de registro se asigna automáticamente |

### 9.3 Camino B: Ajustar y Reiniciar

Si se selecciona la opción **Ajustar y Reiniciar**, se abre una sección donde documentar los ajustes que se aplicarán en el siguiente ciclo.

**¿Qué documentar al ajustar?**

| Tipo de Ajuste | Ejemplo |
|----------------|---------|
| Por qué la hipótesis original no funcionó | "La causa raíz identificada era correcta, pero la solución implementada fue insuficiente" |
| Nuevas hipótesis basadas en los aprendizajes | "Se requiere también reemplazar el herramental además de solo calibrar" |
| Ajustes al enfoque o metodología | "Incluir análisis de variabilidad de materiales en el siguiente diagnóstico" |
| Recursos adicionales necesarios | "Solicitar presupuesto para herramental nuevo y equipo de inspección óptica" |

**Proceso de reinicio:**

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Documenta cada ajuste propuesto haciendo clic en "Agregar" | Los ajustes se registran en la lista |
| 2 | Haz clic en **"🔄 Reiniciar Ciclo PDCA"** | Se guarda un registro en el historial de ciclos y se limpian las fases Hacer, Verificar y Actuar para comenzar un nuevo ciclo |

> **¿Qué pasa al reiniciar?** Se conserva la fase Planificar (problema, causas, objetivos), se limpian las fases Hacer, Verificar y Actuar, y el proyecto vuelve a la fase Planificar para que puedas ajustar el plan con base en los aprendizajes.

### 9.4 Historial de Ciclos

Si un proyecto ha pasado por múltiples iteraciones del ciclo PDCA, la página muestra un **timeline cronológico** con:

| Dato del Historial | Descripción |
|--------------------|-------------|
| **Fecha del ciclo** | Cuándo se cerró ese ciclo |
| **Decisión tomada** | Si se estandarizó la mejora o se ajustó para reiniciar |
| **Métricas al cierre** | Valores de los indicadores al momento de cerrar el ciclo |

### 9.5 Finalizar Ciclo

Si ya no se realizarán más iteraciones, haz clic en **"Finalizar Ciclo"** para marcar el proyecto como completado (progreso 100%). El proyecto dejará de aparecer como activo y se contabilizará en la estadística de "Completados" del panel de Inicio.

---

## 📈 10. Dashboards

La sección de Dashboards proporciona una vista consolidada y ejecutiva de todos los proyectos PDCA en el sistema. Es útil para líderes y gerentes que necesitan una visión global del portafolio de mejoras.

### 10.1 Tarjetas de Resumen Global

Cuatro tarjetas KPI presentan los indicadores clave del sistema completo:

| Tarjeta | Indicador | Detalle |
|---------|-----------|---------|
| **Proyectos** | Total de proyectos en el sistema | Incluye el conteo de cuántos están completados |
| **Acciones** | Acciones completadas del total | Suma de todas las acciones completadas en todos los planes de acción vs. el total de acciones definidas |
| **Objetivos SMART** | Total de objetivos definidos | Suma de todos los objetivos SMART de todos los proyectos |
| **Lecciones** | Total de lecciones aprendidas | Suma de todas las lecciones documentadas en todos los proyectos |

### 10.2 Gráficas de Análisis

| Tipo de Gráfica | Formato | Qué Muestra | Utilidad |
|-----------------|---------|-------------|----------|
| **Distribución por Fase** | Gráfico de pastel (pie) | Cuántos proyectos hay actualmente en cada una de las 4 fases del ciclo PDCA | Identificar cuellos de botella o fases donde se acumulan los proyectos |
| **Progreso por Proyecto** | Barras horizontales | Porcentaje de avance de cada proyecto individual (0% a 100%) | Comparar el avance relativo de cada proyecto del portafolio |
| **Acciones del Plan** | Barras apiladas | Para cada proyecto, muestra acciones completadas vs. pendientes | Evaluar el nivel de ejecución del plan de acción de cada proyecto |
| **Tendencias de Métricas** | Gráficas de línea | Gráficas temporales de todas las métricas activas que tienen datos registrados | Visualizar la evolución de los indicadores a lo largo del tiempo |

### 10.3 Tabla Resumen

En la parte inferior del dashboard se muestra una tabla completa con todos los proyectos del sistema:

| Columna | Descripción |
|---------|-------------|
| **Nombre** | Nombre del proyecto de mejora |
| **Fase Actual** | Badge de color indicando en qué fase se encuentra (Planificar, Hacer, Verificar, Actuar) |
| **Progreso** | Barra visual de porcentaje de avance |
| **Acciones** | Formato "completadas / total" de las acciones del plan |
| **Fecha de Creación** | Cuándo se creó el proyecto |

---

## 📖 11. Glosario de Términos

| Término | Definición |
|---------|------------|
| **PDCA** | Plan-Do-Check-Act — Ciclo iterativo de mejora continua de Deming |
| **Ciclo de Deming** | Nombre alternativo del ciclo PDCA, en honor al Dr. W. Edwards Deming |
| **Causa Raíz** | La razón fundamental por la que ocurre un problema; eliminarla previene la recurrencia |
| **5 Porqués** | Técnica de análisis de causa raíz que pregunta "¿por qué?" iterativamente para llegar al origen del problema |
| **Diagrama de Ishikawa** | Herramienta de análisis causa-efecto que clasifica las causas en 6 categorías (6M). También llamado Diagrama de Espina de Pescado |
| **6M** | Las seis categorías del Diagrama de Ishikawa: Mano de Obra, Maquinaria, Método, Material, Medio Ambiente, Medición |
| **Objetivos SMART** | Objetivos que son Específicos (Specific), Medibles (Measurable), Alcanzables (Achievable), Relevantes (Relevant) y con Tiempo definido (Time-bound) |
| **Plan de Acción** | Lista estructurada de tareas concretas con responsables, recursos y fechas límite |
| **Prueba Piloto** | Implementación a pequeña escala de una solución para validar su efectividad antes de un despliegue completo |
| **Línea Base** | Valor del indicador antes de implementar la mejora; sirve como punto de referencia para comparación |
| **Meta** | Valor objetivo que se espera alcanzar con la implementación de la mejora |
| **KPI** | Key Performance Indicator — Indicador Clave de Desempeño utilizado para medir el rendimiento |
| **Estandarización** | Proceso de documentar y formalizar una mejora exitosa como nuevo procedimiento operativo estándar |
| **SOP** | Standard Operating Procedure — Procedimiento Operativo Estándar |
| **Kaizen** | Término japonés que significa "cambio para mejor" o "mejora continua" |
| **Lean Manufacturing** | Filosofía de producción enfocada en la eliminación de desperdicios y la maximización del valor |
| **Six Sigma** | Metodología de mejora de procesos que busca reducir la variabilidad y los defectos |
| **Stepper** | Componente visual de la interfaz que muestra los 4 pasos del ciclo y permite navegar entre ellos |
| **localStorage** | Mecanismo de almacenamiento del navegador web que permite guardar datos de forma persistente entre sesiones |
| **Badge** | Etiqueta visual con color que indica el estado o categoría de un elemento en la interfaz |

---

## ❓ 12. Preguntas Frecuentes

| Nº | Pregunta | Respuesta |
|----|----------|-----------|
| 1 | **¿Cómo veo los datos de un proyecto diferente?** | Navega a **Proyectos** en la barra lateral y haz clic en la tarjeta del proyecto que desees. Se activará automáticamente y la navegación te llevará a su fase actual. |
| 2 | **¿Puedo tener múltiples ciclos activos?** | Sí. Puedes crear varios proyectos y cada uno tiene su propio progreso independiente. Sin embargo, solo un proyecto se muestra a la vez en las páginas de fase (el que esté activo). |
| 3 | **¿Dónde se guardan los datos?** | En el **localStorage** del navegador. Los datos persisten entre sesiones pero son locales a ese navegador. Si cambias de navegador o computadora, los datos no se transferirán. |
| 4 | **¿Cómo reseteo los datos demo?** | Abre la consola del navegador (F12 → Console), escribe `localStorage.removeItem('nexia-pdca-data')` y recarga la página. Se cargarán los datos demo frescos. |
| 5 | **¿Puedo volver a una fase anterior?** | Sí. Usa el **stepper de fases** haciendo clic en los círculos numerados (1-4), o navega directamente desde la barra lateral. |
| 6 | **¿Qué significa cada color de fase?** | 🔵 **Azul** = Planificar (Plan), 🟢 **Verde** = Hacer (Do), 🟡 **Ámbar** = Verificar (Check), 🟣 **Púrpura** = Actuar (Act). |
| 7 | **¿Puedo editar datos de una fase ya completada?** | Sí. Navega a la fase usando el stepper o la barra lateral. Los datos siguen siendo editables aunque la fase esté marcada como completada. También puedes revertir el estado de completada haciendo clic en "✓ Fase Completada". |
| 8 | **¿Cuántas métricas puedo crear por proyecto?** | No hay un límite definido. Puedes crear tantas métricas como necesites para medir el impacto de tu proyecto de mejora. |
| 9 | **¿Qué pasa si reinicio el ciclo?** | Se guarda un registro en el historial de ciclos del proyecto. Las fases Hacer, Verificar y Actuar se limpian. La fase Planificar se conserva para que ajustes el plan original con los aprendizajes. |
| 10 | **¿Puedo exportar mis datos?** | Actualmente la aplicación no incluye una función de exportación nativa. Sin embargo, puedes copiar los datos del localStorage desde la consola del navegador para respaldo. |

---

## 🔁 13. Flujo Recomendado del Ciclo PDCA

A continuación se presenta el recorrido completo recomendado para un ciclo exitoso de mejora continua con NexIA PDCA:

### Paso 1: Crear el Proyecto

| Actividad | Lugar en la App | Detalle |
|-----------|-----------------|---------|
| Crear un nuevo proyecto | Proyectos → "+ Nuevo Proyecto" | Asigna un nombre descriptivo y una descripción que resuma el objetivo |

### Paso 2: Planificar (Fase 1)

| Actividad | Pestaña | Entregable |
|-----------|---------|------------|
| Definir el problema | Problema | Descripción clara con datos cuantitativos del problema u oportunidad |
| Analizar causa raíz | Causa Raíz | Los 5 Porqués completados y las 6M del Diagrama de Ishikawa con las causas identificadas |
| Establecer objetivos | Objetivos SMART | Al menos un objetivo que cumpla los 5 criterios SMART |
| Crear plan de acción | Plan de Acción | Tabla de actividades con responsables, recursos y fechas |
| Avanzar a la siguiente fase | Botón superior | Clic en "Marcar como Completada" |

### Paso 3: Hacer (Fase 2)

| Actividad | Pestaña | Entregable |
|-----------|---------|------------|
| Ejecutar acciones | Ejecución | Cada acción con estatus actualizado y notas de ejecución |
| Definir y medir métricas | Datos | Métricas creadas con línea base, meta y al menos 2 registros de datos |
| Documentar hallazgos | Observaciones | Bitácora con hallazgos, incidencias y comentarios del equipo |
| Avanzar a la siguiente fase | Botón superior | Clic en "Marcar como Completada" |

### Paso 4: Verificar (Fase 3)

| Actividad | Pestaña | Entregable |
|-----------|---------|------------|
| Analizar gráficas | Resultados | Interpretación de las tendencias y redacción del análisis cualitativo |
| Evaluar objetivos | Evaluación | Cada objetivo SMART marcado como alcanzado o no alcanzado con notas |
| Registrar aprendizajes | Lecciones | Lista de lecciones aprendidas útiles para el futuro |
| Avanzar a la siguiente fase | Botón superior | Clic en "Marcar como Completada" |

### Paso 5: Actuar (Fase 4)

| Actividad | Opción | Entregable |
|-----------|--------|------------|
| Tomar la decisión | Estandarizar o Ajustar y Reiniciar | Selección del camino a seguir |
| Documentar estándares o ajustes | Según la decisión | Lista de nuevos SOPs, planes de capacitación, o ajustes al enfoque |
| Cerrar o reiniciar el ciclo | Finalizar Ciclo o Reiniciar | Proyecto completado al 100% o nuevo ciclo iniciado |

---

*NexIA PDCA v1.0.0 — Sistema de Gestión de Mejora Continua*
*Desarrollado con ❤️ por NexIA*
