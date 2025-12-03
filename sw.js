/**
 * Power Scraper Pro - Service Worker
 * Provides offline caching and fast repeat visits
 */

const CACHE_NAME = 'psp-cache-v1';
const STATIC_CACHE = 'psp-static-v1';
const IMAGE_CACHE = 'psp-images-v1';

// Core files to cache immediately
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/favicon.svg'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching core assets');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== IMAGE_CACHE) {
              console.log('Service Worker: Clearing old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== location.origin) return;

  // Handle image requests with cache-first strategy
  if (request.destination === 'image' ||
      url.pathname.includes('/ScreenShots/') ||
      url.pathname.endsWith('.webp') ||
      url.pathname.endsWith('.avif') ||
      url.pathname.endsWith('.png')) {
    event.respondWith(
      caches.open(IMAGE_CACHE)
        .then((cache) => {
          return cache.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              return fetch(request)
                .then((networkResponse) => {
                  // Only cache successful responses
                  if (networkResponse.ok) {
                    cache.put(request, networkResponse.clone());
                  }
                  return networkResponse;
                });
            });
        })
    );
    return;
  }

  // Handle other requests with stale-while-revalidate strategy
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            // Update cache with fresh response
            if (networkResponse.ok) {
              caches.open(STATIC_CACHE)
                .then((cache) => cache.put(request, networkResponse.clone()));
            }
            return networkResponse;
          })
          .catch(() => {
            // If network fails and we have no cache, return offline page
            if (request.destination === 'document') {
              return caches.match('/index.html');
            }
          });

        // Return cached response immediately, or wait for network
        return cachedResponse || fetchPromise;
      })
  );
});
