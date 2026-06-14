const CACHE_NAME = "yorijambaengi-pwa-v17";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/maskable.svg",
  "./icons/apple-touch-icon.svg",
  "./offline.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

// HTML/manifest use network-first so a new deploy is picked up immediately
// (avoids serving a stale index.html that points at old hashed assets).
// Hashed build assets are content-addressed, so cache-first is safe for them.
function isFreshFirst(request) {
  if (request.mode === "navigate") return true;
  const url = new URL(request.url);
  return url.pathname.endsWith(".html") || url.pathname.endsWith(".webmanifest");
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  if (isFreshFirst(event.request)) {
    // Bypass the HTTP cache for the shell so the latest index.html (and its
    // hashed asset references) is always fetched when online.
    event.respondWith(
      fetch(event.request, { cache: "reload" })
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((cached) =>
            cached || caches.match(event.request.mode === "navigate" ? "./offline.html" : "./")
          )
        )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match("./"));
    })
  );
});
