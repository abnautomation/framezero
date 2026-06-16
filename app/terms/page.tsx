import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the Frame Zero website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto prose">
        <h1>Terms of Use</h1>
        <p className="text-[var(--color-text-tertiary)] text-sm">Last updated: June 2025</p>

        <h2>Acceptance</h2>
        <p>By using {siteConfig.BRAND_NAME} ({siteConfig.SITE_URL}), you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.</p>

        <h2>Content</h2>
        <p>All guides, articles, and educational content on this site are provided for informational purposes. We make no guarantees about results from applying the techniques described.</p>

        <h2>Intellectual property</h2>
        <p>All original content on this site is owned by {siteConfig.BRAND_NAME}. You may share and quote content with attribution. You may not reproduce entire guides or articles without permission.</p>

        <h2>External links</h2>
        <p>We link to third-party tools and services. We are not responsible for their content, terms, or pricing. Some links may be affiliate links — we earn a commission if you purchase, at no extra cost to you.</p>

        <h2>Service terms</h2>
        <p>Our done-for-you service is governed by the terms agreed upon via WhatsApp or email at the time of the project. The risk-free sample offer is at our discretion and limited to reasonable scope.</p>

        <h2>Limitation of liability</h2>
        <p>{siteConfig.BRAND_NAME} is not liable for any damages resulting from the use of this website or the tools recommended within it.</p>

        <h2>Changes</h2>
        <p>We may update these terms. Continued use of the site after changes constitutes acceptance.</p>

        <h2>Contact</h2>
        <p>Questions? <a href={`mailto:${siteConfig.CONTACT_EMAIL}`}>{siteConfig.CONTACT_EMAIL}</a></p>
      </div>
    </section>
  );
}
