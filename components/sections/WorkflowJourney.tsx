"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Lightbulb, PenLine, Smile, Mountain, Clapperboard, Mic, Scissors, Rocket } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={22} />, title: "Idea", desc: "A spark in plain words — even one sentence is enough.", tools: [], guide: "/start-here", grad: "linear-gradient(135deg,#ffcd6b,#f2a93b)" },
  { icon: <PenLine size={22} />, title: "Script", desc: "Turn the idea into a scene-by-scene plan with an AI assistant.", tools: ["ChatGPT", "Claude"], guide: "/learn/filmmaking-with-ai", grad: "linear-gradient(135deg,#f2a93b,#ff5a3c)" },
  { icon: <Smile size={22} />, title: "Character", desc: "Generate a consistent character with image AI.", tools: ["DALL·E 3", "Midjourney"], guide: "/learn/3d-animation-guide", grad: "linear-gradient(135deg,#ff5a3c,#e8410f)" },
  { icon: <Mountain size={22} />, title: "Scene", desc: "Build backgrounds and worlds that match your style.", tools: ["Flux", "Midjourney"], guide: "/learn/cartoon-creation-guide", grad: "linear-gradient(135deg,#ff5a3c,#1f7d72)" },
  { icon: <Clapperboard size={22} />, title: "Animation", desc: "Bring stills to life with motion and camera moves.", tools: ["Kling AI", "Runway", "Pika"], guide: "/learn/3d-animation-guide", grad: "linear-gradient(135deg,#1f7d72,#36c9b0)" },
  { icon: <Mic size={22} />, title: "Voice & Sound", desc: "Add realistic voiceover, music, and sound effects.", tools: ["ElevenLabs", "Suno"], guide: "/learn/filmmaking-with-ai", grad: "linear-gradient(135deg,#36c9b0,#4fb8c9)" },
  { icon: <Scissors size={22} />, title: "Editing", desc: "Combine clips, audio, and captions into the final cut.", tools: ["CapCut", "DaVinci"], guide: "/learn/filmmaking-with-ai", grad: "linear-gradient(135deg,#4fb8c9,#1f7d72)" },
  { icon: <Rocket size={22} />, title: "Published", desc: "Export for your platform and share with the world.", tools: [], guide: "/learn/content-creation-guide", grad: "linear-gradient(135deg,#36c9b0,#ffcd6b)" },
];

function Step({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const left = index % 2 === 0;
  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
      {/* card on alternating sides */}
      <motion.div
        initial={{ opacity: 0, x: left ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={left ? "col-start-1 text-right" : "col-start-3 text-left"}
      >
        <div className="inline-block rounded-2xl p-5 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] max-w-sm hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all">
          <div className={`flex items-center gap-2 mb-2 ${left ? "justify-end" : ""}`}>
            <span className="text-xs font-black text-[var(--color-text-tertiary)]">STEP {index + 1}</span>
          </div>
          <h3 className="font-bold text-lg mb-1.5">{step.title}</h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{step.desc}</p>
          {step.tools.length > 0 && (
            <div className={`flex flex-wrap gap-1.5 mb-3 ${left ? "justify-end" : ""}`}>
              {step.tools.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-[rgba(255,90,60,0.1)] text-[var(--color-coral)] text-[11px] font-semibold">{t}</span>
              ))}
            </div>
          )}
          <Link href={step.guide} className="text-xs font-semibold text-[var(--color-indigo)] hover:underline">
            Learn this step →
          </Link>
        </div>
      </motion.div>

      {/* node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220, damping: 14 }}
        className="col-start-2 relative z-10"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-[0_8px_24px_rgba(255,90,60,0.3)] ring-4 ring-[var(--color-surface-1)]"
          style={{ background: step.grad }}
        >
          {step.icon}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function WorkflowJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 80%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-py px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto relative">
        {/* center spine */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 rounded-full bg-[var(--color-surface-3)] overflow-hidden">
          <motion.div style={{ scaleY: lineScale, transformOrigin: "top" }} className="w-full h-full"
            >
            <div className="w-full h-full" style={{ background: "var(--gradient-magic)" }} />
          </motion.div>
        </div>

        <div className="space-y-10 sm:space-y-14">
          {steps.map((s, i) => (
            <Step key={s.title} step={s} index={i} />
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-[var(--color-text-tertiary)] mt-14 max-w-md mx-auto">
        That&apos;s the whole journey — from a spark in your head to a video the world can watch.
      </p>
    </section>
  );
}
