"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Bot, Cpu, Globe, Layers, Lock, Zap } from "lucide-react";

const icons = [Bot, Cpu, Globe, Layers, Lock, Zap];

export default function Trust() {
  return (
    <SectionWrapper id="trust">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.02em] leading-[1.12] mb-6 text-[var(--heading)]">
            Trusted by teams building{" "}
            <span className="gradient-text">smarter systems</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8">
            From startups to enterprise, teams rely on our platform to automate
            their most critical workflows. We handle the complexity so you can
            focus on innovation.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            {["2,500+", "99.99%", "50M+"].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-[var(--primary-blue)]">
                  {stat}
                </div>
                <div className="text-xs text-[var(--subtle)] mt-1">
                  {["Active Teams", "Uptime", "Tasks Automated"][i]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
            <div className="absolute inset-0 rounded-full border border-[var(--primary-blue)]/10" />
            <div className="absolute inset-6 rounded-full border border-[var(--primary-blue)]/15" />
            <div className="absolute inset-12 rounded-full border border-[var(--primary-blue)]/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary-blue)] flex items-center justify-center shadow-[0_8px_32px_rgba(0,80,248,0.3)]">
                <Zap className="w-7 h-7 text-white" />
              </div>
            </div>

            {icons.map((Icon, i) => {
              const positions: [number, number][] = [
                [140, 0],
                [70, 121],
                [-70, 121],
                [-140, 0],
                [-70, -121],
                [70, -121],
              ];
              const [x, y] = positions[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="absolute w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm flex items-center justify-center"
                  style={{
                    left: `calc(50% + ${x}px - 20px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                  }}
                >
                  <Icon className="w-4 h-4 text-[var(--primary-blue)]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
