"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-32 pb-24 flex flex-col justify-end overflow-hidden bg-black"
    >
      {/* Texture & Glow Background */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] z-0" />
      <div className="center-glow" />

      {/* Floating Chrome Sphere (SVG representation) */}
      <motion.div
        className="absolute top-1/2 left-[60%] sm:left-[70%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #a3a3a3 20%, #262626 60%, #000000 100%)",
          boxShadow: "inset -20px -20px 60px rgba(0,0,0,0.8), inset 10px 10px 40px rgba(255,255,255,0.4), 0 30px 60px rgba(0,0,0,0.8)"
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Overlay (Dark Gradient for readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 px-6 sm:px-12 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-end pb-12">
        
        {/* Left Side: Massive Typography */}
        <div className="flex-1 mb-12 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[80px] sm:text-[100px] lg:text-[140px] font-sans font-normal text-white tracking-tighter-xl leading-[0.92] max-w-4xl"
          >
            Create <br />
            <span className="font-serif italic font-light text-[var(--muted)]">Impactful</span> <br />
            <span className="gradient-text-agency">Automations</span>
          </motion.h1>
        </div>

        {/* Right Side: Description & CTA */}
        <div className="w-full md:w-[400px] flex flex-col items-start md:items-end text-left md:text-right">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20px] text-[var(--muted)] leading-relaxed mb-8 font-medium"
          >
            From idea to autonomous workflows. We build intelligent systems that scale faster than humanly possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-end gap-4 w-full"
          >
            <Button size="lg" href="#pricing" variant="primary" className="w-full sm:w-auto bg-white text-black hover:bg-[#e0e0e0] border-0 text-lg rounded-full px-8 py-6">
              Start Project
            </Button>
            <Button variant="secondary" size="lg" href="#features" className="w-full sm:w-auto bg-[#1b1b1b] text-white hover:bg-[#2b2b2b] border border-[var(--line)] text-lg rounded-full px-8 py-6">
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
