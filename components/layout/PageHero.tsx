"use client";

import { motion } from "framer-motion";

/**
 * Shared cinematic page hero — gives every interior page the same
 * Lantern & Ember opening beat. Eyebrow + magic-gradient title + subtitle,
 * with staggered blur-rise reveal.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* soft light wash */}
      <div aria-hidden className="absolute -top-24 right-[10%] w-[420px] h-[420px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle,#ff5a3c44,transparent 60%)" }} />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {eyebrow && (
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="eyebrow text-[var(--color-coral)] mb-4"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.06] mb-5"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
