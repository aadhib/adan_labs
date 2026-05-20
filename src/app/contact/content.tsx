"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export function ContactContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-6">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Let&rsquo;s explore what
              <br />
              <span className="font-normal gradient-text">agentic AI can do for you</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Schedule a strategy call with our team to discuss your enterprise
              challenges and explore how Adan Labs can deliver measurable
              outcomes through autonomous AI.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <div className="border border-border rounded-2xl p-8 lg:p-12 bg-card/40 backdrop-blur-sm">
                <h2 className="text-xl font-light tracking-tight mb-2">
                  Request a Strategy Call
                </h2>
                <p className="text-sm text-muted-foreground mb-10">
                  Tell us about your enterprise challenges and we will prepare a
                  tailored assessment of how Adan Labs can help.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-[11px] tracking-[0.15em] text-muted-foreground uppercase font-mono mb-2"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        className="w-full px-4 py-3 text-sm bg-background/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-[11px] tracking-[0.15em] text-muted-foreground uppercase font-mono mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        className="w-full px-4 py-3 text-sm bg-background/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] tracking-[0.15em] text-muted-foreground uppercase font-mono mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 text-sm bg-background/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[11px] tracking-[0.15em] text-muted-foreground uppercase font-mono mb-2"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        className="w-full px-4 py-3 text-sm bg-background/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="role"
                        className="block text-[11px] tracking-[0.15em] text-muted-foreground uppercase font-mono mb-2"
                      >
                        Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        className="w-full px-4 py-3 text-sm bg-background/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                        placeholder="CTO"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-[11px] tracking-[0.15em] text-muted-foreground uppercase font-mono mb-2"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3 text-sm bg-background/60 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary/40 transition-colors appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an area
                      </option>
                      <option value="operations">
                        Operations & Supply Chain
                      </option>
                      <option value="support">
                        Customer Support Automation
                      </option>
                      <option value="finance">Finance & Back Office</option>
                      <option value="it">IT & Knowledge Systems</option>
                      <option value="legal">Legal & Compliance</option>
                      <option value="enterprise">
                        Enterprise Process Automation
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] tracking-[0.15em] text-muted-foreground uppercase font-mono mb-2"
                    >
                      Tell Us About Your Challenge
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 text-sm bg-background/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                      placeholder="Describe the enterprise processes you're looking to automate, your current pain points, and what outcomes you're hoping to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
                  >
                    Submit Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-light tracking-tight mb-4">
                    What to expect
                  </h3>
                  <div className="space-y-4">
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
                      <div key={item.step} className="flex gap-4">
                        <span className="font-mono text-sm text-primary/40 shrink-0">
                          {item.step}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-light tracking-tight mb-6">
                    Direct contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary/60" />
                      <span className="text-sm text-muted-foreground">
                        contact@adanlabs.ai
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary/60" />
                      <span className="text-sm text-muted-foreground">
                        San Francisco, CA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-light tracking-tight mb-4">
                    Enterprise inquiries
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    For large-scale deployments, strategic partnerships, or
                    custom solutions, reach out to our enterprise team directly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    enterprise@adanlabs.ai
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">
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
