import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { FilmFrame } from "@/components/art/Scenes";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "AI Animation Case Studies — Real Results",
  description:
    "Real AI animation projects with step-by-step breakdowns. How we made them, which tools we used, and the results they got.",
  alternates: { canonical: "/case-studies" },
};

export const caseStudies = [
  {
    slug: "football-baby-short",
    title: "Football-Baby AI Short",
    result: "10k+ views in 72 hours",
    description:
      "How we turned a simple idea — a tiny baby defying expectations on a football field — into a viral AI cartoon using a 3-step workflow.",
    tools: ["DALL-E 3", "Kling AI", "ElevenLabs", "CapCut"],
    category: "Animation Short",
  },
  {
    slug: "brand-intro",
    title: "Brand Intro Animation",
    result: "Client approved on first draft",
    description:
      "A custom AI 3D animated logo reveal and intro sequence for a clothing brand — made in one afternoon with no revisions.",
    tools: ["Midjourney", "Runway", "Suno"],
    category: "Brand Video",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Real examples"
        title={<>Stories we made <span className="gradient-text-magic">from zero</span></>}
        subtitle="Real projects with real results — and the exact step-by-step breakdown of how each one was made."
      />

      <section className="section-py px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group block rounded-2xl overflow-hidden bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200"
            >
              <div className="aspect-video overflow-hidden">
                <FilmFrame variant={i} label={cs.category} />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-[var(--color-mint)] mb-3">✓ {cs.result}</p>
                <h2 className="font-bold text-xl mb-2 group-hover:text-[var(--color-coral)] transition-colors">{cs.title}</h2>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{cs.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-[rgba(255,90,60,0.08)] text-[var(--color-coral)] text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="flex items-center gap-1 text-sm font-semibold text-[var(--color-coral)]">
                  Read case study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
