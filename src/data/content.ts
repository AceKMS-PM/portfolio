// Single source of truth for portfolio content.
// ONLY public data per brief: no phone, no address, no birthdate, no grades.

export const profile = {
  name: "Kurt Merry Sèdjro Degla",
  location: "Cotonou, Benin",
  status: "Final-year Licence, Computer Network Administration (ARI) — ENEAM. Thesis defended, diploma expected Dec 2026.",
  statement:
    "Final-year network administration student who builds web projects — most comfortable in PHP/Laravel — learning Rust and local AI by building, piloting code agents (OpenCode, Claude Code, Hermes Agent, ZCode) while keeping architecture and choices.",
  email: "kurtmerrydegla@gmail.com",
  github: "https://github.com/AceKMS-PM",
  githubLabel: "github.com/AceKMS-PM",
  cvPath: "/cv-kurt-degla.pdf",
  memoirePath: "/memoire.pdf",
};

export const chips = [
  { label: "Almost Web Developer", tone: "green" },
  { label: "Computer Network in training", tone: "cyan" },
  { label: "interested in AI Engineering", tone: "indigo" },
] as const;

export const experiences = [
  {
    org: "HE Systems SARL",
    period: "Jun – Jul 2025",
    role: "Web Development Intern · Cotonou",
    text: "Applied web skills in a production environment; shipped and deployed to live systems.",
    tone: "green",
  },
  {
    org: "Euphorbia Group",
    period: "Apr – Jul 2026",
    role: "Computer Networking Intern · Cotonou",
    text: "Networking fundamentals, troubleshooting, and on-site equipment handling.",
    tone: "cyan",
  },
  {
    org: "Pixel-Mart.bj",
    period: "Team production",
    role: "Contributor · Multi-vendor platform",
    text: "Frontend/backend contributions, testing, bug fixes, and setup/deploy participation in a team production platform.",
    tone: "indigo",
  },
];

export type SkillTone = "stronger" | "progress" | "academic";

export const skillGroups: {
  title: string;
  badge: string;
  tone: SkillTone;
  blurb: string;
  items: string[];
}[] = [
  {
    title: "Primary Stack",
    badge: "Stronger / Production",
    tone: "stronger",
    blurb: "Comfortable building relational schemas, backend controllers, views, and shipping to shared/static hosting.",
    items: ["PHP / Laravel", "HTML / CSS / JavaScript", "SQL — MySQL, OracleDB, Postgres basics", "Git & GitHub (basic)", "Deployment — Hostinger, Netlify"],
  },
  {
    title: "Active Explorations",
    badge: "Learning / Building",
    tone: "progress",
    blurb: "Learned by shipping experimental repos, not courses.",
    items: [
      "Rust — Result/?, traits, axum, sqlx + SQLite, argon2, JWT (via Rausth)",
      "React 18 + TypeScript + Convex (via Daily Bread)",
      "Python / FastAPI + RAG basics (via Brain RAG)",
      "C / Clang fundamentals (study notes, no shipped project yet)",
    ],
  },
  {
    title: "Networking & Infrastructure",
    badge: "Academic / Lab",
    tone: "academic",
    blurb: "Fundamentals plus HA concepts from thesis work — academic, not production.",
    items: [
      "Networking fundamentals, GNS3, Wireshark, virtualization",
      "Linux (basic)",
      "HA concepts: HAProxy, Keepalived, Lsyncd, bonding, GNS3 mockups",
    ],
  },
  {
    title: "Method",
    badge: "How I work",
    tone: "stronger",
    blurb: "AI-agent piloting with architecture ownership and systematic docs.",
    items: ["Piloting: OpenCode, Claude Code, Hermes Agent, ZCode", "Docs: README, DOCS.md, CONCEPTS.md per repo"],
  },
];

export type ProjectStatus = "finished" | "building" | "experimental" | "contributor";

export const projects: {
  name: string;
  status: ProjectStatus;
  statusLabel: string;
  context: string;
  mine: string;
  stack: string[];
  link: string;
  roadmap?: string[];
}[] = [
  {
    name: "Daily Bread (Pain Quotidien)",
    status: "finished",
    statusLabel: "Most finished product",
    context: "Christian daily-devotion platform: devotion of the day, highlighted verse, reactions (Amen / Love / Fire / Prayer), archives, community prayer wall, date navigation. Admin: dashboard stats, devotion editor, 66 books, 7 translations (LSG, BDS, NEG, KJV, NIV, ESV, NBS), tags, Draft / Scheduled / Published, members + roles, pinned announcements.",
    mine: "Full-stack I built with AI assistance. First registered user becomes admin.",
    stack: ["Bun", "React 18 + TypeScript", "Convex", "@convex-dev/auth", "React Router v6", "TailwindCSS", "Vite"],
    link: "https://github.com/AceKMS-PM/daily-bread",
  },
  {
    name: "Rausth — modular auth in Rust",
    status: "building",
    statusLabel: "Active · Brick 1/3",
    context: "Auth system with pure core decoupled from transport — for web, classic systems, embedded later.",
    mine: "Identity core (Argon2, UserRepository trait) + web adapter (axum, JWT access+refresh with hashed refresh in DB, sqlx + SQLite).",
    stack: ["Rust Cargo workspace", "axum", "sqlx + SQLite", "argon2", "jsonwebtoken"],
    link: "https://github.com/AceKMS-PM/rausth",
    roadmap: ["Classic-system adapter", "Embedded adapter"],
  },
  {
    name: "Brain RAG (Second Brain Local)",
    status: "experimental",
    statusLabel: "Experimental · works locally",
    context: "Local RAG to query my own notes/docs — no cloud. Hybrid search (LanceDB vectors + BM25 with RRF fusion), 3 local GGUF models on CPU, multi-source vault (md/txt/pdf), OpenAI-compatible /v1/chat/completions, Tauri desktop shell.",
    mine: "Built the pipeline, hybrid retrieval, local model wiring, Tauri shell.",
    stack: ["Python / FastAPI", "LanceDB", "llama.cpp GGUF", "Tauri (Rust + WebKit)"],
    link: "https://github.com/AceKMS-PM/brain-rag",
    roadmap: ["Streaming SSE", "Session memory", "Doc-management UI", "OOM hardening on small RAM"],
  },
  {
    name: "Pixel-Mart.bj",
    status: "contributor",
    statusLabel: "Contributor — not solo",
    context: "Multi-vendor e-commerce platform, team production project (Sep 2024 – present).",
    mine: "Frontend/backend contributions, testing, bug fixes, setup and deployment participation.",
    stack: ["Team stack", "Production platform"],
    link: "https://github.com/AceKMS-PM",
  },
  {
    name: "Zeat Platform",
    status: "contributor",
    statusLabel: "Contributor — not solo",
    context: "SaaS platform, team production project (Apr 2025 – present).",
    mine: "Frontend/backend contributions, testing, bug fixes, setup and deployment participation.",
    stack: ["Team stack", "Production platform"],
    link: "https://github.com/AceKMS-PM",
  },
];

export const certifications: { name: string; issuer: string; date: string }[] = [
  { name: "Claude AI Fluency", issuer: "Anthropic · skilljar", date: "Mar 2026" },
  { name: "Claude 101", issuer: "Anthropic · skilljar", date: "Mar 2026" },
  { name: "Claude Code in Action", issuer: "Anthropic · skilljar", date: "Mar 2026" },
  { name: "Intermediate TypeScript", issuer: "Codecademy", date: "Mar 2026" },
  { name: "Generative AI: An Ally for Cybercriminals (OWASP)", issuer: "APDP", date: "Dec 2025" },
];

export const thesis = {
  title: "Conception d'une architecture réseau à haute disponibilité pour la continuité d'une application web en environnement d'entreprise",
  kind: "Academic thesis work — Licence memoir, ENEAM",
  coauthor: "Co-author: Abrielle Dollione Bandeira",
  supervisors: "Supervisors: Maurice Comlan (ENEAM) · Florent Late (Euphorbia Group)",
  summary:
    "HA web continuity with bonding/LACP, Keepalived, HAProxy, file sync (Lsyncd), and GNS3 simulations with failover captures.",
  bullets: ["Bonding / LACP trunking", "Keepalived VRRP failover", "HAProxy layer-7 load balancing", "Lsyncd real-time file sync", "GNS3 simulation + failover screenshots"],
};

export const studyNotes = [
  "CONCEPTS_RUST.md — error handling, From conversions, expect rules (from Rausth)",
  "CONCEPTS_CLANG.md — toolchain, preprocessor, Rust-vs-C memory view (pre-project)",
  "Web Pentest sheets — 14 vulns, defensive: cause / identify / mitigate (labs only)",
];

export const agents = ["OpenCode", "Claude Code", "Hermes Agent", "ZCode"];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#thesis", label: "Thesis" },
  { href: "#contact", label: "Contact" },
];
