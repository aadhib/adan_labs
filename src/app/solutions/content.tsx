"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Headphones,
  Calculator,
  Monitor,
  Scale,
  Cog,
} from "lucide-react";

const solutions = [
  {
    id: "operations",
    icon: Truck,
    label: "Operations",
    title: "Operations & Supply Chain",
    problem:
      "Supply chain teams spend 60% of their time on reactive firefighting — manually tracking shipments, reconciling inventory discrepancies, and coordinating across siloed systems.",
    solution:
      "Adan Labs deploys autonomous agents that continuously monitor supply chain signals, predict disruptions before they occur, and execute corrective actions across procurement, logistics, and inventory systems.",
    outcomes: [
      "40% reduction in supply chain disruptions",
      "Real-time inventory optimization across warehouses",
      "Automated supplier communication and order management",
      "Predictive demand forecasting with autonomous replenishment",
    ],
    workflow: [
      "Monitor real-time signals from ERP, WMS, and logistics providers",
      "Detect anomalies and predict disruptions using reasoning engine",
      "Generate and evaluate corrective action plans",
      "Execute approved actions across enterprise systems",
      "Report outcomes and update cognitive memory",
    ],
  },
  {
    id: "customer-support",
    icon: Headphones,
    label: "Support",
    title: "Customer Support Automation",
    problem:
      "Traditional chatbots handle simple FAQs but escalate everything else. Complex issues bounce between agents, creating frustrating customer experiences and high operational costs.",
    solution:
      "Multi-agent systems that understand customer context deeply, resolve complex multi-step issues autonomously, and learn from every interaction to improve continuously.",
    outcomes: [
      "70% autonomous resolution rate for complex issues",
      "85% reduction in average handling time",
      "Persistent customer context across all channels",
      "Intelligent escalation with full context handoff",
    ],
    workflow: [
      "Intake customer issue with full historical context from memory",
      "Classify complexity and route to appropriate agent swarm",
      "Execute resolution steps across CRM, billing, and product systems",
      "Validate resolution with customer satisfaction prediction",
      "Update knowledge base and improve future handling",
    ],
  },
  {
    id: "finance",
    icon: Calculator,
    label: "Finance",
    title: "Finance & Back Office",
    problem:
      "Finance teams drown in manual processes — invoice matching, reconciliation, compliance reporting, and exception handling consume thousands of hours that could drive strategic value.",
    solution:
      "Agentic workflows that autonomously process invoices, perform reconciliation, generate compliance reports, and handle exceptions — all with complete audit trails for regulatory confidence.",
    outcomes: [
      "90% reduction in manual invoice processing time",
      "99.5% accuracy in automated reconciliation",
      "Automated compliance report generation",
      "Full audit trail for every financial transaction",
    ],
    workflow: [
      "Ingest documents from email, portals, and ERP systems",
      "Extract, validate, and cross-reference financial data",
      "Execute matching, coding, and approval workflows",
      "Flag exceptions for human review with recommendations",
      "Generate audit-ready documentation and reports",
    ],
  },
  {
    id: "it",
    icon: Monitor,
    label: "IT Systems",
    title: "IT & Internal Knowledge Systems",
    problem:
      "IT teams are overwhelmed with repetitive tickets, knowledge is siloed in individuals, and institutional knowledge walks out the door with every departure.",
    solution:
      "Intelligent agents that serve as persistent enterprise knowledge systems — resolving IT tickets autonomously, managing infrastructure, and preserving institutional knowledge permanently.",
    outcomes: [
      "60% faster incident resolution",
      "Persistent institutional knowledge that never leaves",
      "Automated infrastructure monitoring and remediation",
      "Self-improving knowledge base from every interaction",
    ],
    workflow: [
      "Receive incident from monitoring system or employee request",
      "Query semantic memory for similar past incidents and resolutions",
      "Diagnose root cause through automated investigation steps",
      "Execute remediation or escalate with full diagnostic context",
      "Update knowledge graph with new resolution patterns",
    ],
  },
  {
    id: "legal",
    icon: Scale,
    label: "Legal",
    title: "Legal & Compliance Workflows",
    problem:
      "Legal teams spend excessive time on contract review, regulatory monitoring, and compliance documentation — high-value work buried under repetitive processing.",
    solution:
      "Agentic systems that review contracts against policy, monitor regulatory changes, flag compliance risks, and prepare documentation — with human-on-the-loop for critical decisions.",
    outcomes: [
      "80% reduction in contract review time",
      "Automated regulatory change monitoring and impact analysis",
      "Proactive compliance risk identification",
      "Consistent policy application across all documents",
    ],
    workflow: [
      "Ingest contracts, regulations, and policy documents",
      "Analyze against internal policies and regulatory requirements",
      "Flag deviations, risks, and missing clauses",
      "Generate redline recommendations for human review",
      "Track compliance status across all active agreements",
    ],
  },
  {
    id: "enterprise",
    icon: Cog,
    label: "Enterprise",
    title: "Enterprise Process Automation",
    problem:
      "Cross-functional processes span multiple departments and systems — creating handoff delays, data inconsistencies, and execution gaps that no single-point automation can address.",
    solution:
      "End-to-end process orchestration with multi-agent swarms that coordinate across departments, systems, and stakeholders — delivering complete business outcomes, not just task completions.",
    outcomes: [
      "10x throughput improvement on cross-functional processes",
      "Elimination of manual handoffs between departments",
      "Real-time process visibility and bottleneck detection",
      "Continuous process optimization through cognitive memory",
    ],
    workflow: [
      "Map end-to-end process across all involved systems and stakeholders",
      "Deploy specialized agent teams for each process phase",
      "Coordinate handoffs through orchestration protocols",
      "Monitor execution and resolve bottlenecks autonomously",
      "Deliver outcome with complete process audit trail",
    ],
  },
];

export function SolutionsContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Agentic AI for
              <br />
              <span className="font-normal gradient-text">every enterprise function</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From operations to finance to customer support — Adan Labs agents
              deliver autonomous execution with real, measurable business
              outcomes across your entire organization.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((sol, idx) => (
        <section
          key={sol.id}
          id={sol.id}
          className="relative py-24 lg:py-32 overflow-hidden"
        >
          <div className={`absolute inset-0 ${idx % 2 === 0 ? 'bg-section-glow' : 'bg-section-glow-alt'} pointer-events-none`} />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <sol.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                  {sol.label}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground/60 ml-auto">
                  {String(idx + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">
                <span className="gradient-text">{sol.title}</span>
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
                      The Problem
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {sol.problem}
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
                      The Agentic Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {sol.solution}
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
                      Business Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {sol.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                          <span className="text-sm text-foreground/80">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.2}>
                <div className="border border-border rounded-2xl p-8 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all h-full">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
                    Sample Workflow
                  </h3>
                  <div className="space-y-4">
                    {sol.workflow.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="font-mono text-lg font-light text-foreground/15 shrink-0 w-7">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-section-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
              See how agentic AI applies
              <br />
              <span className="font-normal gradient-text">to your specific workflows</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Every enterprise is unique. Let our team map Adan Labs
              capabilities to your specific processes and quantify the potential
              impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Request a Custom Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-8 py-3.5 border border-border rounded-full hover:border-primary/30 transition-colors"
              >
                Explore Technology
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
