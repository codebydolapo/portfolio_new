import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, action, children, className }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={cn("scroll-mt-20 py-14 sm:py-20", className)}>
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-tight text-accent">{eyebrow}</p>
            <h2 id={titleId} className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-muted">{description}</p>
            )}
          </div>
          {action}
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  );
}
