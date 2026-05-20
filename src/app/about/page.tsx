import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adan Labs is building the infrastructure for a digital autonomous workforce — enterprise-grade agentic AI with reasoning, memory, and multi-agent orchestration.",
  openGraph: {
    title: "About | Adan Labs",
    description:
      "The mission, philosophy, and vision behind Adan Labs Agentic Assist Technologies.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
