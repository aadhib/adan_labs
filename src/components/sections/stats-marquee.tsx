"use client";

import { KineticMarquee } from "@/components/ui/marquee";

const stats = [
  { value: "10×", label: "Process Throughput" },
  { value: "85%", label: "Error Reduction" },
  { value: "70%", label: "Autonomous Resolution" },
  { value: "40%", label: "Fewer Disruptions" },
  { value: "90%", label: "Less Manual Work" },
  { value: "60%", label: "Faster Resolution" },
];

export function StatsMarquee() {
  return (
    <section
      aria-label="Outcomes delivered by Adan Labs agents"
      className="border-b-2 border-border bg-accent py-8 text-accent-foreground md:py-10"
    >
      <KineticMarquee speed={80}>
        <div className="flex items-center">
          {stats.map((stat) => (
            <span key={stat.label} className="flex items-center gap-6 px-10">
              <span className="font-bold leading-none tracking-tighter text-[clamp(3rem,7vw,6rem)]">
                {stat.value}
              </span>
              <span className="max-w-[7ch] text-sm font-bold uppercase leading-[1.1] tracking-tight md:text-base">
                {stat.label}
              </span>
              <span aria-hidden="true" className="text-3xl md:text-5xl">
                ✦
              </span>
            </span>
          ))}
        </div>
      </KineticMarquee>
    </section>
  );
}
