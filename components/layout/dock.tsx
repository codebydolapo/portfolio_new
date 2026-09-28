"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { snappySpring, spring } from "@/lib/motion";

type NavId = (typeof navItems)[number]["id"];

/** Tracks which nav section sits in the middle band of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<NavId | null>(null);

  useEffect(() => {
    const ids = ["top", ...navItems.map((n) => n.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          setActive(id === "top" ? null : (id as NavId));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Dock() {
  const active = useActiveSection();
  const [hovered, setHovered] = useState<NavId | null>(null);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.nav
        aria-label="Primary"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={spring}
        className="glass pointer-events-auto flex items-center gap-1 rounded-full p-1.5 shadow-float"
      >
        <a
          href="#top"
          aria-label={`${site.name} — back to top`}
          className="hidden size-9 place-items-center rounded-full bg-ink text-xs font-semibold tracking-tight text-canvas sm:grid"
        >
          {site.initials}
        </a>

        <ul className="flex items-center" onMouseLeave={() => setHovered(null)}>
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onMouseEnter={() => setHovered(item.id)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "relative isolate block rounded-full px-3 py-1.5 text-sm font-medium tracking-tight transition-colors sm:px-4",
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {hovered === item.id && (
                    <motion.span
                      layoutId="dock-hover"
                      transition={snappySpring}
                      className="absolute inset-0 -z-10 rounded-full bg-black/5 dark:bg-white/10"
                    />
                  )}
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="dock-active"
                      transition={snappySpring}
                      className="absolute inset-x-0 bottom-0.5 mx-auto size-1 rounded-full bg-accent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <span aria-hidden className="mx-0.5 h-5 w-px bg-hairline" />
        <ThemeToggle />
      </motion.nav>
    </header>
  );
}
