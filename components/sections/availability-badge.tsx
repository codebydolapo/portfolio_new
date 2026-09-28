"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { spring } from "@/lib/motion";

export function AvailabilityBadge({ label }: { label: string }) {
  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
      className="glass group inline-flex items-center gap-2.5 rounded-full py-1.5 pr-3 pl-3.5 text-sm font-medium shadow-card"
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-70 motion-safe:animate-ping" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {label}
      <ArrowRight
        aria-hidden
        className="size-3.5 text-ink-muted transition-transform duration-300 ease-apple group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </motion.a>
  );
}
