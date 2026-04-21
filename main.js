const currentItems = [
  {
    id: "codex",
    kicker: "OpenAI / coding agents",
    title: "Codex is moving from code generation toward a full software-workflow control surface.",
    summary:
      "Codex is no longer just a model endpoint or a terminal toy. Across the app, CLI, IDE extension, and cloud surfaces, it is becoming a multi-agent workspace with skills, automations, computer use, memory, and richer review workflows.",
    why:
      "Codex is one of the clearest examples of harness engineering becoming productized. The interesting unit is no longer only the model. It is the model plus sandbox, rules, memory, approvals, integrations, and long-running threads.",
    current:
      "Latest official signal: on April 16, 2026, OpenAI expanded Codex with computer use, automations, memory, and more app integrations in the desktop app.",
    bullets: [
      "Multi-agent desktop workflow with parallel threads and worktrees",
      "Skills as reusable instruction-and-tool bundles",
      "Automations, memory, background computer use, and App Server integration",
    ],
    chips: ["skills", "automations", "computer use", "app server"],
    image: "./assets/frontier-board.svg",
    links: [
      { label: "Codex product page", url: "https://openai.com/codex" },
      { label: "Introducing the Codex app", url: "https://openai.com/index/introducing-the-codex-app/" },
      { label: "Codex for (almost) everything", url: "https://openai.com/index/codex-for-almost-everything/" },
      { label: "How OpenAI uses Codex", url: "https://cdn.openai.com/pdf/6a2631dc-783e-479b-b1a4-af0cfbd38630/how-openai-uses-codex.pdf" },
    ],
  },
  {
    id: "cursor",
    kicker: "Cursor / IDE-native agent",
    title: "Cursor is defining the IDE-first branch: agent chat, background agents, bugbot, and reusable rules.",
    summary:
      "Cursor's docs make the current strategy very explicit: agent execution in the editor, background agents for async work, Bugbot for PR review, and rules as persistent behavioral context for projects.",
    why:
      "It shows how much leverage is created when agent capabilities are wired directly into edit-review-iterate loops inside an everyday developer environment.",
    current:
      "Current official docs emphasize Agent mode, Background Agents, Bugbot, and `.cursor/rules` or `AGENTS.md` as durable instruction surfaces.",
    bullets: [
      "Foreground and background agent workflows",
      "PR review automation through Bugbot",
      "Reusable project rules and context files under `.cursor/rules`",
    ],
    chips: ["background agents", "bugbot", "rules", "IDE workflow"],
    image: "./assets/frontier-board.svg",
    links: [
      { label: "Cursor Agent overview", url: "https://docs.cursor.com/chat/overview" },
      { label: "Cursor Background Agents", url: "https://docs.cursor.com/background-agents" },
      { label: "Cursor Bugbot", url: "https://docs.cursor.com/en/bugbot" },
      { label: "Cursor Rules", url: "https://docs.cursor.com/en/context" },
    ],
  },
  {
    id: "claude-code",
    kicker: "Anthropic / terminal-native agent",
    title: "Claude Code is the terminal-first branch with strong hooks, MCP, and GitHub automation.",
    summary:
      "Anthropic positions Claude Code as an agentic coding tool that lives in your terminal, edits files, runs commands, connects to MCP tools, and can extend itself through hooks and GitHub Actions.",
    why:
      "It highlights a different philosophy from IDE-first tools: keep the developer in the shell, then add composability, policy hooks, and workflow automation around that surface.",
    current:
      "Current Anthropic docs focus on terminal-native coding, project-level `CLAUDE.md`, hooks for tool interception, MCP connectivity, and GitHub Actions support.",
    bullets: [
      "Terminal-native workflow instead of editor-first UI",
      "Hooks for pre/post tool controls and policy enforcement",
      "MCP, GitHub Actions, and reusable `CLAUDE.md` guidance",
    ],
    chips: ["hooks", "MCP", "GitHub Actions", "CLAUDE.md"],
    image: "./assets/frontier-board.svg",
    links: [
      { label: "Claude Code overview", url: "https://docs.anthropic.com/en/docs/claude-code/overview" },
      { label: "Claude Code hooks", url: "https://docs.anthropic.com/en/docs/claude-code/hooks" },
      { label: "Claude Code MCP", url: "https://docs.anthropic.com/en/docs/claude-code/mcp" },
      { label: "Claude Code GitHub Actions", url: "https://docs.anthropic.com/en/docs/claude-code/github-actions" },
    ],
  },
  {
    id: "openclaw",
    kicker: "OpenClaw / personal agent stack",
    title: "OpenClaw is pushing a local-first, personal-agent interpretation of the future.",
    summary:
      "OpenClaw is not trying to be only another coding copilot. Its docs and repo point toward a more personal, self-hosted, cross-platform assistant stack with onboarding flows, control UI, channels, and gateway tooling.",
    why:
      "It matters because it pulls the agent story away from SaaS chat and toward a user-owned, configurable personal operating layer.",
    current:
      "Current official docs highlight cross-platform onboarding, a web Control UI, gateway diagnostics, and support for many channels plus local or remote gateway deployment.",
    bullets: [
      "CLI and macOS onboarding paths",
      "Control UI for models, channels, logs, sessions, and jobs",
      "Local or remote gateway deployment with personal control",
    ],
    chips: ["local-first", "control UI", "gateway", "channels"],
    image: "./assets/frontier-board.svg",
    links: [
      { label: "OpenClaw repo", url: "https://github.com/openclaw/openclaw" },
      { label: "OpenClaw onboarding overview", url: "https://docs.openclaw.ai/start/onboarding-overview" },
      { label: "OpenClaw control UI", url: "https://docs.openclaw.ai/web/control-ui" },
      { label: "OpenClaw doctor", url: "https://docs.openclaw.ai/gateway/doctor" },
    ],
  },
  {
    id: "seedance",
    kicker: "Seedance / multimodal media",
    title: "Seedance shows how the frontier is escaping text and becoming audiovisual.",
    summary:
      "Seedance 2.0 frames multimodal audio-video generation as a native creative surface, which matters because it stretches the AI interface beyond prompts and code into cinematic media workflows.",
    why:
      "The live frontier is broader than coding agents. The strongest products now also compete on creative control, multimodal composition, and rich media generation.",
    current:
      "The official Dreamina page and the April 15, 2026 Seedance 2.0 model card describe a multimodal audio-video creator with text, image, audio, and video inputs.",
    bullets: [
      "Native audio-video generation with multiple reference modalities",
      "Productized creative workflow instead of research-only demos",
      "A sign that AI interfaces are becoming more cinematic and spatial",
    ],
    chips: ["video", "audio", "multimodal", "creative AI"],
    image: "./assets/frontier-board.svg",
    links: [
      { label: "Dreamina Seedance 2.0", url: "https://dreamina.capcut.com/tools/seedance-2-0" },
      { label: "Seedance 2.0 model card", url: "https://arxiv.org/abs/2604.14148" },
    ],
  },
  {
    id: "happy-oyster",
    kicker: "Happy Oyster / immersive interface",
    title: "Happy Oyster points toward a more immersive, world-like interface layer.",
    summary:
      "Happy Oyster is interesting not because it fits a neat category, but because it suggests an interface direction closer to a scene or world than to a plain text chat window.",
    why:
      "If the next interface shift is spatial or exploratory, products like this may look more important in hindsight than they do at first glance.",
    current:
      "The official Happy Oyster site presents a more immersive audiovisual surface than a standard assistant UI, which makes it a useful signal in this evolving interface landscape.",
    bullets: [
      "A stronger spatial and experiential metaphor than plain chat",
      "Useful as a signpost for interface evolution, even if categories are still forming",
      "Pairs naturally with the world-model discussion later in the site",
    ],
    chips: ["immersive UX", "world-like", "interface shift"],
    image: "./assets/frontier-board.svg",
    links: [
      { label: "Happy Oyster", url: "https://www.happyoyster.cn/" },
      { label: "World Labs Marble", url: "https://www.worldlabs.ai/blog/marble-world-model" },
    ],
  },
];

const timelineItems = [
  {
    id: "turing",
    year: "1950",
    title: "The Turing question made machine intelligence a serious philosophical and technical target.",
    summary:
      "Alan Turing reframed the question away from metaphysics and toward behavior: what would it mean for a machine to convincingly act intelligently?",
    work: "Computing Machinery and Intelligence",
    impact:
      "It gave the field an early benchmark-shaped mindset: instead of arguing in the abstract, define operational tests and engineer toward them.",
    bullets: [
      "Helped shift the conversation from pure philosophy to operational criteria",
      "Established the interview-style framing that still shadows AI discourse",
    ],
    chips: ["Turing", "philosophy", "benchmark thinking"],
    links: [{ label: "Computing Machinery and Intelligence", url: "https://academic.oup.com/mind/article/LIX/236/433/986238" }],
  },
  {
    id: "dartmouth",
    year: "1956",
    title: "Dartmouth gave artificial intelligence a name and a coordinated research ambition.",
    summary:
      "The Dartmouth summer workshop turned a scattered set of questions about learning, reasoning, language, and automation into a shared field.",
    work: "Dartmouth Summer Research Project on Artificial Intelligence",
    impact:
      "Once the field had a banner, it could accumulate labs, funding, communities, and long-term identity.",
    bullets: [
      "AI becomes a named field instead of a loose cluster of ideas",
      "The research agenda becomes cumulative and institutionally legible",
    ],
    chips: ["field formation", "history", "Dartmouth"],
    links: [
      { label: "AI coined at Dartmouth", url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth" },
      { label: "Original Dartmouth proposal", url: "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf" },
    ],
  },
  {
    id: "perceptron",
    year: "1958",
    title: "Perceptrons introduced the dream that learning machines could form internal decision boundaries from data.",
    summary:
      "Rosenblatt's perceptron put early machine learning on the map, even if the limitations of the era quickly became apparent.",
    work: "The perceptron and early neural learning",
    impact:
      "It seeded the neural lineage that would later return with much more powerful optimization, data, and compute.",
    bullets: [
      "Early neural learning becomes imaginable and publicly visible",
      "The limits of simple perceptrons eventually help trigger an AI winter",
    ],
    chips: ["perceptron", "neural history", "early ML"],
    links: [{ label: "Dartmouth historical context", url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth" }],
  },
  {
    id: "eliza",
    year: "1966",
    title: "ELIZA showed how quickly people attribute intelligence to language behavior.",
    summary:
      "Even simple pattern-matching conversation could feel psychologically powerful, foreshadowing later waves of chatbot fascination.",
    work: "ELIZA",
    impact:
      "It demonstrated that interface and framing can matter almost as much as underlying capability in how intelligence is perceived.",
    bullets: [
      "Conversation becomes an unusually sticky interface for AI",
      "Human projection and anthropomorphism become part of the story early",
    ],
    chips: ["chatbots", "language interface", "human perception"],
    links: [{ label: "ELIZA paper", url: "https://dl.acm.org/doi/10.1145/365153.365168" }],
  },
  {
    id: "backprop",
    year: "1986",
    title: "Backpropagation made multi-layer representation learning trainable.",
    summary:
      "The 1986 Nature paper is one of the key bridges between early neural ideas and modern deep learning.",
    work: "Learning representations by back-propagating errors",
    impact:
      "Without practical training of deeper networks, the later deep-learning wave would have had no optimization backbone.",
    bullets: [
      "Revived neural networks after long skepticism",
      "Made learning internal representations a scalable idea",
    ],
    chips: ["backprop", "optimization", "deep learning"],
    links: [{ label: "Nature backprop paper", url: "https://www.nature.com/articles/323533a0" }],
  },
  {
    id: "deep-blue",
    year: "1997",
    title: "Deep Blue turned symbolic search and compute into a public proof of machine competence.",
    summary:
      "IBM's win over Garry Kasparov became a cultural milestone: machines could beat elite humans in structured intellectual games.",
    work: "Deep Blue",
    impact:
      "Even though it was not general intelligence, it made AI capability legible to the public at scale.",
    bullets: [
      "Search plus compute becomes a public spectacle",
      "Strong task competence enters mainstream culture",
    ],
    chips: ["search", "games", "public milestone"],
    links: [{ label: "IBM Deep Blue history", url: "https://www.ibm.com/history/deep-blue" }],
  },
  {
    id: "lstm",
    year: "1998",
    title: "LSTM improved long-range sequence modeling well before transformers took over.",
    summary:
      "Recurrent models gained a practical way to remember patterns over longer horizons, which mattered for speech, language, and time series.",
    work: "Long Short-Term Memory",
    impact:
      "It was a crucial pre-transformer step in making sequential learning useful for real applications.",
    bullets: [
      "Brought memory more firmly into neural sequence modeling",
      "Set up later progress in speech and language systems",
    ],
    chips: ["LSTM", "sequence modeling", "memory"],
    links: [{ label: "Long Short-Term Memory paper", url: "https://www.bioinf.jku.at/publications/older/2604.pdf" }],
  },
  {
    id: "deep-learning-reboot",
    year: "2006",
    title: "The deep-learning reboot restored confidence that larger learned hierarchies could work.",
    summary:
      "Hinton and collaborators helped re-legitimize deep architectures just before data, GPUs, and benchmarks created the conditions for breakout adoption.",
    work: "A fast learning algorithm for deep belief nets",
    impact:
      "The narrative shifts from shallow statistical models only, back toward stacked representation learning.",
    bullets: [
      "Set up the modern deep-learning narrative before ImageNet",
      "Strengthened the intuition that depth plus data would matter",
    ],
    chips: ["deep belief nets", "representation learning"],
    links: [{ label: "Deep belief nets paper", url: "https://www.cs.toronto.edu/~hinton/science.pdf" }],
  },
  {
    id: "alexnet",
    year: "2012",
    title: "AlexNet made deep learning impossible for the broader field to dismiss.",
    summary:
      "The ImageNet result was the visible inflection point: end-to-end representation learning plus GPUs decisively beat older pipelines.",
    work: "ImageNet Classification with Deep Convolutional Neural Networks",
    impact:
      "After this, deep learning stopped feeling optional for perception-heavy tasks.",
    bullets: [
      "A benchmark shock that reset the field's center of gravity",
      "GPU training and large-scale data become the new normal",
    ],
    chips: ["AlexNet", "ImageNet", "GPUs"],
    links: [{ label: "AlexNet paper", url: "https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45-Abstract.html" }],
  },
  {
    id: "gans",
    year: "2014",
    title: "GANs reopened the generative imagination of AI.",
    summary:
      "Generative Adversarial Networks made it newly plausible that neural models could synthesize convincing images instead of only classifying them.",
    work: "Generative Adversarial Nets",
    impact:
      "This helped prepare the cultural and technical runway for today's generative-AI obsession.",
    bullets: [
      "Generation becomes as exciting as prediction",
      "Media synthesis enters the mainstream AI conversation",
    ],
    chips: ["GANs", "generative AI", "images"],
    links: [{ label: "GAN paper", url: "https://arxiv.org/abs/1406.2661" }],
  },
  {
    id: "alphago",
    year: "2016",
    title: "AlphaGo fused deep learning, search, and self-play into a new milestone.",
    summary:
      "AlphaGo showed what happened when neural networks and search were combined into a system that could improve through experience and planning.",
    work: "AlphaGo",
    impact:
      "It renewed confidence that stronger planning systems might emerge from combining learned models with structured search.",
    bullets: [
      "Learning and search become a more compelling hybrid",
      "The planning story gets stronger again",
    ],
    chips: ["AlphaGo", "search", "self-play"],
    links: [{ label: "AlphaGo blog", url: "https://deepmind.google/discover/blog/alphago-mastering-the-game-of-go-with-machine-learning/" }],
  },
  {
    id: "transformer",
    year: "2017",
    title: "Transformers rewired the stack around attention.",
    summary:
      "The transformer replaced recurrence with attention and parallelism, unlocking the scale dynamics that later powered LLMs and multimodal systems.",
    work: "Attention Is All You Need",
    impact:
      "This is one of the most important architecture shifts in the entire modern AI era.",
    bullets: [
      "Scales better than recurrent sequence modeling",
      "Becomes the backbone of language, code, vision, and multimodal models",
    ],
    chips: ["transformers", "attention", "scaling"],
    links: [{ label: "Transformer paper", url: "https://arxiv.org/abs/1706.03762" }],
  },
  {
    id: "gpt3",
    year: "2020",
    title: "GPT-3 turned natural language into a general software interface.",
    summary:
      "Prompting started to feel like a new programming layer: a single model could be steered into many tasks through in-context examples and plain language instructions.",
    work: "Language Models are Few-Shot Learners",
    impact:
      "The center of product design begins shifting from task-specific models to language-first interfaces.",
    bullets: [
      "Prompting becomes an interface pattern",
      "General-purpose LLMs start replacing many narrow systems",
    ],
    chips: ["GPT-3", "few-shot", "prompting"],
    links: [{ label: "GPT-3 paper", url: "https://arxiv.org/abs/2005.14165" }],
  },
  {
    id: "chatgpt",
    year: "2022",
    title: "ChatGPT made the LLM interface mainstream and everyday.",
    summary:
      "The broad public stopped thinking of AI as something hidden in the backend and started treating it as an interface they could use directly.",
    work: "ChatGPT",
    impact:
      "This is where AI moved from specialist tooling into mass-product behavior.",
    bullets: [
      "Conversation becomes the dominant interface metaphor",
      "AI usage expands far beyond research and engineering circles",
    ],
    chips: ["ChatGPT", "consumer AI", "interface shift"],
    links: [{ label: "Introducing ChatGPT", url: "https://openai.com/index/chatgpt/" }],
  },
  {
    id: "agents",
    year: "2024",
    title: "The agent wave shifted attention from answers to workflows.",
    summary:
      "Retrieval, tools, permissions, long-running threads, and multi-step planning moved to the center as teams tried to make LLM systems actually useful.",
    work: "Building Effective AI Agents",
    impact:
      "The important question changes from 'How smart is the model?' to 'How well does the whole system perform over time?'",
    bullets: [
      "The outer system layer becomes visible and strategic",
      "Evals, retries, and tool loops become default concerns",
    ],
    chips: ["agents", "tool use", "system design"],
    links: [{ label: "Anthropic: Building Effective AI Agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }],
  },
  {
    id: "codex-harness",
    year: "2026",
    title: "Coding agents plus harness engineering are redefining how software gets built.",
    summary:
      "By 2026, the conversation is no longer just about code generation. The frontier is now skills, hooks, reviews, automations, app servers, background agents, and environments purpose-built for delegated work.",
    work: "Harness engineering + the coding-agent stack",
    impact:
      "The bottleneck shifts upward from typing code to designing the environments, rules, and control loops in which agents operate.",
    bullets: [
      "Codex, Cursor, Claude Code, and OpenClaw each optimize a different operating surface",
      "Harness engineering emerges as a first-class discipline",
    ],
    chips: ["Codex", "Cursor", "Claude Code", "OpenClaw", "harnesses"],
    links: [
      { label: "Harness engineering", url: "https://openai.com/index/harness-engineering/" },
      { label: "Unlocking the Codex harness", url: "https://openai.com/index/unlocking-the-codex-harness/" },
    ],
  },
];

const harnessSkills = [
  {
    id: "intent",
    kicker: "Instruction surfaces",
    title: "Durable intent lives in project files, not in one-off prompts.",
    summary:
      "Reliable agent work begins when expectations are encoded in the repository itself through files such as `AGENTS.md`, `CLAUDE.md`, or `.cursor/rules`.",
    why:
      "Every repeated clarification you move into a durable instruction file becomes a compounding productivity gain.",
    artifacts: [
      "AGENTS.md with architecture, workflow, and review expectations",
      "CLAUDE.md or `.cursor/rules` with project-specific guidance",
      "Lightweight onboarding docs for repo structure and core commands",
    ],
    chips: ["AGENTS.md", "CLAUDE.md", ".cursor/rules"],
    links: [
      { label: "Cursor Rules", url: "https://docs.cursor.com/en/context" },
      { label: "Claude Code overview", url: "https://docs.anthropic.com/en/docs/claude-code/overview" },
      { label: "Introducing the Codex app", url: "https://openai.com/index/introducing-the-codex-app/" },
    ],
  },
  {
    id: "skills",
    kicker: "Reusable workflows",
    title: "Skills turn fragile prompting into reusable operational muscle.",
    summary:
      "A skill is a reusable bundle of instructions, resources, and sometimes scripts that lets an agent reliably run a workflow instead of improvising it from scratch each time.",
    why:
      "Skills are one of the most direct ways to convert tribal knowledge into something an agent can apply repeatedly and consistently.",
    artifacts: [
      "Skill manifests or markdown skill docs",
      "Associated scripts, templates, and references",
      "Clearly named workflows for recurring jobs like design implementation, deploys, or triage",
    ],
    chips: ["skills", "workflow reuse", "operational memory"],
    links: [
      { label: "Introducing the Codex app", url: "https://openai.com/index/introducing-the-codex-app/" },
      { label: "How OpenAI uses Codex", url: "https://cdn.openai.com/pdf/6a2631dc-783e-479b-b1a4-af0cfbd38630/how-openai-uses-codex.pdf" },
      { label: "Harness Engineering Academy", url: "https://harnessengineering.academy/" },
    ],
  },
  {
    id: "hooks",
    kicker: "Policy and interception",
    title: "Hooks are how teams inject policy into the agent loop.",
    summary:
      "Hooks let teams intercept tool use, validate changes, add context, or block unsafe actions before or after the model uses a tool.",
    why:
      "This is the bridge from agent autonomy to operational control.",
    artifacts: [
      "Pre-tool and post-tool validators",
      "UserPromptSubmit enrichment or blocking hooks",
      "Notification hooks and policy scripts",
    ],
    chips: ["hooks", "policy", "tool interception"],
    links: [
      { label: "Claude Code hooks", url: "https://docs.anthropic.com/en/docs/claude-code/hooks" },
      { label: "Unlocking the Codex harness", url: "https://openai.com/index/unlocking-the-codex-harness/" },
    ],
  },
  {
    id: "evals",
    kicker: "Verification",
    title: "Evals and review loops keep agent throughput from collapsing into entropy.",
    summary:
      "Once agents can move quickly, quality control has to become systematic: local checks, agent review, CI, regression suites, and explicit scorecards.",
    why:
      "Without reliable verification, higher throughput simply produces higher-rate mistakes.",
    artifacts: [
      "Task-specific eval suites and regression tests",
      "PR review automation and reviewer agents",
      "Acceptance criteria written as executable checks",
    ],
    chips: ["evals", "review loops", "regressions"],
    links: [
      { label: "Harness engineering", url: "https://openai.com/index/harness-engineering/" },
      { label: "Cursor Bugbot", url: "https://docs.cursor.com/en/bugbot" },
      { label: "Anthropic: Building Effective AI Agents", url: "https://www.anthropic.com/engineering/building-effective-agents" },
    ],
  },
  {
    id: "background",
    kicker: "Async execution",
    title: "Background agents and automations change what counts as a coding session.",
    summary:
      "When agents can work asynchronously, wake up later, and continue on long-lived threads, the software lifecycle stops being a purely synchronous interaction.",
    why:
      "This is the move from assistant usage to delegated labor.",
    artifacts: [
      "Background tasks tied to repos or worktrees",
      "Recurring automations and long-running threads",
      "Status panes and resumable execution surfaces",
    ],
    chips: ["background agents", "automations", "long-running work"],
    links: [
      { label: "Cursor Background Agents", url: "https://docs.cursor.com/background-agents" },
      { label: "Codex for (almost) everything", url: "https://openai.com/index/codex-for-almost-everything/" },
      { label: "Claude Code GitHub Actions", url: "https://docs.anthropic.com/en/docs/claude-code/github-actions" },
    ],
  },
  {
    id: "environment",
    kicker: "Readable environments",
    title: "Agents become stronger when the environment becomes readable and inspectable.",
    summary:
      "UI snapshots, logs, metrics, app previews, browser automation, screenshots, and structured configs all expand what an agent can validate for itself.",
    why:
      "If the agent cannot see it, it cannot reason about it. Environment readability is a force multiplier.",
    artifacts: [
      "Local preview flows and browser inspection hooks",
      "Log and metrics access inside the working environment",
      "Structured screenshots, DOM snapshots, and app state captures",
    ],
    chips: ["readability", "preview", "validation"],
    links: [
      { label: "Harness engineering", url: "https://openai.com/index/harness-engineering/" },
      { label: "Unlocking the Codex harness", url: "https://openai.com/index/unlocking-the-codex-harness/" },
      { label: "OpenClaw control UI", url: "https://docs.openclaw.ai/web/control-ui" },
    ],
  },
  {
    id: "architecture",
    kicker: "Constraint systems",
    title: "Strong architectural boundaries help agents move faster without drifting everywhere.",
    summary:
      "Layering, naming rules, data-boundary checks, file-size limits, logging conventions, and structure tests all reduce entropy for both humans and agents.",
    why:
      "Agents are faster in environments with explicit structure and fewer fuzzy local norms.",
    artifacts: [
      "Lint rules for architecture and imports",
      "Schema validation at data boundaries",
      "Conventions encoded as tests and CI checks",
    ],
    chips: ["architecture", "linters", "schema discipline"],
    links: [
      { label: "Harness engineering", url: "https://openai.com/index/harness-engineering/" },
      { label: "Cursor Rules", url: "https://docs.cursor.com/en/context" },
    ],
  },
  {
    id: "recovery",
    kicker: "Recovery loops",
    title: "The best harnesses assume that errors will happen and design recovery as a first-class path.",
    summary:
      "Recovery means retries, checkpoints, rollback paths, human escalation, and the ability to pick work back up without losing context.",
    why:
      "A useful agent is not one that never fails. It is one that fails legibly and recovers cheaply.",
    artifacts: [
      "Checkpoints and resumable threads",
      "PR feedback loops and issue-driven rework",
      "Human approval gates only where judgment is truly needed",
    ],
    chips: ["recovery", "checkpoints", "human-in-the-loop"],
    links: [
      { label: "Codex for (almost) everything", url: "https://openai.com/index/codex-for-almost-everything/" },
      { label: "Claude Code GitHub Actions", url: "https://docs.anthropic.com/en/docs/claude-code/github-actions" },
      { label: "Cursor Bugbot", url: "https://docs.cursor.com/en/bugbot" },
    ],
  },
];

const harnessSampleCards = [
  {
    label: "AGENTS.md",
    text: "Encode repo purpose, architecture, approval rules, review expectations, and common commands.",
  },
  {
    label: ".cursor/rules",
    text: "Persist project-specific rules and patterns for Cursor Agent without repeating them every session.",
  },
  {
    label: "CLAUDE.md",
    text: "Give Claude Code durable project guidance so terminal work remains aligned with team standards.",
  },
  {
    label: "Hooks",
    text: "Add policy, validation, and automatic context injection around tool use and prompt submission.",
  },
  {
    label: "Evals",
    text: "Translate quality expectations into repeatable checks, benchmarks, and review workflows.",
  },
  {
    label: "CI + Actions",
    text: "Let agents run async in PRs, issues, or scheduled jobs while keeping recovery and audit trails.",
  },
];

const worldCollections = {
  companies: [
    {
      id: "worldlabs",
      kicker: "Company",
      title: "World Labs and Marble",
      summary:
        "World Labs is building spatial intelligence systems that can reconstruct, generate, simulate, and edit 3D worlds. Marble is its first public product and the World API is the programmable interface.",
      bestFor: "Understanding the spatial-intelligence interpretation of world models.",
      why:
        "World Labs is one of the clearest companies explicitly organizing around world models as a product category, not just a research phrase.",
      chips: ["World Labs", "Marble", "World API", "spatial intelligence"],
      links: [
        { label: "World Labs", url: "https://www.worldlabs.ai/" },
        { label: "Marble: A Multimodal World Model", url: "https://www.worldlabs.ai/blog/marble-world-model" },
        { label: "Announcing the World API", url: "https://www.worldlabs.ai/blog/announcing-the-world-api" },
        { label: "Marble docs", url: "https://docs.worldlabs.ai/" },
      ],
    },
    {
      id: "deepmind-genie",
      kicker: "Company",
      title: "Google DeepMind and Genie",
      summary:
        "Google DeepMind is advancing a family of world-model systems through Genie, Genie 2, and Genie 3, plus adjacent projects like SIMA.",
      bestFor: "Tracking the most visible large-scale world-model research line in public view.",
      why:
        "Genie turns world models from a narrow research topic into a more legible public frontier around interactive, controllable environments.",
      chips: ["Google DeepMind", "Genie", "SIMA", "interactive worlds"],
      links: [
        { label: "Genie 3 model page", url: "https://deepmind.google/models/genie/" },
        { label: "Genie 3 blog", url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/" },
        { label: "Genie 2 blog", url: "https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/" },
        { label: "SIMA 2", url: "https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/" },
      ],
    },
    {
      id: "nvidia-cosmos",
      kicker: "Company",
      title: "NVIDIA Cosmos",
      summary:
        "NVIDIA has positioned Cosmos as a world foundation model platform for physical AI, spanning predictive models, reasoning models, transfer models, data pipelines, and GitHub releases.",
      bestFor: "Seeing how world models connect to robotics, autonomous vehicles, and industrial video agents.",
      why:
        "Cosmos is one of the strongest examples of world-model thinking being productized for physical AI and enterprise workflows.",
      chips: ["NVIDIA", "Cosmos", "physical AI", "world foundation models"],
      links: [
        { label: "NVIDIA Cosmos", url: "https://www.nvidia.com/en-us/ai/cosmos" },
        { label: "Cosmos Lab", url: "https://research.nvidia.com/labs/cosmos-lab/" },
        { label: "Cosmos major release", url: "https://nvidianews.nvidia.com/_gallery/download_pdf/67d9c63f3d6332d503f6c6f1/" },
      ],
    },
    {
      id: "physical-intelligence",
      kicker: "Company",
      title: "Physical Intelligence and openpi",
      summary:
        "Physical Intelligence has open-sourced openpi and published pi0.5, linking world-like representation learning to real robot policy work.",
      bestFor: "Understanding where world modeling meets real robotics deployment and open VLA tooling.",
      why:
        "This branch is especially important because it ties multimodal understanding to action in the physical world.",
      chips: ["Physical Intelligence", "openpi", "pi0.5", "robotics"],
      links: [
        { label: "openpi repo", url: "https://github.com/Physical-Intelligence/openpi" },
        { label: "Open Sourcing π0", url: "https://www.physicalintelligence.company/blog/openpi" },
        { label: "π0.5 paper", url: "https://www.physicalintelligence.company/download/pi05.pdf" },
      ],
    },
  ],
  projects: [
    {
      id: "dreamerv3",
      kicker: "Project",
      title: "DreamerV3",
      summary:
        "DreamerV3 is one of the clearest post-World Models research projects to study if latent world modeling can support general control across diverse domains.",
      bestFor: "Connecting classic world-model ideas to more recent reinforcement-learning systems.",
      why:
        "It keeps the world-model conversation grounded in an actual agent-learning project rather than abstract futurism.",
      chips: ["DreamerV3", "RL", "latent planning"],
      links: [
        { label: "DreamerV3 project", url: "https://danijar.com/project/dreamerv3/" },
        { label: "DreamerV3 GitHub", url: "https://github.com/danijar/dreamerv3" },
      ],
    },
    {
      id: "world-api",
      kicker: "Project",
      title: "World API",
      summary:
        "World Labs' World API turns explorable 3D world generation into a programmable capability that can be embedded into products.",
      bestFor: "Seeing world creation framed as software infrastructure rather than a standalone demo.",
      why:
        "It signals a transition from world-model research to developer-facing product primitives.",
      chips: ["API", "3D worlds", "developer platform"],
      links: [
        { label: "Announcing the World API", url: "https://www.worldlabs.ai/blog/announcing-the-world-api" },
        { label: "World Labs docs", url: "https://docs.worldlabs.ai/" },
      ],
    },
    {
      id: "openpi",
      kicker: "Project",
      title: "openpi",
      summary:
        "openpi is the open-source model and package stack published by Physical Intelligence for robotics work around π0, π0-FAST, and π0.5.",
      bestFor: "Developers who want a concrete open repo instead of only company blog posts.",
      why:
        "It gives the world-model and embodied-AI story a tangible codebase to inspect.",
      chips: ["open-source", "robotics", "VLA"],
      links: [
        { label: "openpi GitHub", url: "https://github.com/Physical-Intelligence/openpi" },
        { label: "Remote inference docs", url: "https://github.com/Physical-Intelligence/openpi/blob/main/docs/remote_inference.md" },
      ],
    },
    {
      id: "cosmos-github",
      kicker: "Project",
      title: "Cosmos open models and code",
      summary:
        "NVIDIA's Cosmos program includes downloadable models, a cookbook, and GitHub entry points for world foundation model work.",
      bestFor: "A hands-on route into physical-AI world models.",
      why:
        "Cosmos is one of the biggest current pushes to industrialize world-model infrastructure.",
      chips: ["GitHub", "physical AI", "NVIDIA"],
      links: [
        { label: "Cosmos platform", url: "https://www.nvidia.com/en-us/ai/cosmos" },
        { label: "Cosmos Lab", url: "https://research.nvidia.com/labs/cosmos-lab/" },
      ],
    },
  ],
  papers: [
    {
      id: "world-models-paper",
      kicker: "Paper",
      title: "World Models (2018)",
      summary:
        "The canonical paper that made the idea of learning an internal model of the world feel clean, concrete, and broadly legible.",
      bestFor: "Starting the world-model story at its most iconic paper.",
      why:
        "Even now, this is still the reference point many people mean when they say 'world models.'",
      chips: ["2018", "foundational", "latent simulation"],
      links: [{ label: "World Models paper", url: "https://arxiv.org/abs/1803.10122" }],
    },
    {
      id: "genie-paper",
      kicker: "Paper",
      title: "Genie: Generative Interactive Environments (2024)",
      summary:
        "Genie reframes the idea of a world model as an interactive environment learned from unlabelled Internet videos.",
      bestFor: "Understanding how world models evolve into controllable environments.",
      why:
        "It is one of the strongest papers connecting generative video modeling to agent training environments.",
      chips: ["Genie", "interactive environments", "2024"],
      links: [{ label: "Genie publication", url: "https://deepmind.google/research/publications/genie-generative-interactive-environments/" }],
    },
    {
      id: "ijepa",
      kicker: "Paper",
      title: "I-JEPA (2023)",
      summary:
        "I-JEPA is not a world model in the exact same sense as Genie or World Models, but it is central to the broader predictive-modeling argument around latent structure and future understanding.",
      bestFor: "The predictive-architecture branch associated with Yann LeCun's vision.",
      why:
        "It is a key paper in the non-generative predictive world-model conversation.",
      chips: ["I-JEPA", "predictive", "representation learning"],
      links: [{ label: "I-JEPA paper", url: "https://arxiv.org/abs/2301.08243" }],
    },
    {
      id: "pi05-paper",
      kicker: "Paper",
      title: "π0.5 (2025)",
      summary:
        "Physical Intelligence's π0.5 paper connects robust open-world generalization to the action side of embodied AI.",
      bestFor: "Readers who want the physical-action branch, not only virtual worlds.",
      why:
        "It broadens the future story from simulation and 3D generation toward robotics and VLA systems.",
      chips: ["pi0.5", "VLA", "robotics"],
      links: [{ label: "π0.5 paper", url: "https://www.physicalintelligence.company/download/pi05.pdf" }],
    },
  ],
  videos: [
    {
      id: "lecun-video",
      kicker: "Video",
      title: "Yann LeCun on self-supervision, JEPA, and world models",
      summary:
        "A useful video reference for the predictive world-model case from one of its strongest advocates.",
      bestFor: "A verbal overview of why predictive architectures might matter after today's language-centric wave.",
      why:
        "It gives the future chapter a living research voice rather than only papers and product pages.",
      chips: ["video", "JEPA", "future of AI"],
      links: [{ label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=yUmDRxV0krg" }],
    },
    {
      id: "genie-blog",
      kicker: "Demo blog",
      title: "Genie 2 demo blog",
      summary:
        "Google DeepMind's Genie 2 post contains rich embedded demos of action-controllable environments.",
      bestFor: "Seeing a world model rather than only reading about it.",
      why:
        "The demos make the category concrete very quickly.",
      chips: ["demos", "DeepMind", "interactive video"],
      links: [{ label: "Genie 2 blog", url: "https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/" }],
    },
    {
      id: "marble-demo",
      kicker: "Demo blog",
      title: "Marble demo and launch post",
      summary:
        "World Labs' Marble post shows what a world-model product looks like when it is exposed as a user-facing creation surface.",
      bestFor: "Seeing the spatial-intelligence branch of the world-model story.",
      why:
        "It helps the future chapter feel like a product landscape, not only a research survey.",
      chips: ["World Labs", "Marble", "demo"],
      links: [{ label: "Marble blog", url: "https://www.worldlabs.ai/blog/marble-world-model" }],
    },
  ],
};

const atlasItems = [
  {
    id: "atlas-codex-app",
    type: "product",
    title: "Introducing the Codex app",
    summary: "OpenAI's February 2, 2026 product launch for the multi-agent Codex desktop app.",
    why: "Best starting point for the current Codex product surface and built-in skills story.",
    chips: ["Codex", "product", "2026"],
    url: "https://openai.com/index/introducing-the-codex-app/",
  },
  {
    id: "atlas-codex-everything",
    type: "article",
    title: "Codex for (almost) everything",
    summary: "The April 16, 2026 expansion of Codex into computer use, memory, automations, and app plugins.",
    why: "Best current summary of how fast the Codex surface is widening.",
    chips: ["Codex", "computer use", "automation"],
    url: "https://openai.com/index/codex-for-almost-everything/",
  },
  {
    id: "atlas-codex-harness",
    type: "article",
    title: "Harness engineering",
    summary: "Ryan Lopopolo's February 11, 2026 OpenAI article on building software in an agent-first world.",
    why: "The clearest official articulation of harness engineering today.",
    chips: ["harness engineering", "OpenAI", "agents"],
    url: "https://openai.com/index/harness-engineering/",
  },
  {
    id: "atlas-codex-app-server",
    type: "article",
    title: "Unlocking the Codex harness",
    summary: "An engineering deep dive into the Codex App Server and the reusable harness beneath multiple Codex surfaces.",
    why: "Best for understanding the protocol and systems layer under Codex.",
    chips: ["App Server", "JSON-RPC", "Codex core"],
    url: "https://openai.com/index/unlocking-the-codex-harness/",
  },
  {
    id: "atlas-openai-codex-pdf",
    type: "docs",
    title: "How OpenAI uses Codex",
    summary: "A PDF from OpenAI Academy about how teams inside OpenAI use Codex day to day.",
    why: "Useful when you want practices instead of product marketing.",
    chips: ["academy", "Codex", "workflow"],
    url: "https://cdn.openai.com/pdf/6a2631dc-783e-479b-b1a4-af0cfbd38630/how-openai-uses-codex.pdf",
  },
  {
    id: "atlas-cursor-overview",
    type: "docs",
    title: "Cursor Agent overview",
    summary: "Current official docs for Cursor's agent mode, checkpoints, tools, and terminal integration.",
    why: "Best entry point into the Cursor surface today.",
    chips: ["Cursor", "agent", "IDE"],
    url: "https://docs.cursor.com/chat/overview",
  },
  {
    id: "atlas-cursor-background",
    type: "docs",
    title: "Cursor Background Agents",
    summary: "Docs for async remote agents that work on repositories in isolated environments.",
    why: "A key signal that coding-agent workflows are moving beyond synchronous chats.",
    chips: ["Cursor", "background agents", "async"],
    url: "https://docs.cursor.com/background-agents",
  },
  {
    id: "atlas-cursor-bugbot",
    type: "docs",
    title: "Cursor Bugbot",
    summary: "Official docs for Cursor's PR-review automation layer.",
    why: "Good example of harness-like review automation in a product surface.",
    chips: ["Cursor", "PR review", "Bugbot"],
    url: "https://docs.cursor.com/en/bugbot",
  },
  {
    id: "atlas-cursor-rules",
    type: "docs",
    title: "Cursor Rules",
    summary: "Docs for reusable, scoped instructions in `.cursor/rules`, user rules, and `AGENTS.md`.",
    why: "A practical reference for the durable-instructions layer.",
    chips: ["rules", ".cursor/rules", "AGENTS.md"],
    url: "https://docs.cursor.com/en/context",
  },
  {
    id: "atlas-claude-overview",
    type: "docs",
    title: "Claude Code overview",
    summary: "Anthropic's overview of the terminal-native coding agent.",
    why: "Best official overview of Claude Code's model of work.",
    chips: ["Claude Code", "terminal", "agentic coding"],
    url: "https://docs.anthropic.com/en/docs/claude-code/overview",
  },
  {
    id: "atlas-claude-hooks",
    type: "docs",
    title: "Claude Code hooks",
    summary: "Reference docs for hooking into pre- and post-tool events, notifications, and prompt submission.",
    why: "One of the strongest concrete docs on policy injection into agent workflows.",
    chips: ["hooks", "policy", "Anthropic"],
    url: "https://docs.anthropic.com/en/docs/claude-code/hooks",
  },
  {
    id: "atlas-claude-mcp",
    type: "docs",
    title: "Claude Code MCP",
    summary: "How Claude Code connects to tools and data through the Model Context Protocol.",
    why: "Useful if you're mapping the tooling layer around agents.",
    chips: ["MCP", "tools", "Claude Code"],
    url: "https://docs.anthropic.com/en/docs/claude-code/mcp",
  },
  {
    id: "atlas-claude-gha",
    type: "docs",
    title: "Claude Code GitHub Actions",
    summary: "Official docs for running Claude Code inside GitHub workflows.",
    why: "A concrete example of async agent automation in CI.",
    chips: ["GitHub Actions", "Claude Code", "automation"],
    url: "https://docs.anthropic.com/en/docs/claude-code/github-actions",
  },
  {
    id: "atlas-openclaw-repo",
    type: "product",
    title: "OpenClaw repository",
    summary: "The main open-source repo for OpenClaw's personal assistant stack.",
    why: "Best code-first entry point into OpenClaw.",
    chips: ["OpenClaw", "repo", "local-first"],
    url: "https://github.com/openclaw/openclaw",
  },
  {
    id: "atlas-openclaw-onboarding",
    type: "docs",
    title: "OpenClaw onboarding overview",
    summary: "Cross-platform onboarding docs covering auth, gateway setup, workspace, channels, and daemon options.",
    why: "Best single page for understanding what OpenClaw configures.",
    chips: ["onboarding", "gateway", "workspace"],
    url: "https://docs.openclaw.ai/start/onboarding-overview",
  },
  {
    id: "atlas-openclaw-control",
    type: "docs",
    title: "OpenClaw Control UI",
    summary: "Docs for the web control surface across chats, channels, sessions, logs, and jobs.",
    why: "Useful for understanding how OpenClaw treats the assistant as a controllable local system.",
    chips: ["control UI", "sessions", "jobs"],
    url: "https://docs.openclaw.ai/web/control-ui",
  },
  {
    id: "atlas-seedance",
    type: "product",
    title: "Dreamina Seedance 2.0",
    summary: "Official product page for Seedance's multimodal AI video creator.",
    why: "A concise look at the current media-generation branch of the frontier.",
    chips: ["Seedance", "video", "multimodal"],
    url: "https://dreamina.capcut.com/tools/seedance-2-0",
  },
  {
    id: "atlas-seedance-paper",
    type: "paper",
    title: "Seedance 2.0 paper",
    summary: "The April 15, 2026 model card describing Seedance 2.0's multimodal audio-video generation system.",
    why: "Best technical companion to the product page.",
    chips: ["paper", "2026", "audio-video"],
    url: "https://arxiv.org/abs/2604.14148",
  },
  {
    id: "atlas-happy-oyster",
    type: "product",
    title: "Happy Oyster",
    summary: "A more immersive and world-like AI surface than a plain chat page.",
    why: "Useful as an interface signal even if the category is still forming.",
    chips: ["immersive", "interface", "world-like"],
    url: "https://www.happyoyster.cn/",
  },
  {
    id: "atlas-harness-academy",
    type: "article",
    title: "Harness Engineering Academy",
    summary: "A learning hub dedicated to harness engineering ideas and practice.",
    why: "Good supplemental reading around the emerging discipline.",
    chips: ["academy", "harness engineering", "playbooks"],
    url: "https://harnessengineering.academy/",
  },
  {
    id: "atlas-harness-video",
    type: "video",
    title: "Harness Engineering talk by Ryan Lopopolo",
    summary: "A practical talk on software when humans steer and agents execute.",
    why: "The shortest path from buzzword to felt workflow change.",
    chips: ["video", "harness", "agents"],
    url: "https://www.youtube.com/watch?v=am_oeAoUhew",
  },
  {
    id: "atlas-dartmouth",
    type: "article",
    title: "AI coined at Dartmouth",
    summary: "The official Dartmouth retrospective on the field's naming moment.",
    why: "Best official starting point for the historical arc.",
    chips: ["history", "Dartmouth", "1956"],
    url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
  },
  {
    id: "atlas-backprop",
    type: "paper",
    title: "Backprop paper",
    summary: "The 1986 Nature paper that made multi-layer representation learning practically trainable.",
    why: "Critical bridge into modern deep learning.",
    chips: ["1986", "deep learning", "optimization"],
    url: "https://www.nature.com/articles/323533a0",
  },
  {
    id: "atlas-alexnet",
    type: "paper",
    title: "AlexNet paper",
    summary: "The 2012 ImageNet shock that mainstreamed deep learning.",
    why: "A definitive milestone in the timeline.",
    chips: ["AlexNet", "ImageNet", "2012"],
    url: "https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45-Abstract.html",
  },
  {
    id: "atlas-transformer",
    type: "paper",
    title: "Attention Is All You Need",
    summary: "The 2017 transformer paper behind the modern LLM stack.",
    why: "An unavoidable anchor for any serious AI timeline.",
    chips: ["transformers", "2017", "attention"],
    url: "https://arxiv.org/abs/1706.03762",
  },
  {
    id: "atlas-gpt3",
    type: "paper",
    title: "Language Models are Few-Shot Learners",
    summary: "The GPT-3 paper that made prompting feel like a new interface layer.",
    why: "Best technical anchor for the language-as-interface shift.",
    chips: ["GPT-3", "LLM", "few-shot"],
    url: "https://arxiv.org/abs/2005.14165",
  },
  {
    id: "atlas-world-models",
    type: "paper",
    title: "World Models",
    summary: "The 2018 paper that gave the field one of its most enduring future-facing concepts.",
    why: "The canonical reference for this chapter's title idea.",
    chips: ["world models", "2018", "latent simulation"],
    url: "https://arxiv.org/abs/1803.10122",
  },
  {
    id: "atlas-genie",
    type: "paper",
    title: "Genie: Generative Interactive Environments",
    summary: "DeepMind's 2024 world-model paper on controllable interactive environments.",
    why: "A major recent anchor for world-model research.",
    chips: ["Genie", "DeepMind", "interactive environments"],
    url: "https://deepmind.google/research/publications/genie-generative-interactive-environments/",
  },
  {
    id: "atlas-genie3",
    type: "company",
    title: "Genie 3",
    summary: "Google DeepMind's current model page for real-time interactive world generation.",
    why: "One of the clearest public demonstrations of the category maturing.",
    chips: ["Genie 3", "DeepMind", "world models"],
    url: "https://deepmind.google/models/genie/",
  },
  {
    id: "atlas-worldlabs",
    type: "company",
    title: "World Labs",
    summary: "A company explicitly organized around spatial intelligence and world models.",
    why: "Strong signal that world models are becoming a product category.",
    chips: ["World Labs", "spatial intelligence", "Marble"],
    url: "https://www.worldlabs.ai/",
  },
  {
    id: "atlas-world-api",
    type: "company",
    title: "World API",
    summary: "World Labs' January 21, 2026 release of a public API for explorable 3D worlds.",
    why: "Important because it turns world generation into software infrastructure.",
    chips: ["API", "3D worlds", "World Labs"],
    url: "https://www.worldlabs.ai/blog/announcing-the-world-api",
  },
  {
    id: "atlas-cosmos",
    type: "company",
    title: "NVIDIA Cosmos",
    summary: "NVIDIA's world foundation model platform for physical AI.",
    why: "A major industrial push behind world models in robotics and video AI agents.",
    chips: ["Cosmos", "NVIDIA", "physical AI"],
    url: "https://www.nvidia.com/en-us/ai/cosmos",
  },
  {
    id: "atlas-openpi",
    type: "project",
    title: "openpi",
    summary: "Open robotics models and packages published by Physical Intelligence.",
    why: "A concrete repo that links embodied AI to this future chapter.",
    chips: ["openpi", "robotics", "open-source"],
    url: "https://github.com/Physical-Intelligence/openpi",
  },
  {
    id: "atlas-pi05",
    type: "paper",
    title: "π0.5 paper",
    summary: "A recent Physical Intelligence paper about open-world generalization in VLA systems.",
    why: "Useful for readers following the robotics branch of the future stack.",
    chips: ["pi0.5", "VLA", "robotics"],
    url: "https://www.physicalintelligence.company/download/pi05.pdf",
  },
  {
    id: "atlas-dreamer",
    type: "project",
    title: "DreamerV3",
    summary: "A flagship world-model research project for general reinforcement learning.",
    why: "One of the best bridges between theory and agent-learning practice.",
    chips: ["DreamerV3", "RL", "project"],
    url: "https://danijar.com/project/dreamerv3/",
  },
  {
    id: "atlas-lecun-video",
    type: "video",
    title: "Yann LeCun on world models and JEPA",
    summary: "A video overview of the predictive-architecture branch of future AI.",
    why: "Good if you want a spoken overview instead of another paper first.",
    chips: ["video", "JEPA", "future"],
    url: "https://www.youtube.com/watch?v=yUmDRxV0krg",
  },
];

const state = {
  currentId: currentItems[0].id,
  timelineId: timelineItems[0].id,
  harnessId: harnessSkills[0].id,
  worldTab: "companies",
  worldId: worldCollections.companies[0].id,
  atlasFilter: "all",
  atlasSearch: "",
  atlasId: atlasItems[0].id,
};

const signalList = document.querySelector("#signal-list");
const signalImage = document.querySelector("#signal-image");
const signalKicker = document.querySelector("#signal-kicker");
const signalTitle = document.querySelector("#signal-title");
const signalSummary = document.querySelector("#signal-summary");
const signalWhy = document.querySelector("#signal-why");
const signalCurrent = document.querySelector("#signal-current");
const signalBullets = document.querySelector("#signal-bullets");
const signalChips = document.querySelector("#signal-chips");
const signalLinks = document.querySelector("#signal-links");

const timelineTrack = document.querySelector("#timeline-track");
const timelineYear = document.querySelector("#timeline-year");
const timelineTitle = document.querySelector("#timeline-title");
const timelineSummary = document.querySelector("#timeline-summary");
const timelineWork = document.querySelector("#timeline-work");
const timelineImpact = document.querySelector("#timeline-impact");
const timelineBullets = document.querySelector("#timeline-bullets");
const timelineChips = document.querySelector("#timeline-chips");
const timelineLinks = document.querySelector("#timeline-links");

const harnessSamplesNode = document.querySelector("#harness-samples");
const harnessSkillList = document.querySelector("#harness-skill-list");
const harnessKicker = document.querySelector("#harness-kicker");
const harnessTitle = document.querySelector("#harness-title");
const harnessSummary = document.querySelector("#harness-summary");
const harnessArtifacts = document.querySelector("#harness-artifacts");
const harnessWhy = document.querySelector("#harness-why");
const harnessChips = document.querySelector("#harness-chips");
const harnessLinks = document.querySelector("#harness-links");

const worldTabRow = document.querySelector("#world-tab-row");
const worldGrid = document.querySelector("#world-grid");
const worldKicker = document.querySelector("#world-kicker");
const worldTitle = document.querySelector("#world-title");
const worldSummary = document.querySelector("#world-summary");
const worldBest = document.querySelector("#world-best");
const worldWhy = document.querySelector("#world-why");
const worldChips = document.querySelector("#world-chips");
const worldLinks = document.querySelector("#world-links");

const atlasSearch = document.querySelector("#atlas-search");
const atlasCount = document.querySelector("#atlas-count");
const atlasGrid = document.querySelector("#atlas-grid");
const atlasKicker = document.querySelector("#atlas-kicker");
const atlasTitle = document.querySelector("#atlas-title");
const atlasSummary = document.querySelector("#atlas-summary");
const atlasType = document.querySelector("#atlas-type");
const atlasWhy = document.querySelector("#atlas-why");
const atlasChips = document.querySelector("#atlas-chips");
const atlasLink = document.querySelector("#atlas-link");
const filterPills = [...document.querySelectorAll(".filter-pill")];

const sections = [...document.querySelectorAll("[data-section]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];
const header = document.querySelector(".site-header");
const scrollProgress = document.querySelector("#scroll-progress");
const counters = [...document.querySelectorAll("[data-count]")];

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function makeChip(text) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = text;
  return chip;
}

function makeLink(item) {
  const link = document.createElement("a");
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = item.label;
  return link;
}

function makeBullet(text) {
  const node = document.createElement("p");
  node.textContent = text;
  return node;
}

function setImage(img, src, alt) {
  img.src = src;
  img.alt = alt;
}

function renderSignals() {
  clearNode(signalList);

  currentItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "signal-button";
    button.classList.toggle("is-active", item.id === state.currentId);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(item.id === state.currentId));
    button.innerHTML = `<strong>${item.kicker}</strong><span>${item.title}</span>`;
    button.addEventListener("click", () => {
      state.currentId = item.id;
      renderSignals();
      renderSignalDetail();
    });
    signalList.appendChild(button);
  });
}

function renderSignalDetail() {
  const item = currentItems.find((entry) => entry.id === state.currentId);
  setImage(signalImage, item.image, item.title);
  signalKicker.textContent = item.kicker;
  signalTitle.textContent = item.title;
  signalSummary.textContent = item.summary;
  signalWhy.textContent = item.why;
  signalCurrent.textContent = item.current;

  clearNode(signalBullets);
  item.bullets.forEach((bullet) => signalBullets.appendChild(makeBullet(bullet)));

  clearNode(signalChips);
  item.chips.forEach((chip) => signalChips.appendChild(makeChip(chip)));

  clearNode(signalLinks);
  item.links.forEach((link) => signalLinks.appendChild(makeLink(link)));
}

function renderTimeline() {
  clearNode(timelineTrack);

  timelineItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "timeline-button";
    button.classList.toggle("is-active", item.id === state.timelineId);
    button.innerHTML = `<strong>${item.year}</strong><span>${item.work}</span>`;
    button.addEventListener("click", () => {
      state.timelineId = item.id;
      renderTimeline();
      renderTimelineDetail();
    });
    timelineTrack.appendChild(button);
  });
}

function renderTimelineDetail() {
  const item = timelineItems.find((entry) => entry.id === state.timelineId);
  timelineYear.textContent = item.year;
  timelineTitle.textContent = item.title;
  timelineSummary.textContent = item.summary;
  timelineWork.textContent = item.work;
  timelineImpact.textContent = item.impact;

  clearNode(timelineBullets);
  item.bullets.forEach((bullet) => timelineBullets.appendChild(makeBullet(bullet)));

  clearNode(timelineChips);
  item.chips.forEach((chip) => timelineChips.appendChild(makeChip(chip)));

  clearNode(timelineLinks);
  item.links.forEach((link) => timelineLinks.appendChild(makeLink(link)));
}

function renderHarnessSamples() {
  clearNode(harnessSamplesNode);

  harnessSampleCards.forEach((sample) => {
    const card = document.createElement("article");
    card.className = "sample-card";
    card.innerHTML = `<strong>${sample.label}</strong><p>${sample.text}</p>`;
    harnessSamplesNode.appendChild(card);
  });
}

function renderHarnessSkills() {
  clearNode(harnessSkillList);

  harnessSkills.forEach((skill) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "skill-button";
    button.classList.toggle("is-active", skill.id === state.harnessId);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(skill.id === state.harnessId));
    button.innerHTML = `<strong>${skill.kicker}</strong><span>${skill.title}</span>`;
    button.addEventListener("click", () => {
      state.harnessId = skill.id;
      renderHarnessSkills();
      renderHarnessDetail();
    });
    harnessSkillList.appendChild(button);
  });
}

function renderHarnessDetail() {
  const skill = harnessSkills.find((entry) => entry.id === state.harnessId);
  harnessKicker.textContent = skill.kicker;
  harnessTitle.textContent = skill.title;
  harnessSummary.textContent = skill.summary;
  harnessWhy.textContent = skill.why;

  clearNode(harnessArtifacts);
  skill.artifacts.forEach((artifact) => harnessArtifacts.appendChild(makeBullet(artifact)));

  clearNode(harnessChips);
  skill.chips.forEach((chip) => harnessChips.appendChild(makeChip(chip)));

  clearNode(harnessLinks);
  skill.links.forEach((link) => harnessLinks.appendChild(makeLink(link)));
}

function currentWorldItems() {
  return worldCollections[state.worldTab];
}

function renderWorldTabs() {
  clearNode(worldTabRow);

  Object.keys(worldCollections).forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "world-tab";
    button.classList.toggle("is-active", tab === state.worldTab);
    button.textContent = tab[0].toUpperCase() + tab.slice(1);
    button.addEventListener("click", () => {
      state.worldTab = tab;
      state.worldId = worldCollections[tab][0].id;
      renderWorldTabs();
      renderWorldGrid();
      renderWorldDetail();
    });
    worldTabRow.appendChild(button);
  });
}

function renderWorldGrid() {
  const items = currentWorldItems();
  clearNode(worldGrid);

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "world-item";
    button.classList.toggle("is-selected", item.id === state.worldId);
    button.innerHTML = `<strong>${item.title}</strong><span>${item.summary}</span>`;
    button.addEventListener("click", () => {
      state.worldId = item.id;
      renderWorldGrid();
      renderWorldDetail();
    });
    worldGrid.appendChild(button);
  });
}

function renderWorldDetail() {
  const item = currentWorldItems().find((entry) => entry.id === state.worldId);
  worldKicker.textContent = item.kicker;
  worldTitle.textContent = item.title;
  worldSummary.textContent = item.summary;
  worldBest.textContent = item.bestFor;
  worldWhy.textContent = item.why;

  clearNode(worldChips);
  item.chips.forEach((chip) => worldChips.appendChild(makeChip(chip)));

  clearNode(worldLinks);
  item.links.forEach((link) => worldLinks.appendChild(makeLink(link)));
}

function filteredAtlasItems() {
  const query = state.atlasSearch.trim().toLowerCase();
  return atlasItems.filter((item) => {
    const filterMatch = state.atlasFilter === "all" || item.type === state.atlasFilter;
    const queryMatch =
      query.length === 0 ||
      `${item.title} ${item.summary} ${item.chips.join(" ")}`.toLowerCase().includes(query);
    return filterMatch && queryMatch;
  });
}

function renderAtlasFilters() {
  filterPills.forEach((pill) => {
    const active = pill.dataset.filter === state.atlasFilter;
    pill.classList.toggle("is-active", active);
    pill.setAttribute("aria-pressed", String(active));
  });
}

function renderAtlasGrid() {
  const items = filteredAtlasItems();
  if (!items.some((item) => item.id === state.atlasId)) {
    state.atlasId = items[0]?.id ?? atlasItems[0].id;
  }

  atlasCount.textContent = String(items.length);
  clearNode(atlasGrid);

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "atlas-item";
    button.classList.toggle("is-selected", item.id === state.atlasId);
    button.innerHTML = `<strong>${item.title}</strong><span>${item.summary}</span>`;
    button.addEventListener("click", () => {
      state.atlasId = item.id;
      renderAtlasGrid();
      renderAtlasDetail();
    });
    atlasGrid.appendChild(button);
  });

  renderAtlasDetail();
}

function renderAtlasDetail() {
  const item = atlasItems.find((entry) => entry.id === state.atlasId);
  atlasKicker.textContent = `Selected ${item.type}`;
  atlasTitle.textContent = item.title;
  atlasSummary.textContent = item.summary;
  atlasType.textContent = item.type[0].toUpperCase() + item.type.slice(1);
  atlasWhy.textContent = item.why;
  atlasLink.href = item.url;
  atlasLink.textContent = "Open resource";

  clearNode(atlasChips);
  item.chips.forEach((chip) => atlasChips.appendChild(makeChip(chip)));
}

function bindAtlasControls() {
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      state.atlasFilter = pill.dataset.filter;
      renderAtlasFilters();
      renderAtlasGrid();
    });
  });

  atlasSearch.addEventListener("input", (event) => {
    state.atlasSearch = event.target.value;
    renderAtlasGrid();
  });
}

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;
  header.classList.toggle("is-scrolled", scrollTop > 18);

  let activeId = sections[0]?.id ?? "top";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.26) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });
}

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  document
    .querySelectorAll(".detail-card, .sample-card, .principle-card")
    .forEach((target) => observer.observe(target));
}

function animateCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const node = entry.target;
        const finalValue = Number(node.dataset.count);
        const duration = 1000;
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
        observer.unobserve(node);
      });
    },
    { threshold: 0.7 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function init() {
  renderSignals();
  renderSignalDetail();
  renderTimeline();
  renderTimelineDetail();
  renderHarnessSamples();
  renderHarnessSkills();
  renderHarnessDetail();
  renderWorldTabs();
  renderWorldGrid();
  renderWorldDetail();
  renderAtlasFilters();
  renderAtlasGrid();
  bindAtlasControls();
  observeReveals();
  animateCounters();
  updateScrollUI();

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
}

init();
