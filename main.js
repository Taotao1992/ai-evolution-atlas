const timelineItems = [
  {
    id: "dartmouth",
    era: "1956",
    buttonTitle: "Dartmouth",
    buttonSubtitle: "AI gets a name and a shared ambition",
    title: "Dartmouth turned scattered ideas into a field with a banner.",
    summary:
      "The 1956 Dartmouth Summer Research Project gave artificial intelligence a durable name and a durable ambition: intelligence as something that could be described, formalized, and ultimately simulated by machines.",
    shift:
      "The move was organizational as much as technical. It connected logic, cybernetics, search, and language under one research program.",
    why:
      "Once the field had a name, it could accumulate labs, funding, courses, and a much bolder long-term story than any one subdiscipline could carry alone.",
    chips: ["field formation", "symbolic AI", "research agenda"],
    image: "./assets/ml-matrix.svg",
    links: [
      {
        label: "Dartmouth: Artificial Intelligence Coined at Dartmouth",
        url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
      },
      {
        label: "The original Dartmouth workshop proposal",
        url: "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf",
      },
    ],
  },
  {
    id: "backprop",
    era: "1958-1986",
    buttonTitle: "Perceptrons to backprop",
    buttonSubtitle: "Neural ideas survive and then become trainable",
    title: "Neural networks needed a training breakthrough before they could matter.",
    summary:
      "Early perceptron enthusiasm hit hard limits, and AI went through multiple winters. The 1986 backpropagation result revived layered networks by making representation learning trainable at useful scale.",
    shift:
      "The field moved from isolated hand-built decision rules toward gradient-based learning over stacked internal representations.",
    why:
      "Backprop did not immediately create modern deep learning, but it created the practical optimization recipe that later scaled with more data, compute, and better hardware.",
    chips: ["perceptron", "backpropagation", "optimization"],
    image: "./assets/dl-stack.svg",
    links: [
      {
        label: "Nature: Learning representations by back-propagating errors",
        url: "https://www.nature.com/articles/323533a0",
      },
      {
        label: "3Blue1Brown: Gradient descent and learning",
        url: "https://www.youtube.com/watch?v=IHZwWFHWa-w",
      },
    ],
  },
  {
    id: "stat-ml",
    era: "1990s-2000s",
    buttonTitle: "Statistical ML",
    buttonSubtitle: "Features, benchmarks, and industrial reliability",
    title: "Machine learning became a production discipline before it became a spectacle.",
    summary:
      "This era belongs to supervised learning pipelines, feature engineering, support vector machines, trees, ensembles, and the hard craft of turning messy data into stable predictive systems.",
    shift:
      "Instead of manually encoding every rule, teams learned to optimize from labeled data with strong evaluation culture and repeatable toolchains.",
    why:
      "A huge amount of real business AI arrived here first: recommendation, ranking, fraud detection, forecasting, risk modeling, and document classification.",
    chips: ["features", "supervised learning", "industrial ML"],
    image: "./assets/ml-matrix.svg",
    links: [
      {
        label: "scikit-learn",
        url: "https://scikit-learn.org/stable/",
      },
      {
        label: "A Few Useful Things to Know About Machine Learning",
        url: "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf",
      },
      {
        label: "The Bitter Lesson",
        url: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
      },
    ],
  },
  {
    id: "alexnet",
    era: "2012",
    buttonTitle: "AlexNet",
    buttonSubtitle: "Deep learning breaks into the mainstream",
    title: "AlexNet made representation learning impossible to ignore.",
    summary:
      "When AlexNet won ImageNet by a wide margin, deep learning stopped looking like a niche revival and started looking like the dominant path for perception tasks.",
    shift:
      "The center of gravity moved from carefully engineered features toward end-to-end learned representations trained on big datasets with GPUs.",
    why:
      "This is the moment many industries stopped asking whether deep learning was real and started asking how quickly they could adopt it.",
    chips: ["ImageNet", "CNNs", "GPU training"],
    image: "./assets/dl-stack.svg",
    links: [
      {
        label: "NeurIPS 2012: ImageNet Classification with Deep CNNs",
        url: "https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45-Abstract.html",
      },
      {
        label: "3Blue1Brown: What is a neural network?",
        url: "https://www.youtube.com/watch?v=aircAruvnKk",
      },
    ],
  },
  {
    id: "transformer",
    era: "2017",
    buttonTitle: "Transformers",
    buttonSubtitle: "Sequence modeling changes shape",
    title: "Transformers turned attention into the new backbone.",
    summary:
      "The transformer architecture replaced recurrence with attention and parallelism, opening the door to much larger language models and broader multimodal systems.",
    shift:
      "The field gained a more scalable way to model long-range dependencies in text and later in code, vision, audio, and video.",
    why:
      "Many of the systems now called generative AI sit on top of this architectural pivot.",
    chips: ["attention", "sequence modeling", "scaling"],
    image: "./assets/llm-attention.svg",
    links: [
      {
        label: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
      },
      {
        label: "3Blue1Brown: Attention in transformers",
        url: "https://www.youtube.com/watch?v=eMlx5fFNoYc",
      },
    ],
  },
  {
    id: "gpt3",
    era: "2020",
    buttonTitle: "LLMs",
    buttonSubtitle: "Language becomes the interface layer",
    title: "Large language models made plain language feel like software control.",
    summary:
      "GPT-3 made the prompt itself feel like a new programming surface. Instead of building a separate model for every task, users could describe intent directly in language and get surprisingly capable behavior.",
    shift:
      "The interface moved from feature engineering and task-specific training toward prompting, in-context learning, and natural-language orchestration.",
    why:
      'This is where AI stopped being only a back-end model class and started becoming a broadly accessible interface metaphor: "just ask."',
    chips: ["few-shot learning", "prompting", "general interface"],
    image: "./assets/llm-attention.svg",
    links: [
      {
        label: "Language Models are Few-Shot Learners",
        url: "https://arxiv.org/abs/2005.14165",
      },
      {
        label: "Karpathy: Intro to Large Language Models",
        url: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
      },
    ],
  },
  {
    id: "agents",
    era: "2023-2024",
    buttonTitle: "Agents",
    buttonSubtitle: "Tools, memory, retrieval, loops",
    title: "The next leap was not just larger models, but longer-running systems.",
    summary:
      "As teams added retrieval, tool use, planning loops, guardrails, and persistence, the center of product design moved from the model alone to the system wrapped around the model.",
    shift:
      "Single-response chat gave way to multi-step workflows that can inspect state, call APIs, recover from failure, and coordinate subtasks.",
    why:
      "This is the layer where AI products start to feel dependable enough for real work instead of one-shot demos.",
    chips: ["retrieval", "tool use", "orchestration"],
    image: "./assets/agent-loop.svg",
    links: [
      {
        label: "Anthropic: Building Effective AI Agents",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
      },
      {
        label: "OpenAI Agents SDK",
        url: "https://openai.github.io/openai-agents-js/",
      },
    ],
  },
  {
    id: "multimodal-frontier",
    era: "2025-2026",
    buttonTitle: "Beyond chat",
    buttonSubtitle: "OpenClaw, Seedance, Happy Oyster, harnesses",
    title: "The frontier is splitting into agent systems, cinematic media, and world-like interfaces.",
    summary:
      "Current frontier products do not point in just one direction. OpenClaw emphasizes personal agent systems, Seedance pushes multimodal audio-video generation, Happy Oyster hints at spatial or world-like interfaces, and harness engineering formalizes the outer control layer.",
    shift:
      "The question is no longer only how smart the model is. It is also what medium it inhabits, what control surfaces surround it, and whether it can stay coherent over time.",
    why:
      "This is the first phase where the future of AI starts to look plural: more than one dominant interface may emerge.",
    chips: ["multimodal", "agent products", "interface expansion"],
    image: "./assets/media-surface.svg",
    links: [
      {
        label: "OpenClaw documentation",
        url: "https://docs.openclaw.ai/",
      },
      {
        label: "Dreamina Seedance 2.0",
        url: "https://dreamina.capcut.com/tools/seedance-2-0",
      },
      {
        label: "Happy Oyster",
        url: "https://www.happyoyster.cn/",
      },
    ],
  },
  {
    id: "self-improving-ai",
    era: "2026",
    buttonTitle: "Self-improving AI",
    buttonSubtitle: "Recursive, Sakana, and AI improving AI",
    title: "A new lab wave is betting that AI should improve AI, not just consume more compute.",
    summary:
      "By mid-2026, the frontier story broadened again. Recursive emerged arguing that the fastest path to superintelligence is open-ended self-improvement, while Sakana formalized an RSI Lab around sample-efficient recursive improvement, AI scientists, and self-rewriting agents.",
    shift:
      "The frontier ambition moved from training a single bigger model toward building systems that can discover better training strategies, better evaluations, better code, and eventually better research processes.",
    why:
      "This is the clearest current signal that frontier AI is splitting into competing bets: scale, agents, interaction, embodiment, and now recursive improvement loops over AI itself.",
    chips: ["recursive self-improvement", "AI for AI", "new labs"],
    image: "./assets/agent-loop.svg",
    links: [
      {
        label: "Recursive official site",
        url: "https://www.recursive.com/",
      },
      {
        label: "GV: Why self-improving AI is the next frontier",
        url: "https://www.gv.com/news/recursive-superintelligence-self-improving-ai",
      },
      {
        label: "Sakana AI RSI Lab",
        url: "https://sakana.ai/rsi-lab/",
      },
    ],
  },
  {
    id: "world-models",
    era: "Next",
    buttonTitle: "World models",
    buttonSubtitle: "Planning over latent futures",
    title: "World models are the strongest candidate for the next conceptual jump.",
    summary:
      "A world model does more than continue text. It compresses structure, predicts consequences, and supports planning over possible futures before an action is taken.",
    shift:
      "The emphasis moves from responsive generation toward internal simulation, latent reasoning, and action grounded in imagined trajectories.",
    why:
      "If this branch matures, the real interface change could be from conversation to simulation: AI systems that reason by running candidate futures internally.",
    chips: ["simulation", "planning", "latent structure"],
    image: "./assets/world-shell.svg",
    links: [
      {
        label: "World Models",
        url: "https://arxiv.org/abs/1803.10122",
      },
      {
        label: "DreamerV3",
        url: "https://danijar.com/project/dreamerv3/",
      },
    ],
  },
];

const frontierItems = [
  {
    id: "openclaw",
    kicker: "Personal agent systems",
    tabTitle: "OpenClaw",
    tabSubtitle: "local, always-on, personal computing",
    title: "OpenClaw represents the personal-agent branch of the frontier.",
    summary:
      "OpenClaw matters because it frames the agent not as a one-off prompt responder, but as a more persistent local system that can work with context, tools, and continuity over time.",
    interpretation:
      "My read is that OpenClaw belongs to the 'AI as personal operating layer' category: less like a chatbot, more like a continuously available software companion with agency hooks.",
    why:
      "This direction becomes more attractive as users want privacy, local control, memory, and a system that feels native to their own machine rather than rented for one chat turn at a time.",
    chips: ["local-first", "personal agents", "always-on systems"],
    image: "./assets/agent-loop.svg",
    links: [
      {
        label: "OpenClaw on GitHub",
        url: "https://github.com/openclaw/openclaw",
      },
      {
        label: "OpenClaw docs",
        url: "https://docs.openclaw.ai/",
      },
      {
        label: "OpenClaw creator interview",
        url: "https://www.youtube.com/watch?v=4uzGDAoNOZc",
      },
    ],
  },
  {
    id: "recursive",
    kicker: "Recursive self-improvement",
    tabTitle: "Recursive",
    tabSubtitle: "AI improving AI through open-ended search",
    title: "Recursive is the clearest new company betting that AI should improve AI.",
    summary:
      "Recursive says the fastest path to superintelligence is open-ended self-improvement: systems that identify their own weaknesses, generate better benchmarks, and improve parts of their own codebase or research stack over time.",
    interpretation:
      "Treat this as a frontier-direction signal more than a consumer product signal. The claim is that one more giant model run is not the only path; continuous improvement loops over AI itself may become an orthogonal capability curve.",
    why:
      "If recursive improvement works even partially, progress could become more compounding and less linear, which is why this theme now sits at the center of both capability excitement and safety debate.",
    chips: ["self-improvement", "open-ended algorithms", "AI for AI"],
    image: "./assets/agent-loop.svg",
    links: [
      {
        label: "Recursive official site",
        url: "https://www.recursive.com/",
      },
      {
        label: "GV: Recursive Superintelligence",
        url: "https://www.gv.com/news/recursive-superintelligence-self-improving-ai",
      },
      {
        label: "Darwin Gödel Machine paper",
        url: "https://arxiv.org/abs/2505.22954",
      },
    ],
  },
  {
    id: "seedance",
    kicker: "Multimodal media generation",
    tabTitle: "Seedance",
    tabSubtitle: "audio + video + image + text in one surface",
    title: "Seedance shows how quickly video generation is becoming a first-class interface.",
    summary:
      "Dreamina's Seedance 2.0 positions multimodal audio-video generation as a native creative surface, not a novelty add-on. It is part of the shift from text-only AI toward cinematic, controllable media systems.",
    interpretation:
      "Seedance is important less because 'video is cool' and more because it expands what an AI interface can be. Prompting becomes directing, editing, and composing across several modalities at once.",
    why:
      "As image, video, and audio models mature, product differentiation shifts toward coherence, editing controls, reference fidelity, and low-friction creative flow.",
    chips: ["multimodal", "video generation", "creative tooling"],
    image: "./assets/seedance-wave.svg",
    links: [
      {
        label: "Dreamina Seedance 2.0",
        url: "https://dreamina.capcut.com/tools/seedance-2-0",
      },
      {
        label: "Seedance 2.0 model card on arXiv",
        url: "https://arxiv.org/abs/2604.14148",
      },
    ],
  },
  {
    id: "happy-oyster",
    kicker: "World-like interface experiments",
    tabTitle: "Happy Oyster",
    tabSubtitle: "immersive, spatial, exploratory",
    title: "Happy Oyster hints at a more world-like, explorable interface layer.",
    summary:
      "The official Happy Oyster experience leans away from plain chat and toward an immersive audiovisual surface. Even if the exact product category is still evolving, the interface direction is notable.",
    interpretation:
      "The most interesting read is not the branding itself but the interface signal: AI may increasingly appear as a navigable environment or media space rather than a single text input box.",
    why:
      "If products like this gain traction, we may remember chat as a transitional form. The next-generation experience could feel more like entering a scene than opening a conversation.",
    chips: ["immersive UI", "interactive media", "spatial metaphor"],
    image: "./assets/oyster-world.svg",
    links: [
      {
        label: "Happy Oyster official site",
        url: "https://www.happyoyster.cn/",
      },
      {
        label: "World Models paper for conceptual context",
        url: "https://arxiv.org/abs/1803.10122",
      },
    ],
  },
  {
    id: "harness",
    kicker: "System architecture",
    tabTitle: "Harness engineering",
    tabSubtitle: "evaluation, guardrails, recovery, control",
    title: "Harness engineering is the missing product layer many agent demos gloss over.",
    summary:
      "Harness engineering focuses on the control structure around the model: evaluations, checkpoints, fallbacks, permissions, recovery paths, and the broader operational design that makes agentic systems trustworthy.",
    interpretation:
      "This is one of the clearest signs that AI product design is maturing. The value is no longer only the model's raw capability, but the surrounding system that turns capability into dependable behavior.",
    why:
      "As models get cheaper and stronger, the differentiator often shifts outward to orchestration quality, observability, testing, and control.",
    chips: ["ops layer", "evals", "guardrails"],
    image: "./assets/media-surface.svg",
    links: [
      {
        label: "Harness Engineering Academy",
        url: "https://harnessengineering.academy/",
      },
      {
        label: "Ryan Lopopolo on harness engineering",
        url: "https://www.youtube.com/watch?v=am_oeAoUhew",
      },
      {
        label: "Anthropic: Building Effective AI Agents",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
      },
    ],
  },
  {
    id: "world-models",
    kicker: "Research bet",
    tabTitle: "World models",
    tabSubtitle: "simulation, imagination, planning",
    title: "World models remain the most ambitious bridge from generation to reasoning-through-simulation.",
    summary:
      "World-model research asks whether agents can build compact internal models of environments, roll out possible futures, and choose actions from imagined trajectories rather than immediate pattern completion alone.",
    interpretation:
      "This is the branch that could eventually unify multimodal perception, planning, and embodied action into a more coherent intelligence stack.",
    why:
      "If the current wave is about agents with tools, the next wave may be agents with imagination: systems that can test futures before they act.",
    chips: ["latent planning", "embodied AI", "simulation"],
    image: "./assets/world-shell.svg",
    links: [
      {
        label: "World Models",
        url: "https://arxiv.org/abs/1803.10122",
      },
      {
        label: "DreamerV3",
        url: "https://danijar.com/project/dreamerv3/",
      },
      {
        label: "Yann LeCun on world models and JEPA",
        url: "https://www.youtube.com/watch?v=yUmDRxV0krg",
      },
    ],
  },
];

const labItems = [
  {
    id: "recursive-lab",
    track: "self-improvement",
    trackLabel: "self-improving AI",
    poster: "Recursive",
    kicker: "Self-improving AI",
    title: "Recursive Superintelligence",
    summary:
      "Recursive positions itself around one thesis: AI should improve AI. Its official site frames this as open-ended, recursively self-improving superintelligence aimed first at automating the science of AI itself.",
    bet:
      "Build open-ended systems that can identify limitations, generate better benchmarks, and improve the code and research process that powers later models.",
    why:
      "This is the clearest pure-play company bet on recursive self-improvement, so it is one of the best places to watch if you want to see whether 'AI for AI' becomes a real frontier track.",
    accent: "#5dd9ff",
    image: "./assets/agent-loop.svg",
    chips: ["recursive self-improvement", "open-ended algorithms", "AI science"],
    links: [
      {
        label: "Recursive official site",
        url: "https://www.recursive.com/",
      },
      {
        label: "GV thesis on Recursive",
        url: "https://www.gv.com/news/recursive-superintelligence-self-improving-ai",
      },
    ],
  },
  {
    id: "sakana-rsi-lab",
    track: "self-improvement",
    trackLabel: "self-improving AI",
    poster: "Sakana",
    kicker: "Sample-efficient RSI",
    title: "Sakana AI RSI Lab",
    summary:
      "Sakana's RSI Lab argues for recursive self-improvement on modest, sample-efficient compute budgets. It ties together the Darwin Gödel Machine, The AI Scientist, and a broader vision of agent-native models improving themselves.",
    bet:
      "Use evolutionary search, self-rewriting agents, and automated research loops to redesign AI development with AI, rather than relying only on hyperscale brute force.",
    why:
      "Among the new lab bets, Sakana currently has one of the strongest published lineages from concept to concrete artifacts, which makes it especially useful for teaching.",
    accent: "#87ffc1",
    image: "./assets/dl-stack.svg",
    chips: ["Darwin Gödel Machine", "AI Scientist", "sample efficiency"],
    links: [
      {
        label: "Sakana AI RSI Lab",
        url: "https://sakana.ai/rsi-lab/",
      },
      {
        label: "The AI Scientist in Nature",
        url: "https://sakana.ai/ai-scientist-nature/",
      },
      {
        label: "Darwin Gödel Machine",
        url: "https://arxiv.org/abs/2505.22954",
      },
    ],
  },
  {
    id: "thinking-machines",
    track: "collaboration",
    trackLabel: "Thinking Machines / collaboration",
    poster: "TML",
    kicker: "Human-AI collaboration",
    title: "Thinking Machines Lab",
    summary:
      "Thinking Machines Lab is a neo lab focused on AI systems that are more understandable, customizable, multimodal, and collaborative. Its interaction-model work treats interactivity itself as a research target.",
    bet:
      "Build frontier-capable models and infrastructure while making human-AI collaboration, customization, and multimodal interaction first-class instead of afterthoughts.",
    why:
      "This is an important counterpoint to the 'fully autonomous agent' story. It says the real bottleneck may be the quality of collaboration loops between people and models.",
    accent: "#ffb67b",
    image: "./assets/harness-studio.svg",
    chips: ["neo lab", "interaction models", "multimodal collaboration"],
    links: [
      {
        label: "Thinking Machines home",
        url: "https://thinkingmachines.ai/",
      },
      {
        label: "Interaction models",
        url: "https://thinkingmachines.ai/blog/interaction-models/",
      },
      {
        label: "Tinker",
        url: "https://thinkingmachines.ai/news/announcing-tinker/",
      },
    ],
  },
  {
    id: "reflection-ai",
    track: "coding",
    trackLabel: "coding agents",
    poster: "Reflection",
    kicker: "Autonomous coding",
    title: "Reflection AI",
    summary:
      "Reflection argues that autonomous coding is the root-node problem for superintelligence. Its thesis is that once software can be planned, written, refined, and improved automatically, much broader computer-based work will follow.",
    bet:
      "Push reinforcement learning and language models toward stronger autonomy on computers, with coding as the most practical proving ground.",
    why:
      "Coding is one of the shortest loops where AI can directly improve the software stack around itself, so this lab sits close to the recursive-improvement conversation even when framed as product work.",
    accent: "#ff8f7a",
    image: "./assets/llm-attention.svg",
    chips: ["autonomous coding", "RL + LLMs", "enterprise agents"],
    links: [
      {
        label: "Reflection: A Path to Superintelligence",
        url: "https://reflection.ai/blog/reflection-a-path-to-superintelligence/",
      },
      {
        label: "Reflection research",
        url: "https://reflection.ai/research",
      },
      {
        label: "Asimov docs",
        url: "https://docs.reflection.ai/docs/about-asimov",
      },
    ],
  },
  {
    id: "world-labs",
    track: "world-models",
    trackLabel: "world models",
    poster: "World",
    kicker: "Spatial intelligence",
    title: "World Labs",
    summary:
      "World Labs is one of the clearest company-level bets that world models will become a major new stack. Its framing centers on spatial intelligence: systems that can perceive, generate, reason, and interact with the 3D world.",
    bet:
      "Build foundational world models that collapse rendering, simulation, and planning into one increasingly unified representation of spatial reality.",
    why:
      "This is useful for students because it translates the vague phrase 'world models' into a concrete research and product agenda.",
    accent: "#5dd9ff",
    image: "./assets/world-observatory.svg",
    chips: ["spatial intelligence", "Marble", "renderers/simulators/planners"],
    links: [
      {
        label: "World Labs about",
        url: "https://www.worldlabs.ai/about",
      },
      {
        label: "World-model taxonomy",
        url: "https://www.worldlabs.ai/blog/taxonomy-of-world-models",
      },
      {
        label: "Marble",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
    ],
  },
  {
    id: "futurehouse",
    track: "science",
    trackLabel: "AI scientists",
    poster: "Science",
    kicker: "Scientific discovery",
    title: "FutureHouse",
    summary:
      "FutureHouse is building AI scientists for biology and human health. It frames the bottleneck not as missing ideas but as too few trained minds able to read, synthesize, hypothesize, and design experiments at scale.",
    bet:
      "Pair advanced agents with scientists and gradually automate more of literature search, synthesis, hypothesis generation, and experimental planning.",
    why:
      "It shows how agentic AI can become a focused vertical system long before we settle the broader AGI debate.",
    accent: "#87ffc1",
    image: "./assets/harness-studio.svg",
    chips: ["AI scientist", "biology", "scientific agents"],
    links: [
      {
        label: "FutureHouse about",
        url: "https://www.futurehouse.org/about",
      },
      {
        label: "FutureHouse platform",
        url: "https://www.futurehouse.org/news/launching-futurehouse-platform-ai-agents",
      },
      {
        label: "Aviary paper",
        url: "https://arxiv.org/abs/2412.21154",
      },
    ],
  },
  {
    id: "physical-intelligence",
    track: "embodiment",
    trackLabel: "embodiment",
    poster: "PI",
    kicker: "General-purpose robotics",
    title: "Physical Intelligence",
    summary:
      "Physical Intelligence says general-purpose AI should enter the physical world. Its line of work centers on foundation policies and world-grounded control systems that can steer many robots across many tasks.",
    bet:
      "Build generalist robot policies and embodied foundation models that learn from real-world experience, memory, and action consequences rather than text alone.",
    why:
      "Embodiment is one of the hardest tests of whether AI actually understands state, causality, and long-horizon consequences instead of merely describing them.",
    accent: "#ffb67b",
    image: "./assets/world-shell.svg",
    chips: ["robot foundation models", "openpi", "vision-language-action"],
    links: [
      {
        label: "Physical Intelligence",
        url: "https://www.pi.website/",
      },
      {
        label: "Open Sourcing pi0",
        url: "https://www.pi.website/blog/openpi",
      },
      {
        label: "OpenPI on GitHub",
        url: "https://github.com/Physical-Intelligence/openpi",
      },
    ],
  },
  {
    id: "ssi",
    track: "safety",
    trackLabel: "safety",
    poster: "SSI",
    kicker: "Straight-shot safety",
    title: "Safe Superintelligence Inc.",
    summary:
      "SSI is a pure frontier-lab signal: one goal, one product, and no consumer-product detours. Its public stance is that safety and capability should be advanced in tandem as one technical program.",
    bet:
      "Pursue a straight-shot path to safe superintelligence, with safety, security, and progress explicitly aligned in the same roadmap.",
    why:
      "This matters because it shows that not every well-funded lab is optimizing for near-term product surfaces; some are still organized around a singular safety-and-capability thesis.",
    accent: "#ff8f7a",
    image: "./assets/media-surface.svg",
    chips: ["straight-shot lab", "safety + capability", "frontier focus"],
    links: [
      {
        label: "SSI official site",
        url: "https://ssi.inc/",
      },
    ],
  },
];

const libraryItems = [
  {
    id: "dartmouth-official",
    type: "blog",
    topic: "AI prehistory",
    poster: "AI named",
    title: "Artificial Intelligence (AI) Coined at Dartmouth",
    summary:
      "The cleanest official retelling of why 1956 matters: it marks the moment AI became a named field, not just a scattered set of ideas.",
    bestFor: "Starting the story at the actual naming moment of the field.",
    why: "It anchors the whole timeline in an official institutional source rather than mythology alone.",
    chips: ["official", "history", "Dartmouth"],
    accent: "#5dd9ff",
    url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
  },
  {
    id: "backprop-paper",
    type: "paper",
    topic: "Neural learning",
    poster: "Backprop",
    title: "Learning representations by back-propagating errors",
    summary:
      "A landmark 1986 paper that made multi-layer representation learning practically trainable.",
    bestFor: "Understanding why deep learning had a viable optimization story at all.",
    why: "Backprop is one of the core bridges between early neural ideas and modern deep learning.",
    chips: ["paper", "1986", "optimization"],
    accent: "#87ffc1",
    url: "https://www.nature.com/articles/323533a0",
  },
  {
    id: "few-useful-things",
    type: "blog",
    topic: "Statistical ML",
    poster: "ML craft",
    title: "A Few Useful Things to Know About Machine Learning",
    summary:
      "A short, sharp piece on why practical machine learning is mostly about disciplined empirical work, not magic.",
    bestFor: "Building intuition for the industrial ML mindset before the generative wave.",
    why: "It explains why classic ML became so operationally useful long before chat AI.",
    chips: ["practice", "evaluation", "classical ML"],
    accent: "#ffb67b",
    url: "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf",
  },
  {
    id: "scikit-learn",
    type: "project",
    topic: "Statistical ML",
    poster: "Toolkit",
    title: "scikit-learn",
    summary:
      "The canonical toolbox for a huge slice of production ML work: classifiers, regressors, clustering, preprocessing, and evaluation.",
    bestFor: "Seeing what mainstream machine learning looked like in actual engineering practice.",
    why: "It represents the reliable toolkit layer that powered many real-world AI systems before deep learning dominated attention.",
    chips: ["library", "production", "python"],
    accent: "#ff8f7a",
    url: "https://scikit-learn.org/stable/",
  },
  {
    id: "alexnet-paper",
    type: "paper",
    topic: "Deep learning",
    poster: "AlexNet",
    title: "ImageNet Classification with Deep Convolutional Neural Networks",
    summary:
      "The ImageNet result that made deep learning impossible for the broader field to dismiss.",
    bestFor: "Pinpointing the symbolic start of the modern deep-learning era.",
    why: "This is the paper many people use to date the practical mainstream victory of deep learning.",
    chips: ["ImageNet", "CNN", "2012"],
    accent: "#5dd9ff",
    url: "https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45-Abstract.html",
  },
  {
    id: "gan-paper",
    type: "paper",
    topic: "Generative AI",
    poster: "GANs",
    title: "Generative Adversarial Nets",
    summary:
      "The 2014 paper that made neural image synthesis feel newly real and kick-started a major generative-AI chapter.",
    bestFor: "Understanding the pre-diffusion roots of modern generative media.",
    why: "GANs helped turn generation from a side topic into a core frontier of AI.",
    chips: ["paper", "2014", "generation"],
    accent: "#ff8f7a",
    url: "https://arxiv.org/abs/1406.2661",
  },
  {
    id: "alphago-paper",
    type: "paper",
    topic: "Search + learning",
    poster: "AlphaGo",
    title: "Mastering the game of Go with deep neural networks and tree search",
    summary:
      "The AlphaGo paper that fused deep learning with search into a landmark public demonstration of machine competence.",
    bestFor: "Seeing how planning and learned representations started working together at world-class level.",
    why: "It is one of the clearest milestones between deep learning and later agent-style systems.",
    chips: ["paper", "2016", "planning"],
    accent: "#87ffc1",
    url: "https://www.nature.com/articles/nature16961",
  },
  {
    id: "nn-video",
    type: "video",
    topic: "Deep learning",
    poster: "See it",
    title: "3Blue1Brown: But what is a neural network?",
    summary:
      "An unusually good visual explainer for the representational intuition behind neural networks.",
    bestFor: "People who understand pictures faster than papers.",
    why: "The site is stronger when not every concept requires reading a research paper first.",
    chips: ["video", "explainers", "visual"],
    accent: "#87ffc1",
    url: "https://www.youtube.com/watch?v=aircAruvnKk",
  },
  {
    id: "backprop-video",
    type: "video",
    topic: "Deep learning",
    poster: "Learning",
    title: "3Blue1Brown: Gradient descent, how neural networks learn",
    summary:
      "A companion explainer for how learning actually happens inside neural nets.",
    bestFor: "Connecting the abstract idea of training to an intuitive visual model.",
    why: "Backprop becomes far less mysterious after a clear visual walkthrough.",
    chips: ["video", "gradient descent", "learning"],
    accent: "#ffb67b",
    url: "https://www.youtube.com/watch?v=IHZwWFHWa-w",
  },
  {
    id: "transformer-paper",
    type: "paper",
    topic: "Transformers",
    poster: "Attention",
    title: "Attention Is All You Need",
    summary:
      "The transformer paper that changed the architecture stack for language and much more.",
    bestFor: "Understanding the architectural pivot behind modern LLMs.",
    why: "This is one of the central papers in the entire contemporary AI story.",
    chips: ["paper", "transformer", "2017"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/1706.03762",
  },
  {
    id: "attention-video",
    type: "video",
    topic: "Transformers",
    poster: "Attention",
    title: "3Blue1Brown: Attention in transformers, step-by-step",
    summary:
      "A visual route into the attention mechanism without needing to decode the whole paper first.",
    bestFor: "Fast conceptual understanding of what transformers are doing differently.",
    why: "It makes the transition from neural nets to LLM architecture feel far less opaque.",
    chips: ["video", "transformers", "attention"],
    accent: "#87ffc1",
    url: "https://www.youtube.com/watch?v=eMlx5fFNoYc",
  },
  {
    id: "gpt3-paper",
    type: "paper",
    topic: "LLMs",
    poster: "GPT-3",
    title: "Language Models are Few-Shot Learners",
    summary:
      "The GPT-3 paper that helped establish prompting and in-context learning as a new interface pattern.",
    bestFor: "Understanding why language itself became a software control surface.",
    why: "This is one of the clearest documents behind the shift from task models to general-purpose language interfaces.",
    chips: ["paper", "few-shot", "LLM"],
    accent: "#ff8f7a",
    url: "https://arxiv.org/abs/2005.14165",
  },
  {
    id: "bert-paper",
    type: "paper",
    topic: "Language models",
    poster: "BERT",
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    summary:
      "A foundational language-model paper that made bidirectional transformer pretraining central to NLP.",
    bestFor: "Understanding the bridge between transformer architecture and large-scale language understanding.",
    why: "BERT is one of the most important stepping stones between early transformers and the LLM era.",
    chips: ["paper", "2018", "NLP"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/1810.04805",
  },
  {
    id: "clip-paper",
    type: "paper",
    topic: "Multimodal AI",
    poster: "CLIP",
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    summary:
      "CLIP helped define the modern multimodal turn by linking images and language through contrastive pretraining.",
    bestFor: "Students who want to understand why multimodal AI accelerated so quickly after language models.",
    why: "It is a key paper behind modern cross-modal representation learning.",
    chips: ["paper", "2021", "vision-language"],
    accent: "#ffb67b",
    url: "https://arxiv.org/abs/2103.00020",
  },
  {
    id: "instructgpt-paper",
    type: "paper",
    topic: "Alignment",
    poster: "RLHF",
    title: "Training language models to follow instructions with human feedback",
    summary:
      "The InstructGPT paper that made instruction-following and RLHF part of the modern assistant stack.",
    bestFor: "Understanding how chat-style helpfulness was engineered on top of base language models.",
    why: "It is one of the clearest papers behind the assistant behavior students now take for granted.",
    chips: ["paper", "RLHF", "alignment"],
    accent: "#87ffc1",
    url: "https://arxiv.org/abs/2203.02155",
  },
  {
    id: "cot-paper",
    type: "paper",
    topic: "Reasoning",
    poster: "CoT",
    title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
    summary:
      "A high-impact paper on prompting for explicit intermediate reasoning traces in large language models.",
    bestFor: "Understanding one of the major conceptual jumps in LLM prompting and reasoning behavior.",
    why: "It changed how researchers and practitioners think about eliciting reasoning from language models.",
    chips: ["paper", "reasoning", "prompting"],
    accent: "#ff8f7a",
    url: "https://arxiv.org/abs/2201.11903",
  },
  {
    id: "react-paper",
    type: "paper",
    topic: "Agents",
    poster: "ReAct",
    title: "ReAct: Synergizing Reasoning and Acting in Language Models",
    summary:
      "A major agent paper showing how reasoning traces and tool actions can be interleaved in one loop.",
    bestFor: "Students trying to connect prompting, planning, and acting into a single agent pattern.",
    why: "It is one of the cleanest conceptual bridges into the agent wave.",
    chips: ["paper", "agents", "tool use"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/2210.03629",
  },
  {
    id: "karpathy-llm",
    type: "video",
    topic: "LLMs",
    poster: "LLMs",
    title: "Karpathy: Intro to Large Language Models",
    summary:
      "A high-signal walkthrough of how the modern LLM stack hangs together.",
    bestFor: "Getting quickly aligned on the practical mental model for LLMs.",
    why: "It compresses a lot of current understanding into one approachable talk.",
    chips: ["video", "LLM", "overview"],
    accent: "#5dd9ff",
    url: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
  },
  {
    id: "anthropic-agents",
    type: "blog",
    topic: "Agents",
    poster: "Agents",
    title: "Anthropic: Building Effective AI Agents",
    summary:
      "A practical and unusually grounded piece on what actually makes agents useful beyond demos.",
    bestFor: "Understanding the difference between agent buzzwords and workable systems.",
    why: "It captures the engineering shift from model obsession to system design.",
    chips: ["agents", "orchestration", "engineering"],
    accent: "#87ffc1",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
  },
  {
    id: "openai-agents-sdk",
    type: "project",
    topic: "Agents",
    poster: "SDK",
    title: "OpenAI Agents SDK",
    summary:
      "A concrete example of how the agent wave is being turned into reusable product primitives.",
    bestFor: "Seeing how agent concepts become a usable developer toolkit.",
    why: "The frontier is no longer just research papers; it is composable software surfaces.",
    chips: ["sdk", "agents", "tooling"],
    accent: "#ffb67b",
    url: "https://openai.github.io/openai-agents-js/",
  },
  {
    id: "openclaw-repo",
    type: "project",
    topic: "OpenClaw",
    poster: "OpenClaw",
    title: "OpenClaw repository",
    summary:
      "The code-level entry point into the OpenClaw ecosystem.",
    bestFor: "Seeing how the personal-agent story is embodied in a real project.",
    why: "OpenClaw is one of the clearest concrete examples of the 'agent as personal computing layer' direction.",
    chips: ["repo", "agents", "local"],
    accent: "#5dd9ff",
    url: "https://github.com/openclaw/openclaw",
  },
  {
    id: "openclaw-docs",
    type: "project",
    topic: "OpenClaw",
    poster: "Docs",
    title: "OpenClaw docs",
    summary:
      "The higher-level explanation layer for how OpenClaw is intended to work.",
    bestFor: "Understanding the product framing beyond the raw repository.",
    why: "It helps translate a code artifact into a clearer worldview about personal agents.",
    chips: ["docs", "personal AI", "system design"],
    accent: "#87ffc1",
    url: "https://docs.openclaw.ai/",
  },
  {
    id: "seedance-official",
    type: "project",
    topic: "Seedance",
    poster: "Video",
    title: "Dreamina Seedance 2.0",
    summary:
      "The official product surface for Seedance as a multimodal AI video creator.",
    bestFor: "Seeing how audio-video AI is being productized for creators.",
    why: "It makes the 'AI interface becomes media' idea concrete very quickly.",
    chips: ["video generation", "official", "multimodal"],
    accent: "#ff8f7a",
    url: "https://dreamina.capcut.com/tools/seedance-2-0",
  },
  {
    id: "seedance-paper",
    type: "paper",
    topic: "Seedance",
    poster: "2.0",
    title: "Seedance 2.0: Advancing Video Generation for World Complexity",
    summary:
      "The 2026 Seedance 2.0 model card on arXiv, describing the multimodal audio-video generation stack.",
    bestFor: "Understanding the technical jump from cool demos to integrated multimodal generation.",
    why: "It adds substance to the product story and makes the recent frontier less hand-wavy.",
    chips: ["paper", "2026", "audio-video"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/2604.14148",
  },
  {
    id: "happy-oyster",
    type: "project",
    topic: "Happy Oyster",
    poster: "World",
    title: "Happy Oyster",
    summary:
      "An interface experiment that feels closer to an immersive environment than a plain chatbot page.",
    bestFor: "Tracking the possibility that AI UX becomes more spatial and exploratory.",
    why: "Even without a standard category label yet, it points to a meaningful interface direction.",
    chips: ["immersive", "UI", "experimental"],
    accent: "#87ffc1",
    url: "https://www.happyoyster.cn/",
  },
  {
    id: "harness-academy",
    type: "blog",
    topic: "Harness engineering",
    poster: "Harness",
    title: "Harness Engineering Academy",
    summary:
      "A learning hub around the practice of building the outer control layer for AI systems.",
    bestFor: "Understanding why the wrapper around the model often matters more than the demo prompt.",
    why: "Harness thinking is one of the sharpest lenses for the current transition from prototype to dependable product.",
    chips: ["evals", "guardrails", "operations"],
    accent: "#ffb67b",
    url: "https://harnessengineering.academy/",
  },
  {
    id: "harness-video",
    type: "video",
    topic: "Harness engineering",
    poster: "Talk",
    title: "Ryan Lopopolo: Harness Engineering",
    summary:
      "A talk focused on how software changes when humans steer and agents execute.",
    bestFor: "Seeing the operational logic behind agent systems from a practitioner's viewpoint.",
    why: "It translates abstract agent architecture into product and engineering reality.",
    chips: ["video", "operations", "product systems"],
    accent: "#ff8f7a",
    url: "https://www.youtube.com/watch?v=am_oeAoUhew",
  },
  {
    id: "recursive-site",
    type: "project",
    topic: "Self-improving AI",
    poster: "Recursive",
    title: "Recursive official site",
    summary:
      "Recursive's own statement of the thesis that AI should recursively improve AI through open-ended algorithms.",
    bestFor: "Seeing the self-improvement bet from the lab itself, not from commentary around it.",
    why: "It is the cleanest primary source for why Recursive exists and what it thinks the frontier bottleneck is.",
    chips: ["official", "self-improvement", "2026"],
    accent: "#5dd9ff",
    url: "https://www.recursive.com/",
  },
  {
    id: "recursive-gv",
    type: "blog",
    topic: "Self-improving AI",
    poster: "RSI",
    title: "GV: Recursive Superintelligence and self-improving AI",
    summary:
      "A current, detailed explanation of Recursive's thesis and why serious capital is flowing into recursive self-improvement.",
    bestFor: "Understanding why this direction is being treated as more than a speculative thought experiment.",
    why: "It combines the research bet, the founder set, and the funding signal in one highly legible source.",
    chips: ["investor thesis", "2026", "recursive improvement"],
    accent: "#87ffc1",
    url: "https://www.gv.com/news/recursive-superintelligence-self-improving-ai",
  },
  {
    id: "sakana-rsi-lab",
    type: "blog",
    topic: "Self-improving AI",
    poster: "Sakana",
    title: "Introducing Sakana AI's RSI Lab",
    summary:
      "Sakana's official roadmap for recursive self-improvement, including DGM, The AI Scientist, and sample-efficient self-improvement.",
    bestFor: "Seeing a concrete RSI program laid out as a research lineage rather than a slogan.",
    why: "It is one of the best current primary sources for what self-improving AI means in practice.",
    chips: ["official", "RSI Lab", "sample efficiency"],
    accent: "#ffb67b",
    url: "https://sakana.ai/rsi-lab/",
  },
  {
    id: "dgm-paper",
    type: "paper",
    topic: "Self-improving AI",
    poster: "DGM",
    title: "Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents",
    summary:
      "A technical case study in self-improving agents that rewrite and evaluate their own code over time.",
    bestFor: "Going beyond RSI rhetoric into an actual research artifact.",
    why: "This is one of the strongest current papers for students who want to see what 'AI improving AI' looks like technically.",
    chips: ["paper", "self-rewriting", "agents"],
    accent: "#ff8f7a",
    url: "https://arxiv.org/abs/2505.22954",
  },
  {
    id: "ai-scientist-paper",
    type: "paper",
    topic: "AI scientists",
    poster: "Scientist",
    title: "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery",
    summary:
      "A landmark paper on end-to-end automated research loops: idea generation, code, experiments, papers, and review.",
    bestFor: "Understanding why AI-for-science is becoming a serious frontier vertical.",
    why: "It turns the 'AI scientist' idea into a concrete workflow architecture rather than a vague aspiration.",
    chips: ["paper", "science", "automation"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/2408.06292",
  },
  {
    id: "thinking-machines-home",
    type: "project",
    topic: "Collaboration",
    poster: "TML",
    title: "Thinking Machines Lab",
    summary:
      "The official home page for a lab arguing that AI should be more widely understood, customizable, and collaborative.",
    bestFor: "Comparing frontier lab theses side by side.",
    why: "It shows that a major branch of the frontier is optimizing for collaboration loops, not autonomy alone.",
    chips: ["official", "collaboration", "multimodal"],
    accent: "#87ffc1",
    url: "https://thinkingmachines.ai/",
  },
  {
    id: "interaction-models",
    type: "blog",
    topic: "Collaboration",
    poster: "Interact",
    title: "Interaction Models: A Scalable Approach to Human-AI Collaboration",
    summary:
      "Thinking Machines' research preview arguing that interactivity should scale alongside intelligence.",
    bestFor: "Students who want a sharper picture of what post-chat AI interfaces may look like.",
    why: "It reframes interaction quality as a frontier research problem, not just a UX layer.",
    chips: ["blog", "interaction", "multimodal"],
    accent: "#ffb67b",
    url: "https://thinkingmachines.ai/blog/interaction-models/",
  },
  {
    id: "tinker-announcement",
    type: "blog",
    topic: "Collaboration",
    poster: "Tinker",
    title: "Announcing Tinker",
    summary:
      "Thinking Machines' product preview for a collaborative multimodal workspace built around memory, artifacts, and ongoing interaction.",
    bestFor: "Seeing how the interaction-model thesis turns into a concrete product surface.",
    why: "It makes the collaboration bet feel like a real interface direction instead of a vague research slogan.",
    chips: ["product preview", "collaboration", "multimodal"],
    accent: "#ff8f7a",
    url: "https://thinkingmachines.ai/news/announcing-tinker/",
  },
  {
    id: "reflection-path",
    type: "blog",
    topic: "Coding agents",
    poster: "Code",
    title: "Reflection: A Path to Superintelligence",
    summary:
      "Reflection's official thesis that autonomous coding is the practical route into broader superintelligence.",
    bestFor: "Understanding why coding is becoming a key proving ground for autonomy and self-improvement.",
    why: "It links RL, LLMs, and autonomous software work into one coherent frontier narrative.",
    chips: ["blog", "autonomous coding", "superintelligence"],
    accent: "#ff8f7a",
    url: "https://reflection.ai/blog/reflection-a-path-to-superintelligence/",
  },
  {
    id: "asimov-docs",
    type: "project",
    topic: "Coding agents",
    poster: "Asimov",
    title: "About Asimov",
    summary:
      "Reflection's docs for a code research agent focused on codebase comprehension, persistent context, and enterprise deployment.",
    bestFor: "Seeing how a frontier-lab thesis becomes an actual product surface.",
    why: "It makes the coding-agent story less abstract by grounding it in a real system architecture.",
    chips: ["docs", "enterprise", "persistent context"],
    accent: "#5dd9ff",
    url: "https://docs.reflection.ai/docs/about-asimov",
  },
  {
    id: "cursor-docs",
    type: "project",
    topic: "Coding agents",
    poster: "Cursor",
    title: "Cursor Docs: Agent, Rules, MCP, Skills & CLI",
    summary:
      "Official Cursor documentation showing how agent mode, rules, MCP servers, and background tooling turn an editor into a coding-agent workspace.",
    bestFor: "Seeing how frontier coding agents are being productized for day-to-day software work.",
    why: "Cursor is one of the clearest signs that coding agents are becoming a default development interface, not a niche demo.",
    chips: ["official", "IDE agents", "workflow"],
    accent: "#87ffc1",
    url: "https://cursor.com/docs",
  },
  {
    id: "codex-workflows",
    type: "blog",
    topic: "Coding agents",
    poster: "Codex",
    title: "OpenAI: Codex for every role, tool, and workflow",
    summary:
      "A current official update on how Codex is expanding from software tasks into broader parallel work, tool use, and interactive app creation.",
    bestFor: "Understanding how coding-agent systems are broadening into a general work surface in 2026.",
    why: "It captures the current Codex direction from a primary source instead of second-hand commentary.",
    chips: ["official", "2026", "parallel work"],
    accent: "#ffb67b",
    url: "https://openai.com/index/codex-for-every-role-tool-workflow/",
  },
  {
    id: "claude-code-overview",
    type: "project",
    topic: "Coding agents",
    poster: "Claude",
    title: "Claude Code overview",
    summary:
      "Anthropic's official overview of Claude Code as an agentic coding tool across terminal, IDE, desktop, and browser.",
    bestFor: "Comparing how another frontier coding system frames autonomy, tool use, and workflow integration.",
    why: "Students now encounter coding agents in practice, so this belongs alongside the more research-heavy sources.",
    chips: ["official", "agentic coding", "workflow"],
    accent: "#5dd9ff",
    url: "https://code.claude.com/docs/en/overview",
  },
  {
    id: "world-labs-about",
    type: "project",
    topic: "World models",
    poster: "Spatial",
    title: "World Labs about",
    summary:
      "World Labs' official framing of spatial intelligence and frontier world models for the 3D world.",
    bestFor: "Getting the company-level picture for why world models matter now.",
    why: "It is one of the most readable primary sources on the spatial-intelligence thesis.",
    chips: ["official", "spatial intelligence", "3D"],
    accent: "#87ffc1",
    url: "https://www.worldlabs.ai/about",
  },
  {
    id: "world-labs-taxonomy",
    type: "blog",
    topic: "World models",
    poster: "Taxonomy",
    title: "A Functional Taxonomy of World Models",
    summary:
      "A strong conceptual essay separating renderers, simulators, and planners inside the overloaded phrase 'world model.'",
    bestFor: "Students who want more precision than generic futurist talk about world models.",
    why: "It is one of the best recent explanations of what different world-model systems are actually trying to do.",
    chips: ["blog", "simulation", "planning"],
    accent: "#ffb67b",
    url: "https://www.worldlabs.ai/blog/taxonomy-of-world-models",
  },
  {
    id: "world-labs-marble",
    type: "blog",
    topic: "World models",
    poster: "Marble",
    title: "Marble: a controllable world model for image generation",
    summary:
      "A World Labs research post on a controllable world model that links visual generation to underlying spatial structure.",
    bestFor: "Seeing how a world-model company cashes out the idea in a concrete artifact.",
    why: "It grounds the future section in an actual current system rather than a vague long-term concept.",
    chips: ["world model", "spatial", "generation"],
    accent: "#ff8f7a",
    url: "https://www.worldlabs.ai/blog/marble-world-model",
  },
  {
    id: "futurehouse-about",
    type: "project",
    topic: "AI scientists",
    poster: "FH",
    title: "FutureHouse about",
    summary:
      "FutureHouse's official mission page for building AI scientists to accelerate scientific discovery.",
    bestFor: "Understanding the AI-scientist thesis as a lab mission, not just a single tool demo.",
    why: "It shows how agentic AI is turning into a serious vertical program in science.",
    chips: ["official", "biology", "AI scientist"],
    accent: "#ff8f7a",
    url: "https://www.futurehouse.org/about",
  },
  {
    id: "futurehouse-platform",
    type: "blog",
    topic: "AI scientists",
    poster: "Platform",
    title: "FutureHouse Platform: Superintelligent AI Agents for Scientific Discovery",
    summary:
      "A concrete release of scientific agents for literature search, synthesis, and chemistry planning.",
    bestFor: "Seeing how AI-scientist ideas become actual user-facing research agents.",
    why: "This bridges the gap between lab mission statements and deployable scientific workflows.",
    chips: ["blog", "agents", "science workflows"],
    accent: "#5dd9ff",
    url: "https://www.futurehouse.org/news/launching-futurehouse-platform-ai-agents",
  },
  {
    id: "aviary-paper",
    type: "paper",
    topic: "AI scientists",
    poster: "Aviary",
    title: "Aviary: training language agents on challenging scientific tasks",
    summary:
      "A benchmark and training setup for language agents working on high-difficulty scientific problems.",
    bestFor: "Connecting the AI-scientist vision to concrete evaluation and training work.",
    why: "It adds a stronger technical paper beside the FutureHouse mission and platform pages.",
    chips: ["paper", "science agents", "benchmark"],
    accent: "#87ffc1",
    url: "https://arxiv.org/abs/2412.21154",
  },
  {
    id: "openpi-project",
    type: "project",
    topic: "Embodiment",
    poster: "openpi",
    title: "Open Sourcing pi0",
    summary:
      "Physical Intelligence's release of code and weights for a general-purpose robotic foundation model.",
    bestFor: "Understanding how embodiment changes the AI problem from language generation to action under physical constraints.",
    why: "It gives students a practical, code-level entry point into the embodied frontier.",
    chips: ["robotics", "open source", "VLA"],
    accent: "#87ffc1",
    url: "https://www.pi.website/blog/openpi",
  },
  {
    id: "ssi-official",
    type: "project",
    topic: "Safety",
    poster: "SSI",
    title: "Safe Superintelligence Inc.",
    summary:
      "The official site for SSI's singular, straight-shot thesis: build safe superintelligence and nothing else.",
    bestFor: "Understanding the safety-first frontier-lab position in its own words.",
    why: "It is a sharp contrast with labs optimizing for products, open tools, or recursive improvement.",
    chips: ["official", "safety", "frontier lab"],
    accent: "#ffb67b",
    url: "https://ssi.inc/",
  },
  {
    id: "world-models-paper",
    type: "paper",
    topic: "World models",
    poster: "World",
    title: "World Models",
    summary:
      "A landmark paper for the idea that agents can learn compact internal simulations of their environment.",
    bestFor: "Understanding why simulation is such a powerful future-facing concept in AI.",
    why: "It is still one of the cleanest conceptual anchors for the world-model direction.",
    chips: ["paper", "simulation", "planning"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/1803.10122",
  },
  {
    id: "ijepa-paper",
    type: "paper",
    topic: "Predictive world models",
    poster: "I-JEPA",
    title: "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture",
    summary:
      "A key paper in the predictive-modeling branch that argues for latent prediction rather than token-level generation.",
    bestFor: "Understanding the modern world-model conversation beyond pure next-token generation.",
    why: "It gives students a second major future-facing line of thought besides standard LLM scaling.",
    chips: ["paper", "predictive", "JEPA"],
    accent: "#87ffc1",
    url: "https://arxiv.org/abs/2301.08243",
  },
  {
    id: "dreamerv3",
    type: "project",
    topic: "World models",
    poster: "Dreamer",
    title: "DreamerV3",
    summary:
      "A modern world-model project that makes the simulation-and-planning branch feel practical and current.",
    bestFor: "Seeing how the world-model idea keeps evolving after the original paper.",
    why: "It connects early conceptual work to contemporary reinforcement-learning systems.",
    chips: ["RL", "world models", "project"],
    accent: "#87ffc1",
    url: "https://danijar.com/project/dreamerv3/",
  },
  {
    id: "lecun-video",
    type: "video",
    topic: "World models",
    poster: "Future",
    title: "Yann LeCun on self-supervision, JEPA, and world models",
    summary:
      "A current talk about why future AI may need richer internal models than next-token continuation alone.",
    bestFor: "Hearing the case for simulation-heavy AI from one of its strongest advocates.",
    why: "It keeps the future section tied to a live research argument rather than vague futurism.",
    chips: ["video", "JEPA", "future"],
    accent: "#ffb67b",
    url: "https://www.youtube.com/watch?v=yUmDRxV0krg",
  },
  {
    id: "bitter-lesson",
    type: "blog",
    topic: "Scaling",
    poster: "Scale",
    title: "The Bitter Lesson",
    summary:
      "Richard Sutton's influential argument that scalable search and learning tend to beat handcrafted cleverness over time.",
    bestFor: "Understanding one of the deepest philosophical through-lines from ML to today's large-model era.",
    why: "It explains why modern AI repeatedly rewards methods that scale with compute and data.",
    chips: ["scaling", "essay", "history"],
    accent: "#ff8f7a",
    url: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
  },
];

const watchItems = [
  {
    id: "watch-nn",
    label: "Deep learning",
    title: "But what is a neural network?",
    summary:
      "The cleanest visual entry point into why learned representations changed the field.",
    url: "https://www.youtube.com/watch?v=aircAruvnKk",
    youtubeId: "aircAruvnKk",
    thumbnail: "./assets/watch/neural-network.jpg",
  },
  {
    id: "watch-attention",
    label: "Transformers",
    title: "Attention in transformers, step-by-step",
    summary:
      "A visual unpacking of the architecture behind the LLM wave.",
    url: "https://www.youtube.com/watch?v=eMlx5fFNoYc",
    youtubeId: "eMlx5fFNoYc",
    thumbnail: "./assets/watch/transformers.jpg",
  },
  {
    id: "watch-llm",
    label: "LLMs",
    title: "Karpathy's intro to large language models",
    summary:
      "A dense but accessible map of what the modern LLM stack is actually doing.",
    url: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
    youtubeId: "zjkBMFhNj_g",
    thumbnail: "./assets/watch/llm.jpg",
  },
  {
    id: "watch-openclaw",
    label: "OpenClaw",
    title: "OpenClaw creator on why apps may disappear",
    summary:
      "A good bridge from abstract agent talk to a more opinionated product direction.",
    url: "https://www.youtube.com/watch?v=4uzGDAoNOZc",
    youtubeId: "4uzGDAoNOZc",
    thumbnail: "./assets/watch/openclaw.jpg",
  },
  {
    id: "watch-harness",
    label: "Harness engineering",
    title: "How to build software when humans steer, agents execute",
    summary:
      "A sharp explanation of the outer system layer around model intelligence.",
    url: "https://www.youtube.com/watch?v=am_oeAoUhew",
    youtubeId: "am_oeAoUhew",
    thumbnail: "./assets/watch/harness.jpg",
  },
  {
    id: "watch-world-models",
    label: "World models",
    title: "Yann LeCun on self-supervised learning and world models",
    summary:
      "A current research lens on where AI may go after the current language-centric wave.",
    url: "https://www.youtube.com/watch?v=yUmDRxV0krg",
    youtubeId: "yUmDRxV0krg",
    thumbnail: "./assets/watch/world-models.jpg",
  },
];

const state = {
  timelineId: timelineItems[0].id,
  frontierId: frontierItems[0].id,
  labFilter: "all",
  labId: labItems[0].id,
  libraryFilter: "all",
  libraryId: libraryItems[0].id,
};

const timelineNav = document.querySelector("#timeline-nav");
const timelineImage = document.querySelector("#timeline-image");
const timelineEra = document.querySelector("#timeline-era");
const timelineTitle = document.querySelector("#timeline-title");
const timelineSummary = document.querySelector("#timeline-summary");
const timelineShift = document.querySelector("#timeline-shift");
const timelineWhy = document.querySelector("#timeline-why");
const timelineChips = document.querySelector("#timeline-chips");
const timelineLinks = document.querySelector("#timeline-links");

const frontierTabs = document.querySelector("#frontier-tabs");
const frontierImage = document.querySelector("#frontier-image");
const frontierKicker = document.querySelector("#frontier-kicker");
const frontierTitle = document.querySelector("#frontier-title");
const frontierSummary = document.querySelector("#frontier-summary");
const frontierInterpretation = document.querySelector("#frontier-interpretation");
const frontierWhy = document.querySelector("#frontier-why");
const frontierChips = document.querySelector("#frontier-chips");
const frontierLinks = document.querySelector("#frontier-links");

const labFilterPills = [...document.querySelectorAll("[data-lab-filter]")];
const labsCount = document.querySelector("#labs-count");
const labsGrid = document.querySelector("#labs-grid");
const labsImage = document.querySelector("#labs-image");
const labsKicker = document.querySelector("#labs-kicker");
const labsTitle = document.querySelector("#labs-title");
const labsSummary = document.querySelector("#labs-summary");
const labsBet = document.querySelector("#labs-bet");
const labsWhy = document.querySelector("#labs-why");
const labsChips = document.querySelector("#labs-chips");
const labsLinks = document.querySelector("#labs-links");

const filterPills = [...document.querySelectorAll("[data-filter]")];
const libraryCount = document.querySelector("#library-count");
const libraryGrid = document.querySelector("#library-grid");
const libraryTitle = document.querySelector("#library-title");
const librarySummary = document.querySelector("#library-summary");
const libraryBest = document.querySelector("#library-best");
const libraryWhy = document.querySelector("#library-why");
const libraryChips = document.querySelector("#library-chips");
const libraryLink = document.querySelector("#library-link");

const watchGrid = document.querySelector("#watch-grid");
const scrollProgress = document.querySelector("#scroll-progress");
const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("[data-section]")];
const countNodes = [...document.querySelectorAll("[data-count]")];
let revealObserver;

function makeChip(text) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = text;
  return chip;
}

function makeLink(link) {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = link.label;
  return anchor;
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function setImage(img, src, alt) {
  img.src = src;
  img.alt = alt;
}

function addMotionSurface(node, index = 0) {
  node.classList.add("reveal-card");
  node.style.setProperty("--stagger", `${Math.min(index % 10, 9) * 42}ms`);

  if (revealObserver) {
    revealObserver.observe(node);
  }
}

function coverPath(collection, id) {
  return `./assets/covers/${collection}/${id}.jpg`;
}

function renderTimelineNav() {
  clearNode(timelineNav);

  timelineItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "timeline-button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(item.id === state.timelineId));
    button.classList.toggle("is-active", item.id === state.timelineId);
    button.innerHTML = `<strong>${item.era} - ${item.buttonTitle}</strong><span>${item.buttonSubtitle}</span>`;
    button.addEventListener("click", () => {
      state.timelineId = item.id;
      renderTimelineNav();
      renderTimelineDetail();
    });
    addMotionSurface(button, index);
    timelineNav.appendChild(button);
  });
}

function renderTimelineDetail() {
  const item = timelineItems.find((entry) => entry.id === state.timelineId);

  setImage(timelineImage, coverPath("timeline", item.id), item.title);
  timelineEra.textContent = item.era;
  timelineTitle.textContent = item.title;
  timelineSummary.textContent = item.summary;
  timelineShift.textContent = item.shift;
  timelineWhy.textContent = item.why;

  clearNode(timelineChips);
  item.chips.forEach((chip) => timelineChips.appendChild(makeChip(chip)));

  clearNode(timelineLinks);
  item.links.forEach((link) => timelineLinks.appendChild(makeLink(link)));
}

function renderFrontierTabs() {
  clearNode(frontierTabs);

  frontierItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "frontier-tab";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(item.id === state.frontierId));
    button.classList.toggle("is-active", item.id === state.frontierId);
    button.innerHTML = `<strong>${item.tabTitle}</strong><span>${item.tabSubtitle}</span>`;
    button.addEventListener("click", () => {
      state.frontierId = item.id;
      renderFrontierTabs();
      renderFrontierPanel();
    });
    addMotionSurface(button, index);
    frontierTabs.appendChild(button);
  });
}

function renderFrontierPanel() {
  const item = frontierItems.find((entry) => entry.id === state.frontierId);

  setImage(frontierImage, coverPath("frontier", item.id), item.title);
  frontierKicker.textContent = item.kicker;
  frontierTitle.textContent = item.title;
  frontierSummary.textContent = item.summary;
  frontierInterpretation.textContent = item.interpretation;
  frontierWhy.textContent = item.why;

  clearNode(frontierChips);
  item.chips.forEach((chip) => frontierChips.appendChild(makeChip(chip)));

  clearNode(frontierLinks);
  item.links.forEach((link) => frontierLinks.appendChild(makeLink(link)));
}

function getFilteredLabItems() {
  if (state.labFilter === "all") {
    return labItems;
  }

  return labItems.filter((item) => item.track === state.labFilter);
}

function renderLabFilterState() {
  labFilterPills.forEach((pill) => {
    const active = pill.dataset.labFilter === state.labFilter;
    pill.classList.toggle("is-active", active);
    pill.setAttribute("aria-pressed", String(active));
  });
}

function renderLabDetail() {
  const item = labItems.find((entry) => entry.id === state.labId);

  setImage(labsImage, coverPath("labs", item.id), item.title);
  labsKicker.textContent = item.kicker;
  labsTitle.textContent = item.title;
  labsSummary.textContent = item.summary;
  labsBet.textContent = item.bet;
  labsWhy.textContent = item.why;

  clearNode(labsChips);
  item.chips.forEach((chip) => labsChips.appendChild(makeChip(chip)));

  clearNode(labsLinks);
  item.links.forEach((link) => labsLinks.appendChild(makeLink(link)));
}

function renderLabGrid() {
  const filteredItems = getFilteredLabItems();

  if (!filteredItems.some((item) => item.id === state.labId)) {
    state.labId = filteredItems[0]?.id ?? "";
  }

  labsCount.textContent = String(filteredItems.length);
  clearNode(labsGrid);

  filteredItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lab-card";
    button.classList.toggle("is-selected", item.id === state.labId);
    button.setAttribute("aria-pressed", String(item.id === state.labId));

    const poster = document.createElement("div");
    poster.className = "lab-poster";
    poster.style.setProperty("--accent", item.accent);
    poster.innerHTML = `<img src="${coverPath("labs", item.id)}" alt="" />`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const summary = document.createElement("p");
    summary.textContent = item.summary;

    const meta = document.createElement("div");
    meta.className = "resource-meta";
    meta.innerHTML = `<span>${item.trackLabel}</span><span>${item.chips[0]}</span>`;

    button.append(poster, title, summary, meta);
    button.addEventListener("click", () => {
      state.labId = item.id;
      renderLabGrid();
      renderLabDetail();
    });

    addMotionSurface(button, index);
    labsGrid.appendChild(button);
  });

  renderLabDetail();
}

function getFilteredLibraryItems() {
  if (state.libraryFilter === "all") {
    return libraryItems;
  }

  return libraryItems.filter((item) => item.type === state.libraryFilter);
}

function renderLibraryDetail() {
  const item = libraryItems.find((entry) => entry.id === state.libraryId);

  libraryTitle.textContent = item.title;
  librarySummary.textContent = item.summary;
  libraryBest.textContent = item.bestFor;
  libraryWhy.textContent = item.why;
  libraryLink.href = item.url;
  libraryLink.textContent = `Open ${item.type}`;

  clearNode(libraryChips);
  item.chips.forEach((chip) => libraryChips.appendChild(makeChip(chip)));
}

function renderLibraryGrid() {
  const filteredItems = getFilteredLibraryItems();

  if (!filteredItems.some((item) => item.id === state.libraryId)) {
    state.libraryId = filteredItems[0]?.id ?? "";
  }

  libraryCount.textContent = String(filteredItems.length);
  clearNode(libraryGrid);

  filteredItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "library-card";
    button.classList.toggle("is-selected", item.id === state.libraryId);
    button.setAttribute("aria-pressed", String(item.id === state.libraryId));

    const poster = document.createElement("div");
    poster.className = "library-poster";
    poster.style.setProperty("--accent", item.accent);
    poster.innerHTML = `<img src="${coverPath("library", item.id)}" alt="" />`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const summary = document.createElement("p");
    summary.textContent = item.summary;

    const meta = document.createElement("div");
    meta.className = "resource-meta";
    meta.innerHTML = `<span>${item.topic}</span><span>${item.type.toUpperCase()}</span>`;

    button.append(poster, title, summary, meta);

    button.addEventListener("click", () => {
      state.libraryId = item.id;
      renderLibraryGrid();
      renderLibraryDetail();
    });

    addMotionSurface(button, index);
    libraryGrid.appendChild(button);
  });

  renderLibraryDetail();
}

function renderFilterState() {
  filterPills.forEach((pill) => {
    const active = pill.dataset.filter === state.libraryFilter;
    pill.classList.toggle("is-active", active);
    pill.setAttribute("aria-pressed", String(active));
  });
}

function renderWatchGrid() {
  clearNode(watchGrid);

  watchItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "watch-card";
    if (index === 0) {
      card.classList.add("is-featured");
    }

    const mediaLink = document.createElement("a");
    mediaLink.href = item.url;
    mediaLink.target = "_blank";
    mediaLink.rel = "noreferrer";

    const media = document.createElement("div");
    media.className = "watch-media";

    const image = document.createElement("img");
    image.src = item.thumbnail;
    image.alt = item.title;
    image.loading = "lazy";

    const copy = document.createElement("div");
    copy.className = "watch-copy";
    copy.innerHTML = `<p>${item.label}</p><h3>${item.title}</h3><p>${item.summary}</p>`;

    const cta = document.createElement("a");
    cta.href = item.url;
    cta.target = "_blank";
    cta.rel = "noreferrer";
    cta.textContent = "Watch on YouTube";

    media.appendChild(image);
    mediaLink.appendChild(media);
    copy.appendChild(cta);
    card.append(mediaLink, copy);
    addMotionSurface(card, index);
    watchGrid.appendChild(card);
  });
}

function initRevealMotion() {
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const staticSurfaces = [
    ...document.querySelectorAll(
      ".section-heading, .guide-panel, .source-lock, .history-shell, .frontier-shell, .labs-detail, .library-detail, .future-card",
    ),
  ];

  staticSurfaces.forEach((node, index) => addMotionSurface(node, index));

  if (shouldReduceMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-card").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  document.querySelectorAll(".reveal-card").forEach((node) => revealObserver.observe(node));
}

function animateCounts() {
  const observer = new IntersectionObserver(
    (entries, target) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const node = entry.target;
        const finalValue = Number(node.dataset.count);
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = String(Math.round(finalValue * eased));

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            node.textContent = String(finalValue);
          }
        }

        requestAnimationFrame(tick);
        target.unobserve(node);
      });
    },
    { threshold: 0.7 },
  );

  countNodes.forEach((node) => observer.observe(node));
}

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

  scrollProgress.style.transform = `scaleX(${progress})`;
  header.classList.toggle("is-scrolled", scrollTop > 28);

  let activeId = sections[0]?.id ?? "top";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.28) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);
  });
}

function bindFilters() {
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      state.libraryFilter = pill.dataset.filter;
      renderFilterState();
      renderLibraryGrid();
    });
  });
}

function bindLabFilters() {
  labFilterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      state.labFilter = pill.dataset.labFilter;
      renderLabFilterState();
      renderLabGrid();
    });
  });
}

function bindPointerGlow() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
  });
}

function init() {
  renderTimelineNav();
  renderTimelineDetail();
  renderFrontierTabs();
  renderFrontierPanel();
  renderLabFilterState();
  renderLabGrid();
  renderFilterState();
  renderLibraryGrid();
  renderWatchGrid();
  initRevealMotion();
  bindLabFilters();
  bindFilters();
  animateCounts();
  bindPointerGlow();
  updateScrollUI();

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
}

init();
