"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const stages = [
  {
    number: "01",
    label: "Zero",
    title: "Understand the basics",
    desc: "Learn what AI animation is and how the tools work — no jargon, no assumptions.",
    href: "/learn/ai-animation-basics",
    grad: "linear-gradient(135deg,#ff9e4f,#ff4d7d)",
    reward: "Unlock: confidence",
  },
  {
    number: "02",
    label: "Beginner",
    title: "Make your first AI visual",
    desc: "Create your first AI character, scene, and short animated clip.",
    href: "/learn/3d-animation-guide",
    grad: "linear-gradient(135deg,#ff4d7d,#9b5cff)",
    reward: "Unlock: your first character",
  },
  {
    number: "03",
    label: "Creator",
    title: "Tell stories & make films",
    desc: "Script, shoot, and edit AI animations like a real filmmaker.",
    href: "/learn/filmmaking-with-ai",
    grad: "linear-gradient(135deg,#9b5cff,#37c6ff)",
    reward: "Unlock: your first film",
  },
  {
    number: "04",
    label: "Director",
    title: "Grow as a creator",
    desc: "Build a content brand, grow an audience, and monetize your craft.",
    href: "/learn/content-creation-guide",
    grad: "linear-gradient(135deg,#37c6ff,#2fd4c4)",
    reward: "Unlock: your studio",
  },
];

export default function LearningPathPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Your journey"
          title="From zero to <span class='gradient-text'>your own studio</span>, level by level"
          subtitle="Four stages, like levels in a game. Each one unlocks a new creative power."
        />

        <div ref={ref} className="relative">
          {/* progress rail */}
          <div className="hidden lg:block absolute top-[58px] left-0 right-0 h-1 rounded-full bg-[var(--color-surface-3)] overflow-hidden">
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: "left" }}
              className="h-full w-full rounded-full"
              // multi-stop magic gradient
              {...{ "data-rail": true }}
            >
              <div className="h-full w-full" style={{ background: "var(--gradient-magic)" }} />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                {/* node */}
                <div className="hidden lg:flex justify-center mb-8">
                  <div
                    className="relative z-10 w-7 h-7 rounded-full ring-4 ring-[var(--color-surface-2)] flex items-center justify-center"
                    style={{ background: stage.grad }}
                  >
                    <Star size={11} className="text-white" fill="white" />
                  </div>
                </div>

                <Link
                  href={stage.href}
                  className="group block rounded-[20px] p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] h-full hover:shadow-[var(--shadow-card-hover)] transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-2xl font-black bg-clip-text text-transparent"
                      style={{ backgroundImage: stage.grad }}
                    >
                      {stage.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)]">
                      {stage.label}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:gradient-text transition-all">{stage.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{stage.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold mb-4" style={{ color: "var(--color-coral)" }}>
                    <Lock size={11} /> {stage.reward}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-indigo)] group-hover:gap-2 transition-all">
                    Enter stage <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/start-here"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm shadow-[0_8px_30px_rgba(255,77,125,0.35)] hover:-translate-y-0.5 transition-transform"
            style={{ background: "var(--gradient-primary)" }}
          >
            Begin the journey <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
