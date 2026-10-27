import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const CYAN = new THREE.Color("#6ee7ff");
const MINT = new THREE.Color("#87ffc1");
const VIOLET = new THREE.Color("#b8a1ff");
const AMBER = new THREE.Color("#ffb86b");
const GOLD = new THREE.Color("#ffd58a");
const BARK = new THREE.Color("#39271f");
const HOME_TARGET = new THREE.Vector3(0, 0.7, 0);

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
  if (progress < 0.36) return GOLD.clone().lerp(AMBER, progress / 0.36);
  if (progress < 0.62) return CYAN.clone().lerp(VIOLET, (progress - 0.36) / 0.26);
  return MINT.clone().lerp(GOLD, (progress - 0.62) / 0.38);
}

function makeGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.12, "rgba(255,255,255,0.94)");
  gradient.addColorStop(0.34, "rgba(255,255,255,0.28)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeAmbientParticles({ count, random, glowTexture, centers = null }) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    if (centers) {
      const center = centers[index % centers.length];
      positions[index * 3] = center.x + (random() + random() - 1) * 2.2;
      positions[index * 3 + 1] = center.y + (random() + random() - 1) * 1.25;
      positions[index * 3 + 2] = center.z + (random() + random() - 1) * 1.8;
    } else {
      positions[index * 3] = (random() - 0.5) * 26;
      positions[index * 3 + 1] = (random() - 0.5) * 17;
      positions[index * 3 + 2] = -10 + random() * 14;
    }
    const color = colorAt(random());
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    name: centers ? "AI tree · Canopy fireflies" : "AI tree · Deep-field dust",
    size: centers ? 0.105 : 0.065,
    map: glowTexture,
    transparent: true,
    opacity: centers ? 0.74 : 0.48,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  return new THREE.Points(geometry, material);
}

function curveThrough(points) {
  return new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point)), false, "catmullrom", 0.42);
}

function taperedGeometry(curve, startRadius, endRadius, segments = 56, radialSegments = 7) {
  const frames = curve.computeFrenetFrames(segments, false);
  const positions = [];
  const indices = [];
  const point = new THREE.Vector3();
  const offset = new THREE.Vector3();

  for (let index = 0; index <= segments; index += 1) {
    const progress = index / segments;
    curve.getPointAt(progress, point);
    const radius = THREE.MathUtils.lerp(startRadius, endRadius, Math.pow(progress, 0.82));
    for (let side = 0; side <= radialSegments; side += 1) {
      const angle = (side / radialSegments) * Math.PI * 2;
      offset.copy(frames.normals[index]).multiplyScalar(Math.cos(angle) * radius);
      offset.addScaledVector(frames.binormals[index], Math.sin(angle) * radius);
      positions.push(point.x + offset.x, point.y + offset.y, point.z + offset.z);
    }
  }

  for (let index = 0; index < segments; index += 1) {
    for (let side = 0; side < radialSegments; side += 1) {
      const a = index * (radialSegments + 1) + side;
      const b = (index + 1) * (radialSegments + 1) + side;
      const c = b + 1;
      const d = a + 1;
      indices.push(a, b, d, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function makeBranch({ curve, startRadius, endRadius, color, veins = 2, delay = 0 }) {
  const group = new THREE.Group();
  const baseColor = color.clone().lerp(BARK, 0.58);
  const material = new THREE.MeshStandardMaterial({
    name: "AI tree · Living branch",
    color: baseColor,
    emissive: color,
    emissiveIntensity: 0.2,
    roughness: 0.62,
    metalness: 0.24,
  });
  const geometry = taperedGeometry(curve, startRadius, endRadius);
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);

  const segments = 64;
  const frames = curve.computeFrenetFrames(segments, false);
  const veinPositions = [];
  const point = new THREE.Vector3();
  const previous = new THREE.Vector3();
  const current = new THREE.Vector3();
  for (let vein = 0; vein < veins; vein += 1) {
    for (let index = 1; index <= segments; index += 1) {
      for (const step of [index - 1, index]) {
        const progress = step / segments;
        curve.getPointAt(progress, point);
        const angle = (vein / veins) * Math.PI * 2 + progress * Math.PI * 3.4;
        const radius = THREE.MathUtils.lerp(startRadius, endRadius, Math.pow(progress, 0.82)) * 1.018;
        const target = step === index - 1 ? previous : current;
        target.copy(point)
          .addScaledVector(frames.normals[step], Math.cos(angle) * radius)
          .addScaledVector(frames.binormals[step], Math.sin(angle) * radius);
        veinPositions.push(target.x, target.y, target.z);
      }
    }
  }
  const veinGeometry = new THREE.BufferGeometry();
  veinGeometry.setAttribute("position", new THREE.Float32BufferAttribute(veinPositions, 3));
  const veinMaterial = new THREE.LineBasicMaterial({
    name: "AI tree · Luminous growth rings",
    color,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const veinLines = new THREE.LineSegments(veinGeometry, veinMaterial);
  group.add(veinLines);
  return { group, mesh, veinLines, curve, delay, indexCount: geometry.index.count, veinVertexCount: veinPositions.length / 3 };
}

function roundedRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function makeNodeLabel(item, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 154;
  const context = canvas.getContext("2d");
  roundedRect(context, 8, 8, 496, 138, 28);
  context.fillStyle = "rgba(4, 12, 20, 0.88)";
  context.fill();
  context.strokeStyle = color.getStyle();
  context.globalAlpha = 0.5;
  context.lineWidth = 2;
  context.stroke();
  context.globalAlpha = 1;
  context.fillStyle = color.getStyle();
  context.font = "600 22px 'IBM Plex Mono', monospace";
  context.textAlign = "left";
  context.fillText(item.era, 32, 48, 420);
  context.fillStyle = "#f2f7fa";
  context.font = "600 29px 'Manrope', sans-serif";
  context.fillText(item.buttonTitle, 32, 101, 438);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    name: `AI tree · ${item.buttonTitle} label`,
    map: texture,
    transparent: true,
    opacity: 0.62,
    depthTest: false,
    depthWrite: false,
  });
  const label = new THREE.Sprite(material);
  label.scale.set(2.3, 0.69, 1);
  label.position.set(0, 0.72, 0);
  label.renderOrder = 4;
  return label;
}

function makeRootLabel(title, subtitle, position, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  context.textAlign = "center";
  context.fillStyle = color.getStyle();
  context.font = "600 30px 'Manrope', sans-serif";
  context.fillText(title, 200, 50);
  context.fillStyle = "rgba(225,236,244,0.72)";
  context.font = "500 18px 'IBM Plex Mono', monospace";
  context.fillText(subtitle, 200, 88);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Sprite(new THREE.SpriteMaterial({
    name: `AI tree · Root ${title}`,
    map: texture,
    transparent: true,
    opacity: 0.82,
    depthTest: false,
    depthWrite: false,
  }));
  label.position.set(...position);
  label.scale.set(2.5, 0.8, 1);
  label.renderOrder = 3;
  return label;
}

function makeCanopy({ random, centers, narrowScreen }) {
  const count = narrowScreen ? 460 : 780;
  const geometry = new THREE.IcosahedronGeometry(0.095, 0);
  const material = new THREE.MeshStandardMaterial({
    name: "AI tree · Faceted leaf canopy",
    color: 0xffffff,
    emissive: 0x396b50,
    emissiveIntensity: 0.48,
    roughness: 0.48,
    metalness: 0.16,
    transparent: true,
    opacity: 0.9,
  });
  const leaves = new THREE.InstancedMesh(geometry, material, count);
  leaves.name = "AI tree · Instanced leaf canopy";
  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  const euler = new THREE.Euler();
  for (let index = 0; index < count; index += 1) {
    const center = centers[index % centers.length];
    position.set(
      center.x + (random() + random() - 1) * center.rx,
      center.y + (random() + random() - 1) * center.ry,
      center.z + (random() + random() - 1) * center.rz,
    );
    euler.set(random() * Math.PI, random() * Math.PI, random() * Math.PI);
    quaternion.setFromEuler(euler);
    const size = 0.65 + random() * 1.55;
    scale.set(size * (0.65 + random() * 0.7), size, size * 0.7);
    matrix.compose(position, quaternion, scale);
    leaves.setMatrixAt(index, matrix);
    const color = [MINT, CYAN, GOLD, VIOLET][index % 4].clone().lerp(new THREE.Color("#07131b"), 0.25 + random() * 0.45);
    leaves.setColorAt(index, color);
  }
  leaves.instanceMatrix.needsUpdate = true;
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
  return leaves;
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
  scene.fog = new THREE.FogExp2(0x050b14, 0.019);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, narrowScreen ? 1.4 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
  renderer.domElement.dataset.engine = "three.js";
  renderer.domElement.setAttribute("aria-hidden", "true");
  container.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.enablePan = false;
  controls.rotateSpeed = 0.52;
  controls.zoomSpeed = 0.72;
  controls.autoRotateSpeed = 0.28;
  controls.target.copy(HOME_TARGET);

  const ambient = new THREE.AmbientLight(0xb9d4d8, 1.35);
  ambient.name = "AI tree · Soft ambient light";
  const key = new THREE.DirectionalLight(0xffdfad, 3.1);
  key.name = "AI tree · Warm canopy light";
  key.position.set(-3, 8, 7);
  const rim = new THREE.DirectionalLight(0x6ee7ff, 2.1);
  rim.name = "AI tree · Cyan rim light";
  rim.position.set(7, 3, -5);
  const violetFill = new THREE.DirectionalLight(0xb8a1ff, 1.1);
  violetFill.name = "AI tree · Violet fill light";
  violetFill.position.set(-7, 1, -2);
  scene.add(ambient, key, rim, violetFill);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(6.3, 64),
    new THREE.MeshStandardMaterial({
      name: "AI tree · Root island",
      color: 0x07131a,
      emissive: 0x102d2c,
      emissiveIntensity: 0.18,
      roughness: 0.95,
      transparent: true,
      opacity: 0.88,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -3.08;
  ground.scale.y = 0.65;
  scene.add(ground);

  const tree = new THREE.Group();
  tree.name = "AI history · Roots to frontier";
  scene.add(tree);

  const branches = [];
  function addBranch(config) {
    const branch = makeBranch(config);
    branches.push(branch);
    tree.add(branch.group);
    return branch;
  }

  const trunk = addBranch({
    curve: curveThrough([[0, -2.72, 0], [-0.52, -1.92, 0.18], [-0.32, -0.65, 0], [0.12, 0.85, -0.15], [0.35, 2.1, 0], [-0.05, 3.45, -0.28], [0.35, 4.75, -0.1]]),
    startRadius: 0.62,
    endRadius: 0.085,
    color: GOLD,
    veins: 3,
    delay: 0,
  });
  const learningBranch = addBranch({
    curve: curveThrough([[0.02, 0.55, -0.08], [-1.25, 1.15, 0.15], [-2.35, 1.82, 0.32], [-3.65, 2.5, 0.1]]),
    startRadius: 0.25,
    endRadius: 0.045,
    color: CYAN,
    veins: 2,
    delay: 0.25,
  });
  const languageBranch = addBranch({
    curve: curveThrough([[0.3, 1.55, 0], [1.25, 2.12, -0.18], [2.45, 2.8, 0.12], [3.45, 3.25, 0.22], [4.65, 3.85, 0.05]]),
    startRadius: 0.27,
    endRadius: 0.045,
    color: VIOLET,
    veins: 2,
    delay: 0.42,
  });
  const agentBranch = addBranch({
    curve: curveThrough([[0.14, 2.35, -0.12], [-1.15, 2.95, 0.12], [-2.55, 3.42, 0.35], [-4.35, 4.18, 0.08]]),
    startRadius: 0.2,
    endRadius: 0.035,
    color: MINT,
    veins: 2,
    delay: 0.58,
  });
  const reasoningBranch = addBranch({
    curve: curveThrough([[-0.02, 3.15, -0.24], [0.85, 3.85, -0.35], [1.12, 4.55, -0.18], [1.65, 5.18, 0]]),
    startRadius: 0.17,
    endRadius: 0.03,
    color: VIOLET,
    veins: 2,
    delay: 0.72,
  });
  const worldBranch = addBranch({
    curve: curveThrough([[2.42, 2.78, 0.1], [2.92, 3.82, 0.32], [3.65, 4.48, 0.28], [4.25, 5.12, 0.08]]),
    startRadius: 0.16,
    endRadius: 0.028,
    color: GOLD,
    veins: 2,
    delay: 0.86,
  });

  const rootEnds = [
    [-4.6, -3.02, 0.7], [-3.1, -3.05, -2.2], [-1.3, -3.06, 2.8],
    [1.4, -3.06, 2.65], [3.4, -3.05, -2.1], [4.7, -3.02, 0.65],
  ];
  rootEnds.forEach((end, index) => {
    const startX = (index - 2.5) * 0.08;
    const root = makeBranch({
      curve: curveThrough([[startX, -2.68, 0], [end[0] * 0.35, -2.82, end[2] * 0.32], [end[0] * 0.72, -2.96, end[2] * 0.72], end]),
      startRadius: 0.24,
      endRadius: 0.018,
      color: index % 2 ? AMBER : GOLD,
      veins: 0,
    });
    root.mesh.geometry.setDrawRange(0, root.indexCount);
    root.veinLines.visible = false;
    tree.add(root.group);
  });

  scene.add(
    makeRootLabel("Data", "evidence & examples", [-2.65, -2.5, 1.55], CYAN),
    makeRootLabel("Algorithms", "learning & reasoning", [0, -2.82, 2.35], GOLD),
    makeRootLabel("Compute", "training & scale", [2.65, -2.5, 1.55], MINT),
  );

  const positions = [
    new THREE.Vector3(-0.42, -1.72, 0.28),
    new THREE.Vector3(-0.24, -0.55, 0.26),
    new THREE.Vector3(0.18, 0.62, 0.2),
    new THREE.Vector3(0.38, 1.65, 0.25),
    new THREE.Vector3(-2.7, 2.03, 0.48),
    new THREE.Vector3(1.62, 2.4, 0.28),
    new THREE.Vector3(3.18, 3.12, 0.42),
    new THREE.Vector3(4.5, 3.78, 0.28),
    new THREE.Vector3(-3.25, 3.63, 0.5),
    new THREE.Vector3(1.12, 4.55, 0.12),
    new THREE.Vector3(4.02, 4.86, 0.28),
  ];

  const canopyCenters = [
    { x: -3.8, y: 3.65, z: 0, rx: 2.2, ry: 1.35, rz: 1.5 },
    { x: -1.65, y: 4.65, z: -0.3, rx: 2.1, ry: 1.2, rz: 1.5 },
    { x: 0.6, y: 5.0, z: -0.2, rx: 2.0, ry: 1.05, rz: 1.4 },
    { x: 2.65, y: 4.55, z: 0, rx: 2.0, ry: 1.2, rz: 1.5 },
    { x: 4.25, y: 3.75, z: 0.2, rx: 1.65, ry: 1.1, rz: 1.25 },
  ];
  const canopy = makeCanopy({ random, centers: canopyCenters, narrowScreen });
  scene.add(canopy);

  const stars = makeAmbientParticles({ count: narrowScreen ? 520 : 850, random, glowTexture });
  const fireflies = makeAmbientParticles({ count: narrowScreen ? 90 : 160, random, glowTexture, centers: canopyCenters });
  scene.add(stars, fireflies);

  const coreGeometry = new THREE.IcosahedronGeometry(0.235, 2);
  const shellGeometry = new THREE.IcosahedronGeometry(0.37, 1);
  const hitGeometry = new THREE.SphereGeometry(0.61, 8, 8);
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
        name: `AI tree · ${item.buttonTitle} fruit`,
        color,
        emissive: color,
        emissiveIntensity: 0.9,
        roughness: 0.22,
        metalness: 0.42,
      }),
    );
    const shell = new THREE.Mesh(
      shellGeometry,
      new THREE.MeshBasicMaterial({
        name: `AI tree · ${item.buttonTitle} lattice`,
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
      }),
    );
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      name: `AI tree · ${item.buttonTitle} aura`,
      map: glowTexture,
      color,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    halo.scale.setScalar(1.45);
    const label = makeNodeLabel(item, color);
    const hitMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
    hitMaterial.name = `AI tree · ${item.buttonTitle} hit target`;
    hitMaterial.colorWrite = false;
    const hit = new THREE.Mesh(hitGeometry, hitMaterial);
    hit.userData.atlasId = item.id;
    group.add(core, shell, halo, label, hit);
    scene.add(group);
    nodes.push({ id: item.id, group, core, shell, halo, label, color });
    pickTargets.push(hit);
  });

  const selectionRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.48, 0.016, 6, 64),
    new THREE.MeshBasicMaterial({ name: "AI tree · Selected fruit ring", color: 0xffd58a, transparent: true, opacity: 0.92, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  const selectionOrbit = new THREE.Mesh(
    new THREE.TorusGeometry(0.62, 0.008, 6, 64),
    new THREE.MeshBasicMaterial({ name: "AI tree · Selected fruit orbit", color: 0xffe8bd, transparent: true, opacity: 0.42, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  const selectionHalo = new THREE.Sprite(new THREE.SpriteMaterial({
    name: "AI tree · Selected fruit glow",
    map: glowTexture,
    color: 0xffcf70,
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  selectionHalo.scale.setScalar(2.1);
  scene.add(selectionRing, selectionOrbit, selectionHalo);

  const pulseCurves = [trunk.curve, learningBranch.curve, languageBranch.curve, agentBranch.curve, reasoningBranch.curve, worldBranch.curve];
  const pulses = Array.from({ length: narrowScreen ? 4 : 6 }, (_, index) => {
    const pulse = new THREE.Sprite(new THREE.SpriteMaterial({
      name: "AI tree · Traveling knowledge pulse",
      map: glowTexture,
      color: index % 3 === 0 ? 0xffd58a : 0xbaf4ff,
      transparent: true,
      opacity: 0.86,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    pulse.scale.setScalar(index % 3 === 0 ? 0.3 : 0.22);
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
  let cameraTween = null;

  function homePosition() {
    const aspect = Math.max(0.45, camera.aspect || 1);
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    const verticalFit = 10.8 / (2 * Math.tan(verticalFov / 2));
    const horizontalFit = 12.4 / (2 * Math.tan(verticalFov / 2) * aspect);
    const distance = Math.max(17.2, verticalFit, horizontalFit) * 1.06;
    return new THREE.Vector3(aspect < 0.9 ? 2.7 : 4.1, 2.65, distance);
  }

  function updateMotionButton() {
    motionButton.textContent = motionEnabled ? "Pause" : "Resume";
    motionButton.setAttribute("aria-pressed", String(!motionEnabled));
    motionButton.setAttribute("aria-label", motionEnabled ? "Pause automatic rotation" : "Resume automatic rotation");
    experience.dataset.rotation = motionEnabled ? "running" : "paused";
  }

  function beginCameraTransition(position, reset = false) {
    const toTarget = reset ? HOME_TARGET.clone() : HOME_TARGET.clone().lerp(position, 0.1);
    const toPosition = homePosition();
    if (!reset) {
      toPosition.x += position.x * 0.05;
      toPosition.y += position.y * 0.025;
      toPosition.z -= 0.25;
    }
    cameraTween = {
      startedAt: clockTime,
      duration: reduceMotion ? 0 : 1.05,
      fromPosition: camera.position.clone(),
      fromTarget: controls.target.clone(),
      toPosition,
      toTarget,
    };
  }

  function updateCameraTransition() {
    if (!cameraTween) return;
    const progress = reduceMotion || cameraTween.duration === 0
      ? 1
      : THREE.MathUtils.clamp((clockTime - cameraTween.startedAt) / cameraTween.duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    camera.position.lerpVectors(cameraTween.fromPosition, cameraTween.toPosition, eased);
    controls.target.lerpVectors(cameraTween.fromTarget, cameraTween.toTarget, eased);
    if (progress >= 1) cameraTween = null;
  }

  function animateReadout() {
    readout.classList.remove("is-changing");
    if (reduceMotion) return;
    void readout.offsetWidth;
    readout.classList.add("is-changing");
  }

  function select(id, { notify = true, hold = true, focus = true, reset = false } = {}) {
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
    animateReadout();
    if (focus) beginCameraTransition(position, reset);
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
    select(items[0].id, { reset: true });
  }

  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (width < 2 || height < 2) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    if (!userHasMoved && !cameraTween) camera.position.copy(homePosition());
    camera.updateProjectionMatrix();
    controls.minDistance = homePosition().z * 0.46;
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

  function updateGrowth() {
    branches.forEach((branch) => {
      const progress = reduceMotion ? 1 : THREE.MathUtils.clamp((effectTime - branch.delay) / 1.5, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      branch.mesh.geometry.setDrawRange(0, Math.floor((branch.indexCount * eased) / 6) * 6);
      branch.veinLines.geometry.setDrawRange(0, Math.floor((branch.veinVertexCount * eased) / 2) * 2);
    });
    canopy.material.opacity = reduceMotion ? 0.9 : 0.9 * THREE.MathUtils.clamp((effectTime - 0.45) / 1.8, 0, 1);
  }

  function tick(now) {
    frameId = 0;
    if (!shouldRun()) return;
    const delta = lastFrame ? Math.min((now - lastFrame) / 1000, 0.05) : 0;
    lastFrame = now;
    clockTime += delta;
    if (!reduceMotion) effectTime += delta;

    updateCameraTransition();
    updateGrowth();
    controls.autoRotate = motionEnabled && !cameraTween && !userInteracting && clockTime >= holdUntil;
    controls.update(delta);

    const dampDelta = delta || 0.016;
    nodes.forEach((node, index) => {
      const selected = index === selectedIndex;
      const hovered = node.id === hoveredId;
      const targetScale = selected ? 1.42 : hovered ? 1.18 : 1;
      const scale = THREE.MathUtils.damp(node.group.scale.x, targetScale, 8, dampDelta);
      node.group.scale.setScalar(scale);
      node.core.rotation.y = effectTime * 0.28 + index * 0.4;
      node.core.rotation.x = effectTime * 0.09 + index * 0.2;
      node.shell.rotation.y = -effectTime * 0.17 + index * 0.3;
      node.shell.rotation.z = effectTime * 0.1;
      node.core.material.emissiveIntensity = THREE.MathUtils.damp(node.core.material.emissiveIntensity, selected ? 1.55 : hovered ? 1.12 : 0.76, 8, dampDelta);
      node.shell.material.opacity = THREE.MathUtils.damp(node.shell.material.opacity, selected ? 0.54 : 0.25, 8, dampDelta);
      node.halo.material.opacity = THREE.MathUtils.damp(node.halo.material.opacity, selected ? 0.88 : hovered ? 0.66 : 0.34, 8, dampDelta);
      node.label.material.opacity = THREE.MathUtils.damp(node.label.material.opacity, selected ? 1 : hovered ? 0.86 : 0.48, 8, dampDelta);
    });

    pulses.forEach((pulse, index) => {
      const curve = pulseCurves[index % pulseCurves.length];
      const progress = (effectTime * 0.055 + index / pulses.length) % 1;
      curve.getPointAt(progress, pulsePoint);
      pulse.position.copy(pulsePoint);
      pulse.material.opacity = 0.55 + Math.sin((progress + effectTime * 0.08) * Math.PI * 2) * 0.18;
    });

    selectionRing.quaternion.copy(camera.quaternion);
    selectionRing.rotateZ(effectTime * 0.16);
    selectionOrbit.quaternion.copy(camera.quaternion);
    selectionOrbit.rotateZ(-effectTime * 0.12 + 0.8);
    const selectionPulse = reduceMotion ? 1 : 1 + Math.sin(effectTime * 1.8) * 0.04;
    selectionOrbit.scale.setScalar(selectionPulse);
    canopy.rotation.z = Math.sin(effectTime * 0.22) * 0.006;
    canopy.rotation.x = Math.sin(effectTime * 0.17) * 0.004;
    stars.rotation.y = effectTime * 0.0028;
    fireflies.rotation.y = Math.sin(effectTime * 0.08) * 0.012;

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
    cameraTween = null;
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
  select(items[selectedIndex].id, { notify: false, hold: false, focus: false });
  resize();
  controls.target.copy(HOME_TARGET);
  controls.update();
  updateGrowth();
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
      sceneModel: "ai-history-tree",
      leaves: canopy.count,
    }),
  };
  container.__atlas = api;
  return api;
}
