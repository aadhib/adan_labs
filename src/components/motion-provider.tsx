"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

/**
 * App-wide motion context. `reducedMotion="user"` makes every framer-motion
 * animation honor the OS reduced-motion setting — transforms are dropped,
 * opacity is kept — without per-component branching that risks hydration
 * mismatches.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
