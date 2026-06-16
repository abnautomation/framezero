"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Tool, Difficulty } from "@/app/tools/page";

const difficultyColor: Record<Difficulty, string> = {
  Easy: "text-[var(--color-mint)] bg-[rgba(54,201,176,0.12)]",
  Medium: "text-[var(--color-sky)] bg-[rgba(79,184,201,0.12)]",
  Advanced: "text-[var(--color-coral)] bg-[rgba(255,90,60,0.12)]",
};

export default function ToolCard({ tool, hue }: { tool: Tool; hue: string }) {
  return (
    <motion.a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer sponsored nofollow"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex gap-4 rounded-2xl p-5 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-card-hover)]"
    >
      {/* logo plate / preview */}
      <div className="relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden" style={{ background: hue }}>
        <span className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl">
          {tool.name[0]}
        </span>
        <motion.span
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg,transparent 30%,rgba(255,255,255,0.35) 50%,transparent 70%)" }}
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 0.7 }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="font-bold group-hover:text-[var(--color-coral)] transition-colors">{tool.name}</p>
          <ExternalLink size={14} className="text-[var(--color-text-tertiary)] flex-shrink-0 mt-1" />
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">{tool.tagline}</p>
        <p className="text-[11px] text-[var(--color-text-tertiary)] mb-3 truncate">
          <strong className="text-[var(--color-text-secondary)]">Best for:</strong> {tool.bestFor}
        </p>
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${difficultyColor[tool.difficulty]}`}>
            {tool.difficulty}
          </span>
          {tool.free && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full text-[var(--color-mint)] bg-[rgba(54,201,176,0.12)]">
              Free plan ✓
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}
