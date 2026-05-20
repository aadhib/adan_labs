"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

const reasons = [
  {
    number: "01",
    title: "From Tasks to Outcomes",
    description:
      "Traditional AI assists with tasks. Agentic AI drives outcomes — autonomously managing end-to-end processes with measurable business impact.",
  },
  {
    number: "02",
    title: "Operational Velocity",
    description:
      "Agents that work 24/7 across every timezone, executing complex multi-step workflows in minutes that previously required days of human coordination.",
  },
  {
    number: "03",
    title: "Governance by Design",
    description:
      "Enterprise-grade guardrails, audit trails, and human-on-the-loop oversight ensure every autonomous action meets compliance and security standards.",
  },
  {
    number: "04",
    title: "Measurable ROI",
    description:
      "Every deployment is tied to quantifiable business metrics — cost reduction, throughput improvement, error elimination, and time-to-value acceleration.",
  },
];

const stats = [
  { value: "10×", label: "Process Throughput" },
  { value: "85%", label: "Error Reduction" },
];

export function WhyAgenticSection() {
  return (
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <SectionLabel index="04">The Imperative</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
            Why enterprises need{" "}
            <span className="text-accent">agentic AI now</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
            The gap between companies deploying autonomous AI agents and those
            still relying on passive tools is widening every quarter. The
            competitive advantage is not incremental — it is structural.
          </p>
        </FadeIn>

        {/* Massive stat numbers */}
        <div className="mt-16 grid grid-cols-1 gap-px border-2 border-border bg-border sm:grid-cols-2">
          {stats.map((stat) => (
            <FadeIn key={stat.label} className="h-full">
              <div className="flex h-full flex-col justify-between gap-6 bg-background p-8 md:p-12">
                <span className="font-bold leading-[0.8] tracking-tighter text-accent text-[clamp(4rem,11vw,9rem)]">
                  {stat.value}
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-foreground">
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Reason cards — hairline grid, hover flood */}
      <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border md:mt-24 md:grid-cols-2">
        {reasons.map((reason) => (
          <FadeIn key={reason.number} className="h-full">
            <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
              <span className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)] group-hover:text-accent-foreground/25">
                {reason.number}
              </span>
              <h3 className="mt-6 text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                {reason.title}
              </h3>
              <p className="mt-4 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                {reason.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
