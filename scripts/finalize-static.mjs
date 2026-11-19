import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, writeFile, rm } from 'node:fs/promises';

import { parse } from 'parse5';
import { format } from 'prettier';

const { routes, noindex } = JSON.parse(await readFile('scripts/routes.json', 'utf8'));
const origin = 'https://peluqueriacanessa.com';
const client = 'build/client';
const hashes = new Set();
const homeNodes = parse(await readFile(client + '/index.html', 'utf8'));
function findStyles(node) {
  return [
    ...(node.tagName === 'link' &&
    node.attrs.some((a) => a.name === 'rel' && a.value === 'stylesheet')
      ? [node.attrs.find((a) => a.name === 'href')?.value]
      : []),
    ...(node.childNodes ?? []).flatMap(findStyles),
  ];
}
const stylesheet = findStyles(homeNodes)[0];
assert.ok(stylesheet, 'Falta stylesheet del sitio');
function scripts(node) {
  if (node.tagName === 'script' && !node.attrs.some((attr) => attr.name === 'src')) {
    const text = node.childNodes.map((child) => child.value ?? '').join('');
    hashes.add(`'sha256-${createHash('sha256').update(text).digest('base64')}'`);
  }
  for (const child of node.childNodes ?? []) scripts(child);
}
for (const path of routes)
  scripts(
    parse(await readFile(client + (path === '/' ? '/index.html' : path + '/index.html'), 'utf8'))
  );
const sitemap = routes
  .filter((path) => !noindex.includes(path))
  .map((path) => `<url><loc>${origin}${path === '/' ? '' : path}</loc></url>`)
  .join('');
await writeFile(
  client + '/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>\n`
);
// No disallow for the retired campaign: Google needs to crawl its noindex.
await writeFile(
  client + '/robots.txt',
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
);
await writeFile(
  client + '/404.html',
  '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Página no encontrada | Canessa</title><link rel="icon" href="/icon.png"><link rel="stylesheet" href="' +
    stylesheet +
    '"></head><body><header class="site-header"><div class="container header-inner"><a class="brand" href="/">canessa</a></div></header><main class="container error-page" id="main-content"><h1>Página no encontrada</h1><p>Esta dirección no existe. Te esperamos en Canessa.</p><p><a href="/">Volver al inicio</a></p><p><a href="/contacto">Contacto, dirección y horarios</a></p></main></body></html>'
);
await rm(client + '/__spa-fallback.html', { force: true });
const worker = await readFile('public/sw.js', 'utf8');
await writeFile(
  client + '/sw.js',
  worker.replace('/* CANESSA_PATHS */ []', JSON.stringify(routes))
);

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' " + [...hashes].sort().join(' '),
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  'upgrade-insecure-requests',
].join('; ');
assert.ok(csp.length < 12000, 'CSP demasiado grande para Hosting');
const config = {
  hosting: {
    site: 'canessa-722eb',
    public: client,
    ignore: ['firebase.json', '**/.*', '**/node_modules/**'],
    cleanUrls: true,
    trailingSlash: false,
    redirects: [
      { source: '/mascotactiva', destination: '/servicios', type: 301 },
      { source: '/index.html', destination: '/', type: 301 },
      { source: '/index', destination: '/', type: 301 },
      ...routes
        .filter((path) => path !== '/')
        .flatMap((path) => [
          { source: path + '.html', destination: path, type: 301 },
          { source: path + '/index.html', destination: path, type: 301 },
          { source: path + '/index', destination: path, type: 301 },
        ]),
    ],
    headers: [
      {
        source: '**',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
      {
        source: '/assets/**',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/media/**',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'Service-Worker-Allowed', value: '/' },
        ],
      },
      {
        source: '/bono-canessa-club{,/**}',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      },
    ],
  },
  emulators: {
    hosting: { host: '127.0.0.1', port: 4178 },
    ui: { enabled: false },
    singleProjectMode: true,
  },
};
await writeFile(
  'firebase.json',
  await format(JSON.stringify(config), { parser: 'json', printWidth: 100 })
);
await writeFile(
  client + '/release.json',
  JSON.stringify(
    {
      version: '3.0.0',
      renderedRoutes: routes,
      indexableRoutes: routes.filter((path) => !noindex.includes(path)),
    },
    null,
    2
  ) + '\n'
);
console.log(
  `Hosting preparado: ${routes.length} URLs, ${routes.length - noindex.length} indexables y CSP sin scripts inline sin hash.`
);
