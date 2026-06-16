"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/motion";

const chips = [
  "We create it first",
  "You review it",
  "Pay only if you love it",
];

export default function ServicesOfferBand() {
  return (
    <section className="section-py px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "var(--gradient-primary)" }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 blur-2xl translate-y-1/2 -translate-x-1/4" />
          </div>

          <div className="relative px-8 py-12 md:px-16 md:py-16 text-white">
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
              Done-for-you service
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              We create your AI animation first.
              <br />
              You only pay if you love it.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-7 max-w-xl">
              No upfront cost. No risk. Tell us your idea — we&apos;ll make a sample. If you&apos;re not happy, you pay nothing.
            </motion.p>

            {/* Chips */}
            <motion.div
              variants={staggerContainer(0.06)}
              className="flex flex-wrap gap-3 mb-9"
            >
              {chips.map((chip, i) => (
                <motion.div
                  key={chip}
                  variants={fadeUp}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <Check size={13} className="text-[var(--color-mint)]" />
                  {chip}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button
                href={siteConfig.WHATSAPP_URL}
                external
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
              >
                Get your free sample
              </Button>
              <Button
                href="/services"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 border hover:bg-white/10"
              >
                Learn more about the service
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
