"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative bg-[var(--background)] py-24 md:py-40 border-t border-[var(--line)]">
      {/* Background glow */}
      <div className="absolute inset-0 wave-pattern opacity-[0.03] pointer-events-none" />
      <div className="center-glow opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={Mail}
          label="Prise de contact"
          titleNormal="Démarrez votre"
          titleItalic="Projet"
          description="Prêt à élever votre présence digitale et automatiser vos lignes téléphoniques ? Discutons de votre vision."
        />

        <div className="max-w-4xl mx-auto mt-16 sm:mt-24 bg-[var(--surface)] border border-[var(--line)] rounded-[32px] sm:rounded-[48px] p-8 sm:p-16 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest pl-4">Nom du commerce</label>
                <input 
                  type="text" 
                  placeholder="Ex: Le Petit Bistro"
                  className="w-full bg-transparent border-b border-[var(--line)] px-4 py-3 text-white placeholder:text-[var(--faint)] focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest pl-4">Email</label>
                <input 
                  type="email" 
                  placeholder="allo@bistro.ca"
                  className="w-full bg-transparent border-b border-[var(--line)] px-4 py-3 text-white placeholder:text-[var(--faint)] focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest pl-4">Vos Besoins</label>
              <textarea 
                placeholder="Parlez-nous de votre projet : refonte de site web, besoin d'un agent IA pour vos réservations, SEO..."
                rows={4}
                className="w-full bg-transparent border-b border-[var(--line)] px-4 py-3 text-white placeholder:text-[var(--faint)] focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end mt-8">
              <Button size="lg" className="w-full sm:w-auto px-12">
                Envoyer la demande
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
