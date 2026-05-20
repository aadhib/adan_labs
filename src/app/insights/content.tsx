"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              Insights
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Research & perspectives
              <br />
              <span className="font-normal gradient-text">on agentic AI</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Deep analysis on enterprise AI strategy, reasoning architectures,
              cognitive memory, multi-agent systems, and the future of
              autonomous enterprise operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 lg:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <Link
              href={`/insights/${featured.slug}`}
              className="group block border border-primary/20 rounded-2xl p-8 lg:p-12 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-4 group-hover:text-foreground transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-mono text-[11px]">
                      {featured.date}
                    </span>
                    <span className="text-border">|</span>
                    <span className="font-mono text-[11px]">
                      {featured.readTime}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full aspect-[4/3] rounded-xl bg-card border border-border flex items-center justify-center">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50">
                      ADAN LABS INSIGHTS
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Filters & Articles */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <FadeIn className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 text-sm bg-card/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>
          </FadeIn>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.05}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group block h-full"
                >
                  <article className="border border-border rounded-2xl p-8 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                        {article.category}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
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
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {article.date}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No articles match your search criteria.
              </p>
            </div>
          )}

          {/* Newsletter CTA */}
          <FadeIn className="mt-20">
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-xl font-light tracking-tight mb-3">
                Stay ahead of the agentic AI curve
              </h3>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                Get our latest research and perspectives on enterprise AI
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 text-sm bg-card/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                />
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
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
