import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const CYAN = new THREE.Color("#6ee7ff");
const MINT = new THREE.Color("#87ffc1");
const VIOLET = new THREE.Color("#b8a1ff");
const AMBER = new THREE.Color("#ffb86b");
const HOME_TARGET = new THREE.Vector3(0, 0.1, 0);

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function colorAt(progress) {
  if (progress < 0.38) return MINT.clone().lerp(CYAN, progress / 0.38);
  if (progress < 0.74) return CYAN.clone().lerp(VIOLET, (progress - 0.38) / 0.36);
  return VIOLET.clone().lerp(AMBER, (progress - 0.74) / 0.26);
}

function makeGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.12, "rgba(255,255,255,0.92)");
  gradient.addColorStop(0.36, "rgba(255,255,255,0.24)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeParticleField({ count, curve, glowTexture, random, trail = false }) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const point = new THREE.Vector3();

  for (let index = 0; index < count; index += 1) {
    if (trail) {
      curve.getPointAt(random(), point);
      positions[index * 3] = point.x + (random() - 0.5) * 0.7;
      positions[index * 3 + 1] = point.y + (random() - 0.5) * 0.7;
      positions[index * 3 + 2] = point.z + (random() - 0.5) * 0.7;
    } else {
      positions[index * 3] = (random() - 0.5) * 30;
      positions[index * 3 + 1] = (random() - 0.5) * 19;
      positions[index * 3 + 2] = -9 + random() * 14;
    }

    const color = colorAt(trail ? index / count : random());
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    name: trail ? "Atlas · Evidence dust" : "Atlas · Deep-space particles",
    size: trail ? 0.09 : 0.074,
    map: glowTexture,
    transparent: true,
    opacity: trail ? 0.78 : 0.62,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  return new THREE.Points(geometry, material);
}

function makeGuideRing(radius, color, opacity, rotation) {
  const points = [];
  for (let index = 0; index < 160; index += 1) {
    const angle = (index / 160) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.46, 0));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    name: "Atlas · Orbital guide",
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const ring = new THREE.LineLoop(geometry, material);
  ring.position.z = -3.8;
  ring.rotation.set(...rotation);
  return ring;
}

function makeYearLabel(item, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 104;
  const context = canvas.getContext("2d");
  context.textAlign = "center";
  context.fillStyle = "#ffffff";
  context.font = "600 34px 'IBM Plex Mono', monospace";
  context.fillText(item.era, 160, 42, 290);
  context.fillStyle = "rgba(255,255,255,0.72)";
  context.font = "500 17px 'IBM Plex Mono', monospace";
  context.fillText(item.buttonTitle.toUpperCase(), 160, 76, 292);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    name: `Atlas · ${item.buttonTitle} year label`,
    map: texture,
    color,
    transparent: true,
    opacity: 0.62,
    depthTest: false,
    depthWrite: false,
  });
  const label = new THREE.Sprite(material);
  label.scale.set(1.72, 0.56, 1);
  label.position.set(0, 0.66, 0);
  label.renderOrder = 3;
  return label;
}

function makeIntelligenceCore(glowTexture) {
  const group = new THREE.Group();
  group.position.set(0, -0.1, -2.7);
  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.62, 2),
    new THREE.MeshStandardMaterial({
      name: "Atlas · Intelligence core prism",
      color: 0x123f55,
      emissive: 0x6ee7ff,
      emissiveIntensity: 0.72,
      roughness: 0.18,
      metalness: 0.58,
      transparent: true,
      opacity: 0.82,
    }),
  );
  const cage = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.98, 1),
    new THREE.MeshBasicMaterial({
      name: "Atlas · Intelligence core cage",
      color: 0x6ee7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    }),
  );
  const outer = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.32, 0),
    new THREE.MeshBasicMaterial({
      name: "Atlas · Intelligence outer lattice",
      color: 0xb8a1ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    }),
  );
  const rings = [1.18, 1.52].map((radius, index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, index === 0 ? 0.012 : 0.008, 6, 96),
      new THREE.MeshBasicMaterial({
        name: "Atlas · Intelligence gyroscope",
        color: index === 0 ? 0x87ffc1 : 0xb8a1ff,
        transparent: true,
        opacity: index === 0 ? 0.3 : 0.18,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    ring.rotation.set(index === 0 ? 1.05 : 0.35, index === 0 ? 0.2 : 1.1, index * 0.5);
    return ring;
  });
  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      name: "Atlas · Intelligence core aura",
      map: glowTexture,
      color: 0x6ee7ff,
      transparent: true,
      opacity: 0.17,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  halo.scale.setScalar(3.8);
  const light = new THREE.PointLight(0x6ee7ff, 5, 8);
  light.name = "Atlas · Intelligence core light";
  group.add(inner, cage, outer, ...rings, halo, light);
  return { group, inner, cage, outer, rings };
}

export function mountEvolutionAtlas({
  container,
  items,
  selectedId = items[0]?.id,
  onSelect,
  onOpen,
  onFallback,
}) {
  if (!container || !items?.length) {
    throw new Error("The 3D atlas requires a container and timeline data.");
  }

  const experience = container.closest(".atlas-experience");
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const narrowScreen = window.matchMedia("(max-width: 720px)").matches;
  const abort = new AbortController();
  const { signal } = abort;
  const random = seededRandom(19562026);
  const glowTexture = makeGlowTexture();
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050b14, 0.022);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, narrowScreen ? 1.4 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.domElement.dataset.engine = "three.js";
  renderer.domElement.setAttribute("aria-hidden", "true");
  container.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 90);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.enablePan = false;
  controls.rotateSpeed = 0.55;
  controls.zoomSpeed = 0.72;
  controls.autoRotateSpeed = 0.32;
  controls.target.copy(HOME_TARGET);

  const ambient = new THREE.AmbientLight(0x9bc9dc, 1.25);
  ambient.name = "Atlas · Soft ambient light";
  const key = new THREE.DirectionalLight(0xd9f7ff, 2.4);
  key.name = "Atlas · Cyan key light";
  key.position.set(4, 7, 9);
  const rim = new THREE.DirectionalLight(0xb8a1ff, 1.5);
  rim.name = "Atlas · Violet rim light";
  rim.position.set(-6, -2, -4);
  scene.add(ambient, key, rim);

  const grid = new THREE.GridHelper(30, 30, 0x27667a, 0x17394c);
  grid.name = "Atlas · Perspective reference grid";
  grid.position.y = -4.1;
  grid.material.name = "Atlas · Fading reference grid";
  grid.material.transparent = true;
  grid.material.opacity = 0.16;
  grid.material.depthWrite = false;
  scene.add(grid);

  scene.add(
    makeGuideRing(5.2, 0x6ee7ff, 0.14, [0.18, 0.2, -0.22]),
    makeGuideRing(7.4, 0xb8a1ff, 0.1, [-0.12, -0.18, 0.28]),
    makeGuideRing(9.3, 0x87ffc1, 0.06, [0.3, 0.08, -0.46]),
  );

  const positions = items.map((item, index) => {
    const progress = index / (items.length - 1);
    const angle = progress * Math.PI * 2.6 - 0.8;
    return new THREE.Vector3(
      -6.2 + progress * 12.4,
      Math.sin(angle) * 1.35 + (progress - 0.5) * 2,
      Math.sin(angle) * 3.1 + Math.cos(progress * Math.PI * 2) * 0.45,
    );
  });
  const curve = new THREE.CatmullRomCurve3(positions, false, "catmullrom", 0.34);
  const intelligenceCore = makeIntelligenceCore(glowTexture);
  scene.add(intelligenceCore.group);

  const connectionVertices = [];
  const connectionColors = [];
  positions.forEach((position, index) => {
    const color = colorAt(index / (items.length - 1));
    connectionVertices.push(intelligenceCore.group.position.x, intelligenceCore.group.position.y, intelligenceCore.group.position.z);
    connectionVertices.push(position.x, position.y, position.z);
    connectionColors.push(CYAN.r * 0.25, CYAN.g * 0.25, CYAN.b * 0.25, color.r, color.g, color.b);
  });
  const connectionGeometry = new THREE.BufferGeometry();
  connectionGeometry.setAttribute("position", new THREE.Float32BufferAttribute(connectionVertices, 3));
  connectionGeometry.setAttribute("color", new THREE.Float32BufferAttribute(connectionColors, 3));
  const connections = new THREE.LineSegments(
    connectionGeometry,
    new THREE.LineBasicMaterial({
      name: "Atlas · Neural chronology filaments",
      vertexColors: true,
      transparent: true,
      opacity: 0.09,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  scene.add(connections);

  const trailOuter = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 220, 0.09, 8, false),
    new THREE.MeshBasicMaterial({
      name: "Atlas · Luminous trail atmosphere",
      color: 0x6ee7ff,
      transparent: true,
      opacity: 0.055,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  const trailCore = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 220, 0.022, 6, false),
    new THREE.MeshBasicMaterial({
      name: "Atlas · Chronology core",
      color: 0x9aedff,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  scene.add(trailOuter, trailCore);

  const stars = makeParticleField({
    count: narrowScreen ? 650 : 1100,
    curve,
    glowTexture,
    random,
  });
  const evidenceDust = makeParticleField({
    count: narrowScreen ? 180 : 320,
    curve,
    glowTexture,
    random,
    trail: true,
  });
  scene.add(stars, evidenceDust);

  const coreGeometry = new THREE.IcosahedronGeometry(0.2, 1);
  const shellGeometry = new THREE.IcosahedronGeometry(0.34, 1);
  const hitGeometry = new THREE.SphereGeometry(0.5, 8, 8);
  const nodes = [];
  const pickTargets = [];

  items.forEach((item, index) => {
    const progress = index / (items.length - 1);
    const color = colorAt(progress);
    const group = new THREE.Group();
    group.position.copy(positions[index]);

    const core = new THREE.Mesh(
      coreGeometry,
      new THREE.MeshStandardMaterial({
        name: `Atlas · ${item.buttonTitle} core`,
        color,
        emissive: color,
        emissiveIntensity: 0.9,
        roughness: 0.24,
        metalness: 0.38,
      }),
    );
    const shell = new THREE.Mesh(
      shellGeometry,
      new THREE.MeshBasicMaterial({
        name: `Atlas · ${item.buttonTitle} wire shell`,
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.36,
        depthWrite: false,
      }),
    );
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        name: `Atlas · ${item.buttonTitle} halo`,
        map: glowTexture,
        color,
        transparent: true,
        opacity: 0.58,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    halo.scale.setScalar(1.25);
    const label = makeYearLabel(item, color);

    const hitMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
    hitMaterial.name = `Atlas · ${item.buttonTitle} hit target`;
    hitMaterial.colorWrite = false;
    const hit = new THREE.Mesh(hitGeometry, hitMaterial);
    hit.userData.atlasId = item.id;

    group.add(core, shell, halo, label, hit);
    scene.add(group);
    nodes.push({ id: item.id, group, core, shell, halo, label, color });
    pickTargets.push(hit);
  });

  const selectionRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.42, 0.014, 6, 64),
    new THREE.MeshBasicMaterial({
      name: "Atlas · Selected milestone ring",
      color: 0xffb86b,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  const selectionOrbit = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.008, 6, 64),
    new THREE.MeshBasicMaterial({
      name: "Atlas · Selected milestone orbit",
      color: 0xffd5a0,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  const selectionHalo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      name: "Atlas · Selected milestone glow",
      map: glowTexture,
      color: 0xffb86b,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  selectionHalo.scale.setScalar(1.8);
  scene.add(selectionRing, selectionOrbit, selectionHalo);

  const pulses = Array.from({ length: narrowScreen ? 6 : 9 }, (_, index) => {
    const pulse = new THREE.Sprite(
      new THREE.SpriteMaterial({
        name: "Atlas · Moving evidence pulse",
        map: glowTexture,
        color: index % 3 === 0 ? 0xffd5a0 : 0xbaf4ff,
        transparent: true,
        opacity: 0.88,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    pulse.scale.setScalar(index % 3 === 0 ? 0.32 : 0.24);
    scene.add(pulse);
    return pulse;
  });

  const readout = document.querySelector("#atlas-readout");
  const controlsElement = document.querySelector("#atlas-controls");
  const instruction = document.querySelector("#atlas-instruction");
  const eraElement = document.querySelector("#atlas-era");
  const titleElement = document.querySelector("#atlas-title");
  const subtitleElement = document.querySelector("#atlas-subtitle");
  const positionElement = document.querySelector("#atlas-position");
  const previousButton = document.querySelector("#atlas-prev");
  const nextButton = document.querySelector("#atlas-next");
  const motionButton = document.querySelector("#atlas-motion");
  const resetButton = document.querySelector("#atlas-reset");
  const openButton = document.querySelector("#atlas-open");
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const pulsePoint = new THREE.Vector3();
  let selectedIndex = Math.max(0, items.findIndex((item) => item.id === selectedId));
  let hoveredId = "";
  let motionEnabled = !motionPreference.matches;
  let reduceMotion = motionPreference.matches;
  let userInteracting = false;
  let userHasMoved = false;
  let inView = true;
  let disposed = false;
  let frameId = 0;
  let lastFrame = 0;
  let clockTime = 0;
  let effectTime = 0;
  let holdUntil = 0;
  let pointerStart = null;

  function homePosition() {
    const aspect = Math.max(0.45, camera.aspect || 1);
    const distance = Math.max(18.5, 15.4 / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * aspect));
    const side = aspect < 0.9 ? 2.2 : 4.2;
    return new THREE.Vector3(side, aspect < 0.9 ? 1.8 : 2.7, distance);
  }

  function updateMotionButton() {
    motionButton.textContent = motionEnabled ? "Pause" : "Resume";
    motionButton.setAttribute("aria-pressed", String(!motionEnabled));
    motionButton.setAttribute("aria-label", motionEnabled ? "Pause automatic rotation" : "Resume automatic rotation");
    experience.dataset.rotation = motionEnabled ? "running" : "paused";
  }

  function select(id, { notify = true, hold = true } = {}) {
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return;
    selectedIndex = index;
    const item = items[index];
    const position = positions[index];
    selectionRing.position.copy(position);
    selectionOrbit.position.copy(position);
    selectionHalo.position.copy(position);
    eraElement.textContent = item.era;
    titleElement.textContent = item.buttonTitle;
    subtitleElement.textContent = item.buttonSubtitle;
    positionElement.textContent = `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    container.dataset.selectedId = id;
    if (hold) holdUntil = clockTime + 3.5;
    if (notify) onSelect?.(id);
  }

  function step(direction) {
    const index = (selectedIndex + direction + items.length) % items.length;
    select(items[index].id);
  }

  function updatePointer(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(pickTargets, false)[0];
  }

  function resetView() {
    userHasMoved = false;
    camera.position.copy(homePosition());
    controls.target.copy(HOME_TARGET);
    controls.update();
    select(items[0].id);
  }

  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (width < 2 || height < 2) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    if (!userHasMoved) camera.position.copy(homePosition());
    camera.updateProjectionMatrix();
    controls.minDistance = homePosition().z * 0.42;
    controls.maxDistance = homePosition().z * 1.65;
    controls.update();
  }

  function shouldRun() {
    return !disposed && inView && !document.hidden && experience.dataset.atlasState !== "fallback";
  }

  function schedule() {
    if (!frameId && shouldRun()) frameId = requestAnimationFrame(tick);
  }

  function stop() {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
  }

  function tick(now) {
    frameId = 0;
    if (!shouldRun()) return;
    const delta = lastFrame ? Math.min((now - lastFrame) / 1000, 0.05) : 0;
    lastFrame = now;
    clockTime += delta;
    if (!reduceMotion) effectTime += delta;

    controls.autoRotate = motionEnabled && !userInteracting && clockTime >= holdUntil;
    controls.update(delta);

    nodes.forEach((node, index) => {
      const selected = index === selectedIndex;
      const hovered = node.id === hoveredId;
      const targetScale = selected ? 1.28 : hovered ? 1.16 : 1;
      const scale = THREE.MathUtils.damp(node.group.scale.x, targetScale, 10, delta || 0.016);
      node.group.scale.setScalar(scale);
      node.core.rotation.y = effectTime * 0.45 + index * 0.4;
      node.core.rotation.x = effectTime * 0.18 + index * 0.22;
      node.shell.rotation.y = -effectTime * 0.25 + index * 0.3;
      node.shell.rotation.z = effectTime * 0.16;
      node.halo.material.opacity = selected ? 0.76 : hovered ? 0.66 : 0.5;
      node.label.material.color.copy(selected ? AMBER : node.color);
      node.label.material.opacity = selected ? 0.96 : hovered ? 0.82 : 0.52;
    });

    intelligenceCore.inner.rotation.y = effectTime * 0.24;
    intelligenceCore.inner.rotation.x = effectTime * 0.11;
    intelligenceCore.cage.rotation.y = -effectTime * 0.18;
    intelligenceCore.cage.rotation.z = effectTime * 0.09;
    intelligenceCore.outer.rotation.y = effectTime * 0.08;
    intelligenceCore.outer.rotation.x = -effectTime * 0.06;
    intelligenceCore.rings[0].rotation.z = effectTime * 0.22;
    intelligenceCore.rings[1].rotation.z = 0.5 - effectTime * 0.16;

    pulses.forEach((pulse, index) => {
      const progress = (effectTime * 0.035 + index / pulses.length) % 1;
      curve.getPointAt(progress, pulsePoint);
      pulse.position.copy(pulsePoint);
      pulse.material.opacity = 0.55 + Math.sin((progress + effectTime * 0.1) * Math.PI * 2) * 0.22;
    });

    selectionRing.quaternion.copy(camera.quaternion);
    selectionRing.rotateZ(effectTime * 0.32);
    selectionOrbit.quaternion.copy(camera.quaternion);
    selectionOrbit.rotateZ(-effectTime * 0.22 + 0.8);
    const selectionPulse = reduceMotion ? 1 : 1 + Math.sin(effectTime * 2.2) * 0.07;
    selectionOrbit.scale.setScalar(selectionPulse);
    stars.rotation.y = effectTime * 0.0035;
    stars.rotation.x = Math.sin(effectTime * 0.025) * 0.012;
    evidenceDust.rotation.y = Math.sin(effectTime * 0.08) * 0.015;

    renderer.render(scene, camera);
    schedule();
  }

  function showFallback(error) {
    experience.classList.remove("is-ready");
    experience.dataset.atlasState = "fallback";
    readout.hidden = true;
    controlsElement.hidden = true;
    instruction.hidden = true;
    stop();
    onFallback?.(error);
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    stop();
    abort.abort();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    controls.dispose();
    const geometries = new Set();
    const materials = new Set();
    const textures = new Set([glowTexture]);
    scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) {
        (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => materials.add(material));
      }
    });
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => {
      if (material.map) textures.add(material.map);
      material.dispose();
    });
    textures.forEach((texture) => texture.dispose());
    renderer.dispose();
    renderer.domElement.remove();
  }

  previousButton.addEventListener("click", () => step(-1), { signal });
  nextButton.addEventListener("click", () => step(1), { signal });
  resetButton.addEventListener("click", resetView, { signal });
  openButton.addEventListener("click", () => onOpen?.(items[selectedIndex].id), { signal });
  motionButton.addEventListener("click", () => {
    motionEnabled = !motionEnabled;
    holdUntil = 0;
    updateMotionButton();
  }, { signal });

  controls.addEventListener("start", () => {
    userInteracting = true;
    userHasMoved = true;
  });
  controls.addEventListener("end", () => {
    userInteracting = false;
    holdUntil = clockTime + 4;
  });

  renderer.domElement.addEventListener("pointerdown", (event) => {
    pointerStart = { x: event.clientX, y: event.clientY };
  }, { signal });
  renderer.domElement.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || pointerStart) return;
    const hit = updatePointer(event);
    hoveredId = hit?.object.userData.atlasId ?? "";
    renderer.domElement.style.cursor = hoveredId ? "pointer" : "grab";
  }, { signal });
  renderer.domElement.addEventListener("pointerup", (event) => {
    if (!pointerStart) return;
    const distance = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
    pointerStart = null;
    if (distance > 7) return;
    const hit = updatePointer(event);
    const id = hit?.object.userData.atlasId;
    if (id) select(id);
  }, { signal });
  renderer.domElement.addEventListener("pointercancel", () => {
    pointerStart = null;
  }, { signal });
  renderer.domElement.addEventListener("pointerleave", () => {
    pointerStart = null;
    hoveredId = "";
    renderer.domElement.style.cursor = "grab";
  }, { signal });
  renderer.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    showFallback(new Error("WebGL context lost; static atlas restored."));
  }, { signal });

  const onMotionPreference = (event) => {
    reduceMotion = event.matches;
    motionEnabled = !event.matches;
    updateMotionButton();
  };
  motionPreference.addEventListener("change", onMotionPreference, { signal });
  document.addEventListener("visibilitychange", () => {
    lastFrame = 0;
    if (document.hidden) stop();
    else schedule();
  }, { signal });
  window.addEventListener("pagehide", dispose, { once: true, signal });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  const intersectionObserver = new IntersectionObserver((entries) => {
    inView = entries[0]?.isIntersecting ?? true;
    experience.dataset.inView = String(inView);
    lastFrame = 0;
    if (inView) schedule();
    else stop();
  }, { rootMargin: "120px" });
  intersectionObserver.observe(container);

  updateMotionButton();
  select(items[selectedIndex].id, { notify: false, hold: false });
  resize();
  controls.target.copy(HOME_TARGET);
  controls.update();
  renderer.render(scene, camera);
  container.dataset.nodeCount = String(items.length);
  experience.dataset.atlasState = "ready";
  experience.classList.add("is-ready");
  readout.hidden = false;
  controlsElement.hidden = false;
  instruction.hidden = false;
  schedule();

  const api = {
    select: (id, options = {}) => select(id, { notify: false, ...options }),
    reset: resetView,
    dispose,
    getNodeScreenPosition: (id) => {
      const index = items.findIndex((item) => item.id === id);
      if (index < 0) return null;
      const projected = positions[index].clone().project(camera);
      const rect = renderer.domElement.getBoundingClientRect();
      return {
        x: rect.left + (projected.x * 0.5 + 0.5) * rect.width,
        y: rect.top + (-projected.y * 0.5 + 0.5) * rect.height,
        inside: projected.z >= -1 && projected.z <= 1 && Math.abs(projected.x) <= 1 && Math.abs(projected.y) <= 1,
      };
    },
    getDiagnostics: () => ({
      nodes: items.length,
      selectedId: items[selectedIndex].id,
      drawCalls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
      pixelRatio: renderer.getPixelRatio(),
      motionEnabled,
      reduceMotion,
      autoRotate: controls.autoRotate,
      inView,
      camera: camera.position.toArray(),
    }),
  };
  container.__atlas = api;
  return api;
}
