import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";
import CustomCursor from "@/components/ui/CustomCursor";
import Atmosphere from "@/components/ui/Atmosphere";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.SITE_URL),
  title: {
    default: `${siteConfig.BRAND_NAME} — ${siteConfig.TAGLINE}`,
    template: `%s | ${siteConfig.BRAND_NAME}`,
  },
  description: siteConfig.DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.SITE_URL,
    siteName: siteConfig.BRAND_NAME,
    images: [{ url: siteConfig.OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[var(--color-surface-1)] text-[var(--color-text-primary)]">
        <ThemeProvider>
          <Atmosphere />
          <div className="grain-overlay" aria-hidden />
          <CustomCursor />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
