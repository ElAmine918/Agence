"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    quote:
      "This platform cut our manual processing time by 80%. We were up and running in under an hour.",
    name: "Sarah Chen",
    role: "CTO, DataFlow",
    avatar: "SC",
  },
  {
    quote:
      "The AI agents are incredibly smart. They handle edge cases our old system couldn't dream of.",
    name: "Marcus Rivera",
    role: "VP Engineering, CloudScale",
    avatar: "MR",
  },
  {
    quote:
      "Best automation tool we've used. The visual builder makes it easy for our non-technical team to contribute.",
    name: "Elena Kowalski",
    role: "Product Lead, Nextera",
    avatar: "EK",
  },
  {
    quote:
      "We automated our entire onboarding pipeline. New hires are set up in minutes, not days.",
    name: "James Park",
    role: "Head of Ops, Liftoff",
    avatar: "JP",
  },
  {
    quote:
      "The analytics dashboard alone is worth the price. We've optimized workflows we didn't even know were inefficient.",
    name: "Aisha Mohammed",
    role: "Director of Data, Prism",
    avatar: "AM",
  },
];

const logos = [
  "Vercel",
  "Stripe",
  "Linear",
  "Notion",
  "Figma",
  "Supabase",
  "Prisma",
  "Railway",
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="overflow-hidden">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.02em] leading-[1.12] mb-5 text-[var(--heading)]"
        >
          Loved by Teams Everywhere
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto"
        >
          See what teams are saying about transforming their workflows.
        </motion.p>
      </div>

      <div className="relative mb-16">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex-shrink-0 w-[340px] snap-center rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 glow-border transition-all duration-300 relative overflow-hidden"
            >
              {/* Top gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary-blue)] to-transparent opacity-40" />
              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-blue)]/10 flex items-center justify-center text-sm font-bold text-[var(--primary-blue)]">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--heading)]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[var(--subtle)]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 flex-wrap opacity-40">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-sm font-semibold text-[var(--muted)] tracking-wide"
          >
            {logo}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
