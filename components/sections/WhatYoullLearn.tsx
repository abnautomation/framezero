"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Box, Smile, Clapperboard, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { staggerContainer, fadeUp } from "@/lib/motion";

const guides = [
  {
    icon: <Cpu size={22} />,
    title: "AI Animation Basics",
    description: "What is AI content creation? How do these tools actually work? Start here to understand the fundamentals — in plain English.",
    href: "/learn/ai-animation-basics",
    grad: "linear-gradient(135deg,#ff9e4f,#ff4d7d)",
    chapter: "Chapter 01",
  },
  {
    icon: <Box size={22} />,
    title: "3D Animation Guide",
    description: "Create 3D-style characters, scenes, and animations using AI — with zero 3D software and zero rigging.",
    href: "/learn/3d-animation-guide",
    grad: "linear-gradient(135deg,#9b5cff,#37c6ff)",
    chapter: "Chapter 02",
  },
  {
    icon: <Smile size={22} />,
    title: "Cartoon Creation Guide",
    description: "Design cartoon characters with personality, define their style and expressions, and turn them into shorts.",
    href: "/learn/cartoon-creation-guide",
    grad: "linear-gradient(135deg,#ff4d7d,#9b5cff)",
    chapter: "Chapter 03",
  },
  {
    icon: <Clapperboard size={22} />,
    title: "Filmmaking with AI",
    description: "Scenes, shots, camera angles, story beats, sound, and editing — how to make a real short film with AI.",
    href: "/learn/filmmaking-with-ai",
    grad: "linear-gradient(135deg,#37c6ff,#6d5cff)",
    chapter: "Chapter 04",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Content Creation Guide",
    description: "Turn your animations into a content brand: hooks, posting strategy, platforms, and how to grow.",
    href: "/learn/content-creation-guide",
    grad: "linear-gradient(135deg,#2fd4c4,#ff9e4f)",
    chapter: "Chapter 05",
  },
];

export default function WhatYoullLearn() {
  return (
    <section className="section-py px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The curriculum"
          title="Five chapters, zero to <span class='gradient-text'>creator</span>"
          subtitle="Complete, beginner-friendly guides that take you from total zero to confident creator — at your own pace."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {guides.map((g) => (
            <motion.div key={g.href} variants={fadeUp}>
              <TiltCard className="h-full">
                <Link
                  href={g.href}
                  className="group relative flex flex-col gap-4 h-full rounded-[20px] p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] overflow-hidden"
                >
                  {/* spotlight wash */}
                  <span className="pointer-events-none absolute inset-0 spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-5 right-6 text-[11px] font-bold tracking-widest uppercase text-[var(--color-text-tertiary)]">
                    {g.chapter}
                  </span>
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: g.grad }}
                  >
                    {g.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg mb-1.5 group-hover:gradient-text transition-all">{g.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{g.description}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-coral)] group-hover:gap-3 transition-all">
                    Read chapter <ArrowRight size={14} />
                  </span>
                </Link>
              </TiltCard>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div variants={fadeUp}>
            <TiltCard className="h-full" intensity={6}>
              <Link
                href="/start-here"
                className="relative flex flex-col justify-center items-center text-center gap-4 h-full rounded-[20px] p-6 overflow-hidden text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Sparkles size={26} />
                <div>
                  <p className="font-bold text-xl mb-1">Not sure where to start?</p>
                  <p className="text-sm text-white/85">Follow the guided path — Chapter 1 to a finished film.</p>
                </div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[var(--color-ink)] font-semibold text-sm">
                  Open the roadmap <ArrowRight size={15} />
                </span>
              </Link>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
