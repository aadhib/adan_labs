import { type ReactNode } from "react";

import { SectionLabel } from "@/components/ui/section-label";

/**
 * Shared shell for long-form legal documents (privacy, cookies, terms).
 * Brutalist hero + a readability-capped prose column.
 */
export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
            {title}
          </h1>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Last updated — {updated}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
            {intro}
          </p>
        </div>
      </section>
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 md:px-12 md:py-32">
          <div className="flex flex-col gap-14">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id?: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-baseline gap-4 border-b-2 border-border pb-5">
        <span aria-hidden="true" className="text-xl font-bold tracking-tighter text-accent">
          {number}
        </span>
        <h2 className="text-2xl font-bold uppercase tracking-tighter md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        {children}
      </div>
    </section>
  );
}

/** Bulleted list with the brutalist accent slash marker. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="shrink-0 font-bold text-accent">
            /
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Emphasised inline term. */
export function Term({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}
