// Build fills this list from scripts/routes.json. No offline cache is created.
const canessaPaths = new Set(/* CANESSA_PATHS */ []);
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        const legacyWorkbox = key.startsWith('workbox-') && key.endsWith(self.registration.scope);
        const legacyCanessa = key.startsWith('canessa-prod-');
        if (legacyWorkbox || legacyCanessa) await caches.delete(key);
      }
      await self.clients.claim();
      const windows = await self.clients.matchAll({ type: 'window' });
      await self.registration.unregister();
      // Refresh only known Canessa pages once, so a cached Vue tab receives React.
      await Promise.all(
        windows.map((client) => {
          const url = new URL(client.url);
          const path = url.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
          if (url.origin === self.location.origin && canessaPaths.has(path))
            return client.navigate(client.url);
        })
      );
    })()
  );
});
