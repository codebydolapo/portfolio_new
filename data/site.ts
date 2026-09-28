export const site = {
  name: "Dolapo Bashorun",
  firstName: "Dolapo",
  initials: "DB",
  role: "Frontend Engineer",
  tagline: "I build simple, delightful user interfaces for complex backend systems.",
  bio: "I turn dense APIs, data pipelines and business logic into interfaces people actually enjoy using — working across React, Next.js, TypeScript and Node, and sweating the details most people never notice until they're missing.",
  availability: "Available for full-time roles & projects",
  avatar: "/pfp.png" as string | undefined,
  email: "bashorun115@gmail.com",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle",
    medium: "https://medium.com/@yourhandle",
  },
} as const;

export const navItems = [
  { id: "work", label: "Work" },
  { id: "writing", label: "Writing" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;
