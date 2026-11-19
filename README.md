# Canessa

Web de Peluquería canina Canessa en Valdemoro. React 18, TypeScript 5, pnpm 10,
Vite 7, React Router 7 con prerenderizado y Tailwind CSS 4. El resultado es un
sitio estático para Firebase Hosting; producción no necesita un servidor Node.

Esta versión se desarrolla en `migration/react-static`. La referencia Vue queda
en `legacy/vue-2026-11-19` y en el checkout original. El backup independiente,
las decisiones y el estado de cada fase están en [MIGRATION.md](MIGRATION.md).

## Desarrollo

Usa Node **22.23.4** (`.nvmrc`) y pnpm **10.34.9** (`packageManager`).

```sh
nvm use
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` prepara las fotografías antes de arrancar Vite. El contenido está en
`src/data/` y `src/content/articles/`; las fotografías originales se conservan en
`src/assets/photos/`. Los componentes se encuentran en `src/components/`.

## Comprobaciones

```sh
pnpm lint
pnpm compile
pnpm test
pnpm check-format
pnpm audit --prod --audit-level=high
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

El build genera `build/client`, comprueba las 15 URLs y escribe `firebase.json`
con los hashes CSP del HTML generado. No edites a mano los hashes: modifica
`scripts/finalize-static.mjs` y vuelve a compilar. No se despliega automáticamente.

`pnpm preview` sirve el artefacto mediante el emulador de Firebase Hosting en
`http://127.0.0.1:4178`, con el proyecto ficticio `demo-canessa`. Las pruebas E2E
arrancan ese emulador si hace falta. El puerto 5000 no se utiliza porque puede
estar ocupado por servicios de macOS.

## Contenido y privacidad

- Dirección, teléfono y horarios se centralizan en `src/data/business.ts`.
- Los tres artículos Markdown se procesan en build con una lista permitida de
  etiquetas y protocolos; no se ejecutan como JSX ni se incluye HTML arbitrario.
- El Bono Canessa Club está finalizado: su URL tiene `noindex` y queda fuera del
  sitemap. La invitación a colaborar en el blog sigue vigente.
- La analítica está **desactivada**. No se carga GTM, mapas ni recursos de Google
  durante la visita. Los enlaces externos se abren solo por decisión del usuario.
- La implementación opcional de consentimiento está probada, pero **no debe
  activarse** hasta revisar el contenedor GTM, sus etiquetas, los textos legales
  y las fuentes CSP. Cambiar un booleano no basta para darla por validada.
- Los precios antiguos y el contador global de reseñas no se muestran como datos
  actuales. Verifica catálogo, atribución de testimonios y texto legal antes del
  lanzamiento.

## Publicación

Firebase Hosting sigue siendo el destino. Proyecto/sitio: `canessa-722eb`.
Consulta [RELEASE.md](RELEASE.md) para crear una preview sin indexación, publicar
el artefacto revisado y recuperar la release anterior. La CI comprueba el sitio y
conserva artefactos; no incluye credenciales ni publica producción.

No hay formulario, tienda en línea ni sistema de reservas dentro de esta web.
La cita se acuerda directamente con la peluquería por sus canales de contacto.

## Imágenes y licencia

Fotografías y recursos heredados de Vanessa Vizcaya García, Javier Lorenzo
Fernández y los terceros acreditados en el historial del proyecto. Conservar las
licencias y atribuciones de los recursos utilizados; no vender ni redistribuir
el conjunto de recursos original tal cual. Las dependencias conservan sus
respectivas licencias. Los artículos mantienen sus autores.
