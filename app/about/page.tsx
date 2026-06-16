import type { Metadata } from "next";
import { motion } from "framer-motion";
import { Heart, Zap, Users, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Frame Zero — the mission to make AI animation learnable for anyone, starting from zero.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: <BookOpen size={20} />,
    title: "Beginner-first, always",
    description:
      "Every guide is written assuming zero prior knowledge. We define every term, explain every step.",
  },
  {
    icon: <Heart size={20} />,
    title: "Value before anything else",
    description:
      "Free guides, free community, free tips. We teach first. Everything else comes after.",
  },
  {
    icon: <Zap size={20} />,
    title: "Honest, no hype",
    description:
      "AI animation is genuinely exciting — it doesn't need fake urgency or exaggerated claims.",
  },
  {
    icon: <Users size={20} />,
    title: "Community-driven",
    description:
      "The best learning happens together. Our WhatsApp community is a real support network, not a sales funnel.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">
            Our mission
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Making AI animation{" "}
            <span className="gradient-text">learnable for anyone</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Frame Zero exists because AI animation tools are genuinely incredible —
            but almost nobody teaches them in a way that complete beginners can follow.
            We&apos;re here to change that.
          </p>
          <Button href="/start-here" size="lg">
            Start learning — free
          </Button>
        </div>
      </section>

      {/* Story */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-2xl mx-auto prose">
          <h2 className="text-2xl font-bold mb-4">Why we exist</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            The tools to create professional AI animation exist today — and they&apos;re
            more accessible than ever. But most tutorials assume you already know
            what a &quot;prompt&quot; is, what &quot;LoRA&quot; means, or how to use a
            video timeline. That leaves most people behind before they even start.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Frame Zero was built by The Baby Goals — a creator account focused on
            AI-powered animation content — after seeing real results from this
            workflow and wanting to share it with everyone. We&apos;ve made videos that
            reached tens of thousands of views, helped clients create their first
            animated brand videos, and built a community of creators doing the same.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            This site is the free knowledge hub we wish existed when we started.
            Everything here — the guides, the tools directory, the community — is
            designed to make your learning journey as smooth as possible.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values"
            subtitle="These principles guide every guide we write, every tool we recommend, and every message we send."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex items-center justify-center text-white flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{v.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="What makes us different"
            title="Real results, real teaching"
            align="left"
          />
          <ul className="space-y-4 text-[var(--color-text-secondary)]">
            {[
              "We actually create AI animation content — our guides come from real experience, not theory.",
              "We start at zero. No assumed knowledge. Ever.",
              "We don't sell courses. All core education is free, always.",
              "Our service offer is genuinely risk-free — we create your animation first, you only pay if you love it.",
              "We build this community because we love it, not just to grow an email list.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[var(--color-mint)] mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button href="/case-studies">See our work</Button>
            <Button href="/community" variant="secondary">Join the community</Button>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <NewsletterSection />
    </>
  );
}
