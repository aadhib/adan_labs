"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

const industries = [
  {
    label: "Operations",
    title: "Operations & Supply Chain",
    description:
      "Autonomous agents that monitor, predict, and optimize supply chain operations — from demand forecasting to logistics coordination.",
    outcome: "40% fewer supply chain disruptions",
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
    outcome: "90% less manual processing",
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
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <SectionLabel index="06">Use Cases</SectionLabel>
        </FadeIn>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn delay={0.05}>
            <h2 className="max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Agentic AI across{" "}
              <span className="text-accent">every function</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-tighter text-foreground transition-colors hover:text-accent"
            >
              View all solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Industry link cards — hairline grid, hover flood */}
      <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border md:mt-24 md:grid-cols-2">
        {industries.map((industry) => (
          <FadeIn key={industry.title} className="h-full">
            <Link
              href={industry.href}
              className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent group-hover:text-accent-foreground">
                {industry.label}
              </span>
              <h3 className="mt-6 max-w-[14ch] font-bold uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(1.75rem,3vw,2.75rem)] transition-transform duration-300 group-hover:translate-x-3 group-hover:text-accent-foreground">
                {industry.title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                {industry.description}
              </p>
              <div className="mt-8 flex items-center justify-between border-t-2 border-border pt-5 group-hover:border-accent-foreground/20">
                <span className="text-sm font-bold uppercase tracking-tight text-foreground group-hover:text-accent-foreground">
                  {industry.outcome}
                </span>
                <ArrowRight className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-foreground" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
