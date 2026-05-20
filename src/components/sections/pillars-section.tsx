"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Brain, Database, Network } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    label: "01",
    title: "Advanced Agentic Reasoning",
    description:
      "Our agents employ chain-of-thought reasoning, self-reflection, goal decomposition, and iterative planning to navigate complex enterprise workflows with human-level judgment.",
    capabilities: [
      "Chain-of-Thought Processing",
      "Self-Reflection & Correction",
      "Goal Decomposition",
      "Iterative Planning",
      "Autonomous Tool Use",
      "Execution Autonomy",
    ],
  },
  {
    icon: Database,
    label: "02",
    title: "Cognitive Memory Systems",
    description:
      "Persistent memory architectures that span working, episodic, and semantic layers — enabling agents that evolve with your business and retain critical context across sessions.",
    capabilities: [
      "Working Memory",
      "Episodic Memory",
      "Semantic Memory",
      "Persistent Business Context",
      "Cross-Session Learning",
      "Adaptive Knowledge Graphs",
    ],
  },
  {
    icon: Network,
    label: "03",
    title: "Multi-Agent Orchestration",
    description:
      "Coordinated agent swarms where specialized planners, executors, and validators collaborate in real-time — delivering reliable outcomes across interconnected enterprise processes.",
    capabilities: [
      "Planner Agents",
      "Executor Agents",
      "Validator Agents",
      "Coordinated Workflows",
      "Specialized Expert Agents",
      "Collaborative Swarm Intelligence",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
            Core Technology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Three pillars of
            <br />
            <span className="font-normal gradient-text">
              agentic intelligence
            </span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Every Adan Labs agent is built on a unified architecture that
            combines advanced reasoning, persistent memory, and coordinated
            multi-agent execution.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 lg:p-10 hover:border-primary/20 hover:bg-card/50 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs tracking-wider text-muted-foreground font-mono">
                    {pillar.label}
                  </span>
                </div>

                <h3 className="text-xl font-normal tracking-tight mb-4">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {pillar.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border">
                  <ul className="grid grid-cols-1 gap-2">
                    {pillar.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="text-[11px] tracking-wide text-muted-foreground font-mono"
                      >
                        <span className="text-primary/40 mr-2">/</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
