"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Check, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Lancement",
    price: "1 200$",
    description: "Le plancher pour une présence sérieuse. Un site web professionnel qui inspire confiance.",
    features: [
      "Design responsive et moderne",
      "Optimisation de vitesse (Lenis, Next.js)",
      "Formulaire de contact intégré",
      "Fondations SEO technique",
    ],
    cta: "Démarrer",
    popular: false,
  },
  {
    name: "Présence",
    price: "2 800$",
    description: "Le sweet spot pour un commerce qui veut vraiment s'imposer et dominer son marché.",
    features: [
      "Direction artistique sur mesure",
      "Stratégie de conversion (Copywriting)",
      "Intégration d'outils (Réservations, etc)",
      "Formation de prise en main",
      "Support prioritaire (1 mois)",
    ],
    cta: "Créer l'Impact",
    popular: true,
  },
  {
    name: "Croissance (SEO)",
    price: "400$",
    description: "Retainer mensuel crucial : le SEO local prend 3 à 6 mois pour montrer des résultats mesurables.",
    features: [
      "Optimisation SEO local en continu",
      "Mises à jour de sécurité et maintenance",
      "Rapport de performance mensuel",
      "Ajustements de contenu stratégiques",
    ],
    cta: "Assurer la Croissance",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="relative bg-[var(--background)] py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={CreditCard}
          label="Nos Tarifs"
          titleNormal="Des prix alignés sur"
          titleItalic="la Valeur"
          description="Des investissements clairs pour des résultats mesurables. Nous construisons des présences web sérieuses."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto mt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col p-8 sm:p-10 rounded-[32px] border ${
                plan.popular
                  ? "bg-[#1b1b1b] border-[#333333] shadow-2xl shadow-black/50 md:-mt-8 md:mb-8"
                  : "bg-[#0c0c0c] border-[var(--line)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[var(--line)]">
                    Recommandé
                  </div>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[10px] font-mono text-[var(--faint)]">
                    /0{i + 1}
                  </div>
                  <h3 className="text-xl font-medium text-white">{plan.name}</h3>
                </div>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl lg:text-6xl font-sans font-medium tracking-tighter-md text-white">
                    {plan.price}
                  </span>
                  {plan.name.includes("Croissance") && (
                    <span className="text-[var(--faint)] font-mono text-sm">/ Mois</span>
                  )}
                </div>
                <p className="text-[var(--muted)] text-sm font-medium">
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[var(--muted)] text-sm font-medium">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
