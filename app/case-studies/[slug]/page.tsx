import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { caseStudies } from "../page";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study`,
    description: cs.description,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

const details: Record<string, { problem: string; approach: string; steps: string[]; result: string }> = {
  "football-baby-short": {
    problem: "We wanted to create a short-form animation that would resonate emotionally with a wide audience — the classic underdog story — but with a twist that would make it uniquely shareable.",
    approach: "We designed a baby character with exaggerated features (huge eyes, tiny body, giant boots) and placed it in an elite football setting. The contrast — expected failure vs. surprising triumph — is the hook.",
    steps: [
      "Wrote a 60-second script: baby sits on bench (8s), baby enters field to laughter (12s), baby runs and scores (20s), crowd erupts (10s), baby celebrates (10s).",
      "Generated character using DALL-E 3 with consistent prompt: 'Pixar 3D style, cute baby boy, oversized football boots, blue jersey #7, expressive eyes, round face'",
      "Generated 6 scene images with matching style descriptor",
      "Animated each scene using Kling AI with cinematic motion prompts",
      "Generated narration with ElevenLabs (heroic male voice, 1.1x speed)",
      "Added Suno-generated orchestral track: 'emotional sports underdog triumph'",
      "Assembled in CapCut, added captions, exported vertical for Reels + YouTube Shorts",
    ],
    result: "10,000+ views within 72 hours of posting on YouTube Shorts. 80%+ watch rate. The video was shared organically across multiple WhatsApp groups. Total production time: 2.5 hours.",
  },
  "brand-intro": {
    problem: "A clothing brand needed a 10-second animated logo intro for their YouTube channel and social media. They had a logo but no animation budget for traditional motion graphics.",
    approach: "We designed a 3D-style reveal using AI image generation to create the scene, then animated it with Runway's precision camera controls for a cinematic quality that matched the brand's premium feel.",
    steps: [
      "Understood brand identity: dark, premium streetwear, urban aesthetic",
      "Generated 3D-style scene in Midjourney: 'dark studio, spotlight, premium clothing rack, cinematic fog'",
      "Created logo placement reference image",
      "Animated scene with Runway Gen-3: 'dramatic spotlight reveal, slow camera push in, luxury atmosphere'",
      "Generated background score with Suno: 'dark premium fashion brand, deep bass, 10 seconds'",
      "Composited in CapCut, added logo overlay, color graded to brand palette",
    ],
    result: "Client approved on first viewing with no revisions requested. Delivered in under 4 hours. The brand has since commissioned two more projects.",
  },
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const detail = details[slug];

  return (
    <>
      <section className="pt-32 pb-12 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-2xl mx-auto">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: cs.title },
            ]}
          />
          <p className="text-xs font-semibold text-[var(--color-indigo)] mb-2">{cs.category}</p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">{cs.title}</h1>
          <p className="text-xl font-semibold text-[var(--color-mint)] mb-4">✓ {cs.result}</p>
          <div className="flex flex-wrap gap-2">
            {cs.tools.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-[rgba(91,91,214,0.1)] text-[var(--color-indigo)] text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-14">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="aspect-video bg-gradient-to-br from-[var(--color-indigo)] via-[var(--color-violet)] to-[var(--color-sky)] rounded-2xl flex items-center justify-center">
            <span className="text-white/50">Video embed placeholder</span>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">The problem</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{detail?.problem}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Our approach</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{detail?.approach}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Step-by-step process</h2>
            <ol className="space-y-3">
              {detail?.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">The result</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{detail?.result}</p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-[rgba(91,91,214,0.08)] to-[rgba(138,92,246,0.05)] border border-[rgba(91,91,214,0.15)]">
            <p className="font-bold mb-2">Want this made for you?</p>
            <p className="text-sm text-[var(--color-text-secondary)] mb-5">
              We create your AI animation first. You only pay if you love it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={siteConfig.WHATSAPP_URL} external variant="whatsapp" size="sm" icon={<MessageCircle size={15} />}>
                Get a free sample
              </Button>
              <Button href="/services" variant="secondary" size="sm">
                See all services
              </Button>
            </div>
          </div>
        </div>
      </article>

      <section className="px-4 sm:px-6 pb-10">
        <div className="max-w-2xl mx-auto pt-8 border-t border-[var(--color-glass-border)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">Try it yourself</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "AI Animation Basics", href: "/learn/ai-animation-basics" },
              { label: "3D Animation Guide", href: "/learn/3d-animation-guide" },
              { label: "Tools Directory", href: "/tools" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-xl border border-[var(--color-glass-border)] text-sm hover:text-[var(--color-indigo)] hover:border-[var(--color-indigo)] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <NewsletterSection />
    </>
  );
}
