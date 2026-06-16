"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * 3D magnetic tilt card with a spotlight that follows the pointer.
 * Pure transform/opacity — GPU-friendly. Falls back to a static card
 * automatically under reduced-motion (Framer respects the media query).
 */
export default function TiltCard({
  children,
  className,
  intensity = 8,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 18,
  });

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx);
    py.set(ny);
    ref.current?.style.setProperty("--mx", `${nx * 100}%`);
    ref.current?.style.setProperty("--my", `${ny * 100}%`);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn("relative spotlight", className)}
    >
      <div style={{ transform: "translateZ(40px)" }}>{children}</div>
    </motion.div>
  );
}
