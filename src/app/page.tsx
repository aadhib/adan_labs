import { Hero } from "@/components/hero";
import { TrustedSection } from "@/components/sections/trusted-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { WhyAgenticSection } from "@/components/sections/why-agentic-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { GovernanceSection } from "@/components/sections/governance-section";
import { CTABanner } from "@/components/sections/cta-banner";
import { InsightsPreview } from "@/components/sections/insights-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <ComparisonSection />
      <PillarsSection />
      <WhyAgenticSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <GovernanceSection />
      <CTABanner />
      <InsightsPreview />
    </>
  );
}
