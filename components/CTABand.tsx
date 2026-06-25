"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTABand() {
  return (
    <section className="relative w-full py-32 sm:py-40 overflow-hidden bg-[#050507] border-t border-zinc-800">
      {/* Top Rainbow Separator Line */}
      <div className="absolute top-0 left-0 right-0">
        <div className="rainbow-line h-[1.5px] opacity-75" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 remix-grid opacity-30 z-0 pointer-events-none" />

      {/* Radial neon glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[750px] mx-auto text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest"
        >
          ready to begin?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1] mt-3 mb-5"
        >
          Start Automating Your Work <br />
          <span className="gradient-text-remix font-black">Today with AI</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10"
        >
          Join teams and individuals saving hours every day with self-learning workflows and powerful automated integrations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-zinc-200 border-white font-semibold"
          >
            Get Started Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
