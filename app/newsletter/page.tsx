import type { Metadata } from "next";
import { Mail, Check } from "lucide-react";
import NewsletterInline from "@/components/ui/NewsletterInline";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Newsletter — Weekly AI Animation Tips",
  description:
    "Get the weekly AI animation playbook — beginner-friendly tips, tool recommendations, and tutorials. Free.",
  alternates: { canonical: "/newsletter" },
};

const benefits = [
  "One beginner-friendly tip or tutorial per week",
  "Tool recommendations and updates as the AI space evolves",
  "Behind-the-scenes from real AI animation projects",
  "Early access to new guides and free resources",
  "Prompt packs and workflow checklists (exclusive to subscribers)",
];

const sample = {
  subject: "Issue #12: How to animate any character in 4 minutes with Kling AI",
  preview: "This week: the exact motion prompt formula that gets cinematic results every time — plus a free character prompt pack...",
};

export default function NewsletterPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] text-white mb-6 shadow-[0_8px_24px_rgba(91,91,214,0.35)]">
            <Mail size={26} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">Free weekly</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            The AI Animation Playbook
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
            Every week, one beginner-friendly tip, tool, or tutorial — designed to make you a better AI animation creator. Free. No spam.
          </p>
          <NewsletterInline ctaText="Subscribe free" />
          <p className="mt-4 text-xs text-[var(--color-text-tertiary)]">
            No spam. One email per week. Unsubscribe any time. No credit card.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">What&apos;s inside</p>
              <h2 className="text-2xl font-bold mb-5">What subscribers get</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <Check size={15} className="text-[var(--color-mint)] flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample issue */}
            <div className="rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-surface-1)] shadow-[var(--shadow-card)] overflow-hidden">
              <div className="bg-[var(--color-surface-2)] px-4 py-3 border-b border-[var(--color-glass-border)] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-coral)] opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-mint)] opacity-60" />
                </div>
                <p className="text-xs text-[var(--color-text-tertiary)] ml-2">Sample issue preview</p>
              </div>
              <div className="p-5">
                <p className="text-xs text-[var(--color-text-tertiary)] mb-1">From: {siteConfig.BRAND_NAME} &lt;{siteConfig.CONTACT_EMAIL}&gt;</p>
                <p className="font-semibold text-sm mb-3">{sample.subject}</p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{sample.preview}</p>
                <div className="mt-4 pt-4 border-t border-[var(--color-glass-border)]">
                  <p className="text-xs text-[var(--color-text-tertiary)]">Weekly · Beginner-friendly · Unsubscribe anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe again */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to subscribe?</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">Join creators learning AI animation every week. Free forever.</p>
          <NewsletterInline ctaText="Subscribe — it&apos;s free" />
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
