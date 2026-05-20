"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Objective Intake",
    description:
      "A business objective enters the system — either from a human operator, an upstream agent, or an automated trigger. The planner agent decomposes it into a structured goal tree.",
  },
  {
    number: "02",
    title: "Reasoning & Planning",
    description:
      "The planning agent applies chain-of-thought reasoning to determine the optimal execution strategy, identifying required tools, data sources, and dependencies.",
  },
  {
    number: "03",
    title: "Agent Allocation",
    description:
      "The orchestrator assigns specialized executor agents to each sub-task — routing to domain-specific agents with the right capabilities and access permissions.",
  },
  {
    number: "04",
    title: "Autonomous Execution",
    description:
      "Executor agents carry out their tasks using enterprise tools, APIs, and databases. They self-reflect at each step, correcting course when intermediate results deviate.",
  },
  {
    number: "05",
    title: "Validation & Learning",
    description:
      "Validator agents verify outputs against success criteria. Results are committed to cognitive memory, improving future performance across similar workflows.",
  },
  {
    number: "06",
    title: "Outcome Delivery",
    description:
      "The completed outcome is delivered with a full audit trail — every decision, tool invocation, and data access is logged for governance and continuous improvement.",
  },
];

const faqItems = [
  {
    q: "How does Adan Labs differ from traditional RPA or workflow automation?",
    a: "Traditional RPA follows rigid, pre-programmed scripts that break when processes change. Adan Labs agents reason through novel situations, adapt to changing conditions, and handle exceptions autonomously — delivering true process intelligence rather than brittle automation.",
  },
  {
    q: "What is the Model Context Protocol (MCP) and why does it matter?",
    a: "MCP is an open standard for connecting AI agents to enterprise tools and data sources. Adan Labs implements MCP natively, enabling our agents to seamlessly integrate with SAP, Salesforce, Google Cloud, ServiceNow, and legacy systems without custom integration work.",
  },
  {
    q: "How do cognitive memory systems work?",
    a: "Our cognitive memory architecture operates across three layers: working memory for active task context, episodic memory for past interactions and outcomes, and semantic memory for domain knowledge. Together, these layers enable agents that learn, adapt, and improve over time.",
  },
  {
    q: "What governance controls are available?",
    a: "Every Adan Labs deployment includes configurable policy engines, role-based access controls, human-on-the-loop approval workflows, complete audit logging, data residency controls, and compliance reporting aligned with SOC 2, GDPR, and industry-specific frameworks.",
  },
  {
    q: "How do multi-agent systems coordinate without conflicts?",
    a: "Our orchestration layer uses structured communication protocols, shared state management, and conflict resolution algorithms. Planner agents define execution graphs, executor agents claim tasks through atomic operations, and validator agents ensure consistency across all outputs.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`border-2 transition-colors duration-300 ${
        isOpen ? "border-accent bg-accent" : "border-border bg-background"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 p-6 text-left outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:p-8"
      >
        <span
          className={`text-lg font-bold uppercase tracking-tighter md:text-xl ${
            isOpen ? "text-accent-foreground" : "text-foreground"
          }`}
        >
          {q}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`size-6 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-accent-foreground" : "text-accent"
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-8 md:px-8">
          <p className="max-w-3xl text-lg leading-tight text-accent-foreground/80">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export function TechnologyContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <FadeIn>
            <SectionLabel>Technology</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
              The architecture behind{" "}
              <span className="text-accent">agentic intelligence</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-2xl">
              Adan Labs is built on a unified architecture that combines
              advanced reasoning, persistent cognitive memory, and multi-agent
              orchestration — purpose-built for autonomous enterprise execution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Agentic Reasoning */}
      <section id="reasoning" className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="01">Pillar 01</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Advanced Agentic{" "}
              <span className="text-accent">Reasoning</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                Our reasoning engine goes beyond simple prompt-response cycles.
                Adan Labs agents employ structured chain-of-thought processing
                to decompose complex objectives, evaluate multiple solution
                paths, and self-correct during execution — mirroring the
                deliberate reasoning of expert human operators.
              </p>
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                Every reasoning step is transparent and auditable. The agent
                explicitly records its thought process, the alternatives it
                considered, and why it chose a particular action — creating a
                complete cognitive trace that builds trust with enterprise
                stakeholders.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Capability cards — hairline grid, hover flood */}
        <div className="grid grid-cols-1 gap-px border-t-2 border-border bg-border md:grid-cols-3">
          {[
            {
              title: "Chain-of-Thought Processing",
              text: "Structured reasoning chains that break complex problems into logical steps with explicit intermediate conclusions.",
            },
            {
              title: "Self-Reflection & Correction",
              text: "Continuous evaluation loops that detect errors, reassess strategies, and improve execution quality in real-time.",
            },
            {
              title: "Goal Decomposition",
              text: "Automatic breakdown of high-level business objectives into executable sub-goals with dependency-aware sequencing.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
                <span className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)] group-hover:text-accent-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                  {item.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Cognitive Memory */}
      <section id="memory" className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="02">Pillar 02</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Cognitive Memory{" "}
              <span className="text-accent">Systems</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                Most AI systems have no persistent memory — every interaction
                starts from zero. Adan Labs agents maintain rich cognitive
                memory that spans sessions, retaining business context, learned
                preferences, and accumulated domain knowledge.
              </p>
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                This means your agents get better over time. They remember past
                decisions, understand your business processes deeply, and build
                institutional knowledge that compounds with every workflow
                executed.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Memory layers — hairline grid with progress bars */}
        <div className="grid grid-cols-1 gap-px border-t-2 border-border bg-border md:grid-cols-3">
          {[
            {
              layer: "Working Memory",
              description:
                "Active task context, intermediate results, and real-time execution state. The agent's immediate cognitive workspace.",
              capacity: "Active Session",
            },
            {
              layer: "Episodic Memory",
              description:
                "Records of past interactions, decisions, and outcomes. Enables pattern recognition and experience-based reasoning.",
              capacity: "Cross-Session",
            },
            {
              layer: "Semantic Memory",
              description:
                "Deep domain knowledge, business rules, organizational context, and learned relationships between concepts.",
              capacity: "Persistent",
            },
          ].map((mem, i) => (
            <FadeIn key={mem.layer} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                    {mem.layer}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent group-hover:text-accent-foreground">
                    {mem.capacity}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                  {mem.description}
                </p>
                <div className="mt-8 h-2 bg-border group-hover:bg-accent-foreground/20">
                  <div
                    className="h-full bg-accent group-hover:bg-accent-foreground"
                    style={{ width: `${100 - i * 25}%` }}
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Multi-Agent Orchestration */}
      <section id="orchestration" className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="03">Pillar 03</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Multi-Agent{" "}
              <span className="text-accent">Orchestration</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                Complex enterprise processes require more than a single agent.
                Adan Labs deploys coordinated agent swarms where specialized
                planners, executors, and validators collaborate in real-time.
              </p>
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                Each agent type brings distinct capabilities. Planner agents
                decompose objectives. Executor agents carry out tasks with
                domain expertise. Validator agents verify outputs. The
                orchestration layer coordinates everything through structured
                protocols with conflict resolution.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Agent role cards — hairline grid, hover flood */}
        <div className="grid grid-cols-1 gap-px border-t-2 border-border bg-border sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: "Planner Agents", description: "Strategic decomposition and execution planning" },
            { title: "Executor Agents", description: "Domain-specific task execution and tool use" },
            { title: "Validator Agents", description: "Output verification and quality assurance" },
            { title: "Coordinator Agents", description: "Workflow management and conflict resolution" },
            { title: "Expert Agents", description: "Specialized domain knowledge and analysis" },
            { title: "Monitor Agents", description: "Real-time observation and alerting" },
          ].map((agent, i) => (
            <FadeIn key={agent.title} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
                <span className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)] group-hover:text-accent-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                  {agent.title}
                </h3>
                <p className="mt-4 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                  {agent.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="04">Governance Architecture</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Enterprise-grade trust{" "}
              <span className="text-accent">at every layer</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
              Governance is not an afterthought — it is woven into the
              architecture. Every agent action passes through configurable
              policy engines, role-based access controls, and audit systems
              that meet the most demanding enterprise compliance requirements.
            </p>
          </FadeIn>
        </div>

        {/* Governance cards — hairline grid, hover flood */}
        <div className="grid grid-cols-1 gap-px border-t-2 border-border bg-border sm:grid-cols-3">
          {[
            {
              title: "Policy Engine",
              description:
                "Define granular rules for what agents can access, modify, and execute. Policies are version-controlled and testable.",
            },
            {
              title: "Audit & Compliance",
              description:
                "Every decision and data access is logged with full provenance. Generate compliance reports for SOC 2, GDPR, HIPAA, and more.",
            },
            {
              title: "Human-on-the-Loop",
              description:
                "Configure approval workflows for high-stakes decisions while routine tasks execute autonomously at machine speed.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
                <span className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)] group-hover:text-accent-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* MCP & Interoperability */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="05">Interoperability</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              MCP-Native Enterprise{" "}
              <span className="text-accent">Integration</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                The Model Context Protocol (MCP) is the open standard for
                connecting AI agents to enterprise tools. Adan Labs implements
                MCP natively, enabling seamless integration with your existing
                technology stack — no custom middleware required.
              </p>
              <p className="text-lg leading-tight text-muted-foreground md:text-xl">
                Whether your systems run on SAP, Salesforce, Google Cloud,
                Azure, ServiceNow, or legacy on-premise infrastructure, Adan
                Labs agents connect through standardized MCP interfaces with
                full security and data governance.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Supported integrations — hairline grid */}
        <div className="grid grid-cols-2 gap-px border-t-2 border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {[
            "SAP S/4HANA",
            "Salesforce",
            "Google Cloud",
            "Microsoft Azure",
            "ServiceNow",
            "Workday",
            "Oracle ERP",
            "Slack & Teams",
            "Jira & Confluence",
            "Custom REST APIs",
            "SFTP & Databases",
            "Legacy Systems",
          ].map((integration) => (
            <FadeIn key={integration} className="h-full">
              <div className="group flex h-full items-center gap-3 bg-background p-8 transition-colors duration-300 hover:bg-accent">
                <span
                  aria-hidden="true"
                  className="font-bold text-accent group-hover:text-accent-foreground"
                >
                  /
                </span>
                <span className="text-sm font-bold uppercase tracking-tight text-foreground group-hover:text-accent-foreground">
                  {integration}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How Agents Operate */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="06">Workflow Lifecycle</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              How Adan Labs agents{" "}
              <span className="text-accent">operate</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
              From objective intake to outcome delivery, every step is
              autonomous, auditable, and governed.
            </p>
          </FadeIn>
        </div>

        {/* Workflow steps — hairline grid, hover flood */}
        <div className="grid grid-cols-1 gap-px border-t-2 border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <FadeIn key={step.number} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12">
                <span className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)] group-hover:text-accent-foreground/25">
                  {step.number}
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent-foreground md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                  {step.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="07">FAQ</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Frequently asked{" "}
              <span className="text-accent">questions</span>
            </h2>
          </FadeIn>

          <div className="mt-16 flex max-w-4xl flex-col gap-4 md:mt-24">
            {faqItems.map((item) => (
              <FadeIn key={item.q}>
                <FAQItem q={item.q} a={item.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-2 border-border bg-accent text-accent-foreground">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-40">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-accent-foreground"
              />
              <span className="text-xs font-bold uppercase tracking-[0.25em] md:text-sm">
                Technical Demo
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[18ch] font-bold uppercase leading-[0.82] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Explore what agentic AI can do for your enterprise
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-10 max-w-xl text-lg font-medium leading-tight md:text-2xl">
              Schedule a technical deep-dive with our architecture team to
              evaluate Adan Labs for your specific use cases.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-accent-foreground px-10 text-base font-bold uppercase tracking-tighter text-accent transition-transform duration-200 hover:scale-105 active:scale-95 md:h-20 md:px-12 md:text-lg"
              >
                Request a Technical Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-transparent px-10 text-base font-bold uppercase tracking-tighter text-accent-foreground transition-colors hover:bg-accent-foreground hover:text-accent active:scale-95 md:h-20 md:px-12 md:text-lg"
              >
                View Solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
