import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Callout from "@/components/ui/Callout";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-4xl font-bold tracking-tight mt-8 mb-4 first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-bold tracking-tight mt-10 mb-4 scroll-mt-24"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-8 mb-3 scroll-mt-24" {...props} />
  ),
  p: (props) => (
    <p
      className="text-[var(--color-text-secondary)] leading-relaxed mb-4"
      {...props}
    />
  ),
  a: ({ href, ...props }) =>
    href?.startsWith("http") ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-indigo)] underline underline-offset-2 hover:text-[var(--color-violet)] transition-colors"
        {...props}
      />
    ) : (
      <Link
        href={href ?? "#"}
        className="text-[var(--color-indigo)] underline underline-offset-2 hover:text-[var(--color-violet)] transition-colors"
        {...props}
      />
    ),
  ul: (props) => (
    <ul className="list-disc list-outside ml-5 space-y-2 mb-4 text-[var(--color-text-secondary)]" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-outside ml-5 space-y-2 mb-4 text-[var(--color-text-secondary)]" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[var(--color-indigo)] pl-4 my-6 italic text-[var(--color-text-secondary)]"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-[var(--color-surface-2)] rounded px-1.5 py-0.5 text-sm font-mono text-[var(--color-indigo)]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-[var(--color-surface-2)] rounded-xl p-4 overflow-x-auto mb-4 text-sm"
      {...props}
    />
  ),
  hr: () => <hr className="border-[var(--color-glass-border)] my-8" />,
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
