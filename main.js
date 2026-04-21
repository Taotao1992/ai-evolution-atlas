const progressBar = document.getElementById("scroll-progress");
const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = Array.from(document.querySelectorAll("[data-section]"));
const countEls = document.querySelectorAll("[data-count]");
const tiltCards = document.querySelectorAll("[data-tilt]");
const resourceGrid = document.getElementById("resource-grid");
const resourceCount = document.getElementById("resource-count");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const videoWall = document.getElementById("video-wall");
const detailTitle = document.getElementById("detail-title");
const detailSummary = document.getElementById("detail-summary");
const detailWhy = document.getElementById("detail-why");
const detailBestFor = document.getElementById("detail-best-for");
const detailTags = document.getElementById("detail-tags");
const detailLink = document.getElementById("detail-link");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const resources = [
  {
    id: "domingos-ml",
    title: "A Few Useful Things to Know About Machine Learning",
    summary: "A compact classic on the practical instincts that still matter in statistical machine learning.",
    why: "This article explains why generalization, data assumptions, and feature choices mattered so much in the first big industrial wave of ML.",
    bestFor: "Readers who want a high-signal bridge between theory and practice.",
    link: "https://cacm.acm.org/research/a-few-useful-things-to-know-about-machine-learning/",
    source: "ACM",
    era: "ML",
    type: "Article",
    poster: "Folk wisdom",
    filters: ["read"],
    accent: "#d39a35",
  },
  {
    id: "scikit-learn",
    title: "scikit-learn",
    summary: "The canonical toolkit for classic machine learning workflows in Python.",
    why: "It represents the toolbox era of ML: preprocessing, classical estimators, validation, and reproducible pipelines.",
    bestFor: "Builders who want to connect the history of ML to practical modern workflows.",
    link: "https://scikit-learn.org/stable/",
    source: "Project docs",
    era: "ML",
    type: "Project",
    poster: "Classical stack",
    filters: ["build"],
    accent: "#63c9d7",
  },
  {
    id: "alexnet-paper",
    title: "ImageNet Classification with Deep Convolutional Neural Networks",
    summary: "The AlexNet paper that crystallized deep learning’s breakthrough moment in vision.",
    why: "It marks the point where learned representations decisively outperformed feature-engineered vision pipelines at scale.",
    bestFor: "Anyone who wants the historical turning point for modern deep learning.",
    link: "https://proceedings.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
    source: "NeurIPS",
    era: "DL",
    type: "Paper",
    poster: "ImageNet shift",
    filters: ["read"],
    accent: "#5961d8",
  },
  {
    id: "3b1b-neural-net",
    title: "But what is a neural network?",
    summary: "3Blue1Brown’s visual explanation of neural networks and the intuition behind them.",
    why: "It turns a mathematically abstract topic into something visual and memorable, which is exactly what a history site like this should surface.",
    bestFor: "Visual learners who want intuition before equations.",
    link: "https://www.youtube.com/watch?v=aircAruvnKk",
    source: "YouTube",
    era: "DL",
    type: "Video",
    poster: "Visual intuition",
    filters: ["watch"],
    accent: "#63c9d7",
  },
  {
    id: "attention-paper",
    title: "Attention Is All You Need",
    summary: "The paper that introduced the Transformer architecture and reshaped the trajectory of modern AI.",
    why: "This is the architectural hinge between deep learning as a modality-specific success and LLMs as a general language interface.",
    bestFor: "Readers who want the canonical primary source behind the LLM era.",
    link: "https://arxiv.org/abs/1706.03762",
    source: "arXiv",
    era: "LLM",
    type: "Paper",
    poster: "Transformer",
    filters: ["read"],
    accent: "#0f7a74",
  },
  {
    id: "transformers-docs",
    title: "Hugging Face Transformers",
    summary: "The documentation hub for the library that helped operationalize LLM experimentation.",
    why: "Transformers are not just a paper anymore. This library became one of the practical bridges from research ideas to developer workflows.",
    bestFor: "Builders who want to move from history to implementation quickly.",
    link: "https://huggingface.co/docs/transformers/index",
    source: "Docs",
    era: "LLM",
    type: "Project",
    poster: "Model zoo",
    filters: ["build"],
    accent: "#db705f",
  },
  {
    id: "karpathy-llm",
    title: "Intro to Large Language Models",
    summary: "Andrej Karpathy’s concise, technical, and accessible overview of what LLMs are and why they matter.",
    why: "It explains the LLM era in a way that connects architecture, training, and product consequences.",
    bestFor: "Anyone who wants one strong video to ground the LLM section.",
    link: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
    source: "YouTube",
    era: "LLM",
    type: "Video",
    poster: "LLM overview",
    filters: ["watch"],
    accent: "#d39a35",
  },
  {
    id: "anthropic-agents",
    title: "Building effective agents",
    summary: "Anthropic’s practical article on agent workflows, orchestrators, evaluators, and tool use.",
    why: "It is one of the clearest official explanations of how real agent systems differ from one-shot prompting.",
    bestFor: "Developers and product thinkers designing agent loops and tool interfaces.",
    link: "https://www.anthropic.com/engineering/building-effective-agents",
    source: "Anthropic",
    era: "Agents",
    type: "Guide",
    poster: "Agent patterns",
    filters: ["read", "build"],
    accent: "#63c9d7",
  },
  {
    id: "openai-agents-sdk",
    title: "OpenAI Agents SDK",
    summary: "The SDK documentation for building tool-using, orchestrated agent applications.",
    why: "It represents the code-first operational turn in agent systems: tools, handoffs, guardrails, and traces.",
    bestFor: "Builders who want to prototype or productionize agents.",
    link: "https://openai.github.io/openai-agents-python/",
    source: "OpenAI",
    era: "Agents",
    type: "Project",
    poster: "Runtime layer",
    filters: ["build"],
    accent: "#0f7a74",
  },
  {
    id: "openai-practical-guide",
    title: "A practical guide to building agents",
    summary: "A longer-form OpenAI guide focused on orchestration patterns, tools, and guardrails.",
    why: "It helps explain why building agents is increasingly a software architecture problem, not only a prompt design problem.",
    bestFor: "Readers who want a deeper systems view than a short blog post can provide.",
    link: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
    source: "OpenAI PDF",
    era: "Agents",
    type: "Guide",
    poster: "Production guide",
    filters: ["read"],
    accent: "#5961d8",
  },
  {
    id: "openai-academy-video",
    title: "How to Build AI Agents",
    summary: "An OpenAI Academy video on turning agent patterns into production systems.",
    why: "This adds a more operational video companion to the written guides in the agents section.",
    bestFor: "People who prefer a workshop-style walkthrough over reading docs first.",
    link: "https://academy.openai.com/public/clubs/india-gkubq/videos/how-to-build-ai-agents-2025-06-04",
    source: "OpenAI Academy",
    era: "Agents",
    type: "Video",
    poster: "Agent workshop",
    filters: ["watch"],
    accent: "#db705f",
  },
  {
    id: "openclaw-repo",
    title: "OpenClaw — Personal AI Assistant",
    summary: "An open-source project for running a personal AI assistant on your own devices and channels.",
    why: "It makes the personal-agent direction concrete by connecting the model to channels, devices, and user-owned environments.",
    bestFor: "Builders who want to see how agent ideas become a product-shaped system.",
    link: "https://github.com/openclaw/openclaw",
    source: "GitHub",
    era: "OpenClaw",
    type: "Project",
    poster: "Personal agent",
    filters: ["build"],
    accent: "#63c9d7",
  },
  {
    id: "openclaw-docs",
    title: "OpenClaw documentation",
    summary: "The docs layer for installation, channels, agents, tools, and operations.",
    why: "The docs show how the assistant is framed not just as a chatbot, but as a control plane for a persistent assistant system.",
    bestFor: "Readers who want to understand the stack around the repo itself.",
    link: "https://docs.openclaw.ai/",
    source: "Docs",
    era: "OpenClaw",
    type: "Guide",
    poster: "Docs & ops",
    filters: ["read", "build"],
    accent: "#d39a35",
  },
  {
    id: "openclaw-yc-video",
    title: "OpenClaw Creator: Why 80% Of Apps Will Disappear",
    summary: "A Y Combinator interview that frames the larger product thesis around OpenClaw and agent-native apps.",
    why: "It gives the project a market and product narrative, not just a technical one.",
    bestFor: "Viewers who want the bigger picture around personal agent products.",
    link: "https://www.youtube.com/watch?v=4uzGDAoNOZc",
    source: "YouTube",
    era: "OpenClaw",
    type: "Video",
    poster: "Product thesis",
    filters: ["watch"],
    accent: "#0f7a74",
  },
  {
    id: "harness-academy",
    title: "Harness Engineering Academy",
    summary: "A site focused on the emerging discipline around agent infrastructure, patterns, and operations.",
    why: "It captures the shift from model fascination to system craftsmanship: evals, costs, routing, tools, and infrastructure tradeoffs.",
    bestFor: "Readers trying to understand the operational layer around agents.",
    link: "https://harnessengineering.academy/",
    source: "Academy",
    era: "Harness",
    type: "Guide",
    poster: "System shell",
    filters: ["read"],
    accent: "#db705f",
  },
  {
    id: "harness-openai-talk",
    title: "Harness Engineering: How to Build Software When Humans Steer, Agents Execute",
    summary: "A talk focused on the harness engineering perspective on modern AI software.",
    why: "This is one of the clearest ways to understand why the future of AI products may be won in the surrounding shell, not just the base model.",
    bestFor: "Developers who want a direct explanation of the harness mindset.",
    link: "https://www.youtube.com/watch?v=am_oeAoUhew",
    source: "YouTube",
    era: "Harness",
    type: "Video",
    poster: "Humans steer",
    filters: ["watch"],
    accent: "#5961d8",
  },
  {
    id: "world-models-paper",
    title: "World Models",
    summary: "David Ha and Jürgen Schmidhuber’s influential paper on learned environment models and imagined rollouts.",
    why: "It gives a crisp historical anchor for the idea that agents may learn to plan inside internal simulations before acting.",
    bestFor: "Readers who want the seminal world model reference point.",
    link: "https://arxiv.org/abs/1803.10122",
    source: "arXiv",
    era: "World models",
    type: "Paper",
    poster: "Latent world",
    filters: ["read"],
    accent: "#63c9d7",
  },
  {
    id: "world-models-site",
    title: "World Models interactive paper",
    summary: "A browser-friendly version of the original world models work.",
    why: "It turns an important research paper into a much more visual, approachable artifact for curious readers.",
    bestFor: "People who want a gentler entry into the world model idea.",
    link: "https://worldmodels.github.io/",
    source: "Interactive site",
    era: "World models",
    type: "Guide",
    poster: "Interactive view",
    filters: ["read"],
    accent: "#0f7a74",
  },
  {
    id: "dreamerv3-site",
    title: "DreamerV3",
    summary: "A modern project page showing how world models can support more general control and planning.",
    why: "DreamerV3 is a strong bridge from the original world model concept to modern scalable control systems.",
    bestFor: "Readers who want to see the world model idea updated for current research.",
    link: "https://danijar.com/project/dreamerv3/",
    source: "Project site",
    era: "World models",
    type: "Project",
    poster: "Imagined rollouts",
    filters: ["build", "read"],
    accent: "#d39a35",
  },
  {
    id: "lecun-world-models",
    title: "Yann LeCun on self-supervised learning, JEPA, and world models",
    summary: "A long-form conversation about why future AI may need stronger internal world representations.",
    why: "It helps place world models inside the broader debate over what comes after current LLM-centric systems.",
    bestFor: "Viewers interested in the frontier research argument behind the future section.",
    link: "https://www.youtube.com/watch?v=yUmDRxV0krg",
    source: "YouTube",
    era: "World models",
    type: "Video",
    poster: "Future thesis",
    filters: ["watch"],
    accent: "#db705f",
  },
  {
    id: "pytorch",
    title: "PyTorch",
    summary: "The framework that became central to deep learning and modern AI experimentation.",
    why: "PyTorch is part of the operational story of deep learning: it made iteration faster and helped research ideas move into products.",
    bestFor: "Builders connecting the DL and LLM eras to actual tooling.",
    link: "https://pytorch.org/",
    source: "Project docs",
    era: "DL",
    type: "Project",
    poster: "Research engine",
    filters: ["build"],
    accent: "#d39a35",
  },
];

const watchlist = [
  {
    topic: "Deep learning",
    title: "But what is a neural network?",
    description: "A visual starting point for the deep learning transition.",
    url: "https://www.youtube.com/watch?v=aircAruvnKk",
    videoId: "aircAruvnKk",
  },
  {
    topic: "Transformers",
    title: "Attention in transformers, step-by-step",
    description: "A visual walkthrough of the mechanism that unlocked the LLM era.",
    url: "https://www.youtube.com/watch?v=eMlx5fFNoYc",
    videoId: "eMlx5fFNoYc",
  },
  {
    topic: "LLMs",
    title: "Intro to Large Language Models",
    description: "A high-signal overview of what LLMs are and why they matter.",
    url: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
    videoId: "zjkBMFhNj_g",
  },
  {
    topic: "OpenClaw",
    title: "OpenClaw Creator: Why 80% Of Apps Will Disappear",
    description: "A product-level conversation about personal agent-native software.",
    url: "https://www.youtube.com/watch?v=4uzGDAoNOZc",
    videoId: "4uzGDAoNOZc",
  },
  {
    topic: "Harness engineering",
    title: "How to Build Software When Humans Steer, Agents Execute",
    description: "A talk focused on the shell around modern AI systems.",
    url: "https://www.youtube.com/watch?v=am_oeAoUhew",
    videoId: "am_oeAoUhew",
  },
  {
    topic: "World models",
    title: "Yann LeCun on self-supervised learning, JEPA, and world models",
    description: "A frontier perspective on where AI may head next.",
    url: "https://www.youtube.com/watch?v=yUmDRxV0krg",
    videoId: "yUmDRxV0krg",
  },
];

let activeFilter = "all";
let selectedResourceId = resources[0]?.id ?? null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  progressBar.style.transform = `scaleX(${clamp(progress, 0, 1)})`;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function animateCount(element) {
  if (element.dataset.animated === "true") {
    return;
  }

  element.dataset.animated = "true";

  const target = Number(element.dataset.count);
  const duration = prefersReducedMotion ? 0 : 1400;

  if (!Number.isFinite(target)) {
    element.textContent = element.dataset.count ?? "";
    return;
  }

  if (duration === 0) {
    element.textContent = String(target);
    return;
  }

  const start = performance.now();

  function tick(now) {
    const progress = clamp((now - start) / duration, 0, 1);
    const eased = 1 - (1 - progress) ** 3;
    element.textContent = String(Math.round(target * eased));

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function filterResources(filter) {
  if (filter === "all") {
    return resources;
  }

  return resources.filter((resource) => resource.filters.includes(filter));
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderDetail(resource) {
  if (!resource) {
    return;
  }

  detailTitle.textContent = resource.title;
  detailSummary.textContent = resource.summary;
  detailWhy.textContent = resource.why;
  detailBestFor.textContent = resource.bestFor;
  detailLink.href = resource.link;
  detailLink.textContent = `Open ${resource.source}`;
  detailTags.innerHTML = [
    `<span>${escapeHtml(resource.type)}</span>`,
    `<span>${escapeHtml(resource.era)}</span>`,
    `<span>${escapeHtml(resource.source)}</span>`,
  ].join("");
}

function renderResourceGrid() {
  const filtered = filterResources(activeFilter);

  if (!filtered.some((resource) => resource.id === selectedResourceId)) {
    selectedResourceId = filtered[0]?.id ?? null;
  }

  resourceCount.textContent = String(filtered.length);

  resourceGrid.innerHTML = filtered
    .map((resource) => {
      const selectedClass = resource.id === selectedResourceId ? " is-selected" : "";
      return `
        <button
          class="resource-card${selectedClass}"
          type="button"
          data-resource-id="${escapeHtml(resource.id)}"
          style="--accent:${resource.accent}"
        >
          <div class="resource-poster">
            <small>${escapeHtml(resource.era)}</small>
            <strong>${escapeHtml(resource.poster)}</strong>
          </div>
          <div class="resource-meta">
            <div class="resource-row">
              <span class="resource-type">${escapeHtml(resource.type)}</span>
              <span class="resource-era">${escapeHtml(resource.source)}</span>
            </div>
            <h3>${escapeHtml(resource.title)}</h3>
            <p>${escapeHtml(resource.summary)}</p>
          </div>
        </button>
      `;
    })
    .join("");

  const selected = resources.find((resource) => resource.id === selectedResourceId) ?? filtered[0];
  renderDetail(selected);

  resourceGrid.querySelectorAll("[data-resource-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedResourceId = button.getAttribute("data-resource-id");
      renderResourceGrid();
    });
  });
}

function renderWatchlist() {
  videoWall.innerHTML = watchlist
    .map(
      (video) => `
        <a class="video-card reveal is-visible" href="${escapeHtml(video.url)}" target="_blank" rel="noreferrer">
          <div class="video-media">
            <img
              src="https://i.ytimg.com/vi/${escapeHtml(video.videoId)}/hqdefault.jpg"
              alt="${escapeHtml(video.title)}"
            />
          </div>
          <div class="video-copy">
            <p class="video-topic">${escapeHtml(video.topic)}</p>
            <h3>${escapeHtml(video.title)}</h3>
            <p>${escapeHtml(video.description)}</p>
          </div>
        </a>
      `,
    )
    .join("");
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentId = entry.target.id;
      navLinks.forEach((link) => {
        const matches = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("is-active", matches);
      });
    });
  },
  {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0,
  },
);

sections.forEach((section) => sectionObserver.observe(section));

tiltCards.forEach((card) => {
  if (prefersReducedMotion) {
    return;
  }

  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;

    card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.getAttribute("data-filter") ?? "all";
    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderResourceGrid();
  });
});

updateScrollProgress();
countEls.forEach((item) => animateCount(item));
renderResourceGrid();
renderWatchlist();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
