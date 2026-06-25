"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section
      id="cta"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--background)]"
    >
      {/* Wave pattern background */}
      <div className="absolute inset-0 wave-pattern opacity-[0.03] z-0 pointer-events-none" />

      {/* Subtle central glow instead of neon */}
      <div className="center-glow opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        {/* Two-column glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left card — Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div>
              <span className="text-[12px] font-mono font-medium text-[var(--faint)] uppercase tracking-widest mb-6 block">
                Describe the destination
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tighter-md leading-[1.1] mb-6">
                Building with Agence <br />
                <span className="font-serif italic font-light text-[var(--muted)]">takes you there</span>
              </h2>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-10 font-medium">
                Agence is currently available as an open beta. Start automating
                your workflows today with AI-powered agents that learn and
                adapt to your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started Free
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
              >
                Watch the demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Right card — Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div>
              <span className="text-[12px] font-mono font-medium text-[var(--faint)] uppercase tracking-widest mb-6 block">
                Subscribe to our newsletter
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tighter-md leading-[1.1] mb-6">
                Stay in the <span className="font-serif italic font-light text-[var(--muted)]">loop</span>
              </h2>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-10 font-medium">
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
                className="flex-1 px-6 py-4 rounded-full bg-[var(--ink)] border border-[var(--line)] text-base text-white placeholder:text-[var(--faint)] focus:outline-none focus:border-[var(--subtle)] transition-all font-sans font-medium"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-black text-base font-medium hover:bg-[#cecece] transition-all cursor-pointer shrink-0 active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
