"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { articles } from "@/lib/articles";

const categories = ["All", "Industry", "Technology", "Engineering", "Governance"];

export function InsightsContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = articles[0];

  return (
    <>
      {/* Page Hero */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <FadeIn>
            <SectionLabel>Insights</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
              Research &amp; perspectives on{" "}
              <span className="text-accent">agentic AI</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-2xl">
              Deep analysis on enterprise AI strategy, reasoning architectures,
              cognitive memory, multi-agent systems, and the future of
              autonomous enterprise operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="01">Featured</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05} className="mt-12">
            <Link
              href={`/insights/${featured.slug}`}
              className="group block border-2 border-border bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-12"
            >
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent-foreground group-hover:bg-accent-foreground group-hover:text-accent">
                      Featured
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent group-hover:text-accent-foreground">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="mt-8 font-bold uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,4vw,3.5rem)] group-hover:text-accent-foreground">
                    {featured.title}
                  </h2>
                  <p className="mt-6 text-lg leading-tight text-muted-foreground group-hover:text-accent-foreground/80">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-muted-foreground group-hover:text-accent-foreground/70">
                    <span>{featured.date}</span>
                    <span aria-hidden="true">/</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="flex aspect-[4/3] w-full items-center justify-center border-2 border-border bg-background group-hover:border-accent-foreground/20">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted group-hover:text-accent-foreground/40">
                      Adan Labs Insights
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Filters & Articles */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <FadeIn>
            <SectionLabel index="02">All Articles</SectionLabel>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.05} className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`h-12 rounded-none border-2 px-5 text-xs font-bold uppercase tracking-tight transition-colors duration-200 ${
                    activeCategory === cat
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative lg:w-72">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                aria-label="Search insights"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-none border-2 border-border bg-transparent pl-11 pr-4 text-sm font-bold uppercase tracking-tight text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>
          </FadeIn>
        </div>

        {/* Articles Grid — hairline grid, hover flood */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-px border-t-2 border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.05} className="h-full">
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
        ) : (
          <div className="border-t-2 border-border">
            <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12">
              <div className="flex items-center justify-center border-2 border-border bg-background p-16">
                <p className="text-lg font-bold uppercase tracking-tight text-muted-foreground">
                  No articles match your search criteria
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
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
              Stay ahead of the agentic AI curve
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-xl text-lg font-medium leading-tight md:text-2xl">
              Get our latest research and perspectives on enterprise AI
              delivered to your inbox.
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
