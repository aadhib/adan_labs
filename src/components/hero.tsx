"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { KineticMarquee } from "@/components/ui/marquee";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Dramatic zoom-out as the viewer scrolls into the page.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label="Adan Labs — The new era of autonomy"
      className="relative flex min-h-screen flex-col overflow-hidden border-b-2 border-border"
    >
      {/* Top hairline registration marks */}
      <div className="mt-20 flex items-center justify-between border-b-2 border-border px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground md:px-12">
        <span>Adan Labs</span>
        <span aria-hidden="true" className="hidden sm:block">
          Agentic Assist Technologies
        </span>
        <span>Est. 2026</span>
      </div>

      {/* Headline */}
      <div className="flex flex-1 items-center px-6 py-16 md:px-12">
        <motion.div
          style={{ scale, opacity }}
          className="w-full origin-left"
        >
          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold tracking-tight text-accent">
              001
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent md:text-sm">
              Give your business agency
            </span>
          </div>

          <h1 className="font-bold uppercase leading-[0.82] tracking-tighter text-foreground text-[clamp(3rem,13vw,14rem)]">
            <span className="block">The new era</span>
            <span className="block">
              of <span className="text-accent">autonomy</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-tight text-muted-foreground md:text-xl">
              Adan Labs builds enterprise-grade Agentic Assist Technologies —
              reasoning-first architectures, cognitive memory, and multi-agent
              orchestration that turn passive AI into autonomous outcomes.
            </p>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Link href="/contact" className={buttonVariants({ variant: "accent" })}>
                Book a strategy call
                <ArrowRight />
              </Link>
              <Link
                href="/technology"
                className={buttonVariants({ variant: "outline" })}
              >
                Explore technology
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-bleed accent marquee — motion never stops */}
      <div className="border-t-2 border-accent bg-accent py-4 text-accent-foreground">
        <KineticMarquee speed={70}>
          <div className="flex items-center text-2xl font-bold uppercase tracking-tighter md:text-4xl">
            {["Reason", "Plan", "Act", "Autonomously"].map((word) => (
              <span key={word} className="flex items-center">
                <span className="px-8">{word}</span>
                <span aria-hidden="true" className="text-xl md:text-3xl">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </KineticMarquee>
      </div>
    </section>
  );
}
