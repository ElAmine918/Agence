"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 29,
    description: "For individuals getting started with automation",
    features: [
      "Up to 5 workflows",
      "1,000 task runs / month",
      "Basic integrations",
      "Email support",
      "Community access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 79,
    description: "For teams that need powerful automation at scale",
    features: [
      "Unlimited workflows",
      "25,000 task runs / month",
      "Advanced integrations",
      "Priority support",
      "AI-powered suggestions",
      "Custom webhooks",
      "Team collaboration",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Business",
    price: 199,
    description: "For organizations with enterprise-grade needs",
    features: [
      "Everything in Pro",
      "Unlimited task runs",
      "Custom integrations",
      "Dedicated account manager",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const [credits, setCredits] = useState(50);

  return (
    <SectionWrapper id="pricing">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.02em] leading-[1.12] mb-5 text-[var(--heading)]"
        >
          Flexible Pricing That{" "}
          <span className="gradient-text">Scales With Your Needs</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto"
        >
          Choose a plan that fits your workflow and adjust credits as you grow —
          no limits, no surprises.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-col items-center mb-14"
      >
        <label className="text-sm font-medium text-[var(--muted)] mb-3">
          Monthly credits:{" "}
          <span className="text-[var(--primary-blue)] font-bold">
            {credits.toLocaleString()}k
          </span>
        </label>
        <input
          type="range"
          min={10}
          max={200}
          step={10}
          value={credits}
          onChange={(e) => setCredits(Number(e.target.value))}
          className="w-full max-w-xs h-1.5 rounded-full appearance-none cursor-pointer bg-[var(--surface)] accent-[var(--primary-blue)]"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 flex flex-col ${
              plan.highlighted
                ? "bg-[var(--deep-navy)] text-white border-2 border-transparent shimmer-border shadow-[0_8px_40px_rgba(0,80,248,0.15)] scale-[1.02]"
                : "bg-[var(--card-bg)] border border-[var(--card-border)] glow-border"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--primary-blue)] text-white text-xs font-semibold z-10">
                Most Popular
              </span>
            )}
            <h3
              className={`text-xl font-bold mb-1 ${
                plan.highlighted ? "text-white" : "text-[var(--heading)]"
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`text-sm mb-6 ${
                plan.highlighted ? "text-white/60" : "text-[var(--muted)]"
              }`}
            >
              {plan.description}
            </p>

            <div className="mb-6">
              <span
                className={`text-4xl font-bold ${
                  plan.highlighted ? "text-white" : "text-[var(--heading)]"
                }`}
              >
                ${plan.price}
              </span>
              <span
                className={`text-sm ${
                  plan.highlighted ? "text-white/50" : "text-[var(--subtle)]"
                }`}
              >
                /month
              </span>
            </div>

            <ul className="flex-1 flex flex-col gap-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      plan.highlighted
                        ? "text-[var(--light-blue)]"
                        : "text-[var(--primary-blue)]"
                    }`}
                  />
                  <span
                    className={
                      plan.highlighted
                        ? "text-white/80"
                        : "text-[var(--muted)]"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? "primary" : "secondary"}
              className={`w-full ${
                plan.highlighted
                  ? "bg-white text-[var(--deep-navy)] hover:bg-white/90 shadow-none"
                  : ""
              }`}
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
