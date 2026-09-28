import { Dock } from "@/components/layout/dock";
import { Footer } from "@/components/layout/footer";
import { Blogs } from "@/components/sections/blogs";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-100 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Dock />
      <main id="main">
        <Hero />
        <Projects />
        <Blogs />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
