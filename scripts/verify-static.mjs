import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { parse } from 'parse5';

const { routes, noindex } = JSON.parse(await readFile('scripts/routes.json', 'utf8'));
const dir = 'build/client';
const titles = new Set();
const descriptions = new Set();
const targets = new Set(routes);
function all(node) {
  return [node, ...(node.childNodes ?? []).flatMap(all)];
}
function attr(node, name) {
  return node.attrs?.find((attr) => attr.name === name)?.value;
}
const sitemap = await readFile(dir + '/sitemap.xml', 'utf8');
for (const path of routes) {
  const html = await readFile(dir + (path === '/' ? '/index.html' : path + '/index.html'), 'utf8');
  const nodes = all(parse(html));
  assert.equal(nodes.filter((node) => node.tagName === 'h1').length, 1, path + ': un solo h1');
  assert.equal(
    nodes.filter((node) => node.tagName === 'main' && attr(node, 'id') === 'main-content').length,
    1,
    path + ': landmark principal'
  );
  const title = nodes
    .find((node) => node.tagName === 'title')
    ?.childNodes?.map((node) => node.value ?? '')
    .join('');
  assert.ok(title && !titles.has(title), path + ': título único');
  titles.add(title);
  const description = nodes.find(
    (node) => node.tagName === 'meta' && attr(node, 'name') === 'description'
  );
  const text = attr(description, 'content');
  assert.ok(text && !descriptions.has(text), path + ': description única');
  descriptions.add(text);
  const canonicals = nodes.filter(
    (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical'
  );
  assert.equal(canonicals.length, 1, path + ': canonical único');
  assert.equal(
    attr(canonicals[0], 'href'),
    'https://peluqueriacanessa.com' + (path === '/' ? '' : path)
  );
  assert.equal(
    nodes.find((node) => node.tagName === 'html')?.attrs?.find((attr) => attr.name === 'lang')
      ?.value,
    'es'
  );
  const robots = nodes.find((node) => node.tagName === 'meta' && attr(node, 'name') === 'robots');
  assert.equal(
    attr(robots, 'content')?.includes('noindex'),
    noindex.includes(path),
    path + ': indexación'
  );
  assert.equal(
    sitemap.includes('<loc>https://peluqueriacanessa.com' + (path === '/' ? '' : path) + '</loc>'),
    !noindex.includes(path),
    path + ': sitemap'
  );
  for (const node of nodes) {
    if (
      node.tagName === 'meta' &&
      ['og:image', 'twitter:image'].includes(attr(node, 'property') ?? attr(node, 'name'))
    ) {
      const image = new URL(attr(node, 'content'));
      assert.equal(image.origin, 'https://peluqueriacanessa.com');
      await access(dir + image.pathname);
    }

    if (node.tagName === 'script' && attr(node, 'type') === 'application/ld+json') {
      const schema = JSON.parse(node.childNodes.map((child) => child.value ?? '').join(''));
      assert.ok(!schema.aggregateRating, path + ': sin agregado propio de reseñas');
      if (schema['@type'] === 'LocalBusiness') {
        await access(dir + new URL(schema.logo).pathname);
        await access(dir + new URL(schema.image).pathname);
        assert.equal(schema.address.postalCode, '28342');
        assert.equal(schema.telephone, '+34912480430');
        assert.ok(schema.openingHoursSpecification.some((item) => item.opens === '10:00'));
      }
    }
    for (const name of ['src', 'poster']) {
      const url = attr(node, name);
      if (url?.startsWith('/')) await access(dir + url.split('?')[0]);
    }
    const href = attr(node, 'href');
    if (node.tagName === 'a' && href?.startsWith('/') && !href.startsWith('//'))
      assert.ok(targets.has(href.split(/[?#]/)[0]), path + ': enlace interno sin destino ' + href);
    if (node.tagName === 'img') {
      assert.ok(
        Number(attr(node, 'width')) > 0 && Number(attr(node, 'height')) > 0,
        path + ': dimensiones'
      );
      assert.ok(attr(node, 'alt') !== undefined, path + ': alt');
    }
  }
  assert.ok(html.includes('streamController.close()'), path + ': flujo de hidratación completo');
  assert.ok(!html.includes('28341'), path + ': CP antiguo');
  assert.ok(!html.includes('googletagmanager.com/gtm.js'), path + ': no cargar analítica en HTML');
}
assert.match(await readFile(dir + '/404.html', 'utf8'), /Página no encontrada/);
const firebase = JSON.parse(await readFile('firebase.json', 'utf8'));
assert.equal(firebase.hosting.public, dir);
assert.ok(
  !firebase.hosting.rewrites?.some((rule) => rule.source === '**'),
  'Sin fallback global SPA'
);
console.log(
  `Verificación estática correcta: ${routes.length} URLs, SEO, Schema, enlaces, recursos y 404.`
);
