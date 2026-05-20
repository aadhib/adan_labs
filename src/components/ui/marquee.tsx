"use client";

import { type ReactNode } from "react";
import Marquee from "react-fast-marquee";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Infinite scrolling marquee — a signature of the Kinetic Typography system.
 * No gradient edges (raw edge is intentional). Pauses, rather than hides,
 * when the user prefers reduced motion so content stays readable.
 */
export function KineticMarquee({
  children,
  speed = 60,
  direction = "left",
  className,
}: {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <Marquee
      speed={speed}
      direction={direction}
      gradient={false}
      autoFill
      play={!reduced}
      className={cn(className)}
    >
      {children}
    </Marquee>
  );
}
