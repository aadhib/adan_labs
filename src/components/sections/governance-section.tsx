"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

const governanceFeatures = [
  {
    title: "Policy Enforcement",
    description:
      "Configurable guardrails define what agents can and cannot do, enforced at every execution step with zero-bypass architecture.",
  },
  {
    title: "Human-on-the-Loop",
    description:
      "Critical decisions surface to human operators for approval while routine tasks execute autonomously — the right balance of speed and control.",
  },
  {
    title: "Complete Audit Trails",
    description:
      "Every agent action, decision, and data access is logged with full provenance — meeting the most demanding compliance frameworks.",
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2 aligned security architecture with end-to-end encryption, role-based access control, and data residency compliance.",
  },
];

export function GovernanceSection() {
  return (
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <SectionLabel index="07">Trust & Governance</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-8 max-w-[12ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
            Autonomy with{" "}
            <span className="text-accent">accountability</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
            Adan Labs agents operate within enterprise-grade governance
            frameworks that ensure every autonomous action is safe, compliant,
            and auditable.
          </p>
        </FadeIn>
      </div>

      {/* Feature cards — hairline grid, hover flood */}
      <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border md:mt-24 md:grid-cols-2">
        {governanceFeatures.map((feature, i) => (
          <FadeIn key={feature.title} className="h-full">
            <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
              <span className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)] group-hover:text-accent-foreground/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                {feature.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
