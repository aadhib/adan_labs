"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "adan-cookie-consent";

/**
 * ePrivacy (Irish SI 336/2011) consent banner. Renders nothing until the
 * client confirms no prior choice is stored — server and first client render
 * both return null, so there is no hydration mismatch.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. privacy mode) — show the banner anyway.
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      /* ignore — choice simply will not persist */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-accent bg-background"
    >
      <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="max-w-2xl text-sm leading-tight text-muted-foreground md:text-base">
          <span className="font-bold uppercase tracking-tight text-foreground">
            Cookies.
          </span>{" "}
          We use strictly necessary cookies to run this site. With your consent
          we may also use analytics cookies to understand how it is used. See
          our{" "}
          <Link
            href="/cookies"
            className="font-bold text-accent underline underline-offset-4 hover:text-foreground"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="h-12 rounded-none border-2 border-border px-6 text-xs font-bold uppercase tracking-tight text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="h-12 rounded-none border-2 border-accent bg-accent px-6 text-xs font-bold uppercase tracking-tight text-accent-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
