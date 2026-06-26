/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function InteractiveGrid() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use a spring for smoother trailing of the glow
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Dynamically generate the radial gradient CSS string
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Get position relative to the viewport
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base faint grid */}
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-[var(--line)]" />
        <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-[var(--line)]" />
        <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-[var(--line)]" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-[var(--line)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 1. Base faint grid (Always visible) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-[var(--line)]" />
        <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-[var(--line)]" />
        <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-[var(--line)]" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-[var(--line)]" />
      </div>

      {/* 2. Glowing bright grid (Masked by mouse position) */}
      <motion.div 
        className="absolute inset-0"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        {/* Active Lines (animated over the base grid) */}
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-[#D8B4FE]/30 shadow-[0_0_12px_rgba(216,180,254,0.4)]" />
        <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-[#D8B4FE]/30 shadow-[0_0_12px_rgba(216,180,254,0.4)]" />
        <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-[#D8B4FE]/30 shadow-[0_0_12px_rgba(216,180,254,0.4)]" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-[#D8B4FE]/30 shadow-[0_0_12px_rgba(216,180,254,0.4)]" />
      </motion.div>
    </div>
  );
}
