import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalLayout,
  LegalList,
  Term,
  type LegalSection,
} from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Adan Labs website, governed by the laws of Ireland.",
  robots: { index: true, follow: true },
};

const mailLink =
  "font-semibold text-accent underline underline-offset-4 hover:text-foreground";

const sections: LegalSection[] = [
  {
    id: "agreement",
    number: "01",
    title: "Agreement to These Terms",
    body: (
      <p>
        By accessing or using the Adan Labs website (the &ldquo;Site&rdquo;),
        you agree to be bound by these Terms of Service and by our{" "}
        <Link href="/privacy" className={mailLink}>
          Privacy Policy
        </Link>
        . If you do not agree, please do not use the Site.
      </p>
    ),
  },
  {
    id: "about",
    number: "02",
    title: "About Adan Labs",
    body: (
      <>
        <p>
          The Site is operated by <Term>Adan Labs Limited</Term>, a company
          established in Ireland (company registration number{" "}
          <Term>789727</Term>), with its registered
          office at <Term>47 Corrán Riada, Athlone, N37 X2K5, Ireland</Term>.
        </p>
        <p>
          The Site is an informational and marketing website. Its content does
          not constitute an offer, a binding proposal, or professional advice,
          and does not create any contractual relationship unless and until a
          separate written agreement is signed.
        </p>
      </>
    ),
  },
  {
    id: "use",
    number: "03",
    title: "Acceptable Use",
    body: (
      <>
        <p>You agree that you will not:</p>
        <LegalList
          items={[
            "Use the Site for any unlawful purpose or in breach of these Terms.",
            "Attempt to gain unauthorised access to the Site, its servers, or related systems.",
            "Introduce malware or otherwise interfere with the proper functioning of the Site.",
            "Scrape, harvest, or systematically extract content or data except as expressly permitted.",
            "Use the Site in a way that could damage, disable, or impair it or affect other users.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ip",
    number: "04",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          All content on the Site — including text, graphics, logos, layout,
          and design — is owned by or licensed to{" "}
          <Term>Adan Labs Limited</Term> and is protected by intellectual
          property laws. The &ldquo;Adan Labs&rdquo; name and logo are
          trademarks of <Term>Adan Labs Limited</Term>.
        </p>
        <p>
          You are granted a limited, non-exclusive, revocable licence to access
          and view the Site for your own informational use. You may not
          reproduce, distribute, or create derivative works without our prior
          written permission.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    number: "05",
    title: "No Warranties",
    body: (
      <p>
        The Site and its content are provided on an &ldquo;as is&rdquo; and
        &ldquo;as available&rdquo; basis for general information only. While we
        take reasonable care, we make no warranties or representations, express
        or implied, as to the accuracy, completeness, or availability of the
        Site or its content.
      </p>
    ),
  },
  {
    id: "liability",
    number: "06",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law,{" "}
          <Term>Adan Labs Limited</Term> will not be liable for any indirect,
          incidental, or consequential loss, or for any loss of profit, revenue,
          or data, arising from your use of or inability to use the Site.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot
          lawfully be excluded or limited under Irish law — including liability
          for death or personal injury caused by negligence, or for fraud or
          fraudulent misrepresentation.
        </p>
      </>
    ),
  },
  {
    id: "links",
    number: "07",
    title: "Third-Party Links",
    body: (
      <p>
        The Site may contain links to third-party websites. We provide these
        links for convenience only and do not endorse or accept responsibility
        for the content, accuracy, or practices of any third-party site.
        Accessing third-party sites is at your own risk.
      </p>
    ),
  },
  {
    id: "privacy",
    number: "08",
    title: "Privacy & Cookies",
    body: (
      <p>
        Your use of the Site is also governed by our{" "}
        <Link href="/privacy" className={mailLink}>
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/cookies" className={mailLink}>
          Cookie Policy
        </Link>
        , which explain how we handle your personal data.
      </p>
    ),
  },
  {
    id: "changes",
    number: "09",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. The &ldquo;Last
        updated&rdquo; date above reflects the most recent revision. Your
        continued use of the Site after changes take effect constitutes
        acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "law",
    number: "10",
    title: "Governing Law & Jurisdiction",
    body: (
      <p>
        These Terms, and any dispute or claim arising out of or in connection
        with them, are governed by and construed in accordance with the laws of{" "}
        <Term>Ireland</Term>. The courts of Ireland have exclusive jurisdiction,
        save that, if you are a consumer, you retain the benefit of any
        mandatory protections and the right to bring proceedings in your country
        of residence under applicable law.
      </p>
    ),
  },
  {
    id: "contact",
    number: "11",
    title: "Contact Us",
    body: (
      <>
        <p>For any question about these Terms:</p>
        <LegalList
          items={[
            <>
              Email:{" "}
              <a href="mailto:contact@adanlabs.com" className={mailLink}>
                contact@adanlabs.com
              </a>
            </>,
            <>
              Post: <Term>Adan Labs Limited</Term>,{" "}
              <Term>47 Corrán Riada, Athlone, N37 X2K5, Ireland</Term>
            </>,
          ]}
        />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms"
      title={
        <>
          Terms of <span className="text-accent">Service</span>
        </>
      }
      updated="20 May 2026"
      intro="These Terms of Service govern your access to and use of the Adan Labs website. Please read them carefully — by using the site you agree to be bound by them."
      sections={sections}
    />
  );
}
