import type { Metadata } from "next";
import Link from "next/link";
import { Download, Lock, ExternalLink } from "lucide-react";
import NewsletterSection from "@/components/sections/NewsletterSection";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import SyntxSpotlight from "@/components/ui/SyntxSpotlight";

export const metadata: Metadata = {
  title: "Free AI Animation Resources — Checklists, Prompt Packs & More",
  description:
    "Free downloadable resources for AI animation creators: workflow checklists, prompt packs, tool lists, and guides.",
  alternates: { canonical: "/resources" },
};

const resources = [
  {
    title: "AI Animation Workflow Checklist",
    description: "The 8-step workflow from idea to published video — one page, printable.",
    type: "PDF",
    gated: true,
    href: "/newsletter",
  },
  {
    title: "Beginner Prompt Pack",
    description: "50 ready-to-use prompts for character design, scenes, and motion — organized by category.",
    type: "PDF",
    gated: true,
    href: "/newsletter",
  },
  {
    title: "Starter Tool List",
    description: "The exact 5 tools we recommend for beginners, with direct links and setup tips.",
    type: "PDF",
    gated: false,
    href: "/tools",
  },
  {
    title: "Character Consistency Guide",
    description: "How to keep your character looking the same across every scene — the template method explained.",
    type: "Guide",
    gated: false,
    href: "/blog/ai-character-consistency-guide",
  },
  {
    title: "AI Animation Glossary",
    description: "Plain-English definitions of every AI term — bookmark this.",
    type: "Page",
    gated: false,
    href: "/glossary",
  },
  {
    title: "Script Template",
    description: "A simple 5-scene script template for your first AI animation short — fill in the blanks.",
    type: "PDF",
    gated: true,
    href: "/newsletter",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">Free downloads</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            AI Animation Resource Center
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Free checklists, prompt packs, templates, and guides — everything you need to accelerate your AI animation journey.
          </p>
        </div>
      </section>

      <section className="section-py px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resources.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-[rgba(91,91,214,0.1)] text-[var(--color-indigo)] mb-2">
                      {r.type}
                    </span>
                    <h3 className="font-bold">{r.title}</h3>
                  </div>
                  {r.gated ? (
                    <Lock size={16} className="text-[var(--color-text-tertiary)] flex-shrink-0 mt-1" />
                  ) : (
                    <ExternalLink size={16} className="text-[var(--color-text-tertiary)] flex-shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">{r.description}</p>
                <Link
                  href={r.href}
                  className="flex items-center gap-2 text-sm font-semibold text-[var(--color-indigo)] hover:underline mt-auto"
                >
                  {r.gated ? (
                    <>
                      <Download size={14} />
                      Get free via newsletter
                    </>
                  ) : (
                    <>
                      <ExternalLink size={14} />
                      Access free
                    </>
                  )}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 glass text-center border border-[rgba(91,91,214,0.2)]">
            <p className="font-bold text-lg mb-2">Want the full resource library?</p>
            <p className="text-sm text-[var(--color-text-secondary)] mb-5">
              Subscribe to the newsletter and get all gated resources plus new ones every week.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-violet)] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(91,91,214,0.35)] hover:-translate-y-0.5 transition-transform"
            >
              <Download size={16} />
              Subscribe free →
            </Link>
          </div>
        </div>
      </section>

      <div className="pb-16">
        <SyntxSpotlight />
      </div>

      <WhatsAppCTA />
      <NewsletterSection />
    </>
  );
}
