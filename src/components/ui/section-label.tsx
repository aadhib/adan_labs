import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Uppercase eyebrow label used to head every section — a tracked acid-yellow
 * micro-label with a hairline rule and optional index number.
 */
export function SectionLabel({
  children,
  index,
  className,
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span aria-hidden="true" className="h-px w-10 shrink-0 bg-accent" />
      {index && (
        <span className="font-bold text-xs tracking-tight text-accent">
          {index}
        </span>
      )}
      <span className="font-bold text-xs md:text-sm uppercase tracking-[0.25em] text-accent">
        {children}
      </span>
    </div>
  );
}
