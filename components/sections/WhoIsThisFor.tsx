"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Film, PlayCircle, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const personas = [
  {
    id: "beginner",
    icon: <User size={18} />,
    label: "Total beginner",
    headline: "Never made anything? Perfect.",
    body: "You'll start from absolute zero — no software, no skills, no jargon. Just your imagination and a clear path that turns it into your first finished animation.",
    grad: "linear-gradient(135deg,#ff9e4f,#ff4d7d)",
    scene: "First character",
    cta: { label: "Start at step one", href: "/learn/ai-animation-basics" },
  },
  {
    id: "creator",
    icon: <Film size={18} />,
    label: "Story & cartoon creator",
    headline: "Bring your characters to life.",
    body: "You have ideas, characters, and stories waiting. Learn to design consistent cartoon characters and turn them into animated shorts and series.",
    grad: "linear-gradient(135deg,#9b5cff,#37c6ff)",
    scene: "Cartoon series",
    cta: { label: "Design your character", href: "/learn/cartoon-creation-guide" },
  },
  {
    id: "youtuber",
    icon: <PlayCircle size={18} />,
    label: "YouTuber & reels creator",
    headline: "Content that actually stands out.",
    body: "Stop blending in. Build a recognizable animated style and a repeatable workflow that ships scroll-stopping shorts and reels — fast.",
    grad: "linear-gradient(135deg,#2fd4c4,#6d5cff)",
    scene: "Viral short",
    cta: { label: "Grow your channel", href: "/learn/content-creation-guide" },
  },
  {
    id: "business",
    icon: <Briefcase size={18} />,
    label: "Business owner",
    headline: "Animated content for your brand.",
    body: "Want animated ads, intros, or social content — without an agency budget? Learn to make it yourself, or have us create it for you, risk-free.",
    grad: "linear-gradient(135deg,#ffc56f,#ff4d7d)",
    scene: "Brand film",
    cta: { label: "See done-for-you", href: "/services" },
  },
];

export default function WhoIsThisFor() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Built for your imagination"
          title="Whoever you are, this is your <span class='gradient-text'>starting line</span>"
          subtitle="Pick the creator you want to become — watch the path adapt to you."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-stretch">
          {/* Selector */}
          <div className="flex flex-col gap-3">
            {personas.map((persona, i) => {
              const selected = i === active;
              return (
                <button
                  key={persona.id}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group relative text-left rounded-2xl p-5 border transition-all duration-300 ${
                    selected
                      ? "border-transparent bg-[var(--color-surface-1)] shadow-[var(--shadow-card-hover)]"
                      : "border-[var(--color-glass-border)] bg-transparent hover:bg-[var(--color-surface-1)]/60"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="persona-rail"
                      className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
                      style={{ background: persona.grad }}
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: persona.grad }}
                    >
                      {persona.icon}
                    </span>
                    <div>
                      <p className="font-bold text-sm">{persona.label}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)]">{persona.scene}</p>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`ml-auto transition-all duration-300 ${selected ? "opacity-100 translate-x-0 text-[var(--color-coral)]" : "opacity-0 -translate-x-2"}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Adaptive preview */}
          <div className="relative rounded-3xl overflow-hidden min-h-[360px] border border-[var(--color-glass-border)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
                style={{ background: p.grad }}
              >
                <div className="absolute inset-0 bg-black/10" />
                {/* drifting scene tiles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20"
                    style={{ width: 90, height: 110, top: `${12 + i * 22}%`, right: `${8 + i * 10}%` }}
                    animate={{ y: [0, i % 2 ? 14 : -14, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="relative h-full flex flex-col justify-end p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={p.id + "-text"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 max-w-sm drop-shadow">
                    {p.headline}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed max-w-md mb-5 drop-shadow">
                    {p.body}
                  </p>
                  <Link
                    href={p.cta.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[var(--color-ink)] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {p.cta.label} <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
