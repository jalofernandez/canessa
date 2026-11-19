import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
for (const path of ['index.html', 'contacto/index.html', 'blog/el-gran-reencuentro/index.html']) {
  const html = await readFile('build/client/' + path, 'utf8');
  assert.match(html, /<h1[ >]/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /name="description"/);
}
assert.match(await readFile('build/client/404.html', 'utf8'), /Página no encontrada/);
console.log('Prototipo: tres rutas con HTML, metadatos y 404 generado.');
