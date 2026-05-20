"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
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
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <FadeIn>
            <SectionLabel>About Adan Labs</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-8 max-w-[15ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
              Building the infrastructure for{" "}
              <span className="text-accent">autonomous enterprise</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-2xl">
              Adan Labs is an advanced AI company building Agentic Assist
              Technologies — the systems that will power the digital autonomous
              workforce of tomorrow.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="01">Who We Are</SectionLabel>
          </FadeIn>
          <div className="mt-8 grid gap-16 lg:grid-cols-2">
            <div>
              <FadeIn delay={0.05}>
                <h2 className="max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
                  Not another <span className="text-accent">chatbot company</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-8 text-lg leading-tight text-muted-foreground md:text-xl">
                  Adan Labs was founded on a conviction: the next era of AI is
                  not about generating content — it is about autonomous execution.
                  We are building AI systems that reason through complex problems,
                  plan multi-step solutions, execute across enterprise systems, and
                  learn from outcomes.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-6 text-lg leading-tight text-muted-foreground md:text-xl">
                  Our focus is not on building another assistant. We are building
                  the infrastructure for a digital autonomous workforce — AI
                  agents that operate alongside human teams, handling the complex,
                  multi-step processes that drive real business outcomes.
                </p>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 gap-px border-2 border-border bg-border">
              {[
                {
                  metric: "Reasoning-First",
                  description:
                    "Every agent action begins with structured reasoning and transparent decision-making.",
                },
                {
                  metric: "Enterprise-Grade",
                  description:
                    "Built for the security, compliance, and scale requirements of large organizations.",
                },
                {
                  metric: "Outcome-Driven",
                  description:
                    "Deployments are measured by business impact, not by AI metrics.",
                },
              ].map((item) => (
                <FadeIn key={item.metric} className="h-full">
                  <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                      {item.metric}
                    </h3>
                    <p className="mt-4 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                      {item.description}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="02">Our Mission</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <blockquote className="mt-8 max-w-[24ch] border-l-4 border-accent pl-8 font-bold uppercase leading-[0.95] tracking-tighter text-[clamp(2rem,5vw,4.5rem)]">
              To build enterprise AI systems that don&rsquo;t just assist — but
              reason, plan, and act with the autonomy and accountability that
              real business outcomes demand.
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-12 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
              We believe every enterprise deserves AI that works as hard as its
              people — and we are building the technology to make that possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Now */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="03">Why Now</SectionLabel>
          </FadeIn>
          <div className="mt-8 grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeIn delay={0.05}>
              <h2 className="max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
                The convergence that makes{" "}
                <span className="text-accent">agentic AI possible</span>
              </h2>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                  Three technological advances have converged to make truly
                  autonomous enterprise AI possible for the first time.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                  <strong className="font-bold uppercase tracking-tighter text-foreground">
                    Reasoning maturity.
                  </strong>{" "}
                  Advances in chain-of-thought processing and self-reflection
                  have given AI agents the ability to handle genuinely complex,
                  multi-step problems — not just pattern matching.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                  <strong className="font-bold uppercase tracking-tighter text-foreground">
                    Memory architectures.
                  </strong>{" "}
                  Cognitive memory systems now allow agents to retain context
                  across sessions, learn from experience, and build institutional
                  knowledge — transforming tools into partners.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                  <strong className="font-bold uppercase tracking-tighter text-foreground">
                    Integration standards.
                  </strong>{" "}
                  The Model Context Protocol (MCP) and similar standards are
                  making it practical to connect AI agents to enterprise systems
                  at scale — breaking the integration barrier that has limited AI
                  impact.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
          <FadeIn>
            <SectionLabel index="04">Design Philosophy</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Principles that guide{" "}
              <span className="text-accent">everything we build</span>
            </h2>
          </FadeIn>
        </div>

        {/* Value cards — hairline grid, hover flood */}
        <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border md:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <FadeIn key={value.title} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
                <span
                  aria-hidden="true"
                  className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)] group-hover:text-accent-foreground/25"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                  {value.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Future Vision */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="05">The Future</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Where we are <span className="text-accent">going</span>
            </h2>
          </FadeIn>
          <div className="mt-8 max-w-2xl space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                We envision a future where every enterprise operates with a digital
                autonomous workforce — AI agents that handle the operational
                complexity of running a business while human teams focus on
                strategy, creativity, and the work that only humans can do.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                This is not about replacing people. It is about amplifying human
                capability by delegating the complex, repetitive, multi-system
                processes that consume the majority of operational effort today.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                Adan Labs is building the infrastructure that makes this vision
                real — one reasoning-first agent, one cognitive memory system, and
                one orchestrated workflow at a time.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-2 border-border bg-accent text-accent-foreground">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-40">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-accent-foreground" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] md:text-sm">
                Join Us
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[15ch] font-bold uppercase leading-[0.82] tracking-tighter text-[clamp(3rem,10vw,11rem)]">
              Join us in building the autonomous enterprise
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-10 max-w-xl text-lg font-medium leading-tight md:text-2xl">
              Whether you are an enterprise leader, a technology partner, or a
              builder who shares our vision — we would like to hear from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-accent-foreground px-10 text-base font-bold uppercase tracking-tighter text-accent transition-transform duration-200 hover:scale-105 active:scale-95 md:h-20 md:px-12 md:text-lg"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-transparent px-10 text-base font-bold uppercase tracking-tighter text-accent-foreground transition-colors hover:bg-accent-foreground hover:text-accent active:scale-95 md:h-20 md:px-12 md:text-lg"
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
