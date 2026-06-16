"use client";

import { useMemo } from "react";

/**
 * Ambient world layer: warm vignette + slow-drifting embers / fireflies.
 * Fixed behind all content, very low opacity — adds depth without hurting
 * readability. Hidden under reduced-motion (see globals.css).
 */
export default function Atmosphere() {
  const embers = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 18,
        duration: 14 + Math.random() * 16,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.25 + Math.random() * 0.45,
        warm: Math.random() > 0.4,
      })),
    []
  );

  return (
    <div className="atmosphere fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* warm vignette / depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(255,205,107,0.10), transparent 55%), radial-gradient(100% 70% at 100% 100%, rgba(31,125,114,0.08), transparent 60%)",
        }}
      />
      {/* embers */}
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute bottom-[-10px] rounded-full"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            background: e.warm
              ? "radial-gradient(circle, #ffcd6b, #ff5a3c)"
              : "radial-gradient(circle, #7fe7d4, #36c9b0)",
            filter: "blur(0.5px)",
            // @ts-expect-error custom props
            "--ember-drift": `${e.drift}px`,
            "--ember-opacity": e.opacity,
            animation: `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
