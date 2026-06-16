"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Layers } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Featured affiliate placement for SYNTX.AI (all-in-one AI studio).
 * Hormozi-style: dream outcome + effort/time collapse + risk removal,
 * kept calm and honest. No prices/numbers (site rule). Affiliate disclosed.
 */
export default function SyntxSpotlight() {
  const points = [
    "Text, image, video & voice AI — all under one login",
    "Go from idea to finished scene without switching tabs",
    "Beginner-friendly — no setup, start in your browser",
    "Free to try before you commit to anything",
  ];

  return (
    <section className="px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div aria-hidden className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-black/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-bold mb-5">
                <Layers size={13} /> Our #1 all-in-one pick for beginners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                Stop juggling ten AI tools.
                <br /> Make everything in one place.
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                Most beginners quit before they finish their first scene — not because
                it&apos;s hard, but because they&apos;re drowning in five logins, five tabs,
                and five tutorials. <strong>SYNTX.AI</strong> puts text, image, video,
                and voice AI under one roof, so your idea becomes a finished animation
                without ever leaving the page. It&apos;s the fastest way we know to start.
              </p>

              <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-white/90">
                    <Check size={15} className="mt-0.5 flex-shrink-0" /> {p}
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.SYNTX_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[var(--color-ink)] font-bold text-sm hover:gap-3 transition-all shadow-lg"
              >
                Try SYNTX.AI free <ArrowRight size={16} />
              </a>
              <p className="text-xs text-white/70 mt-4 max-w-md">
                We genuinely use and recommend SYNTX.AI. This is an affiliate link — using it
                supports Frame Zero at no extra cost to you. Thank you. 🙏
              </p>
            </div>

            {/* mini visual — the "one window" idea */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl glass p-4 shadow-2xl">
                <div className="flex gap-1.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { l: "Text", g: "linear-gradient(135deg,#ffcd6b,#f2a93b)" },
                    { l: "Image", g: "linear-gradient(135deg,#ff5a3c,#e8410f)" },
                    { l: "Video", g: "linear-gradient(135deg,#1f7d72,#36c9b0)" },
                    { l: "Voice", g: "linear-gradient(135deg,#4fb8c9,#1f7d72)" },
                  ].map((t, i) => (
                    <motion.div
                      key={t.l}
                      animate={{ y: [0, i % 2 ? 6 : -6, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                      className="aspect-[4/3] rounded-xl flex items-end p-2 text-xs font-bold"
                      style={{ background: t.g }}
                    >
                      {t.l}
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-xs text-white/70 mt-3">One studio. Every tool.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
