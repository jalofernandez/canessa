import { expect, test } from '@playwright/test';

for (const path of ['/', '/contacto', '/blog/el-gran-reencuentro']) {
  test(`static document ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });
}
test('client navigation and a real HTTP 404', async ({ page, request }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Pedir cita', exact: true }).click();
  await expect(page).toHaveURL(/contacto$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Contacto');
  expect((await request.get('/una-direccion-inexistente')).status()).toBe(404);
});
