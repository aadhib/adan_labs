"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";

export function CTABanner() {
  return (
    <section className="border-b-2 border-border bg-accent text-accent-foreground">
      <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-40">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-accent-foreground" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] md:text-sm">
              Get Started
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-8 max-w-[15ch] font-bold uppercase leading-[0.82] tracking-tighter text-[clamp(3rem,10vw,11rem)]">
            Ready to give your business agency?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-10 max-w-xl text-lg font-medium leading-tight md:text-2xl">
            Schedule a strategy call with our team to explore how Adan Labs
            Agentic Assist Technologies can transform your enterprise
            operations.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-accent-foreground px-10 text-base font-bold uppercase tracking-tighter text-accent transition-transform duration-200 hover:scale-105 active:scale-95 md:h-20 md:px-12 md:text-lg"
            >
              Book a Strategy Call
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-none border-2 border-accent-foreground bg-transparent px-10 text-base font-bold uppercase tracking-tighter text-accent-foreground transition-colors hover:bg-accent-foreground hover:text-accent active:scale-95 md:h-20 md:px-12 md:text-lg"
            >
              View Solutions
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
