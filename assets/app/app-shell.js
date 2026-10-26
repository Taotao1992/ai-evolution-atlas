(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const shell = params.get("app");
  const isNativeShell = shell === "ios" || shell === "tv";

  if (isNativeShell) {
    document.body.classList.add("native-shell", `native-shell-${shell}`);
    document.body.dataset.appShell = shell;
  }

  function visibleFocusableElements() {
    const selector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    return [...document.querySelectorAll(selector)].filter((element) => {
      if (element.closest("[hidden], [inert], [aria-hidden='true']")) return false;
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    });
  }

  function center(rect) {
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }

  function nextRemoteTarget(current, candidates, direction) {
    const origin = center(current.getBoundingClientRect());
    const horizontal = direction === "ArrowLeft" || direction === "ArrowRight";
    const sign = direction === "ArrowLeft" || direction === "ArrowUp" ? -1 : 1;

    return candidates
      .filter((candidate) => candidate !== current)
      .map((candidate) => {
        const target = center(candidate.getBoundingClientRect());
        const primary = ((horizontal ? target.x - origin.x : target.y - origin.y) / 1) * sign;
        const cross = Math.abs(horizontal ? target.y - origin.y : target.x - origin.x);
        const aligned = cross < (horizontal ? current.offsetHeight : current.offsetWidth) * 0.8;
        return { candidate, primary, score: primary + cross * (aligned ? 1.25 : 3) + (aligned ? 0 : 180) };
      })
      .filter((entry) => entry.primary > 6)
      .sort((a, b) => a.score - b.score)[0]?.candidate;
  }

  function initRemoteNavigation() {
    const directions = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    window.addEventListener("keydown", (event) => {
      if (event.defaultPrevented || !directions.includes(event.key) || event.altKey || event.ctrlKey || event.metaKey) return;
      const active = document.activeElement;
      if (active?.matches("input, textarea, select, [contenteditable='true']")) return;

      const focusable = visibleFocusableElements();
      if (!focusable.length) return;

      let target;
      if (!active || active === document.body || !focusable.includes(active)) {
        target = focusable.find((element) => {
          const rect = element.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        }) || focusable[0];
      } else {
        target = nextRemoteTarget(active, focusable, event.key);
      }

      if (target) {
        event.preventDefault();
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" });
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        window.scrollBy({
          top: (event.key === "ArrowDown" ? 1 : -1) * window.innerHeight * 0.7,
          behavior: "instant",
        });
      }
    });
  }

  if (shell === "tv") initRemoteNavigation();

  if (!isNativeShell && !params.has("verify") && "serviceWorker" in navigator && window.isSecureContext) {
    window.addEventListener("load", () => {
      const workerUrl = new URL("./main.js?service-worker=20261026-app", window.location.href);
      const scope = new URL("./", window.location.href);
      navigator.serviceWorker.register(workerUrl, { scope }).catch((error) => {
        console.warn("Offline support could not be enabled.", error);
      });
    }, { once: true });
  }
})();
