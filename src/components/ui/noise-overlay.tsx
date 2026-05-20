/**
 * Fixed full-viewport print-grain texture. Sits above content at very low
 * opacity with mix-blend-overlay — adds poster texture without hurting
 * readability. Decorative: hidden from assistive tech.
 */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.035] mix-blend-overlay"
    >
      <svg className="h-full w-full">
        <title>Decorative grain texture</title>
        <filter id="kinetic-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#kinetic-noise)" />
      </svg>
    </div>
  );
}
