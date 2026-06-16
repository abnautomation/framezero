import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="text-center max-w-md">
        <p className="text-8xl font-black gradient-text mb-6">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          This page doesn&apos;t exist — but there&apos;s a lot of good stuff that does.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/">Go home</Button>
          <Button href="/start-here" variant="secondary">Start learning</Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {[
            { label: "AI Basics", href: "/learn/ai-animation-basics" },
            { label: "Tools", href: "/tools" },
            { label: "Community", href: "/community" },
            { label: "Blog", href: "/blog" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-[var(--color-indigo)] hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
