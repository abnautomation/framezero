import type { Metadata } from "next";
import WorkflowJourney from "@/components/sections/WorkflowJourney";
import PageHero from "@/components/layout/PageHero";
import SyntxSpotlight from "@/components/ui/SyntxSpotlight";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Animation Workflow — The Complete Pipeline",
  description:
    "The end-to-end AI animation pipeline: idea → script → character → scene → animation → voice → edit → publish. Animated and explained simply.",
  alternates: { canonical: "/workflow" },
};

export default function WorkflowPage() {
  return (
    <>
      <PageHero
        eyebrow="End-to-end pipeline"
        title={<>How an idea becomes a <span className="gradient-text-magic">finished film</span></>}
        subtitle="The same pipeline a studio uses — minus the studio. Follow the journey from a single spark to a published video, step by step."
      >
        <p className="text-sm text-[var(--color-text-tertiary)]">
          Want us to do this for you?{" "}
          <Link href="/services" className="text-[var(--color-coral)] hover:underline font-medium">See our service →</Link>
        </p>
      </PageHero>

      <WorkflowJourney />

      {/* All-in-one shortcut */}
      <div className="pb-16">
        <SyntxSpotlight />
      </div>

      {/* Checklist lead magnet */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl p-8 text-center text-white relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
            <div aria-hidden className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
            <h2 className="text-2xl font-bold mb-3 relative">Get the workflow checklist</h2>
            <p className="text-white/85 mb-6 relative">
              A one-page printable checklist of every step — with tool links and quick prompts. Free when you subscribe.
            </p>
            <Button href="/newsletter" variant="secondary" className="relative !border-white !text-white hover:!bg-white/10">
              Get free checklist
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
