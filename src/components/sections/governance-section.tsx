"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ShieldCheck, Eye, FileCheck, Lock } from "lucide-react";

const governanceFeatures = [
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
    description:
      "Configurable guardrails define what agents can and cannot do, enforced at every execution step with zero-bypass architecture.",
  },
  {
    icon: Eye,
    title: "Human-on-the-Loop",
    description:
      "Critical decisions surface to human operators for approval while routine tasks execute autonomously — the right balance of speed and control.",
  },
  {
    icon: FileCheck,
    title: "Complete Audit Trails",
    description:
      "Every agent action, decision, and data access is logged with full provenance — meeting the most demanding compliance frameworks.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC 2 aligned security architecture with end-to-end encryption, role-based access control, and data residency compliance.",
  },
];

export function GovernanceSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-fine opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
            Trust & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Autonomy with
            <br />
            <span className="font-normal gradient-text">accountability</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Adan Labs agents operate within enterprise-grade governance
            frameworks that ensure every autonomous action is safe, compliant,
            and auditable.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {governanceFeatures.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="flex gap-5 p-8 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
