"use client";

import { memo, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

/* ------------------------------------------------------------------ */
/*  Vitruvian Geometric Visual — in-house SVG, no third-party deps    */
/* ------------------------------------------------------------------ */

const VitruvianVisual = memo(function VitruvianVisual() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-full"
      fill="none"
      stroke="white"
      aria-hidden="true"
    >
      {/* Outer construction square */}
      <rect
        x="60"
        y="60"
        width="480"
        height="480"
        strokeWidth="0.3"
        opacity="0.06"
      />

      {/* Inner construction square (rotated 45°) */}
      <polygon
        points="300,72 528,300 300,528 72,300"
        strokeWidth="0.3"
        opacity="0.04"
      />

      {/* Cross axes */}
      <line x1="300" y1="20" x2="300" y2="580" strokeWidth="0.3" opacity="0.08" />
      <line x1="20" y1="300" x2="580" y2="300" strokeWidth="0.3" opacity="0.08" />

      {/* Diagonals */}
      <line x1="80" y1="80" x2="520" y2="520" strokeWidth="0.2" opacity="0.04" />
      <line x1="520" y1="80" x2="80" y2="520" strokeWidth="0.2" opacity="0.04" />

      {/* Concentric circles */}
      <circle cx="300" cy="300" r="260" strokeWidth="0.4" opacity="0.06" />
      <circle cx="300" cy="300" r="200" strokeWidth="0.3" opacity="0.08" />
      <circle cx="300" cy="300" r="140" strokeWidth="0.3" opacity="0.06" />
      <circle cx="300" cy="300" r="80" strokeWidth="0.3" opacity="0.04" />

      {/* Outer orbital ring — rotating */}
      <g className="origin-center animate-spin-slow motion-reduce:animate-none">
        <circle
          cx="300"
          cy="300"
          r="260"
          strokeWidth="0.5"
          strokeDasharray="4 10"
          opacity="0.1"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle
              key={`o-${deg}`}
              cx={300 + 260 * Math.cos(rad)}
              cy={300 + 260 * Math.sin(rad)}
              r="2.5"
              fill="white"
              stroke="none"
              opacity="0.15"
            />
          );
        })}
      </g>

      {/* Mid orbital ring — counter-rotating */}
      <g className="origin-center animate-spin-reverse motion-reduce:animate-none">
        <circle
          cx="300"
          cy="300"
          r="200"
          strokeWidth="0.4"
          strokeDasharray="3 8"
          opacity="0.08"
        />
        {[30, 90, 150, 210, 270, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle
              key={`m-${deg}`}
              cx={300 + 200 * Math.cos(rad)}
              cy={300 + 200 * Math.sin(rad)}
              r="2"
              fill="white"
              stroke="none"
              opacity="0.12"
            />
          );
        })}
      </g>

      {/* Cardinal markers on inner circle */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 300 + 140 * Math.cos(rad);
        const y = 300 + 140 * Math.sin(rad);
        return (
          <g key={`card-${deg}`}>
            <circle cx={x} cy={y} r="4" strokeWidth="0.4" opacity="0.12" />
            <circle
              cx={x}
              cy={y}
              r="1.5"
              fill="white"
              stroke="none"
              opacity="0.2"
            />
          </g>
        );
      })}

      {/* Vitruvian figure — abstract human silhouette */}
      <g opacity="0.12" strokeWidth="0.5">
        {/* Head */}
        <circle cx="300" cy="230" r="22" />
        <circle cx="300" cy="230" r="8" fill="white" stroke="none" opacity="0.5" />

        {/* Spine */}
        <line x1="300" y1="252" x2="300" y2="365" />

        {/* Arms — extended reach */}
        <line x1="300" y1="280" x2="228" y2="256" />
        <line x1="300" y1="280" x2="372" y2="256" />
        <line x1="228" y1="256" x2="196" y2="240" />
        <line x1="372" y1="256" x2="404" y2="240" />

        {/* Legs */}
        <line x1="300" y1="365" x2="264" y2="430" />
        <line x1="300" y1="365" x2="336" y2="430" />

        {/* Hand + foot nodes */}
        <circle cx="196" cy="240" r="2.5" fill="white" stroke="none" />
        <circle cx="404" cy="240" r="2.5" fill="white" stroke="none" />
        <circle cx="264" cy="430" r="2.5" fill="white" stroke="none" />
        <circle cx="336" cy="430" r="2.5" fill="white" stroke="none" />
      </g>

      {/* Core energy — pulsing */}
      <circle
        cx="300"
        cy="310"
        r="12"
        strokeWidth="0.5"
        opacity="0.15"
        className="animate-pulse-glow motion-reduce:animate-none"
      />
      <circle
        cx="300"
        cy="310"
        r="4"
        fill="white"
        stroke="none"
        opacity="0.25"
        className="animate-pulse-glow motion-reduce:animate-none"
      />

      {/* Neural radials from core */}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={`n-${deg}`}
            x1={300 + 16 * Math.cos(rad)}
            y1={310 + 16 * Math.sin(rad)}
            x2={300 + 50 * Math.cos(rad)}
            y2={310 + 50 * Math.sin(rad)}
            strokeWidth="0.3"
            strokeDasharray="2 4"
            opacity="0.06"
          />
        );
      })}

      {/* Measurement ticks — top */}
      <line x1="260" y1="48" x2="340" y2="48" strokeWidth="0.3" opacity="0.06" />
      <line x1="260" y1="45" x2="260" y2="51" strokeWidth="0.3" opacity="0.06" />
      <line x1="340" y1="45" x2="340" y2="51" strokeWidth="0.3" opacity="0.06" />

      {/* Measurement ticks — bottom */}
      <line x1="260" y1="552" x2="340" y2="552" strokeWidth="0.3" opacity="0.06" />
      <line x1="260" y1="549" x2="260" y2="555" strokeWidth="0.3" opacity="0.06" />
      <line x1="340" y1="549" x2="340" y2="555" strokeWidth="0.3" opacity="0.06" />
    </svg>
  );
});

/* ------------------------------------------------------------------ */
/*  HeroAscii — Main hero component                                    */
/* ------------------------------------------------------------------ */

export function HeroAscii() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const allAnimated =
        "[data-hero-visual], [data-hero-deco], [data-hero-eyebrow], [data-hero-heading], [data-hero-body], [data-hero-cta], [data-hero-footer]";

      if (prefersReduced) {
        gsap.set(allAnimated, { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.fromTo(
        "[data-hero-visual]",
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 1.5 }
      )
        .fromTo(
          "[data-hero-deco]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          "[data-hero-eyebrow]",
          { y: 15, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-heading]",
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-body]",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-cta]",
          { y: 15, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          "-=0.2"
        )
        .fromTo(
          "[data-hero-footer]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          "-=0.2"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      aria-label="Adan Labs — The New Era of Autonomy"
      className="relative min-h-screen overflow-hidden bg-black font-mono"
    >
      {/* Geometric visual — always mounted, opacity-controlled for responsive */}
      <div
        data-hero-visual
        className="invisible absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[8%]"
      >
        <div className="w-[min(85vmin,560px)] h-[min(85vmin,560px)] opacity-40 lg:opacity-100 transition-opacity duration-500">
          <VitruvianVisual />
        </div>
      </div>

      {/* Corner Frame Accents */}
      <div
        data-hero-deco
        className="invisible absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/20 z-20"
      />
      <div
        data-hero-deco
        className="invisible absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/20 z-20"
      />
      <div
        data-hero-deco
        className="invisible absolute bottom-[5vh] left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/20 z-20"
      />
      <div
        data-hero-deco
        className="invisible absolute bottom-[5vh] right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/20 z-20"
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-start lg:items-center pt-24 lg:pt-0">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-16">
          <div className="max-w-xl">
            {/* Eyebrow line */}
            <div
              data-hero-eyebrow
              className="invisible flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-white/50" />
              <span className="text-white/40 text-[10px] tracking-wider">
                001
              </span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* Sub-eyebrow */}
            <div data-hero-eyebrow className="invisible mb-4">
              <span className="text-white/40 text-[11px] tracking-[0.3em] uppercase">
                Give Your Business Agency
              </span>
            </div>

            {/* Headline */}
            <div className="relative mb-2">
              <div className="hidden lg:block absolute -left-3 top-0 bottom-0 w-0.5 bg-white/10" />
              <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight tracking-[0.06em]">
                <span
                  data-hero-heading
                  className="invisible block"
                >
                  THE NEW ERA
                </span>
                <span
                  data-hero-heading
                  className="invisible block text-white/90 mt-1 lg:mt-2"
                >
                  OF AUTONOMY
                </span>
              </h1>
            </div>

            {/* Decorative dots — desktop */}
            <div
              data-hero-deco
              className="invisible hidden lg:flex gap-1 my-4"
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 h-0.5 bg-white/30 rounded-full"
                />
              ))}
            </div>

            {/* Description */}
            <div data-hero-body className="invisible relative">
              <p className="text-xs lg:text-sm text-white/40 mb-6 lg:mb-8 leading-relaxed max-w-md">
                Adan Labs builds enterprise-grade Agentic Assist Technologies
                with reasoning-first architectures, cognitive memory, and
                multi-agent orchestration — delivering measurable business
                outcomes.
              </p>
              {/* Corner accent — desktop */}
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-3 border border-white/10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/30" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Link
                href="/contact"
                data-hero-cta
                className="invisible relative px-6 py-2.5 bg-transparent text-white text-xs lg:text-sm border border-white hover:bg-white hover:text-black transition-colors duration-200 group text-center tracking-wider"
              >
                <span className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                BOOK A STRATEGY CALL
              </Link>
              <Link
                href="/technology"
                data-hero-cta
                className="invisible px-6 py-2.5 bg-transparent border border-white/30 text-white text-xs lg:text-sm hover:bg-white hover:text-black transition-colors duration-200 text-center tracking-wider"
              >
                EXPLORE TECHNOLOGY
              </Link>
            </div>

            {/* Bottom notation — desktop */}
            <div
              data-hero-footer
              className="invisible hidden lg:flex items-center gap-2 mt-8"
            >
              <span className="text-white/30 text-[9px]">&#8734;</span>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/30 text-[9px] tracking-wider">
                REASON. PLAN. ACT.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div
        data-hero-footer
        className="invisible absolute bottom-[5vh] left-0 right-0 z-20 border-t border-white/10 bg-black/60 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] text-white/30">
            <span className="hidden lg:inline">SYSTEM.ACTIVE</span>
            <span className="lg:hidden">SYS.ACT</span>
            <div className="hidden lg:flex gap-1">
              {[4, 12, 8, 16, 6, 10, 14, 7].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-white/20"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <span>V1.0.0</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] text-white/30">
            <span className="hidden lg:inline">&#9680; RENDERING</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse" />
              <div
                className="w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1 h-1 bg-white/15 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <span className="hidden lg:inline">FRAME: &#8734;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
