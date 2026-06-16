"use client";

import { motion } from "framer-motion";
import { User, Film, PlayCircle, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

const personas = [
  {
    icon: <User size={22} />,
    title: "Complete beginners",
    description:
      "Never used AI tools before? Perfect. We start from scratch and explain everything in plain language.",
    color: "var(--color-indigo)",
  },
  {
    icon: <Film size={22} />,
    title: "Cartoon & story creators",
    description:
      "Have a character or story idea? Learn how to bring it to life as an animated short or series.",
    color: "var(--color-violet)",
  },
  {
    icon: <PlayCircle size={22} />,
    title: "YouTube & Instagram creators",
    description:
      "Want to stand out with AI animation content? We'll show you the exact workflow from idea to upload.",
    color: "var(--color-coral)",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Business owners",
    description:
      "Need animated videos for your brand, ads, or social media? Learn to make them yourself or hire us to do it.",
    color: "var(--color-mint)",
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Who this is for"
          title="This site is built for you — whoever you are"
          subtitle="Whether you want to learn, create, or just understand how AI animation works, you're in the right place."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {personas.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "var(--shadow-card-hover)" }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4"
                style={{
                  background: `linear-gradient(135deg, ${p.color}, var(--color-violet))`,
                }}
              >
                {p.icon}
              </div>
              <h3 className="font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
