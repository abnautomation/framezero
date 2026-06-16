"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Parallax blobs */}
      <motion.div
        style={{ y: blobY, scale: blobScale }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[rgba(91,91,214,0.18)] to-[rgba(138,92,246,0.12)] blur-3xl" />
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[rgba(57,182,255,0.12)] to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[rgba(61,220,151,0.1)] to-transparent blur-2xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Copy */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(91,91,214,0.1)] border border-[rgba(91,91,214,0.2)] text-[var(--color-indigo)] text-xs font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-indigo)] animate-pulse" />
            Free learning hub — no experience needed
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            Create stunning{" "}
            <span className="gradient-text">AI 3D animations</span>{" "}
            — even if you&apos;re starting from zero.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-lg leading-relaxed"
          >
            {siteConfig.BRAND_NAME} teaches complete beginners how to make professional
            AI-powered animations, cartoons, and short films — step by step,
            plain English.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Button href="/start-here" size="lg" iconRight={<ArrowRight size={18} />}>
              Start Learning — Free
            </Button>
            <Button
              href={siteConfig.WHATSAPP_URL}
              external
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={18} />}
            >
              Join Community
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 text-xs text-[var(--color-text-tertiary)]">
            No experience needed · Completely free to learn · Join 100s of creators
          </motion.p>
        </motion.div>

        {/* Right: Floating visual */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 glass rounded-3xl p-6 shadow-[0_24px_80px_rgba(91,91,214,0.2)] max-w-sm w-full"
          >
            {/* Mock animation preview */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--color-indigo)] via-[var(--color-violet)] to-[var(--color-sky)] flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Play size={28} className="text-white ml-1" />
              </div>
              {/* floating dots */}
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--color-coral)]"
              />
              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 left-6 w-2.5 h-2.5 rounded-full bg-[var(--color-mint)]"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">AI Animation Preview</p>
                <p className="text-xs text-[var(--color-text-tertiary)]">Made with Frame Zero workflow</p>
              </div>
              <div className="ml-auto text-xs font-medium text-[var(--color-mint)] bg-[rgba(61,220,151,0.12)] px-2 py-1 rounded-full">
                ✓ Free
              </div>
            </div>
          </motion.div>

          {/* Decorative bubble cards */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-4 -left-8 glass rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
          >
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">🎬 From zero to creator</p>
            <p className="text-xs text-[var(--color-text-tertiary)]">Step-by-step roadmap</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
          >
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">🤖 AI-powered tools</p>
            <p className="text-xs text-[var(--color-text-tertiary)]">No prior skills needed</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-[var(--color-text-tertiary)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
