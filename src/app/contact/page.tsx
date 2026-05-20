import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a strategy call with Adan Labs to explore how Agentic Assist Technologies can transform your enterprise operations. Request a demo today.",
  openGraph: {
    title: "Contact | Adan Labs",
    description:
      "Book a strategy call or request a demo of Adan Labs Agentic AI.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
