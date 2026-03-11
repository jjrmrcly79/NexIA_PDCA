# 📘 Manual de Usuario — NexIA PDCA

**Sistema de Mejora Continua con Ciclo Plan-Do-Check-Act**

> NexIA PDCA te permite gestionar proyectos de mejora continua usando la metodología PDCA de Deming. Desde la definición del problema hasta la estandarización de soluciones, cada paso está documentado y medido.

---

## 📑 Tabla de Contenido

1. [Inicio Rápido](#-inicio-rápido)
2. [Navegación General](#-navegación-general)
3. [Página de Inicio](#-página-de-inicio)
4. [Proyectos PDCA](#-proyectos-pdca)
5. [Fase 1: Planificar (Plan)](#-fase-1-planificar-plan)
6. [Fase 2: Hacer (Do)](#-fase-2-hacer-do)
7. [Fase 3: Verificar (Check)](#-fase-3-verificar-check)
8. [Fase 4: Actuar (Act)](#-fase-4-actuar-act)
9. [Dashboards](#-dashboards)
10. [Preguntas Frecuentes](#-preguntas-frecuentes)

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ instalado
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

### Instalación y Ejecución
```bash
cd NexIA_PDCA
npm install
npm run dev
```
La aplicación estará disponible en **http://localhost:5173/**

### Primeros Pasos
1. Abre la aplicación en tu navegador
2. Ve a **Proyectos** en la barra lateral
3. Haz clic en **"+ Nuevo Proyecto"** para crear tu primer ciclo PDCA
4. Haz clic en la tarjeta del proyecto para abrirlo en su fase actual
5. Sigue las 4 fases: Planificar → Hacer → Verificar → Actuar

> **Nota:** La aplicación incluye 2 proyectos demo con datos de ejemplo para facilitar la exploración.

---

## 🧭 Navegación General

### Barra Lateral
La barra lateral izquierda es fija y contiene 7 secciones:

| Icono | Sección | Descripción |
|-------|---------|-------------|
| 🏠 | **Inicio** | Panel principal con estadísticas y accesos directos |
| 📁 | **Proyectos** | Gestión de ciclos PDCA (crear, activar, eliminar) |
| 📋 | **Planificar** | Fase 1 — Definir problema, causas raíz y plan de acción |
| ⚡ | **Hacer** | Fase 2 — Ejecutar plan piloto y recopilar datos |
| 🔍 | **Verificar** | Fase 3 — Analizar resultados y evaluar objetivos |
| 🚀 | **Actuar** | Fase 4 — Estandarizar o ajustar para nuevo ciclo |
| 📈 | **Dashboards** | Vista global de métricas y tendencias |

### Indicador de Fase (Stepper)
En cada página de fase verás un stepper con 4 círculos numerados:

```
  ①          ②          ③          ④
PLANIFICAR   HACER    VERIFICAR   ACTUAR
```

- **Círculo verde con ✓** = Fase completada
- **Círculo grande resaltado** = Fase actual
- **Círculo pequeño gris** = Fase pendiente
- **Clic en cualquier círculo** = Navegar directamente a esa fase

### Persistencia de Datos
Todos los datos se guardan automáticamente en el navegador (localStorage). No necesitas guardar manualmente. Los datos persisten entre sesiones.

---

## 🏠 Página de Inicio

La página de Inicio muestra un resumen ejecutivo de tu sistema PDCA:

### Estadísticas
- **Proyectos Activos** — Ciclos actualmente en progreso
- **Completados** — Ciclos que han terminado las 4 fases
- **Proyectos Totales** — Total de ciclos en el sistema
- **Progreso Promedio** — Porcentaje promedio de avance

### Visual PDCA
Un diagrama de 4 cuadrantes muestra el ciclo Plan-Do-Check-Act como referencia visual.

### Módulos
Tarjetas de acceso rápido a cada sección de la aplicación. Haz clic en cualquiera para navegar directamente.

### Proyectos Recientes
Vista rápida de los últimos proyectos con su fase actual y porcentaje de avance.

---

## 📁 Proyectos PDCA

Esta es la sección central para gestionar tus ciclos de mejora continua.

### Crear un Proyecto
1. Haz clic en **"+ Nuevo Proyecto"**
2. Ingresa el **nombre** del proyecto (ej: "Reducción de defectos en Línea 3")
3. Agrega una **descripción** con el objetivo general
4. Haz clic en **"Crear Proyecto"**

El nuevo proyecto se activa automáticamente y comienza en la fase **Planificar**.

### Tarjetas de Proyecto
Cada proyecto muestra:
- **Nombre y descripción**
- **Badge de fase** — Indica en qué fase se encuentra (Plan, Hacer, Verificar, Actuar)
- **Fecha de creación**
- **Barra de progreso** — Porcentaje completado (25% por cada fase finalizada)
- **Indicadores de fase** — Muestra ✓ en las fases completadas

### Acciones
| Acción | Descripción |
|--------|-------------|
| **Clic en la tarjeta** | Activa el proyecto y navega a su fase actual |
| **Ir a [Fase] →** | Navega directamente a la fase donde está el proyecto activo |
| **Activar y abrir** | Activa un proyecto inactivo y navega a su fase |
| **Eliminar** | Elimina el proyecto (con confirmación) |

> **Importante:** Solo un proyecto puede estar activo a la vez. Las páginas de fase (Planificar, Hacer, Verificar, Actuar) siempre muestran los datos del proyecto activo.

---

## 📋 Fase 1: Planificar (Plan)

**Objetivo:** Sentar las bases, comprender el problema y crear una hoja de ruta.

Esta fase tiene 4 pestañas:

### Pestaña: Problema
Define de forma clara y concisa el problema u oportunidad de mejora.

**Cómo usar:**
- Escribe en el área de texto la descripción detallada del problema
- Incluye datos cuantitativos cuando sea posible (ej: "tasa de defectos del 4.2%")
- El texto se guarda automáticamente

### Pestaña: Causa Raíz

#### Los 5 Porqués
Técnica para llegar a la causa raíz preguntando "¿por qué?" repetidamente.

**Cómo usar:**
1. En el campo **"¿Por qué 1?"** escribe el síntoma principal
2. En cada campo siguiente, responde por qué ocurre el anterior
3. Al llegar al 5° porqué, habrás identificado la causa raíz

**Ejemplo:**
```
¿Por qué 1? Las piezas salen con dimensiones fuera de tolerancia
¿Por qué 2? El herramental de la estación 5 está desgastado
¿Por qué 3? No existe un programa de mantenimiento preventivo
¿Por qué 4? El departamento no tiene visibilidad del desgaste
¿Por qué 5? No se ha implementado un sistema de monitoreo
```

#### Diagrama de Ishikawa (6M)
Organiza las causas potenciales en 6 categorías:

| Categoría | Ejemplos |
|-----------|----------|
| **Mano de Obra** | Falta de capacitación, rotación de personal |
| **Maquinaria** | Desgaste de herramental, calibración irregular |
| **Método** | Procedimiento desactualizado, sin checklist |
| **Material** | Variación de proveedor, especificaciones incorrectas |
| **Medio Ambiente** | Temperatura variable, iluminación deficiente |
| **Medición** | Instrumentos sin certificar, frecuencia inadecuada |

**Cómo usar:**
1. Haz clic en cualquier categoría para expandirla
2. Escribe una causa en el campo de texto
3. Haz clic en **"+"** para agregarla
4. Puedes eliminar causas con el botón **"✕"**

### Pestaña: Objetivos SMART
Define objetivos que sean Específicos, Medibles, Alcanzables, Relevantes y con Tiempo definido.

**Campos:**
- **Específico** — ¿Qué exactamente quieres lograr?
- **Medible** — ¿Cómo cuantificarás el resultado?
- **Alcanzable** — ¿Con qué recursos/métodos lo lograrás?
- **Relevante** — ¿Por qué es importante?
- **Tiempo** — ¿En qué plazo se debe completar?

Haz clic en **"+ Agregar Objetivo"** para definir múltiples objetivos.

### Pestaña: Plan de Acción
Crea una tabla de actividades con responsables y fechas.

**Columnas:**
| Campo | Descripción |
|-------|-------------|
| **Actividad** | Tarea específica a realizar |
| **Responsable** | Persona encargada |
| **Recursos** | Equipos, materiales o presupuesto necesarios |
| **Fecha Límite** | Fecha de entrega esperada |
| **Completada** | Check para marcar cuando esté terminada |

**Acciones:**
- **"+ Agregar Acción"** — Agrega una nueva fila a la tabla
- **"✕"** — Elimina una acción

### Completar la Fase
Cuando termines de planificar, haz clic en **"Marcar como Completada"**. Esto moverá el proyecto a la fase **Hacer**.

---

## ⚡ Fase 2: Hacer (Do)

**Objetivo:** Ejecutar el plan como prueba piloto a pequeña escala.

Esta fase tiene 3 pestañas:

### Pestaña: Ejecución
Muestra cada acción del Plan de Acción con el estado de su ejecución.

**Para cada acción puedes:**
1. Cambiar el **estatus** con el selector:
   - 🔘 **Pendiente** — Aún no iniciada
   - 🟡 **En Progreso** — En curso
   - 🟢 **Completado** — Terminada exitosamente
   - 🔴 **Bloqueado** — Detenida por algún impedimento
2. Agregar **notas de ejecución** en el campo de texto

> Si no aparecen acciones, regresa a la fase **Planificar** y agrega acciones al plan.

### Pestaña: Datos
Recolecta métricas cuantitativas durante la prueba piloto.

**Crear una métrica:**
1. Escribe el nombre de la métrica (ej: "Tasa de Defectos")
2. Haz clic en **"+ Agregar"**
3. Configura:
   - **Unidad** — %, min, uds, $/mes, etc.
   - **Línea Base** — Valor antes de la mejora
   - **Meta** — Valor objetivo esperado

**Registrar datos:**
1. Haz clic en **"+ Registro"** dentro de la métrica
2. Selecciona la **fecha** del registro
3. Ingresa el **valor** medido
4. Repite cada día/semana según tu frecuencia de medición

> **Tip:** Mínimo 2 registros por métrica para visualizar gráficas en la fase Verificar.

### Pestaña: Observaciones
Bitácora cronológica para documentar hallazgos durante la prueba piloto.

**Qué documentar:**
- Desviaciones del plan original
- Hallazgos inesperados
- Problemas encontrados
- Comentarios del equipo
- Resultados parciales

**Cómo usar:**
1. Escribe la observación en el área de texto
2. Haz clic en **"Agregar"**
3. La fecha y hora se registran automáticamente

### Completar la Fase
Haz clic en **"Marcar como Completada"** para avanzar a **Verificar**.

---

## 🔍 Fase 3: Verificar (Check)

**Objetivo:** Analizar resultados, comparar contra objetivos y documentar aprendizajes.

Esta fase tiene 3 pestañas:

### Pestaña: Resultados
Visualización automática de las métricas recopiladas en la fase Hacer.

**Cada métrica muestra:**
- **Gráfica de línea** con la tendencia temporal de los valores
- **Línea roja punteada** — Línea base (valor antes de la mejora)
- **Línea verde punteada** — Meta (valor objetivo)
- **Línea amarilla** — Valores reales registrados
- **Badge de tendencia** — ↗ MEJORANDO, ↘ DECLINANDO, o → ESTABLE
- **Valores resumidos** — Línea Base, Meta y Actual

**Análisis de Resultados:**
Debajo de las gráficas hay un área de texto para escribir tu análisis qualitativo:
- ¿Se alcanzaron las metas?
- ¿Qué factores influyeron?
- ¿Hay datos atípicos que investigar?

### Pestaña: Evaluación
Evalúa si cada objetivo SMART fue alcanzado.

**Para cada objetivo:**
1. Haz clic en **"✓ Alcanzado"** si se cumplió la meta
2. Haz clic en **"✗ No Alcanzado"** si no se cumplió
3. Agrega **notas de evaluación** con el detalle

El borde izquierdo cambia de color:
- 🟢 Verde = Objetivo alcanzado
- 🔴 Rojo = Objetivo no alcanzado

### Pestaña: Lecciones
Documenta los aprendizajes clave del ciclo.

**Qué registrar:**
- ¿Qué funcionó bien y por qué?
- ¿Qué no funcionó y qué se aprendió?
- ¿Qué haría diferente el equipo?
- Mejores prácticas descubiertas

**Cómo usar:**
1. Escribe la lección en el campo de texto
2. Presiona **Enter** o haz clic en **"Agregar"**

### Completar la Fase
Haz clic en **"Marcar como Completada"** para avanzar a **Actuar**.

---

## 🚀 Fase 4: Actuar (Act)

**Objetivo:** Decidir el siguiente paso: estandarizar la mejora o ajustar el enfoque para un nuevo ciclo.

### Decisión
Se presentan dos opciones:

| Opción | Cuándo usarla |
|--------|---------------|
| ✅ **Estandarizar** | Los resultados fueron satisfactorios. Documentar y desplegar permanentemente. |
| 🔄 **Ajustar y Reiniciar** | Los resultados no fueron satisfactorios. Rediseñar plan con los aprendizajes. |

Haz clic en la opción que corresponda.

### Si eliges Estandarizar
Se abre una sección para documentar los **nuevos estándares**:
- Nuevos procedimientos operativos estándar (SOP)
- Planes de capacitación para el equipo
- Cambios permanentes en el proceso
- Actualizaciones a documentación

**Cómo usar:**
1. Escribe cada nuevo estándar o procedimiento
2. Haz clic en **"Agregar"**
3. La fecha de registro se agrega automáticamente

### Si eliges Ajustar y Reiniciar
Se abre una sección para documentar **ajustes para el nuevo ciclo**:
- Por qué la hipótesis original no funcionó
- Nuevas hipótesis basadas en los aprendizajes
- Ajustes al enfoque o metodología

**Cómo usar:**
1. Documenta cada ajuste propuesto
2. Haz clic en **"Agregar"**
3. Cuando tengas los ajustes definidos, haz clic en **"🔄 Reiniciar Ciclo PDCA"**

> **Al reiniciar:** Se guarda un registro en el historial de ciclos y se limpian las fases Hacer, Verificar y Actuar para comenzar un nuevo ciclo con base en los ajustes.

### Historial de Ciclos
Si el proyecto ha pasado por múltiples ciclos, se muestra un timeline con:
- Fecha del ciclo
- Decisión tomada (Estandarizado o Ajustado)
- Métricas al momento del cierre

### Finalizar Ciclo
Haz clic en **"Finalizar Ciclo"** para marcar el proyecto como completado.

---

## 📈 Dashboards

Vista consolidada de todos los proyectos PDCA en el sistema.

### Tarjetas de Resumen
| Tarjeta | Qué muestra |
|---------|-------------|
| **Proyectos** | Total de proyectos y cuántos están completados |
| **Acciones** | Acciones completadas del total de planes de acción |
| **Objetivos SMART** | Total de objetivos definidos globalmente |
| **Lecciones** | Total de lecciones aprendidas documentadas |

### Gráficas

#### Distribución por Fase (Pie)
Muestra cuántos proyectos hay en cada fase del ciclo PDCA.

#### Progreso por Proyecto (Barras Horizontales)
Compara el porcentaje de avance de cada proyecto (0-100%).

#### Acciones del Plan (Barras Apiladas)
Muestra acciones completadas vs. pendientes por proyecto.

#### Tendencias de Métricas (Líneas)
Gráficas de tendencia de todas las métricas activas con datos.

### Tabla Resumen
Lista completa de proyectos con:
- Nombre
- Fase actual (con badge de color)
- Barra de progreso
- Acciones completadas/total
- Fecha de creación

---

## ❓ Preguntas Frecuentes

### ¿Cómo veo los datos de un proyecto diferente?
Ve a **Proyectos** y haz clic en la tarjeta del proyecto que quieras ver. Se activará y te llevará a su fase actual.

### ¿Puedo tener múltiples ciclos activos?
Sí, puedes crear varios proyectos. Cada uno tiene su propio progreso independiente. Solo un proyecto se muestra a la vez en las páginas de fase.

### ¿Dónde se guardan los datos?
En el **localStorage** del navegador. Los datos persisten entre sesiones pero son locales a ese navegador.

### ¿Cómo reseteo los datos demo?
Abre la consola del navegador (F12 → Console) y ejecuta:
```javascript
localStorage.removeItem('nexia-pdca-data')
```
Luego recarga la página. Se cargarán los datos demo frescos.

### ¿Puedo volver a una fase anterior?
Sí. Usa el **stepper de fases** haciendo clic en los círculos numerados (1-4) o la navegación de la barra lateral.

### ¿Qué significa cada color de fase?
- 🔵 **Azul** — Planificar (Plan)
- 🟢 **Verde** — Hacer (Do)
- 🟡 **Ámbar** — Verificar (Check)
- 🟣 **Púrpura** — Actuar (Act)

---

## 📊 Flujo Recomendado del Ciclo PDCA

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   1. PLANIFICAR                                     │
│   ├─ Definir el problema                            │
│   ├─ Analizar causa raíz (5 Porqués + Ishikawa)     │
│   ├─ Establecer objetivos SMART                     │
│   └─ Crear plan de acción                           │
│                    ↓                                 │
│   2. HACER                                          │
│   ├─ Ejecutar el plan como prueba piloto             │
│   ├─ Recopilar datos y métricas                     │
│   └─ Documentar observaciones                       │
│                    ↓                                 │
│   3. VERIFICAR                                      │
│   ├─ Analizar gráficas de tendencia                 │
│   ├─ Evaluar si se cumplieron los objetivos         │
│   └─ Documentar lecciones aprendidas                │
│                    ↓                                 │
│   4. ACTUAR                                         │
│   ├─ ¿Resultados satisfactorios?                    │
│   │   SÍ → Estandarizar y desplegar                 │
│   │   NO → Ajustar y reiniciar ciclo                │
│   └─ Documentar decisión                            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

*NexIA PDCA v1.0.0 — Sistema de Mejora Continua*
*Desarrollado con ❤️ por NexIA*
