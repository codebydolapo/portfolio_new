import type { Transition } from "framer-motion";

/** The house spring — used for hover, tilt and reveal micro-interactions. */
export const spring: Transition = { type: "spring", stiffness: 250, damping: 25 };

/** A snappier spring for elements that follow the pointer (dock highlight). */
export const snappySpring: Transition = { type: "spring", stiffness: 380, damping: 30 };
