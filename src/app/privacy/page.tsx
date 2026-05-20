import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalLayout,
  LegalList,
  Term,
  type LegalSection,
} from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Adan Labs collects, uses, and protects personal data, in accordance with the EU GDPR and the Irish Data Protection Act 2018.",
  robots: { index: true, follow: true },
};

const mailLink =
  "font-semibold text-accent underline underline-offset-4 hover:text-foreground";

const sections: LegalSection[] = [
  {
    id: "controller",
    number: "01",
    title: "Who We Are — Data Controller",
    body: (
      <>
        <p>
          <Term>Adan Labs Limited</Term> (&ldquo;Adan Labs&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a company
          established in Ireland under company registration number{" "}
          <Term>789727</Term>, with its registered office
          at <Term>47 Corrán Riada, Athlone, N37 X2K5, Ireland</Term>.
        </p>
        <p>
          Adan Labs is the <Term>data controller</Term> responsible for your
          personal data. For any privacy-related question or to exercise your
          rights, contact us at{" "}
          <a href="mailto:privacy@adanlabs.com" className={mailLink}>
            privacy@adanlabs.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data",
    number: "02",
    title: "Personal Data We Collect",
    body: (
      <>
        <p>We collect the following categories of personal data:</p>
        <LegalList
          items={[
            <>
              <Term>Information you provide</Term> — when you submit the contact
              form or request a strategy call, we collect your name, work email
              address, company, role, and the contents of your message.
            </>,
            <>
              <Term>Correspondence</Term> — records of communications when you
              email or otherwise contact us.
            </>,
            <>
              <Term>Technical and usage data</Term> — collected automatically
              when you visit the site, including IP address, browser type,
              device information, referring pages, and pages viewed, via server
              logs and cookies.
            </>,
          ]}
        />
        <p>
          We do not intentionally collect special category data (such as data
          revealing health, ethnicity, or political opinions). Please do not
          submit such data through our forms.
        </p>
      </>
    ),
  },
  {
    id: "use",
    number: "03",
    title: "How We Use Your Data & Legal Basis",
    body: (
      <>
        <p>
          Under Article 6 GDPR we process your personal data only where we have
          a lawful basis to do so:
        </p>
        <LegalList
          items={[
            <>
              <Term>Responding to enquiries and strategy-call requests</Term> —
              to take steps at your request prior to entering a contract, and
              our legitimate interest in responding to business enquiries.
            </>,
            <>
              <Term>Operating, maintaining, and securing the website</Term> —
              our legitimate interest in providing a functional, secure
              service.
            </>,
            <>
              <Term>Analytics</Term> — to understand how the site is used; only
              where you have given consent via our cookie banner.
            </>,
            <>
              <Term>Marketing communications</Term> — sending updates or
              insights; only where you have opted in (consent). You may withdraw
              consent at any time.
            </>,
            <>
              <Term>Legal compliance</Term> — to comply with legal obligations
              and to establish, exercise, or defend legal claims.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies & Similar Technologies",
    body: (
      <p>
        We use cookies and similar technologies to operate the site and,
        subject to your consent, to measure how it is used. Full detail of each
        cookie, its purpose, and how to manage your choices is set out in our{" "}
        <Link href="/cookies" className={mailLink}>
          Cookie Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "sharing",
    number: "05",
    title: "Sharing Your Data",
    body: (
      <>
        <p>We share personal data only as described below:</p>
        <LegalList
          items={[
            <>
              <Term>Service providers (processors)</Term> — hosting, email
              delivery, and analytics providers that process data on our behalf
              under written data-processing agreements compliant with Article 28
              GDPR.
            </>,
            <>
              <Term>Professional advisers</Term> — legal, accounting, and
              insurance advisers where necessary.
            </>,
            <>
              <Term>Authorities</Term> — where required by law, court order, or
              to protect our legal rights.
            </>,
          ]}
        />
        <p>
          <Term>We do not sell your personal data</Term> and we do not share it
          for third-party advertising.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    number: "06",
    title: "International Data Transfers",
    body: (
      <p>
        Where your personal data is transferred outside the European Economic
        Area (EEA), we ensure an adequate level of protection by relying on a
        European Commission adequacy decision or on Standard Contractual Clauses
        approved by the European Commission, together with supplementary
        safeguards where required. You may request a copy of the relevant
        safeguards by contacting{" "}
        <a href="mailto:privacy@adanlabs.com" className={mailLink}>
          privacy@adanlabs.com
        </a>
        .
      </p>
    ),
  },
  {
    id: "retention",
    number: "07",
    title: "Data Retention",
    body: (
      <>
        <p>
          We retain personal data only for as long as necessary for the
          purposes for which it was collected:
        </p>
        <LegalList
          items={[
            <>
              <Term>Enquiry and contact data</Term> — retained for{" "}
              <Term>24 months</Term> after our last meaningful contact,
              unless an ongoing business relationship requires longer retention.
            </>,
            <>
              <Term>Server logs</Term> — retained for a short period for
              security and diagnostics, then deleted or anonymised.
            </>,
            <>
              <Term>Records required by law</Term> — retained for the period
              required by applicable Irish and EU law.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "security",
    number: "08",
    title: "How We Protect Your Data",
    body: (
      <p>
        We implement appropriate technical and organisational measures to
        protect personal data against unauthorised access, loss, or disclosure —
        including encryption in transit (TLS), access controls, and ongoing
        review of our processors. No method of transmission over the internet is
        completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "rights",
    number: "09",
    title: "Your Rights Under the GDPR",
    body: (
      <>
        <p>Subject to the conditions in the GDPR, you have the right to:</p>
        <LegalList
          items={[
            "Access — obtain confirmation of, and a copy of, the personal data we hold about you.",
            "Rectification — have inaccurate or incomplete data corrected.",
            "Erasure — have your personal data deleted in certain circumstances.",
            "Restriction — limit how we process your data in certain circumstances.",
            "Data portability — receive your data in a structured, machine-readable format.",
            "Object — object to processing based on legitimate interests or to direct marketing.",
            "Withdraw consent — withdraw consent at any time, without affecting prior lawful processing.",
            "Automated decisions — we do not make decisions producing legal or similarly significant effects based solely on automated processing.",
          ]}
        />
        <p>
          To exercise any right, email{" "}
          <a href="mailto:privacy@adanlabs.com" className={mailLink}>
            privacy@adanlabs.com
          </a>
          . We will respond within one month, as required by the GDPR. There is
          normally no charge for exercising your rights.
        </p>
      </>
    ),
  },
  {
    id: "authority",
    number: "10",
    title: "Supervisory Authority",
    body: (
      <>
        <p>
          If you are not satisfied with how we handle your personal data, you
          have the right to lodge a complaint with a supervisory authority. The
          lead supervisory authority in Ireland is the{" "}
          <Term>Data Protection Commission</Term>:
        </p>
        <LegalList
          items={[
            "Data Protection Commission, 21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland",
            <>
              Website:{" "}
              <a href="https://www.dataprotection.ie" className={mailLink}>
                www.dataprotection.ie
              </a>
            </>,
          ]}
        />
        <p>
          You may also lodge a complaint with the supervisory authority in your
          EU member state of residence or place of work.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "11",
    title: "Children's Privacy",
    body: (
      <p>
        This website is intended for business audiences and is not directed at
        children. The digital age of consent in Ireland is 16. We do not
        knowingly collect personal data from children. If you believe a child
        has provided us with personal data, contact us so we can delete it.
      </p>
    ),
  },
  {
    id: "changes",
    number: "12",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date above reflects the most recent revision. Where
        changes are material, we will take reasonable steps to notify you.
      </p>
    ),
  },
  {
    id: "contact",
    number: "13",
    title: "Contact Us",
    body: (
      <>
        <p>For any question about this Privacy Policy or your personal data:</p>
        <LegalList
          items={[
            <>
              Email:{" "}
              <a href="mailto:privacy@adanlabs.com" className={mailLink}>
                privacy@adanlabs.com
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

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title={
        <>
          Privacy <span className="text-accent">Policy</span>
        </>
      }
      updated="20 May 2026"
      intro="This Privacy Policy explains how Adan Labs collects, uses, shares, and protects your personal data when you visit our website or engage with us — in accordance with the EU General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018."
      sections={sections}
    />
  );
}
