import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Start Here — AI Animation Learning Path",
  description:
    "New to AI animation? Start here. Your complete 4-stage roadmap from zero to confident creator — free, beginner-friendly.",
  alternates: { canonical: "/start-here" },
};

const stages = [
  {
    number: "01",
    label: "Stage 1 · Zero",
    title: "Understand the basics",
    description:
      "Learn what AI content creation is, how generative AI works, and the key terms you'll need — all explained in plain English.",
    href: "/learn/ai-animation-basics",
    ctaLabel: "Begin Stage 1",
    time: "~30 min read",
    outcomes: [
      "Understand what AI animation actually is",
      "Know the difference between image AI, video AI, and voice AI",
      "Be confident enough to start using tools",
    ],
    gradient: "from-[#5b5bd6] to-[#7c6fdb]",
  },
  {
    number: "02",
    label: "Stage 2 · Beginner",
    title: "Make your first AI visual",
    description:
      "Create your first AI-generated character or scene. Then turn it into a moving video. This is where the fun starts.",
    href: "/learn/3d-animation-guide",
    ctaLabel: "Start Stage 2",
    time: "~45 min read",
    outcomes: [
      "Generate your first AI character or scene",
      "Create a short animated clip",
      "Understand character consistency",
    ],
    gradient: "from-[#7c6fdb] to-[#8a5cf6]",
    bonus: { label: "Also read", href: "/learn/cartoon-creation-guide", title: "Cartoon Creation Guide" },
  },
  {
    number: "03",
    label: "Stage 3 · Creator",
    title: "Tell stories & make films",
    description:
      "Script a scene, plan shots, add voice and sound, and edit into a polished AI short film — exactly like a real filmmaker.",
    href: "/learn/filmmaking-with-ai",
    ctaLabel: "Start Stage 3",
    time: "~60 min read",
    outcomes: [
      "Write a simple script and shot list",
      "Create a multi-scene AI animation",
      "Add voice, music, and sound effects",
    ],
    gradient: "from-[#8a5cf6] to-[#a855f7]",
  },
  {
    number: "04",
    label: "Stage 4 · Advanced",
    title: "Grow as a creator",
    description:
      "Turn your animations into a content strategy. Learn what hooks work, how to post, and how to grow an audience on YouTube and Instagram.",
    href: "/learn/content-creation-guide",
    ctaLabel: "Start Stage 4",
    time: "~45 min read",
    outcomes: [
      "Build a consistent content brand",
      "Know what to post, where, and when",
      "Understand how to grow and monetize",
    ],
    gradient: "from-[#a855f7] to-[#39b6ff]",
  },
];

const paths = [
  {
    id: "youtube",
    label: "YouTuber",
    steps: [
      { label: "Start Here (Stage 1)", href: "/learn/ai-animation-basics" },
      { label: "3D Animation Guide", href: "/learn/3d-animation-guide" },
      { label: "Filmmaking with AI", href: "/learn/filmmaking-with-ai" },
      { label: "Content Creation Guide", href: "/learn/content-creation-guide" },
    ],
  },
  {
    id: "instagram",
    label: "Instagram / Reels",
    steps: [
      { label: "AI Animation Basics", href: "/learn/ai-animation-basics" },
      { label: "Cartoon Creation Guide", href: "/learn/cartoon-creation-guide" },
      { label: "Content Creation Guide", href: "/learn/content-creation-guide" },
    ],
  },
  {
    id: "business",
    label: "Business owner",
    steps: [
      { label: "AI Animation Basics", href: "/learn/ai-animation-basics" },
      { label: "3D Animation Guide", href: "/learn/3d-animation-guide" },
      { label: "Services (done-for-you)", href: "/services" },
    ],
  },
  {
    id: "hobbyist",
    label: "Hobbyist / Explorer",
    steps: [
      { label: "All 5 guides in order", href: "/learn/ai-animation-basics" },
      { label: "Tools directory", href: "/tools" },
      { label: "Join the community", href: "/community" },
    ],
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">
            New here? Start at Step 1.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Your AI Animation{" "}
            <span className="gradient-text">Learning Roadmap</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Follow these 4 stages in order and you&apos;ll go from complete beginner to
            confident AI animation creator. No experience required.
          </p>
          <Button href="#stage-1" size="lg" iconRight={<ArrowRight size={18} />}>
            Begin Stage 1
          </Button>
        </div>
      </section>

      {/* Stages */}
      <section id="stage-1" className="section-py px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {stages.map((stage, i) => (
            <div
              key={stage.number}
              className="rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-surface-1)] shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className={`h-1.5 bg-gradient-to-r ${stage.gradient}`} />
              <div className="p-8">
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                    {stage.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-1">
                      {stage.label}
                    </p>
                    <h2 className="text-2xl font-bold mb-3">{stage.title}</h2>
                    <p className="text-[var(--color-text-secondary)] mb-5 leading-relaxed">
                      {stage.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {stage.outcomes.map((o) => (
                        <li key={o} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <span className="text-[var(--color-mint)]">✓</span> {o}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button href={stage.href} iconRight={<ArrowRight size={16} />}>
                        {stage.ctaLabel}
                      </Button>
                      <span className="text-xs text-[var(--color-text-tertiary)]">{stage.time}</span>
                    </div>
                    {stage.bonus && (
                      <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">
                        {stage.bonus.label}:{" "}
                        <Link href={stage.bonus.href} className="text-[var(--color-indigo)] font-medium hover:underline">
                          {stage.bonus.title}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools recommendation */}
      <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] text-white mb-5">
            <Wrench size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Recommended tools to start</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Not sure which AI tools to use? We&apos;ve curated a beginner-friendly list — with difficulty ratings and the right tool for each stage.
          </p>
          <Button href="/tools" variant="secondary">
            Browse the tools directory →
          </Button>
        </div>
      </section>

      {/* Pick your path */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Tailored for you"
            title="Pick your path"
            subtitle="Not everyone starts with the same goal. Here's a tailored starting point based on what you want to create."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {paths.map((path) => (
              <div
                key={path.id}
                className="rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]"
              >
                <h3 className="font-bold text-lg mb-4">{path.label}</h3>
                <ol className="space-y-2">
                  {path.steps.map((step, i) => (
                    <li key={step.href} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[rgba(91,91,214,0.1)] text-[var(--color-indigo)] text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <Link href={step.href} className="text-[var(--color-indigo)] hover:underline">
                        {step.label}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <NewsletterSection />
    </>
  );
}
