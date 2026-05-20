"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { FadeIn } from "@/components/ui/fade-in";

const pillars = [
  {
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
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <SectionLabel index="03">Core Technology</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
            Three pillars of{" "}
            <span className="text-accent">agentic intelligence</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
            Every Adan Labs agent is built on a unified architecture that
            combines advanced reasoning, persistent memory, and coordinated
            multi-agent execution.
          </p>
        </FadeIn>
      </div>

      {/* Sticky stacking cards */}
      <div className="mt-16 md:mt-24">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="sticky top-20">
            <article className="group flex min-h-[86vh] flex-col justify-center border-t-2 border-border bg-background px-6 py-16 transition-colors duration-300 hover:bg-accent md:px-12">
              <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
                <div>
                  <span className="block font-bold leading-[0.8] tracking-tighter text-muted text-[clamp(6rem,16vw,15rem)] group-hover:text-accent-foreground/20">
                    {pillar.label}
                  </span>
                  <h3 className="mt-4 max-w-[12ch] font-bold uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,4.5vw,4rem)] group-hover:text-accent-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl leading-tight text-muted-foreground group-hover:text-accent-foreground/80 md:text-2xl">
                    {pillar.description}
                  </p>
                  <ul className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                    {pillar.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-3 border-t-2 border-border py-3 text-sm font-bold uppercase tracking-tight text-foreground group-hover:border-accent-foreground/20 group-hover:text-accent-foreground"
                      >
                        <span aria-hidden="true" className="text-accent group-hover:text-accent-foreground">
                          /
                        </span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
