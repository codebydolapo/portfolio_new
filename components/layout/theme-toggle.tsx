"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { spring } from "@/lib/motion";
import { THEME_STORAGE_KEY } from "@/lib/theme";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";

    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Storage unavailable (private mode) — theme still applies for this visit.
      }
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) apply();
    else document.startViewTransition(apply);
  };

  // Icons swap via the dark: variant so server and client markup always match.
  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      transition={spring}
      className="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      <Sun aria-hidden className="size-[18px] dark:hidden" />
      <Moon aria-hidden className="hidden size-[18px] dark:block" />
    </motion.button>
  );
}
