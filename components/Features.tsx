"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Globe,
  Bot,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Création Web Premium",
    description: "Votre vitrine digitale, repensée. Nous créons des sites web ultra-rapides et esthétiques, conçus spécifiquement pour convertir vos visiteurs en clients.",
  },
  {
    icon: Bot,
    title: "Réceptionnistes IA",
    description: "Ne manquez plus jamais une réservation. Un agent vocal IA répond au téléphone 24/7, prend les rendez-vous et informe vos clients avec une voix naturelle.",
  },
  {
    icon: TrendingUp,
    title: "SEO Local & Croissance",
    description: "Dominez les recherches Google à Montréal. Nous optimisons votre présence pour que vous soyez le premier choix quand vos clients ont faim ou cherchent un service.",
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
    <SectionWrapper id="services" className="relative overflow-hidden bg-[var(--background)] py-24 md:py-32">
      {/* Background Texture */}
      <div className="absolute inset-0 wave-pattern opacity-[0.02] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          icon={Globe}
          label="Nos Services"
          titleNormal="L'écosystème"
          titleItalic="Complet"
          titleEnd=""
          description="De l'acquisition en ligne à la prise d'appel automatisée, nous gérons votre présence de A à Z."
        />

        {/* 3-Column Luxury Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0 mt-16"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group p-8 sm:p-12 rounded-[32px] border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] transition-all duration-500 relative flex flex-col h-full overflow-hidden"
            >
              {/* Top Accent Icon */}
              <div className="mb-10 w-14 h-14 rounded-full border border-[var(--line)] bg-[var(--ink)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 text-[var(--foreground)]" />
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
