import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to the most common questions about AI animation, tools, cost, community, and our done-for-you service.",
  alternates: { canonical: "/faq" },
};

const faqGroups = [
  {
    group: "Getting started",
    items: [
      { question: "Do I need any experience to learn AI animation?", answer: "None at all. Our guides assume zero prior knowledge of AI, animation, or creative software. We explain every concept from scratch in plain language." },
      { question: "How long does it take to learn?", answer: "You can understand the basics in under an hour, and make your first AI animation in a single afternoon. Becoming a confident creator takes a few weeks of regular practice — but you'll be making real content from day one." },
      { question: "What equipment do I need?", answer: "Just a computer with a stable internet connection. Most AI tools run in the browser — no special hardware required. A decent smartphone works too for reviewing content." },
      { question: "Where should I start?", answer: "Go to our Start Here page. It lays out a clear 4-stage roadmap from zero to creator. Stage 1 links to our AI Animation Basics guide — that's your first stop." },
    ],
  },
  {
    group: "AI basics",
    items: [
      { question: "What exactly is AI animation?", answer: "AI animation is using artificial intelligence tools to generate images, videos, and audio from text descriptions — instead of drawing, rigging, or recording everything by hand. The results can look professionally animated, even made by a single person." },
      { question: "Is AI animation real animation?", answer: "It produces real animated video — moving images, scenes, characters. The method is different from traditional animation, but the output is a real video that audiences can watch and enjoy. Many viral animation channels are made with AI tools." },
      { question: "Will AI animation replace traditional animators?", answer: "No — but it changes the tools. Just like digital tools changed traditional illustration, AI changes what's possible for one person. Traditional animators who learn AI tools become more powerful, not obsolete." },
    ],
  },
  {
    group: "Tools & cost",
    items: [
      { question: "Is it expensive to get started?", answer: "Not at all. Most tools we recommend have free plans good enough to create your first 10–20 animations. We'll tell you exactly what's free and when a paid plan becomes worth it." },
      { question: "Which tools do you recommend for beginners?", answer: "DALL-E 3 (images), Kling AI or Pika (video animation), ElevenLabs (voice), Suno (music), and CapCut (editing). All have free tiers. See our Tools Directory for the full list." },
      { question: "Do I need to pay for all these tools?", answer: "No. You can complete the full workflow using free tiers of each tool. Paid plans give you more generations, higher quality, and priority access — but they're optional to start." },
    ],
  },
  {
    group: "Community & support",
    items: [
      { question: "Is the WhatsApp community free to join?", answer: "Yes, completely free. You'll get weekly tips, tool recommendations, and support from other creators who are learning the same things." },
      { question: "What happens in the community?", answer: "We share behind-the-scenes from real projects, answer questions, run occasional tutorials, and help members troubleshoot their AI animations. It's a genuine learning community, not a sales channel." },
      { question: "Is the newsletter free?", answer: "Yes. You get one email per week: a beginner-friendly tip, tool recommendation, or mini tutorial. No spam. Unsubscribe anytime." },
    ],
  },
  {
    group: "Done-for-you service",
    items: [
      { question: "How does your service work exactly?", answer: "You tell us your idea. We create a sample — at our cost, no payment from you. You review it. If you love it, you pay. If you don't, you pay nothing. That's the complete deal." },
      { question: "What do you create?", answer: "Custom AI 3D animated videos, storyboards, AI character design, high-quality AI images and cinematic video clips, and ongoing content packages for brands." },
      { question: "How do I get in touch about a project?", answer: `Send us a WhatsApp message at ${siteConfig.WHATSAPP_URL} or use the contact form on our Contact page. Tell us what you're imagining and we'll take it from there.` },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Answers to the most common questions about AI animation, tools, and our service.
          </p>
        </div>
      </section>

      <section className="section-py px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-14">
          {faqGroups.map((group) => (
            <div key={group.group}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-indigo)] mb-2">
                {group.group}
              </h2>
              <div>
                {group.items.map((item) => (
                  <FAQItem key={item.question} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
