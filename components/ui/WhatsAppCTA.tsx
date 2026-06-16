"use client";

import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "./Button";
import { fadeUp, staggerContainer } from "@/lib/motion";

const benefits = [
  "Free weekly AI animation tips",
  "Tool recommendations & tutorials",
  "Behind-the-scenes of real projects",
  "Ask questions, get answers fast",
  "A supportive community of creators",
];

export default function WhatsAppCTA() {
  return (
    <section className="section-py px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
          style={{ background: "linear-gradient(135deg, rgba(91,91,214,0.08) 0%, rgba(138,92,246,0.06) 100%)" }}
        >
          <div className="flex-1">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)]">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)]">Free community</p>
                <p className="font-bold">Join on WhatsApp</p>
              </div>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-4">
              Get free weekly tips + support from other creators
            </motion.h2>
            <motion.ul variants={staggerContainer(0.06)} className="space-y-2 mb-7">
              {benefits.map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <Check size={15} className="text-[var(--color-mint)] flex-shrink-0" />
                  {b}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Button
                href={siteConfig.WHATSAPP_URL}
                external
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
              >
                Join the Community — it&apos;s free
              </Button>
            </motion.div>
          </div>

          {/* Decorative side */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex flex-col items-center justify-center gap-4 text-center"
          >
            <div className="w-32 h-32 rounded-3xl bg-[#25D366] flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.4)]">
              <MessageCircle size={56} className="text-white" />
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-[160px]">
              Hundreds of creators learning together
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
