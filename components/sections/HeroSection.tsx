"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Play, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Cinematic "scenes" rendered as pure-CSS gradient frames (zero image weight)
const scenes = [
  { label: "Character", sub: "turnaround", grad: "linear-gradient(135deg,#ff9e4f,#ff4d7d)", depth: 1 },
  { label: "Cartoon", sub: "expression sheet", grad: "linear-gradient(135deg,#9b5cff,#37c6ff)", depth: 2 },
  { label: "Film shot", sub: "cinematic frame", grad: "linear-gradient(135deg,#2fd4c4,#6d5cff)", depth: 3 },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const auroraY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const stageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Aurora light field */}
      <motion.div style={{ y: auroraY }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[12%] -right-40 w-[680px] h-[680px] rounded-full blur-3xl opacity-70"
          style={{ background: "radial-gradient(circle,#ff4d7d55,transparent 60%)" }} />
        <div className="absolute -top-32 left-[8%] w-[520px] h-[520px] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle,#ffb15c55,transparent 60%)" }} />
        <div className="absolute bottom-[2%] left-[28%] w-[460px] h-[460px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle,#6d5cff55,transparent 60%)" }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center w-full">
        {/* ── Copy ── */}
        <motion.div variants={container} initial="hidden" animate="visible" style={{ y: copyY }}>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold mb-7"
          >
            <Sparkles size={13} className="text-[var(--color-amber)]" />
            <span className="eyebrow text-[var(--color-text-secondary)] !tracking-[0.12em]">
              The animation studio for beginners
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight mb-6"
          >
            Make the movie that&apos;s only ever
            <br className="hidden sm:block" /> existed{" "}
            <span className="gradient-text-magic">in your head.</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-9 max-w-xl leading-relaxed">
            Direct characters, build worlds, and finish real animated films —
            with AI doing the heavy lifting and us guiding every frame. You bring
            the imagination. We&apos;ll show you the rest.{" "}
            <span className="text-[var(--color-text-primary)] font-medium">Zero experience required.</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3.5">
            <Button href="/start-here" size="lg" iconRight={<ArrowRight size={18} />}>
              Begin your story
            </Button>
            <Button
              href={siteConfig.WHATSAPP_URL}
              external
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={18} />}
            >
              Join the studio
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-6 text-xs text-[var(--color-text-tertiary)]">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)]" /> Free to learn</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)]" /> No software needed</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-coral)]" /> 100s of creators</span>
          </motion.div>
        </motion.div>

        {/* ── Living cinematic stage ── */}
        <motion.div style={{ y: stageY }} className="relative h-[440px] sm:h-[500px] flex items-center justify-center">
          {/* Main framed scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -12 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ transformPerspective: 1200 }}
            className="relative z-20 w-[80%] sm:w-[78%] aspect-[4/5] rounded-[26px] p-2 glass shadow-[0_40px_120px_rgba(255,77,125,0.28)]"
          >
            <div className="relative w-full h-full rounded-[20px] overflow-hidden"
              style={{ background: "linear-gradient(150deg,#1a1030,#3a1840 45%,#0d1840)" }}>
              {/* animated light sweep */}
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(115deg,transparent 30%,rgba(255,255,255,0.14) 50%,transparent 70%)" }}
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              />
              {/* floating "stars"/particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/70"
                  style={{ top: `${15 + i * 16}%`, left: `${20 + (i % 3) * 28}%` }}
                  animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
              {/* play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  aria-label="Play preview"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full glass flex items-center justify-center shadow-[0_8px_40px_rgba(255,158,79,0.5)]"
                >
                  <span className="absolute inset-0 rounded-full animate-ping bg-white/10" />
                  <Play size={30} className="text-white ml-1" fill="white" />
                </motion.button>
              </div>
              {/* caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-semibold">&quot;The Underdog&quot; — opening shot</p>
                <p className="text-white/60 text-xs">Made with the Frame Zero workflow</p>
              </div>
            </div>
          </motion.div>

          {/* Floating scene frames around the stage */}
          {scenes.map((s, i) => {
            const positions = [
              "top-2 -left-2 sm:left-2 rotate-[-8deg]",
              "bottom-6 -left-4 sm:left-0 rotate-[6deg]",
              "top-10 -right-3 sm:-right-2 rotate-[9deg]",
            ];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 180, damping: 16 }}
                className={`absolute z-30 ${positions[i]}`}
              >
                <motion.div
                  animate={{ y: [0, i % 2 ? 10 : -10, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="w-28 sm:w-32 rounded-2xl p-1.5 glass shadow-xl"
                >
                  <div className="aspect-[5/6] rounded-xl mb-1.5" style={{ background: s.grad }} />
                  <p className="px-1 text-[11px] font-bold leading-tight text-[var(--color-text-primary)]">{s.label}</p>
                  <p className="px-1 text-[10px] text-[var(--color-text-tertiary)]">{s.sub}</p>
                </motion.div>
              </motion.div>
            );
          })}

          {/* status chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute z-40 -bottom-2 right-2 sm:right-8 glass rounded-full px-3.5 py-2 flex items-center gap-2 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] animate-pulse" />
            <span className="text-xs font-medium">Rendering your next scene…</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Film-strip marquee */}
      <motion.div style={{ opacity: fade }} className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-[var(--color-glass-border)] bg-[var(--color-surface-1)]/40 backdrop-blur-sm">
        <div className="flex gap-3 py-3 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].flatMap(() =>
            ["Characters", "Cartoons", "Short films", "AI worlds", "Story scenes", "Brand content", "Music videos", "Reels"].map((t, i) => (
              <span key={t + i} className="inline-flex items-center gap-2 text-xs font-medium text-[var(--color-text-tertiary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-coral)]" /> {t}
                <span className="mx-3 text-[var(--color-glass-border)]">/</span>
              </span>
            ))
          )}
        </div>
      </motion.div>

      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
