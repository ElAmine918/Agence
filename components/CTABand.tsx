"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section
      id="cta"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#050507] border-t border-zinc-800"
    >
      {/* Grid background */}
      <div className="absolute inset-0 remix-grid opacity-20 z-0 pointer-events-none" />

      {/* Neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        {/* Two-column glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left card — Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-sm p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            <div>
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4 block">
                Describe the destination
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-[-0.02em] leading-[1.15] mb-4">
                Building with Agence can take you there
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                Agence is currently available as an open beta. Start automating
                your workflows today with AI-powered agents that learn and
                adapt to your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button
                size="md"
                className="bg-white text-black hover:bg-zinc-200 font-semibold"
              >
                Get Started Free
              </Button>
              <Button
                variant="ghost"
                size="md"
                className="text-zinc-400 hover:text-white"
              >
                <ArrowRight className="w-4 h-4" />
                Watch the demo
              </Button>
            </div>
          </motion.div>

          {/* Right card — Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-sm p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

            <div>
              <span className="text-[11px] font-mono font-bold text-fuchsia-400 uppercase tracking-widest mb-4 block">
                Subscribe to our newsletter
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.02em] leading-[1.15] mb-4">
                Stay in the loop
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                Once a month, we write about everything in the world of AI
                automation. Sign up to be notified on progress. No spam.
                Unsubscribe anytime.
              </p>
            </div>

            {/* Email input + subscribe */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="name@example.com"
                className="flex-1 px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all font-mono"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-sm font-semibold text-white hover:bg-zinc-700 transition-all cursor-pointer shrink-0 active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom rainbow separator */}
        <div className="mt-16">
          <div className="rainbow-line h-[1px] opacity-30" />
        </div>
      </div>
    </section>
  );
}
