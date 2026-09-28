import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/sections/project-visual";
import { TiltCard } from "@/components/ui/tilt-card";
import { GitHubIcon } from "@/components/ui/brand-icons";
import { Pill } from "@/components/ui/pill";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  size: "hero" | "wide" | "default";
}

export function ProjectCard({ project, size }: ProjectCardProps) {
  const titleId = `project-${project.id}`;

  return (
    <TiltCard
      accent={project.accent}
      aria-labelledby={titleId}
      className={cn("flex h-full flex-col p-6 sm:p-8", size === "hero" && "lg:p-10")}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ color: project.accent, backgroundColor: `${project.accent}1a` }}
        >
          {project.metricsOrRole}
        </span>
        {project.featured && <Pill>Featured</Pill>}
      </div>

      <h3
        id={titleId}
        className={cn(
          "mt-5 font-semibold tracking-tight",
          size === "hero" ? "text-3xl sm:text-4xl" : "text-2xl",
        )}
      >
        {project.title}
      </h3>
      <p className={cn("mt-2 leading-relaxed text-ink-muted", size === "hero" && "text-lg")}>
        {project.description}
      </p>

      {size === "hero" && <ProjectVisual accent={project.accent} />}

      <dl className={cn("mt-6 grid gap-4 text-sm leading-relaxed", size !== "default" && "sm:grid-cols-2")}>
        <div>
          <dt className="text-xs font-semibold tracking-wide text-ink-muted uppercase">Problem</dt>
          <dd className="mt-1">{project.longSummary.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-wide text-ink-muted uppercase">Impact</dt>
          <dd className="mt-1">{project.longSummary.impact}</dd>
        </div>
      </dl>

      <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <li key={tech}>
            <Pill>{tech}</Pill>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo (opens in a new tab)`}
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-medium text-white transition hover:bg-accent-hover active:scale-[0.98]"
          >
            Live demo
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-black/10 px-4 text-sm font-medium transition hover:bg-black/5 active:scale-[0.98] dark:border-white/15 dark:hover:bg-white/10"
          >
            <GitHubIcon className="size-4" />
            Source
          </a>
        )}
      </div>
    </TiltCard>
  );
}
