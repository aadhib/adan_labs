"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "operations",
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
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <FadeIn>
            <SectionLabel>Solutions</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
              Agentic AI for{" "}
              <span className="text-accent">every enterprise function</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-2xl">
              From operations to finance to customer support — Adan Labs agents
              deliver autonomous execution with real, measurable business
              outcomes across your entire organization.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((sol, idx) => (
        <section key={sol.id} id={sol.id} className="border-b-2 border-border">
          <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
            <FadeIn>
              <div className="flex items-center justify-between gap-6">
                <SectionLabel index={String(idx + 1).padStart(2, "0")}>
                  {sol.label}
                </SectionLabel>
                <span
                  aria-hidden="true"
                  className="font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)]"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
                {sol.title}
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border lg:mt-24 lg:grid-cols-2">
              <FadeIn className="h-full">
                <div className="flex h-full flex-col gap-10 bg-background p-8 md:p-12">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-4xl">
                      The <span className="text-accent">Problem</span>
                    </h3>
                    <p className="mt-4 text-lg leading-tight text-muted-foreground">
                      {sol.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-4xl">
                      The Agentic{" "}
                      <span className="text-accent">Solution</span>
                    </h3>
                    <p className="mt-4 text-lg leading-tight text-muted-foreground">
                      {sol.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-4xl">
                      Business <span className="text-accent">Outcomes</span>
                    </h3>
                    <ul className="mt-6 grid grid-cols-1">
                      {sol.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 border-t-2 border-border py-4 text-sm font-bold uppercase tracking-tight text-foreground"
                        >
                          <span aria-hidden="true" className="text-accent">
                            /
                          </span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn className="h-full">
                <div className="flex h-full flex-col bg-background p-8 md:p-12">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-4xl">
                    Sample <span className="text-accent">Workflow</span>
                  </h3>
                  <div className="mt-8 flex flex-col">
                    {sol.workflow.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-baseline gap-6 border-t-2 border-border py-6"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)]"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-lg leading-tight text-muted-foreground">
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
      <section className="border-b-2 border-border bg-accent text-accent-foreground">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-40">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-accent-foreground"
              />
              <span className="text-xs font-bold uppercase tracking-[0.25em] md:text-sm">
                Custom Assessment
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[18ch] font-bold uppercase leading-[0.82] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              See how agentic AI applies to your specific workflows
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-10 max-w-xl text-lg font-medium leading-tight md:text-2xl">
              Every enterprise is unique. Let our team map Adan Labs
              capabilities to your specific processes and quantify the potential
              impact.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-accent-foreground px-10 text-base font-bold uppercase tracking-tighter text-accent transition-transform duration-200 hover:scale-105 active:scale-95 md:h-20 md:px-12 md:text-lg"
              >
                Request a Custom Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/technology"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-transparent px-10 text-base font-bold uppercase tracking-tighter text-accent-foreground transition-colors hover:bg-accent-foreground hover:text-accent active:scale-95 md:h-20 md:px-12 md:text-lg"
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
