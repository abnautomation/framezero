"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  accentColor?: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  accentColor = "var(--color-indigo)",
  className,
}: FeatureCardProps) {
  const content = (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, boxShadow: "var(--shadow-card-hover)" }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "group rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] h-full flex flex-col gap-4",
        href && "cursor-pointer",
        className
      )}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${accentColor}, var(--color-violet))` }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1 group-hover:text-[var(--color-indigo)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
      </div>
      {href && (
        <p className="text-sm font-medium text-[var(--color-indigo)] mt-auto">
          Learn more →
        </p>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="h-full">{content}</Link>;
  }
  return content;
}
