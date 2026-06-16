"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/motion";

const stages = [
  {
    number: "01",
    label: "Zero",
    title: "Understand the basics",
    desc: "Learn what AI animation is and how these tools work — no jargon.",
    href: "/learn/ai-animation-basics",
    color: "from-[#5b5bd6] to-[#7c6fdb]",
  },
  {
    number: "02",
    label: "Beginner",
    title: "Make your first AI visual",
    desc: "Create your first AI character, scene, or short video.",
    href: "/learn/3d-animation-guide",
    color: "from-[#7c6fdb] to-[#8a5cf6]",
  },
  {
    number: "03",
    label: "Creator",
    title: "Tell stories & make films",
    desc: "Script, shoot, and edit AI animations like a real filmmaker.",
    href: "/learn/filmmaking-with-ai",
    color: "from-[#8a5cf6] to-[#a855f7]",
  },
  {
    number: "04",
    label: "Advanced",
    title: "Grow as a creator",
    desc: "Build a content brand, grow an audience, and monetize your skills.",
    href: "/learn/content-creation-guide",
    color: "from-[#a855f7] to-[#39b6ff]",
  },
];

export default function LearningPathPreview() {
  return (
    <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Your roadmap"
          title="The 4-Stage Learning Path"
          subtitle="A clear, step-by-step path from zero to advanced creator. Follow the stages in order or jump to what you need."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
        >
          {stages.map((stage) => (
            <motion.div
              key={stage.number}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "var(--shadow-card-hover)" }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <Link
                href={stage.href}
                className="group block rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] h-full"
              >
                <div className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${stage.color} bg-clip-text text-transparent mb-1`}>
                  Stage {stage.number}
                </div>
                <div className="text-xs text-[var(--color-text-tertiary)] mb-3">{stage.label}</div>
                <h3 className="font-bold text-base mb-2 group-hover:text-[var(--color-indigo)] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {stage.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[var(--color-indigo)]">
                  Start <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/start-here"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-violet)] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(91,91,214,0.35)] hover:-translate-y-0.5 transition-transform"
          >
            View full learning path <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
