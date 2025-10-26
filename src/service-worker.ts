/// <reference lib="webworker" />
export {};

declare const self: ServiceWorkerGlobalScope &
  typeof globalThis & {
    skipWaiting: () => void;
    clientsClaim: () => void;
  };

import { registerRoute } from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";
import { StaleWhileRevalidate } from "workbox-strategies";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

// @ts-ignore: __WB_MANIFEST is injected by VitePWA
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images",
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
    self.clientsClaim();
  }
});
