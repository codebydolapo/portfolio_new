export type BlogPlatform = "Medium" | "Dev.to" | "Hashnode" | "Substack";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  /** ISO 8601 date, e.g. "2026-05-14". */
  publishedAt: string;
  /** Estimated reading time in minutes. */
  readTime: number;
  platform: BlogPlatform;
  /** Short topic label shown on the card. */
  tag: string;
  externalUrl: string;
}

export const blogs: BlogPost[] = [
  {
    id: "spring-physics-ui",
    title: "Why spring physics make interfaces feel alive",
    excerpt:
      "Duration-based easing fights the user's hand. Here's how stiffness, damping and mass map to how an interface feels — with Framer Motion recipes.",
    publishedAt: "2026-08-19",
    readTime: 8,
    platform: "Medium",
    tag: "Motion",
    externalUrl: "https://medium.com/@yourhandle/spring-physics-ui",
  },
  {
    id: "rsc-mental-model",
    title: "A practical mental model for React Server Components",
    excerpt:
      "Stop thinking about 'server vs client' and start thinking about where your data lives. A framework for drawing the boundary in real apps.",
    publishedAt: "2026-06-02",
    readTime: 11,
    platform: "Medium",
    tag: "Architecture",
    externalUrl: "https://medium.com/@yourhandle/rsc-mental-model",
  },
  {
    id: "accessible-bento",
    title: "Building accessible bento grids",
    excerpt:
      "Bento layouts look great, but reading order and focus order often don't match. How to keep visual flair without breaking keyboard users.",
    publishedAt: "2026-03-27",
    readTime: 6,
    platform: "Dev.to",
    tag: "Accessibility",
    externalUrl: "https://dev.to/yourhandle/accessible-bento-grids",
  },
  {
    id: "design-tokens-scale",
    title: "Design tokens that survive a rebrand",
    excerpt:
      "Primitive, semantic and component tokens — and the naming mistakes that make a rebrand take six months instead of six days.",
    publishedAt: "2026-01-15",
    readTime: 9,
    platform: "Medium",
    tag: "Design Systems",
    externalUrl: "https://medium.com/@yourhandle/design-tokens-that-survive",
  },
  {
    id: "lcp-playbook",
    title: "The LCP playbook: from 4.1s to 1.2s",
    excerpt:
      "A step-by-step teardown of a real production page — fonts, images, hydration and the one header that made the biggest difference.",
    publishedAt: "2025-11-08",
    readTime: 12,
    platform: "Hashnode",
    tag: "Performance",
    externalUrl: "https://yourhandle.hashnode.dev/lcp-playbook",
  },
  {
    id: "typescript-apis",
    title: "Designing TypeScript APIs your teammates will love",
    excerpt:
      "Inference over annotation, discriminated unions over booleans, and other small decisions that compound into delightful DX.",
    publishedAt: "2025-09-21",
    readTime: 7,
    platform: "Medium",
    tag: "TypeScript",
    externalUrl: "https://medium.com/@yourhandle/typescript-apis",
  },
];
