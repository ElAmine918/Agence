"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { Users } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import ScrollLinkedText from "@/components/animations/ScrollLinkedText";

const team = [
  { name: "Proximité Locale", role: "On comprend Montréal" },
  { name: "Approche ROI", role: "Axé sur les résultats" },
  { name: "Technologie IA", role: "Un temps d'avance" },
  { name: "Support Premium", role: "Retainer & Maintenance" },
];

export default function Team() {
  return (
    <SectionWrapper id="team" className="relative py-24 md:py-40 mb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <BlurReveal>
          <SectionHeader
            icon={Users}
            label="L'Avantage"
            titleNormal="Pourquoi"
            titleItalic="Nous ?"
            description="Contrairement aux agences traditionnelles, nous ne vendons pas juste du code. Nous vendons de la croissance et du temps gagné."
          />
        </BlurReveal>

        <div className="mt-16 sm:mt-24 relative overflow-hidden rounded-[40px] sm:rounded-b-[56px] border border-[var(--line)] bg-[var(--ink)]">
          {/* Bottom Halo Gradient requested in spec */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(255,255,255,0.07)] to-transparent pointer-events-none" />
          <div className="absolute inset-0 wave-pattern opacity-[0.03] pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-16 lg:p-24 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col justify-end">
              <BlurReveal delay={0.2}>
                <h3 className="text-3xl sm:text-4xl font-sans text-white tracking-tighter-md mb-6">
                  Des solutions locales, <br />
                  <span className="font-serif italic font-light bg-gradient-to-r from-[#D8B4FE] via-[#E9D5FF] to-[#FBCFE8] text-transparent bg-clip-text">un impact massif.</span>
                </h3>
              </BlurReveal>
              
              <ScrollLinkedText 
                text="Un restaurant ou un commerce montréalais n'a pas besoin des mêmes outils qu'une multinationale. Vous avez besoin d'être trouvé facilement, de donner envie, et de ne jamais rater un appel client. C'est exactement ce que nous bâtissons."
                className="text-lg sm:text-xl text-white font-medium leading-relaxed max-w-md"
              />
            </div>

            <div className="flex flex-col gap-6 w-full">
              {team.map((member, i) => (
                <BlurReveal key={i} delay={0.3 + (i * 0.1)}>
                  <div
                    className="flex items-center justify-between py-6 border-b border-[var(--line)] group cursor-pointer"
                  >
                    <span className="text-2xl sm:text-3xl font-sans font-medium text-white group-hover:text-[var(--muted)] transition-colors tracking-tight">
                      {member.name}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[var(--faint)] uppercase tracking-widest text-right">
                      {member.role}
                    </span>
                  </div>
                </BlurReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
