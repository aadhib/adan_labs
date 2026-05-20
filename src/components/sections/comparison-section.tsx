"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

const generativeTraits = [
  "Single-turn responses",
  "No persistent memory",
  "Requires constant prompting",
  "Isolated from business systems",
  "Output-focused",
  "No accountability or audit trail",
];

const agenticTraits = [
  "Multi-step autonomous execution",
  "Cognitive memory across sessions",
  "Self-directed goal pursuit",
  "Deep enterprise integration",
  "Outcome-focused",
  "Full governance and auditability",
];

export function ComparisonSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
            The Paradigm Shift
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
            From Generative AI
            <br />
            <span className="font-normal gradient-text">
              to Agentic Execution
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground/40" />
                <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Generative AI
                </h3>
              </div>
              <ul className="space-y-4">
                {generativeTraits.map((trait) => (
                  <li
                    key={trait}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 block w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                    <span className="text-sm leading-relaxed">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] backdrop-blur-sm p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                <h3 className="text-xs tracking-[0.2em] text-foreground uppercase">
                  Agentic AI
                </h3>
                <span className="ml-auto text-[10px] tracking-wider text-primary/60 font-mono">
                  ADAN LABS
                </span>
              </div>
              <ul className="space-y-4">
                {agenticTraits.map((trait) => (
                  <li
                    key={trait}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <ArrowRight className="mt-0.5 w-4 h-4 text-primary/60 shrink-0" />
                    <span className="text-sm leading-relaxed">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
