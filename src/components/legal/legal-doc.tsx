import { type ReactNode } from "react";

import { SectionLabel } from "@/components/ui/section-label";

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  body: ReactNode;
};

/**
 * Shared shell for long-form legal documents (privacy, cookies, terms).
 * Brutalist hero, a sticky table-of-contents rail, and a numbered prose
 * column — driven by a single `sections` array so the contents nav and the
 * document never drift apart.
 */
export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
            {title}
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="border-2 border-accent px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Updated {updated}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {sections.length} sections
            </span>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-xl">
            {intro}
          </p>
        </div>
      </section>

      {/* Document body — contents rail + numbered sections */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-16 md:px-12 md:py-20">
          <div className="grid gap-px border-2 border-border bg-border lg:grid-cols-[320px_1fr]">
            {/* Contents rail */}
            <aside className="bg-background">
              <div className="lg:sticky lg:top-20">
                <p className="border-b-2 border-border px-8 py-6 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Contents
                </p>
                <nav className="flex flex-col">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-baseline gap-3 border-b-2 border-border px-8 py-4 transition-colors hover:bg-accent"
                    >
                      <span className="text-xs font-bold tracking-tight text-accent group-hover:text-accent-foreground">
                        {s.number}
                      </span>
                      <span className="text-sm font-bold uppercase leading-tight tracking-tight text-foreground group-hover:text-accent-foreground">
                        {s.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="bg-background px-6 py-12 md:px-12 md:py-16 lg:px-16">
              <div className="flex max-w-3xl flex-col gap-20">
                {sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <span
                      aria-hidden="true"
                      className="block font-bold leading-[0.8] tracking-tighter text-muted text-[clamp(3.5rem,7vw,6rem)]"
                    >
                      {s.number}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold uppercase tracking-tighter md:text-4xl">
                      {s.title}
                    </h2>
                    <div className="mt-6 flex flex-col gap-4 border-t-2 border-border pt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Bulleted list with the brutalist accent slash marker. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-4 border-t-2 border-border py-4 first:border-t-0 first:pt-0"
        >
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
