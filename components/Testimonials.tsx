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
    borderGlow: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    quote:
      "The AI agents are incredibly smart. They handle edge cases our old system couldn't dream of.",
    name: "Marcus Rivera",
    role: "VP Engineering, CloudScale",
    avatar: "MR",
    borderGlow: "bg-gradient-to-r from-fuchsia-500 to-pink-500",
  },
  {
    quote:
      "Best automation tool we've used. The visual builder makes it easy for our non-technical team to contribute.",
    name: "Elena Kowalski",
    role: "Product Lead, Nextera",
    avatar: "EK",
    borderGlow: "bg-gradient-to-r from-yellow-500 to-amber-500",
  },
  {
    quote:
      "We automated our entire onboarding pipeline. New hires are set up in minutes, not days.",
    name: "James Park",
    role: "Head of Ops, Liftoff",
    avatar: "JP",
    borderGlow: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  {
    quote:
      "The analytics dashboard alone is worth the price. We've optimized workflows we didn't even know were inefficient.",
    name: "Aisha Mohammed",
    role: "Director of Data, Prism",
    avatar: "AM",
    borderGlow: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
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
  // Combine list for infinite loop marquee
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <SectionWrapper id="testimonials" className="relative overflow-hidden border-t border-zinc-800 bg-[#08080a]">
      {/* Background Grid */}
      <div className="absolute inset-0 remix-grid opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest"
        >
          case studies
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mt-3 mb-5 text-white"
        >
          Loved by Teams Everywhere
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto"
        >
          See how teams use Agence to scale operations and eliminate manual workflow bottlenecks.
        </motion.p>
      </div>

      {/* Infinite Horizontal Testimonial Marquee */}
      <div className="relative w-full overflow-hidden marquee-container mb-20 py-4 select-none">
        {/* Soft edge masking for fading out overflow testimonials */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

        <div className="marquee-content flex gap-6">
          {marqueeItems.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] rounded-xl border border-zinc-800 bg-zinc-950/40 p-7 hover:bg-zinc-950 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Card top border glow line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${t.borderGlow} opacity-60`} />

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.name}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logos section */}
      <div className="max-w-4xl mx-auto border-t border-zinc-900 pt-10">
        <div className="flex items-center justify-center gap-x-12 gap-y-6 flex-wrap">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-xs font-mono font-semibold text-zinc-600 hover:text-zinc-300 transition-colors uppercase tracking-widest cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
