export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-make-ai-animation-for-free",
    title: "How to Make AI Animation for Free in 2025",
    description:
      "A complete walkthrough of creating your first AI animation using only free tools — from image generation to final video export.",
    date: "2025-06-01",
    readTime: "8 min",
    category: "Tutorial",
    featured: true,
  },
  {
    slug: "best-ai-tools-for-beginners",
    title: "The 7 Best AI Animation Tools for Beginners (Ranked)",
    description:
      "We tested 20+ AI animation tools so you don't have to. Here are the 7 that actually work for beginners — with free plans.",
    date: "2025-05-20",
    readTime: "6 min",
    category: "Tools",
    featured: true,
  },
  {
    slug: "ai-character-consistency-guide",
    title: "How to Keep Your AI Character Consistent Across Every Scene",
    description:
      "Character consistency is the #1 beginner challenge with AI animation. Here's the exact system we use to solve it.",
    date: "2025-05-10",
    readTime: "7 min",
    category: "Technique",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
