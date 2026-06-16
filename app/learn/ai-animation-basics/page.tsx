import type { Metadata } from "next";
import GuideLayout from "@/components/layout/GuideLayout";
import Callout from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "AI Animation Basics — What Is AI Animation?",
  description:
    "Learn what AI animation is, how generative AI works, what LLMs are, and how AI tools turn prompts into stunning visuals. A complete beginner's guide.",
  alternates: { canonical: "/learn/ai-animation-basics" },
};

export default function AIAnimationBasicsPage() {
  return (
    <GuideLayout
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/start-here" },
        { label: "AI Animation Basics" },
      ]}
      title="AI Animation Basics"
      subtitle="A plain-English explanation of what AI animation is, how it works, and what you can create — even if you've never touched a creative tool before."
      readTime="~30 min"
      outcomes={[
        "Understand what AI animation means and why it matters",
        "Know the difference between image AI, video AI, voice AI, and LLMs",
        "Feel confident enough to start experimenting with AI tools",
        "Know where to go next in your learning journey",
      ]}
      nextGuide={{ label: "3D Animation Guide", href: "/learn/3d-animation-guide" }}
      relatedGuides={[
        { label: "Tools Directory", href: "/tools" },
        { label: "Workflow Explainer", href: "/workflow" },
        { label: "Glossary", href: "/glossary" },
        { label: "Start Here", href: "/start-here" },
      ]}
    >
      <h2>What is AI content creation?</h2>
      <p>
        &quot;AI content creation&quot; means using artificial intelligence tools to help
        you make images, videos, audio, and animations — instead of doing all of it
        by hand. Think of AI as a very advanced creative assistant that understands
        plain English instructions.
      </p>
      <p>
        You describe what you want (&quot;a cartoon baby playing football on a
        glowing stadium at night&quot;), and the AI generates a visual that matches
        your description. No drawing skills. No animation software. No years of
        training required.
      </p>

      <Callout type="tip" title="In plain words">
        AI content creation = describing what you want in plain language, and having
        a computer generate it for you. The description is called a &quot;prompt.&quot;
      </Callout>

      <h2>What is generative AI?</h2>
      <p>
        Generative AI is a type of artificial intelligence that <em>creates new content</em>.
        It was trained on enormous amounts of existing images, videos, text, and audio —
        and learned the patterns well enough to generate new things that look, sound, or
        read like real content.
      </p>
      <p>
        The key types of generative AI relevant to animation:
      </p>
      <ul>
        <li><strong>Image AI</strong> — generates still images from text descriptions (e.g., Midjourney, DALL-E, Stable Diffusion)</li>
        <li><strong>Video AI</strong> — animates still images or generates video from text (e.g., Runway, Kling, Pika)</li>
        <li><strong>Voice AI</strong> — generates realistic speech from text (e.g., ElevenLabs)</li>
        <li><strong>Music / sound AI</strong> — creates background music and sound effects (e.g., Suno, Udio)</li>
      </ul>

      <h2>What are LLMs? (Large Language Models)</h2>
      <p>
        An LLM is an AI that understands and generates text. ChatGPT and Claude are examples.
        For AI animation, LLMs are useful for:
      </p>
      <ul>
        <li>Writing scripts and dialogue for your animations</li>
        <li>Improving your image prompts (making them more descriptive)</li>
        <li>Brainstorming story ideas and character concepts</li>
        <li>Writing voiceover scripts</li>
      </ul>

      <Callout type="info" title="You don't need to understand AI deeply">
        You don&apos;t need to know how these models were built or how they work
        mathematically. You just need to know what each tool is good at — like
        knowing a hammer is for nails, even if you can&apos;t build a hammer.
      </Callout>

      <h2>How does AI turn a prompt into an animation?</h2>
      <p>Here&apos;s a simple version of what happens when you use an image AI:</p>
      <ol>
        <li>You type a description (your &quot;prompt&quot;)</li>
        <li>The AI processes your text and understands the visual concept</li>
        <li>It generates a new image based on patterns it learned during training</li>
        <li>You get a result in seconds</li>
      </ol>
      <p>
        For video AI, it&apos;s similar — but instead of one frame, it generates many
        frames in sequence that create the illusion of motion. The quality has improved
        dramatically and continues to improve every few months.
      </p>

      <h2>What can you actually create with AI animation tools?</h2>
      <p>
        Real things that people are already making with AI animation:
      </p>
      <ul>
        <li>Cartoon shorts and animated series (like AI baby and football content)</li>
        <li>YouTube channel intro and outro animations</li>
        <li>Instagram reels with consistent AI characters</li>
        <li>Brand videos and product explainers</li>
        <li>Storyboards and visual concepts for real film projects</li>
        <li>Music videos and cinematic scenes</li>
        <li>Animated advertisements and social media content</li>
      </ul>

      <Callout type="tip" title="The Frame Zero workflow">
        Our workflow is: Idea → Script → AI Image (character + scene) → AI Video
        (animate it) → Voice (add speech) → Edit (combine clips) → Publish.
        You&apos;ll learn each step in the guides ahead.
      </Callout>

      <h2>Common beginner questions</h2>

      <h3>Do I need a powerful computer?</h3>
      <p>
        Most AI tools run in the browser or on cloud servers — your computer doesn&apos;t
        need to be powerful. A regular laptop with a stable internet connection is enough.
      </p>

      <h3>Is AI animation the same as 3D animation?</h3>
      <p>
        Not exactly. Traditional 3D animation (like Pixar films) is made with specialized
        software like Blender or Maya and takes years to master. AI animation uses AI tools
        to create images and videos that <em>look</em> 3D or cinematic — without using
        those traditional tools. You get a similar visual quality in a fraction of the time.
      </p>

      <h3>Is AI animation legal to use commercially?</h3>
      <p>
        Generally yes — but check each tool&apos;s terms. Most mainstream AI tools
        allow commercial use, especially on paid plans. We cover this in the Tools Directory.
      </p>

      <h2>You&apos;re ready for Stage 2</h2>
      <p>
        Now you understand what AI animation is and how it works conceptually. In the
        next guide, you&apos;ll start creating your first actual AI visuals — characters,
        scenes, and your first animated clip.
      </p>
    </GuideLayout>
  );
}
