"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { Users } from "lucide-react";

const team = [
  { name: "Julian Reyes", role: "Creative Director" },
  { name: "Sophia Chen", role: "Lead Engineer" },
  { name: "Marcus Webb", role: "Head of Strategy" },
  { name: "Elena K.", role: "Motion Designer" },
];

export default function Team() {
  return (
    <SectionWrapper id="team" className="relative bg-[var(--background)] py-24 md:py-40 mb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={Users}
          label="Our People"
          titleNormal="The Creative"
          titleItalic="Engine"
          description="A tight-knit collective of designers, engineers, and strategists pushing the boundaries of digital experiences."
        />

        <div className="mt-16 sm:mt-24 relative overflow-hidden rounded-[40px] sm:rounded-b-[56px] border border-[var(--line)] bg-[var(--ink)]">
          {/* Bottom Halo Gradient requested in spec */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(255,255,255,0.07)] to-transparent pointer-events-none" />
          <div className="absolute inset-0 wave-pattern opacity-[0.03] pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-16 lg:p-24 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col justify-end">
              <h3 className="text-3xl sm:text-4xl font-sans text-white tracking-tighter-md mb-6">
                Small teams, <br />
                <span className="font-serif italic font-light text-[var(--muted)]">massive impact.</span>
              </h3>
              <p className="text-base text-[var(--muted)] leading-relaxed font-medium max-w-md">
                We believe in zero bloat. By keeping our teams lean and senior-heavy, we move faster, communicate better, and deliver exceptional quality without the agency overhead.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-between py-6 border-b border-[var(--line)] group cursor-pointer"
                >
                  <span className="text-2xl sm:text-3xl font-sans font-medium text-white group-hover:text-[var(--muted)] transition-colors tracking-tight">
                    {member.name}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[var(--faint)] uppercase tracking-widest text-right">
                    {member.role}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
