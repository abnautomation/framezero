import Link from "next/link";
import { Mail, PlayCircle, Camera, MessageCircle } from "lucide-react";
import { siteConfig, footerLinks } from "@/config/site";
import NewsletterInline from "@/components/ui/NewsletterInline";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-2)] border-t border-[var(--color-glass-border)]">
      {/* Newsletter band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-b border-[var(--color-glass-border)]">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-2">
            Free weekly tips
          </p>
          <h2 className="text-2xl font-bold mb-2">
            The AI Animation Playbook
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6 text-sm">
            Beginner-friendly tips, tools, and tutorials — every week, free.
          </p>
          <NewsletterInline />
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex items-center justify-center text-white text-sm font-black">
                FZ
              </span>
              {siteConfig.BRAND_NAME}
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 max-w-xs">
              {siteConfig.TAGLINE}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={siteConfig.YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[var(--color-text-tertiary)] hover:text-[var(--color-coral)] transition-colors"
              >
                <PlayCircle size={18} />
              </Link>
              <Link
                href={siteConfig.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[var(--color-text-tertiary)] hover:text-[var(--color-violet)] transition-colors"
              >
                <Camera size={18} />
              </Link>
              <Link
                href={siteConfig.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[var(--color-text-tertiary)] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={18} />
              </Link>
              <a
                href={`mailto:${siteConfig.CONTACT_EMAIL}`}
                aria-label="Email"
                className="text-[var(--color-text-tertiary)] hover:text-[var(--color-indigo)] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-tertiary)]">
          <p>© {new Date().getFullYear()} {siteConfig.BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[var(--color-text-primary)] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--color-text-primary)] transition-colors">Terms</Link>
            <a href={`mailto:${siteConfig.CONTACT_EMAIL}`} className="hover:text-[var(--color-text-primary)] transition-colors">
              {siteConfig.CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
