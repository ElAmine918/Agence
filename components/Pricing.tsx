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
    color: "border-zinc-800 hover:border-zinc-700 bg-zinc-950/40",
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
    color: "border-cyan-500/80 bg-zinc-950 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative",
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
    color: "border-zinc-800 hover:border-zinc-700 bg-zinc-950/40",
  },
];

export default function Pricing() {
  const [credits, setCredits] = useState(50);

  return (
    <SectionWrapper id="pricing" className="relative overflow-hidden border-t border-zinc-800 bg-[#050507]">
      {/* Background Grids */}
      <div className="absolute inset-0 remix-grid opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest"
          >
            pricing models
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mt-3 mb-5 text-white"
          >
            Flexible Pricing That <br />
            <span className="gradient-text-remix font-black">Scales With Your Needs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto"
          >
            Choose a plan that fits your workflow and adjust credits as you grow — no hidden limits, cancel anytime.
          </motion.p>
        </div>

        {/* Dynamic Credit Slider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center mb-16 border border-zinc-800 bg-zinc-950/60 rounded-xl max-w-md mx-auto p-6 relative plus-corner"
        >
          <label className="text-xs font-mono text-zinc-400 mb-3 flex items-center justify-between w-full">
            <span>VOLUME CALCULATOR</span>
            <span className="text-cyan-400 font-bold">
              {credits.toLocaleString()}K TASK RUNS / MO
            </span>
          </label>
          <input
            type="range"
            min={10}
            max={200}
            step={10}
            value={credits}
            onChange={(e) => setCredits(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between w-full text-[9px] font-mono text-zinc-600 mt-2">
            <span>10K RUNS</span>
            <span>100K RUNS</span>
            <span>200K RUNS</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl p-8 border flex flex-col transition-all duration-350 ${plan.color}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-6 px-3 py-0.5 rounded border border-cyan-800 bg-cyan-950 text-[10px] font-mono font-bold text-cyan-400 z-10 tracking-widest">
                  RECOMMENDED TIER
                </span>
              )}

              {/* Technical Header */}
              <div className="flex justify-between items-start text-xs font-mono text-zinc-500 mb-4">
                <span>TIER // 0{i + 1}</span>
                <span>{plan.name.toUpperCase()}</span>
              </div>

              <h3 className="text-xl font-bold mb-1 text-white">{plan.name}</h3>
              <p className="text-xs text-zinc-400 mb-6">{plan.description}</p>

              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                <span className="text-xs text-zinc-500 font-mono ml-2">/ month</span>
              </div>

              {/* Divider Line */}
              <div className="h-px bg-zinc-800/80 mb-6" />

              {/* Features List */}
              <ul className="flex-1 flex flex-col gap-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs leading-relaxed">
                    <Check
                      className={`w-4 h-4 shrink-0 ${
                        plan.highlighted ? "text-cyan-400" : "text-zinc-500"
                      }`}
                    />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? "primary" : "secondary"}
                className={`w-full ${
                  plan.highlighted
                    ? "bg-cyan-500 hover:bg-cyan-400 text-black border-cyan-500 font-semibold"
                    : ""
                }`}
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
