# Plan de migración de Canessa a React

Fecha: 19 de noviembre de 2026

Estado: Implementación en curso en `migration/react-static`, worktree `.worktrees/canessa-react`. Producción sin cambios.

Continuar en el mismo repositorio, implementar en una rama/worktree dedicados y conservar el estado Vue en una copia independiente verificada. Mantener inicialmente Firebase Hosting y generar HTML estático para todas las rutas.

## Decisiones y alcance

### Repositorio

**Continuar en el repo actual.** Mismo negocio, dominio, contenido e historial. Rama y worktree React permiten comparar y revisar.

### Repo nuevo

**Reservarlo para un producto independiente.** Añadiría otro origin y flujo de publicación. No aporta por sí solo un backup de los cambios locales.

### Backup

**Copia completa independiente ya verificada.** Incluye el estado que una etiqueta sobre HEAD no capturaría. Falta copia fuera de este dispositivo.

### Alcance

**Actualizar tecnología, experiencia y contenido confirmado.** Conservar 15 URLs salvo decisión explícita. No añadir ecommerce, cuentas, agenda o formulario sin necesidad.

### Hosting

**Mantener Firebase en la primera versión React.** Permite aislar la reconstrucción de un cambio de proveedor. Reevaluar alternativas con consumo/factura reales.

## Backup existente y recuperación

Archivo: [/Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/canessa-vue-completo.tar.gz](/Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/canessa-vue-completo.tar.gz)

Tamaño: 308,669,750 bytes. HEAD preservado: `72bbb9144f72b7096f7f9dba63ee1e52f5eca1f5` en `master`.

SHA-256: `a470a6e7b73437271b57d319270f3b829ede05b809e9bd962a38baf4e3aaa633`.

Manifiesto y recuperación: [/Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/manifest.json](/Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/manifest.json) y [/Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/RECUPERACION.txt](/Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/RECUPERACION.txt).

La copia conserva 52.135 entradas, incluidos historial Git, cambios locales y archivos no versionados/ignorados. Se verificaron contenido, permisos y enlaces, y se restauró el historial Git temporalmente para comprobar HEAD y ejecutar git fsck --full.

Para recuperar, verificar SHA-256 y extraer en una carpeta nueva vacía. No extraer encima del checkout React. Este backup no garantiza compatibilidad futura del entorno antiguo y su dist local no se certifica idéntico a producción. Para recuperar el sitio público, se confirmará primero la release anterior de Firebase. Falta una segunda copia fuera de este dispositivo.

## Arquitectura objetivo

- **Aplicación: React 18 + TypeScript 5.** Componentes funcionales, tipos estrictos y datos estáticos tipados. Fijar parches compatibles y mantenidos al implementar.

- **Paquetes y entorno: pnpm 10 + Node 22.** packageManager y versión de Node exactos, pnpm-lock.yaml y CI con instalación congelada.

- **Build y rutas: Vite 7 + React Router 7, modo framework.** Prerenderizado de las 15 URLs y salida estática. Confirmar la integración exacta con estas versiones en el prototipo.

- **Estilos: Tailwind CSS 4 + tokens CSS + cn.** @tailwindcss/vite, clsx y tailwind-merge; componentes propios pequeños y accesibles.

- **Contenido: Datos locales y Markdown procesado.** Sin CMS ni estado remoto obligatorio. Convertir HTML de presentación del Markdown legado antes de migrar.

- **Pruebas: Vitest 4, happy-dom, Testing Library y E2E limitado.** Playwright para los flujos que requieren navegador real y pruebas del sitio estático.

- **Calidad: ESLint 9 flat + Prettier 3.** Formato, lint, tipos, pruebas y verificación del artefacto son controles separados.

- **Distribución: Firebase Hosting.** Dominio actual, static assets, previews y rollback. Salida propuesta build/client; verificarla en el scaffold.

- **Integraciones: Contacto por enlaces; mapa/analítica controlados.** GA4/GTM si aportan medición y con elección válida; sin SDKs de Firebase que no tengan uso.

La skill canessa-stack define las líneas acordadas, no versiones exactas ya instaladas. El prototipo de la fase 4 comprobará la combinación concreta; las APIs se consultarán en la documentación de la versión elegida.

El modo estático propuesto usa prerenderizado explícito y desactiva el servidor en producción. El directorio final y los datos que necesite el router se verificarán con el build. [React Router: prerenderizado](https://reactrouter.com/how-to/pre-rendering).

Estructura propuesta, que se ajustará a las convenciones del modo framework elegido:

```text
src/
  app/
    root.tsx
    routes.ts
    routes/
    layouts/
  components/
    ui/
  content/articles/
  data/
  assets/
  lib/
  utils/cn.ts
  main.css
  test/setup.ts
public/
scripts/
tests/e2e/
react-router.config.ts
vite.config.ts
firebase.json
pnpm-lock.yaml
```

## Orden y dependencias

1 → 2 → 4 → 5/6 → 7/8/9/10 → 11 → 12 → 13 → 14. La fase 3 empieza pronto en paralelo; sus confirmaciones son obligatorias antes de publicar.

La aplicación se reconstruye en la rama React; Vue permanece disponible como referencia y backup. Las medidas urgentes en producción se preparan por separado si la duración de la migración lo requiere.

## Plan paso por paso

### Paso 1. Conservar y verificar la versión Vue

**Estado:** Completada localmente.

**Objetivo:** Disponer de una copia independiente del estado local real antes de modificarlo.

**Dependencias:** Primera fase. Completada al preparar este plan.

1. Crear un archivo completo fuera del repo activo. Incluir .git, archivos versionados, cambios sin commit, archivos no versionados e ignorados, imágenes, vídeos, node_modules, dist y .nuxt.
2. Registrar HEAD, rama, estado Git y un manifiesto con SHA-256 de cada archivo, destinos de enlaces simbólicos y permisos. Mantener la copia local privada.
3. Volver a leer el archivo comprimido y comparar todo su contenido con el manifiesto; comprobar también que los originales no hayan cambiado durante el proceso.
4. Extraer temporalmente el historial Git, comprobar que conserva el HEAD original y ejecutar git fsck --full. La restauración de la aplicación completa se puede hacer después en una carpeta nueva.
5. Antes de cambios destructivos de la migración, conservar una segunda copia privada fuera de este dispositivo en un destino elegido por el propietario. El backup local actual no protege ante un fallo del disco.

**Entregables**

- /Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/canessa-vue-completo.tar.gz
- /Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/manifest.json
- /Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/SHA256SUMS
- /Users/jalofernandez_1/Documents/projects/jalofernandez/backups/canessa-vue-2026-11-19/RECUPERACION.txt

**Criterios para cerrar este paso**

- Hecho: 52.135 entradas archivadas y verificadas, 308.669.750 bytes de archivo comprimido.
- Hecho: contenido, permisos, enlaces simbólicos, HEAD restaurado y git fsck comprobados.
- No se afirma que el dist local sea idéntico a la release de Firebase ni que el build antiguo se haya reparado. Copia fuera del dispositivo: pendiente.

**Hallazgos de la auditoría cubiertos:** F05.

### Paso 2. Fijar la referencia y organizar el trabajo en el mismo repo

**Estado:** Completado. Referencia local `legacy/vue-2026-11-19` en `098e345`; worktree creado. Los commits adicionales de origin/master solo modificaban package-lock.json y se integraron en la rama React. Los 145 cambios de modo se conservan en disco y backup; core.filemode=false evita mezclarlos con cambios de contenido.

**Objetivo:** Conservar el historial y migrar sin sobrescribir el checkout Vue ni perder cambios locales.

**Dependencias:** Requiere fase 1. La referencia y el worktree ya están creados; se conserva el checkout original.

1. Comparar HEAD, los cambios locales y el contenido servido. Revisar especialmente Inicio y Blog; clasificar por separado los 145 cambios de permisos detectados.
2. Revisar los cambios antes de incluirlos en un commit de referencia. Conservar también AGENTS.md, canessa-stack y este plan para que el worktree herede la guía. Versionar únicamente archivos pertinentes, sin secretos, node_modules, caches ni artefactos generados.
3. Crear desde esa referencia revisada una rama/etiqueta de conservación, por ejemplo legacy/vue-2026-11-19. Una etiqueta sobre el HEAD antiguo de 2021 no conservaría por sí sola los cambios sin commit.
4. Crear migration/react-static y un worktree separado, propuesto en el directorio de trabajo .worktrees/canessa-react. El worktree debe partir del commit que recoge la referencia revisada, no del HEAD antiguo por defecto.
5. Mantener el checkout original disponible para consultar Vue. Realizar la reconstrucción React en el worktree y usar commits pequeños por fase. Un worktree comparte historial y no sustituye el backup independiente.
6. Integrar al final en la rama principal actual, master, mediante revisión. El cambio de tecnología no requiere renombrar esa rama, crear otro origin ni cambiar el dominio.

**Entregables**

- Commit de referencia revisado con cambios locales relevantes.
- Referencia legacy/vue-2026-11-19, rama migration/react-static y worktree de implementación.
- Registro de qué contenido local y publicado se tomó como referencia.

**Criterios para cerrar este paso**

- Los cambios de Inicio y Blog están preservados y no se mezclan inadvertidamente con permisos.
- El nuevo checkout permite consultar y modificar React sin borrar los archivos del checkout Vue.
- El repositorio sigue usando el origin existente; no hay un segundo producto ni copias de Vue dentro del árbol de producción React.

**Hallazgos de la auditoría cubiertos:** F04, F05, F16.

### Paso 3. Confirmar contenido del negocio y la situación en Google

**Estado:** Parcial: datos y decisiones editoriales confirmados; dominios y release leídos por API. Google/Legal/DNS pendientes.

**Objetivo:** Migrar información vigente y resolver las dependencias externas sin inventar datos.

**Dependencias:** Puede comenzar tras el backup, en paralelo a la preparación técnica. Las dudas de contenido no bloquean el scaffold.

1. Confirmar con el negocio el nombre visible, dirección y CP correcto (28341/28342), teléfono, cuenta de WhatsApp, horarios normales/festivos, servicios caninos/felinos, catálogo y precios o criterio de presupuesto.
2. Resolver la vigencia del Bono Canessa Club y de la invitación a colaborar en el blog. Mientras no exista decisión, conservar las URLs; no activar una oferta ni borrarla silenciosamente.
3. Revisar las reseñas: procedencia, fecha, atribución y recuento verificable. Si no se puede mantener el contador actual, publicar testimonios válidos sin una cifra global antigua.
4. Consultar Firebase/Google Cloud: proyecto y sitio Hosting reales, dominios, certificado de www, plan y consumo, permisos, servicios habilitados, reglas y versiones de Hosting retenidas. No deducir reglas abiertas por ver una clave pública.
5. Consultar Search Console, Perfil de Empresa y GTM/GA4 para registrar indexación, consultas/clics, datos del negocio y etiquetas/cookies activas. Guardar una línea base cuando estos accesos estén disponibles.
6. Priorizar como contención el certificado/redirect de www y la analítica sin consentimiento. Si la reconstrucción va a prolongarse, preparar una corrección aislada del sistema actual, verificable y reversible; no desplegar un dist antiguo suponiendo que contiene el arreglo.

**Entregables**

- Ficha de datos del negocio verificada y decisiones editoriales registradas.
- Inventario de integraciones y lista de accesos pendientes con su efecto concreto.
- Identificador de la release anterior de producción y mecanismo de recuperación confirmados antes del lanzamiento.

**Criterios para cerrar este paso**

- Existe un único CP y teléfono verificados para contenido, Schema y perfiles.
- Se conoce qué ofertas/servicios se pueden anunciar y qué métricas son fiables.
- Las tareas técnicas independientes continúan; los datos pendientes sí impiden publicar afirmaciones comerciales sin verificar.

**Hallazgos de la auditoría cubiertos:** F01, F02, F08, F13.

### Paso 4. Crear y probar la base React estática

**Estado:** Completado: stack fijado, instalación congelada, build estático e hidratación real verificados.

**Objetivo:** Demostrar pronto que el stack acordado puede generar y servir correctamente las URLs.

**Dependencias:** Requiere fase 2. Se puede avanzar con contenido provisional interno mientras se completa la fase 3.

1. Fijar versiones exactas y compatibles dentro de las líneas acordadas: React 18, TypeScript 5, pnpm 10, Vite 7, Tailwind 4, React Router 7 y Vitest 4. Usar Node 22 con un parche mantenido compatible, al menos 22.12, y la misma versión en local/CI. Verificar peers y avisos vigentes; no copiar las versiones antiguas del portal ni sustituir mayores sin justificarlo.
2. Crear el scaffold limpio en la rama React. Configurar TypeScript estricto, alias @/*, ESLint flat y Prettier. Introducir pnpm-lock.yaml y packageManager; retirar el lockfile npm solo del destino React cuando la instalación esté verificada.
3. Usar React Router en modo framework sobre Vite con prerenderizado de todas las rutas públicas y sin servidor de aplicación en producción. Tailwind se integra con @tailwindcss/vite. Usar los plugins/entradas del modo elegido y no montar dos routers ni duplicar plugins React sin necesidad.
4. Probar primero /, /contacto y un artículo dinámico representativo: HTML con contenido y metadatos, hidratación sin avisos, enlaces directos y navegación cliente. Enumerar expresamente los slugs de los artículos para el build.
5. Adoptar como salida propuesta build/client y ajustar el public de Firebase al artefacto real comprobado. Incluir los datos estáticos del router y configurar su descubrimiento de rutas para que la navegación no dependa de un endpoint runtime ausente. No publicar el código de servidor que el framework pueda generar durante el build.
6. Generar un 404 estático y comprobarlo con el emulador de Hosting. No introducir un rewrite global de todas las rutas a index.html: las rutas desconocidas deben devolver 404, aunque el router pueda producir un fallback SPA.
7. Definir scripts: dev, lint, compile (incluyendo typegen si corresponde), test, test:e2e, check-format, build, preview y verify:static. Hacer que un artefacto ausente o incompleto produzca un fallo real. Actualizar AGENTS.md y la skill al estado de transición y los comandos realmente disponibles cuando cambie el scaffold; al cierre se documentará el estado definitivo.

**Entregables**

- Scaffold mínimo reproducible con lockfile nuevo y configuración de herramientas.
- Prueba técnica de tres rutas, un 404 y los datos estáticos del router.
- Decisión de renderizado y carpeta de salida registrada; versiones exactas verificadas.

**Criterios para cerrar este paso**

- Una instalación con lockfile congelado y un build limpio funcionan con la versión de Node fijada.
- El HTML inicial contiene texto real y título/description/canonical por URL; no depende de JavaScript para presentar el contenido básico.
- La prueba de rutas estáticas y 404 pasa antes de reconstruir todas las páginas. Si una combinación de versiones falla, se resuelve en esta fase con la menor variación justificada.

**Hallazgos de la auditoría cubiertos:** F03, F04, F10, F16.

### Paso 5. Construir el diseño base y los componentes accesibles

**Estado:** Completado localmente: layout, teclado, móvil/tableta/escritorio y comprobaciones automáticas de accesibilidad.

**Objetivo:** Actualizar la experiencia de Canessa con un sistema de UI pequeño y mantenible.

**Dependencias:** Después de validar el scaffold de la fase 4.

1. Conservar identidad, logo y fotografías válidas; definir tokens de color, tipografía, tamaños, espaciado, radios y foco. Ajustar variantes de la marca para que los textos y controles tengan contraste suficiente.
2. Crear componentes propios tipados: Container, Section, Button/Link, Heading, ServiceCard, Gallery, Breadcrumbs y controles de diálogo si se necesitan. Componer con props/children y cn (clsx + tailwind-merge); no copiar componentes privados del portal que no se han facilitado.
3. Construir un layout de negocio con navegación clara, cabecera, footer útil y accesos a llamar, WhatsApp y cómo llegar. Reducir enlaces de tecnologías y material de plantilla que no ayude al cliente.
4. Hacer que el menú use un botón nativo, aria-expanded real, foco visible y controles de teclado. Si se conserva el modal Horario, implementar nombre accesible, foco inicial, Escape, retorno del foco y aislamiento adecuado.
5. Mostrar dirección y horario también en la página de Contacto; no ocultar la información esencial únicamente en un mapa o diálogo. Mantener los enlaces existentes y anclas útiles.
6. Comprobar el layout a 390, 768 y 1280 píxeles, zoom de navegador y teclado. Sustituir decisiones de layout dependientes de JavaScript por CSS cuando sea suficiente para evitar cambios de geometría al hidratar.

**Entregables**

- Tokens Tailwind 4 y primitivas reutilizables de Canessa.
- Layout responsive con navegación y acciones principales.
- Pruebas de interacción del menú y, si se usa, el diálogo.

**Criterios para cerrar este paso**

- Se puede acceder a navegación, horario y contacto con teclado y en móvil.
- El estado abierto/cerrado se anuncia correctamente y el foco no queda detrás de un modal.
- No hay desplazamiento horizontal ni contrastes insuficientes detectados en los controles principales.

**Hallazgos de la auditoría cubiertos:** F07, F14, F15.

### Paso 6. Separar datos, migrar contenido y reconstruir las 15 URLs

**Estado:** Implementado: 15 URLs y los tres artículos; pendiente aceptación del contenido en preview.

**Objetivo:** Mantener las páginas válidas y mejorar su claridad sin arrastrar la arquitectura Vue.

**Dependencias:** Requiere fases 4 y 5; la publicación de contenidos depende de las confirmaciones de la fase 3.

1. Crear una fuente tipada para datos del negocio, servicios, navegación, horarios, testimonios y metadatos. El contenido estático se importa o genera en build; no necesita Vuex ni proveedores de consultas de red.
2. Migrar los tres Markdown. Los actuales contienen HTML de presentación y clases del stack anterior; convertir ese contenido a Markdown/estructuras portables, resolver imágenes y enlaces y evitar ejecutarlo como JSX o Vue. Si se conserva HTML, usar un conjunto permitido y sanitización explícita.
3. Primera tanda: Inicio, Servicios, Peluquería y Contacto. Mejorar la propuesta local, qué incluye el servicio, proceso, llamada y cómo llegar. Mantener los datos que sigan vigentes y no inventar servicios, reservas o precios.
4. Segunda tanda: Instalaciones, Sobre Vanessa, Piensos y Antiparasitarios. Renovar imágenes y textos comprobables y simplificar los catálogos a lo que realmente ofrece el negocio.
5. Tercera tanda: listado del blog, los tres artículos, Legal, mapa HTML y Bono Canessa Club. Conservar cada URL mientras no haya una decisión editorial explícita; si una campaña se archiva, mostrarlo claramente en esa misma URL.
6. Mantener slugs y enlaces relevantes. Para cualquier cambio aprobado, registrar URL antigua, destino equivalente y redirect permanente; una retirada sin sustituto debe tener la respuesta HTTP acordada, no un redirect indiscriminado a Inicio.
7. Revisar el contenido con el negocio y comparar cada URL con la referencia: encabezados, fotografías, enlaces, datos de contacto y acciones. No añadir ecommerce, cuentas ni un formulario sin endpoint y necesidad real.

**Entregables**

- 15 URLs reconstruidas y un inventario de equivalencia con el sitio anterior.
- Contenido y datos tipados separados de los componentes.
- Markdown portable, recursos resueltos y decisiones de conservación/archivo/redirección registradas.

**Criterios para cerrar este paso**

- Las 15 rutas tienen contenido completo en HTML, salvo cambios editoriales documentados.
- La información comercial está confirmada y no se pierden los cambios locales relevantes.
- No quedan imports Vue/Nuxt, cadenas HTML de presentación no controladas ni funciones de contacto simuladas.

**Hallazgos de la auditoría cubiertos:** F05, F07, F13, F18.

### Paso 7. Aplicar SEO técnico y local coherente

**Estado:** Implementado y verificado en HTML: metadatos, NAP, Schema, sitemap y noindex del bono. Search Console pendiente.

**Objetivo:** Conservar la capacidad de rastreo y describir correctamente el negocio y sus páginas.

**Dependencias:** Se prepara con fases 5–6; los datos definitivos requieren fase 3.

1. Definir por ruta title, description, canonical y un H1 principal descriptivo. Corregir las cinco páginas sin H1 y evitar descripciones truncadas a 65 caracteres y texto genérico repetido.
2. Centralizar JSON-LD de LocalBusiness con identidad estable, CP/país, teléfono, coordenadas y horarios correctos. Usar días válidos de Schema y URLs de imágenes reales. No trasladar el AggregateRating antiguo de 704 ni prometer estrellas orgánicas por reseñas propias.
3. Añadir BlogPosting a artículos y BreadcrumbList donde haya una jerarquía visible. Mantener autoría y fechas reales; publicar preguntas frecuentes útiles sin prometer resultados enriquecidos.
4. Generar sitemap.xml desde el mismo inventario de rutas, con lastmod por contenido cuando sea fiable; quitar priority/changefreq sin utilidad para Google. Mantener robots.txt y el mapa HTML si sigue ayudando a navegar.
5. Corregir logo, Open Graph y Twitter Cards y comprobar que todas sus imágenes devuelven 200 con Content-Type de imagen. Eliminar alternates con #! sin función real.
6. Alinear web y Perfil de Empresa: categoría y servicios reales, horario/festivos, fotos recientes, enlace al dominio canónico y gestión de reseñas. Evitar páginas repetidas para municipios o palabras clave sin contenido propio.
7. Conservar canonicals de producción durante las previews. Evitar indexar previews mediante configuración específica y comprobar que no se arrastra noindex a la publicación final.

**Entregables**

- Metadatos y Schema centralizados; sitemap y robots generados.
- Validación de recursos sociales y datos estructurados.
- Lista de ajustes del Perfil de Empresa y línea base de Search Console cuando haya acceso.

**Criterios para cerrar este paso**

- Cada URL conserva la intención, canonical y metadatos adecuados.
- No hay incoherencias NAP ni recursos estructurados/sociales con 404.
- Rich Results Test/Schema Validator y las comprobaciones de HTML no muestran errores relevantes; se distinguen las recomendaciones de los errores.

**Hallazgos de la auditoría cubiertos:** F07, F08, F09, F13, F17.

### Paso 8. Reducir el peso y eliminar los saltos visuales

**Estado:** Completado en laboratorio: tres mediciones finales, mediana 95 y CLS 0. Medición publicada y datos de usuarios pendientes.

**Objetivo:** Corregir el principal problema medido y dar a la nueva web un presupuesto de rendimiento.

**Dependencias:** Empieza con el layout; se mide al tener Inicio y páginas representativas completas.

1. Sustituir el vídeo automático de portada en móvil por una imagen optimizada. Si se mantiene vídeo en otro contexto, ofrecer reproducción bajo demanda, compresión, poster, espacio reservado y controles/pausa cuando proceda.
2. Reservar desde el HTML inicial las dimensiones del hero y de los recursos. Revisar alturas, fuentes e hidratación: el informe actual atribuye casi todo el CLS al vídeo.
3. Generar tamaños responsive y formatos modernos para las fotos. Usar width/height o aspect-ratio real, srcset/sizes adecuados y lazy loading para imágenes fuera del primer pliegue; no hacer lazy el recurso principal.
4. Cargar el vídeo de Instalaciones solo cuando el usuario lo solicite o esté justificado. Sustituir Material Design Icons completo por los SVG usados y limitar las fuentes a familias/pesos necesarios.
5. Proponer estos presupuestos de aceptación: portada móvil inicial ≤1 MB transferido sin vídeo opcional; JS propio inicial comprimido ≤150 kB como objetivo, justificando excepciones. Estos valores son objetivos de Canessa, no reglas oficiales de Google.
6. Medir tres ejecuciones comparables de PageSpeed/Lighthouse y guardar la mediana y condiciones. Objetivo de laboratorio: CLS ≤0,1, sin regresiones de LCP/TBT y rendimiento móvil ≥90 como referencia; un valor aislado no determina por sí solo la aceptación.
7. Cuando existan datos reales suficientes, evaluar LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1 en percentil 75. No sustituir INP por TBT ni dar datos de laboratorio por datos de usuarios.

**Entregables**

- Pipeline de imágenes y recursos de marca optimizados.
- Vídeos opcionales y hero estable.
- Informe antes/después y presupuestos documentados.

**Criterios para cerrar este paso**

- La carga móvil inicial no descarga automáticamente el MP4 de 19,6 MB.
- El salto del hero deja de aparecer y las mediciones cumplen el objetivo de estabilidad.
- Los recursos nuevos mantienen calidad visual y accesibilidad con un peso justificado.

**Hallazgos de la auditoría cubiertos:** F06, F15.

### Paso 9. Implementar privacidad, medición y límites de seguridad

**Estado:** Implementado: sin terceros durante la visita; analítica desactivada. Consentimiento opcional probado, sujeto a revisión de GTM antes de activarlo.

**Objetivo:** Corregir el consentimiento y cargar solo las integraciones necesarias.

**Dependencias:** Requiere inventario de la fase 3 y layout funcional; si no se dispone de analítica validada, se mantiene desactivada.

1. Eliminar del destino los SDKs de Firebase Auth/Database/Storage sin uso confirmado. Conservar Hosting es independiente de incluir esos SDKs en el navegador. Descartar Axios/Query/formularios complejos si no hay una necesidad concreta.
2. Decidir si mantener GA4 mediante un único mecanismo, por ejemplo GTM. Retirar analytics.js heredado y duplicidades. Mantener bloqueada la analítica no necesaria hasta una elección válida.
3. Si se usan tecnologías que requieren consentimiento, implementar aceptar/rechazar con igual visibilidad, opciones accesibles, persistencia de la elección, versión de preferencias y revocación desde el footer. El botón no se limitará a ocultar el aviso.
4. Verificar en un contexto de navegador limpio los estados sin elección, rechazo, aceptación, recarga y revocación. Comprobar peticiones y almacenamiento reales, no solo el texto del banner.
5. Ofrecer dirección y enlace externo a Maps sin depender del iframe. Si se conserva un mapa incrustado, controlar su carga, título, política de referencias y tratamiento de terceros; comprobar las restricciones de la clave en consola.
6. Medir intención de contacto con eventos de llamada, WhatsApp y cómo llegar, cuando el mecanismo de medición esté permitido. No registrar conversaciones ni datos personales y no presentar un clic como una cita confirmada.
7. Revisar Legal y Cookies contra las integraciones reales. Serializar JSON-LD de forma segura y evitar HTML crudo no controlado. No publicar secretos en variables VITE_ ni en archivos generados.

**Entregables**

- Consentimiento funcional o ausencia justificada de herramientas que lo necesiten.
- Integraciones mínimas y plan de medición de contacto.
- Textos legales adaptados y comprobaciones de terceros/almacenamiento.

**Criterios para cerrar este paso**

- Sin aceptar o tras rechazar no se cargan etiquetas no necesarias configuradas para quedar bloqueadas.
- Recargar y revocar conservan/aplican la elección y el rechazo no rompe la navegación.
- Las funciones básicas del negocio funcionan sin analítica ni Firebase SDK y no se exponen secretos.

**Hallazgos de la auditoría cubiertos:** F02, F10, F12, F18.

### Paso 10. Preparar Firebase, dominio, caché y transición del service worker

**Estado:** Parcial: Hosting local, caché, CSP y worker probados; release live identificada. www requiere corregir DNS de Squarespace y dar de alta el dominio en Hosting.

**Objetivo:** Servir el artefacto estático correcto y evitar que el navegador siga mostrando la versión anterior.

**Dependencias:** Necesita el prototipo de rutas de fase 4 y acceso a la configuración real para verificar producción.

1. Mantener Firebase Hosting como destino inicial. Confirmar site/project/target explícitos y cambiar hosting.public al directorio real de salida, propuesto build/client. Retirar push-dir y el flujo de gh-pages del destino React.
2. Conservar /mascotactiva→/servicios y añadir solo redirecciones justificadas. Probar clean URLs, slash final, .html, artículos y 404 en el emulador y en preview; la forma de archivos que genere el router manda sobre suposiciones.
3. Corregir DNS/certificado de www y su redirect al dominio canónico. Validar ambos nombres por HTTPS y HTTP antes de endurecer la política HSTS.
4. Configurar revalidación de HTML y /sw.js, y caché larga immutable para recursos con hash. Los archivos .data del router también deben tener una política compatible con versiones del HTML; no asignar immutable indiscriminadamente a URLs sin versionar.
5. Propuesta inicial: prescindir de una PWA compleja salvo que haya uso demostrado. Publicar una transición de /sw.js que retire el worker antiguo y sus cachés de Canessa de forma controlada. No borrar CacheStorage completo ni caches de otro código que comparta origen.
6. Probar esa transición con un navegador que ya haya usado Vue y con otro limpio. Evitar recargas en bucle o tener HTML de una release con assets/datos de otra; mantener los recursos antiguos necesarios durante la transición y el plazo de recuperación.
7. Añadir nosniff, política de referencia y protección de framing. Construir CSP con las fuentes e integraciones reales, probar Report-Only si procede y aplicar la política verificada. No forzar aislamiento de origen u otras cabeceras que no aporten una necesidad al sitio.
8. Revisar consumo, versiones retenidas, presupuesto y permisos de publicación. Las alertas de gasto no son un tope automático; no se cambian facturación ni IAM como efecto incidental de migrar el frontend.

**Entregables**

- firebase.json del sitio estático y flujo de distribución único.
- Dominios y cabeceras verificados; transición de worker/cachés preparada.
- Release anterior identificada y opciones de recuperación documentadas.

**Criterios para cerrar este paso**

- Todas las rutas esperadas son accesibles directamente, las desconocidas devuelven 404 y www redirige con certificado válido.
- HTML, assets y datos se sirven de forma coherente tras actualizar y tras volver a una release anterior.
- Un usuario con el worker Vue instalado puede recibir la nueva web sin intervención manual.

**Hallazgos de la auditoría cubiertos:** F01, F11, F12, F16.

### Paso 11. Automatizar las comprobaciones y la publicación de previews

**Estado:** Comprobaciones locales completadas; CI preparada. Ejecución remota y preview se registran a continuación.

**Objetivo:** Detectar pérdidas de contenido o fallos de funcionamiento antes de publicar.

**Dependencias:** Se introduce desde el scaffold y se completa al integrar páginas, SEO e integraciones.

1. Configurar ESLint, TypeScript estricto y Prettier como comprobaciones distintas. compile generará los tipos del router si el modo lo exige e incluirá código y pruebas.
2. Usar Vitest y Testing Library para comportamiento del menú, diálogo, consentimiento, normalización de contenido y generación de metadatos. Añadir pruebas donde protejan contratos; evitar snapshots masivos o tests que repitan la implementación.
3. Añadir un pequeño conjunto E2E con Playwright contra el sitio generado/emulador: navegación, acceso directo y recarga de rutas, artículos, menú móvil, teclado, consentimiento y enlaces de contacto. No hacer llamadas, enviar WhatsApp ni mandar formularios reales durante pruebas.
4. Crear verify:static: comprobar el inventario, contenido inicial, H1, title/description/canonical, imágenes OG/Schema, enlaces internos y sitemap. Verificar 15 URLs o una decisión explícita para cada cambio, más 404 y redirects.
5. Ejecutar en GitHub Actions, acorde con el remoto existente: instalación congelada, formato, lint, tipos, pruebas, build y comprobación estática. Publicar previews solo tras superar esos controles con credenciales de mínimo privilegio.
6. Hacer fallar CI ante artefactos ausentes, errores del build, metadatos incompletos o rutas perdidas. Revisar vulnerabilidades por exposición real; los avisos graves aplicables sin resolver impiden publicar y los no aplicables quedan documentados.
7. Mantener los comandos y la documentación sincronizados. Guardar versión de Node/pnpm, commit y huellas del artefacto para relacionar lo revisado con lo que se despliega.

**Entregables**

- Scripts de calidad, suite de pruebas proporcionada y verificador del sitio generado.
- CI con controles obligatorios y preview revisable.
- Evidencias del artefacto y avisos de dependencias tratados.

**Criterios para cerrar este paso**

- Una instalación limpia reproduce el resultado y todos los controles obligatorios pasan.
- Una ruta eliminada por error, un recurso SEO roto o una etiqueta de seguimiento previa al consentimiento provocan un fallo de prueba.
- La verificación comprueba el resultado generado; no confía exclusivamente en el exit code del bundler.

**Hallazgos de la auditoría cubiertos:** F03, F04, F07, F09, F14, F16, F17.

### Paso 12. Revisar una preview completa antes del lanzamiento

**Estado:** Preview temporal publicada y verificada. Pendiente aceptación del contenido por el propietario.

**Objetivo:** Evaluar la web real en un entorno publicado sin sustituir producción.

**Dependencias:** Requiere fases 6–11 completas y los datos comerciales definitivos.

1. Desplegar a un preview channel con caducidad y proyecto confirmado. Las previews de Firebase son URLs compartibles y no aíslan automáticamente los backends: el nuevo sitio no debe hacer escrituras ni disparar analítica real de producción durante la revisión.
2. Evitar su indexación con configuración específica del preview y comprobarla por HTTP. Preparar la configuración de producción sin noindex; no promover ciegamente una configuración de preview que lo conserve.
3. Revisar las 15 URLs, contenido y recursos en móvil/escritorio, Safari/Chrome/Firefox representativos, teclado, zoom, movimiento reducido y JavaScript desactivado para contenido básico.
4. Ejecutar las pruebas de metadatos, Schema, estado HTTP, privacidad, worker legado y rendimiento. Comparar con la auditoría: 65/68 de rendimiento de partida, CLS 1,004/0,71, cinco páginas sin H1 y cuatro imágenes de metadatos rotas.
5. Mostrar al propietario el contenido y la experiencia completos. Resolver los datos pendientes, promociones y textos legales antes de cerrar la revisión; comprobar los números y destinos de contacto sin efectuar comunicaciones reales.
6. Relacionar el artefacto aprobado con commit, lockfile y hashes. Preparar el resumen de diferencias, riesgos restantes y procedimiento de vuelta a la release anterior.

**Entregables**

- URL temporal de preview y evidencias de revisión.
- Lista de criterios de lanzamiento superados y decisiones del negocio registradas.
- Artefacto identificado y plan de recuperación listo.

**Criterios para cerrar este paso**

- La web se puede revisar de extremo a extremo sin tocar producción.
- No quedan dudas de contenido que puedan inducir a error ni fallos críticos de rutas, privacidad o contacto.
- El artefacto y la configuración destinados a producción están identificados; su publicación queda como paso final explícito.

**Hallazgos de la auditoría cubiertos:** F01, F02, F06, F08, F14, F16.

### Paso 13. Publicar y poder volver atrás sin reconstruir Vue

**Estado:** Pendiente: no se ha sustituido producción. Requiere revisión de preview y resolver dependencias de lanzamiento.

**Objetivo:** Sustituir la versión pública con una recuperación rápida y conocida.

**Dependencias:** Solo después de la aceptación de fase 12 y autorización de publicación. Este plan no realiza ese despliegue.

1. Confirmar en Firebase la release anterior y que sigue retenida y recuperable. El archivo local de backup protege el repo; no sustituye esa comprobación ni demuestra que el dist local sea una copia exacta de producción.
2. Registrar la configuración externa que cambie: dominios, cabeceras, GTM y worker. El rollback de Hosting no deshace automáticamente DNS, facturación, permisos ni cambios en otros productos.
3. Integrar los cambios revisados y etiquetar la versión React con el esquema acordado. Generar/promover el artefacto identificado y desplegar al target de producción con la configuración pública correcta, sin noindex.
4. Hacer smoke tests inmediatamente: dominio y www, las 15 URLs, contacto, datos visibles, imágenes sociales, robots/sitemap, 404/redirects, consentimiento y navegación de clientes con worker antiguo.
5. Volver a la release anterior verificada si hay rutas esenciales inaccesibles, contacto roto, contenido comercial erróneo, fallos de hidratación generalizados o seguimiento contrario a la elección. No reconstruir apresuradamente Nuxt con dependencias obsoletas para recuperar el servicio.
6. Durante una recuperación, conservar las correcciones válidas de dominio y privacidad; comprobar si el worker nuevo puede cachear de forma incorrecta la versión restaurada. Una reversión puede recuperar también defectos antiguos y debe comprobarse.
7. Guardar el resultado del lanzamiento y actualizar MIGRATION.md con lo ejecutado y cualquier desviación. La copia Vue y su referencia Git se mantienen después de publicar React.

**Entregables**

- Release React identificada y comprobada en producción.
- Referencia de la release anterior y registro de la recuperación ensayada.
- Guía de publicación y vuelta atrás que no dependa de un build legado nuevo.

**Criterios para cerrar este paso**

- Producción usa el artefacto revisado y no tiene noindex accidental ni bucles de redirects.
- La navegación antigua y nueva funciona y las funciones esenciales están operativas.
- Se conoce cómo restaurar la release anterior y las implicaciones de cachés e integraciones externas.

**Hallazgos de la auditoría cubiertos:** F01, F02, F05, F11, F16.

### Paso 14. Comprobar resultados y dejar un mantenimiento sencillo

**Estado:** Pendiente del lanzamiento; no se ha programado ninguna automatización.

**Objetivo:** Confirmar que la migración conserva captación y puede mantenerse sin otra gran reconstrucción.

**Dependencias:** Después del lanzamiento; las ventanas temporales se cuentan desde el día real de publicación.

1. En las primeras 24–48 horas, revisar errores de cliente, fallos de rutas/recursos, TLS, caché y consentimiento, y resolver regresiones funcionales.
2. En 7–14 días, revisar Search Console: descubrimiento/indexación, canonicals, sitemap, URLs excluidas y errores de rastreo. No atribuir automáticamente oscilaciones de posición al framework.
3. A partir de 28 días, comparar consultas/clics y acciones del Perfil de Empresa con periodos comparables. Considerar estacionalidad y cambios comerciales; si no hay datos de campo suficientes, mantener las mediciones de laboratorio claramente etiquetadas.
4. Actualizar AGENTS.md, la skill canessa-stack y README para describir el estado React real, scripts, estructura y publicación; no seguir presentando el stack como una migración futura.
5. Asignar una rutina proporcionada: revisar dependencias/avisos y disponibilidad regularmente, y datos del negocio cuando cambien horarios, festivos, catálogo u ofertas. Registrar nuevas campañas con fechas y retirada/archivo previsto.
6. Conservar el backup Vue fuera de la rama activa y una segunda copia privada. Revisar retención de releases y costes de Hosting sin borrar prematuramente la referencia de recuperación.

**Entregables**

- Comparativa posterior al lanzamiento y cierre de incidencias.
- Documentación operativa actualizada y pauta de mantenimiento.
- Backup legado y recuperación conservados.

**Criterios para cerrar este paso**

- Los problemas de la auditoría tienen evidencia de cierre o una decisión justificada.
- El propietario sabe actualizar contenido, verificar y publicar sin depender de instrucciones antiguas.
- El funcionamiento y la captación se evalúan con datos reales cuando estén disponibles.

**Hallazgos de la auditoría cubiertos:** F03, F06, F08, F13, F16.

## Inventario de URLs que se conservarán inicialmente

- `/` — **Inicio**. Conservar; renovar portada, CTA local y recursos.

- `/servicios` — **Servicios**. Conservar y delimitar su intención respecto a /peluqueria.

- `/peluqueria` — **Peluquería / grooming**. Conservar; priorizar servicios reales, proceso y preguntas frecuentes.

- `/antiparasitarios` — **Antiparasitarios**. Conservar si se venden; actualizar catálogo y revisar afirmaciones.

- `/piensos` — **Piensos**. Conservar si sigue vigente; no presentarlo como ecommerce.

- `/instalaciones` — **Instalaciones**. Conservar; vídeo bajo demanda y fotos actuales.

- `/vanessavizcaya` — **Sobre Vanessa**. Conservar URL; actualizar credenciales y experiencia verificable.

- `/contacto` — **Contacto**. Prioritaria: NAP, horarios visibles y llamada/cómo llegar.

- `/bono-canessa-club` — **Bono Canessa Club**. Confirmar vigencia; archivar con aviso, retirar o redirigir solo si hay sustituto equivalente.

- `/blog` — **Blog**. Conservar; publicar contenido útil cuando haya capacidad de mantenerlo.

- `/blog/como-pixar-capta-la-personalidad-animal` — **Cómo Pixar capta la personalidad animal**. Conservar o revisar según tráfico real; reparar imagen social.

- `/blog/como-publicar-post-aqui` — **¿Quieres publicar artículos en nuestro blog?**. Confirmar que la colaboración siga abierta; no es un artículo de captación de servicios.

- `/blog/el-gran-reencuentro` — **El gran reencuentro**. Conservar o actualizar con criterio editorial y datos de Search Console.

- `/legal` — **Legal**. Revisar contra tratamientos y proveedores reales; eliminar texto heredado que no corresponda.

- `/sitemap` — **Mapa del sitio (HTML)**. Opcional como utilidad; mantener siempre sitemap.xml independiente.

El objetivo inicial son las 15 URLs existentes. Cualquier archivo, retirada o redirección requiere una decisión explícita, con respuesta HTTP y destino definidos. /mascotactiva→/servicios se mantiene como redirección heredada; robots.txt, sitemap.xml y el 404 son recursos técnicos adicionales.

## Criterios conjuntos de aceptación

- **Contenido y rutas:** 15 URLs conservadas o una decisión explícita por cambio; HTML real por URL; redirects equivalentes y 404 verdadero.

- **Identidad y SEO:** NAP verificado; H1/title/description/canonical por ruta; Schema y recursos OG válidos; sitemap consistente.

- **Contacto:** Llamada, WhatsApp, dirección, horario y cómo llegar visibles y operables. Ninguna prueba envía mensajes o realiza llamadas reales.

- **Privacidad:** Elección aplicable y persistente; rechazo y revocación probados; integración de analítica real inventariada.

- **Accesibilidad:** Controles nativos, estados anunciados, foco/teclado/contraste y móvil comprobados.

- **Rendimiento:** Sin vídeo automático pesado en móvil; hero estable; CLS objetivo ≤0,1 y presupuestos de carga documentados.

- **Ingeniería:** Instalación limpia, versiones fijadas, lint/tipos/pruebas/build/verificador correctos y avisos aplicables tratados.

- **Hosting:** TLS en dominio y www, directorio correcto, cabeceras/cachés/worker probados y proyecto/target explícitos.

- **Publicación:** Preview aceptada, artefacto identificado, noindex ausente en producción y release anterior recuperable.

## Decisiones del negocio y accesos pendientes

- CP, dirección/horarios y número de WhatsApp vigentes.

- Vigencia del bono, servicios/catálogo, precios y condiciones legales.

- Uso y atribución de testimonios; recuento de reseñas si se va a mostrar.

- Acceso a Firebase/Google Cloud para TLS, target, costes, reglas y release anterior.

- Acceso a GTM/GA4, Search Console y Perfil de Empresa para verificar su estado real.

No se inventan estos datos. Se pueden avanzar scaffold, componentes y pruebas mientras se resuelven, pero el contenido comercial y la configuración de producción se validan antes del lanzamiento.

## Correspondencia con la auditoría

- **F01 — El dominio con www falla por certificado:** pasos 3, 10, 12, 13.

- **F02 — El aviso de cookies no implementa una elección real:** pasos 3, 9, 12, 13.

- **F03 — Dependencias sin soporte y avisos de seguridad acumulados:** pasos 4, 11, 14.

- **F04 — Build y generación no reproducibles; salida engañosa:** pasos 2, 4, 11.

- **F05 — La copia local necesita reconciliación con producción:** pasos 1, 2, 6, 13.

- **F06 — El vídeo de portada domina la carga y los saltos visuales:** pasos 8, 12, 14.

- **F07 — Cinco páginas de negocio carecen de H1:** pasos 5, 6, 7, 11.

- **F08 — Datos de negocio y Schema desalineados:** pasos 3, 7, 12, 14.

- **F09 — Cuatro recursos declarados en metadatos devuelven 404:** pasos 7, 11.

- **F10 — SDKs de Firebase habilitados sin uso funcional encontrado:** pasos 4, 9.

- **F11 — La regla de caché del service worker apunta a otra URL:** pasos 10, 13.

- **F12 — Faltan cabeceras de protección del documento:** pasos 9, 10.

- **F13 — Campaña antigua y mantenimiento editorial poco explícito:** pasos 3, 6, 7, 14.

- **F14 — Menú, diálogo y contraste necesitan correcciones:** pasos 5, 11, 12.

- **F15 — Imágenes ansiosas e iconografía global pesada:** pasos 5, 8.

- **F16 — No hay comprobaciones automáticas del producto:** pasos 2, 4, 10, 11, 12, 13, 14.

- **F17 — SEO duplicado y fechas de sitemap generadas globalmente:** pasos 7, 11.

- **F18 — HTML crudo y serialización requieren límites al migrar:** pasos 6, 9.

## Referencias técnicas

El diagnóstico específico de Canessa corresponde a la auditoría del 19/11/2026. Las fuentes siguientes respaldan las capacidades y prácticas técnicas, no una garantía de resultados SEO o rendimiento.

- [React Router: prerenderizado](https://reactrouter.com/how-to/pre-rendering)

- [React Router 7: documentación versionada](https://reactrouter.com/7.18.6/home)

- [Tailwind CSS con Vite](https://tailwindcss.com/docs/installation/using-vite)

- [Node: líneas y soporte](https://nodejs.org/en/about/previous-releases)

- [Firebase: pruebas, previews y publicación](https://firebase.google.com/docs/hosting/test-preview-deploy)

- [Firebase: comportamiento de Hosting](https://firebase.google.com/docs/hosting/full-config)

- [Google: Core Web Vitals](https://web.dev/articles/vitals)

- [Google: posicionamiento local](https://support.google.com/business/answer/7091?hl=es)

- [Google: negocio local](https://developers.google.com/search/docs/appearance/structured-data/local-business)

- [AEPD: elección de cookies](https://www.aepd.es/preguntas-frecuentes/17-internet-y-redes-sociales/FAQ-1707-importancia-de-las-cookies-en-la-proteccion-de-datos)

## Registro histórico de preparación del plan

- Completado: backup completo e integridad verificada; plan detallado y cobertura de los 18 hallazgos.

- En el momento de redactar el plan aún no había rama/worktree ni implementación. El estado actual se registra en cada fase y en Desarrollo.

- No se han cambiado el código Vue, las dependencias ni la configuración de producción durante la preparación del plan.

## Desarrollo — 19/11/2026

- Accesos: Firebase Hosting y GitHub verificados; simulación de push correcta. Sin push real ni despliegue.
- Referencia: original Vue intacto en `legacy/vue-2026-11-19`; baseline revisada `098e345`. Se preservan Inicio, Blog, ajustes del workspace y guías.
- Worktree React: `.worktrees/canessa-react`, rama `migration/react-static`.
- Prototipo: build estático correcto para Inicio, Contacto y `/blog/el-gran-reencuentro`, con datos `.data` del router y descubrimiento `initial`. El build elimina su servidor al finalizar.
- Se usa una entrada de renderizado propia solo durante build; producción no necesita Node ni SDK de Firebase.
- Verificación de entorno: CLI Firebase global 13.15.2 falla con Node 22 (`birthtime.getTime` en superstatic). Se incorpora CLI 15.37.0 local para probar Hosting. Puerto local 4178; 5000 ocupado por otro servicio del equipo.
- Ajuste justificado: ESLint 10 sustituye al 9 previsto, ya sin soporte. Accesibilidad se comprueba con axe y navegador; el plugin jsx-a11y no declara compatibilidad con ESLint 10 y no se fuerza su peer dependency. Testing Library jest-dom 6.9.1 evita la versión 6.10.0 retirada.
- Datos confirmados por el propietario: C. Vicente Aleixandre, 5, **28342 Valdemoro, Madrid**; 912 48 04 30 y WhatsApp correctos. Lunes/martes 10:00–13:30 y 16:30–20:00; miércoles/jueves/viernes 10:30–13:30 y 16:30–20:00; sábado/domingo cerrado.
- Decisión editorial: invitación al blog vigente. Bono Canessa Club deprecado por indicación del propietario: URL conservada con aviso de finalización y `noindex`, fuera de sitemap y navegación. No se anuncia un descuento vigente.
- Pendientes externos: comprobar titular/datos legales, contenedor GTM/GA4, Search Console/Perfil de Empresa y dominios TLS/release de producción. No bloquean el desarrollo local.

### Resultado técnico implementado

- Commits de base: `098e345` (Vue revisado), merge de origin/master, `5f92204` (prototipo) y `314d5ed` (15 URLs React).
- Stack comprobado: React 18.3.1, TypeScript 5.9.3, pnpm 10.34.9, Vite 7.3.8, Router 7.18.6, Tailwind 4.3.5, Vitest 4.1.12, ESLint 10.15.0 y Node 22.23.4. No se presentan estas líneas como las últimas mayores de cada producto.
- Todas las rutas tienen HTML y metadatos propios, con `.data` estáticos donde corresponden. `verify:static` también comprueba que se cierra el flujo de hidratación. La prueba de navegación asegura que no se está confundiendo una recarga HTML con navegación cliente.
- 83 imágenes con WebP responsive y hashes del contenido optimizado. Vídeo de portada retirado; vídeo de instalaciones bajo demanda. Sin fuentes externas, iconfont ni SDK Firebase en cliente.
- Pruebas: lint, tipos, 7 unitarias, build/verificador y formato correctos. 41 E2E correctas y 3 omisiones de matriz intencionadas. Menú/dialog por teclado, CSP, rutas, 404, redirect, sin JS y transición de worker simulada verificados.
- Tres ejecuciones Lighthouse locales: rendimiento 95/95/96 (mediana 95); accesibilidad, buenas prácticas y SEO 100; CLS 0. Condiciones y límites en `quality/performance-summary.json`. No son datos de usuarios ni comparaciones directas con el hardware de PageSpeed anterior.
- Auditoría npm/pnpm: ejecución 0 avisos; conjunto de herramientas 4 moderados en dependencias de Firebase CLI, 0 altos/críticos. Ver `quality/README.md`, sin ocultar avisos ni forzar cambios transitivos incompatibles.
- Live confirmado por API: `sites/canessa-722eb/releases/1646319103546244`, versión `9f882c141b399c43`, de 03/03/2022 y FINALIZED. Identificador a refrescar antes del lanzamiento.
- DNS: apex a 199.36.158.100 y TLS válido. La consulta exacta confirma **CNAME www → ext-sq.squarespace.com**, que resuelve a las cuatro IP de Squarespace. MX de Mailgun preservados. Guía de cambio lista en DNS.md; no se han modificado registros ni dominios de producción.
- CI sin permisos de escritura ni credenciales de despliegue; actualizaciones de dependencias configuradas. Runbook y comandos de preview/live/rollback en RELEASE.md.
- Antes de live: aceptación de diseño y textos (incluido Legal), confirmar catálogo/atribuciones que se quieran anunciar, resolver www y validar con perfil que conserve Vue. Analítica permanecerá apagada mientras no se revise GTM/GA4.
- Search Console/Perfil de Empresa: quedan pendientes de acceso. Tras publicar, reenviar sitemap y comprobar deindexación del bono tras rastreo. El noindex no retira inmediatamente la URL de Google.

### Publicación pendiente de aprobación — registro histórico

- El repositorio remoto `jalofernandez/canessa` es público. La revisión automática rechazó el push de `migration/react-static` y `legacy/vue-2026-11-19` por falta de aprobación explícita para publicar ese contenido local en un repositorio público. No se ha reintentado ni buscado otra vía de publicación.
- Se mantienen locales los commits, la CI y la preparación de preview. No se ha publicado un canal Firebase ni se ha alterado live. La aprobación solicitada abarcará las dos ramas y una preview temporal de siete días, nunca la sustitución automática de producción.
- La autorización GitHub existente permite escritura de código, pero no contiene el scope `workflow`. Subir el nuevo archivo de CI requerirá autorización adicional de GitHub CLI (`gh auth refresh -h github.com -s workflow`), a completar por el propietario en el navegador. No se ha solicitado todavía ese permiso.
- El propietario confirma que el dominio venía de Google Domains. Google Domains fue adquirido por Squarespace; el DNS debe gestionarse en esa cuenta migrada. Falta completar el alta de www en Firebase y aplicar las instrucciones DNS concretas, preservando apex y correo.
- Se limita el escaneo de Tailwind a los componentes y rutas de src: los cambios en la documentación no deben cambiar el CSS ni el artefacto medido.

### Cierre local y límites pendientes

- Comprobada visualmente la versión React actual: portada y Contacto. El checkout Vue original sigue limpio en legacy/vue-2026-11-19.
- Última transición del worker: actualización automática de pestañas conocidas, sin borrar cachés ajenas; prueba específica de navegador correcta.
- La repetición Lighthouse se bloqueó temporalmente por límite de gasto de la revisión automática. Tras reanudarse los permisos, se completaron las tres ejecuciones finales (95/95/96, CLS 0), guardando el SHA-256 exacto de la portada medida. El límite temporal quedó resuelto.
- Pendiente aprobación explícita para publicar las dos ramas en el repositorio público y crear la preview temporal. Ninguna de estas acciones ha ocurrido, y live permanece sin cambios.

### Validación final de compatibilidad

- Se detectó que los aliases heredados .html devolvían 404 al generar directorios con index.html. Se conservan los directorios y se añaden redirects 301 explícitos para las 14 rutas no raíz y sus variantes /index.html y /index, además de /index.html y /index de portada. Las rutas desconocidas siguen devolviendo 404.
- Las comprobaciones HTTP de esos aliases pasan en móvil y escritorio. El SHA-256 confirma que el HTML de la portada sigue siendo el medido por Lighthouse.
- El commit local de cierre inicial es 57a2b9e; resultados finales y compatibilidad de aliases validados. Publicación remota y preview temporal continúan pendientes de aprobación.

### Publicación de la preview autorizada

- El propietario autoriza publicar ambas ramas en su repositorio público y crear la preview temporal, conservando producción. La aprobación anterior queda resuelta para esas acciones.
- Preview publicada: https://canessa-722eb--react-migration-5ai9rl00.web.app/ — canal react-migration, versión dbb24b37346b8752; expira el 26/11/2026 a las 15:56 CET.
- Se utilizó --no-authorized-domains para evitar cambios de configuración de Firebase Auth. Sin cambios DNS ni publicación live.
- Comprobadas las 15 URLs publicadas, noindex global, CSP, nosniff, 404 y aliases .html. Chromium valida navegación cliente sin recarga, datos de artículos, diálogo y ausencia de errores/peticiones a terceros. Evidencias en quality/preview-validation.json.
- Producción idéntica antes y después: release 1646319103546244, versión 9f882c141b399c43 (2022).
- Referencia Vue subida a GitHub: legacy/vue-2026-11-19. La rama React requiere autorizar el scope workflow de GitHub CLI para publicar la CI nueva; autorización iniciada por flujo de dispositivo, pendiente del propietario.
- Abierto en Visual Studio Code el worktree React y src/app/routes/home.tsx. No se ha cambiado la confianza del workspace ni la configuración de las extensiones.

### Publicación de código y CI autorizadas

- Autorización de GitHub CLI completada con el scope `workflow`. Publicada la rama `migration/react-static` en https://github.com/jalofernandez/canessa/tree/migration/react-static, incluida la CI. La rama `legacy/vue-2026-11-19` también está disponible en remoto.
- El primer push encontró un corte HTTP. Se resolvió con ajustes de transporte exclusivos del comando, sin cambiar la configuración global de Git.
- `master` conserva `61a6a25a6f1b9660e8220356a085dc588fe045ab`. No se ha fusionado React ni desplegado producción. La preview temporal sigue siendo el entorno de revisión.
- La CI se ejecuta en GitHub Actions para esta rama: https://github.com/jalofernandez/canessa/actions/workflows/quality.yml?query=branch%3Amigration%2Freact-static. El resultado remoto debe comprobarse en esa ejecución; las comprobaciones locales anteriores no lo sustituyen.
- Las 196 alertas anunciadas por GitHub al subir corresponden a la rama predeterminada Vue. La auditoría de dependencias de ejecución de React dio cero avisos; los cuatro moderados de sus herramientas están documentados en `quality/README.md`.
