import { writeFile } from 'node:fs/promises';
await writeFile(
  'build/client/404.html',
  '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Página no encontrada | Canessa</title></head><body><main><h1>Página no encontrada</h1><p>Esta dirección no existe.</p><a href="/">Volver a Canessa</a></main></body></html>'
);
