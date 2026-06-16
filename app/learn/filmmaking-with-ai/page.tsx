import type { Metadata } from "next";
import GuideLayout from "@/components/layout/GuideLayout";
import Callout from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Filmmaking with AI — AI Short Film Production Guide",
  description:
    "Learn how to script, shoot, and edit AI short films. Scenes, shots, camera angles, voice, music, and editing — for complete beginners.",
  alternates: { canonical: "/learn/filmmaking-with-ai" },
};

export default function FilmmakingWithAIPage() {
  return (
    <GuideLayout
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/start-here" },
        { label: "Filmmaking with AI" },
      ]}
      title="Filmmaking with AI"
      subtitle="How to make a real AI short film — from script to final edit. Scenes, shots, voice, music, and editing — explained like you've never made a film before."
      readTime="~60 min"
      outcomes={[
        "Write a simple script suitable for AI animation",
        "Plan shots and scenes like a real filmmaker",
        "Create a multi-scene AI animated short",
        "Add professional-quality voice, music, and sound effects",
        "Edit everything into a polished final video",
      ]}
      prevGuide={{ label: "Cartoon Creation Guide", href: "/learn/cartoon-creation-guide" }}
      nextGuide={{ label: "Content Creation Guide", href: "/learn/content-creation-guide" }}
      relatedGuides={[
        { label: "Tools Directory", href: "/tools" },
        { label: "Workflow Explainer", href: "/workflow" },
        { label: "Case Studies", href: "/case-studies" },
      ]}
    >
      <h2>Thinking like a filmmaker</h2>
      <p>
        Filmmaking is about telling a story through a sequence of images and sound.
        Even a 60-second AI animation benefits from thinking about this intentionally.
        The good news: the fundamentals are simple.
      </p>
      <p>
        Every film — short or feature — follows the same basic structure:
      </p>
      <ul>
        <li><strong>Setup</strong>: Who is the character? What do they want?</li>
        <li><strong>Conflict</strong>: What&apos;s in the way?</li>
        <li><strong>Resolution</strong>: How does it end?</li>
      </ul>
      <p>
        For a 60-second AI animation, you might spend 15 seconds on setup, 30 on
        conflict/action, and 15 on resolution. That&apos;s enough for a complete, satisfying story.
      </p>

      <h2>Writing your script</h2>
      <p>
        A script for AI animation is simpler than you might think. For each scene, write:
      </p>
      <ul>
        <li>What the audience sees (the visual)</li>
        <li>What they hear (dialogue or narration)</li>
        <li>How long the scene lasts</li>
      </ul>
      <p>Example script format:</p>
      <blockquote>
        SCENE 1 (0:00–0:08)<br />
        Visual: Baby character sits on bench, looking at football field with big eyes<br />
        Narration: &quot;He&apos;d always dreamed of playing on the big stage.&quot;<br />
        Music: Soft, hopeful piano
      </blockquote>

      <Callout type="tip" title="Use an LLM to help">
        Paste your story idea into ChatGPT or Claude and ask it to write a short
        animation script in this format. It&apos;ll give you a solid first draft in
        seconds that you can edit to your taste.
      </Callout>

      <h2>Understanding shots and camera angles</h2>
      <p>
        Different shot types create different emotional effects:
      </p>
      <ul>
        <li><strong>Wide shot</strong>: Shows the full environment. Use to establish a location.</li>
        <li><strong>Medium shot</strong>: Character from waist up. The workhorse of storytelling.</li>
        <li><strong>Close-up</strong>: Face or specific detail. Creates intimacy or emphasis.</li>
        <li><strong>Extreme close-up</strong>: Eyes, hands. Intense emotion.</li>
        <li><strong>Low angle</strong>: Camera looks up at the character — makes them look powerful or heroic.</li>
        <li><strong>High angle</strong>: Camera looks down — makes character look small or vulnerable.</li>
      </ul>
      <p>
        You control shot type by adding camera angle descriptors to your image prompts:
        &quot;wide shot&quot;, &quot;medium shot&quot;, &quot;extreme close-up&quot;,
        &quot;low angle camera&quot;, etc.
      </p>

      <h2>Creating your scenes</h2>
      <p>
        For each scene in your script:
      </p>
      <ol>
        <li>Write the image prompt (character + expression + setting + shot type + lighting)</li>
        <li>Generate the still image with image AI</li>
        <li>Animate it with video AI using a motion prompt</li>
        <li>Listen to your narration script — record or generate with voice AI</li>
        <li>Time the video clip to match the narration</li>
      </ol>
      <p>
        Repeat for each scene. A 60-second film typically has 5–10 scenes.
      </p>

      <Callout type="info" title="Motion prompts for filmmaking">
        For cinematic quality, use these in your video AI motion prompts:
        &quot;slow cinematic zoom in&quot;, &quot;smooth camera pan left&quot;,
        &quot;dramatic pull back&quot;, &quot;orbit around subject&quot;.
        These make clips feel intentional and polished.
      </Callout>

      <h2>Adding voice with AI</h2>
      <p>
        ElevenLabs is currently the best tool for AI voiceover. The process:
      </p>
      <ol>
        <li>Paste your narration script into ElevenLabs</li>
        <li>Choose a voice that matches your character&apos;s personality</li>
        <li>Adjust speed and emotion settings</li>
        <li>Download the audio file</li>
      </ol>
      <p>
        For character dialogue, you can create different &quot;voices&quot; for each character
        and save them as presets. This maintains voice consistency just like image
        consistency.
      </p>

      <h2>Music and sound effects</h2>
      <p>
        Music is 50% of the emotional impact of a video. For AI-generated music:
      </p>
      <ul>
        <li><strong>Suno</strong> or <strong>Udio</strong>: Generate custom music from a description</li>
        <li><strong>Pixabay / Freesound</strong>: Free sound effects library</li>
        <li><strong>YouTube Audio Library</strong>: Royalty-free music for YouTube uploads</li>
      </ul>
      <p>
        Match the music mood to the scene emotion. Hopeful moment = uplifting strings.
        Action sequence = fast percussion. Victory moment = triumphant brass.
      </p>

      <h2>Editing your film</h2>
      <p>
        CapCut (free, beginner-friendly) or DaVinci Resolve (free, more powerful) are
        the best starting points. The editing process:
      </p>
      <ol>
        <li>Import all your video clips, voiceover audio, and music</li>
        <li>Arrange clips in order on the timeline</li>
        <li>Sync voiceover to the matching clips</li>
        <li>Add music layer (set volume lower than voiceover)</li>
        <li>Add sound effects where needed</li>
        <li>Add text/captions if desired</li>
        <li>Export in the right format for your platform</li>
      </ol>

      <Callout type="tip" title="Export settings">
        For YouTube: 1080p or 4K, MP4 format, H.264 codec.
        For Instagram Reels: 1080x1920 (vertical), MP4.
        For general web: 1080p, MP4, H.264.
      </Callout>

      <h2>Your film is ready</h2>
      <p>
        You now know how to produce a complete AI short film — from blank page to
        finished, exported video. In the final guide, you&apos;ll learn how to turn this
        into a content brand that grows over time.
      </p>
    </GuideLayout>
  );
}
