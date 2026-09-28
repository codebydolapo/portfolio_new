import { ContactForm } from "@/components/sections/contact-form";
import { CopyEmail } from "@/components/sections/copy-email";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/data/site";

const socials = [
  {
    label: "GitHub",
    href: site.socials.github,
    Icon: GitHubIcon,
    className: "hover:bg-[#24292f] hover:text-white dark:hover:bg-white dark:hover:text-black",
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    Icon: LinkedInIcon,
    className: "hover:bg-[#0a66c2] hover:text-white",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great."
      description="Hiring for a frontend role or have a product that needs polish? My inbox is always open."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <Reveal className="flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-semibold text-ink-muted">Email me directly</h3>
            <div className="mt-3">
              <CopyEmail email={site.email} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-muted">Find me elsewhere</h3>
            <ul className="mt-3 flex gap-3">
              {socials.map(({ label, href, Icon, className }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className={`surface flex items-center gap-2.5 rounded-2xl px-5 py-3.5 text-[15px] font-medium transition duration-300 ease-apple hover:-translate-y-0.5 hover:shadow-float ${className}`}
                  >
                    <Icon className="size-5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm leading-relaxed text-ink-muted">
            Typically replying within 48 hours. Based remotely, happy to work across time zones.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
