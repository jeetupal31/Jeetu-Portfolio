export type SocialLink = {
  name: "GitHub" | "LinkedIn" | "X" | "Peerlist" | "LeetCode";
  href: string;
  key: "github" | "linkedin" | "x" | "peerlist" | "leetcode";
};

export type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/jeetupal31", key: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeetupal31/",
    key: "linkedin",
  },
  { name: "X", href: "https://x.com/Jeetupal31", key: "x" },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/jeetupal31/",
    key: "leetcode",
  },
  { name: "Peerlist", href: "https://peerlist.io/jeetupal31", key: "peerlist" },
];

export const techStack = [
  { name: "TypeScript", detail: "Type-safe architectures for large codebases" },
  { name: "React", detail: "Composable UI systems with strong DX" },
  { name: "Next.js", detail: "High-performance SSR and routing at scale" },
  { name: "Node.js", detail: "REST APIs and backend service implementation" },
  { name: "PostgreSQL", detail: "Relational data modeling and optimization" },
  { name: "Redis", detail: "Pub/sub, caching, queues, and low-latency state" },
  { name: "WebSockets", detail: "Real-time, event-driven features at low latency" },
  { name: "Tailwind CSS", detail: "Fast, maintainable design systems" },
  { name: "Turborepo", detail: "Scalable monorepo developer workflows" },
];

export const projects: Project[] = [
  {
    name: "Exness — Crypto Trading Platform",
    description:
      "Real-time trading platform streaming live BTC/USDT from Binance through a Redis pub/sub pipeline to candlestick charts, with market/limit orders, 1×–20× leverage, and decimal.js money math. Built as a Turborepo monorepo on AWS with CI/CD.",
    image: "/projects/exness.png",
    tech: ["Next.js", "Node.js", "Redis", "WebSockets", "AWS"],
    githubUrl: "https://github.com/jeetupal31/exness",
  },
  {
    name: "AgentFlow — AI Workflow Platform",
    description:
      "Visual platform to build and run AI agent pipelines on a drag-and-drop canvas. A BullMQ/Redis execution engine streams per-node status over Socket.io. Dockerized, with 29 passing tests.",
    image: "/projects/agentflow.png",
    tech: ["TypeScript", "BullMQ", "Socket.io", "MongoDB", "Docker"],
    githubUrl: "https://github.com/jeetupal31/agentflow",
    liveUrl: "https://agentflow-frontend-2nhh.onrender.com",
  },
  {
    name: "ExcaliDraw Live — Collaborative Whiteboard",
    description:
      "Multiplayer whiteboard where people draw together in real time — live cursors, presence, version history, and AI text-to-diagram. Editor/viewer roles are enforced server-side.",
    image: "/projects/excalidraw.png",
    tech: ["React", "TypeScript", "WebSockets", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/jeetupal31/excalidraw-fullstack",
    liveUrl: "https://excalidraw-fullstack.vercel.app",
  },
  {
    name: "LeetLab — Coding Practice Platform",
    description:
      "LeetCode-style platform with an in-browser Monaco editor and a Judge0 execution engine for 50+ problems, real-time results, submission tracking, and JWT auth with role-based access.",
    image: "/projects/leetlab.png",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Judge0"],
    githubUrl: "https://github.com/jeetupal31/leetlab",
    liveUrl: "https://leetlab-nu.vercel.app",
  },
  {
    name: "SecondBrain — Knowledge Base",
    description:
      "Personal knowledge base to save, tag, search, and share links, notes, tweets, and videos — fully Dockerized for one-command deploys.",
    image: "/projects/secondbrain.png",
    tech: ["TypeScript", "Node.js", "Docker"],
    githubUrl: "https://github.com/jeetupal31/secondBrain",
    liveUrl: "https://brainly-neon.vercel.app",
  },
];

export const experience: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    org: "Otulia",
    period: "Jan 2026 — Present",
    location: "Remote",
    points: [
      "Ship production features across a React + Node.js stack through pull requests, code reviews, and CI on every merge.",
      "Build and integrate REST APIs and backend logic spanning MongoDB and PostgreSQL data layers.",
      "Optimize component rendering and client–server communication to improve end-to-end performance.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  org: "Chaudhary Charan Singh University, Meerut",
  period: "2023 — 2027",
};

export const journeyPoints = [
  "Distributed systems & system design",
  "Real-time architectures with WebSockets & Redis",
  "GenAI — RAG, embeddings, and agentic workflows",
  "Data Structures & Algorithms in Java",
];

export const contactEmail = "jeetupal.pal31@gmail.com";
export const contactPhone = "6387995833";
export const resumeUrl = "/Jeetu_Pal_Resume.pdf";
