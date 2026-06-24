"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTABand() {
  return (
    <section className="relative w-full py-32 sm:py-40 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-navy)] via-[var(--primary-blue)] via-60% to-[var(--light-blue)]" />

      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-[700px] mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white tracking-[-0.02em] leading-[1.12] mb-5"
        >
          Start Automating Your Work Today with AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-white/70 leading-relaxed mb-10"
        >
          Join teams and individuals saving hours every day with smarter
          workflows and powerful automation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-white text-[#001033] hover:bg-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.25)] font-bold"
          >
            Get Started Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
