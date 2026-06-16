"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const learnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLearnOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setLearnOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-[var(--shadow-glass)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex items-center justify-center text-white text-sm font-black">
            FZ
          </span>
          <span className="hidden sm:block">{siteConfig.BRAND_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} ref={learnRef} className="relative">
                <button
                  onClick={() => setLearnOpen((o) => !o)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    "hover:bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  )}
                  aria-expanded={learnOpen}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform duration-200", learnOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {learnOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 glass rounded-2xl shadow-[var(--shadow-glass)] overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[var(--color-indigo)] bg-[rgba(91,91,214,0.08)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors text-[var(--color-text-secondary)]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href={siteConfig.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#1fba58] transition-colors"
          >
            <MessageCircle size={15} />
            Join WhatsApp
          </Link>

          <Link
            href="/services"
            className="hidden md:block px-3 py-2 text-sm font-medium text-[var(--color-indigo)] hover:underline"
          >
            Free sample →
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass border-t border-[var(--color-glass-border)]"
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)]">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-surface-2)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-surface-2)] transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-[var(--color-glass-border)]">
                <Link
                  href={siteConfig.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm"
                >
                  <MessageCircle size={16} />
                  Join WhatsApp Community
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
