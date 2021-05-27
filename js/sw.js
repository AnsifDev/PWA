const cacheName = 'static';
const precacheResources = ['/', '/index.html', '/css/styles.css', '/js/swLoader.js', '/MainActivity.html'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
