const CACHE_NAME = "yorijambaengi-pwa-v22";
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

// HTML, manifest, and un-hashed source files use network-first so a new deploy is picked up immediately.
// Hashed build assets under /assets remain cache-first because their filenames change per build.
function isFreshFirst(request) {
  if (request.mode === "navigate") return true;
  const url = new URL(request.url);
  const path = url.pathname;
  if (path.endsWith(".html") || path.endsWith(".webmanifest")) return true;
  if (path.includes("/src/") || path.endsWith("/src/main.js") || path.endsWith("/src/styles.css")) return true;
  if (!path.includes("/assets/") && (path.endsWith(".js") || path.endsWith(".css"))) return true;
  return false;
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



