"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function StepCard({ step, title, description, icon }: StepCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex gap-5"
    >
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_12px_rgba(91,91,214,0.35)]">
          {step}
        </div>
        <div className="flex-1 w-px bg-gradient-to-b from-[var(--color-indigo)] to-transparent mt-2 opacity-30" />
      </div>
      <div className="pb-10">
        {icon && <div className="mb-2 text-[var(--color-indigo)]">{icon}</div>}
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
