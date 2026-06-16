import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import FAQItem from "@/components/ui/FAQItem";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Join the AI Animation WhatsApp Community",
  description:
    "Free weekly AI animation tips, creator support, and behind-the-scenes — join hundreds of creators learning together.",
  alternates: { canonical: "/community" },
};

const benefits = [
  { title: "Free weekly AI animation tips", desc: "Every week: one actionable tip, tool recommendation, or mini tutorial — sent directly to you." },
  { title: "Ask questions, get real answers", desc: "Stuck on a tool or technique? Post your question and get help from people who've been there." },
  { title: "Behind-the-scenes of real projects", desc: "We share the actual workflow behind the AI animations we create — including what didn't work." },
  { title: "Tool updates and new AI releases", desc: "The AI space moves fast. We filter the noise and share only what's useful for creators." },
  { title: "Feedback on your work", desc: "Share your AI animations and get genuine, constructive feedback from other creators." },
  { title: "First access to new resources", desc: "Community members get new guides, prompt packs, and checklists before they're published on the site." },
];

const steps = [
  { number: "01", title: "Click the button below", desc: "It opens WhatsApp directly — no extra steps." },
  { number: "02", title: "Join the group", desc: "You'll be added to the Frame Zero AI Animation community instantly." },
  { number: "03", title: "Introduce yourself", desc: "Tell us what you want to create — we'd love to know what brought you here." },
];

const faqs = [
  { question: "Is it really free to join?", answer: "Yes. Completely free. There's no paid tier, no upsell, no subscription. Just a WhatsApp group where creators learn together." },
  { question: "Will I get spammed?", answer: "No. We post 1–2 times per week maximum, and only when there's something genuinely useful to share. We hate unnecessary notifications as much as you do." },
  { question: "Is this just a sales group?", answer: "No. Occasionally we'll mention our done-for-you service when relevant, but the community exists to teach and support — not to sell. The ratio is 95% value, 5% mention of services at most." },
  { question: "Can I leave if I want?", answer: "Of course. You can leave the WhatsApp group at any time with one tap. No hard feelings, no follow-up messages." },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.4)] mb-6">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Join hundreds of creators
            <br />
            <span className="gradient-text">learning AI animation together</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] mb-4 max-w-2xl mx-auto leading-relaxed">
            Get free weekly tips, community support, behind-the-scenes content, and
            feedback on your work — all on WhatsApp.
          </p>
          <p className="text-sm text-[var(--color-text-tertiary)] mb-8">Free to join · No spam · Leave any time</p>
          <Button
            href={siteConfig.WHATSAPP_URL}
            external
            variant="whatsapp"
            size="lg"
            icon={<MessageCircle size={20} />}
          >
            Join the Community — it&apos;s free
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] text-center mb-8">What you get</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-5 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)]">
                <Check size={18} className="text-[var(--color-mint)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">{b.title}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={siteConfig.WHATSAPP_URL} external variant="whatsapp" size="lg" icon={<MessageCircle size={18} />}>
              Join free on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* What happens after joining */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] text-center mb-8">What happens next</p>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && <div className="flex-1 w-px bg-[rgba(37,211,102,0.3)] mt-2 min-h-[24px]" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-6">Questions about the community</p>
          {faqs.map((faq) => <FAQItem key={faq.question} {...faq} />)}
          <div className="mt-8 text-center">
            <Button href={siteConfig.WHATSAPP_URL} external variant="whatsapp" size="lg" icon={<MessageCircle size={18} />}>
              Join now — it&apos;s free
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
