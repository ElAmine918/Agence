"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Upload, Cpu, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload & Connect",
    description:
      "Connect your data sources, APIs, and tools. Our platform auto-detects schemas, variables, and authentication scopes.",
    color: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-cyan-400 border-cyan-800/30 bg-cyan-950/10",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Processes & Learns",
    description:
      "Our AI engine analyzes patterns, builds model weights, and creates optimized, self-healing automation pathways.",
    color: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_15px_rgba(217,70,239,0.1)] text-fuchsia-400 border-fuchsia-800/30 bg-fuchsia-950/10",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Scale",
    description:
      "Launch your automation workflows in one click. Monitor runtime execution, cost analytics, and logs in real-time.",
    color: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] text-yellow-400 border-yellow-800/30 bg-yellow-950/10",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="relative overflow-hidden border-t border-zinc-800 bg-[#08080a]">
      {/* Background Grids */}
      <div className="absolute inset-0 remix-grid remix-grid-fine opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest"
        >
          pipeline execution
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mt-3 mb-5 text-white"
        >
          How It Works Behind the Scenes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto"
        >
          Three simple steps to transform your manual operations into highly optimized, fully automated pipelines.
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10">
        {/* Step Cards */}
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group relative flex flex-col items-start border border-zinc-800/80 rounded-xl bg-zinc-950/40 p-8 hover:bg-zinc-900/10 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top right order metadata */}
            <span className="absolute top-5 right-5 font-mono text-zinc-700 text-sm font-semibold select-none group-hover:text-zinc-500 transition-colors">
              STEP // 0{i + 1}
            </span>

            {/* Icon Block */}
            <div className={`mb-6 flex items-center justify-center w-12 h-12 rounded-lg border transition-all duration-300 ${step.color}`}>
              <step.icon className="w-5.5 h-5.5" />
            </div>

            <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
            
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              {step.description}
            </p>

            {/* Process connection info */}
            {i < 2 ? (
              <div className="mt-auto pt-4 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>PROCEED TO STEP 0{i + 2}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            ) : (
              <div className="mt-auto pt-4 flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
                <span>SYSTEM ONLINE & RUNNING</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
