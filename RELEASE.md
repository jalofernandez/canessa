# Distribución y recuperación

## Entorno

Node y pnpm están fijados en `.nvmrc` y `package.json`. Usar la CLI local con
`pnpm exec firebase`; la CLI global antigua no es compatible con este entorno.

La rama de desarrollo es `migration/react-static`; `master` y producción no se
sustituyen durante las pruebas locales. `firebase.json` se genera en cada build.

## Artefacto revisable

1. Ejecutar instalación congelada, formato, lint, tipos, pruebas y build.
2. Ejecutar `pnpm test:e2e` contra Firebase Hosting local.
3. Revisar el resultado en escritorio, tableta y móvil, con teclado y sin JS.
4. Consultar `build/release-manifest.json`: identifica el commit, estado de cambios
   locales y SHA-256 de cada archivo que se va a publicar. No modificar ese
   directorio después de su validación.
5. Confirmar datos legales, disponibilidad del catálogo, imágenes y contenido.

## Preview de Firebase

Preparar una configuración independiente, siempre con `noindex` en las respuestas
HTTP de la preview. Las URLs canónicas siguen apuntando al dominio definitivo.

```sh
node scripts/prepare-preview.mjs
pnpm exec firebase hosting:channel:deploy react-migration --expires 7d --project canessa-722eb --config firebase.preview.json --no-authorized-domains
```

Este comando publica únicamente un canal temporal. No publica la release live ni
modifica DNS. La opción --no-authorized-domains evita sincronizar dominios
con Firebase Auth. `firebase.preview.json` no contiene credenciales y se ignora en Git.
La preview no debe enlazarse desde la web pública.

Comprobar allí las 15 URLs, 404, redirect heredado, CSP, `X-Robots-Tag: noindex`,
imágenes, navegación, cookies y cabeceras. Obtener aceptación del contenido y del
aspecto antes de sustituir producción.

## Publicación de producción

Antes de publicar, confirmar mediante API/Consola el identificador de la release
live y que su versión siga retenida. El último inventario consultado se conserva
en `quality/firebase-baseline.json`, pero hay que refrescarlo antes del lanzamiento.

Consultar DNS.md para resolver el certificado y redirect de `www.peluqueriacanessa.com`; verificar DNS
con el proveedor del dominio y las instrucciones exactas de Firebase. No habilitar
HSTS para todos los subdominios sin comprobarlos primero.

Una vez aprobado el artefacto:

```sh
pnpm exec firebase deploy --only hosting --project canessa-722eb --config firebase.json
```

No utilizar `firebase.preview.json` para live. No reconstruir entre la aceptación
del artefacto y su publicación. Verificar en producción las rutas, HTTPS, ausencia
de `noindex` global, sitemap y contacto. El bono sí conserva su `noindex`.

El worker de retirada elimina solo las cachés Canessa/Workbox del scope heredado;
no borra cachés de otras aplicaciones. Probar también con un navegador que haya
visitado la antigua web. Mantener la versión previa disponible durante el cambio.

## Recuperación

Desde Firebase Console → Hosting → historial de releases, elegir la release
anterior identificada y ejecutar Roll back. Esto recupera el contenido publicado;
el backup Vue local sirve para recuperar el código y los archivos del equipo.
No reconstruir el Vue antiguo para un rollback de emergencia.

Después de volver atrás, verificar HTML, assets, datos, worker y contacto. Si el
worker ya se ha retirado, la web Vue debe seguir sirviéndose por red; comprobarlo
sin confiar en cachés anteriores.

## Después del lanzamiento

Revisar en Search Console sitemap, cobertura, canonical y retirada del bono tras
el siguiente rastreo. `noindex` no implica una eliminación instantánea de Google.
Revisar errores y contacto a las 24–48 horas y SEO/rendimiento a las 2–4 semanas.
No se han creado automatizaciones ni avisos recurrentes para estas revisiones.
