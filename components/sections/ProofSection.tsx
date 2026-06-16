"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { staggerContainer, fadeUp } from "@/lib/motion";

const stats = [
  { value: 50, suffix: "+", label: "Tutorial guides published" },
  { value: 100, suffix: "+", label: "Creators in the community" },
  { value: 5, suffix: "", label: "Free learning guides" },
  { value: 0, suffix: "", prefix: "$", label: "Cost to start learning" },
];

const caseStudies = [
  {
    title: "Football-Baby AI Short",
    result: "10k+ views in 72 hours",
    description: "How we turned a simple idea into a viral AI cartoon using a 3-step workflow.",
    href: "/case-studies/football-baby-short",
  },
  {
    title: "Brand Intro Animation",
    result: "Client loved it on first draft",
    description: "A custom AI 3D intro for a clothing brand — made in one afternoon.",
    href: "/case-studies/brand-intro",
  },
];

export default function ProofSection() {
  return (
    <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="text-center p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]"
            >
              <p className="text-4xl font-bold gradient-text mb-1">
                <CountUp end={s.value} suffix={s.suffix} prefix={s.prefix ?? ""} />
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Case study highlights */}
        <SectionHeading
          eyebrow="Real examples"
          title="See AI animation in action"
          subtitle="Real projects, real results — with the exact process explained."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.title}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "var(--shadow-card-hover)" }}
              transition={{ duration: 0.18 }}
            >
              <Link
                href={cs.href}
                className="group block rounded-2xl overflow-hidden bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]"
              >
                <div className="aspect-video bg-gradient-to-br from-[var(--color-indigo)] via-[var(--color-violet)] to-[var(--color-sky)] flex items-center justify-center">
                  <span className="text-white/60 text-sm">Video preview</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-[var(--color-mint)] mb-1">✓ {cs.result}</p>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--color-indigo)] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{cs.description}</p>
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
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-indigo)] hover:underline"
          >
            View all case studies →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
