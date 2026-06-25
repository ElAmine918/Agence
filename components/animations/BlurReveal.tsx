"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function BlurReveal({ children, delay = 0, className = "", duration = 0.8 }: BlurRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // Custom apple-like spring curve
      }}
    >
      {children}
    </motion.div>
  );
}
