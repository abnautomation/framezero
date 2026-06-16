"use client";

import { motion } from "framer-motion";
import { Cpu, Box, Smile, Clapperboard, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { staggerContainer } from "@/lib/motion";

const guides = [
  {
    icon: <Cpu size={20} />,
    title: "AI Animation Basics",
    description:
      "What is AI content creation? How do generative AI tools actually work? Start here to understand the fundamentals.",
    href: "/learn/ai-animation-basics",
    accentColor: "var(--color-indigo)",
  },
  {
    icon: <Box size={20} />,
    title: "3D Animation Guide",
    description:
      "How to create 3D-style characters, scenes, and animations using AI tools — no 3D software experience needed.",
    href: "/learn/3d-animation-guide",
    accentColor: "var(--color-violet)",
  },
  {
    icon: <Smile size={20} />,
    title: "Cartoon Creation Guide",
    description:
      "Design cartoon characters, define their style and expressions, and turn them into animated shorts.",
    href: "/learn/cartoon-creation-guide",
    accentColor: "var(--color-coral)",
  },
  {
    icon: <Clapperboard size={20} />,
    title: "Filmmaking with AI",
    description:
      "Scenes, shots, camera angles, story beats, sound, and editing — how to make a real short film with AI.",
    href: "/learn/filmmaking-with-ai",
    accentColor: "var(--color-sky)",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Content Creation Guide",
    description:
      "Turn your animations into a content brand: hooks, posting strategy, platforms, and how to grow.",
    href: "/learn/content-creation-guide",
    accentColor: "var(--color-mint)",
  },
];

export default function WhatYoullLearn() {
  return (
    <section className="section-py px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="5 free guides"
          title="Everything you need to learn AI animation"
          subtitle="Five complete, beginner-friendly guides that take you from total zero to confident creator — in your own time, at your own pace."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {guides.map((g) => (
            <FeatureCard key={g.href} {...g} />
          ))}

          {/* CTA card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.18 }}
            className="rounded-2xl p-6 border-2 border-dashed border-[var(--color-indigo)] bg-[rgba(91,91,214,0.04)] flex flex-col justify-center items-center text-center gap-3"
          >
            <p className="font-bold text-lg">Not sure where to start?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Follow our guided learning path — Stage 1 to Stage 4.
            </p>
            <a
              href="/start-here"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-indigo)] hover:underline"
            >
              See the full roadmap →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
