"use client";

import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * Adan Labs logomark — "Stack A": the letter A built from seven horizontal
 * scanline bars, clipped to the A silhouette. Kinetic / executing motion.
 *
 * Single SVG on a 200x200 viewBox. Colour comes from `currentColor`, so set
 * it with a Tailwind text utility (e.g. `text-accent`). Decorative — paired
 * with the visible "Adan Labs" wordmark, so it is hidden from assistive tech.
 */
const A_PATH =
  "M100,20 L188,180 L142,180 L100,98 L58,180 L12,180 Z M64,138 L136,138 L122,112 L78,112 Z";
const BAR_Y = [20, 44, 68, 92, 116, 140, 164];

export function LogoMark({ className }: { className?: string }) {
  // Unique clip id per instance — multiple marks can coexist on one page.
  const clipId = `stack-a-${useId()}`;

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={cn("text-accent", className)}
    >
      <defs>
        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          <path d={A_PATH} fillRule="evenodd" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {BAR_Y.map((y) => (
          <rect key={y} x="0" y={y} width="200" height="16" />
        ))}
      </g>
    </svg>
  );
}
