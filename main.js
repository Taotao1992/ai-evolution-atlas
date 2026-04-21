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
  },
  {
    id: "watch-attention",
    label: "Transformers",
    title: "Attention in transformers, step-by-step",
    summary:
      "A visual unpacking of the architecture behind the LLM wave.",
    url: "https://www.youtube.com/watch?v=eMlx5fFNoYc",
    youtubeId: "eMlx5fFNoYc",
  },
  {
    id: "watch-llm",
    label: "LLMs",
    title: "Karpathy's intro to large language models",
    summary:
      "A dense but accessible map of what the modern LLM stack is actually doing.",
    url: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
    youtubeId: "zjkBMFhNj_g",
  },
  {
    id: "watch-openclaw",
    label: "OpenClaw",
    title: "OpenClaw creator on why apps may disappear",
    summary:
      "A good bridge from abstract agent talk to a more opinionated product direction.",
    url: "https://www.youtube.com/watch?v=4uzGDAoNOZc",
    youtubeId: "4uzGDAoNOZc",
  },
  {
    id: "watch-harness",
    label: "Harness engineering",
    title: "How to build software when humans steer, agents execute",
    summary:
      "A sharp explanation of the outer system layer around model intelligence.",
    url: "https://www.youtube.com/watch?v=am_oeAoUhew",
    youtubeId: "am_oeAoUhew",
  },
  {
    id: "watch-world-models",
    label: "World models",
    title: "Yann LeCun on self-supervised learning and world models",
    summary:
      "A current research lens on where AI may go after the current language-centric wave.",
    url: "https://www.youtube.com/watch?v=yUmDRxV0krg",
    youtubeId: "yUmDRxV0krg",
  },
];

const state = {
  timelineId: timelineItems[0].id,
  frontierId: frontierItems[0].id,
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

const filterPills = [...document.querySelectorAll(".filter-pill")];
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

function renderTimelineNav() {
  clearNode(timelineNav);

  timelineItems.forEach((item) => {
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
    timelineNav.appendChild(button);
  });
}

function renderTimelineDetail() {
  const item = timelineItems.find((entry) => entry.id === state.timelineId);

  setImage(timelineImage, item.image, item.title);
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

  frontierItems.forEach((item) => {
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
    frontierTabs.appendChild(button);
  });
}

function renderFrontierPanel() {
  const item = frontierItems.find((entry) => entry.id === state.frontierId);

  setImage(frontierImage, item.image, item.title);
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

  filteredItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "library-card";
    button.classList.toggle("is-selected", item.id === state.libraryId);
    button.setAttribute("aria-pressed", String(item.id === state.libraryId));

    const poster = document.createElement("div");
    poster.className = "library-poster";
    poster.style.setProperty("--accent", item.accent);
    poster.innerHTML = `<small>${item.type} / ${item.topic}</small><strong>${item.poster}</strong>`;

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

  watchItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "watch-card";

    const mediaLink = document.createElement("a");
    mediaLink.href = item.url;
    mediaLink.target = "_blank";
    mediaLink.rel = "noreferrer";

    const media = document.createElement("div");
    media.className = "watch-media";

    const image = document.createElement("img");
    image.src = `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`;
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
    watchGrid.appendChild(card);
  });
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
  renderFilterState();
  renderLibraryGrid();
  renderWatchGrid();
  bindFilters();
  animateCounts();
  bindPointerGlow();
  updateScrollUI();

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
}

init();
