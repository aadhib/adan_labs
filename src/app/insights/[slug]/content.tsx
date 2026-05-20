"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles";

export function ArticleContent({ article }: { article: Article }) {
  return (
    <>
      {/* Article Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                {article.category}
              </span>
              <span className="text-border">|</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {article.date}
              </span>
              <span className="text-border">|</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {article.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15]">
              {article.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-6">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed ${i === 0 ? "text-foreground/90 text-lg" : "text-muted-foreground"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Article Footer */}
          <FadeIn>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Insights
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  Discuss with Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Newsletter */}
          <FadeIn>
            <div className="mt-16 bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-10 text-center">
              <h3 className="text-lg font-light tracking-tight mb-3">
                More insights like this
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Get our latest research on agentic AI and enterprise automation
                delivered directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-2.5 text-sm bg-card/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                />
                <button className="inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
