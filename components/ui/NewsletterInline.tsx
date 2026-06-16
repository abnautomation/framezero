"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Mail } from "lucide-react";

interface NewsletterInlineProps {
  placeholder?: string;
  ctaText?: string;
}

export default function NewsletterInline({
  placeholder = "Enter your email",
  ctaText = "Subscribe free",
}: NewsletterInlineProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(61,220,151,0.1)] border border-[rgba(61,220,151,0.3)]">
        <span className="text-[var(--color-mint)] text-lg">✓</span>
        <p className="text-sm font-medium text-[var(--color-text-primary)]">
          You&apos;re in! Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Mail
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className="w-full pl-9 pr-4 py-3 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-surface-1)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)]"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className="whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing..." : ctaText}
      </Button>
      {status === "error" && (
        <p className="text-xs text-red-500 mt-1">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
