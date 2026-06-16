"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: "var(--shadow-card-hover)" } : undefined}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "rounded-2xl p-6",
        glass
          ? "glass"
          : "bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
