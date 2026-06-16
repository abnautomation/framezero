"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChapterScene } from "@/components/art/Scenes";

const chapters = [
  {
    n: "01",
    eyebrow: "The foundation",
    title: "AI Animation Basics",
    body: "What is AI content creation, and how do these tools actually work? We start at absolute zero and give you the language to create with confidence.",
    href: "/learn/ai-animation-basics",
    variant: 0,
    accent: "var(--color-coral)",
  },
  {
    n: "02",
    eyebrow: "First creation",
    title: "3D Animation",
    body: "Build 3D-style characters, scenes, and your first animated clip — no 3D software, no rigging, no technical experience required.",
    href: "/learn/3d-animation-guide",
    variant: 1,
    accent: "var(--color-mint)",
  },
  {
    n: "03",
    eyebrow: "Bring them alive",
    title: "Cartoon Creation",
    body: "Design cartoon characters with real personality, define their style and expressions, and turn them into shorts people remember.",
    href: "/learn/cartoon-creation-guide",
    variant: 2,
    accent: "var(--color-amber)",
  },
  {
    n: "04",
    eyebrow: "Become the director",
    title: "Filmmaking with AI",
    body: "Scenes, shots, camera, story beats, voice, and editing — assemble a real short film the way a studio does, solo.",
    href: "/learn/filmmaking-with-ai",
    variant: 3,
    accent: "var(--color-sky)",
  },
  {
    n: "05",
    eyebrow: "Build your name",
    title: "Content Creation",
    body: "Turn your animations into a content brand: hooks, posting strategy, platforms, and how to actually grow an audience.",
    href: "/learn/content-creation-guide",
    variant: 4,
    accent: "var(--color-coral)",
  },
];

function Chapter({
  progress,
  index,
  total,
  data,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  data: (typeof chapters)[number];
}) {
  const seg = 1 / total;
  const a = index * seg;
  const b = a + seg * 0.22;
  const c = (index + 1) * seg - seg * 0.22;
  const d = (index + 1) * seg;
  const first = index === 0;
  const last = index === total - 1;

  const opacity = useTransform(progress, [a, b, c, d], [first ? 1 : 0, 1, 1, last ? 1 : 0]);
  const y = useTransform(progress, [a, b, c, d], [first ? 0 : 70, 0, 0, last ? 0 : -70]);
  const artScale = useTransform(progress, [a, b, c, d], [0.82, 1, 1, 0.9]);
  const artRotate = useTransform(progress, [a, d], [index % 2 ? 6 : -6, index % 2 ? -3 : 3]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        {/* text */}
        <div className={index % 2 ? "lg:order-2" : ""}>
          <p className="eyebrow mb-3" style={{ color: data.accent }}>
            Chapter {data.n} · {data.eyebrow}
          </p>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">{data.title}</h3>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-md mb-7">
            {data.body}
          </p>
          <Link
            href={data.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white shadow-[0_8px_28px_rgba(255,90,60,0.32)] hover:gap-3 transition-all"
            style={{ background: "var(--gradient-primary)" }}
          >
            Read this chapter <ArrowRight size={16} />
          </Link>
        </div>
        {/* art */}
        <motion.div style={{ scale: artScale, rotate: artRotate }} className={`relative ${index % 2 ? "lg:order-1" : ""}`}>
          <div className="w-full max-w-[380px] mx-auto aspect-square">
            <ChapterScene variant={data.variant} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function RailDot({ progress, index, total }: { progress: MotionValue<number>; index: number; total: number }) {
  const seg = 1 / total;
  const mid = index * seg + seg / 2;
  const scale = useTransform(progress, [mid - seg * 0.5, mid, mid + seg * 0.5], [1, 1.9, 1]);
  const op = useTransform(progress, [mid - seg * 0.5, mid, mid + seg * 0.5], [0.3, 1, 0.3]);
  return (
    <motion.div style={{ scale, opacity: op }} className="w-2.5 h-2.5 rounded-full origin-center">
      <div className="w-full h-full rounded-full" style={{ background: "var(--gradient-primary)" }} />
    </motion.div>
  );
}

function ProgressRail({ progress, total }: { progress: MotionValue<number>; total: number }) {
  return (
    <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
      {chapters.map((_, i) => (
        <RailDot key={i} progress={progress} index={i} total={total} />
      ))}
    </div>
  );
}

export default function LearningCinematic() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const total = chapters.length;

  // Reduced-motion / accessible fallback: a clean static grid
  if (reduced) {
    return (
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-[var(--color-coral)] mb-3 text-center">The curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
            Five chapters, zero to creator
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {chapters.map((ch) => (
              <Link key={ch.href} href={ch.href}
                className="rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]">
                <p className="eyebrow mb-2" style={{ color: ch.accent }}>Chapter {ch.n}</p>
                <h3 className="font-bold text-lg mb-2">{ch.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{ch.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} style={{ height: `${total * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[var(--color-surface-2)]">
        {/* heading watermark */}
        <div className="absolute top-10 inset-x-0 text-center z-10 px-4">
          <p className="eyebrow text-[var(--color-coral)]">The curriculum · scroll to play</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
            Five chapters, zero to <span className="gradient-text">creator</span>
          </h2>
        </div>

        <ProgressRail progress={scrollYProgress} total={total} />

        <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-16 h-[62vh]">
          {chapters.map((ch, i) => (
            <Chapter key={ch.n} progress={scrollYProgress} index={i} total={total} data={ch} />
          ))}
        </div>

        {/* bottom progress bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full bg-[var(--color-surface-3)] overflow-hidden">
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: "left" }} className="h-full w-full"
            >
            <div className="h-full w-full" style={{ background: "var(--gradient-primary)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
