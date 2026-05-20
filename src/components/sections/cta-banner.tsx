"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Ready to give your
            <br />
            <span className="font-normal gradient-text">
              business agency?
            </span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Schedule a strategy call with our team to explore how Adan Labs
            Agentic Assist Technologies can transform your enterprise
            operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Book a Strategy Call
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
  );
}
