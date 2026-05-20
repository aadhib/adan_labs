"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    label: "Operations",
    title: "Operations & Supply Chain",
    description:
      "Autonomous agents that monitor, predict, and optimize supply chain operations — from demand forecasting to logistics coordination.",
    outcome: "40% reduction in supply chain disruptions",
    href: "/solutions#operations",
  },
  {
    label: "Support",
    title: "Customer Support Automation",
    description:
      "Multi-agent systems that resolve complex customer issues end-to-end, escalating intelligently and learning from every interaction.",
    outcome: "70% autonomous resolution rate",
    href: "/solutions#customer-support",
  },
  {
    label: "Finance",
    title: "Finance & Back Office",
    description:
      "Agentic workflows for invoice processing, reconciliation, compliance reporting, and financial planning with full audit trails.",
    outcome: "90% reduction in manual processing",
    href: "/solutions#finance",
  },
  {
    label: "IT Systems",
    title: "IT & Internal Knowledge",
    description:
      "Intelligent agents that manage IT operations, automate ticket resolution, and serve as persistent enterprise knowledge systems.",
    outcome: "60% faster incident resolution",
    href: "/solutions#it",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
              Agentic AI across
              <br />
              <span className="font-normal gradient-text">every function</span>
            </h2>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, i) => (
            <FadeIn key={industry.title} delay={i * 0.1}>
              <Link
                href={industry.href}
                className="group block rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 lg:p-10 hover:border-primary/20 hover:bg-card/50 transition-all h-full"
              >
                <span className="text-[11px] tracking-[0.2em] text-primary/60 uppercase block mb-6 font-mono">
                  {industry.label}
                </span>
                <h3 className="text-lg font-normal tracking-tight mb-3 group-hover:text-foreground transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <span className="text-[11px] text-primary/70 tracking-wide font-mono">
                    {industry.outcome}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
