import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";
import ReadingProgress from "@/components/ui/ReadingProgress";
import NewsletterSection from "@/components/sections/NewsletterSection";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

interface GuideLayoutProps {
  children: React.ReactNode;
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
  outcomes?: string[];
  nextGuide?: { label: string; href: string };
  prevGuide?: { label: string; href: string };
  relatedGuides?: { label: string; href: string }[];
  readTime?: string;
}

export default function GuideLayout({
  children,
  crumbs,
  title,
  subtitle,
  outcomes,
  nextGuide,
  prevGuide,
  relatedGuides,
  readTime,
}: GuideLayoutProps) {
  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              {subtitle}
            </p>
          )}
          {readTime && (
            <p className="text-sm text-[var(--color-text-tertiary)]">{readTime} read</p>
          )}
          {outcomes && outcomes.length > 0 && (
            <div className="mt-6 rounded-2xl bg-[rgba(91,91,214,0.06)] border border-[rgba(91,91,214,0.15)] p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-3">
                By the end of this guide, you&apos;ll be able to…
              </p>
              <ul className="space-y-2">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-mint)] mt-0.5">✓</span> {o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {children}
        </div>
      </section>

      {/* Prev / Next */}
      {(prevGuide || nextGuide) && (
        <section className="px-4 sm:px-6 pb-8">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 pt-8 border-t border-[var(--color-glass-border)]">
            {prevGuide ? (
              <Link
                href={prevGuide.href}
                className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-indigo)] transition-colors"
              >
                <ArrowLeft size={16} />
                {prevGuide.label}
              </Link>
            ) : <div />}
            {nextGuide && (
              <Link
                href={nextGuide.href}
                className="flex items-center gap-2 text-sm font-semibold text-[var(--color-indigo)] hover:underline"
              >
                Next: {nextGuide.label}
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Related guides */}
      {relatedGuides && relatedGuides.length > 0 && (
        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-widest mb-4">
              Related guides
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedGuides.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="px-4 py-2 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-surface-1)] text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-indigo)] hover:border-[var(--color-indigo)] transition-colors"
                >
                  {g.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhatsAppCTA />
      <NewsletterSection />
    </>
  );
}
