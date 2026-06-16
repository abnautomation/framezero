"use client";

import { motion } from "framer-motion";
import { Lightbulb, Smile, Mountain, Clapperboard, Film, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const flow = [
  { icon: <Lightbulb size={22} />, label: "Idea", note: "A spark in plain words", grad: "linear-gradient(135deg,#ff9e4f,#ffc56f)" },
  { icon: <Smile size={22} />, label: "Character", note: "AI brings it to life", grad: "linear-gradient(135deg,#ff4d7d,#ff9e4f)" },
  { icon: <Mountain size={22} />, label: "Scene", note: "Build the world", grad: "linear-gradient(135deg,#9b5cff,#ff4d7d)" },
  { icon: <Clapperboard size={22} />, label: "Animation", note: "Add motion & voice", grad: "linear-gradient(135deg,#37c6ff,#9b5cff)" },
  { icon: <Film size={22} />, label: "Finished film", note: "Ready to publish", grad: "linear-gradient(135deg,#2fd4c4,#37c6ff)" },
];

export default function HowItWorks() {
  return (
    <section className="section-py px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="The transformation"
          title="Watch an idea become a <span class='gradient-text'>finished film</span>"
          subtitle="Five steps. The same pipeline a studio uses — minus the studio."
        />

        {/* Flow */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0">
          {flow.map((step, i) => (
            <div key={step.label} className="flex md:flex-col items-center md:flex-1 gap-4 md:gap-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.18, type: "spring", stiffness: 180, damping: 14 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative flex flex-col items-center text-center md:px-2"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-[0_8px_30px_rgba(255,77,125,0.3)] mb-3"
                  style={{ background: step.grad }}
                >
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] flex items-center justify-center text-[11px] font-bold text-[var(--color-text-secondary)]">
                    {i + 1}
                  </span>
                </motion.div>
                <p className="font-bold text-sm">{step.label}</p>
                <p className="text-xs text-[var(--color-text-tertiary)] max-w-[120px]">{step.note}</p>
              </motion.div>

              {/* connector arrow */}
              {i < flow.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18 + 0.1 }}
                  className="md:flex-1 md:self-start md:mt-8 flex items-center justify-center text-[var(--color-text-tertiary)]"
                >
                  <ArrowRight size={18} className="rotate-90 md:rotate-0" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-sm text-[var(--color-text-tertiary)]"
        >
          Want the full breakdown with the exact tools?{" "}
          <a href="/workflow" className="text-[var(--color-coral)] font-semibold hover:underline">
            See the complete workflow →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
