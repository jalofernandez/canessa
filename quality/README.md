# Evidencias de la migración

Fecha: 19/11/2026. Estas comprobaciones corresponden a la versión React en la
rama de migración; no certifican que se haya publicado en producción.

- `performance-summary.json`: tres mediciones consecutivas Lighthouse móvil sobre
  el mismo artefacto de portada anterior al último ajuste del escaneo Tailwind.
  La repetición sobre el artefacto final quedó pendiente al bloquearse la revisión
  automática por límite de gasto. Son resultados preliminares. Mediana: rendimiento 95; accesibilidad, buenas
  prácticas y SEO 100. CLS 0. Los datos son de laboratorio, sin datos de INP real.
  Los informes completos se conservan localmente como lighthouse-mobile-1/2/3.json,
  ignorados en Git para evitar versionar varios MB de datos repetidos.
- `production-dependency-audit.json`: 0 avisos en los 11 paquetes transitivos de
  ejecución evaluados por pnpm audit. Esto no equivale a garantizar ausencia de
  vulnerabilidades aún no conocidas o de errores propios.
- `dependency-audit.json`: cuatro avisos moderados y ninguno alto/crítico en el
  conjunto, todos bajo firebase-tools (dependencia de desarrollo): uuid,
  @opentelemetry/core, glob y minimatch. Sus enlaces y rutas exactas están en JSON.
  Estas librerías de CLI no forman parte del bundle del navegador. Los comandos
  de Hosting usan rutas y patrones controlados; Pub/Sub no se usa. Esta es una
  valoración de exposición para este proyecto, no una declaración de que los
  avisos sean falsos. No se fuerzan versiones mayores transitivas incompatibles
  para silenciar la auditoría. Revisar nuevas versiones de la CLI antes de cada
  publicación y mantener las actualizaciones de dependencias.
- `firebase-baseline.json`: lectura autenticada de dominios y releases, sin
  cambios en Hosting. Live: release 1646319103546244 del 03/03/2022, versión
  9f882c141b399c43 FINALIZED. Dominio principal activo, sin dominio www en Hosting.
- `screenshots/`: capturas locales a 320, 390, 768 y 1280 px generadas por las
  pruebas de layout; ignoradas en Git. El informe de Playwright también es local.

Validación funcional: 7 pruebas Vitest correctas; 41 E2E correctas y 3 casos
omitidos por ser exclusivos de otro tamaño/proyecto. Las 15 rutas se revisaron
con axe para WCAG 2 A/AA y 2.1 A/AA, en Chromium móvil y escritorio. Esto no
sustituye una auditoría manual completa con tecnologías de asistencia.

También se comprobaron navegación cliente sin recarga completa, HTML sin JS,
404 real, redirect /mascotactiva, metadatos, noindex del bono, CSP, recursos,
menú y diálogo por teclado y una transición representativa desde un worker
heredado simulado. La comprobación específica final incluye recarga automática
de las páginas conocidas, sin borrar cachés ajenas. Sigue pendiente la comprobación con un perfil que conserve
el worker de la web Vue real y la revisión final de contenido.

La CI está preparada con permisos de lectura y actions fijadas a commits.
Su ejecución remota se informa por separado; no se da por pasada por existir
el YAML. No lleva credenciales de despliegue ni publica producción.
