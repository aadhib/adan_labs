"use client";

import { FadeIn } from "@/components/ui/fade-in";

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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
            The Future of Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            The workforce of tomorrow
            <br />
            <span className="font-normal gradient-text">is autonomous</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Enterprises are shifting from passive AI tools to intelligent agents
            that reason, plan, and execute — autonomously driving outcomes
            across every function.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 lg:p-12">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase text-center mb-8">
              Enterprise-Ready Interoperability
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center h-12 rounded-lg border border-border bg-background/60 text-sm text-muted-foreground font-mono tracking-wide hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
