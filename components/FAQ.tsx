"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce qu'un Réceptionniste IA ?",
    a: "C'est un agent vocal virtuel doté d'intelligence artificielle qui répond au téléphone de votre commerce 24h/24 et 7j/7. Il comprend le langage naturel, peut prendre des réservations, répondre aux questions fréquentes (horaires, menu, stationnement) et converser comme un humain.",
  },
  {
    q: "Combien de temps faut-il pour créer le site ?",
    a: "En général, entre 2 à 4 semaines. Nous fonctionnons par itérations rapides. Une fois le design approuvé, le développement est très rapide grâce à nos processus internes optimisés.",
  },
  {
    q: "Dois-je m'engager sur un retainer SEO mensuel ?",
    a: "Ce n'est pas obligatoire, mais fortement recommandé. Le SEO local (être premier sur Google Maps et dans les recherches locales) prend du temps et demande une maintenance continue. Le retainer garantit que votre site reste performant et que votre trafic augmente mois après mois.",
  },
  {
    q: "L'IA peut-elle s'intégrer à mon système de réservation actuel ?",
    a: "Oui. Nos agents vocaux peuvent se connecter via API à la plupart des systèmes modernes (OpenTable, Libro, Calendly, etc.) pour vérifier les disponibilités et insérer les réservations en temps réel.",
  },
  {
    q: "Hébergement et nom de domaine, comment ça marche ?",
    a: "Nous nous occupons de tout. Nous hébergeons le site sur des serveurs ultra-rapides (Vercel) pour garantir une vitesse de chargement instantanée, ce qui est crucial pour le SEO et l'expérience mobile de vos clients.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={HelpCircle}
          label="FAQ"
          titleNormal="Questions"
          titleItalic="Fréquentes"
          description="Tout ce que vous devez savoir sur nos sites web et nos réceptionnistes IA avant de vous lancer."
        />

        <div className="max-w-4xl mx-auto mt-16 flex flex-col border border-[var(--line)] rounded-[32px] bg-[var(--surface)] divide-y divide-[var(--line)] overflow-hidden">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="transition-colors hover:bg-[var(--surface2)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[12px] font-mono text-[var(--faint)] mt-1">
                    /0{i + 1}
                  </span>
                  <span className="text-lg sm:text-xl font-medium text-white pr-4 tracking-tight">
                    {faq.q}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--ink)] flex items-center justify-center text-white group-hover:bg-[#333333] transition-all shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pl-[68px] text-base text-[var(--muted)] leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
