import { ArrowRight } from "lucide-react";
import { AvailabilityBadge } from "@/components/sections/availability-badge";
import { ProfilePortrait } from "@/components/sections/profile-portrait";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

const coreTech = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Agentic Software Design"];

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Soft ambient glow behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[560px] w-full max-w-3xl bg-[radial-gradient(ellipse_at_center,rgb(0_113_227/0.14),transparent_65%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgb(0_113_227/0.26),transparent_65%)]"
      />

      <Container className="grid items-center gap-8 sm:gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        {/* Portrait first on mobile so the page opens with a face, second on desktop */}
        <Reveal className="order-first w-full max-w-42 sm:max-w-60 lg:order-last lg:mx-auto lg:max-w-none">
          <ProfilePortrait />
        </Reveal>

        <div>
          {/* <Reveal>
            <AvailabilityBadge label={site.availability} />
          </Reveal> */}

          <Reveal delay={0.06}>
            <p className="mt-8 text-lg font-medium text-ink-muted sm:text-xl">Hi, I&apos;m</p>
            <h1 id="hero-title" className="mt-1 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {site.name}
              <span className="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-2xl leading-snug font-medium tracking-tight text-balance sm:text-[1.75rem]">
              {site.role} — building{" "}
              <span className="text-accent">simple, delightful interfaces</span> for complex backend systems.
            </p>
            {/* <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pretty text-ink-muted">{site.bio}</p> */}
          </Reveal>

          <Reveal delay={0.18} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-white shadow-[0_8px_24px_-8px_rgb(0_113_227/0.6)] transition hover:bg-accent-hover active:scale-[0.98]"
            >
              See my work
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border border-black/10 px-6 text-[15px] font-medium transition hover:bg-black/5 active:scale-[0.98] dark:border-white/15 dark:hover:bg-white/10"
            >
              Contact me
            </a>
            <span aria-hidden className="mx-1 hidden h-6 w-px bg-hairline sm:block" />
            <ul className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="grid size-12 place-items-center rounded-full text-ink-muted transition hover:bg-black/5 hover:text-ink dark:hover:bg-white/10"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* <Reveal delay={0.24} className="mt-12">
            <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">Currently working with</p>
            <ul aria-label="Core technologies" className="mt-3 flex flex-wrap gap-2">
              {coreTech.map((tech) => (
                <li key={tech}>
                  <Pill tone="strong" size="md">
                    {tech}
                  </Pill>
                </li>
              ))}
            </ul>
          </Reveal> */}
        </div>
      </Container>
    </section>
  );
}
