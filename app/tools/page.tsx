import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ToolCard from "@/components/ui/ToolCard";

export const metadata: Metadata = {
  title: "Best AI Animation Tools — Beginner-Friendly Directory",
  description:
    "A curated, visual ecosystem of the best AI tools for image, video, voice, music, and editing — with difficulty ratings and the right tool for each step.",
  alternates: { canonical: "/tools" },
};

export type Difficulty = "Easy" | "Medium" | "Advanced";
type Category = "Image" | "Video" | "Voice" | "Music" | "Editing";

export interface Tool {
  name: string;
  category: Category;
  tagline: string;
  bestFor: string;
  difficulty: Difficulty;
  free: boolean;
  href: string;
}

const tools: Tool[] = [
  { name: "DALL·E 3 (ChatGPT)", category: "Image", tagline: "Generate images from text descriptions", bestFor: "Beginners who want quick, reliable results", difficulty: "Easy", free: true, href: "https://openai.com/dall-e-3" },
  { name: "Midjourney", category: "Image", tagline: "Stunning artistic image generation", bestFor: "High-quality character and scene art", difficulty: "Medium", free: false, href: "https://midjourney.com" },
  { name: "Flux", category: "Image", tagline: "Next-gen realistic image generation", bestFor: "Photorealistic characters and scenes", difficulty: "Medium", free: true, href: "https://blackforestlabs.ai" },
  { name: "Stable Diffusion", category: "Image", tagline: "Open-source, fully customizable generator", bestFor: "Advanced users who want full control", difficulty: "Advanced", free: true, href: "https://stability.ai" },
  { name: "Runway Gen-3", category: "Video", tagline: "Text and image to cinematic video", bestFor: "Professional-quality animated clips", difficulty: "Medium", free: false, href: "https://runwayml.com" },
  { name: "Kling AI", category: "Video", tagline: "Realistic motion from still images", bestFor: "Smooth character animation", difficulty: "Easy", free: true, href: "https://klingai.com" },
  { name: "Pika Labs", category: "Video", tagline: "Turn images into animated video quickly", bestFor: "Fast, beginner-friendly video", difficulty: "Easy", free: true, href: "https://pika.art" },
  { name: "Hailuo AI", category: "Video", tagline: "High-quality AI video generation", bestFor: "Cinematic animation clips", difficulty: "Medium", free: true, href: "https://hailuoai.com" },
  { name: "ElevenLabs", category: "Voice", tagline: "Hyper-realistic AI voice generation", bestFor: "Character voiceovers and narration", difficulty: "Easy", free: true, href: "https://elevenlabs.io" },
  { name: "PlayHT", category: "Voice", tagline: "Text-to-speech with emotional control", bestFor: "Multiple character voices", difficulty: "Easy", free: true, href: "https://play.ht" },
  { name: "Suno", category: "Music", tagline: "Generate full songs from text", bestFor: "Original background music", difficulty: "Easy", free: true, href: "https://suno.com" },
  { name: "Udio", category: "Music", tagline: "High-fidelity AI music generation", bestFor: "Cinematic and emotional scores", difficulty: "Easy", free: true, href: "https://udio.com" },
  { name: "CapCut", category: "Editing", tagline: "Beginner-friendly editor with AI features", bestFor: "Assembling clips quickly", difficulty: "Easy", free: true, href: "https://capcut.com" },
  { name: "DaVinci Resolve", category: "Editing", tagline: "Pro video editing, free tier available", bestFor: "Full control over your final edit", difficulty: "Medium", free: true, href: "https://blackmagicdesign.com/products/davinciresolve" },
];

const categories: Category[] = ["Image", "Video", "Voice", "Music", "Editing"];
const categoryHue: Record<Category, string> = {
  Image: "linear-gradient(135deg,#ffcd6b,#ff5a3c)",
  Video: "linear-gradient(135deg,#ff5a3c,#1f7d72)",
  Voice: "linear-gradient(135deg,#1f7d72,#36c9b0)",
  Music: "linear-gradient(135deg,#36c9b0,#4fb8c9)",
  Editing: "linear-gradient(135deg,#4fb8c9,#f2a93b)",
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="The toolkit"
        title={<>Your AI animation <span className="gradient-text-magic">tool ecosystem</span></>}
        subtitle="Every tool you need for each part of the journey — curated, beginner-rated, and connected into one workflow. Most have free plans."
      />

      {/* Starter stack — the constellation */}
      <section className="px-4 sm:px-6 pt-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl p-8 relative overflow-hidden text-white" style={{ background: "var(--gradient-primary)" }}>
            <div aria-hidden className="absolute -top-12 right-0 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex items-center gap-2 mb-2">
              <Sparkles size={16} />
              <p className="eyebrow text-white/80">Recommended starter stack</p>
            </div>
            <h2 className="text-2xl font-bold mb-2 relative">Five free tools. One complete workflow.</h2>
            <p className="text-white/85 text-sm mb-6 max-w-lg relative">
              This is the exact stack we&apos;d hand a total beginner. Each tool covers one step — together they take you from idea to published video.
            </p>
            <div className="flex flex-wrap gap-2.5 relative">
              {["DALL·E 3 — image", "Kling AI — video", "ElevenLabs — voice", "Suno — music", "CapCut — editing"].map((t, i) => (
                <span key={t} className="px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur text-sm font-medium flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center text-[11px] font-bold">{i + 1}</span>
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/70 mt-5 relative">
              See how they connect in the <Link href="/workflow" className="underline font-medium">full workflow →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Category sections */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {categories.map((cat) => {
            const catTools = tools.filter((t) => t.category === cat);
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm" style={{ background: categoryHue[cat] }}>
                    {cat[0]}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold">{cat}</h2>
                    <p className="text-xs text-[var(--color-text-tertiary)]">{catTools.length} tools</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catTools.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} hue={categoryHue[tool.category]} />
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
