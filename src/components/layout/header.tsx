"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/solutions", label: "Solutions" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b-2 border-border bg-background">
      <nav className="flex h-full items-center justify-between pl-4 pr-4 md:pr-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center bg-accent text-lg font-bold text-accent-foreground transition-transform duration-200 group-hover:scale-105">
            A
          </span>
          <span className="text-base font-bold uppercase tracking-tighter">
            Adan Labs
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-5 text-sm font-bold uppercase tracking-tight transition-colors",
                  active
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA — full-height accent block */}
        <Link
          href="/contact"
          className="hidden h-20 items-center gap-3 border-l-2 border-accent bg-accent px-8 text-sm font-bold uppercase tracking-tighter text-accent-foreground transition-colors hover:bg-foreground hover:border-foreground hover:text-background lg:flex"
        >
          Book a Demo
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-12 w-12 items-center justify-center border-2 border-border text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col border-b-2 border-border bg-background lg:hidden">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b-2 border-border px-6 py-5 text-2xl font-bold uppercase tracking-tighter transition-colors",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "accent" }),
              "m-6 justify-between"
            )}
          >
            Book a Demo
            <ArrowRight />
          </Link>
        </div>
      )}
    </header>
  );
}
