import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Check, Shield, Zap, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "AI Animation Service — Custom Done-For-You AI Videos",
  description:
    "We create your AI animation first. You only pay if you love it. Custom AI 3D animated videos, storyboards, characters, and images — no upfront cost.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Custom AI 3D Animated Videos",
    description: "Short-form reels, ads, channel intros — fully animated with your character or idea.",
    bestFor: "YouTubers, brands, social media creators",
    deliverable: "Finished video, ready to post",
  },
  {
    title: "Full Storyboards",
    description: "Scene-by-scene visual plan with shot list, descriptions, and timing for your animation project.",
    bestFor: "Creators planning a series or longer project",
    deliverable: "PDF storyboard + shot list",
  },
  {
    title: "High-Quality AI Images",
    description: "Cinematic character portraits, thumbnails, product visuals, and scene renders.",
    bestFor: "Thumbnails, social posts, brand assets",
    deliverable: "High-res PNG files",
  },
  {
    title: "High-Quality AI Videos",
    description: "Cinematic AI-generated video clips — landscapes, product reveals, mood reels.",
    bestFor: "Ads, brand intros, content B-roll",
    deliverable: "Finished video clips",
  },
  {
    title: "Custom Character Design",
    description: "A full character sheet for your mascot or recurring character — multiple poses, expressions, outfits.",
    bestFor: "Brands needing a consistent mascot",
    deliverable: "Character sheet (PNG) + prompt reference",
  },
  {
    title: "Done-For-You Content Packages",
    description: "Ongoing animated reels for your brand, delivered consistently — hands-off content.",
    bestFor: "Business owners who want consistent social content",
    deliverable: "Recurring video package",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us your idea",
    description:
      "Send us a WhatsApp message describing what you want. As little or as much detail as you have — we'll ask follow-up questions.",
  },
  {
    number: "02",
    title: "We create a sample",
    description:
      "We make the animation or image. No upfront payment. You see the work before you decide anything.",
  },
  {
    number: "03",
    title: "You decide — pay only if you love it",
    description:
      "If the work is exactly what you wanted, you pay. If you're not happy, you pay nothing. That's the whole deal.",
  },
];

const faqs = [
  {
    question: "Is it really free if I don't like it?",
    answer: "Yes. We create the sample at our own cost and time. If you're not satisfied with what we create, you don't pay anything. No negotiations, no guilt — you simply say no and that's it.",
  },
  {
    question: "Why do you offer this risk-free?",
    answer: "Because we're confident in the quality of our work. We'd rather prove it to you first than ask you to trust us upfront. It removes all the risk from your side — and that's how it should be.",
  },
  {
    question: "How long does it take to create?",
    answer: "Most samples are delivered within 24–72 hours. Full projects vary by scope — we'll give you a timeline when you share your idea.",
  },
  {
    question: "How do I get started?",
    answer: "Just send us a WhatsApp message with your idea. You don't need to have all the details figured out — tell us what you're imagining and we'll take it from there.",
  },
  {
    question: "Do you keep the rights to the animation?",
    answer: "Once you pay, the work is fully yours. All rights transfer to you. We only retain the right to use it in our portfolio unless you request confidentiality.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div aria-hidden className="absolute -top-24 right-[12%] w-[420px] h-[420px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle,#ff5a3c44,transparent 60%)" }} />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="eyebrow text-[var(--color-coral)] mb-4">Done-for-you service</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            We create your animation first.{" "}
            <span className="gradient-text-magic">You only pay if you love it.</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
            No upfront cost. No risk. Tell us your idea — we&apos;ll make a sample.
            If you&apos;re not happy, you pay nothing.
          </p>

          {/* Reassurance chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {[
              { icon: <Zap size={14} />, text: "We create it first" },
              { icon: <Shield size={14} />, text: "You review it" },
              { icon: <Heart size={14} />, text: "Pay only if you love it" },
            ].map((chip) => (
              <div
                key={chip.text}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] text-sm font-medium"
              >
                <span className="text-[var(--color-coral)]">{chip.icon}</span>
                {chip.text}
              </div>
            ))}
          </div>

          <Button
            href={siteConfig.WHATSAPP_URL}
            external
            variant="whatsapp"
            size="lg"
            icon={<MessageCircle size={18} />}
          >
            Get your free sample on WhatsApp
          </Button>
          <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">
            Or{" "}
            <Link href="/contact" className="text-[var(--color-indigo)] hover:underline">
              send us a message via the contact form
            </Link>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-py px-4 sm:px-6 bg-[var(--color-surface-2)]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="The process" title="How it works" />
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_12px_rgba(91,91,214,0.35)]">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b from-[var(--color-indigo)] to-transparent mt-2 opacity-30 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="What we create"
            title="Our services"
            subtitle="Every service comes with the same risk-free guarantee — we create it first, you pay only if you love it."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] flex flex-col gap-3"
              >
                <h3 className="font-bold text-base">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">{service.description}</p>
                <div className="space-y-1.5 text-xs text-[var(--color-text-tertiary)]">
                  <p><strong className="text-[var(--color-text-secondary)]">Best for:</strong> {service.bestFor}</p>
                  <p><strong className="text-[var(--color-text-secondary)]">Deliverable:</strong> {service.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button href={siteConfig.WHATSAPP_URL} external variant="whatsapp" size="lg" icon={<MessageCircle size={18} />}>
              Tell us your idea — free sample
            </Button>
          </div>
        </div>
      </section>

      {/* Risk-free band */}
      <section className="px-4 sm:px-6 py-16 bg-[var(--color-surface-2)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-mint)] to-[var(--color-sky)] flex items-center justify-center text-white mx-auto mb-5">
            <Shield size={26} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Why it&apos;s risk-free for you</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Most services ask for a deposit, a contract, or at least a credit card. We don&apos;t.
            We create your animation sample first. You review it. If you&apos;re not happy with it for any reason, you don&apos;t pay — no awkward conversation needed.
          </p>
          <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
            {[
              "No upfront payment required",
              "No contracts to sign",
              "No credit card until you decide you love it",
              "If you don't like it, you pay nothing — period",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <Check size={16} className="text-[var(--color-mint)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button href={siteConfig.WHATSAPP_URL} external variant="whatsapp" icon={<MessageCircle size={18} />}>
            Get started — no risk
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Questions" title="Service FAQ" />
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
