"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Database,
  Network,
  ShieldCheck,
  Plug,
  ChevronDown,
  Workflow,
  Sparkles,
  BarChart3,
} from "lucide-react";
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
      className={`border rounded-xl overflow-hidden transition-all ${isOpen ? "border-primary/20 bg-primary/[0.03]" : "border-border"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
      >
        <span className="text-sm font-medium pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function TechnologyContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              Technology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              The architecture behind
              <br />
              <span className="font-normal">agentic intelligence</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Adan Labs is built on a unified architecture that combines
              advanced reasoning, persistent cognitive memory, and multi-agent
              orchestration — purpose-built for autonomous enterprise execution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Agentic Reasoning */}
      <section id="reasoning" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                  Pillar 01
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
                Advanced Agentic
                <br />
                <span className="font-normal gradient-text">Reasoning</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our reasoning engine goes beyond simple prompt-response cycles.
                Adan Labs agents employ structured chain-of-thought processing
                to decompose complex objectives, evaluate multiple solution
                paths, and self-correct during execution — mirroring the
                deliberate reasoning of expert human operators.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every reasoning step is transparent and auditable. The agent
                explicitly records its thought process, the alternatives it
                considered, and why it chose a particular action — creating a
                complete cognitive trace that builds trust with enterprise
                stakeholders.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border border-border rounded-2xl p-8 bg-card/30 backdrop-blur-sm space-y-5">
                {[
                  {
                    icon: Sparkles,
                    title: "Chain-of-Thought Processing",
                    text: "Structured reasoning chains that break complex problems into logical steps with explicit intermediate conclusions.",
                  },
                  {
                    icon: BarChart3,
                    title: "Self-Reflection & Correction",
                    text: "Continuous evaluation loops that detect errors, reassess strategies, and improve execution quality in real-time.",
                  },
                  {
                    icon: Workflow,
                    title: "Goal Decomposition",
                    text: "Automatic breakdown of high-level business objectives into executable sub-goals with dependency-aware sequencing.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/20 hover:bg-card/50 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cognitive Memory */}
      <section id="memory" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn className="lg:order-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                  Pillar 02
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
                Cognitive Memory
                <br />
                <span className="font-normal gradient-text">Systems</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Most AI systems have no persistent memory — every interaction
                starts from zero. Adan Labs agents maintain rich cognitive
                memory that spans sessions, retaining business context, learned
                preferences, and accumulated domain knowledge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This means your agents get better over time. They remember past
                decisions, understand your business processes deeply, and build
                institutional knowledge that compounds with every workflow
                executed.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:order-1">
              <div className="space-y-4">
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
                  <div
                    key={mem.layer}
                    className="border border-border rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium">{mem.layer}</h4>
                      <span className="text-[11px] font-mono tracking-wider text-muted-foreground">
                        {mem.capacity}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {mem.description}
                    </p>
                    <div className="mt-4 h-1 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full bg-primary/20 rounded-full"
                        style={{ width: `${100 - i * 25}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Multi-Agent Orchestration */}
      <section id="orchestration" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Network className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                  Pillar 03
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
                Multi-Agent
                <br />
                <span className="font-normal gradient-text">Orchestration</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Complex enterprise processes require more than a single agent.
                Adan Labs deploys coordinated agent swarms where specialized
                planners, executors, and validators collaborate in real-time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each agent type brings distinct capabilities. Planner agents
                decompose objectives. Executor agents carry out tasks with
                domain expertise. Validator agents verify outputs. The
                orchestration layer coordinates everything through structured
                protocols with conflict resolution.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Planner Agents", description: "Strategic decomposition and execution planning" },
                  { title: "Executor Agents", description: "Domain-specific task execution and tool use" },
                  { title: "Validator Agents", description: "Output verification and quality assurance" },
                  { title: "Coordinator Agents", description: "Workflow management and conflict resolution" },
                  { title: "Expert Agents", description: "Specialized domain knowledge and analysis" },
                  { title: "Monitor Agents", description: "Real-time observation and alerting" },
                ].map((agent) => (
                  <div
                    key={agent.title}
                    className="border border-border rounded-xl p-5 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all"
                  >
                    <h4 className="text-sm font-medium mb-2">{agent.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                Governance Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
              Enterprise-grade trust
              <br />
              <span className="font-normal gradient-text">at every layer</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Governance is not an afterthought — it is woven into the
              architecture. Every agent action passes through configurable policy
              engines, role-based access controls, and audit systems that meet
              the most demanding enterprise compliance requirements.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-6">
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-border rounded-xl p-8 bg-card/30 backdrop-blur-sm text-center hover:border-primary/20 hover:bg-card/50 transition-all"
                >
                  <h4 className="text-sm font-medium mb-3">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MCP & Interoperability */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Plug className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                  Interoperability
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
                MCP-Native Enterprise
                <br />
                <span className="font-normal gradient-text">Integration</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Model Context Protocol (MCP) is the open standard for
                connecting AI agents to enterprise tools. Adan Labs implements
                MCP natively, enabling seamless integration with your existing
                technology stack — no custom middleware required.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether your systems run on SAP, Salesforce, Google Cloud, Azure,
                ServiceNow, or legacy on-premise infrastructure, Adan Labs
                agents connect through standardized MCP interfaces with full
                security and data governance.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border border-border rounded-2xl p-8 bg-card/30 backdrop-blur-sm">
                <h4 className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase mb-6">
                  Supported Integrations
                </h4>
                <div className="grid grid-cols-2 gap-3">
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
                    <div
                      key={integration}
                      className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-primary/10 border border-primary/20 hover:border-primary/20 hover:bg-card/50 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      {integration}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How Agents Operate */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              Workflow Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
              How Adan Labs agents
              <br />
              <span className="font-normal gradient-text">operate</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From objective intake to outcome delivery, every step is
              autonomous, auditable, and governed.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="flex gap-6 p-6 border border-border rounded-xl bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all">
                  <span className="font-mono text-2xl font-light text-foreground/20 shrink-0 w-10">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-sm font-medium mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Frequently asked
              <br />
              <span className="font-normal gradient-text">questions</span>
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item) => (
              <FadeIn key={item.q}>
                <FAQItem q={item.q} a={item.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
              Explore what agentic AI
              <br />
              <span className="font-normal gradient-text">can do for your enterprise</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Schedule a technical deep-dive with our architecture team to
              evaluate Adan Labs for your specific use cases.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Request a Technical Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-8 py-3.5 border border-border rounded-full hover:border-primary/30 transition-colors"
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
