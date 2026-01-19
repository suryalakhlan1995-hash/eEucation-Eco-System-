
const CACHE_NAME = 'sarthi-smart-offline-v5.0';
// These are the core files needed to start the app offline
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install Event: Cache core assets immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache for offline mode');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Clearing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event: The Heart of Offline Capability
self.addEventListener('fetch', (event) => {
  // We only handle http/https requests
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. If found in cache, return it (Offline First for assets)
      if (cachedResponse) {
        return cachedResponse;
      }

      // 2. If not in cache, fetch from network
      return fetch(event.request).then((networkResponse) => {
        // Check if we received a valid response
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // 3. Clone the response and save it to cache for next time
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          // Cache dynamic assets (JS chunks, CSS, Images) so they work offline next time
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // 4. Fallback for navigation requests (e.g., if offline and reloading a sub-page)
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
