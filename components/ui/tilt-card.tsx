"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { spring } from "@/lib/motion";

const MAX_TILT_DEG = 3.5;
const springConfig = { stiffness: 250, damping: 25 };

interface TiltCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  /** Hex color for the cursor-following spotlight. */
  accent?: string;
}

/**
 * A surface card that tilts toward the pointer and lights up under it.
 * Tilt only runs for mouse input and is disabled for reduced-motion users.
 */
export function TiltCard({ accent = "#0071e3", className, children, ...rest }: TiltCardProps) {
  const reduceMotion = useReducedMotion();

  // Pointer position normalized to -0.5…0.5 for tilt, and in px for the spotlight.
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const px = useMotionValue(-999);
  const py = useMotionValue(-999);

  const rotateX = useSpring(useTransform(ny, [-0.5, 0.5], [MAX_TILT_DEG, -MAX_TILT_DEG]), springConfig);
  const rotateY = useSpring(useTransform(nx, [-0.5, 0.5], [-MAX_TILT_DEG, MAX_TILT_DEG]), springConfig);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${px}px ${py}px, ${accent}1f, transparent 70%)`;

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    px.set(x);
    py.set(y);
    nx.set(x / rect.width - 0.5);
    ny.set(y / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    nx.set(0);
    ny.set(0);
    px.set(-999);
    py.set(-999);
  };

  return (
    <motion.article
      {...rest}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={reduceMotion ? undefined : { scale: 1.012 }}
      transition={spring}
      className={cn("surface group relative overflow-hidden transition-shadow duration-500 hover:shadow-float", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </motion.article>
  );
}
