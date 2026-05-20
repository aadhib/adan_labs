import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  Technology: [
    { href: "/technology#reasoning", label: "Reasoning" },
    { href: "/technology#memory", label: "Memory Systems" },
    { href: "/technology#orchestration", label: "Orchestration" },
    { href: "/technology#governance", label: "Governance" },
  ],
  Solutions: [
    { href: "/solutions#operations", label: "Operations" },
    { href: "/solutions#customer-support", label: "Customer Support" },
    { href: "/solutions#finance", label: "Finance" },
    { href: "/solutions#it", label: "IT Systems" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background">
      {/* Link grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-6 border-b-2 border-border p-8 md:border-r-2 lg:border-b-0 lg:p-12">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-accent text-lg font-bold text-accent-foreground">
              A
            </span>
            <span className="text-base font-bold uppercase tracking-tighter">
              Adan Labs
            </span>
          </Link>
          <p className="max-w-xs text-base leading-tight text-muted-foreground">
            Enterprise-grade Agentic Assist Technologies. Reasoning-first
            architectures that reason, plan, and act.
          </p>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([category, links], i) => (
          <div
            key={category}
            className={`border-b-2 border-border p-8 lg:border-b-0 lg:p-12 ${
              i < 2 ? "md:border-r-2" : ""
            } lg:[&:not(:last-child)]:border-r-2`}
          >
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              {category}
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-lg font-bold uppercase tracking-tighter text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-start justify-between gap-4 border-t-2 border-border px-8 py-6 sm:flex-row sm:items-center lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          &copy; {new Date().getFullYear()} Adan Labs — All rights reserved
        </p>
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/privacy"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            Privacy
          </Link>
          <Link
            href="/cookies"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            Cookies
          </Link>
          <Link
            href="/terms"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            Terms
          </Link>
        </div>
      </div>

      {/* Massive wordmark — graphic depth layer */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-t-2 border-border"
      >
        <span className="block select-none text-center font-bold uppercase leading-[0.75] tracking-tighter text-muted text-[clamp(4rem,22vw,20rem)]">
          Adan Labs
        </span>
      </div>
    </footer>
  );
}
