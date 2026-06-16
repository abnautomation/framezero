import { cn } from "@/lib/utils";

/**
 * Frame Zero mark — a film aperture / clapper "0" framing a play triangle.
 * Communicates: film (aperture blades), animation (play), zero (the ring),
 * imagination (magic-hour gradient). Scales cleanly from favicon to billboard.
 */
export default function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative inline-flex">
        <svg
          width="34"
          height="34"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="drop-shadow-[0_4px_12px_rgba(255,77,125,0.35)]"
        >
          <defs>
            <linearGradient id="fz-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC56F" />
              <stop offset="0.45" stopColor="#FF4D7D" />
              <stop offset="1" stopColor="#6D5CFF" />
            </linearGradient>
          </defs>
          {/* Aperture ring */}
          <circle cx="20" cy="20" r="17" stroke="url(#fz-grad)" strokeWidth="3" />
          {/* Aperture blades hint */}
          <path d="M20 3 L26 14 H14 Z" fill="url(#fz-grad)" opacity="0.25" />
          <path d="M37 20 L26 26 V14 Z" fill="url(#fz-grad)" opacity="0.18" />
          {/* Play triangle */}
          <path d="M16.5 13.5 L28 20 L16.5 26.5 Z" fill="url(#fz-grad)" />
        </svg>
      </span>
      {showWordmark && (
        <span className="font-bold text-lg tracking-tight leading-none">
          Frame<span className="gradient-text">Zero</span>
        </span>
      )}
    </span>
  );
}
