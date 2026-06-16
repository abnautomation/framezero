"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { HeroDiorama, StoryboardCard } from "@/components/art/Scenes";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const dioramaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "var(--gradient-hero)" }}>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-10 items-center w-full">
        {/* ── Copy: pain → desire → transformation ── */}
        <motion.div variants={container} initial="hidden" animate="visible" style={{ y: copyY }}>
          <motion.p variants={item} className="eyebrow text-[var(--color-coral)] mb-5">
            For everyone who was told they couldn&apos;t
          </motion.p>

          <motion.p variants={item} className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-4 max-w-xl leading-relaxed">
            You&apos;ve pictured the characters. Imagined the scenes.
            Played whole films in your head — and watched every tutorial
            assume you already knew how.
          </motion.p>

          <motion.h1 variants={item}
            className="text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4rem] font-bold tracking-tight mb-6">
            The story was never the problem.
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text-magic">You just never had the studio.</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg text-[var(--color-text-secondary)] mb-9 max-w-xl leading-relaxed">
            Frame Zero hands you the studio — and walks you through it.
            Make real cartoons, characters, and films with AI doing the heavy lifting,
            starting from <span className="text-[var(--color-text-primary)] font-semibold">absolute zero</span>.
            No drawing. No software. No experience.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3.5">
            <Button href="/start-here" size="lg" iconRight={<ArrowRight size={18} />}>
              Make your first scene
            </Button>
            <Button href={siteConfig.WHATSAPP_URL} external variant="whatsapp" size="lg" icon={<MessageCircle size={18} />}>
              Join the studio
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--color-text-tertiary)]">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)]" /> Free to learn</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)]" /> No software needed</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-coral)]" /> Start in minutes</span>
          </motion.div>
        </motion.div>

        {/* ── Living diorama ── */}
        <div className="relative h-[460px] sm:h-[540px] flex items-center justify-center">
          <motion.div
            style={{ y: dioramaY }}
            initial={{ opacity: 0, scale: 0.92, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative z-10 w-[78%] sm:w-[74%] aspect-[42/52] rounded-[26px] p-2 glass shadow-[0_44px_120px_rgba(255,90,60,0.28)]"
          >
            <div className="w-full h-full rounded-[20px] overflow-hidden">
              <HeroDiorama />
            </div>
            {/* caption plate */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] animate-pulse" />
              <span className="text-xs font-medium">Scene 01 — &quot;The Beginning&quot;</span>
            </div>
          </motion.div>

          {/* floating storyboard frames */}
          <motion.div style={{ y: cardsY }} className="absolute inset-0 pointer-events-none">
            {[
              { pos: "top-0 -left-1 sm:left-2 rotate-[-9deg]", v: 0, label: "Character" },
              { pos: "bottom-10 -left-3 sm:left-0 rotate-[7deg]", v: 1, label: "Scene" },
              { pos: "top-16 -right-2 rotate-[10deg]", v: 2, label: "Shot" },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 180, damping: 15 }}
                className={`absolute z-20 ${c.pos}`}
              >
                <motion.div
                  animate={{ y: [0, i % 2 ? 12 : -12, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 sm:w-28 rounded-2xl p-1.5 glass shadow-xl"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-1.5">
                    <StoryboardCard variant={c.v} />
                  </div>
                  <p className="px-1 text-[11px] font-bold text-[var(--color-text-primary)]">{c.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* film-strip marquee */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-[var(--color-glass-border)] bg-[var(--color-surface-1)]/40 backdrop-blur-sm">
        <div className="flex gap-3 py-3 animate-[marquee_32s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].flatMap(() =>
            ["Characters", "Cartoons", "Short films", "AI worlds", "Story scenes", "Brand content", "Music videos", "Reels"].map((t, i) => (
              <span key={t + i} className="inline-flex items-center gap-2 text-xs font-medium text-[var(--color-text-tertiary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-coral)]" /> {t}
                <span className="mx-3 text-[var(--color-glass-border)]">/</span>
              </span>
            ))
          )}
        </div>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
