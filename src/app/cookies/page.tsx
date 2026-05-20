import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalLayout,
  LegalSection,
  LegalList,
  Term,
} from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Adan Labs uses cookies and similar technologies, and how to manage your consent — under the EU GDPR and Irish ePrivacy Regulations (SI 336/2011).",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Cookies"
      title={
        <>
          Cookie <span className="text-accent">Policy</span>
        </>
      }
      updated="20 May 2026"
      intro="This Cookie Policy explains what cookies and similar technologies Adan Labs uses, why we use them, and how you can manage your choices — in accordance with the Irish ePrivacy Regulations (SI 336/2011) and the EU GDPR."
    >
      <LegalSection id="what" number="01" title="What Are Cookies">
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They are widely used to make websites work, to make them
          more efficient, and to provide information to site owners. This
          policy also covers similar technologies such as{" "}
          <Term>local storage</Term>, which stores data in your browser in a
          comparable way.
        </p>
      </LegalSection>

      <LegalSection id="categories" number="02" title="How We Use Cookies">
        <p>We group the technologies we use into the following categories:</p>
        <LegalList
          items={[
            <>
              <Term>Strictly necessary</Term> — required for the site to
              function and for your privacy choices to be remembered. These do
              not require consent and are always active.
            </>,
            <>
              <Term>Analytics / performance</Term> — help us understand how
              visitors use the site so we can improve it. These are only set{" "}
              <Term>after you give consent</Term>.
            </>,
            <>
              <Term>Functional</Term> — remember preferences to enhance your
              experience. Set only with consent.
            </>,
            <>
              <Term>Marketing</Term> — used to deliver or measure advertising.
              We <Term>do not currently use</Term> marketing cookies.
            </>,
          ]}
        />
        <p>
          At present, this site uses only strictly necessary technologies. We
          will update the table below before introducing any analytics,
          functional, or marketing cookies.
        </p>
      </LegalSection>

      <LegalSection id="list" number="03" title="Technologies We Use">
        <LegalList
          items={[
            <>
              <Term>adan-cookie-consent</Term> — strictly necessary — stores
              your cookie consent choice so the banner is not shown again —
              local storage, persists until you clear it.
            </>,
            <>
              <Term>[ANALYTICS COOKIES]</Term> — analytics — set only if you
              accept analytics cookies; provider, names, and durations will be
              listed here once analytics is enabled.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="consent" number="04" title="Your Consent Choices">
        <p>
          When you first visit the site, a banner lets you{" "}
          <Term>accept</Term> or <Term>reject</Term> non-essential cookies.
          Strictly necessary technologies are used regardless, as the site
          cannot function without them.
        </p>
        <p>
          You can change your mind at any time. To withdraw or update your
          consent, clear the stored choice through your browser settings (see
          below); the banner will then appear again on your next visit.
        </p>
      </LegalSection>

      <LegalSection id="manage" number="05" title="Managing Cookies in Your Browser">
        <p>
          Most browsers let you view, manage, block, and delete cookies and
          local storage through their settings menu. You can usually:
        </p>
        <LegalList
          items={[
            "Delete cookies and site data already stored on your device.",
            "Block cookies from being set, entirely or for specific sites.",
            "Receive a warning before a cookie is stored.",
          ]}
        />
        <p>
          Blocking strictly necessary technologies may cause parts of the site
          to stop working as intended.
        </p>
      </LegalSection>

      <LegalSection id="third-party" number="06" title="Third-Party Cookies">
        <p>
          Some cookies may be set by third parties that provide services to us,
          such as an analytics provider. Any such third-party cookies are only
          set with your consent and are governed by the privacy and cookie
          policies of the relevant provider. Current third-party cookies, if
          any, are listed in section 03 above.
        </p>
      </LegalSection>

      <LegalSection id="changes" number="07" title="Changes to This Policy">
        <p>
          We may update this Cookie Policy to reflect changes in the
          technologies we use or in applicable law. The &ldquo;Last
          updated&rdquo; date above reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection id="contact" number="08" title="Contact Us">
        <p>
          For any question about this Cookie Policy, email{" "}
          <a
            href="mailto:privacy@adanlabs.ai"
            className="font-semibold text-accent underline underline-offset-4 hover:text-foreground"
          >
            privacy@adanlabs.ai
          </a>
          . For more on how we handle personal data, see our{" "}
          <Link
            href="/privacy"
            className="font-semibold text-accent underline underline-offset-4 hover:text-foreground"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
