import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Frame Zero collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto prose">
        <h1>Privacy Policy</h1>
        <p className="text-[var(--color-text-tertiary)] text-sm">Last updated: June 2025</p>

        <h2>What we collect</h2>
        <p>We collect your email address when you subscribe to the newsletter or contact us. We do not collect any other personal information without your explicit consent.</p>

        <h2>How we use it</h2>
        <p>Your email is used only to send the newsletter you subscribed to, or to respond to your contact message. We do not sell, rent, or share your email with third parties.</p>

        <h2>Cookies</h2>
        <p>We use only essential cookies (e.g., to remember your theme preference). We do not use tracking cookies or third-party advertising cookies.</p>

        <h2>Third-party services</h2>
        <p>We use a newsletter provider (connection pending — see API stub) to manage subscriber lists. Links to external tools may track clicks via affiliate parameters.</p>

        <h2>Your rights</h2>
        <p>You can unsubscribe from the newsletter at any time via the link in any email. To request deletion of your data, email us at{" "}
          <a href={`mailto:${siteConfig.CONTACT_EMAIL}`}>{siteConfig.CONTACT_EMAIL}</a>.
        </p>

        <h2>Contact</h2>
        <p>Questions about this policy? Email <a href={`mailto:${siteConfig.CONTACT_EMAIL}`}>{siteConfig.CONTACT_EMAIL}</a>.</p>
      </div>
    </section>
  );
}
