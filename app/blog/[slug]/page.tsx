import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ReadingProgress from "@/components/ui/ReadingProgress";
import NewsletterSection from "@/components/sections/NewsletterSection";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

// Seed content per slug
const content: Record<string, React.ReactNode> = {
  "how-to-make-ai-animation-for-free": (
    <>
      <h2>You don&apos;t need to spend a single dollar</h2>
      <p>
        Every tool in this walkthrough has a free plan. By the end, you&apos;ll have a finished
        animated clip — no credit card required.
      </p>
      <h2>Step 1: Generate your character image (DALL-E 3 — free)</h2>
      <p>
        Open ChatGPT (free tier) and switch to the image mode. Type a detailed character prompt:
        &quot;Pixar 3D animation style, cute baby character with big expressive eyes wearing a blue
        jersey, happy expression, medium shot, clean background, high quality.&quot;
      </p>
      <p>Generate 4 variations and choose the best one. Download it.</p>
      <h2>Step 2: Animate it (Kling AI — free)</h2>
      <p>
        Go to Kling AI (free tier available). Upload your character image. In the motion prompt,
        type: &quot;character laughs and claps hands with excitement, slight camera zoom in,
        cinematic lighting.&quot; Generate.
      </p>
      <p>You&apos;ll have a 4-second animated clip in under 2 minutes.</p>
      <h2>Step 3: Add voice (ElevenLabs — free)</h2>
      <p>
        Go to ElevenLabs free tier. Pick a voice, type a short line (&quot;I knew I could do it!&quot;),
        and download the audio.
      </p>
      <h2>Step 4: Add music (Suno — free)</h2>
      <p>
        Go to Suno.com. Type &quot;uplifting short orchestral sports moment, triumphant, 10 seconds&quot;.
        Download the clip.
      </p>
      <h2>Step 5: Edit (CapCut — free)</h2>
      <p>
        Import your video clip, voice audio, and music into CapCut. Put music on the lowest track,
        voice above it. Trim everything to match. Add a caption. Export.
      </p>
      <p>Total time: under 30 minutes. Total cost: $0.</p>
    </>
  ),
  "best-ai-tools-for-beginners": (
    <>
      <h2>How we ranked these tools</h2>
      <p>We tested each tool based on: ease of use, quality of output, free plan generosity, and usefulness for beginners making animation content.</p>
      <h2>1. DALL-E 3 (ChatGPT) — Image generation</h2>
      <p>The easiest entry point for image AI. Accessible via ChatGPT free tier. Results are consistently good without complex prompting.</p>
      <h2>2. Kling AI — Video animation</h2>
      <p>The best free video AI for smooth character animation. The free plan is generous. Motion quality is excellent for a beginner tool.</p>
      <h2>3. ElevenLabs — Voice generation</h2>
      <p>The industry standard for AI voice. The free tier gives you enough characters per month to voice a short animation. Quality is exceptional.</p>
      <h2>4. Suno — Music generation</h2>
      <p>Generate full songs and background music from text descriptions. Free plan is generous. The quality rivals commercial stock music.</p>
      <h2>5. CapCut — Video editing</h2>
      <p>The most beginner-friendly video editor available. Free, with useful AI-assisted features like auto-captions and transitions.</p>
      <h2>6. Pika Labs — Alternative video animation</h2>
      <p>A good backup to Kling AI. Different motion style — sometimes produces better results for specific types of movement.</p>
      <h2>7. PlayHT — Alternative voice</h2>
      <p>Good alternative to ElevenLabs. Slightly more options for voice customization on the free tier.</p>
    </>
  ),
  "ai-character-consistency-guide": (
    <>
      <h2>Why consistency is hard with AI</h2>
      <p>
        AI image generators are non-deterministic — the same prompt gives different results each time.
        This is great for variety, but terrible for character consistency across scenes.
      </p>
      <h2>The solution: the character template method</h2>
      <p>
        Create a &quot;character template&quot; — a master prompt that you paste into every image generation.
        The template contains all the fixed attributes of your character.
      </p>
      <p>Example template:</p>
      <blockquote>
        Pixar 3D animation style, cute baby boy character, big brown eyes, round chubby face,
        blue jersey with the number 7, tiny sneakers, smooth clean render, consistent character design
      </blockquote>
      <p>
        Every new image prompt starts with this template, then adds: pose, expression, setting, lighting.
      </p>
      <h2>Using image seeds</h2>
      <p>
        In tools like Midjourney and Stable Diffusion, you can save a &quot;seed number&quot; from an
        image you like. Using the same seed with the same prompt produces very similar results —
        great for consistency.
      </p>
      <h2>Character reference images</h2>
      <p>
        Midjourney&apos;s &quot;--cref&quot; (character reference) feature lets you upload an existing image
        and ask the AI to maintain that character&apos;s appearance in new images. This is currently
        the most powerful consistency tool available.
      </p>
      <h2>Generating an expression sheet first</h2>
      <p>
        Before you start any project, generate 8–10 expressions and poses of your character in one
        session. Keep the prompt and settings identical. Now you have a consistent reference library
        for the entire project.
      </p>
    </>
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />

      <section className="pt-32 pb-12 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-2xl mx-auto">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <p className="text-xs font-semibold text-[var(--color-indigo)] mb-3">{post.category}</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-[var(--color-text-secondary)] mb-4">{post.description}</p>
          <p className="text-xs text-[var(--color-text-tertiary)]">{formatDate(post.date)} · {post.readTime} read</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-14">
        <div className="max-w-2xl mx-auto prose">
          {content[slug] ?? <p className="text-[var(--color-text-secondary)]">Full article coming soon.</p>}
        </div>
      </article>

      {/* Internal links */}
      <section className="px-4 sm:px-6 pb-10">
        <div className="max-w-2xl mx-auto pt-8 border-t border-[var(--color-glass-border)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">Continue learning</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Start Here", href: "/start-here" },
              { label: "Tools Directory", href: "/tools" },
              { label: "AI Animation Basics", href: "/learn/ai-animation-basics" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-xl border border-[var(--color-glass-border)] text-sm hover:text-[var(--color-indigo)] hover:border-[var(--color-indigo)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <NewsletterSection />
    </>
  );
}
