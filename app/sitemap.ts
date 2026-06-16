import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/lib/blog";
import { caseStudies } from "./case-studies/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.SITE_URL;

  const staticRoutes = [
    "/",
    "/about",
    "/start-here",
    "/learn/ai-animation-basics",
    "/learn/3d-animation-guide",
    "/learn/cartoon-creation-guide",
    "/learn/filmmaking-with-ai",
    "/learn/content-creation-guide",
    "/tools",
    "/workflow",
    "/services",
    "/case-studies",
    "/blog",
    "/resources",
    "/faq",
    "/contact",
    "/community",
    "/newsletter",
    "/glossary",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
