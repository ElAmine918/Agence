"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Check, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for testing the waters and small projects.",
    features: [
      "100 tasks / month",
      "2 AI Agents",
      "Standard integrations",
      "Community support",
    ],
    cta: "Start for free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For professionals who need more power and custom agents.",
    features: [
      "5,000 tasks / month",
      "Unlimited AI Agents",
      "Premium integrations",
      "Priority email support",
      "Custom triggers",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure for large-scale automation.",
    features: [
      "Unlimited tasks",
      "Dedicated infrastructure",
      "Custom AI models",
      "24/7 Phone support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="relative bg-[var(--background)] py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={CreditCard}
          label="Pricing"
          titleNormal="Choose Your"
          titleItalic="Plans"
          description="Transparent pricing that scales with your workflows. No hidden fees."
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
                    Popular
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
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-[var(--faint)] font-mono text-sm">/ Month</span>
                  )}
                </div>
                <p className="text-[var(--muted)] text-sm font-medium">
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[var(--muted)] text-sm font-medium">
                    <Check className="w-4 h-4 text-white" />
                    {feature}
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
