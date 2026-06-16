"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import { staggerContainer, fadeUp } from "@/lib/motion";

const faqs = [
  {
    question: "Do I need any experience or special software to start?",
    answer:
      "Not at all. Our guides assume zero prior knowledge of AI, animation, or design. We use beginner-friendly tools — most of which have free plans — and explain every step in plain language.",
  },
  {
    question: "Is it expensive to get started with AI animation?",
    answer:
      "Most of the tools we recommend have generous free tiers, so you can create your first AI animations without spending anything. We'll tell you exactly which tools are free and when a paid plan becomes worthwhile.",
  },
  {
    question: "What if I just want you to make an animation for me?",
    answer:
      "We offer a done-for-you service. We create a sample first — you only pay if you love it. No upfront cost, no risk. Get in touch via WhatsApp or our contact page to start.",
  },
];

export default function FAQTeaser() {
  return (
    <section className="section-py px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Common questions"
          title="Quick answers"
          subtitle="Got more questions? We have a full FAQ page."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-indigo)] hover:underline"
          >
            View all FAQs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
