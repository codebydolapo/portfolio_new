export type StackIcon = "frontend" | "backend" | "animation" | "tools";

export interface StackCategory {
  id: string;
  title: "Frontend" | "Backend & Data" | "Animation & Design" | "Tools";
  description: string;
  icon: StackIcon;
  skills: string[];
}

export const stack: StackCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "The core I reach for to ship fast, typed, accessible interfaces.",
    icon: "frontend",
    skills: ["TypeScript", "React 19", "Next.js (App Router)", "Tailwind CSS", "HTML & CSS", "Radix UI", "Web Vitals"],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "State, data fetching and APIs that keep the UI honest.",
    icon: "backend",
    skills: ["Node.js", "PostgreSQL", "Prisma", "GraphQL", "tRPC", "React Query", "Zustand", "Redis"],
  },
  {
    id: "animation",
    title: "Animation & Design",
    description: "Motion and visual craft that make software feel physical.",
    icon: "animation",
    skills: ["Framer Motion", "GSAP", "Figma", "Design Tokens", "SVG", "View Transitions"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Infrastructure and tooling for confident, repeatable delivery.",
    icon: "tools",
    skills: ["Git", "Vercel", "Docker", "GitHub Actions", "Vitest", "Playwright", "Storybook"],
  },
];
