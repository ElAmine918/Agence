"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import BlurReveal from "@/components/animations/BlurReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import InteractiveGrid from "@/components/InteractiveGrid";
import CarPointCloud from "@/components/CarPointCloud";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col pt-32 pb-24 md:pt-48 bg-[var(--background)] overflow-hidden">
      
      <CarPointCloud />
      <InteractiveGrid />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 flex flex-col h-full justify-between flex-grow">
        
        {/* Top: Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <BlurReveal>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Disponibilité 2026
              </span>
              <p className="text-sm text-[var(--muted)] max-w-xs font-medium">
                Agence web spécialisée. Nous concevons des plateformes premium pour les commerces locaux montréalais.
              </p>
            </div>
          </BlurReveal>
          
          <div className="hidden md:flex flex-col items-end gap-2 text-right">
            <span className="text-[12px] font-mono text-[var(--faint)] uppercase tracking-widest">
              Localisation
            </span>
            <p className="text-sm text-[var(--muted)] font-medium flex items-center gap-2">
              <Globe className="w-4 h-4 text-[var(--faint)]" />
              Montréal, QC
            </p>
          </div>
        </div>

        {/* Middle: Massive Typography */}
        <div className="flex-grow flex flex-col justify-center relative">
          <div className="absolute -left-12 top-4 w-4 h-[1px] bg-[var(--line)] hidden lg:block" />
          
          {/* Left Column: Huge Title + "We do" */}
          <div className="flex flex-col gap-12">
            <BlurReveal delay={0.1}>
              <h1 className="text-[80px] sm:text-[100px] lg:text-[140px] font-sans font-normal text-white tracking-tighter-xl leading-[0.92] max-w-4xl m-0 p-0">
                Digital, <br />
                <span className="font-serif italic font-light text-[var(--muted)] tracking-tighter-lg">Élégant</span> <br />
                <span className="gradient-text-agency">& Automatisé</span>
              </h1>
            </BlurReveal>

            <BlurReveal delay={0.2}>
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--faint)] whitespace-nowrap">Expertise</span>
                <div className="h-[1px] w-12 bg-[var(--line)]" />
                <div className="flex items-center gap-4 text-xs font-medium text-[var(--subtle)]">
                  <span>Web Design</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--faint)]" />
                  <span>Agents Vocaux IA</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--faint)]" />
                  <span>SEO Local</span>
                </div>
              </div>
            </BlurReveal>
          </div>
        </div>

        {/* Bottom: CTA & Abstract element */}
        <div className="mt-24 md:mt-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-[var(--line)] pt-8 relative">
          <div className="plus-corner-child absolute top-0 left-0" />
          
          <BlurReveal delay={0.3} className="max-w-md">
            <p className="text-lg text-[var(--muted)] font-medium leading-relaxed">
              Nous construisons des fondations digitales robustes pour propulser votre entreprise dans l'ère de l'intelligence artificielle.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <MagneticButton strength={20}>
              <Link href="#contact" className="group">
                <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-zinc-200 border-none">
                  <span className="relative z-10 flex items-center gap-2 text-sm">
                    Démarrer un projet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </MagneticButton>
          </BlurReveal>
        </div>

      </div>

      {/* Hero Visual Element (Sphere/Abstract) */}
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] opacity-20 z-0 pointer-events-none mix-blend-screen hidden lg:block">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border border-[var(--line)] relative"
        >
          <div className="absolute inset-0 rounded-full border border-[var(--line)] scale-90" />
          <div className="absolute inset-0 rounded-full border border-[var(--line)] scale-75" />
          <div className="absolute inset-0 rounded-full border border-[var(--line)] scale-50" />
        </motion.div>
      </div>

    </section>
  );
}
