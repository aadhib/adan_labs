import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adan Labs — Agentic Assist Technologies for Enterprise",
    template: "%s | Adan Labs",
  },
  description:
    "Adan Labs builds enterprise-grade Agentic Assist Technologies with reasoning-first architectures, cognitive memory, and multi-agent orchestration for real business outcomes.",
  keywords: [
    "Agentic AI",
    "Enterprise AI Automation",
    "Multi-Agent AI",
    "AI Reasoning Systems",
    "AI Memory Systems",
    "Agentic Assist Technologies",
    "Autonomous Enterprise AI",
    "AI Workflow Automation",
    "MCP AI Integration",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Adan Labs",
    title: "Adan Labs — Agentic Assist Technologies for Enterprise",
    description:
      "AI that reasons, plans, and acts. Enterprise-grade agentic AI with cognitive memory and multi-agent orchestration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adan Labs — Agentic Assist Technologies for Enterprise",
    description:
      "AI that reasons, plans, and acts. Enterprise-grade agentic AI with cognitive memory and multi-agent orchestration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
