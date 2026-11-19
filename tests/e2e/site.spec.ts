import { readFileSync } from 'node:fs';
import { mkdir, writeFile, rm } from 'node:fs/promises';

import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const { routes } = JSON.parse(readFileSync('scripts/routes.json', 'utf8')) as { routes: string[] };
for (const path of routes) {
  test(`direct URL, hydration and accessibility: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    const external: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('request', (request) => {
      if (/^https?:/.test(request.url()) && !request.url().startsWith('http://127.0.0.1:4178'))
        external.push(request.url());
    });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
    expect(external).toEqual([]);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(
      results.violations.map((item) => ({
        id: item.id,
        nodes: item.nodes.map((node) => node.target),
      }))
    ).toEqual([]);
  });
}

test('navigation, dynamic article data and metadata stay correct', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  const timeOrigin = await page.evaluate(() => performance.timeOrigin);
  await page.getByRole('link', { name: 'Pedir cita', exact: true }).click();
  await expect(page).toHaveURL(/contacto$/);
  await expect(page.getByRole('main')).toContainText('28342');
  if (test.info().project.name === 'mobile')
    await page.getByRole('button', { name: 'Menú', exact: true }).click();
  await page
    .getByRole('navigation', { name: 'Principal' })
    .getByRole('link', { name: 'Blog', exact: true })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('historias');
  await page
    .getByRole('heading', { name: 'El gran reencuentro', exact: true })
    .getByRole('link')
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('El gran reencuentro');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://peluqueriacanessa.com/blog/el-gran-reencuentro'
  );
  expect(errors).toEqual([]);
  expect(await page.evaluate(() => performance.timeOrigin)).toBe(timeOrigin);
});

test('Hosting redirects, headers, 404 and retired campaign', async ({ request }) => {
  const missing = await request.get('/una-direccion-inexistente');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('Página no encontrada');
  const redirect = await request.get('/mascotactiva', { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toBe('/servicios');
  const retired = await request.get('/bono-canessa-club');
  expect(retired.headers()['x-robots-tag']).toContain('noindex');
  expect(await (await request.get('/sitemap.xml')).text()).not.toContain('bono-canessa-club');
  const home = await request.get('/');
  expect(home.headers()['x-content-type-options']).toBe('nosniff');
  expect(home.headers()['content-security-policy']).toContain("object-src 'none'");
  const worker = await request.get('/sw.js');
  expect(worker.headers()['cache-control']).toContain('no-store');
});

test('cookie preferences dialog restores focus and closes with Escape', async ({ page }) => {
  await page.goto('/contacto');
  const button = page.getByRole('button', { name: 'Preferencias de cookies', exact: true });
  await button.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('dialog')).toContainText('analítica está desactivada');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(button).toBeFocused();
});

test('mobile menu announces state, closes on Escape and keeps focus', async ({ page }) => {
  test.skip(test.info().project.name !== 'mobile');
  await page.goto('/');
  const menu = page.getByRole('button', { name: /menú/i });
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});

test('content, contacts and gallery work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4178/contacto');
  await expect(page.getByRole('main')).toContainText('28342 Valdemoro');
  await expect(page.getByRole('main').getByRole('link', { name: '91 248 04 30' })).toHaveAttribute(
    'href',
    'tel:+34912480430'
  );
  await page.goto('http://127.0.0.1:4178/blog/el-gran-reencuentro');
  await expect(page.locator('.prose')).toContainText('Brenda');
  await context.close();
});

test('layout at narrow mobile, tablet and desktop sizes', async ({ page }) => {
  test.skip(test.info().project.name !== 'desktop');
  await mkdir('quality/screenshots', { recursive: true });
  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true
    );
    await page.screenshot({ path: `quality/screenshots/home-${width}.png` });
  }
});

test('retires a legacy worker while preserving unrelated caches', async ({ page }) => {
  test.skip(test.info().project.name !== 'desktop');
  const fixture = 'build/client/legacy-test-worker.js';
  await writeFile(
    fixture,
    `self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));self.addEventListener('fetch',event=>{if(new URL(event.request.url).pathname==='/legacy-check')event.respondWith(Promise.resolve(new Response('legacy-vue-cache')));});`
  );
  try {
    await page.goto('/');
    await page.evaluate(async () => {
      await navigator.serviceWorker.register('/legacy-test-worker.js', { scope: '/' });
      await navigator.serviceWorker.ready;
    });
    await page.reload();
    expect(await page.evaluate(async () => (await fetch('/legacy-check')).text())).toBe(
      'legacy-vue-cache'
    );
    await page.evaluate(async () => {
      await caches.open('workbox-runtime-' + location.origin + '/');
      await caches.open('unrelated-app-cache');
      await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    });
    await expect
      .poll(() =>
        page.evaluate(async () => (await caches.keys()).filter((key) => key.startsWith('workbox-')))
      )
      .toEqual([]);
    expect(await page.evaluate(() => caches.keys())).toContain('unrelated-app-cache');
    await expect
      .poll(() =>
        page.evaluate(async () => Boolean(await navigator.serviceWorker.getRegistration('/')))
      )
      .toBe(false);
    await page.reload();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('feliz');
  } finally {
    await rm(fixture, { force: true });
  }
});
