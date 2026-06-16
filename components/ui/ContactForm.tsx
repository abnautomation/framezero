"use client";

import { useState } from "react";
import { Button } from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl p-8 bg-[rgba(61,220,151,0.06)] border border-[rgba(61,220,151,0.3)] text-center">
        <p className="text-2xl mb-2">✓</p>
        <p className="font-bold mb-1">Message sent!</p>
        <p className="text-sm text-[var(--color-text-secondary)]">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-surface-1)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-surface-1)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">Your message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or ask a question..."
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-surface-1)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] resize-y"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>
      )}
      <Button type="submit" disabled={status === "loading"} size="lg">
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
