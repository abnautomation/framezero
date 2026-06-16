import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Blog — AI Animation Tips & Tutorials",
  description:
    "Beginner-friendly AI animation tutorials, tool reviews, and creator tips. Updated weekly.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            AI Animation Tips & Tutorials
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Beginner-friendly articles, tool reviews, and practical guides — updated weekly.
          </p>
        </div>
      </section>

      <section className="section-py px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Featured */}
          {featured.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-5">Featured</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl p-6 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200"
                  >
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] mb-5 flex items-center justify-center">
                      <span className="text-white/50 text-sm">Cover image</span>
                    </div>
                    <p className="text-xs font-semibold text-[var(--color-indigo)] mb-2">{post.category}</p>
                    <h2 className="font-bold text-lg mb-2 group-hover:text-[var(--color-indigo)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
                      <span>{formatDate(post.date)} · {post.readTime} read</span>
                      <ArrowRight size={14} className="text-[var(--color-indigo)] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All posts */}
          {rest.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-5">All posts</p>
              <div className="space-y-4">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-4 p-5 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200"
                  >
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[var(--color-indigo)] mb-1">{post.category}</p>
                      <h2 className="font-bold mb-1 group-hover:text-[var(--color-indigo)] transition-colors">{post.title}</h2>
                      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1">{post.description}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)] mt-2">{formatDate(post.date)} · {post.readTime} read</p>
                    </div>
                    <ArrowRight size={16} className="text-[var(--color-indigo)] self-center flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
