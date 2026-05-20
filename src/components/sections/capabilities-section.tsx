"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

const capabilities = [
  {
    title: "Chain-of-Thought Reasoning",
    description:
      "Agents decompose complex problems through structured reasoning chains, producing transparent decision-making processes.",
  },
  {
    title: "Self-Reflection",
    description:
      "Continuous self-evaluation loops that catch errors, reassess strategies, and improve execution quality in real-time.",
  },
  {
    title: "Goal Decomposition",
    description:
      "High-level business objectives are automatically broken into executable sub-goals with dependency-aware sequencing.",
  },
  {
    title: "Autonomous Tool Use",
    description:
      "Agents dynamically select and orchestrate APIs, databases, and enterprise tools to accomplish their objectives.",
  },
  {
    title: "Persistent Context",
    description:
      "Cognitive memory spans sessions, retaining business context, learned preferences, and accumulated domain knowledge.",
  },
  {
    title: "Agent Coordination",
    description:
      "Specialized agents collaborate through structured protocols, delegating tasks and validating results collectively.",
  },
  {
    title: "Governance & Guardrails",
    description:
      "Every action is logged, auditable, and subject to configurable policies that enforce compliance and safety boundaries.",
  },
  {
    title: "Enterprise Integration",
    description:
      "Native MCP support enables seamless interoperability with SAP, Salesforce, ServiceNow, and legacy systems.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <SectionLabel index="05">Capabilities</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
            Built for enterprise{" "}
            <span className="text-accent">complexity</span>
          </h2>
        </FadeIn>
      </div>

      {/* Hairline grid — hover flood */}
      <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
        {capabilities.map((cap, i) => (
          <FadeIn key={cap.title} delay={(i % 4) * 0.05} className="h-full">
            <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent">
              <span className="font-bold leading-none tracking-tighter text-muted text-[clamp(2.5rem,4vw,3.5rem)] group-hover:text-accent-foreground/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent-foreground">
                {cap.title}
              </h3>
              <p className="mt-3 text-base leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                {cap.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
