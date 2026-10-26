"use strict";

const CACHE_PREFIX = "ai-evolution-atlas-";
const CACHE_NAME = `${CACHE_PREFIX}20261026-app2`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=20261026-app",
  "./assets/atlas.css?v=20261026-app",
  "./main.js?v=20261026-app2",
  "./assets/app/app-shell.js?v=20261026-app2",
  "./assets/app/course.js?v=20261026-app",
  "./assets/app/app.webmanifest",
  "./assets/app/offline-assets.json",
  "./assets/favicon.svg",
  "./assets/atlas-hero.svg",
  "./assets/evolution-3d.js?v=20261026-app",
  "./assets/vendor/three.core.js",
  "./assets/vendor/three.module.min.js",
  "./assets/vendor/addons/controls/OrbitControls.js",
  "./assets/app/icon-192.png",
  "./assets/app/icon-512.png",
  "./assets/app/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const manifestResponse = await fetch("./assets/app/offline-assets.json", { cache: "no-cache" });
    if (!manifestResponse.ok) throw new Error("Offline asset manifest could not be loaded");
    const assets = await manifestResponse.json();
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([...new Set([...APP_SHELL, ...assets])]);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ))
      .then(() => self.clients.claim()),
  );
});

async function navigationResponse(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put("./index.html", response.clone());
    }
    return response;
  } catch {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match("./index.html") || await cache.match("./");
    return cached || new Response("The atlas is offline. Reconnect once to finish installing it.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}

async function cachedResource(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const network = fetch(request).then(async (response) => {
    if (response.ok && response.type === "basic") await cache.put(request, response.clone());
    return response;
  });

  if (cached) {
    network.catch(() => {});
    return cached;
  }

  try {
    return await network;
  } catch {
    return new Response("Offline resource unavailable", { status: 504 });
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(navigationResponse(request));
    return;
  }

  event.respondWith(cachedResource(request));
});
