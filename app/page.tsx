import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import WhatYoullLearn from "@/components/sections/WhatYoullLearn";
import LearningPathPreview from "@/components/sections/LearningPathPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import ProofSection from "@/components/sections/ProofSection";
import ServicesOfferBand from "@/components/sections/ServicesOfferBand";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import NewsletterSection from "@/components/sections/NewsletterSection";
import FAQTeaser from "@/components/sections/FAQTeaser";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.BRAND_NAME} — ${siteConfig.TAGLINE}`,
  description: siteConfig.DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoIsThisFor />
      <WhatYoullLearn />
      <LearningPathPreview />
      <HowItWorks />
      <ProofSection />
      <ServicesOfferBand />
      <WhatsAppCTA />
      <NewsletterSection />
      <FAQTeaser />
    </>
  );
}
