import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-ink-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Designed &amp; built with care.
        </p>
        <p>Next.js · TypeScript · Tailwind CSS · Framer Motion</p>
      </Container>
    </footer>
  );
}
