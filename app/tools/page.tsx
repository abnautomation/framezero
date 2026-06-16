import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Best AI Animation Tools 2025 — Beginner-Friendly Directory",
  description:
    "The best AI tools for image, video, voice, and editing — curated for beginners. Difficulty ratings, use cases, and affiliate-ready links.",
  alternates: { canonical: "/tools" },
};

type Difficulty = "Easy" | "Medium" | "Advanced";
type Category = "Image" | "Video" | "Voice" | "Music" | "Editing" | "All-in-one";

interface Tool {
  name: string;
  category: Category;
  tagline: string;
  bestFor: string;
  difficulty: Difficulty;
  free: boolean;
  href: string;
}

const tools: Tool[] = [
  { name: "DALL-E 3 (ChatGPT)", category: "Image", tagline: "Generate images from text descriptions", bestFor: "Beginners who want quick, reliable results", difficulty: "Easy", free: true, href: "https://openai.com/dall-e-3" },
  { name: "Midjourney", category: "Image", tagline: "Stunning artistic image generation", bestFor: "High-quality character and scene art", difficulty: "Medium", free: false, href: "https://midjourney.com" },
  { name: "Stable Diffusion", category: "Image", tagline: "Open-source, fully customizable AI image generator", bestFor: "Advanced users who want full control", difficulty: "Advanced", free: true, href: "https://stability.ai" },
  { name: "Flux (Black Forest Labs)", category: "Image", tagline: "Next-generation realistic image generation", bestFor: "Photorealistic characters and scenes", difficulty: "Medium", free: true, href: "https://blackforestlabs.ai" },
  { name: "Runway Gen-3", category: "Video", tagline: "Text and image to cinematic video", bestFor: "Professional-quality animated clips", difficulty: "Medium", free: false, href: "https://runwayml.com" },
  { name: "Kling AI", category: "Video", tagline: "Realistic motion from still images", bestFor: "Smooth character animation", difficulty: "Easy", free: true, href: "https://klingai.com" },
  { name: "Pika Labs", category: "Video", tagline: "Turn images into animated video quickly", bestFor: "Fast, beginner-friendly video generation", difficulty: "Easy", free: true, href: "https://pika.art" },
  { name: "Hailuo AI", category: "Video", tagline: "High-quality AI video generation", bestFor: "Cinematic animation clips", difficulty: "Medium", free: true, href: "https://hailuoai.com" },
  { name: "ElevenLabs", category: "Voice", tagline: "Hyper-realistic AI voice generation", bestFor: "Character voiceovers and narration", difficulty: "Easy", free: true, href: "https://elevenlabs.io" },
  { name: "PlayHT", category: "Voice", tagline: "Text-to-speech with emotional control", bestFor: "Multiple character voices in one project", difficulty: "Easy", free: true, href: "https://play.ht" },
  { name: "Suno", category: "Music", tagline: "Generate full songs from text descriptions", bestFor: "Original background music for animations", difficulty: "Easy", free: true, href: "https://suno.com" },
  { name: "Udio", category: "Music", tagline: "High-fidelity AI music generation", bestFor: "Cinematic and emotional background scores", difficulty: "Easy", free: true, href: "https://udio.com" },
  { name: "CapCut", category: "Editing", tagline: "Beginner-friendly video editor with AI features", bestFor: "Assembling AI animation clips quickly", difficulty: "Easy", free: true, href: "https://capcut.com" },
  { name: "DaVinci Resolve", category: "Editing", tagline: "Professional video editing, free tier available", bestFor: "Full control over your final edit", difficulty: "Medium", free: true, href: "https://blackmagicdesign.com/products/davinciresolve" },
];

const categories: (Category | "All")[] = ["All", "Image", "Video", "Voice", "Music", "Editing"];

const difficultyColor: Record<Difficulty, string> = {
  Easy: "text-[var(--color-mint)] bg-[rgba(61,220,151,0.1)]",
  Medium: "text-[var(--color-sky)] bg-[rgba(57,182,255,0.1)]",
  Advanced: "text-[var(--color-coral)] bg-[rgba(255,107,94,0.1)]",
};

export default function ToolsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">Free tool directory</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            The best <span className="gradient-text">AI animation tools</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Curated, beginner-rated tools for every part of the AI animation workflow.
            Updated regularly.
          </p>
        </div>
      </section>

      {/* Starter stack highlight */}
      <section className="px-4 sm:px-6 py-10 bg-[var(--color-surface-2)]">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-6 border border-[rgba(91,91,214,0.2)]">
            <div className="flex items-center gap-2 mb-3">
              <Star size={16} className="text-[var(--color-coral)]" />
              <p className="font-bold text-sm">Recommended starter stack</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["DALL-E 3 (image)", "Kling AI (video)", "ElevenLabs (voice)", "Suno (music)", "CapCut (editing)"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-3">
              All have free plans. Perfect for your first 1–5 AI animations. See{" "}
              <Link href="/workflow" className="text-[var(--color-indigo)] hover:underline">the full workflow</Link> for how they connect.
            </p>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {categories.slice(1).map((cat) => {
            const catTools = tools.filter((t) => t.category === cat);
            return (
              <div key={cat} className="mb-14">
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-violet)] text-white text-xs font-semibold">
                    {cat}
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored nofollow"
                      className="group block rounded-2xl p-5 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)] shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="font-bold group-hover:text-[var(--color-indigo)] transition-colors">
                            {tool.name}
                          </p>
                          <p className="text-sm text-[var(--color-text-secondary)]">{tool.tagline}</p>
                        </div>
                        <ExternalLink size={15} className="text-[var(--color-text-tertiary)] flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-[var(--color-text-tertiary)] mb-3">
                        <strong>Best for:</strong> {tool.bestFor}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[tool.difficulty]}`}>
                          {tool.difficulty}
                        </span>
                        {tool.free && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-[var(--color-mint)] bg-[rgba(61,220,151,0.1)]">
                            Free plan ✓
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
