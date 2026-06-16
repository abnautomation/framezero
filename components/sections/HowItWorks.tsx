"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wand2, Video } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/motion";

const steps = [
  {
    icon: <Lightbulb size={24} />,
    number: 1,
    title: "Start with your idea",
    description:
      "Every AI animation starts as a simple idea — a character, a story, a concept. In plain words, just like you'd describe it to a friend.",
    color: "var(--color-indigo)",
  },
  {
    icon: <Wand2 size={24} />,
    number: 2,
    title: "AI tools bring it to life",
    description:
      "Using tools like image generators, video AI, and voice synthesis, your idea is transformed into real visuals, motion, and sound.",
    color: "var(--color-violet)",
  },
  {
    icon: <Video size={24} />,
    number: 3,
    title: "Polish and publish",
    description:
      "A final edit pass, some music, and your animation is ready to share. From idea to published video — often in one session.",
    color: "var(--color-sky)",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-py px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The process"
          title="How AI animation actually works"
          subtitle="In three simple steps — no technical knowledge required."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-[var(--color-indigo)] via-[var(--color-violet)] to-[var(--color-sky)] opacity-30" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center gap-5"
            >
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-[0_4px_20px_rgba(91,91,214,0.3)] z-10 relative"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, var(--color-violet))`,
                  }}
                >
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-surface-1)] border-2 border-[var(--color-glass-border)] flex items-center justify-center text-xs font-bold text-[var(--color-text-tertiary)]">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-[var(--color-text-tertiary)]"
        >
          Want to see this in detail?{" "}
          <a href="/workflow" className="text-[var(--color-indigo)] font-medium hover:underline">
            See the full workflow →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
