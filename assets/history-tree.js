/* The slide-eight illustration, enhanced with semantic HTML rather than a
   replacement 3D model. The tree stays visible when scripting is unavailable. */

const LANDMARKS = {
  turing: { x: 14, y: 82, dx: 3, dy: -7, color: "#e9c879", branch: "roots", short: "The question" },
  dartmouth: { x: 21, y: 66, dx: 3, dy: -5, color: "#e9c879", branch: "trunk", short: "A field is named" },
  "symbolic-ai": { x: 16, y: 29, dx: -6, dy: -9, color: "#e9c879", branch: "symbolic", short: "Rules & search" },
  backprop: { x: 29, y: 53, dx: 3, dy: -8, color: "#e9c879", branch: "learning", short: "Learning to learn" },
  "stat-ml": { x: 31, y: 25, dx: 1, dy: -10, color: "#e9c879", branch: "statistics", short: "Statistical learning" },
  alexnet: { x: 39, y: 53, dx: 1, dy: 6, color: "#7cc9f4", branch: "deep", short: "Deep learning" },
  alphago: { x: 43, y: 33, dx: -4, dy: -9, color: "#7cc9f4", branch: "search", short: "Learning meets search" },
  transformer: { x: 53, y: 57, dx: -1, dy: 7, color: "#c6a4f4", branch: "attention", short: "Attention" },
  gpt3: { x: 73, y: 40, dx: 2, dy: 5, color: "#79e7d4", branch: "language", short: "Language at scale" },
  "generative-ai": { x: 89, y: 25, dx: -6, dy: 13, color: "#e9c879", branch: "assistants", short: "Generative assistants" },
  agents: { x: 66, y: 64, dx: -17, dy: 7, color: "#bfd976", branch: "agents", short: "Models that act" },
  reasoning: { x: 56, y: 39, dx: 1, dy: -9, color: "#c6a4f4", branch: "reasoning", short: "Test-time reasoning" },
  "multimodal-frontier": { x: 79, y: 65, dx: 0, dy: -7, color: "#bfd976", branch: "worlds", short: "Systems & worlds" },
};

// Paths follow the actual artwork. These are visual guides, not causal claims.
const PATHS = {
  roots: "M 210,780 C 150,865 90,900 30,930",
  trunk: "M 210,780 C 250,670 220,580 215,450",
  symbolic: "M 215,450 C 205,325 160,280 90,230",
  learning: "M 215,650 C 260,550 280,510 335,510",
  statistics: "M 215,450 C 205,310 235,255 310,250",
  deep: "M 215,650 C 280,480 300,470 390,530",
  search: "M 390,530 C 388,415 400,345 435,330",
  attention: "M 390,530 C 440,580 470,545 530,570",
  language: "M 530,570 C 650,620 675,450 730,400",
  assistants: "M 730,400 C 780,360 850,410 890,250",
  agents: "M 530,570 C 590,565 605,670 660,640",
  reasoning: "M 530,570 C 540,510 530,440 560,390",
  worlds: "M 660,640 C 720,660 750,610 790,650",
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

export function mountEvolutionAtlas({ container, items, selectedId, onSelect, onOpen }) {
  const experience = container.closest(".atlas-experience");
  const stage = experience.querySelector(".tree-stage");
  const rail = experience.querySelector("#tree-years");
  const layers = experience.querySelector(".tree-landmarks");
  const paths = experience.querySelector(".tree-paths");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const abort = new AbortController();
  const { signal } = abort;
  const buttons = new Map();
  const yearButtons = new Map();
  const pathsById = new Map();
  let selectedIndex = Math.max(0, items.findIndex(item => item.id === selectedId));
  let motion = !reduced.matches;
  let tourTimer = null;
  let tour = false;
  let zoom = 1;
  let disposed = false;
  let inView = true;
  let animationFrame = 0;
  let lastTime = 0;
  let elapsed = 0;

  const era = experience.querySelector("#atlas-era");
  const title = experience.querySelector("#atlas-title");
  const subtitle = experience.querySelector("#atlas-subtitle");
  const position = experience.querySelector("#atlas-position");
  const motionButton = experience.querySelector("#atlas-motion");
  const tourButton = experience.querySelector("#atlas-tour");
  const zoomIn = experience.querySelector("#atlas-zoom-in");
  const zoomOut = experience.querySelector("#atlas-zoom-out");

  items.forEach((item, index) => {
    const location = LANDMARKS[item.id];
    if (!location) return;
    const node = element("button", "tree-landmark");
    node.type = "button";
    node.dataset.landmark = item.id;
    node.style.cssText = `--x:${location.x}%;--y:${location.y}%;--dx:${location.dx}cqw;--dy:${location.dy * 0.5628}cqw;--branch:${location.color}`;
    node.setAttribute("aria-label", `${item.era}: ${item.buttonTitle}. Select this milestone.`);
    node.setAttribute("aria-controls", "atlas-readout");
    node.append(element("span", "landmark-dot"));
    const label = element("span", "landmark-label");
    label.append(element("span", "landmark-year", item.era), element("strong", "", location.short));
    node.append(label);
    node.addEventListener("click", () => { stopTour(); select(item.id); }, { signal });
    layers.append(node);
    buttons.set(item.id, node);

    const year = element("button", "tree-year");
    year.type = "button";
    year.id = `tree-year-${item.id}`;
    year.setAttribute("role", "tab");
    year.setAttribute("aria-controls", "atlas-readout");
    year.setAttribute("aria-label", `${item.era}: ${item.buttonTitle}`);
    year.append(element("span", "", item.era), element("small", "", item.buttonTitle));
    year.addEventListener("click", () => { stopTour(); select(item.id); }, { signal });
    rail.append(year);
    yearButtons.set(item.id, year);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", PATHS[location.branch]);
    path.setAttribute("pathLength", "100");
    path.style.setProperty("--branch", location.color);
    path.setAttribute("class", "tree-path");
    paths.append(path);
    pathsById.set(item.id, path);
  });

  function select(id, { notify = true, reveal = false } = {}) {
    const index = items.findIndex(item => item.id === id);
    if (index < 0) return;
    selectedIndex = index;
    const item = items[index];
    for (const [key, button] of buttons) {
      button.classList.toggle("is-selected", key === id);
      button.setAttribute("aria-pressed", String(key === id));
    }
    for (const [key, button] of yearButtons) {
      button.classList.toggle("is-selected", key === id);
      button.setAttribute("aria-selected", String(key === id));
      button.tabIndex = key === id ? 0 : -1;
    }
    for (const [key, path] of pathsById) path.classList.toggle("is-selected", key === id);
    era.textContent = item.era;
    title.textContent = item.buttonTitle;
    subtitle.textContent = item.buttonSubtitle;
    position.textContent = `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    experience.style.setProperty("--selected-branch", LANDMARKS[id]?.color || "#e9c879");
    experience.dataset.selectedId = id;
    experience.querySelector("#atlas-readout").setAttribute("aria-labelledby", `tree-year-${id}`);
    if (reveal) {
      const tab = yearButtons.get(id);
      // Scroll only the rail: scrollIntoView would also move the whole page.
      rail.scrollTo({ left: tab.offsetLeft - rail.clientWidth / 2 + tab.offsetWidth / 2, behavior: reduced.matches ? "instant" : "smooth" });
    }
    if (notify) onSelect?.(id);
  }

  function step(direction) {
    select(items[(selectedIndex + direction + items.length) % items.length].id, { reveal: true });
  }

  function stopTour() {
    tour = false;
    clearTimeout(tourTimer);
    tourTimer = null;
    tourButton.setAttribute("aria-pressed", "false");
    tourButton.textContent = "▶ Guided tour";
    experience.dataset.tour = "paused";
  }

  function tourStep() {
    if (!tour || document.hidden || !inView) return;
    if (selectedIndex === items.length - 1) { stopTour(); return; }
    step(1);
    tourTimer = setTimeout(tourStep, 6500);
  }

  function updateMotion() {
    experience.dataset.motion = motion ? "on" : "off";
    motionButton.textContent = motion ? "Pause motion" : "Enable motion";
    motionButton.setAttribute("aria-pressed", String(!motion));
    if (!motion) {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      stage.style.setProperty("--px", "0px");
      stage.style.setProperty("--py", "0px");
      paintParticles();
    } else schedule();
  }

  function setZoom(value) {
    zoom = Math.max(1, Math.min(1.6, value));
    stage.style.setProperty("--tree-zoom", String(zoom));
    experience.dataset.zoom = String(zoom);
    zoomOut.disabled = zoom === 1;
    zoomIn.disabled = zoom >= 1.6;
    experience.querySelector("#atlas-zoom-status").textContent = `${Math.round(zoom * 100)}%`;
  }

  experience.querySelector("#atlas-prev").addEventListener("click", () => { stopTour(); step(-1); }, { signal });
  experience.querySelector("#atlas-next").addEventListener("click", () => { stopTour(); step(1); }, { signal });
  experience.querySelector("#atlas-open").addEventListener("click", () => onOpen?.(items[selectedIndex].id), { signal });
  experience.querySelector("#atlas-reset").addEventListener("click", () => { setZoom(1); }, { signal });
  zoomIn.addEventListener("click", () => setZoom(zoom + 0.15), { signal });
  zoomOut.addEventListener("click", () => setZoom(zoom - 0.15), { signal });
  motionButton.addEventListener("click", () => { motion = !motion; updateMotion(); }, { signal });
  tourButton.addEventListener("click", () => {
    if (tour) { stopTour(); return; }
    if (selectedIndex === items.length - 1) select(items[0].id, { reveal: true });
    tour = true;
    tourButton.textContent = "Ⅱ Pause tour";
    tourButton.setAttribute("aria-pressed", "true");
    experience.dataset.tour = "running";
    tourTimer = setTimeout(tourStep, 6500);
  }, { signal });

  rail.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    stopTour();
    const index = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1
      : (selectedIndex + (event.key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
    select(items[index].id, { reveal: true });
    yearButtons.get(items[index].id)?.focus({ preventScroll: true });
  }, { signal });

  const viewport = experience.querySelector(".tree-viewport");
  viewport.addEventListener("pointermove", event => {
    if (!motion || event.pointerType === "touch" || matchMedia("(max-width: 760px)").matches) return;
    const box = viewport.getBoundingClientRect();
    stage.style.setProperty("--px", `${(event.clientX - box.left - box.width / 2) * -0.008}px`);
    stage.style.setProperty("--py", `${(event.clientY - box.top - box.height / 2) * -0.008}px`);
    if (zoom > 1) {
      stage.style.transformOrigin = `${(event.clientX - box.left) / box.width * 100}% ${(event.clientY - box.top) / box.height * 100}%`;
    }
  }, { signal });
  viewport.addEventListener("pointerleave", () => {
    stage.style.setProperty("--px", "0px");
    stage.style.setProperty("--py", "0px");
  }, { signal });

  const original = document.querySelector("#original-tree-dialog");
  const originalButton = experience.querySelector("#atlas-original");
  originalButton.addEventListener("click", () => original.showModal(), { signal });
  original.querySelector("button").addEventListener("click", () => original.close(), { signal });
  original.addEventListener("click", event => { if (event.target === original) original.close(); }, { signal });
  original.addEventListener("close", () => originalButton.focus({ preventScroll: true }), { signal });

  // A few quiet fireflies; no WebGL dependency, no renderer or texture downloads.
  const canvas = experience.querySelector("#tree-atmosphere");
  const ctx = canvas.getContext("2d");
  let width = 0, height = 0;
  const particles = Array.from({ length: 36 }, (_, i) => ({
    x: ((i * 193.17 + 53) % 997) / 997,
    y: ((i * 73.39 + 29) % 283) / 283,
    phase: i * 2.399,
    size: i % 7 === 0 ? 1.6 : 0.7,
  }));
  function resize() {
    const box = viewport.getBoundingClientRect();
    if (!box.width || !box.height) return;
    width = box.width; height = box.height;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);
    paintParticles();
  }
  function paintParticles() {
    if (!ctx || !width) return;
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      const x = p.x * width + Math.sin(elapsed * 0.17 + p.phase) * 6;
      const y = p.y * height * 0.72 + Math.sin(elapsed * 0.2 + p.phase) * 9;
      const alpha = 0.12 + (Math.sin(elapsed * 0.7 + p.phase) + 1) * 0.18;
      ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(244,215,139,${alpha})`;
      ctx.shadowBlur = 7; ctx.shadowColor = "#f4d78b"; ctx.fill();
    }
  }
  function schedule() {
    if (disposed || !motion || !inView || document.hidden || animationFrame) return;
    animationFrame = requestAnimationFrame(tick);
  }
  function tick(now) {
    animationFrame = 0;
    if (lastTime && now - lastTime < 48) { schedule(); return; }
    if (lastTime) elapsed += Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;
    paintParticles(); schedule();
  }
  const observer = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    lastTime = 0;
    if (!inView) {
      cancelAnimationFrame(animationFrame); animationFrame = 0;
      if (tour) stopTour();
    } else { resize(); schedule(); }
  });
  observer.observe(viewport);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(viewport);
  document.addEventListener("visibilitychange", () => {
    lastTime = 0;
    if (document.hidden) {
      stopTour(); cancelAnimationFrame(animationFrame); animationFrame = 0;
    } else schedule();
  }, { signal });
  reduced.addEventListener("change", event => { motion = !event.matches; if (event.matches) stopTour(); updateMotion(); }, { signal });

  function dispose() {
    if (disposed) return;
    disposed = true; stopTour(); abort.abort();
    cancelAnimationFrame(animationFrame); observer.disconnect(); resizeObserver.disconnect();
  }
  window.addEventListener("pagehide", event => { if (!event.persisted) dispose(); }, { signal });
  window.addEventListener("pageshow", () => { resize(); schedule(); }, { signal });
  select(items[selectedIndex].id, { notify: false });
  setZoom(1); resize(); updateMotion();
  experience.classList.add("is-ready");
  experience.dataset.atlasState = "ready";
  experience.querySelectorAll("[data-enhanced]").forEach(node => { node.hidden = false; });
  const api = { select: (id, options = {}) => select(id, { notify: false, ...options }), reset: () => setZoom(1), dispose };
  container.__atlas = api;
  return api;
}
