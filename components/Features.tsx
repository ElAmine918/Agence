"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Zap,
  Shield,
  Bot,
  Workflow
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered",
    description: "Build intelligent workflows that learn and adapt. Automate complex tasks with minimal setup.",
  },
  {
    icon: Workflow,
    title: "Visual Builder",
    description: "Drag and drop your way to automation. No coding required — connect apps and actions visually.",
  },
  {
    icon: Bot,
    title: "Smart Agents",
    description: "Deploy autonomous agents that handle repetitive tasks, respond to triggers, and make decisions.",
  },
  {
    icon: Shield,
    title: "Enterprise Grade",
    description: "SOC 2 compliant, end-to-end encryption, and role-based access. Your data stays protected.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Features() {
  return (
    <SectionWrapper id="features" className="relative overflow-hidden bg-[var(--background)] py-24 md:py-32">
      {/* Background Texture */}
      <div className="absolute inset-0 wave-pattern opacity-[0.02] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          icon={Workflow}
          label="Services"
          titleNormal="What We"
          titleItalic="Provide"
          titleEnd="For You"
          description="Agence helps keep your workflows reliable, efficient, and secure — so you can focus on building your business."
        />

        {/* 4-Column Luxury Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-0"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group p-8 rounded-[32px] border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] transition-all duration-500 relative flex flex-col h-full overflow-hidden"
            >
              {/* Top Accent Icon */}
              <div className="mb-8 w-12 h-12 rounded-full border border-[var(--line)] bg-[var(--ink)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-5 h-5 text-[var(--foreground)]" />
              </div>
              
              <div className="flex-1">
                <div className="text-[12px] font-mono text-[var(--faint)] mb-4">/0{i + 1}</div>
                <h3 className="text-2xl font-sans font-medium tracking-tight mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Bottom line accent on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
