import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "AI Animation Glossary — Plain-English Definitions",
  description:
    "Plain-English definitions of every AI and animation term you'll encounter. No jargon, no confusion.",
  alternates: { canonical: "/glossary" },
};

const terms = [
  { term: "Generative AI", definition: "AI that creates new content (images, video, audio, text) based on what it learned during training. Examples: DALL-E, Midjourney, Kling AI.", related: "/learn/ai-animation-basics" },
  { term: "Prompt", definition: "A text description you give to an AI tool to tell it what to create. Better prompts = better results.", related: "/learn/ai-animation-basics" },
  { term: "LLM (Large Language Model)", definition: "An AI trained on text that can understand and generate written language. ChatGPT and Claude are examples. Useful for writing scripts and improving prompts.", related: "/learn/ai-animation-basics" },
  { term: "Image AI", definition: "AI tools that generate still images from text descriptions. Examples: DALL-E 3, Midjourney, Flux.", related: "/tools" },
  { term: "Video AI", definition: "AI tools that animate images or generate video clips from text or image inputs. Examples: Kling AI, Runway, Pika.", related: "/tools" },
  { term: "Voice AI", definition: "AI tools that generate realistic speech from text. Examples: ElevenLabs, PlayHT.", related: "/tools" },
  { term: "Character consistency", definition: "Keeping a character looking the same across multiple AI-generated images and video clips. Achieved by reusing the same prompt template.", related: "/learn/3d-animation-guide" },
  { term: "Motion prompt", definition: "A text description given to a video AI tool specifying how an image should move. Example: 'slow cinematic zoom in, character waves hand gently'.", related: "/learn/filmmaking-with-ai" },
  { term: "Image seed", definition: "A unique number associated with an AI-generated image. Using the same seed with the same prompt produces similar results — useful for consistency.", related: "/learn/3d-animation-guide" },
  { term: "LoRA", definition: "A technique for fine-tuning AI image models on specific characters or styles. Used in advanced workflows to get very consistent character output.", related: "/learn/3d-animation-guide" },
  { term: "Diffusion model", definition: "The type of AI model used by most image generators. It learns to 'denoise' images, starting from random noise and refining into a coherent image.", related: "/learn/ai-animation-basics" },
  { term: "Negative prompt", definition: "A list of things you don't want in your image, given to some AI tools. Example: 'blurry, extra fingers, low quality'.", related: "/learn/3d-animation-guide" },
  { term: "Storyboard", definition: "A sequence of still images or sketches that plan out a video scene by scene — like a visual script.", related: "/learn/filmmaking-with-ai" },
  { term: "Shot type", definition: "The framing of a camera angle: wide shot (full scene), medium shot (waist up), close-up (face). Different shot types create different emotional effects.", related: "/learn/filmmaking-with-ai" },
  { term: "Expression sheet", definition: "A reference image showing a character in multiple emotional states (happy, sad, angry, etc.). Used to plan storytelling and maintain consistency.", related: "/learn/cartoon-creation-guide" },
  { term: "Hook", definition: "The first 2–3 seconds of a video designed to stop a viewer from scrolling. A strong visual surprise or compelling question.", related: "/learn/content-creation-guide" },
  { term: "Voiceover", definition: "A voice recording (or AI-generated voice) that narrates over the video rather than coming from a character on screen.", related: "/learn/filmmaking-with-ai" },
  { term: "B-roll", definition: "Secondary footage that plays while narration is heard, used to support or illustrate the main story.", related: "/learn/filmmaking-with-ai" },
  { term: "Affiliate link", definition: "A special URL that tracks purchases. If someone clicks your link and buys a tool, you earn a commission.", related: "/tools" },
  { term: "Done-for-you", definition: "A service where someone else does all the creative work for you. Our service is done-for-you AI animation.", related: "/services" },
];

const alphabet = [...new Set(terms.map((t) => t.term[0].toUpperCase()))].sort();

export default function GlossaryPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-4">Reference</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">AI Animation Glossary</h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Plain-English definitions of every AI and animation term you&apos;ll encounter here — and beyond.
          </p>
        </div>
      </section>

      {/* Alphabet nav */}
      <nav className="sticky top-16 z-40 bg-[var(--color-surface-1)] border-b border-[var(--color-glass-border)] px-4 sm:px-6 py-3">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:text-[var(--color-indigo)] hover:bg-[rgba(91,91,214,0.08)] transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>
      </nav>

      <section className="section-py px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {alphabet.map((letter) => {
            const letterTerms = terms.filter((t) => t.term[0].toUpperCase() === letter);
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-28">
                <h2 className="text-2xl font-bold gradient-text mb-4">{letter}</h2>
                <div className="space-y-4">
                  {letterTerms.map((t) => (
                    <div key={t.term} className="rounded-xl p-5 bg-[var(--color-surface-1)] border border-[var(--color-glass-border)]">
                      <p className="font-bold mb-1.5">{t.term}</p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">{t.definition}</p>
                      <Link href={t.related} className="text-xs font-medium text-[var(--color-indigo)] hover:underline">
                        Learn more →
                      </Link>
                    </div>
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
