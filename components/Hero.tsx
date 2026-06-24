"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import HeroBackground from "@/components/BackgroundStars";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    return () => section?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      {/* Cursor-following glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-[1] transition-opacity duration-300 opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(95,189,247,0.25) 0%, transparent 70%)",
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="accent" className="mb-8">
            <span className="text-black font-bold">NEW</span>
            <span className="text-black/60 ml-1">2026 MAY UPDATE →</span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-[68px] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
        >
          From Idea to Automation,
          <br />
          Powered by AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-base sm:text-lg text-white/70 leading-relaxed mb-10"
        >
          Automate your workflows, eliminate repetitive tasks, and scale faster
          with powerful AI tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="lg" href="#pricing">
            Get Started Free
          </Button>
          <Button variant="secondary" size="lg" href="#how-it-works" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
            See How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
