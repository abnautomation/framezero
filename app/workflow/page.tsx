import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI Animation Workflow — The Complete Pipeline",
  description:
    "The end-to-end AI animation pipeline: idea → script → character → image → video → voice → edit → publish. With tools used at each step.",
  alternates: { canonical: "/workflow" },
};

const steps = [
  {
    number: "01",
    title: "Idea",
    description: "Start with your concept — a character, a story, a feeling you want to create. Write it in plain language.",
    tools: [],
    guide: { label: "Start Here", href: "/start-here" },
    color: "from-[#5b5bd6] to-[#7c6fdb]",
    detail: "Your idea is the seed. It doesn't need to be detailed — even 'a baby playing football and winning' is enough to start. The AI tools will help you flesh it out.",
  },
  {
    number: "02",
    title: "Script",
    description: "Turn your idea into a scene-by-scene plan. What happens in each moment? What does the audience hear?",
    tools: ["ChatGPT", "Claude"],
    guide: { label: "Filmmaking with AI", href: "/learn/filmmaking-with-ai" },
    color: "from-[#7c6fdb] to-[#8a5cf6]",
    detail: "A simple script for a 60-second animation might be 5–8 lines: one per scene, with the visual, narration, and duration. Use an LLM to draft it quickly.",
  },
  {
    number: "03",
    title: "Character Design",
    description: "Create your character using image AI. Generate multiple variations until you have a consistent visual identity.",
    tools: ["DALL-E 3", "Midjourney", "Flux"],
    guide: { label: "AI 3D Animation Guide", href: "/learn/3d-animation-guide" },
    color: "from-[#8a5cf6] to-[#a855f7]",
    detail: "Save your character's core prompt. This becomes your 'character template' — paste it into every image prompt to maintain visual consistency across scenes.",
  },
  {
    number: "04",
    title: "Scenes & Backgrounds",
    description: "Generate scene images that match your character's world and visual style.",
    tools: ["DALL-E 3", "Midjourney", "Flux"],
    guide: { label: "Cartoon Creation Guide", href: "/learn/cartoon-creation-guide" },
    color: "from-[#a855f7] to-[#c084fc]",
    detail: "Generate each scene as a still image first. Keep the art style descriptor identical to your character prompt for visual cohesion.",
  },
  {
    number: "05",
    title: "Animation (Image → Video)",
    description: "Take your still images and animate them using video AI — adding motion, camera movement, and life.",
    tools: ["Kling AI", "Runway Gen-3", "Pika Labs", "Hailuo AI"],
    guide: { label: "AI 3D Animation Guide", href: "/learn/3d-animation-guide" },
    color: "from-[#c084fc] to-[#e879f9]",
    detail: "Each clip is typically 4–8 seconds. Include camera movement in your motion prompt — 'slow cinematic zoom in' or 'smooth pan right' immediately elevates quality.",
  },
  {
    number: "06",
    title: "Voice & Narration",
    description: "Add realistic voiceover to your characters and narration using AI voice generation.",
    tools: ["ElevenLabs", "PlayHT"],
    guide: { label: "Filmmaking with AI", href: "/learn/filmmaking-with-ai" },
    color: "from-[#e879f9] to-[#39b6ff]",
    detail: "Generate your narration or character dialogue separately and save as audio files. Sync these to your video clips in the editing stage.",
  },
  {
    number: "07",
    title: "Music & Sound",
    description: "Add background music and sound effects that match the emotion of each scene.",
    tools: ["Suno", "Udio", "Pixabay"],
    guide: { label: "Filmmaking with AI", href: "/learn/filmmaking-with-ai" },
    color: "from-[#39b6ff] to-[#3ddc97]",
    detail: "Generate custom music from a description (e.g. 'uplifting orchestral score for a sports underdog story'). Music is 50% of the emotional impact.",
  },
  {
    number: "08",
    title: "Edit & Publish",
    description: "Combine all clips, audio, and effects in a video editor — then export and upload to your platform.",
    tools: ["CapCut", "DaVinci Resolve"],
    guide: { label: "Content Creation Guide", href: "/learn/content-creation-guide" },
    color: "from-[#3ddc97] to-[#5b5bd6]",
    detail: "Arrange clips in order, sync audio, add subtitles, and export in the right format for your platform. CapCut is easiest for beginners. DaVinci Resolve for full control.",
  },
];

export default function WorkflowPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">End-to-end pipeline</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            The AI Animation <span className="gradient-text">Workflow</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            How a complete AI animation goes from blank page to published video —
            step by step, with the exact tools used at each stage.
          </p>
          <p className="text-sm text-[var(--color-text-tertiary)]">
            Want us to do this for you?{" "}
            <Link href="/services" className="text-[var(--color-indigo)] hover:underline font-medium">
              See our service →
            </Link>
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="section-py px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_16px_rgba(91,91,214,0.25)]`}>
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b from-[var(--color-indigo)] to-transparent mt-3 opacity-20 min-h-[48px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 flex-1">
                  <h2 className="text-xl font-bold mb-1">{step.title}</h2>
                  <p className="text-[var(--color-text-secondary)] mb-3">{step.description}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 bg-[var(--color-surface-2)] rounded-xl p-4">
                    {step.detail}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {step.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool) => (
                          <span key={tool} className="px-2.5 py-1 rounded-full bg-[rgba(91,91,214,0.08)] text-[var(--color-indigo)] text-xs font-semibold border border-[rgba(91,91,214,0.15)]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link
                      href={step.guide.href}
                      className="flex items-center gap-1 text-xs font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-indigo)] transition-colors ml-auto"
                    >
                      Full guide: {step.guide.label} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist download (email gated) */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(91,91,214,0.08), rgba(138,92,246,0.06))" }}>
            <h2 className="text-2xl font-bold mb-3">Get the workflow checklist</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              A one-page printable checklist of every step in this workflow — with tool links and quick prompts. Free when you subscribe.
            </p>
            <Button href="/newsletter">
              Get free checklist via newsletter
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
