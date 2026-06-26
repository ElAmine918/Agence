"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Mail, Loader2, Check } from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="relative py-24 md:py-40 border-t border-[var(--line)]">
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
          
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest pl-4">Nom du commerce</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Le Petit Bistro"
                  className="w-full bg-transparent border-b border-[var(--line)] px-4 py-3 text-white placeholder:text-[var(--faint)] focus:outline-none focus:border-[#D8B4FE]/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest pl-4">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="allo@bistro.ca"
                  className="w-full bg-transparent border-b border-[var(--line)] px-4 py-3 text-white placeholder:text-[var(--faint)] focus:outline-none focus:border-[#D8B4FE]/60 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest pl-4">Vos Besoins</label>
              <textarea 
                required
                placeholder="Parlez-nous de votre projet : refonte de site web, besoin d'un agent IA pour vos réservations, SEO..."
                rows={4}
                className="w-full bg-transparent border-b border-[var(--line)] px-4 py-3 text-white placeholder:text-[var(--faint)] focus:outline-none focus:border-[#D8B4FE]/60 transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end mt-8">
              <MagneticButton strength={15}>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full sm:w-auto px-12 transition-all relative overflow-hidden"
                  disabled={status !== "idle"}
                >
                  <span className={`flex items-center gap-2 transition-opacity duration-300 ${status !== "idle" ? "opacity-0" : "opacity-100"}`}>
                    Envoyer la demande
                  </span>
                  
                  {/* Loading State */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${status === "loading" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>

                  {/* Success State */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${status === "success" ? "opacity-100 scale-100 bg-green-500 text-white" : "opacity-0 scale-50"}`}>
                    <span className="flex items-center gap-2 font-medium">
                      <Check className="w-5 h-5" />
                      Envoyé !
                    </span>
                  </div>
                </Button>
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
