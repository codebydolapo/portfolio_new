export interface Project {
  id: string;
  title: string;
  /** One-line value proposition shown under the title. */
  description: string;
  /** Problem → impact narrative rendered on the card. */
  longSummary: {
    problem: string;
    impact: string;
  };
  techStack: string[];
  /** Featured projects span two columns in the bento grid. */
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  /** Short badge, e.g. a headline metric or your role. */
  metricsOrRole: string;
  /** Hex color used for the card's hover glow. */
  accent: string;
}

export const projects: Project[] = [
  {
    id: "orbit-analytics",
    title: "Orbit Analytics",
    description: "A real-time product analytics dashboard that stays at 60fps with 100k live events.",
    longSummary: {
      problem:
        "Growth teams were waiting 30+ seconds for dashboards to load, and charts froze whenever live data streamed in.",
      impact:
        "Rebuilt the rendering pipeline with virtualized canvas charts and streaming RSC. Time-to-interactive dropped from 8.2s to 1.4s and weekly active usage rose 38%.",
    },
    techStack: ["Next.js", "TypeScript", "React Query", "WebSockets", "D3", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://example.com/orbit",
    githubUrl: "https://github.com/yourhandle/orbit",
    metricsOrRole: "Lead Frontend · −83% TTI",
    accent: "#0071e3",
  },
  {
    id: "pocket-ledger",
    title: "Pocket Ledger",
    description: "Offline-first personal finance PWA with instant sync.",
    longSummary: {
      problem: "Budget apps broke on flaky mobile connections and lost user edits.",
      impact: "CRDT-backed local store with background sync — zero reported data loss across 12k users.",
    },
    techStack: ["React", "IndexedDB", "Service Workers", "Zustand"],
    featured: false,
    liveUrl: "https://example.com/ledger",
    githubUrl: "https://github.com/yourhandle/pocket-ledger",
    metricsOrRole: "Solo build · 12k users",
    accent: "#34c759",
  },
  {
    id: "atlas-design-system",
    title: "Atlas Design System",
    description: "Token-driven component library powering five product teams.",
    longSummary: {
      problem: "Five teams shipped five slightly different buttons, and accessibility regressions were constant.",
      impact: "60+ WCAG AA components with visual regression tests; UI build time for new features cut by ~40%.",
    },
    techStack: ["React", "Radix UI", "Storybook", "Style Dictionary"],
    featured: false,
    githubUrl: "https://github.com/yourhandle/atlas",
    metricsOrRole: "Design Systems Lead",
    accent: "#af52de",
  },
  {
    id: "relay-commerce",
    title: "Relay Commerce",
    description: "Headless storefront with sub-second page loads on 3G connections.",
    longSummary: {
      problem: "A legacy monolith storefront scored 31 on Lighthouse mobile and conversion was sliding.",
      impact:
        "Migrated to a headless Next.js App Router architecture with edge caching and partial prerendering. Lighthouse 98, conversion +22%.",
    },
    techStack: ["Next.js", "Shopify Storefront API", "GraphQL", "Framer Motion", "Vercel"],
    featured: true,
    liveUrl: "https://example.com/relay",
    githubUrl: "https://github.com/yourhandle/relay-commerce",
    metricsOrRole: "Frontend Architect · +22% CVR",
    accent: "#ff9f0a",
  },
  {
    id: "cadence-cli",
    title: "Cadence",
    description: "Developer CLI that scaffolds typed API clients from OpenAPI specs.",
    longSummary: {
      problem: "Hand-written API clients drifted from the backend and caused runtime bugs.",
      impact: "Generated, fully typed clients in CI — 1.2k GitHub stars and adopted by 3 companies.",
    },
    techStack: ["Node.js", "TypeScript", "OpenAPI", "Vitest"],
    featured: false,
    githubUrl: "https://github.com/yourhandle/cadence",
    metricsOrRole: "Open source · 1.2k ★",
    accent: "#ff375f",
  },
];
