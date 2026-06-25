"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-end justify-center">
      <motion.div
        className="w-[80vw] max-w-[1000px] h-[40vh] rounded-[100%] opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(ellipse at center, rgba(10, 60, 255, 0.4) 0%, rgba(0, 10, 50, 0.1) 50%, transparent 100%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [-50, 50, -30, 20, -50],
          y: [0, -30, 10, -20, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}
