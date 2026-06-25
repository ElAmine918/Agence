"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Zap,
  Shield,
  BarChart3,
  Bot,
  Workflow,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Build intelligent workflows that learn and adapt. Automate complex tasks with minimal setup.",
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/10",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Drag and drop your way to automation. No coding required — connect apps and actions visually.",
    color: "text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-950/10",
  },
  {
    icon: Bot,
    title: "Smart AI Agents",
    description:
      "Deploy autonomous agents that handle repetitive tasks, respond to triggers, and make decisions.",
    color: "text-yellow-400 border-yellow-500/20 bg-yellow-950/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant, end-to-end encryption, and role-based access. Your data stays protected.",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/10",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track workflow performance, monitor costs, and optimize efficiency with real-time dashboards.",
    color: "text-blue-400 border-blue-500/20 bg-blue-950/10",
  },
  {
    icon: Clock,
    title: "24/7 Always Running",
    description:
      "Set it and forget it. Your automations run around the clock with 99.99% uptime guarantee.",
    color: "text-rose-400 border-rose-500/20 bg-rose-950/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <SectionWrapper id="features" className="relative overflow-hidden border-t border-zinc-800 bg-[#08080a]">
      {/* Background Grids */}
      <div className="absolute inset-0 remix-grid remix-grid-fine opacity-20 z-0 pointer-events-none" />

      {/* Grid Intersections Decorative Plus Marks */}
      <div className="absolute top-0 left-10 text-zinc-700 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute top-0 right-10 text-zinc-700 font-mono text-xs select-none pointer-events-none">+</div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mb-5 text-white"
          >
            Everything You Need to <br />
            <span className="gradient-text-remix font-black">Automate and Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Agence helps keep your workflows reliable, efficient, and
            secure — so you can focus on building your business.
          </motion.p>
        </div>

        {/* Remix Architectural Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-zinc-800/80 rounded-xl overflow-hidden bg-zinc-950/40 relative plus-corner plus-corner-child"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group p-8 border-b md:border-b-0 border-r border-zinc-800/80 last:border-b-0 hover:bg-zinc-900/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner accent pixel indicator */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-transparent group-hover:bg-cyan-500 transition-colors" />

              <div className="flex flex-col h-full">
                {/* Icon Container */}
                <div className={`mb-6 flex items-center justify-center w-12 h-12 rounded-lg border transition-all duration-300 ${feature.color} group-hover:scale-105`}>
                  <feature.icon className="w-5.5 h-5.5" />
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-white tracking-tight flex items-center gap-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Cyberpunk tech metadata */}
                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-600">
                  <span>MODULE // 0{i + 1}</span>
                  <span className="group-hover:text-zinc-400 transition-colors">READY</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
