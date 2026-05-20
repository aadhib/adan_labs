"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { TrendingUp, Shield, Zap, Target } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "From Tasks to Outcomes",
    description:
      "Traditional AI assists with tasks. Agentic AI drives outcomes — autonomously managing end-to-end processes with measurable business impact.",
  },
  {
    icon: Zap,
    title: "Operational Velocity",
    description:
      "Agents that work 24/7 across every timezone, executing complex multi-step workflows in minutes that previously required days of human coordination.",
  },
  {
    icon: Shield,
    title: "Governance by Design",
    description:
      "Enterprise-grade guardrails, audit trails, and human-on-the-loop oversight ensure every autonomous action meets compliance and security standards.",
  },
  {
    icon: Target,
    title: "Measurable ROI",
    description:
      "Every deployment is tied to quantifiable business metrics — cost reduction, throughput improvement, error elimination, and time-to-value acceleration.",
  },
];

export function WhyAgenticSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
              The Imperative
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Why enterprises need
              <br />
              <span className="font-normal gradient-text">
                agentic AI now
              </span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
              The gap between companies deploying autonomous AI agents and those
              still relying on passive tools is widening every quarter. The
              competitive advantage is not incremental — it is structural.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <span className="text-3xl font-light tracking-tight block mb-1 gradient-text">
                  10x
                </span>
                <span className="text-[11px] text-muted-foreground tracking-wide font-mono">
                  Process Throughput
                </span>
              </div>
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                <span className="text-3xl font-light tracking-tight block mb-1 gradient-text">
                  85%
                </span>
                <span className="text-[11px] text-muted-foreground tracking-wide font-mono">
                  Error Reduction
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <FadeIn key={reason.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <reason.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-tight mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
