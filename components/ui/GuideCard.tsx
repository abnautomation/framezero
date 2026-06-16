"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface GuideCardProps {
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
  readTime?: string;
  date?: string;
  icon?: React.ReactNode;
}

export default function GuideCard({
  href,
  eyebrow,
  title,
  description,
  readTime,
  date,
  icon,
}: GuideCardProps) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -5, boxShadow: "var(--shadow-card-hover)" }} transition={{ duration: 0.18, ease: "easeOut" }}>
      <Link
        href={href}
        className="group block rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] h-full"
      >
        {icon && (
          <div className="mb-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex items-center justify-center text-white">
            {icon}
          </div>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-2">
            {eyebrow}
          </p>
        )}
        <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--color-indigo)] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto text-xs text-[var(--color-text-tertiary)]">
          <span>{date}{readTime && ` · ${readTime}`}</span>
          <ArrowRight size={14} className="text-[var(--color-indigo)] group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
