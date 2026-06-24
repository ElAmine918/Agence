"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Upload, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload & Connect",
    description:
      "Connect your data sources, APIs, and tools. Our platform auto-detects schemas and relationships.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Processes & Learns",
    description:
      "Our AI engine analyzes patterns, builds models, and creates optimized automation pipelines for you.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Scale",
    description:
      "Launch your automation with one click. Monitor performance and scale effortlessly as your needs grow.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper dark id="how-it-works">
      {/* Dot grid texture for futuristic feel */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.02em] leading-[1.12] mb-5"
        >
          How It Works Behind the Scenes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
        >
          Three simple steps to transform your workflow from manual to fully
          automated.
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-[72px] left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px bg-gradient-to-r from-[var(--primary-blue)]/40 via-[var(--light-blue)]/60 to-[var(--primary-blue)]/40" />

        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative mb-8">
              <div className="w-[88px] h-[88px] rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm flex items-center justify-center glow-border">
                <step.icon className="w-8 h-8 text-[var(--light-blue)]" />
              </div>
              <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[var(--primary-blue)] text-white text-xs font-bold flex items-center justify-center shadow-[0_4px_16px_rgba(0,80,248,0.4)]">
                {step.number}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
