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
    id: "alphago",
    era: "2016",
    buttonTitle: "AlphaGo",
    buttonSubtitle: "Learned representations meet search",
    title: "AlphaGo made the combination of deep learning and planning visible to the world.",
    summary:
      "AlphaGo combined deep neural networks with Monte Carlo tree search to master Go. Its 2016 Nature paper documented a system that learned both from human games and self-play rather than relying on exhaustive search alone.",
    shift:
      "The milestone connected representation learning, evaluation, reinforcement learning, and search inside one decision-making system.",
    why:
      "It offers a concrete bridge from pattern recognition to sequential decision-making—and a useful precursor to later agents that must evaluate possible actions.",
    chips: ["search", "reinforcement learning", "self-play"],
    image: "./assets/dl-stack.svg",
    links: [
      {
        label: "Nature: Mastering the game of Go",
        url: "https://www.nature.com/articles/nature16961",
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
    id: "generative-ai",
    era: "2022",
    buttonTitle: "Generative assistants",
    buttonSubtitle: "Instruction tuning meets a public interface",
    title: "Alignment and generative assistants changed who could direct an AI system.",
    summary:
      "InstructGPT showed how instruction tuning with human feedback could make a language model better follow user intent. ChatGPT then turned conversational interaction into a mass-market interface for generation, explanation, and drafting.",
    shift:
      "The teaching focus expands from model scale to post-training: demonstrations, preference feedback, evaluation, and the gap between a fluent answer and a reliable one.",
    why:
      "This milestone makes clear that useful assistants are shaped through both training and interface design—not by next-token prediction alone.",
    chips: ["instruction tuning", "RLHF", "generative AI"],
    image: "./assets/llm-attention.svg",
    links: [
      {
        label: "Training language models to follow instructions with human feedback",
        url: "https://arxiv.org/abs/2203.02155",
      },
      {
        label: "OpenAI: Introducing ChatGPT",
        url: "https://openai.com/index/chatgpt/",
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
      "This is where capability becomes a systems question: tools, permissions, feedback, and evaluation can matter as much as the base model.",
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
    id: "reasoning",
    era: "2024-2025",
    buttonTitle: "Reasoning",
    buttonSubtitle: "Test-time compute and RL",
    title: "Reasoning models made thinking time a new scaling axis.",
    summary:
      "OpenAI's o1 and open-weight models such as DeepSeek-R1 showed that additional inference-time computation, trained with reinforcement learning, could improve performance on many math, code, and science tasks.",
    shift:
      "The field added another scaling dimension: not only larger pre-training runs, but more deliberate computation while producing an answer.",
    why:
      "This shift makes cost, latency, verification, and task difficulty central to model choice. More thinking is useful on some tasks, not a universal guarantee of reliability.",
    chips: ["test-time compute", "RL", "verification"],
    image: "./assets/llm-attention.svg",
    links: [
      {
        label: "DeepSeek-R1 (arXiv)",
        url: "https://arxiv.org/abs/2501.12948",
      },
      {
        label: "OpenAI: Learning to Reason with LLMs",
        url: "https://openai.com/index/learning-to-reason-with-llms/",
      },
    ],
  },
  {
    id: "multimodal-frontier",
    era: "2025-2026",
    buttonTitle: "Systems & simulations",
    buttonSubtitle: "Agents, open weights, media, environments",
    title: "The current map expands from standalone models to systems and simulations.",
    summary:
      "OpenClaw explores persistent personal agents, Beam adds an Apache 2.0 open-weight deployment option, Seedance develops unified audio-video generation, and Genie turns generation into an interactive-environment problem.",
    shift:
      "Evaluation now has to cover the model, its tools and permissions, its harness, and the environment in which outputs become actions.",
    why:
      "These parallel directions are best compared as design choices with different evidence and limitations—not compressed into one leaderboard or a single inevitable future.",
    chips: ["agent systems", "open weights", "interactive environments"],
    image: "./assets/media-surface.svg",
    links: [
      {
        label: "OpenClaw documentation",
        url: "https://docs.openclaw.ai/",
      },
      {
        label: "Reflection: Beam release and model details",
        url: "https://reflection.ai/blog/beam-is-available",
      },
      {
        label: "Google DeepMind: Genie",
        url: "https://deepmind.google/models/genie/",
      },
      {
        label: "Dreamina Seedance 2.0",
        url: "https://dreamina.capcut.com/tools/seedance-2-0",
      },
    ],
  },
];

const frontierItems = [
  {
    id: "openclaw",
    kicker: "Personal agent systems",
    tabTitle: "OpenClaw",
    tabSubtitle: "persistent agents, local context, tools",
    title: "OpenClaw is a case study in AI as a personal operating layer.",
    summary:
      "OpenClaw frames the agent as a persistent system working with local context, tools, and continuity rather than a one-off prompt responder.",
    interpretation:
      "Read it as an architecture and workflow choice, not an automatic privacy or reliability win. Local control still needs careful review of permissions, network calls, stored context, and failure recovery.",
    why:
      "The teaching value lies in the boundary between model and machine: what can the agent access, what can it change, and how does a user inspect or interrupt its work?",
    chips: ["local-first", "personal agents", "permissions"],
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
    tabSubtitle: "automated improvement as a research bet",
    title: "Recursive frames AI-assisted improvement of AI as an explicit research program.",
    summary:
      "Recursive describes an agenda in which systems identify weaknesses, generate evaluations, and improve parts of an AI codebase or research process. Its long-term claims should be separated from what current artifacts demonstrate.",
    interpretation:
      "Treat this as a hypothesis about research automation, not evidence of unbounded self-improvement. The Darwin Gödel Machine offers a more concrete system to inspect, including its tasks, evaluation, and constraints.",
    why:
      "Students can ask a falsifiable question: which parts of the research loop actually improve, under what evaluation, and where do human design and oversight remain essential?",
    chips: ["self-improvement", "open-ended search", "evaluation"],
    image: "./assets/agent-loop.svg",
    links: [
      {
        label: "Recursive official site",
        url: "https://www.recursive.com/",
      },
      {
        label: "GV: Recursive Superintelligence thesis",
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
    tabSubtitle: "audio + video + image + text",
    title: "Seedance is one current example of generation becoming a directing interface.",
    summary:
      "Dreamina's Seedance 2.0 combines multimodal inputs with audio-video generation. It belongs to a broader shift from text-only prompting toward directing, editing, and composing across media.",
    interpretation:
      "Move beyond the showcase clip: compare temporal coherence, reference fidelity, editing controls, provenance, and how much manual work a workflow still requires.",
    why:
      "Generative media makes interface design and evaluation multimodal too. A visually impressive output does not by itself demonstrate controllability or consistent performance.",
    chips: ["multimodal", "video generation", "evaluation"],
    image: "./assets/seedance-wave.svg",
    links: [
      {
        label: "Dreamina Seedance 2.0",
        url: "https://dreamina.capcut.com/tools/seedance-2-0",
      },
      {
        label: "Seedance 2.0 technical report on arXiv",
        url: "https://arxiv.org/abs/2604.14148",
      },
    ],
  },
  {
    id: "open-models",
    kicker: "Open-weight systems",
    tabTitle: "Open models",
    tabSubtitle: "deployment, adaptation, licensing",
    title: "Beam makes open-weight deployment a concrete frontier case study.",
    summary:
      "Reflection released Beam in October 2026 under Apache 2.0: a 501B-parameter mixture-of-experts model with 23B active parameters, positioned for coding, reasoning, and agentic tasks.",
    interpretation:
      "Open weights enable inspection, self-hosting, and adaptation under a license, but they do not imply open training data or inexpensive deployment. Use the model card to examine architecture, evaluations, and limitations.",
    why:
      "The useful comparison is not simply open versus closed. It is the trade-off among control, hardware requirements, operational responsibility, capability, cost, and safeguards.",
    chips: ["Apache 2.0", "open weights", "self-hosting"],
    image: "./assets/llm-attention.svg",
    links: [
      {
        label: "Beam release notes",
        url: "https://reflection.ai/blog/beam-is-available",
      },
      {
        label: "Beam model card",
        url: "https://reflection.ai/beam-model-card",
      },
    ],
  },
  {
    id: "harness",
    kicker: "System architecture & evaluation",
    tabTitle: "Harness engineering",
    tabSubtitle: "evaluation, permissions, recovery, safeguards",
    title: "A benchmark result belongs to a system, not just a model.",
    summary:
      "Harness engineering covers evaluations, checkpoints, tools, permissions, fallbacks, recovery paths, and operational monitoring around a model. Deployment-safety reports make parts of that setup visible.",
    interpretation:
      "When reading a capability or safety result, ask which harness, tools, prompts, protections, and retry policies produced it. A different system configuration can change the result.",
    why:
      "This is the bridge between a promising demo and evidence about real-world behavior. Reproducible tasks and transparent evaluation settings matter more than a polished trajectory.",
    chips: ["system evals", "guardrails", "observability"],
    image: "./assets/media-surface.svg",
    links: [
      {
        label: "OpenAI deployment safety evaluations",
        url: "https://deploymentsafety.openai.com/",
      },
      {
        label: "Claude Sonnet 5.5 system card",
        url: "https://www.anthropic.com/claude-sonnet-5-5-system-card",
      },
      {
        label: "Anthropic: Building Effective AI Agents",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
      },
    ],
  },
  {
    id: "world-models",
    kicker: "Exploratory research",
    tabTitle: "World models",
    tabSubtitle: "interaction, prediction, planning",
    title: "World models ask whether generation can support predictions about action and consequence.",
    summary:
      "Research in this area explores compact environment representations, possible-future rollouts, and interactive generation. Genie provides a current example of worlds users can prompt and explore.",
    interpretation:
      "Keep the categories distinct: a video generator, an interactive environment, and a reliable planning model are not interchangeable. Genie's stated limits on action spaces, multi-agent interaction, and real-world accuracy are part of the lesson.",
    why:
      "The open question is whether internal or generated simulations improve decisions beyond the training distribution. That requires controllability, consistency, and task-level evidence—not just visual coherence.",
    chips: ["simulation", "planning", "known limitations"],
    image: "./assets/world-shell.svg",
    links: [
      {
        label: "Google DeepMind: Genie research",
        url: "https://deepmind.google/models/genie/",
      },
      {
        label: "Project Genie and current limitations",
        url: "https://deepmind.google/blog/project-genie-experimenting-with-infinite-interactive-worlds/",
      },
      {
        label: "World Models (2018)",
        url: "https://arxiv.org/abs/1803.10122",
      },
    ],
  },
];

const lifecycleStages = [
  {
    id: "pretrain",
    kicker: "01 / Pre-training",
    title: "Pre-training turns raw data and compute into a base model.",
    summary:
      "This is the massive next-token prediction phase. Teams curate datasets, tokenize text and multimodal streams, run distributed training across GPU clusters, checkpoint constantly, and evaluate whether the base model is actually learning useful representations.",
    infra:
      "Data pipelines, parallel training frameworks, GPU scheduling, networking, storage, mixed precision, checkpointing, and experiment tracking are the real production system.",
    risk:
      "Weak infrastructure means wasted GPU months, unstable runs, duplicated bad data, silent regressions, and models that are expensive without being better.",
    coreLabel: "PRE",
    chips: ["data curation", "distributed training", "Megatron-LM", "checkpoints"],
    links: [
      {
        label: "NVIDIA Megatron-LM",
        url: "https://github.com/NVIDIA/Megatron-LM",
      },
      {
        label: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
      },
    ],
  },
  {
    id: "posttrain",
    kicker: "02 / Post-training",
    title: "Post-training turns a base model into a useful assistant.",
    summary:
      "After pre-training, the model still needs behavior shaping: supervised fine-tuning, instruction tuning, preference optimization, RLHF/RLAIF, tool-use traces, safety training, and evaluation against real tasks.",
    infra:
      "The system now needs labeling flows, reward models, verifiers, rollout workers, agent environments, safety evals, dataset versioning, and rapid iteration loops.",
    risk:
      "Without strong post-training infra, a model can be fluent but unreliable: it may fail tool use, overfit benchmarks, drift in safety, or improve on leaderboards while becoming worse for users.",
    coreLabel: "RL",
    chips: ["SFT", "RLHF", "TRL", "Miles", "eval harnesses"],
    links: [
      {
        label: "Hugging Face TRL",
        url: "https://huggingface.co/docs/trl/index",
      },
      {
        label: "DeepSpeed-Chat",
        url: "https://github.com/deepspeedai/DeepSpeedExamples/tree/master/applications/DeepSpeed-Chat",
      },
      {
        label: "RadixArk Miles",
        url: "https://github.com/radixark/miles",
      },
    ],
  },
  {
    id: "inference",
    kicker: "03 / Inference",
    title: "Inference is where the model becomes a product.",
    summary:
      "Serving a model is not just calling it. Systems manage prefill and decode, batching, routing, KV cache reuse, speculative decoding, quantization, structured generation, streaming, monitoring, and cost controls.",
    infra:
      "The infrastructure goal is to keep tokens fast and cheap while preserving correctness, observability, uptime, and a programmable interface for agents and applications.",
    risk:
      "Bad inference infra turns a capable model into a slow, expensive, unreliable product. Latency spikes, GPU under-utilization, memory fragmentation, and weak scheduling can dominate user experience.",
    coreLabel: "TOK",
    chips: ["SGLang", "RadixAttention", "vLLM", "KV cache", "serving"],
    links: [
      {
        label: "SGLang docs",
        url: "https://docs.sglang.io/",
      },
      {
        label: "RadixArk",
        url: "https://www.radixark.com/blog/radixark-launches-100m-seed",
      },
      {
        label: "vLLM docs",
        url: "https://docs.vllm.ai/en/latest/",
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
      "Recursive Superintelligence exited stealth in May 2026 with $650M led by GV and Greycroft. Founded by Richard Socher, Tim Rocktäschel, and researchers from DeepMind, OpenAI, Meta, and Salesforce, it frames one thesis: AI should improve AI through open-ended, recursively self-improving systems.",
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
    track: "open-models",
    trackLabel: "open-weight models",
    poster: "Beam",
    kicker: "Open-weight frontier systems",
    title: "Reflection AI · Beam",
    summary:
      "Reflection's October 2026 Beam release provides Apache 2.0 weights for a 501B-parameter MoE with 23B active parameters, aimed at coding, reasoning, and agentic work.",
    bet:
      "Make a capable model available for inspection, self-hosting, and adaptation while publishing a model card for its architecture, evaluation, and use considerations.",
    why:
      "What hardware and operating expertise would deployment require? Which evaluations are independently reproducible? What does Apache 2.0 permit—and why are open weights not the same as open data?",
    accent: "#ff8f7a",
    image: "./assets/llm-attention.svg",
    chips: ["Apache 2.0", "open weights", "deployment trade-offs"],
    links: [
      {
        label: "Beam release notes",
        url: "https://reflection.ai/blog/beam-is-available",
      },
      {
        label: "Beam model card",
        url: "https://reflection.ai/beam-model-card",
      },
      {
        label: "Reflection AI home",
        url: "https://reflection.ai/",
      },
    ],
  },
  {
    id: "rl-environments",
    track: "environments",
    trackLabel: "RL environments",
    poster: "Envs",
    kicker: "Agent environment layer",
    title: "RL and Agent Environments",
    summary:
      "The new agent stack needs places where models can safely act: code sandboxes, cloud browsers, terminals, filesystems, reward loops, and evaluation harnesses. E2B, Browserbase, Daytona, Modal, Blaxel, CoreWeave, and Gymnasium make that environment layer concrete.",
    bet:
      "Make environments programmable, disposable, observable, and safe enough for RL-style rollouts, tool-use practice, code execution, browser automation, and long-running agent evaluation.",
    why:
      "Students should notice that better models are not enough. Agents improve when they can practice inside reliable environments, receive feedback, recover from failure, and be measured against reproducible tasks.",
    accent: "#9ca7ff",
    image: "./assets/harness-studio.svg",
    chips: ["RL environments", "sandboxes", "agent evals"],
    links: [
      {
        label: "E2B sandboxes",
        url: "https://e2b.dev/docs",
      },
      {
        label: "Browserbase cloud browsers",
        url: "https://www.browserbase.com/",
      },
      {
        label: "CoreWeave RL agent sandboxes",
        url: "https://www.coreweave.com/resources/videos/how-reinforcement-learning-improves-ai-agent-reliability-in-production",
      },
      {
        label: "Gymnasium RL environments",
        url: "https://gymnasium.farama.org/",
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
    id: "megatron-lm",
    type: "project",
    topic: "LLM infrastructure",
    poster: "Train",
    title: "NVIDIA Megatron-LM",
    summary:
      "A major open-source framework for large-scale transformer training, model parallelism, and distributed LLM pre-training.",
    bestFor: "Seeing what pre-training infrastructure looks like below the paper level.",
    why: "Students often hear about 'training a model' as one step. Megatron-LM makes the parallelism, checkpointing, and cluster orchestration problem visible.",
    chips: ["pre-training", "distributed training", "GPU clusters"],
    accent: "#87ffc1",
    image: "./assets/dl-stack.svg",
    url: "https://github.com/NVIDIA/Megatron-LM",
  },
  {
    id: "deepspeed-chat",
    type: "project",
    topic: "LLM post-training",
    poster: "RLHF",
    title: "DeepSpeed-Chat",
    summary:
      "Microsoft's open-source RLHF training examples for turning base models into chat-style assistants.",
    bestFor: "Understanding the engineering pipeline behind supervised fine-tuning, reward modeling, and RLHF.",
    why: "It grounds post-training in concrete code and data flow rather than describing alignment as a black box.",
    chips: ["post-training", "RLHF", "alignment"],
    accent: "#ffb67b",
    image: "./assets/harness-studio.svg",
    url: "https://github.com/deepspeedai/DeepSpeedExamples/tree/master/applications/DeepSpeed-Chat",
  },
  {
    id: "huggingface-trl",
    type: "project",
    topic: "LLM post-training",
    poster: "TRL",
    title: "Hugging Face TRL",
    summary:
      "A practical library for supervised fine-tuning, reward modeling, preference optimization, and reinforcement learning for language models.",
    bestFor: "Connecting post-training concepts like SFT, DPO, PPO, and reward models to working tooling.",
    why: "TRL is one of the clearest open-source ways to teach the behavioral layer added after base pre-training.",
    chips: ["SFT", "DPO", "RLHF"],
    accent: "#5dd9ff",
    image: "./assets/agent-loop.svg",
    url: "https://huggingface.co/docs/trl/index",
  },
  {
    id: "sglang-docs",
    type: "project",
    topic: "LLM inference",
    poster: "SGLang",
    title: "SGLang Docs",
    summary:
      "SGLang is an open-source serving framework for fast LLM and vision-language model execution, structured generation, and agentic workflows.",
    bestFor: "Understanding why inference is becoming programmable infrastructure rather than a single API call.",
    why: "It introduces students to RadixAttention, batching, scheduling, and the serving layer that determines real-world latency and cost.",
    chips: ["serving", "SGLang", "structured generation"],
    accent: "#87ffc1",
    image: "./assets/llm-attention.svg",
    url: "https://docs.sglang.io/",
  },
  {
    id: "sglang-paper",
    type: "paper",
    topic: "LLM inference",
    poster: "Runtime",
    title: "SGLang: Efficient Execution of Structured Language Model Programs",
    summary:
      "The SGLang paper behind the idea that LLM programs can be represented and executed efficiently with a runtime designed for structured generation.",
    bestFor: "Students who want the research argument behind the SGLang serving stack.",
    why: "It shows that inference is now a research problem in its own right: scheduling and execution strategy shape what agent systems can do.",
    chips: ["paper", "serving runtime", "RadixAttention"],
    accent: "#ff8f7a",
    image: "./assets/media-surface.svg",
    url: "https://arxiv.org/abs/2312.07104",
  },
  {
    id: "lmsys-sglang-blog",
    type: "blog",
    topic: "LLM inference",
    poster: "Guide",
    title: "LMSYS: Introducing SGLang",
    summary:
      "The original LMSYS announcement explaining SGLang as a language and runtime for efficient structured LLM programs.",
    bestFor: "A more readable bridge before diving into the full paper or docs.",
    why: "It helps students see why SGLang exists: complex LLM apps need both an interface language and a runtime optimized for reuse.",
    chips: ["blog", "runtime", "structured LLM programs"],
    accent: "#ffb67b",
    image: "./assets/world-shell.svg",
    url: "https://www.lmsys.org/blog/2024-01-17-sglang/",
  },
  {
    id: "vllm-docs",
    type: "project",
    topic: "LLM inference",
    poster: "vLLM",
    title: "vLLM Docs",
    summary:
      "A high-throughput open-source LLM serving engine centered on efficient batching, memory management, and production inference.",
    bestFor: "Comparing SGLang with another influential inference-serving stack.",
    why: "vLLM makes the product-side economics of LLMs visible: throughput, memory, latency, and serving architecture matter as much as model quality.",
    chips: ["serving", "PagedAttention", "throughput"],
    accent: "#5dd9ff",
    image: "./assets/ml-matrix.svg",
    url: "https://docs.vllm.ai/en/latest/",
  },
  {
    id: "radixark-launch",
    type: "blog",
    topic: "LLM infrastructure",
    poster: "RadixArk",
    title: "RadixArk launches to grow SGLang",
    summary:
      "RadixArk's launch announcement frames SGLang as frontier AI infrastructure and explains the company building around it.",
    bestFor: "Seeing how an open-source serving project becomes a company-level infrastructure bet.",
    why: "It shows students the startup layer around AI systems: not every important AI company trains a new foundation model.",
    chips: ["startup", "SGLang", "inference infra"],
    accent: "#9ca7ff",
    image: "./assets/harness-studio.svg",
    url: "https://www.radixark.com/blog/radixark-launches-100m-seed",
  },
  {
    id: "radixark-miles",
    type: "project",
    topic: "LLM post-training",
    poster: "Miles",
    title: "RadixArk Miles",
    summary:
      "Miles is RadixArk's open-source distributed system for scalable reinforcement learning on language models.",
    bestFor: "Connecting post-training and inference infrastructure into one modern systems story.",
    why: "It is a useful sign that the frontier is moving toward full-stack systems for RL, serving, and model improvement loops.",
    chips: ["RL", "post-training", "distributed systems"],
    accent: "#87ffc1",
    image: "./assets/agent-loop.svg",
    url: "https://github.com/radixark/miles",
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
    id: "openai-sandbox-agents",
    type: "project",
    topic: "RL environments",
    poster: "Sandbox",
    title: "OpenAI Agents SDK: Sandbox Agents",
    summary:
      "OpenAI's TypeScript Agents SDK docs explain sandbox agents as agents paired with isolated filesystem workspaces, shell commands, file editing, snapshots, and session state.",
    bestFor: "Understanding sandboxes as a general agent primitive rather than a single vendor product.",
    why: "It gives students a clean abstraction for the environment layer around an agent: isolate execution, observe behavior, and connect tools without handing the model the whole machine.",
    chips: ["official", "sandboxes", "agent runtime"],
    accent: "#9ca7ff",
    image: "./assets/harness-studio.svg",
    url: "https://openai.github.io/openai-agents-js/guides/sandbox-agents",
  },
  {
    id: "e2b-sandboxes",
    type: "project",
    topic: "RL environments",
    poster: "E2B",
    title: "E2B Sandboxes",
    summary:
      "E2B provides cloud sandboxes for AI agents, with process execution, filesystem access, and computer-use examples for isolated agent work.",
    bestFor: "Seeing the execution environment that sits between an LLM agent and real code.",
    why: "E2B makes the invisible infrastructure layer visible: agents need a place to run, inspect outputs, and safely try actions.",
    chips: ["official", "code execution", "agent sandbox"],
    accent: "#5dd9ff",
    image: "./assets/agent-loop.svg",
    url: "https://e2b.dev/docs",
  },
  {
    id: "browserbase-cloud-browsers",
    type: "project",
    topic: "RL environments",
    poster: "Browser",
    title: "Browserbase Cloud Browsers",
    summary:
      "Browserbase turns the web browser into managed infrastructure for agents, automation, and web interaction.",
    bestFor: "Understanding browser-based environments for agents that need to search, click, verify, and operate on live web apps.",
    why: "Many real agent tasks happen through browser state, not clean APIs. Browserbase shows why web environments are a core part of modern agent training and evaluation.",
    chips: ["official", "cloud browser", "web agents"],
    accent: "#87ffc1",
    image: "./assets/media-surface.svg",
    url: "https://www.browserbase.com/",
  },
  {
    id: "coreweave-rl-agents",
    type: "video",
    topic: "RL environments",
    poster: "RL loops",
    title: "CoreWeave: How Reinforcement Learning Improves AI Agent Reliability",
    summary:
      "A current official demo connecting RL rollouts, agent harnesses, model evaluation, and sandboxed infrastructure for more reliable production agents.",
    bestFor: "Students who want to see why RL environments are back in the conversation for agents.",
    why: "It makes the shift from prompt-only agents to environment-trained, measured agents easier to grasp.",
    chips: ["official video", "RL rollouts", "agent harness"],
    accent: "#ffb67b",
    image: "./assets/harness-studio.svg",
    url: "https://www.coreweave.com/resources/videos/how-reinforcement-learning-improves-ai-agent-reliability-in-production",
  },
  {
    id: "daytona-sandboxes",
    type: "project",
    topic: "RL environments",
    poster: "Daytona",
    title: "Daytona Secure Infrastructure for AI-Generated Code",
    summary:
      "Daytona focuses on secure, fast infrastructure for running AI-generated code in isolated environments.",
    bestFor: "Seeing how agent code execution becomes a cloud runtime problem.",
    why: "It is a useful comparison point for E2B: both treat safe execution as the missing substrate for code-writing agents.",
    chips: ["official", "AI code", "secure runtime"],
    accent: "#ff8f7a",
    image: "./assets/llm-attention.svg",
    url: "https://www.daytona.io/",
  },
  {
    id: "modal-sandboxes",
    type: "project",
    topic: "RL environments",
    poster: "Modal",
    title: "Modal Sandboxes",
    summary:
      "Modal's sandbox docs describe secure containers for executing untrusted user or agent code.",
    bestFor: "Understanding how serverless compute and agent sandboxes converge.",
    why: "It gives students another strong example of the execution substrate that makes tool-using agents safer and more scalable.",
    chips: ["official", "serverless", "untrusted code"],
    accent: "#5dd9ff",
    image: "./assets/world-shell.svg",
    url: "https://modal.com/docs/guide/sandboxes",
  },
  {
    id: "blaxel-sandboxes",
    type: "project",
    topic: "RL environments",
    poster: "Blaxel",
    title: "Blaxel Sandboxes",
    summary:
      "Blaxel positions sandboxes as infrastructure for AI agents that need isolated runtimes, tool calls, and persistent execution contexts.",
    bestFor: "Comparing newer agent-infrastructure platforms with the better-known E2B and Browserbase examples.",
    why: "It shows that sandboxes are becoming a category, not a one-company feature.",
    chips: ["official", "agent infrastructure", "runtime"],
    accent: "#87ffc1",
    image: "./assets/dl-stack.svg",
    url: "https://docs.blaxel.ai/Sandboxes/Overview",
  },
  {
    id: "gymnasium-rl-envs",
    type: "project",
    topic: "RL environments",
    poster: "Gym",
    title: "Gymnasium",
    summary:
      "The Farama Foundation's Gymnasium library is the standard environment API lineage for reinforcement learning tasks and benchmarks.",
    bestFor: "Connecting today's agent sandboxes back to the classic RL idea of an environment loop.",
    why: "It gives students the vocabulary for observations, actions, rewards, resets, and reproducibility before they look at LLM agent environments.",
    chips: ["official", "RL", "environment API"],
    accent: "#ffb67b",
    image: "./assets/ml-matrix.svg",
    url: "https://gymnasium.farama.org/",
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
    title: "Seedance 2.0 technical report",
    summary:
      "The official Seedance 2.0 report from the ByteDance Seed team (arXiv, April 2026), covering the unified architecture for native multi-modal audio-video generation.",
    bestFor: "Understanding the technical jump from cool demos to integrated multimodal generation.",
    why: "It adds substance to the product story and makes the recent frontier less hand-wavy.",
    chips: ["paper", "2026", "audio-video"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/2604.14148",
  },
  {
    id: "project-genie",
    type: "project",
    topic: "World models",
    poster: "Genie",
    title: "Project Genie: experimenting with interactive worlds",
    summary:
      "Google DeepMind's Project Genie lets users prompt, explore, and remix interactive environments built on Genie 3.",
    bestFor: "Examining the difference between generated video and an environment that responds to interaction.",
    why: "Its documented limits—restricted action spaces, imperfect real-world accuracy, and multi-agent interaction challenges—make the research questions concrete.",
    chips: ["world model", "interactive environments", "limitations"],
    accent: "#87ffc1",
    url: "https://deepmind.google/blog/project-genie-experimenting-with-infinite-interactive-worlds/",
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
    topic: "LLM post-training",
    poster: "Tinker",
    title: "Announcing Tinker",
    summary:
      "Thinking Machines' first product is a managed API for fine-tuning open-weight models: you write training loops in Python with low-level primitives like forward_backward and optim_step, and TML runs them on its clusters using LoRA.",
    bestFor: "Understanding how frontier post-training is being productized as a managed service.",
    why: "It connects the post-training chapter to a real, usable product, with the open-source Tinker Cookbook as a teaching artifact.",
    chips: ["fine-tuning API", "LoRA", "post-training"],
    accent: "#ff8f7a",
    url: "https://thinkingmachines.ai/news/announcing-tinker/",
  },
  {
    id: "beam-release",
    type: "blog",
    topic: "Open-weight models",
    poster: "Beam",
    title: "Beam is available: Apache 2.0 open weights",
    summary:
      "Reflection's October 2026 release introduces a 501B-parameter MoE with 23B active parameters for coding, reasoning, and agentic work.",
    bestFor: "Comparing deployment control, hardware demands, licensing, and model capability.",
    why: "It turns the open-model discussion into concrete engineering questions without conflating open weights with open training data.",
    chips: ["Apache 2.0", "2026", "open weights"],
    accent: "#ff8f7a",
    url: "https://reflection.ai/blog/beam-is-available",
  },
  {
    id: "beam-model-card",
    type: "project",
    topic: "Open-weight models",
    poster: "Beam card",
    title: "Beam model card",
    summary:
      "The official technical companion for inspecting Beam's architecture, intended uses, evaluations, and limitations.",
    bestFor: "Practising model-card reading before drawing conclusions from a release headline.",
    why: "Students can separate vendor-reported results from independent evidence and identify what still needs testing.",
    chips: ["model card", "evaluation", "limitations"],
    accent: "#5dd9ff",
    url: "https://reflection.ai/beam-model-card",
  },
  {
    id: "gemini-4-argon",
    type: "project",
    topic: "Frontier models",
    poster: "Argon",
    title: "Gemini 4 Argon model card",
    summary:
      "Google DeepMind's model card for its October 2026 multimodal, multi-step system, including evaluations and safety information.",
    bestFor: "Comparing capability, cost, safeguards, and limitations across frontier model documentation.",
    why: "It supports a more rigorous discussion than declaring a universal best model from selected benchmarks.",
    chips: ["model card", "multimodal", "safety"],
    accent: "#9ca7ff",
    url: "https://deepmind.google/models/model-cards/gemini-4-argon/",
  },
  {
    id: "claude-haiku-5-5",
    type: "blog",
    topic: "Efficient agents",
    poster: "Haiku",
    title: "Claude Haiku 5.5: efficient agents and delegation",
    summary:
      "Anthropic's October 2026 release provides a case study in smaller-model cost, latency, and sub-agent division of labor.",
    bestFor: "Thinking about model routing and when a smaller model is sufficient for part of an agent workflow.",
    why: "It shifts the systems question from maximum capability per call to useful work per dollar and per second.",
    chips: ["efficiency", "sub-agents", "cost and latency"],
    accent: "#ffb67b",
    url: "https://www.anthropic.com/claude-haiku-5-5",
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
  {
    id: "deepseek-r1",
    type: "paper",
    topic: "Reasoning",
    poster: "R1",
    title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
    summary:
      "A detailed technical report on RL-trained reasoning, accompanied by open model weights and reported math and code evaluations.",
    bestFor: "Understanding the test-time-compute shift through an open-weight model with a detailed technical report.",
    why: "It lets students inspect the training account and reported results while keeping openness, evaluation, and deployment claims distinct.",
    chips: ["paper", "2025", "RL reasoning"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/2501.12948",
  },
  {
    id: "navier-stokes",
    type: "paper",
    topic: "AI for science",
    poster: "Proof",
    title: "Navier–Stokes: analytical proof and Lean formalization",
    summary:
      "OpenAI's research account reports an analytical proof and Lean formalization for statements C and D of the official problem formulation, without claiming the Millennium Prize.",
    bestFor: "Studying how multi-agent research, expert review, and machine-checked evidence can complement one another.",
    why: "It moves the AI-for-science discussion from fluent hypothesis generation to the standard of verifiable mathematical evidence.",
    chips: ["formal verification", "Lean", "research agents"],
    accent: "#87ffc1",
    url: "https://openai.com/index/navier-stokes-solution/",
  },
  {
    id: "openai-evals-hub",
    type: "project",
    topic: "Safety",
    poster: "Evals",
    title: "OpenAI deployment safety evaluations",
    summary:
      "A hub for deployment-safety reports covering capability, safeguards, and evaluation methodology across system configurations.",
    bestFor: "Learning to read an evaluation as a result of the model, harness, tools, permissions, and protections together.",
    why: "It gives students concrete material for asking what an evaluation setup includes—and what a headline number leaves out.",
    chips: ["safety", "system evaluation", "methodology"],
    accent: "#ffb67b",
    url: "https://deploymentsafety.openai.com/",
  },
  {
    id: "karpathy-deep-dive",
    type: "video",
    topic: "LLMs",
    poster: "Deep dive",
    title: "Karpathy: Deep Dive into LLMs like ChatGPT",
    summary:
      "A long-form tour of the full LLM pipeline: pre-training, post-training, reasoning, tools, and where the stack is heading.",
    bestFor: "Students who want one video that connects the whole course map end to end.",
    why: "It reinforces the training-to-inference story this atlas teaches, straight from one of the field's best teachers.",
    chips: ["video", "LLM pipeline", "overview"],
    accent: "#87ffc1",
    url: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
  },
  {
    id: "helm-paper",
    type: "paper",
    topic: "Evaluation",
    poster: "HELM",
    title: "Holistic Evaluation of Language Models",
    summary:
      "A multi-metric evaluation framework covering scenarios, accuracy, calibration, robustness, fairness, bias, toxicity, and efficiency under standardized conditions.",
    bestFor: "Designing evaluations that expose trade-offs instead of reducing model quality to one average score.",
    why: "It gives students a rigorous vocabulary for scenarios, metrics, prompts, completions, and transparent comparison.",
    chips: ["paper", "2022", "multi-metric evaluation"],
    accent: "#5dd9ff",
    url: "https://arxiv.org/abs/2211.09110",
  },
  {
    id: "hal-paper",
    type: "paper",
    topic: "Agent evaluation",
    poster: "HAL",
    title: "Holistic Agent Leaderboard: The Missing Infrastructure for AI Agent Evaluation",
    summary:
      "A 2026 agent-evaluation study built around a standardized harness, analysis across models, scaffolds, and benchmarks, and openly shared agent logs.",
    bestFor: "Comparing agent results without hiding the harness, benchmark, rollout configuration, or failure behavior.",
    why: "It moves agent assessment from a polished success trajectory toward reproducible runs and inspectable evidence.",
    chips: ["paper", "2026", "agent evaluation"],
    accent: "#87ffc1",
    url: "https://proceedings.iclr.cc/paper_files/paper/2026/hash/a0928f924a344aaebbb7f6cd8d56e34c-Abstract-Conference.html",
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

const courseWeeks = [
  {
    id: "week-01",
    number: 1,
    phase: "Foundations · weeks 01–03",
    shortTitle: "Frame the problem",
    title: "From AI mythology to a well-posed problem.",
    summary:
      "Start with the field's ambitions, then make one problem precise: who uses the system, what decision changes, which data exists, and what evidence would count as success.",
    effort: "6 hours",
    outcomes: [
      "Distinguish a task, a model, a system, and a deployment claim.",
      "Write a measurable objective with a meaningful non-AI baseline.",
    ],
    readings: ["dartmouth-official", "bitter-lesson"],
    activity:
      "Seminar: rewrite three vague AI claims as falsifiable questions. Lab: inspect a small dataset and document its source, intended use, missing context, and a simple baseline.",
    deliverable: "A one-page problem brief with task definition, stakeholder, baseline, metric, and foreseeable misuse.",
    chips: ["problem framing", "claims", "baselines"],
    assignmentId: "a1",
  },
  {
    id: "week-02",
    number: 2,
    phase: "Foundations · weeks 01–03",
    shortTitle: "Learn representations",
    title: "Gradient descent turns weights into learned representations.",
    summary:
      "Connect loss, gradients, and backpropagation to the behavior of a small neural network. The aim is not to memorize notation, but to explain how training changes what the model represents.",
    effort: "7 hours",
    outcomes: [
      "Trace one forward and backward pass through a small network.",
      "Diagnose underfitting, overfitting, and an unstable training run.",
    ],
    readings: ["backprop-paper", "backprop-video"],
    activity:
      "Seminar: derive one gradient by hand and compare it with a numerical check. Lab: train a small network, then vary depth, learning rate, and regularization one factor at a time.",
    deliverable: "A training notebook with curves, one controlled comparison, and a short explanation of a failed configuration.",
    chips: ["backpropagation", "optimization", "generalization"],
    assignmentId: "a1",
  },
  {
    id: "week-03",
    number: 3,
    phase: "Foundations · weeks 01–03",
    shortTitle: "Baseline before hype",
    title: "Classical ML is still the right control for many modern demos.",
    summary:
      "Use a reproducible supervised-learning pipeline to separate problem difficulty from model spectacle. Data splitting, leakage, metrics, and error analysis come before architecture preference.",
    effort: "7–8 hours",
    outcomes: [
      "Build a leakage-aware train, validation, and test workflow.",
      "Justify metrics and errors in terms of the actual decision context.",
    ],
    readings: ["scikit-learn", "few-useful-things"],
    activity:
      "Seminar: diagnose four flawed evaluation setups. Lab: compare a simple baseline with two classical models, keep the test set locked, and inspect systematic errors.",
    deliverable: "Assignment 01: code, configuration, results table, error analysis, and a two-page reflection.",
    chips: ["classical ML", "data leakage", "evaluation"],
    assignmentId: "a1",
  },
  {
    id: "week-04",
    number: 4,
    phase: "Language & reasoning · weeks 04–07",
    shortTitle: "Scale deep learning",
    title: "AlexNet made data, compute, and learned features a joint story.",
    summary:
      "Study the deep-learning turn as an interaction among architecture, datasets, GPUs, and evaluation culture. Compare the representation-learning story with the baseline built last week.",
    effort: "7 hours",
    outcomes: [
      "Explain why learned features changed the classical feature-engineering workflow.",
      "Separate architectural gains from gains due to data and compute.",
    ],
    readings: ["alexnet-paper", "nn-video"],
    activity:
      "Seminar: reconstruct the AlexNet evidence chain. Lab: train or inspect a small image classifier and compare accuracy with parameter count, training time, and failure examples.",
    deliverable: "A comparison memo connecting one historical claim to evidence from your own small-scale experiment.",
    chips: ["deep learning", "CNNs", "compute"],
  },
  {
    id: "week-05",
    number: 5,
    phase: "Language & reasoning · weeks 04–07",
    shortTitle: "Attention & transformers",
    title: "Attention reorganized sequence modeling around parallel computation.",
    summary:
      "Follow queries, keys, values, attention weights, residual paths, and positional information. Then connect the architecture to the language systems that followed.",
    effort: "7–8 hours",
    outcomes: [
      "Track tensor shapes through a single self-attention block.",
      "Explain what attention makes easier—and what it does not guarantee.",
    ],
    readings: ["transformer-paper", "attention-video"],
    activity:
      "Seminar: annotate a transformer block without using the word 'magic.' Lab: implement or inspect scaled dot-product attention and visualize how masks change the output.",
    deliverable: "A shape-annotated diagram, a compact attention notebook, and answers to three misconception checks.",
    chips: ["attention", "transformers", "sequence models"],
  },
  {
    id: "week-06",
    number: 6,
    phase: "Language & reasoning · weeks 04–07",
    shortTitle: "Pre-train & prompt",
    title: "Pre-training creates a general interface before instruction tuning begins.",
    summary:
      "Compare bidirectional and autoregressive language objectives, then examine in-context learning. Treat prompting as an intervention to evaluate, not a substitute for defining the task.",
    effort: "7–8 hours",
    outcomes: [
      "Contrast masked-language and next-token training objectives.",
      "Design a controlled prompt comparison with fixed examples and criteria.",
    ],
    readings: ["bert-paper", "gpt3-paper", "karpathy-llm"],
    activity:
      "Seminar: compare what BERT and GPT-style objectives make visible. Lab: build a small labeled task set and test two prompt strategies on identical inputs.",
    deliverable: "Assignment 02 proposal and capstone proposal: task, dataset, baseline, evaluation criteria, and risk note.",
    chips: ["pre-training", "in-context learning", "prompt evaluation"],
    assignmentId: "a2",
  },
  {
    id: "week-07",
    number: 7,
    phase: "Language & reasoning · weeks 04–07",
    shortTitle: "Post-train & reason",
    title: "Useful behavior comes from post-training, feedback, and verification.",
    summary:
      "Trace instruction tuning, preference feedback, RL, and test-time compute. More deliberation can help on some tasks, but quality still depends on the task and the evaluation setup.",
    effort: "8 hours",
    outcomes: [
      "Distinguish SFT, preference optimization, RL, and inference-time scaling.",
      "Evaluate when additional reasoning effort is worth its cost and latency.",
    ],
    readings: ["instructgpt-paper", "cot-paper", "deepseek-r1"],
    activity:
      "Seminar: map the feedback loops behind an assistant. Lab: compare two language workflows on a frozen test set and inspect where longer reasoning helps, fails, or merely costs more.",
    deliverable: "Assignment 02: workflow, evaluation set, raw outputs, results, failure cases, and limitations.",
    chips: ["post-training", "reasoning", "test-time compute"],
    assignmentId: "a2",
  },
  {
    id: "week-08",
    number: 8,
    phase: "Agents & evidence · weeks 08–10",
    shortTitle: "Tools & agent loops",
    title: "An agent is a model inside a constrained action system.",
    summary:
      "Connect reasoning traces to tool calls, observations, state, and recovery. Design the environment and permission boundary before choosing an orchestration framework.",
    effort: "8 hours",
    outcomes: [
      "Specify a bounded observe–act–recover loop with explicit stop conditions.",
      "Explain how tools and permissions change the capability being evaluated.",
    ],
    readings: ["react-paper", "anthropic-agents"],
    activity:
      "Seminar: compare a workflow with an open-ended agent. Lab: implement one bounded tool-using agent with a typed tool contract, maximum steps, and a recovery path.",
    deliverable: "Assignment 03 architecture note: state diagram, tool schema, permission boundary, and task-suite draft.",
    chips: ["ReAct", "tool use", "permissions"],
    assignmentId: "a3",
  },
  {
    id: "week-09",
    number: 9,
    phase: "Agents & evidence · weeks 08–10",
    shortTitle: "Serve & operate",
    title: "Inference and deployment choices are part of system capability.",
    summary:
      "Study batching, KV-cache reuse, scheduling, quantization, and open-weight deployment. Compare systems on useful work per dollar and per second, not output quality alone.",
    effort: "8–9 hours",
    outcomes: [
      "Explain how serving decisions affect latency, throughput, memory, and cost.",
      "Compare API and open-weight deployment without equating open weights with open data.",
    ],
    readings: ["sglang-paper", "vllm-docs", "beam-model-card"],
    activity:
      "Seminar: read a model card as an operations document. Lab: benchmark two configurations on the same prompts and log quality, latency, resource needs, and failure behavior.",
    deliverable: "Assignment 03 evaluation harness plus a deployment trade-off table with measurements and unresolved questions.",
    chips: ["inference", "open weights", "operations"],
    assignmentId: "a3",
  },
  {
    id: "week-10",
    number: 10,
    phase: "Agents & evidence · weeks 08–10",
    shortTitle: "Evaluate the system",
    title: "A benchmark result belongs to the model, scaffold, tasks, and harness together.",
    summary:
      "Move from single-score comparison to multi-metric and trajectory-level evaluation. Inspect what the agent actually did, including failures that a final success label can hide.",
    effort: "8–9 hours",
    outcomes: [
      "Design a multi-metric evaluation with controlled system configurations.",
      "Use run logs to build a failure taxonomy and challenge a leaderboard conclusion.",
    ],
    readings: ["helm-paper", "hal-paper", "openai-evals-hub"],
    activity:
      "Seminar: audit one benchmark claim for missing conditions. Lab: run paired agent configurations, inspect trajectories, and classify successes, partial credit, unsafe actions, and unrecoverable failures.",
    deliverable: "Assignment 03: bounded agent, task suite, logs, comparison, safety review, and reproducibility instructions.",
    chips: ["HELM", "agent evaluation", "failure logs"],
    assignmentId: "a3",
  },
  {
    id: "week-11",
    number: 11,
    phase: "Frontiers & defense · weeks 11–12",
    shortTitle: "Audit frontier claims",
    title: "Interactive worlds and AI-for-science need different evidence from a good demo.",
    summary:
      "Compare generated environments with planning models, and fluent research output with verifiable scientific evidence. Keep current systems, future hypotheses, and open limitations separate.",
    effort: "8 hours",
    outcomes: [
      "Write a falsifiable evaluation question for a current frontier claim.",
      "Distinguish visual coherence, interactive consistency, and scientific verification.",
    ],
    readings: ["world-models-paper", "project-genie", "navier-stokes"],
    activity:
      "Seminar: build a claim–evidence–uncertainty map. Lab: run a small replication, structured artifact review, or formal verification exercise and document what remains untested.",
    deliverable: "Capstone evidence pack draft: precise claim, source map, original evidence, negative results, and limitations.",
    chips: ["world models", "AI for science", "verification"],
    assignmentId: "a4",
  },
  {
    id: "week-12",
    number: 12,
    phase: "Frontiers & defense · weeks 11–12",
    shortTitle: "Defend the evidence",
    title: "Defend the system you built, not the story around it.",
    summary:
      "Finish by comparing competing research bets: open-ended self-improvement, human collaboration, and embodied action. A strong final project makes its evidence and boundaries inspectable.",
    effort: "8–10 hours",
    outcomes: [
      "Defend design and evaluation choices under technical questioning.",
      "State negative results, deployment limits, and remaining uncertainty precisely.",
    ],
    readings: ["dgm-paper", "interaction-models", "openpi-project"],
    activity:
      "Studio: peer-review reproducibility packs, rehearse an eight-minute demonstration, and respond to a hostile evidence review without overstating what the system can do.",
    deliverable: "Assignment 04: capstone artifact, source and evidence pack, limitations review, demo, and oral defense.",
    chips: ["research defense", "reproducibility", "uncertainty"],
    assignmentId: "a4",
  },
];

const assignmentBriefs = [
  {
    id: "a1",
    number: "01",
    schedule: "Weeks 01–03",
    title: "Baseline before the hype",
    format: "Reproducible notebook + two-page reflection",
    weight: "15%",
    milestone: "Proposal W01 · baseline W02 · due W03",
    brief:
      "Compare two classical learning approaches on a well-defined problem, with a simple baseline and an evaluation design that would survive scrutiny.",
    requirements: [
      "Use a small dataset you may legally share, or provide exact access instructions.",
      "Keep a held-out test set untouched until the final comparison.",
      "Report a simple baseline, at least two metrics, and a systematic error analysis.",
      "Submit environment instructions, seeds or configuration, and a two-page reflection.",
    ],
    rubric: [
      ["Problem & data", 20],
      ["Evaluation design", 30],
      ["Reproducibility", 25],
      ["Analysis & writing", 25],
    ],
    resources: ["scikit-learn", "few-useful-things"],
  },
  {
    id: "a2",
    number: "02",
    schedule: "Weeks 06–07",
    title: "A prompt is not an evaluation",
    format: "Language workflow + labeled task set + raw outputs",
    weight: "20%",
    milestone: "Task set W06 · due W07",
    brief:
      "Turn one narrow language task into a measurable workflow. Compare interventions on a frozen test set and make quality, cost, and failure behavior visible.",
    requirements: [
      "Define at least 30 examples with reference answers or explicit grading criteria.",
      "Compare two prompting or post-training strategies without changing the test set.",
      "Report quality, cost or latency, and at least five inspected failure cases.",
      "Include prompts, configuration, raw outputs, and a short risks-and-limits note.",
    ],
    rubric: [
      ["Task & grading criteria", 25],
      ["Experimental control", 25],
      ["Evidence & failure analysis", 30],
      ["Reproducible artifact", 20],
    ],
    resources: ["instructgpt-paper", "deepseek-r1", "helm-paper"],
  },
  {
    id: "a3",
    number: "03",
    schedule: "Weeks 08–10",
    title: "Agent under test",
    format: "Bounded agent + task suite + run logs",
    weight: "25%",
    milestone: "Tool contract W08 · harness W09 · due W10",
    brief:
      "Build a small agent for a bounded multi-step task with explicit tools and permissions. Evaluate the whole system, not just the model or one successful trajectory.",
    requirements: [
      "Provide a tool schema, permission boundary, stop condition, and recovery path.",
      "Create at least 12 tasks covering success, ambiguity, and expected failure.",
      "Compare two model, scaffold, or retry configurations on the same task suite.",
      "Submit logs, cost/latency summary, failure taxonomy, and a safety review.",
    ],
    rubric: [
      ["System design", 25],
      ["Evaluation harness", 30],
      ["Reliability & safety", 25],
      ["Analysis & reproducibility", 20],
    ],
    resources: ["react-paper", "anthropic-agents", "hal-paper"],
  },
  {
    id: "a4",
    number: "04",
    schedule: "Weeks 06–12",
    title: "Capstone evidence defense",
    format: "Prototype, replication, or claim audit + oral defense",
    weight: "40%",
    milestone: "Proposal W06 · critique W10 · demo & defense W12",
    brief:
      "Extend the agent project or investigate a frontier claim in open deployment, interactive worlds, AI-for-science, or embodied AI. Defend what the evidence does—and does not—show.",
    requirements: [
      "Present a precise claim, a source map, and a falsifiable evaluation question.",
      "Build a prototype, replication, or systematic claim audit with original evidence.",
      "Include negative results, limitations, reproducibility instructions, and a deployment review.",
      "Deliver an eight-minute demonstration and answer questions with the evidence pack.",
    ],
    rubric: [
      ["Research question & sources", 20],
      ["Technical execution", 25],
      ["Evaluation & limitations", 30],
      ["Defense & communication", 25],
    ],
    resources: ["world-models-paper", "navier-stokes", "hal-paper"],
  },
];

const state = {
  weekId: courseWeeks[0].id,
  assignmentId: assignmentBriefs[0].id,
  timelineId: timelineItems[0].id,
  frontierId: frontierItems[0].id,
  stackStageId: lifecycleStages[0].id,
  labFilter: "all",
  labId: labItems[0].id,
  libraryFilter: "all",
  libraryTopic: "all",
  libraryQuery: "",
  libraryLimit: 12,
  libraryId: libraryItems[0].id,
};

let evolutionAtlasController;

const libraryTopicGroups = {
  foundations: ["AI prehistory", "Neural learning", "Statistical ML", "Deep learning", "Search + learning", "Scaling"],
  language: ["Transformers", "Language models", "LLMs", "Alignment", "Reasoning"],
  generative: ["Generative AI", "Multimodal AI", "Seedance"],
  agents: ["Agents", "Coding agents", "OpenClaw", "Harness engineering", "Collaboration", "Efficient agents"],
  evaluation: ["Evaluation", "Agent evaluation", "Safety", "Harness engineering"],
  infrastructure: ["LLM infrastructure", "LLM post-training", "LLM inference"],
  environments: ["RL environments", "Embodiment"],
  frontiers: ["Self-improving AI", "AI scientists", "AI for science", "World models", "Predictive world models", "Frontier models"],
  "open-safety": ["Safety", "Open-weight models"],
};

const weekRail = document.querySelector("#week-rail");
const weekPhase = document.querySelector("#week-phase");
const weekKicker = document.querySelector("#week-kicker");
const weekTitle = document.querySelector("#week-title");
const weekSummary = document.querySelector("#week-summary");
const weekOutcomes = document.querySelector("#week-outcomes");
const weekChips = document.querySelector("#week-chips");
const weekReadings = document.querySelector("#week-readings");
const weekActivity = document.querySelector("#week-activity");
const weekDeliverable = document.querySelector("#week-deliverable");
const weekPosition = document.querySelector("#week-position");
const weekEffort = document.querySelector("#week-effort");
const weekAssignmentLink = document.querySelector("#week-assignment-link");
const weekPrev = document.querySelector("#week-prev");
const weekNext = document.querySelector("#week-next");
const assignmentSchedule = document.querySelector("#assignment-schedule");

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

const stackStageButtons = [...document.querySelectorAll("[data-stack-stage]")];
const stackKicker = document.querySelector("#stack-kicker");
const stackTitle = document.querySelector("#stack-title");
const stackSummary = document.querySelector("#stack-summary");
const stackInfra = document.querySelector("#stack-infra");
const stackRisk = document.querySelector("#stack-risk");
const stackChips = document.querySelector("#stack-chips");
const stackLinks = document.querySelector("#stack-links");
const stackCoreLabel = document.querySelector("#stack-core-label");

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
const libraryVisible = document.querySelector("#library-visible");
const libraryTotal = document.querySelector("#library-total");
const libraryGrid = document.querySelector("#library-grid");
const libraryLayout = document.querySelector("#library-layout");
const libraryDetail = document.querySelector("#library-detail");
const libraryTitle = document.querySelector("#library-title");
const librarySummary = document.querySelector("#library-summary");
const libraryBest = document.querySelector("#library-best");
const libraryWhy = document.querySelector("#library-why");
const libraryChips = document.querySelector("#library-chips");
const libraryLink = document.querySelector("#library-link");
const librarySearch = document.querySelector("#library-search");
const libraryTopic = document.querySelector("#library-topic");
const libraryMore = document.querySelector("#library-more");
const libraryEmpty = document.querySelector("#library-empty");
const libraryReset = document.querySelector("#library-reset");

const watchGrid = document.querySelector("#watch-grid");
const scrollProgress = document.querySelector("#scroll-progress");
const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const routeSections = [...document.querySelectorAll("main > section")];
const routeLabels = new Map(
  navLinks.map((link) => [link.getAttribute("href").slice(1), link.textContent.trim()]),
);
const defaultDocumentTitle = document.title;
const countNodes = [...document.querySelectorAll("[data-count]")];
let currentRoute = "";
let lastAppliedHash = "";
let revealObserver;

function routeForSection(section) {
  return section?.id || section?.dataset.route || "";
}

function resolveRoute(hash = window.location.hash) {
  let id = hash.replace(/^#/, "");
  try {
    id = decodeURIComponent(id);
  } catch {
    // Keep the raw fragment when a malformed URL cannot be decoded.
  }

  if (id === "main") {
    return { route: currentRoute || "top", target: document.querySelector("#main") };
  }

  const target = id ? document.getElementById(id) : document.querySelector("#top");
  const section = target?.matches("main > section") ? target : target?.closest("main > section");

  return {
    route: section ? routeForSection(section) : "top",
    target: target || document.querySelector("#top"),
  };
}

function applyRoute(route, { scroll = true, target = null } = {}) {
  const nextRoute = routeSections.some((section) => routeForSection(section) === route) ? route : "top";
  const routeChanged = currentRoute !== nextRoute;
  currentRoute = nextRoute;
  document.body.dataset.route = nextRoute;

  routeSections.forEach((section) => {
    section.hidden = routeForSection(section) !== nextRoute;
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${nextRoute}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.title = nextRoute === "top"
    ? defaultDocumentTitle
    : `${routeLabels.get(nextRoute) ?? nextRoute} | CSC2220 AI Evolution Atlas`;

  if (target?.dataset.assignmentId) {
    openAssignment(target.dataset.assignmentId);
  }

  if (scroll) {
    const destination = target || routeSections.find((section) => section.id === nextRoute);
    if (nextRoute === "top" && (!target || target.id === "top")) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (destination) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior = routeChanged || reduceMotion || destination.id === "main" ? "instant" : "smooth";
      destination.scrollIntoView({ block: "start", behavior });
    }
  }

  updateScrollUI();
}

function applyRouteFromLocation() {
  const { route, target } = resolveRoute();
  lastAppliedHash = window.location.hash;
  applyRoute(route, { target });
}

function navigateToRoute(route, { scroll = true } = {}) {
  const nextHash = `#${route}`;
  lastAppliedHash = nextHash;
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
  }
  applyRoute(route, { scroll });
}

function initRouting() {
  window.addEventListener("hashchange", () => {
    if (window.location.hash === lastAppliedHash) return;
    applyRouteFromLocation();
  });
  applyRouteFromLocation();
}

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
  anchor.rel = "noopener noreferrer";
  anchor.textContent = link.label;
  return anchor;
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function setImage(img, src, alt) {
  img.onerror = () => {
    img.onerror = null;
    img.src = fallbackImagePath;
  };
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

const fallbackImagePath = "./assets/generated/ai-atlas-motif.jpg";

function imagePath(collection, item) {
  return item.image ?? coverPath(collection, item.id);
}

function makePosterImage(src, alt = "") {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  image.onerror = () => {
    image.onerror = null;
    image.src = fallbackImagePath;
  };
  return image;
}

function setTabAttributes(button, id, active, panelId) {
  button.id = id;
  button.dataset.tabId = id;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", String(active));
  button.setAttribute("aria-controls", panelId);
  button.tabIndex = active ? 0 : -1;
}

function getLibraryItem(id) {
  const item = libraryItems.find((entry) => entry.id === id);
  if (!item) {
    throw new Error(`Unknown library resource: ${id}`);
  }
  return item;
}

function makeReadingLink(id) {
  const item = getLibraryItem(id);
  const anchor = document.createElement("a");
  anchor.className = "week-reading";
  anchor.href = item.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";

  const meta = document.createElement("span");
  meta.className = "week-reading-type";
  meta.textContent = `${item.type} · ${item.topic}`;

  const title = document.createElement("strong");
  title.textContent = item.title;

  const arrow = document.createElement("span");
  arrow.className = "week-reading-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";

  anchor.append(meta, title, arrow);
  return anchor;
}

function selectWeek(id, moveFocus = false) {
  if (!courseWeeks.some((item) => item.id === id)) {
    return;
  }

  state.weekId = id;
  renderWeekRail();
  renderWeekPanel();

  if (moveFocus) {
    const activeTab = document.querySelector(`#week-tab-${id}`);
    activeTab?.focus();
    activeTab?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}

function renderWeekRail() {
  clearNode(weekRail);

  courseWeeks.forEach((item) => {
    const active = item.id === state.weekId;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "week-tab";
    setTabAttributes(button, `week-tab-${item.id}`, active, "week-panel");
    button.classList.toggle("is-active", active);

    const number = document.createElement("span");
    number.textContent = `W${String(item.number).padStart(2, "0")}`;
    const title = document.createElement("strong");
    title.textContent = item.shortTitle;
    button.append(number, title);

    button.addEventListener("click", () => selectWeek(item.id));
    weekRail.appendChild(button);
  });
}

function renderWeekPanel() {
  const item = courseWeeks.find((entry) => entry.id === state.weekId) ?? courseWeeks[0];
  const itemIndex = courseWeeks.indexOf(item);
  const number = String(item.number).padStart(2, "0");

  document.querySelector("#week-panel").setAttribute("aria-labelledby", `week-tab-${item.id}`);
  weekPhase.textContent = item.phase;
  weekKicker.textContent = `Week ${number} / Studio module`;
  weekTitle.textContent = item.title;
  weekSummary.textContent = item.summary;
  weekActivity.textContent = item.activity;
  weekDeliverable.textContent = item.deliverable;
  weekPosition.textContent = `Week ${item.number} of ${courseWeeks.length}`;
  weekEffort.textContent = `Suggested effort: ${item.effort}`;
  weekPrev.disabled = itemIndex === 0;
  weekNext.disabled = itemIndex === courseWeeks.length - 1;

  clearNode(weekOutcomes);
  item.outcomes.forEach((outcome) => {
    const li = document.createElement("li");
    li.textContent = outcome;
    weekOutcomes.appendChild(li);
  });

  clearNode(weekChips);
  item.chips.forEach((chip) => weekChips.appendChild(makeChip(chip)));

  clearNode(weekReadings);
  item.readings.forEach((id) => weekReadings.appendChild(makeReadingLink(id)));

  weekAssignmentLink.hidden = !item.assignmentId;
  if (item.assignmentId) {
    const assignment = assignmentBriefs.find((entry) => entry.id === item.assignmentId);
    weekAssignmentLink.textContent = `Open Assignment ${assignment.number} brief`;
    weekAssignmentLink.href = `#assignment-${assignment.id}`;
    weekAssignmentLink.dataset.assignmentId = assignment.id;
  } else {
    delete weekAssignmentLink.dataset.assignmentId;
  }
}

function setAssignmentRowState(row, open) {
  const button = row.querySelector(".assignment-toggle");
  const detail = row.querySelector(".assignment-detail");
  row.classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", String(open));
  detail.setAttribute("aria-hidden", String(!open));
  detail.toggleAttribute("inert", !open);
}

function openAssignment(id, scroll = false) {
  const target = document.querySelector(`#assignment-${id}`);
  if (!target) {
    return;
  }

  state.assignmentId = id;
  assignmentSchedule.querySelectorAll(".assignment-row").forEach((row) => {
    setAssignmentRowState(row, row.dataset.assignmentId === id);
  });

  if (scroll) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    target.querySelector(".assignment-toggle").focus({ preventScroll: true });
  }
}

function renderAssignmentSchedule() {
  clearNode(assignmentSchedule);

  assignmentBriefs.forEach((item) => {
    const open = state.assignmentId === item.id;
    const row = document.createElement("article");
    row.className = "assignment-row";
    row.id = `assignment-${item.id}`;
    row.dataset.assignmentId = item.id;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "assignment-toggle";
    button.id = `assignment-toggle-${item.id}`;
    button.setAttribute("aria-controls", `assignment-detail-${item.id}`);
    button.innerHTML = `
      <span class="assignment-week">${item.schedule}</span>
      <span class="assignment-heading">
        <strong>Assignment ${item.number} · ${item.title}</strong>
        <small>${item.format}</small>
      </span>
      <span class="assignment-weight"><strong>${item.weight}</strong><small>suggested</small></span>
      <span class="assignment-icon" aria-hidden="true">+</span>
    `;

    const detail = document.createElement("div");
    detail.className = "assignment-detail";
    detail.id = `assignment-detail-${item.id}`;
    detail.setAttribute("role", "region");
    detail.setAttribute("aria-labelledby", button.id);
    detail.innerHTML = `
      <div class="assignment-detail-inner">
        <div class="assignment-brief-block">
          <p class="detail-kicker">Assignment ${item.number} / ${item.weight} suggested weight</p>
          <p class="assignment-brief">${item.brief}</p>
          <p class="assignment-milestone">${item.milestone}</p>
        </div>
        <div class="assignment-requirements">
          <p class="detail-label">Submission checklist</p>
          <ul>${item.requirements.map((requirement) => `<li>${requirement}</li>`).join("")}</ul>
        </div>
        <div class="assignment-rubric">
          <p class="detail-label">100-point rubric</p>
          <ul>${item.rubric.map(([label, points]) => `<li><span>${label}</span><strong>${points} pts</strong></li>`).join("")}</ul>
        </div>
        <div class="assignment-resources">
          <p class="detail-label">Source shelf</p>
          <div class="link-list"></div>
        </div>
      </div>
    `;

    const resourceLinks = detail.querySelector(".assignment-resources .link-list");
    item.resources.forEach((id) => {
      const resource = getLibraryItem(id);
      resourceLinks.appendChild(makeLink({ label: resource.title, url: resource.url }));
    });

    button.addEventListener("click", () => {
      const nextId = state.assignmentId === item.id ? "" : item.id;
      state.assignmentId = nextId;
      assignmentSchedule.querySelectorAll(".assignment-row").forEach((entry) => {
        setAssignmentRowState(entry, entry.dataset.assignmentId === nextId);
      });
    });

    row.append(button, detail);
    setAssignmentRowState(row, open);
    assignmentSchedule.appendChild(row);
  });
}

function bindCoursePath() {
  weekPrev.addEventListener("click", () => {
    const index = courseWeeks.findIndex((item) => item.id === state.weekId);
    if (index > 0) selectWeek(courseWeeks[index - 1].id, true);
  });

  weekNext.addEventListener("click", () => {
    const index = courseWeeks.findIndex((item) => item.id === state.weekId);
    if (index < courseWeeks.length - 1) selectWeek(courseWeeks[index + 1].id, true);
  });

  weekAssignmentLink.addEventListener("click", (event) => {
    event.preventDefault();
    openAssignment(weekAssignmentLink.dataset.assignmentId, true);
  });
}

function renderTimelineNav() {
  clearNode(timelineNav);

  timelineItems.forEach((item, index) => {
    const active = item.id === state.timelineId;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "timeline-button";
    setTabAttributes(button, `timeline-tab-${item.id}`, active, "timeline-detail");
    button.classList.toggle("is-active", active);
    button.innerHTML = `<strong>${item.era} - ${item.buttonTitle}</strong><span>${item.buttonSubtitle}</span>`;
    button.addEventListener("click", () => setTimelineSelection(item.id, { syncAtlas: true }));
    addMotionSurface(button, index);
    timelineNav.appendChild(button);
  });
}

function renderTimelineDetail() {
  const item = timelineItems.find((entry) => entry.id === state.timelineId);

  document.querySelector("#timeline-detail").setAttribute("aria-labelledby", `timeline-tab-${item.id}`);
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

function setTimelineSelection(id, { syncAtlas = false } = {}) {
  if (!timelineItems.some((item) => item.id === id)) return;
  state.timelineId = id;
  renderTimelineNav();
  renderTimelineDetail();
  if (syncAtlas) evolutionAtlasController?.select(id, { hold: false });
}

function openTimelineFromAtlas(id) {
  setTimelineSelection(id);
  navigateToRoute("history", { scroll: false });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelector("#history").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  const tab = document.querySelector(`#timeline-tab-${id}`);
  tab?.focus({ preventScroll: true });
  tab?.scrollIntoView({ block: "nearest", inline: "center" });
}

function initEvolutionAtlas() {
  const container = document.querySelector("#atlas-canvas");
  const experience = document.querySelector("#atlas-experience");
  if (!container || !experience) return;

  const start = async () => {
    experience.dataset.atlasState = "loading";
    try {
      const { mountEvolutionAtlas } = await import("../evolution-3d.js?v=20261026-app");
      evolutionAtlasController = mountEvolutionAtlas({
        container,
        items: timelineItems,
        selectedId: state.timelineId,
        onSelect: (id) => setTimelineSelection(id),
        onOpen: openTimelineFromAtlas,
        onFallback: () => {
          evolutionAtlasController = undefined;
        },
      });
    } catch (error) {
      experience.classList.remove("is-ready");
      experience.dataset.atlasState = "fallback";
      console.warn("Interactive 3D atlas unavailable; static artwork retained.", error);
    }
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(start, { timeout: 800 });
  } else {
    window.setTimeout(start, 80);
  }
}

function renderFrontierTabs() {
  clearNode(frontierTabs);

  frontierItems.forEach((item, index) => {
    const active = item.id === state.frontierId;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "frontier-tab";
    setTabAttributes(button, `frontier-tab-${item.id}`, active, "frontier-panel");
    button.classList.toggle("is-active", active);
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

  document.querySelector("#frontier-panel").setAttribute("aria-labelledby", `frontier-tab-${item.id}`);
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

function renderStackStageState() {
  const stackPanel = document.querySelector(".stack-panel");
  stackPanel.id = "stack-panel";
  stackPanel.setAttribute("role", "tabpanel");

  stackStageButtons.forEach((button) => {
    const active = button.dataset.stackStage === state.stackStageId;
    button.classList.toggle("is-active", active);
    setTabAttributes(button, `stack-tab-${button.dataset.stackStage}`, active, "stack-panel");
    if (active) {
      stackPanel.setAttribute("aria-labelledby", button.id);
    }
  });
}

function renderStackDetail() {
  const item = lifecycleStages.find((entry) => entry.id === state.stackStageId);

  stackKicker.textContent = item.kicker;
  stackTitle.textContent = item.title;
  stackSummary.textContent = item.summary;
  stackInfra.textContent = item.infra;
  stackRisk.textContent = item.risk;
  stackCoreLabel.textContent = item.coreLabel;

  clearNode(stackChips);
  item.chips.forEach((chip) => stackChips.appendChild(makeChip(chip)));

  clearNode(stackLinks);
  item.links.forEach((link) => stackLinks.appendChild(makeLink(link)));
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

  setImage(labsImage, imagePath("labs", item), item.title);
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
    poster.appendChild(makePosterImage(imagePath("labs", item)));

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
  const terms = state.libraryQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const allowedTopics = libraryTopicGroups[state.libraryTopic];

  return libraryItems.filter((item) => {
    const matchesType = state.libraryFilter === "all" || item.type === state.libraryFilter;
    const matchesTopic = state.libraryTopic === "all" || allowedTopics?.includes(item.topic);
    const searchText = [item.title, item.summary, item.topic, ...item.chips].join(" ").toLowerCase();
    const matchesQuery = terms.every((term) => searchText.includes(term));
    return matchesType && matchesTopic && matchesQuery;
  });
}

function renderLibraryDetail() {
  const item = libraryItems.find((entry) => entry.id === state.libraryId);
  if (!item) {
    return;
  }

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
  const visibleItems = filteredItems.slice(0, state.libraryLimit);
  const hasResults = filteredItems.length > 0;

  if (!filteredItems.some((item) => item.id === state.libraryId)) {
    state.libraryId = filteredItems[0]?.id ?? "";
  }

  libraryCount.textContent = String(filteredItems.length);
  libraryVisible.textContent = String(visibleItems.length);
  libraryTotal.textContent = `${libraryItems.length} curated resources`;
  libraryLayout.hidden = !hasResults;
  libraryEmpty.hidden = hasResults;
  libraryMore.hidden = !hasResults || visibleItems.length >= filteredItems.length;
  libraryMore.textContent = `Show ${Math.min(12, filteredItems.length - visibleItems.length)} more`;
  clearNode(libraryGrid);

  visibleItems.forEach((item, index) => {
    const selected = item.id === state.libraryId;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "library-card";
    button.dataset.libraryId = item.id;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
    button.setAttribute("aria-controls", "library-detail");
    button.setAttribute("aria-label", `Inspect resource: ${item.title}`);

    const poster = document.createElement("div");
    poster.className = "library-poster";
    poster.style.setProperty("--accent", item.accent);
    poster.appendChild(makePosterImage(imagePath("library", item)));

    const title = document.createElement("h3");
    title.textContent = item.title;

    const summary = document.createElement("p");
    summary.textContent = item.summary;

    const meta = document.createElement("div");
    meta.className = "resource-meta";
    const topic = document.createElement("span");
    topic.textContent = item.topic;
    const type = document.createElement("span");
    type.textContent = item.type.toUpperCase();
    meta.append(topic, type);

    button.append(poster, title, summary, meta);
    button.addEventListener("click", () => {
      state.libraryId = item.id;
      libraryGrid.querySelectorAll(".library-card").forEach((card) => {
        const active = card.dataset.libraryId === item.id;
        card.classList.toggle("is-selected", active);
        card.setAttribute("aria-pressed", String(active));
      });
      renderLibraryDetail();

      if (window.matchMedia("(max-width: 1024px)").matches) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const detailTop = libraryDetail.getBoundingClientRect().top;
        const longJump = Math.abs(detailTop) > window.innerHeight * 0.75;
        const behavior = reduceMotion || longJump ? "instant" : "smooth";
        libraryDetail.scrollIntoView({ behavior, block: "start" });
      }
    });

    addMotionSurface(button, index);
    libraryGrid.appendChild(button);
  });

  if (hasResults) {
    renderLibraryDetail();
  }
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
    mediaLink.rel = "noopener noreferrer";

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
    cta.rel = "noopener noreferrer";
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
      ".section-heading, .guide-panel, .course-ledger, .week-explorer, .source-lock, .history-shell, .frontier-shell, .llm-stack-shell, .labs-detail, .library-detail, .future-card",
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
  countNodes.forEach((node) => {
    node.textContent = String(Number(node.dataset.count));
  });
}

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0;

  scrollProgress.style.transform = `scaleX(${progress})`;
  header.classList.toggle("is-scrolled", scrollTop > 28);
}

function bindFilters() {
  const applyFilters = () => {
    state.libraryLimit = 12;
    renderLibraryGrid();
  };

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      state.libraryFilter = pill.dataset.filter;
      renderFilterState();
      applyFilters();
    });
  });

  librarySearch.addEventListener("input", (event) => {
    state.libraryQuery = event.target.value;
    applyFilters();
  });

  libraryTopic.addEventListener("change", (event) => {
    state.libraryTopic = event.target.value;
    applyFilters();
  });

  libraryMore.addEventListener("click", () => {
    state.libraryLimit += 12;
    renderLibraryGrid();
  });

  libraryReset.addEventListener("click", () => {
    state.libraryFilter = "all";
    state.libraryTopic = "all";
    state.libraryQuery = "";
    state.libraryLimit = 12;
    librarySearch.value = "";
    libraryTopic.value = "all";
    renderFilterState();
    renderLibraryGrid();
    librarySearch.focus();
  });
}

function bindTabKeyboard() {
  [weekRail, timelineNav, frontierTabs, document.querySelector(".stack-flow")].forEach((container) => {
    container.addEventListener("keydown", (event) => {
      const navigationKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
      if (!navigationKeys.includes(event.key)) {
        return;
      }

      const tabs = [...container.querySelectorAll('[role="tab"]')];
      const currentIndex = Math.max(0, tabs.indexOf(document.activeElement));
      let nextIndex = currentIndex;

      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (["ArrowRight", "ArrowDown"].includes(event.key)) nextIndex = (currentIndex + 1) % tabs.length;
      if (["ArrowLeft", "ArrowUp"].includes(event.key)) nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;

      event.preventDefault();
      tabs[nextIndex].click();
      const refreshedTabs = [...container.querySelectorAll('[role="tab"]')];
      refreshedTabs[nextIndex]?.focus();
      refreshedTabs[nextIndex]?.scrollIntoView({ block: "nearest", inline: "nearest" });
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

function bindStackStages() {
  stackStageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.stackStageId = button.dataset.stackStage;
      renderStackStageState();
      renderStackDetail();
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
  renderWeekRail();
  renderWeekPanel();
  renderAssignmentSchedule();
  renderTimelineNav();
  renderTimelineDetail();
  renderFrontierTabs();
  renderFrontierPanel();
  renderStackStageState();
  renderStackDetail();
  renderLabFilterState();
  renderLabGrid();
  renderFilterState();
  renderLibraryGrid();
  renderWatchGrid();
  initRevealMotion();
  bindStackStages();
  bindLabFilters();
  bindFilters();
  bindCoursePath();
  bindTabKeyboard();

  const metricCounts = {
    weeks: courseWeeks.length,
    assignments: assignmentBriefs.length,
    timeline: timelineItems.length,
    library: libraryItems.length,
    labs: labItems.length,
    watch: watchItems.length,
  };

  document.querySelectorAll("[data-metric]").forEach((node) => {
    const value = metricCounts[node.dataset.metric];
    if (value !== undefined) {
      node.dataset.count = String(value);
    }
  });

  document.querySelectorAll("[data-source-count]").forEach((node) => {
    const value = metricCounts[node.dataset.sourceCount];
    if (value !== undefined) {
      node.textContent = String(value);
    }
  });

  animateCounts();
  bindPointerGlow();
  initRouting();
  initEvolutionAtlas();

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
}

init();
