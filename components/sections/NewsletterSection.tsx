"use client";

import { motion } from "framer-motion";
import NewsletterInline from "@/components/ui/NewsletterInline";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function NewsletterSection() {
  return (
    <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-3">
            Free weekly tips
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-3">
            The AI Animation Playbook
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--color-text-secondary)] mb-8">
            Every week, one beginner-friendly tip, tool recommendation, or tutorial — straight to your inbox. Free, always.
          </motion.p>
          <motion.div variants={fadeUp}>
            <NewsletterInline ctaText="Get free tips" />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 text-xs text-[var(--color-text-tertiary)]">
            No spam. Unsubscribe any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
