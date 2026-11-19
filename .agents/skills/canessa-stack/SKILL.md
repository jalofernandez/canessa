---
name: canessa-stack
description: >-
  Stack y convenciones de la web estática de Canessa: React, TypeScript, pnpm,
  Vite, React Router con prerenderizado, Tailwind, componentes y pruebas.
  Usar para implementar o revisar la migración y mantener esta web.
---

# Canessa: stack y prácticas técnicas

## Contexto

La implementación React vive en `migration/react-static`, dentro del worktree
`.worktrees/canessa-react`. La versión Nuxt 2/Vue se conserva en el checkout
original y la referencia `legacy/vue-2026-11-19`; no hay que reconstruirla ni
modificarla para trabajar en React. Lee `AGENTS.md`, `README.md`, `package.json`,
`MIGRATION.md`, `react-router.config.ts` y `firebase.json` antes de cambiar el stack.

## Versiones y comandos

Las versiones exactas verificadas están en `package.json` y `pnpm-lock.yaml`.

- React 18 y TypeScript 5 estricto, con noUnusedLocals y noUnusedParameters.
- Node 22.23.4 y pnpm 10.34.9: `.nvmrc`, `packageManager` y CI coherentes.
- Vite 7, React Router 7 en modo framework y Tailwind 4 con @tailwindcss/vite.
- Vitest 4, happy-dom y Testing Library. Pruebas de navegador con Playwright y axe.
- ESLint 10 flat y Prettier 3. La línea 9 del plan inicial se sustituyó porque ya
  no tiene soporte; no forzar peers de plugins antiguos para incorporarlos.
- Firebase CLI 15 local al proyecto. Usar `pnpm exec firebase`; la CLI global 13
  falló al servir archivos con Node 22.

Usar pnpm install --frozen-lockfile para reproducir, y pnpm install únicamente
cuando se modifiquen dependencias deliberadamente. No mezclar lockfiles.

Scripts reales: `dev`, `assets`, `lint`, `compile`, `test`, `test:e2e`, `build`,
`preview`, `verify:static`, `format` y `check-format`. El build incluye generación,
verificación estática y huellas del artefacto. La comprobación de tipos es aparte.

## Renderizado y rutas

El inventario único es `scripts/routes.json`: 15 URLs generadas, 14 indexables.
El Bono Canessa Club se conserva deprecado con noindex y sin navegación/sitemap.
No retirar o redirigir otras URLs sin una decisión explícita.

- `ssr: false` significa sin servidor en producción; las páginas sí se generan
  con contenido HTML en build. La salida es `build/client`.
- La entrada de servidor usa streaming de React 18: debe completar también el
  flujo de datos del router. renderToString dejaba inactivos los controles.
- El descubrimiento de rutas es `initial`. Preservar archivos .data y comprobar
  la navegación cliente, además de aperturas directas y recargas.
- No añadir un segundo router ni un rewrite global a index.html. Las rutas
  desconocidas devuelven 404 real en Firebase Hosting.
- Las APIs del navegador se usan solo en cliente. Los botones que necesitan
  eventos React esperan a la hidratación mediante useHydrated.

## Código, componentes y contenido

Usar alias @/* → src/*. Componentes funcionales con props tipadas, composición
con children y primitivas pequeñas. Sin any ni capas empresariales del portal.
Funciones/variables camelCase, componentes PascalCase y hooks useX.

Datos de negocio y horario: `src/data/business.ts`. No duplicar teléfono, CP u
horarios en componentes o Schema. No inventar precios, servicios, reseñas o métricas.
Artículos en `src/content/articles/`, procesados solo en build mediante el módulo
.server. Conservar autores, sanitizar HTML y protocolos explícitamente y nunca
interpretar el contenido como JSX o Vue. JSON-LD se serializa con safeJson.

UI con tokens semánticos de Canessa, @theme de Tailwind 4 y cn (clsx + tailwind-merge).
Respetar marca, idioma y fotografías. Controles nativos, enlaces para navegación,
foco visible, teclado, aria-expanded real, cierre Escape y retorno del foco.
No añadir bibliotecas de componentes del portal que no se han facilitado.

Fotografías originales en `src/assets/photos/`; variantes generadas en
`public/media/`. Los nombres se derivan del contenido optimizado, no solo del
original, para que immutable siga siendo correcto al cambiar la compresión.
Reservar dimensiones, usar srcset/sizes y no hacer lazy el recurso principal.
El vídeo de instalaciones se carga a petición; no recuperar vídeo automático.

## Privacidad y alojamiento

Analítica desactivada hasta revisar GTM/GA4. El consentimiento opcional tiene
pruebas de aceptar, rechazar y revocar, pero no basta con habilitarlo: revisar
etiquetas reales, CSP y textos legales antes. No cargar mapas/SDKs ni fuentes de
terceros al visitar la web. No añadir Firebase Auth/Database/Storage sin función.

`scripts/finalize-static.mjs` genera firebase.json y hashes CSP a partir del HTML.
No editar esos hashes a mano. HTML y datos revalidan; assets con hash son immutable.
El worker de retirada elimina solo cachés heredadas identificadas de Canessa,
nunca todo CacheStorage. La preview se publica con noindex global; producción
no lo lleva, salvo el bono. Ver `RELEASE.md` para la separación y el rollback.

No añadir cuentas, multitenencia, ecommerce, reservas o formularios sin necesidad.
React Hook Form, Zod, TanStack Query, Axios y animaciones son opcionales y requieren
una función concreta. No simular envíos sin endpoint.

## Validación

Ejecutar lint, compile, test, check-format y build para cambios de herramientas.
Ajustar las pruebas al comportamiento que pueda romperse. Usar test:e2e para UI,
rutas y Hosting: HTML inicial, hidratación real, navegación sin recarga completa,
metadatos, contacto, menú, diálogo, accesibilidad, 404, redirects y worker.
No hacer llamadas ni enviar WhatsApp durante las pruebas.

happy-dom no valida la maquetación ni sustituye el navegador. Revisar 390, 768 y
1280 píxeles y el resultado estático. Registrar errores y limitaciones en
MIGRATION.md. La CI verifica y guarda artefactos; no despliega producción.

Prettier: comillas simples en JS/TS, dobles en JSX, punto y coma, 100 columnas,
trailingComma es5, LF y dos espacios. Mantener imports claros y ordenados.
