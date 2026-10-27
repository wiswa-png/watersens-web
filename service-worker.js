// Service Worker Minimalist - Selalu ambil data terbaru dari GitHub
self.addEventListener('install', (event) => {
    self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Abaikan cache, tembak langsung ke server agar aplikasi auto-update
    event.respondWith(fetch(event.request));
});