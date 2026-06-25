"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col">
      {/* Background Video Placeholder & Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
        {/* Placeholder for video since we don't have a video file yet */}
        <div className="w-full h-full bg-[var(--ink)]" />
      </div>

      {/* Wave Dot Texture Overlay */}
      <div className="absolute inset-0 wave-pattern opacity-[0.05] z-0" />

      {/* Center Glow */}
      <div className="center-glow opacity-30" />

      {/* Floating Chrome Sphere (CSS Representation) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #a3a3a3 20%, #262626 60%, #000000 100%)",
          boxShadow: "inset -20px -20px 60px rgba(0,0,0,0.8), inset 10px 10px 40px rgba(255,255,255,0.4), 0 30px 60px rgba(0,0,0,0.8)"
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content Grid (Asymmetric) */}
      <div className="relative z-20 flex-1 flex flex-col justify-between w-full max-w-[1440px] mx-auto px-6 md:px-[72px] pt-32 pb-12">
        
        {/* Top Row: Empty Left, Content Right */}
        <div className="w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-end text-right max-w-[320px]"
          >
            <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-6 font-medium">
              Nous concevons des présences digitales premium et déployons des réceptionnistes IA pour les commerces montréalais.
            </p>
            <a href="#contact" className="text-white text-sm font-semibold mb-6 border-b border-[var(--line)] pb-1 hover:text-[var(--muted)] transition-colors">
              Contactez-nous
            </a>
            <div className="flex items-center gap-3">
              {["IG", "IN"].map((label, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[var(--line)] bg-transparent flex items-center justify-center hover:bg-white hover:text-black transition-colors group">
                  <span className="text-[10px] font-mono font-medium text-white group-hover:text-black transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Title Left, Meta Left & Right */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-12 mt-auto">
          
          {/* Left Column: Huge Title + "We do" */}
          <div className="flex flex-col gap-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[80px] sm:text-[100px] lg:text-[140px] font-sans font-normal text-white tracking-tighter-xl leading-[0.92] max-w-4xl m-0 p-0"
            >
              Digital, <br />
              <span className="font-serif italic font-light text-[var(--muted)] tracking-tighter-lg">Élégant</span> <br />
              <span className="gradient-text-agency">& Automatisé</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[10px] font-mono font-medium text-[var(--faint)] uppercase tracking-widest">Expertises</span>
              <p className="text-[14px] font-sans font-medium text-[var(--muted)] tracking-tight">
                / Web Design / SEO Local / Réceptionnistes IA
              </p>
            </motion.div>
          </div>

          {/* Right Column: Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex flex-col items-end gap-4"
          >
            <div className="flex items-center gap-2 text-[10px] font-mono font-medium text-[var(--faint)] uppercase tracking-widest">
              <span>Featured</span>
              <span className="text-white">(01)</span>
            </div>
            <div className="w-[200px] h-[120px] rounded-2xl bg-[var(--surface)] border border-[var(--line)] overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 wave-pattern opacity-[0.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-medium group-hover:text-white/80 transition-colors">
                Maison St-Paul
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Center Bottom Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[var(--muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
