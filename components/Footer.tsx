"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";

const footerLinks = [
  {
    heading: "Studio M",
    links: [
      { label: "Services", href: "#services" },
      { label: "Pourquoi Nous", href: "#team" },
      { label: "Tarifs", href: "#pricing" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Démarrer un projet", href: "#contact" },
      { label: "Carrières", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    heading: "Légal",
    links: [
      { label: "Politique de confidentialité", href: "#" },
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Mentions Légales", href: "#" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[var(--background)] border-t border-[var(--line)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        
        {/* Top: Massive Logo & Back to top */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-24">
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="block">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-medium text-white tracking-tighter-md leading-none hover:opacity-80 transition-opacity">
                Studio M <span className="font-serif italic font-light bg-gradient-to-r from-[#D8B4FE] via-[#E9D5FF] to-[#FBCFE8] text-transparent bg-clip-text">©</span>
              </h2>
            </Link>
            <p className="text-base text-[var(--muted)] font-medium max-w-sm">
              Nous transformons des idées visionnaires en présences digitales hautement performantes.
            </p>
          </div>

          <MagneticButton strength={20}>
            <button 
              onClick={scrollToTop}
              className="group flex items-center justify-center w-24 h-24 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] transition-all cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="text-[10px] font-mono font-medium text-[var(--faint)] uppercase tracking-widest mb-1">Haut</span>
                <ArrowUp className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="text-[10px] font-mono font-medium text-[var(--faint)] uppercase tracking-widest mb-1">Haut</span>
                <ArrowUp className="w-4 h-4 text-white" />
              </div>
            </button>
          </MagneticButton>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 hidden md:block" /> {/* Spacer */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-[11px] font-mono font-medium uppercase tracking-widest mb-6 text-[var(--faint)]">
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-[var(--muted)] font-medium hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-[var(--faint)] uppercase tracking-widest">
            © {new Date().getFullYear()} STUDIO M INC.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono text-[var(--faint)] uppercase tracking-widest">
            <span>Fait à Montréal</span>
            <span>·</span>
            <span>Tous Droits Réservés</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
