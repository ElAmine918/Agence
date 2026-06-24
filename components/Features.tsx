"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Zap,
  Shield,
  BarChart3,
  Bot,
  Workflow,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Build intelligent workflows that learn and adapt. Automate complex tasks with minimal setup.",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Drag and drop your way to automation. No coding required — connect apps and actions visually.",
  },
  {
    icon: Bot,
    title: "Smart AI Agents",
    description:
      "Deploy autonomous agents that handle repetitive tasks, respond to triggers, and make decisions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant, end-to-end encryption, and role-based access. Your data stays protected.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track workflow performance, monitor costs, and optimize efficiency with real-time dashboards.",
  },
  {
    icon: Clock,
    title: "24/7 Always Running",
    description:
      "Set it and forget it. Your automations run around the clock with 99.99% uptime guarantee.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Features() {
  return (
    <SectionWrapper id="features" className="dot-grid">
      <div className="mb-16 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.02em] leading-[1.12] mb-5 text-[var(--heading)]"
        >
          Everything You Need to{" "}
          <span className="gradient-text">Automate and Scale</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-[var(--muted)] leading-relaxed"
        >
          Antimetal helps keep your infrastructure reliable, efficient, and
          secure — so you can focus on building.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 glow-border transition-all duration-300"
          >
            <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--primary-blue)]/[0.08] text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-all duration-300">
              <feature.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--heading)]">
              {feature.title}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
