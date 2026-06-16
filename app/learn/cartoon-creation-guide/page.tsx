import type { Metadata } from "next";
import GuideLayout from "@/components/layout/GuideLayout";
import Callout from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "AI Cartoon Creation Guide — Design AI Cartoon Characters",
  description:
    "How to create AI cartoon characters with consistent style, expressions, and personality — then turn them into animated shorts.",
  alternates: { canonical: "/learn/cartoon-creation-guide" },
};

export default function CartoonCreationGuidePage() {
  return (
    <GuideLayout
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/start-here" },
        { label: "Cartoon Creation Guide" },
      ]}
      title="AI Cartoon Creation Guide"
      subtitle="How to design a cartoon character from scratch using AI — with a consistent style, expressive faces, and the personality to carry a story."
      readTime="~40 min"
      outcomes={[
        "Design a memorable cartoon character using AI",
        "Maintain character consistency across multiple scenes",
        "Generate expressive faces and poses",
        "Turn your cartoon character into a short animated clip",
      ]}
      prevGuide={{ label: "3D Animation Guide", href: "/learn/3d-animation-guide" }}
      nextGuide={{ label: "Filmmaking with AI", href: "/learn/filmmaking-with-ai" }}
      relatedGuides={[
        { label: "Tools Directory", href: "/tools" },
        { label: "AI Animation Basics", href: "/learn/ai-animation-basics" },
        { label: "Case Studies", href: "/case-studies" },
      ]}
    >
      <h2>Why cartoon characters are special</h2>
      <p>
        Cartoon characters are designed to communicate emotion quickly and clearly.
        Big eyes, exaggerated expressions, simple shapes — these aren&apos;t
        limitations, they&apos;re tools. A good cartoon character can make an audience
        feel something in a single frame.
      </p>
      <p>
        With AI, you can design cartoon characters that rival professional studio work —
        with consistent styling across unlimited scenes and expressions. The key is
        in how you craft your prompts.
      </p>

      <h2>Defining your character&apos;s visual identity</h2>
      <p>
        Before you generate a single image, answer these questions about your character:
      </p>
      <ul>
        <li><strong>Art style</strong>: Pixar-style? Anime? Flat 2D cartoon? Ghibli? Vintage Saturday morning?</li>
        <li><strong>Unique visual hook</strong>: What one thing makes them instantly recognizable? (Example: oversized helmet, tiny body, glowing eyes)</li>
        <li><strong>Color palette</strong>: 2–3 main colors that define them</li>
        <li><strong>Personality markers</strong>: What does their face/body communicate even when neutral?</li>
      </ul>
      <p>
        Write a &quot;character bible&quot; — even just a paragraph — describing your character
        visually. This is your north star for every prompt you write.
      </p>

      <Callout type="tip" title="The character bible method">
        Keep a running text document with your character&apos;s full visual description.
        Paste the key physical descriptors into every image prompt to maintain
        consistency.
      </Callout>

      <h2>Crafting the character prompt</h2>
      <p>
        A great cartoon character prompt has these components:
      </p>
      <ol>
        <li><strong>Art style</strong> first — this sets everything else (&quot;flat vector cartoon style&quot;, &quot;Pixar animation style&quot;, &quot;Studio Ghibli&quot;)</li>
        <li><strong>Character descriptors</strong> — age, build, defining features</li>
        <li><strong>Clothing and accessories</strong> — specific and memorable</li>
        <li><strong>Expression and pose</strong> — what emotion are they showing?</li>
        <li><strong>Background/setting</strong> — keep it simple to avoid distraction</li>
        <li><strong>Quality tags</strong> — &quot;high quality&quot;, &quot;detailed illustration&quot;, &quot;clean lines&quot;</li>
      </ol>

      <h2>Expression sheets — the secret to character storytelling</h2>
      <p>
        Professional animators create &quot;expression sheets&quot; — a reference showing a
        character in 6–12 different emotional states. You should do the same with AI.
      </p>
      <p>
        Generate your character in these emotions:
      </p>
      <ul>
        <li>Happy / joyful</li>
        <li>Surprised / shocked</li>
        <li>Sad / disappointed</li>
        <li>Angry / frustrated</li>
        <li>Determined / focused</li>
        <li>Scared / worried</li>
        <li>Proud / triumphant</li>
        <li>Confused / puzzled</li>
      </ul>
      <p>
        Save all of these. Now you have a full emotional toolkit for your character
        that you can use across any story.
      </p>

      <Callout type="info" title="Why expression sheets matter">
        Audience emotional connection comes from seeing a character&apos;s face react.
        Having pre-made expression references makes your storytelling much faster —
        you know exactly which image to use in each scene.
      </Callout>

      <h2>Turning your cartoon into an animated short</h2>
      <p>
        Once you have your character images, the process for creating a short is:
      </p>
      <ol>
        <li>Pick 3–6 scenes that tell a simple story</li>
        <li>Select the right expression/pose image for each scene</li>
        <li>Animate each image using video AI (4–8 seconds per clip)</li>
        <li>Add voice using voice AI (ElevenLabs works well)</li>
        <li>Edit clips + voiceover + music in CapCut or DaVinci Resolve</li>
        <li>Export and post</li>
      </ol>

      <h2>Keeping it simple and effective</h2>
      <p>
        The most watched AI cartoon content has two things in common:
      </p>
      <ul>
        <li>A clear, simple story with a beginning, middle, and end</li>
        <li>One main character the audience can root for</li>
      </ul>
      <p>
        You don&apos;t need complex plots or dozens of characters. The AI baby football
        content that goes viral is simple: baby wants to play football, baby is
        underestimated, baby surprises everyone. That&apos;s a complete story arc in 60 seconds.
      </p>

      <h2>Next step: making real films</h2>
      <p>
        You now know how to design and animate a cartoon character. In the next guide,
        you&apos;ll learn the filmmaking side — how to plan scenes, shots, and a complete
        short film with your AI characters.
      </p>
    </GuideLayout>
  );
}
