import { ProjectCard } from "@/components/sections/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export function Projects() {
  const heroProjectId = projects.find((p) => p.featured)?.id;

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Products shipped with obsessive care."
      description="A few things I've designed, engineered and obsessed over — each one measured by the problem it solved."
    >
      {/* grid-flow-dense lets smaller cards back-fill around the featured tiles */}
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-flow-dense lg:auto-rows-fr lg:grid-cols-3">
        {projects.map((project, i) => {
          const isHero = project.id === heroProjectId;
          return (
            <li
              key={project.id}
              className={cn(project.featured && "md:col-span-2", isHero && "lg:row-span-2")}
            >
              <Reveal delay={Math.min(i * 0.05, 0.2)} className="h-full">
                <ProjectCard project={project} size={isHero ? "hero" : project.featured ? "wide" : "default"} />
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
