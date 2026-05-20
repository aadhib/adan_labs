"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

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
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <SectionLabel index="02">The Paradigm Shift</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
            From generative AI{" "}
            <span className="text-accent">to agentic execution</span>
          </h2>
        </FadeIn>
      </div>

      {/* Two-column hard contrast */}
      <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border md:mt-24 md:grid-cols-2">
        {/* Generative — muted, inert */}
        <div className="bg-background p-8 md:p-14">
          <div className="mb-10 flex items-baseline justify-between">
            <h3 className="text-2xl font-bold uppercase tracking-tighter text-muted-foreground md:text-4xl">
              Generative AI
            </h3>
            <span
              aria-hidden="true"
              className="font-bold leading-none text-muted text-[clamp(3rem,8vw,7rem)]"
            >
              01
            </span>
          </div>
          <ul className="flex flex-col">
            {generativeTraits.map((trait) => (
              <li
                key={trait}
                className="flex items-center gap-4 border-t-2 border-border py-5 text-lg font-medium text-muted-foreground md:text-xl"
              >
                <span
                  aria-hidden="true"
                  className="text-xl text-muted-foreground"
                >
                  ✕
                </span>
                {trait}
              </li>
            ))}
          </ul>
        </div>

        {/* Agentic — accent flood, active */}
        <div className="bg-accent p-8 text-accent-foreground md:p-14">
          <div className="mb-10 flex items-baseline justify-between">
            <h3 className="text-2xl font-bold uppercase tracking-tighter md:text-4xl">
              Agentic AI
            </h3>
            <span
              aria-hidden="true"
              className="font-bold leading-none text-accent-foreground/15 text-[clamp(3rem,8vw,7rem)]"
            >
              02
            </span>
          </div>
          <ul className="flex flex-col">
            {agenticTraits.map((trait) => (
              <li
                key={trait}
                className="flex items-center gap-4 border-t-2 border-accent-foreground/20 py-5 text-lg font-bold uppercase tracking-tight md:text-xl"
              >
                <span aria-hidden="true" className="text-xl">
                  →
                </span>
                {trait}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em]">
            Built by Adan Labs
          </p>
        </div>
      </div>
    </section>
  );
}
