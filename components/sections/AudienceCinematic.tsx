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
import { User, Film, PlayCircle, Briefcase, ArrowRight } from "lucide-react";
import { ChapterScene } from "@/components/art/Scenes";

const personas = [
  {
    icon: <User size={20} />,
    label: "The total beginner",
    headline: "You've never made anything. That's exactly who this is for.",
    body: "No software, no skills, no jargon — just your imagination and a path that turns it into your first finished animation.",
    cta: { label: "Start at step one", href: "/learn/ai-animation-basics" },
    variant: 0,
    grad: "linear-gradient(135deg,#ffcd6b,#ff5a3c)",
  },
  {
    icon: <Film size={20} />,
    label: "The story creator",
    headline: "The characters in your head deserve to be seen.",
    body: "Design consistent cartoon characters and turn them into animated shorts and series that people actually follow.",
    cta: { label: "Design your character", href: "/learn/cartoon-creation-guide" },
    variant: 2,
    grad: "linear-gradient(135deg,#36c9b0,#1f7d72)",
  },
  {
    icon: <PlayCircle size={20} />,
    label: "The YouTuber & reels creator",
    headline: "Stop blending in. Start being unmistakable.",
    body: "Build a recognizable animated style and a repeatable workflow that ships scroll-stopping shorts — fast.",
    cta: { label: "Grow your channel", href: "/learn/content-creation-guide" },
    variant: 4,
    grad: "linear-gradient(135deg,#4fb8c9,#1f7d72)",
  },
  {
    icon: <Briefcase size={20} />,
    label: "The business owner",
    headline: "Animated content for your brand — without the agency bill.",
    body: "Make ads, intros, and social content yourself, or have us create it for you, risk-free. You only pay if you love it.",
    cta: { label: "See done-for-you", href: "/services" },
    variant: 3,
    grad: "linear-gradient(135deg,#f2a93b,#ff5a3c)",
  },
];

function Persona({
  progress,
  index,
  total,
  data,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  data: (typeof personas)[number];
}) {
  const seg = 1 / total;
  const a = index * seg;
  const b = a + seg * 0.24;
  const c = (index + 1) * seg - seg * 0.24;
  const d = (index + 1) * seg;
  const first = index === 0;
  const last = index === total - 1;

  const opacity = useTransform(progress, [a, b, c, d], [first ? 1 : 0, 1, 1, last ? 1 : 0]);
  const x = useTransform(progress, [a, b, c, d], [first ? 0 : 90, 0, 0, last ? 0 : -90]);
  const artY = useTransform(progress, [a, b, c, d], [60, 0, 0, -40]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-5xl">
        <motion.div style={{ x }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-xs font-bold mb-5" style={{ background: data.grad }}>
            {data.icon} {data.label}
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 max-w-lg leading-[1.08]">
            {data.headline}
          </h3>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-md mb-7">{data.body}</p>
          <Link href={data.cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white shadow-[0_8px_28px_rgba(255,90,60,0.32)] hover:gap-3 transition-all"
            style={{ background: "var(--gradient-primary)" }}>
            {data.cta.label} <ArrowRight size={16} />
          </Link>
        </motion.div>
        <motion.div style={{ y: artY }} className="relative">
          <div className="w-full max-w-[360px] mx-auto aspect-square">
            <ChapterScene variant={data.variant} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* Mobile / tablet / reduced-motion: clean animated reveal — no scroll-pinning. */
function MobilePersonas() {
  return (
    <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="eyebrow text-[var(--color-coral)] mb-2">Built for your imagination</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Whoever you are, this is your <span className="gradient-text">starting line</span>
          </h2>
        </div>
        <div className="space-y-6">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={p.cta.href}
                className="block rounded-3xl overflow-hidden bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]"
              >
                <div className="aspect-[16/10] w-full">
                  <ChapterScene variant={p.variant} />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-bold mb-3" style={{ background: p.grad }}>
                    {p.icon} {p.label}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{p.headline}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{p.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-coral)]">
                    {p.cta.label} <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinnedPersonas({ total }: { total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} style={{ height: `${total * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center px-6 sm:px-16"
        style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-24 inset-x-0 text-center z-10 px-4">
          <p className="eyebrow text-[var(--color-coral)]">Built for your imagination</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
            Whoever you are, this is your <span className="gradient-text">starting line</span>
          </h2>
        </div>

        <div className="relative w-full h-[60vh] mt-10">
          {personas.map((p, i) => (
            <Persona key={i} progress={scrollYProgress} index={i} total={total} data={p} />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full bg-[var(--color-surface-3)] overflow-hidden">
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: "left" }} className="h-full w-full">
            <div className="h-full w-full" style={{ background: "var(--gradient-primary)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function AudienceCinematic() {
  const reduced = useReducedMotion();
  const total = personas.length;

  if (reduced) return <MobilePersonas />;

  return (
    <>
      <div className="lg:hidden">
        <MobilePersonas />
      </div>
      <div className="hidden lg:block">
        <PinnedPersonas total={total} />
      </div>
    </>
  );
}
