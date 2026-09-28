import { Database, LayoutTemplate, type LucideIcon, Sparkles, Wrench } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { stack, type StackIcon } from "@/data/stack";

const icons: Record<StackIcon, { Icon: LucideIcon; tint: string }> = {
  frontend: { Icon: LayoutTemplate, tint: "bg-[#0071e3]/10 text-[#0071e3]" },
  backend: { Icon: Database, tint: "bg-[#34c759]/12 text-[#248a3d] dark:text-[#30d158]" },
  animation: { Icon: Sparkles, tint: "bg-[#af52de]/12 text-[#8944ab] dark:text-[#bf5af2]" },
  tools: { Icon: Wrench, tint: "bg-[#ff9f0a]/12 text-[#c93400] dark:text-[#ff9f0a]" },
};

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Technical arsenal"
      title="The tools behind the polish."
      description="No percentage bars — just the stack I use every day to ship production software."
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {stack.map((category, i) => {
          const { Icon, tint } = icons[category.icon];
          return (
            <li key={category.id}>
              <Reveal delay={i * 0.05} className="h-full">
                <article aria-labelledby={`stack-${category.id}`} className="surface h-full p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${tint}`}>
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <div>
                      <h3 id={`stack-${category.id}`} className="text-xl font-semibold tracking-tight">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{category.description}</p>
                    </div>
                  </div>
                  <ul aria-label={`${category.title} skills`} className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <Pill tone="strong" size="md">{skill}</Pill>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
