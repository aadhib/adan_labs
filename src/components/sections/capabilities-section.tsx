"use client";

import { FadeIn } from "@/components/ui/fade-in";
import {
  Brain,
  RefreshCcw,
  GitBranch,
  Wrench,
  Database,
  Users,
  ShieldCheck,
  Plug,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Chain-of-Thought Reasoning",
    description:
      "Agents decompose complex problems through structured reasoning chains, producing transparent decision-making processes.",
  },
  {
    icon: RefreshCcw,
    title: "Self-Reflection",
    description:
      "Continuous self-evaluation loops that catch errors, reassess strategies, and improve execution quality in real-time.",
  },
  {
    icon: GitBranch,
    title: "Goal Decomposition",
    description:
      "High-level business objectives are automatically broken into executable sub-goals with dependency-aware sequencing.",
  },
  {
    icon: Wrench,
    title: "Autonomous Tool Use",
    description:
      "Agents dynamically select and orchestrate APIs, databases, and enterprise tools to accomplish their objectives.",
  },
  {
    icon: Database,
    title: "Persistent Context",
    description:
      "Cognitive memory spans sessions, retaining business context, learned preferences, and accumulated domain knowledge.",
  },
  {
    icon: Users,
    title: "Agent Coordination",
    description:
      "Specialized agents collaborate through structured protocols, delegating tasks and validating results collectively.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Guardrails",
    description:
      "Every action is logged, auditable, and subject to configurable policies that enforce compliance and safety boundaries.",
  },
  {
    icon: Plug,
    title: "Enterprise Integration",
    description:
      "Native MCP support enables seamless interoperability with SAP, Salesforce, ServiceNow, and legacy enterprise systems.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
            Built for enterprise
            <br />
            <span className="font-normal gradient-text">complexity</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 lg:p-8 hover:border-primary/20 hover:bg-card/50 transition-all h-full">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <cap.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-medium tracking-tight mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
