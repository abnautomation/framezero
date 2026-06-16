"use client";

import { useRef, useState } from "react";

/**
 * Swipeable film-reel carousel for mobile/tablet — the reliable, fun
 * equivalent of the desktop pinned sequence. CSS scroll-snap (no scroll
 * jacking), with an active-dot indicator and tap-to-jump dots.
 */
export default function SnapCarousel({ items }: { items: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const el = ref.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const node = child as HTMLElement;
      const c = node.offsetLeft + node.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }

  function go(i: number) {
    const el = ref.current;
    if (!el) return;
    const node = el.children[i] as HTMLElement | undefined;
    if (!node) return;
    el.scrollTo({
      left: node.offsetLeft - (el.clientWidth - node.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-[9vw] pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-center shrink-0 w-[82vw] max-w-[360px]">
            {item}
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to item ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: active === i ? 24 : 8,
              background: active === i ? "var(--gradient-primary)" : "var(--color-surface-3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
