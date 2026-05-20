"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

const articles = [
  {
    slug: "agentic-ai-enterprise-2026",
    category: "Industry",
    title: "The State of Agentic AI in Enterprise: 2026 Outlook",
    excerpt:
      "How reasoning-first architectures are reshaping enterprise automation and why the shift from generative to agentic AI is accelerating.",
    date: "April 2026",
    readTime: "8 min read",
  },
  {
    slug: "cognitive-memory-systems",
    category: "Technology",
    title: "Why Cognitive Memory Is the Missing Layer in Enterprise AI",
    excerpt:
      "Most AI systems forget everything between sessions. We explore why persistent cognitive memory is essential for real business intelligence.",
    date: "March 2026",
    readTime: "6 min read",
  },
  {
    slug: "multi-agent-orchestration-guide",
    category: "Engineering",
    title: "Multi-Agent Orchestration: Architecture for Autonomous Workflows",
    excerpt:
      "A deep dive into how planner, executor, and validator agents collaborate to deliver reliable outcomes in complex enterprise environments.",
    date: "March 2026",
    readTime: "10 min read",
  },
];

export function InsightsPreview() {
  return (
    <section className="border-b-2 border-border">
      <div className="mx-auto w-full max-w-[1760px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <SectionLabel index="08">Insights</SectionLabel>
        </FadeIn>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn delay={0.05}>
            <h2 className="font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              Latest <span className="text-accent">thinking</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-tighter text-foreground transition-colors hover:text-accent"
            >
              View all insights
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Article cards — hairline grid, hover flood */}
      <div className="mt-16 grid grid-cols-1 gap-px border-t-2 border-border bg-border md:mt-24 md:grid-cols-3">
        {articles.map((article) => (
          <FadeIn key={article.slug} className="h-full">
            <Link
              href={`/insights/${article.slug}`}
              className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent group-hover:text-accent-foreground">
                  {article.category}
                </span>
                <span className="text-xs font-bold uppercase tracking-tight text-muted-foreground group-hover:text-accent-foreground/70">
                  {article.readTime}
                </span>
              </div>
              <h3 className="mt-8 font-bold uppercase leading-[0.95] tracking-tighter text-foreground text-[clamp(1.5rem,2vw,2rem)] group-hover:text-accent-foreground">
                {article.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                {article.excerpt}
              </p>
              <div className="mt-8 flex items-center justify-between border-t-2 border-border pt-5 group-hover:border-accent-foreground/20">
                <span className="text-sm font-bold uppercase tracking-tight text-muted-foreground group-hover:text-accent-foreground">
                  {article.date}
                </span>
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-foreground" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
