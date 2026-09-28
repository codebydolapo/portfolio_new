"use client";

import { motion } from "framer-motion";
import { spring } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** Fades and lifts content into view once, using the house spring. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}
