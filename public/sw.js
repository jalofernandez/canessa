// Retire only the old Canessa/Workbox caches for this registration scope.
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
      await self.registration.unregister();
    })()
  );
});
