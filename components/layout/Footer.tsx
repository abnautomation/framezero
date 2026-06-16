import Link from "next/link";
import { Mail, PlayCircle, Camera, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/config/site";
import NewsletterInline from "@/components/ui/NewsletterInline";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-ink)] text-[var(--color-white)] overflow-hidden">
      {/* top gradient hairline */}
      <div className="h-px w-full" style={{ background: "var(--gradient-magic)" }} />

      {/* ambient glow */}
      <div aria-hidden className="absolute -top-20 left-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle,#ff4d7d,transparent 60%)" }} />

      {/* ── "Final scene" CTA band ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center border-b border-white/10">
        <p className="eyebrow text-[var(--color-amber)] mb-4">Your story starts now</p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 max-w-2xl mx-auto">
          The next great animation is{" "}
          <span className="gradient-text-magic">yours to make.</span>
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-8 text-sm">
          Join the weekly playbook and the creator community — both free, both built to get you making.
        </p>
        <div className="max-w-md mx-auto">
          <NewsletterInline ctaText="Get the playbook" />
        </div>
      </div>

      {/* ── Credits grid ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Logo className="[&_.gradient-text]:text-white mb-4" />
            <p className="text-sm text-white/55 mt-4 mb-5 max-w-xs">
              The animation studio for beginners. Turning imagination into films, cartoons,
              and worlds — from zero.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { icon: <PlayCircle size={16} />, href: siteConfig.YOUTUBE_URL, label: "YouTube" },
                { icon: <Camera size={16} />, href: siteConfig.INSTAGRAM_URL, label: "Instagram" },
                { icon: <MessageCircle size={16} />, href: siteConfig.WHATSAPP_URL, label: "WhatsApp" },
                { icon: <Mail size={16} />, href: `mailto:${siteConfig.CONTACT_EMAIL}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/8 text-white/70 hover:bg-white/15 hover:text-white hover:-translate-y-0.5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="eyebrow text-white/40 mb-4">{group.heading}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* credit roll line */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {siteConfig.BRAND_NAME} — directed by you.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Work with us</Link>
          </div>
        </div>
      </div>

      {/* giant watermark wordmark */}
      <div aria-hidden className="relative overflow-hidden h-20 sm:h-32 -mt-6 select-none pointer-events-none">
        <p className="absolute inset-x-0 bottom-[-0.35em] text-center font-bold tracking-tighter text-white/[0.04] text-[18vw] leading-none">
          FRAME ZERO
        </p>
      </div>
    </footer>
  );
}
