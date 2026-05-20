"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles";

export function ArticleContent({ article }: { article: Article }) {
  return (
    <>
      {/* Article Header */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <FadeIn>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-tighter text-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.25em]">
              <span className="text-accent">{article.category}</span>
              <span aria-hidden="true" className="text-border">/</span>
              <span className="text-muted-foreground">{article.date}</span>
              <span aria-hidden="true" className="text-border">/</span>
              <span className="text-muted-foreground">{article.readTime}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-8 max-w-[18ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
              {article.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Article Body */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <div className="space-y-8">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-xl font-medium leading-tight text-foreground md:text-2xl"
                      : "text-lg leading-relaxed text-muted-foreground"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Article Footer */}
          <FadeIn>
            <div className="mt-20 border-t-2 border-border pt-10">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/insights"
                  className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-tighter text-foreground transition-colors hover:text-accent"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  All Insights
                </Link>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "accent" })}
                >
                  Discuss with Our Team
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-b-2 border-border bg-accent text-accent-foreground">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-accent-foreground" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] md:text-sm">
                Newsletter
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 max-w-[15ch] font-bold uppercase leading-[0.82] tracking-tighter text-[clamp(2.5rem,7vw,6.5rem)]">
              More insights like this
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-xl text-lg font-medium leading-tight md:text-2xl">
              Get our latest research on agentic AI and enterprise automation
              delivered directly.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 flex max-w-xl flex-col gap-4 sm:flex-row">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-none border-2 border-accent-foreground bg-transparent px-5 text-sm font-bold uppercase tracking-tight text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-foreground"
              />
              <button
                type="button"
                className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-accent-foreground px-8 text-sm font-bold uppercase tracking-tighter text-accent transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
