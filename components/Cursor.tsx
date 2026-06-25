"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"idle" | "magnetic" | "link">("idle");

  // Initial cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices immediately
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      // Subtract half of width (6px) to center the dot
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over a magnetic element specifically
      if (target.closest('[data-magnetic="true"]')) {
        setHoverState("magnetic");
      } 
      // Check if hovering over normal interactive elements
      else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setHoverState("link");
      } 
      // Not hovering anything interactive
      else {
        setHoverState("idle");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determine scale and opacity based on hover state
  let scale = 1;
  let opacity = 1;
  
  if (hoverState === "magnetic") {
    scale = 0;
    opacity = 0;
  } else if (hoverState === "link") {
    scale = 2.5; // Expands slightly
    opacity = 0.4; // Becomes slightly transparent
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full bg-white flex items-center justify-center w-[12px] h-[12px]"
        animate={{ scale, opacity }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
