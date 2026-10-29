/* One entry point for the browser course and the root-scoped offline worker. */
const isServiceWorker = typeof window === "undefined"
  && typeof self !== "undefined"
  && typeof self.skipWaiting === "function"
  && typeof importScripts === "function";

if (isServiceWorker) {
  importScripts("./assets/app/service-worker.js");
} else {
  (async () => {
    try {
      await import("./assets/app/app-shell.js?v=20261029-grove");
      await import("./assets/app/course.js?v=20261029-grove");
    } catch (error) {
      console.error("The AI Evolution Atlas could not be initialized.", error);
    }
  })();
}
