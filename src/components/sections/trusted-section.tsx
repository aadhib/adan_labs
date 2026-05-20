"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { KineticMarquee } from "@/components/ui/marquee";

const integrations = [
  "SAP",
  "Salesforce",
  "Google Cloud",
  "Microsoft Azure",
  "ServiceNow",
  "Workday",
];

export function TrustedSection() {
  return (
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
        <FadeIn>
          <SectionLabel index="01">The Future of Work</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-8 max-w-[15ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
            The workforce of tomorrow{" "}
            <span className="text-accent">is autonomous</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
            Enterprises are shifting from passive AI tools to intelligent agents
            that reason, plan, and execute — autonomously driving outcomes
            across every function.
          </p>
        </FadeIn>
      </div>

      {/* Integration marquee — slow rhythm */}
      <div className="border-t-2 border-border py-6">
        <div className="mb-5 px-6 md:px-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Enterprise-ready interoperability
          </span>
        </div>
        <KineticMarquee speed={35}>
          <div className="flex items-center">
            {integrations.map((name) => (
              <span key={name} className="flex items-center">
                <span className="px-8 text-3xl font-bold uppercase tracking-tighter text-foreground md:text-5xl">
                  {name}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-accent md:text-3xl"
                >
                  ✦
                </span>
              </span>
            ))}
          </div>
        </KineticMarquee>
      </div>
    </section>
  );
}
