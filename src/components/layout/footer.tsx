import Link from "next/link";

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
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-0 bg-section-glow opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <span className="text-xs font-bold text-black">A</span>
              </div>
              <span className="text-sm font-medium tracking-tight">
                Adan Labs
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Enterprise-grade Agentic Assist Technologies with reasoning-first
              architectures.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Adan Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
