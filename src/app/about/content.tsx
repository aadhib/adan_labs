"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Reasoning Over Pattern Matching",
    description:
      "We believe the most important AI capability is genuine reasoning — not statistical pattern matching. Every system we build starts with the ability to think, not just predict.",
  },
  {
    title: "Autonomy With Accountability",
    description:
      "Autonomous execution must come with full transparency and governance. We never trade control for speed — our agents are both fast and auditable.",
  },
  {
    title: "Enterprise-First Architecture",
    description:
      "We build for the complexity, security requirements, and scale demands of real enterprise environments — not for demos or prototypes.",
  },
  {
    title: "Outcomes Over Outputs",
    description:
      "We measure success by business outcomes delivered, not by tokens generated. Every deployment is tied to quantifiable impact metrics.",
  },
  {
    title: "Compounding Intelligence",
    description:
      "Through cognitive memory, our systems get better over time. We build for long-term value accumulation, not one-time utility.",
  },
  {
    title: "Interoperability as Foundation",
    description:
      "AI agents must work within existing enterprise ecosystems. We invest deeply in integration capabilities because isolated AI delivers isolated value.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              About Adan Labs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Building the infrastructure
              <br />
              <span className="font-normal gradient-text">for autonomous enterprise</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Adan Labs is an advanced AI company building Agentic Assist
              Technologies — the systems that will power the digital autonomous
              workforce of tomorrow.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
                Not another
                <br />
                <span className="font-normal gradient-text">chatbot company</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Adan Labs was founded on a conviction: the next era of AI is
                not about generating content — it is about autonomous execution.
                We are building AI systems that reason through complex problems,
                plan multi-step solutions, execute across enterprise systems, and
                learn from outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our focus is not on building another assistant. We are building
                the infrastructure for a digital autonomous workforce — AI
                agents that operate alongside human teams, handling the complex,
                multi-step processes that drive real business outcomes.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                {[
                  { metric: "Reasoning-First", description: "Every agent action begins with structured reasoning and transparent decision-making." },
                  { metric: "Enterprise-Grade", description: "Built for the security, compliance, and scale requirements of large organizations." },
                  { metric: "Outcome-Driven", description: "Deployments are measured by business impact, not by AI metrics." },
                ].map((item) => (
                  <div key={item.metric} className="border border-border rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all">
                    <h4 className="text-lg font-normal tracking-tight mb-2">
                      {item.metric}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-8">
              Our Mission
            </span>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-snug mb-8 border-l-2 border-primary/40 pl-6 text-left">
              &ldquo;To build enterprise AI systems that don&rsquo;t just assist
              — but reason, plan, and act with the autonomy and accountability
              that real business outcomes demand.&rdquo;
            </blockquote>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              We believe every enterprise deserves AI that works as hard as its
              people — and we are building the technology to make that possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Now */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
                Why Now
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
                The convergence that makes
                <br />
                <span className="font-normal gradient-text">agentic AI possible</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Three technological advances have converged to make truly
                  autonomous enterprise AI possible for the first time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-medium">Reasoning maturity.</strong>{" "}
                  Advances in chain-of-thought processing and self-reflection
                  have given AI agents the ability to handle genuinely complex,
                  multi-step problems — not just pattern matching.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-medium">Memory architectures.</strong>{" "}
                  Cognitive memory systems now allow agents to retain context
                  across sessions, learn from experience, and build institutional
                  knowledge — transforming tools into partners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-medium">Integration standards.</strong>{" "}
                  The Model Context Protocol (MCP) and similar standards are
                  making it practical to connect AI agents to enterprise systems
                  at scale — breaking the integration barrier that has limited AI
                  impact.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              Design Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Principles that guide
              <br />
              <span className="font-normal gradient-text">everything we build</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="border border-border rounded-xl p-8 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all h-full">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-medium tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              The Future
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-8">
              Where we are going
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We envision a future where every enterprise operates with a digital
              autonomous workforce — AI agents that handle the operational
              complexity of running a business while human teams focus on
              strategy, creativity, and the work that only humans can do.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is not about replacing people. It is about amplifying human
              capability by delegating the complex, repetitive, multi-system
              processes that consume the majority of operational effort today.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Adan Labs is building the infrastructure that makes this vision
              real — one reasoning-first agent, one cognitive memory system, and
              one orchestrated workflow at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
              Join us in building
              <br />
              <span className="font-normal gradient-text">the autonomous enterprise</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you are an enterprise leader, a technology partner, or a
              builder who shares our vision — we would like to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-8 py-3.5 border border-border rounded-full transition-colors"
              >
                Read Our Insights
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
