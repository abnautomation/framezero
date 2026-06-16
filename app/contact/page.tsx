import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Frame Zero — for project inquiries, questions, or community support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.BRAND_NAME,
    url: siteConfig.SITE_URL,
    email: siteConfig.CONTACT_EMAIL,
    sameAs: [siteConfig.YOUTUBE_URL, siteConfig.INSTAGRAM_URL],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Have a project idea, a question, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-py px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">Contact options</p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(91,91,214,0.1)] flex items-center justify-center text-[var(--color-indigo)] flex-shrink-0">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp (fastest)</p>
                    <a href={siteConfig.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-indigo)] hover:underline">
                      Message on WhatsApp →
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(91,91,214,0.1)] flex items-center justify-center text-[var(--color-indigo)] flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a href={`mailto:${siteConfig.CONTACT_EMAIL}`} className="text-sm text-[var(--color-indigo)] hover:underline">
                      {siteConfig.CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(91,91,214,0.1)] flex items-center justify-center text-[var(--color-indigo)] flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Response time</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-5 bg-[var(--color-surface-2)] border border-[var(--color-glass-border)]">
              <p className="font-semibold text-sm mb-2">Have a project in mind?</p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                Our done-for-you AI animation service is risk-free — we create your sample first, you only pay if you love it.
              </p>
              <Button href="/services" variant="secondary" size="sm">
                Learn about the service
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
