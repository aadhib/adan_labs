"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-section-glow-alt pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
              Insights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
              Latest thinking
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.1}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block h-full"
              >
                <article className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 hover:border-primary/20 hover:bg-card/50 transition-all h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] tracking-[0.2em] text-primary/60 uppercase font-mono">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-medium tracking-tight mb-3 group-hover:text-foreground transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <span className="text-[11px] text-muted-foreground font-mono">
                      {article.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
