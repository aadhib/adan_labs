import type { Metadata } from "next";
import { SolutionsContent } from "./content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover how Adan Labs Agentic Assist Technologies transform operations, customer support, finance, IT, legal, and enterprise workflows with autonomous AI.",
  openGraph: {
    title: "Solutions | Adan Labs",
    description:
      "Enterprise agentic AI solutions for operations, support, finance, and more.",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
