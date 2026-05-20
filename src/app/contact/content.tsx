"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { KineticSelect } from "@/components/ui/select";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const inputClasses =
  "h-16 w-full rounded-none border-2 border-border bg-transparent px-5 text-sm font-bold uppercase tracking-tight text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors";

const labelClasses =
  "mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-accent";

const interestOptions = [
  { value: "operations", label: "Operations & Supply Chain" },
  { value: "support", label: "Customer Support Automation" },
  { value: "finance", label: "Finance & Back Office" },
  { value: "it", label: "IT & Knowledge Systems" },
  { value: "legal", label: "Legal & Compliance" },
  { value: "enterprise", label: "Enterprise Process Automation" },
  { value: "other", label: "Other" },
];

export function ContactContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-8 max-w-[14ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2.5rem,8vw,8rem)]">
              Let&rsquo;s explore what{" "}
              <span className="text-accent">agentic AI can do for you</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-tight text-muted-foreground md:text-2xl">
              Schedule a strategy call with our team to discuss your enterprise
              challenges and explore how Adan Labs can deliver measurable
              outcomes through autonomous AI.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="border-b-2 border-border">
        <div className="mx-auto w-full max-w-[1760px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-px border-2 border-border bg-border lg:grid-cols-5">
            {/* Form */}
            <FadeIn className="h-full lg:col-span-3">
              <div className="flex h-full flex-col bg-background p-8 md:p-12">
                <SectionLabel index="01">Request a Strategy Call</SectionLabel>
                <h2 className="mt-8 max-w-[16ch] font-bold uppercase leading-[0.85] tracking-tighter text-[clamp(2rem,4vw,3.5rem)]">
                  Tell us about your{" "}
                  <span className="text-accent">challenge</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-tight text-muted-foreground">
                  Tell us about your enterprise challenges and we will prepare a
                  tailored assessment of how Adan Labs can help.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-12 space-y-8"
                >
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClasses}>
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        className={inputClasses}
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClasses}>
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        className={inputClasses}
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={inputClasses}
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className={labelClasses}>
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        className={inputClasses}
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className={labelClasses}>
                        Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        className={inputClasses}
                        placeholder="CTO"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className={labelClasses}>
                      Area of Interest
                    </label>
                    <KineticSelect
                      id="interest"
                      name="interest"
                      placeholder="Select an area"
                      options={interestOptions}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Tell Us About Your Challenge
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full resize-none rounded-none border-2 border-border bg-transparent px-5 py-4 text-sm font-bold uppercase tracking-tight text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                      placeholder="Describe the enterprise processes you're looking to automate, your current pain points, and what outcomes you're hoping to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-none border-2 border-accent bg-accent px-10 text-base font-bold uppercase tracking-tighter text-accent-foreground transition-transform duration-200 hover:scale-105 active:scale-95 sm:w-auto md:h-20 md:px-12 md:text-lg"
                  >
                    Submit Request
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.1} className="h-full lg:col-span-2">
              <div className="flex h-full flex-col gap-px bg-border">
                <div className="bg-background p-8 md:p-12">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-3xl">
                    What to expect
                  </h3>
                  <div className="mt-8 space-y-6">
                    {[
                      {
                        step: "01",
                        text: "We review your submission and prepare a tailored assessment within 48 hours.",
                      },
                      {
                        step: "02",
                        text: "A strategy call with our solutions team to map your specific use cases.",
                      },
                      {
                        step: "03",
                        text: "A detailed proposal with projected outcomes and implementation timeline.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-5">
                        <span
                          aria-hidden="true"
                          className="shrink-0 font-bold leading-none tracking-tighter text-muted text-[clamp(3rem,6vw,5rem)]"
                        >
                          {item.step}
                        </span>
                        <p className="text-lg leading-tight text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background p-8 md:p-12">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-3xl">
                    Direct contact
                  </h3>
                  <div className="mt-8 space-y-5">
                    <div className="flex items-center gap-4">
                      <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />
                      <span className="text-lg font-bold uppercase tracking-tight text-foreground">
                        info@adanlabs.com
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />
                      <span className="text-lg font-bold uppercase tracking-tight text-foreground">
                        47 Corrán Riada, Athlone, N37 X2K5, Ireland
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-8 md:p-12">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-3xl">
                    Enterprise inquiries
                  </h3>
                  <p className="mt-6 text-lg leading-tight text-muted-foreground">
                    For large-scale deployments, strategic partnerships, or
                    custom solutions, reach out to our enterprise team directly.
                  </p>
                  <p className="mt-4 text-lg font-bold uppercase tracking-tight text-foreground">
                    enterprise@adanlabs.com
                  </p>
                </div>

                <div className="flex flex-1 flex-col justify-center border-l-4 border-accent bg-background p-8 md:p-12">
                  <p className="text-lg leading-tight text-muted-foreground">
                    <span className="font-bold uppercase tracking-tighter text-foreground">
                      Trusted by forward-thinking enterprises.
                    </span>{" "}
                    Adan Labs works with organizations that understand the
                    strategic value of autonomous AI and are ready to move from
                    experimentation to execution.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
