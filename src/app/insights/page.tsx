import type { Metadata } from "next";
import { InsightsContent } from "./content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thought leadership on agentic AI, reasoning-first architectures, cognitive memory systems, multi-agent orchestration, governance, and enterprise AI strategy from Adan Labs.",
  openGraph: {
    title: "Insights | Adan Labs",
    description:
      "Expert perspectives on agentic AI and enterprise automation.",
  },
};

export default function InsightsPage() {
  return <InsightsContent />;
}
