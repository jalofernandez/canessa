---
name: canessa-stack
description: >-
  Define el stack y las convenciones técnicas de Canessa para su migración de
  Nuxt 2 a React: pnpm, TypeScript, Vite, Tailwind, componentes y pruebas.
  Usar al planificar o implementar esa migración, configurar herramientas,
  organizar código React o revisar componentes en este repositorio.
---

# Canessa: stack y prácticas técnicas

## Estado y alcance

Esta skill describe el stack de la migración en curso en `migration/react-static`; el original Vue sigue en el checkout principal. ESLint se actualiza a 10 porque la línea 9 prevista ya no tiene soporte.
El repositorio parte de Nuxt 2, Vue, Bulma/Sass y `package-lock.json`.
Lee `AGENTS.md`, `README.md`, `package.json`, `nuxt.config.js` y, para el
alojamiento estático, `firebase.json` antes de cambiar su configuración.

Aplica estas convenciones al código React cuando se autorice su implementación.
Crear o consultar esta skill no autoriza a migrar, instalar paquetes ni desplegar.
Mientras se trabaje en la versión Nuxt, conserva sus herramientas y comandos.
Registra en `MIGRATION.md` las decisiones y etapas cuando comience la migración.

## Stack objetivo

Se conservan las versiones mayores de la referencia del portal para mantener
su tecnología; no se presentan como las últimas versiones disponibles.
Al preparar el scaffold, verifica compatibilidad y fija versiones concretas
en `package.json` y el lockfile antes de afirmar que el conjunto funciona.

- **UI:** React 18 y TypeScript 5, con `strict`, `noUnusedLocals` y
  `noUnusedParameters`. Componentes funcionales y hooks.
- **Build:** Vite 7 y los plugins compatibles con el modo de React elegido;
  `@vitejs/plugin-react` para una configuración React convencional.
- **Paquetes:** pnpm 10; la referencia usa 10.11. Declara la versión exacta
  elegida en `packageManager` y usa un único `pnpm-lock.yaml` para el destino.
- **Node:** línea 22, versión 22.12 o superior compatible con las dependencias
  elegidas; fija la misma versión concreta en `.nvmrc` y CI si se configura CI.
- **Estilos:** Tailwind CSS 4 con `@tailwindcss/vite`, variables CSS y tokens
  semánticos. `clsx` y `tailwind-merge` para la utilidad `cn`.
- **Rutas:** React Router 7 para conservar las páginas y sus URLs.
- **Pruebas:** Vitest 4, happy-dom, React Testing Library,
  `@testing-library/jest-dom` y `@testing-library/user-event`.
- **Calidad:** ESLint 10 con configuración flat y Prettier 3.

Al convertir el proyecto a pnpm, realiza y verifica la conversión del lockfile
como parte de esa etapa; no borres ahora el lockfile npm del sitio Nuxt.
Una vez convertido, usa `pnpm install --frozen-lockfile` en CI y validaciones
reproducibles; usa `pnpm install` al modificar dependencias deliberadamente.

## Renderizado y alojamiento estático

Canessa ya genera páginas estáticas y tiene varias rutas y artículos.
Preserva HTML con contenido y metadatos por URL en el resultado generado;
un bundle cliente de Vite por sí solo no sustituye esa generación.

Define y documenta la estrategia de prerenderizado antes de crear el scaffold.
Evalúa el modo framework de React Router 7 con prerenderizado y sin servidor
en producción, comprobando su compatibilidad con las versiones elegidas.
Si se usa ese modo, respeta sus plugins y entradas en lugar de copiar el
arranque SPA del portal o montar dos routers.

Enumera también las rutas de contenido dinámico al generar el sitio. Comprueba
la apertura directa y recarga de cada URL, los enlaces con ancla, los redirects
existentes, los metadatos, sitemap, robots y el 404 en el alojamiento estático.
Las APIs del navegador deben ejecutarse solo en cliente si el código se evalúa
durante el prerenderizado. Mantén consistentes el HTML generado y su hidratación.

`firebase.json` apunta actualmente a `dist/`. Si cambia la carpeta de salida,
actualiza la configuración como parte de la migración verificada. El README
menciona Firebase y el script de deploy usa gh-pages: confirma el destino real
antes de cambiar el despliegue; no deduzcas uno solo a partir de un script.

## Organización del código React

Usa `@/*` como alias de `src/*` en TypeScript, build y pruebas.
La siguiente estructura es objetivo; no presupongas que estos archivos existen:

```text
src/
  app/             # arranque, rutas y layout según el modo de router elegido
  components/      # UI reutilizable; PascalCase/Component.tsx
  content/         # contenido estático tipado y adaptación de artículos
  assets/          # recursos procesados por el build
  hooks/           # hooks compartidos useX
  lib/             # adaptadores de librerías cuando sean necesarios
  utils/cn.ts      # composición de clases
  main.css         # Tailwind y tokens
  test/setup.ts    # configuración de Testing Library y limpieza
public/            # recursos que conservan nombre y URL
```

Coloca las páginas en `src/app/routes/` si el modo elegido permite configurar
esa ubicación; adapta las rutas y entradas a las convenciones del framework.
Mantén los tests junto al código como `Component.test.tsx`. No crees carpetas
vacías ni una arquitectura de features del portal para páginas de contenido.

## Sistema de componentes y estilos

La referencia describe componentes propios con Tailwind y tokens; no incluye
su implementación ni identifica una biblioteca como shadcn, Radix o MUI.
Reproduce las convenciones técnicas, sin asumir acceso a esos componentes.

- Construye primitivas reutilizables con props tipadas; separa su presentación
  del contenido de cada página y compón con `children` cuando sea útil.
- Define colores, tipografía, espaciado, bordes y radios con tokens de Canessa.
  Usa `@theme` de Tailwind 4; usa `@theme inline` si los tokens referencian otras
  variables CSS. No copies la configuración de Tailwind 3 de otros repos.
- Usa utilidades semánticas como `bg-brand`, `text-fg` y `border-border`,
  respaldadas por sus tokens. Centraliza la composición de clases en `cn`.
- Conserva el idioma, los recursos de marca y los requisitos responsive del
  sitio. Las fuentes de la referencia del portal no definen la marca Canessa.
- Las primitivas interactivas deben incluir foco visible, navegación por teclado,
  estados aplicables y semántica HTML adecuada. Usa enlaces para navegar.
- Canessa tiene una sola marca: los tokens son locales; no necesita un proveedor
  de temas por cliente ni peticiones para obtener su identidad visual.

## Datos, formularios y dependencias opcionales

Usa contenido local tipado o generado durante el build para páginas estáticas.
No añadas proveedores de red para leer datos que ya están en el repositorio.
Conserva y adapta el contenido Markdown existente sin asumir que Nuxt Content
funcionará directamente en React.

Mantén estas opciones de la referencia solo cuando una función del sitio las
necesite: React Hook Form para formularios, Zod para validar sus contratos,
TanStack Query 5 para estado remoto, Axios para una capa HTTP compartida y
MSW 2 para pruebas de peticiones. No simules el envío correcto de un formulario
que carezca de endpoint. Motion u otras animaciones requieren una necesidad
visual concreta y respeto por `prefers-reduced-motion`.

El portal no aporta requisitos de autenticación, multitenencia, finanzas,
asistente, dashboards ni infraestructura para este website. No traslades sus
SDKs, proveedores, rutas, campos de dominio, puertos de callback o CI.
Las integraciones actuales de Canessa se evalúan por su uso real durante la
migración; no se eliminan por estar ausentes del nuevo stack base.

## Convenciones

- Componentes y sus archivos en PascalCase; hooks `useX`; funciones y variables
  en camelCase. Usa `const` salvo que la variable se reasigne.
- Usa `interface` para formas de objeto y `type` para uniones. No añadas prefijos
  `I` o `T` a nombres nuevos ni uses `any` para eludir errores de contratos.
- Imports con `@/…` para código interno; grupos builtin, externos, internos,
  padres y hermanos, separados por una línea y ordenados alfabéticamente;
  `react` primero dentro de externos.
- Prettier: comillas simples en JS/TS, dobles en JSX, punto y coma,
  `printWidth: 100`, `trailingComma: 'es5'`, LF y dos espacios.

## Comandos objetivo y verificación

Al crear el scaffold React, define los siguientes scripts en `package.json`;
no los reportes como existentes mientras siga siendo el proyecto Nuxt:

- `pnpm dev`: desarrollo local.
- `pnpm lint`: ESLint, incluyendo TS y TSX.
- `pnpm compile`: comprobación TypeScript sin emitir archivos; incluir código
  de aplicación y de pruebas, y los tipos generados del router si aplica.
- `pnpm test`: Vitest en modo no interactivo (`vitest run`).
- `pnpm build`: build y generación del resultado estático completo.
- `pnpm preview`: servir localmente el resultado generado para revisarlo.
- `pnpm format` y `pnpm check-format`: escribir y verificar con Prettier.

El build no sustituye la comprobación de tipos. Ejecuta lint, compile, test,
check-format y build para verificar el scaffold; después ajusta la validación
al alcance de cada cambio. Cubre comportamiento observable: navegación,
interacciones, formularios si existen, y estados de error relevantes.
happy-dom no prueba la maquetación ni la hidratación en un navegador real:
revisa también el resultado estático en móvil y escritorio y sus URLs directas.

Si añades CI, ejecuta esos controles con el lockfile congelado antes de publicar
artefactos; no copies la infraestructura ni los pasos de release del portal.

## Documentación técnica de consulta

Consulta la documentación correspondiente a la versión elegida al implementar:

- [Vite 7 y sus requisitos de Node](https://vite.dev/blog/announcing-vite7).
- [React Router: prerenderizado](https://reactrouter.com/how-to/pre-rendering)
  (selecciona la versión 7 de la documentación).
- [Tailwind CSS con Vite](https://tailwindcss.com/docs/installation/using-vite).
- [Vitest](https://vitest.dev/guide/) (consulta la documentación de la versión 4).
