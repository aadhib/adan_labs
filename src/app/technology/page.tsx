import type { Metadata } from "next";
import { TechnologyContent } from "./content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Adan Labs' agentic AI architecture — advanced reasoning, cognitive memory systems, multi-agent orchestration, governance, and MCP enterprise interoperability.",
  openGraph: {
    title: "Technology | Adan Labs",
    description:
      "Explore the reasoning-first architecture powering enterprise agentic AI.",
  },
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
