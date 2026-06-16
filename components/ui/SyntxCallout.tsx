import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Compact inline affiliate recommendation for SYNTX.AI — drop into guides,
 * workflow, and resources where a "shortcut" makes sense. Honest + calm.
 */
export default function SyntxCallout({
  heading = "The beginner shortcut",
  text = "Don't want to set up five separate tools? SYNTX.AI does text, image, video, and voice AI in one place — the easiest way to make everything from a single window.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <div className="not-prose my-8 rounded-2xl p-5 border border-[var(--color-glass-border)] bg-[rgba(255,90,60,0.05)]">
      <div className="flex gap-3">
        <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
          <Sparkles size={16} />
        </span>
        <div>
          <p className="font-bold text-sm mb-1">{heading}</p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{text}</p>
          <a
            href={siteConfig.SYNTX_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-coral)] hover:gap-2.5 transition-all"
          >
            Try SYNTX.AI free <ArrowRight size={14} />
          </a>
          <p className="text-[11px] text-[var(--color-text-tertiary)] mt-2">Affiliate link — supports Frame Zero at no cost to you.</p>
        </div>
      </div>
    </div>
  );
}
