"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote: "Agence completely transformed how we handle customer onboarding. What used to take hours now takes seconds. The ROI was immediate.",
    author: "Sarah Jenkins",
    role: "VP of Operations",
    company: "TechFlow",
  },
  {
    quote: "The visual builder is incredible. Our marketing team builds complex automations without needing engineering resources.",
    author: "Michael Chen",
    role: "Growth Lead",
    company: "ScaleUp Inc",
  },
  {
    quote: "We've replaced 4 different tools with Agence. The AI agents are genuinely smart and adapt when our APIs change.",
    author: "Emily Rodriguez",
    role: "CTO",
    company: "Nova Data",
  },
  {
    quote: "Enterprise security was our biggest concern, but Agence passed our SOC 2 review with flying colors. A joy to use.",
    author: "David Kim",
    role: "Director of Engineering",
    company: "FinSecure",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative bg-[var(--background)] py-24 md:py-40 overflow-hidden">
      {/* Wave Dot Pattern Background */}
      <div className="absolute inset-0 wave-pattern opacity-[0.03] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={MessageSquare}
          label="Testimonials"
          titleNormal="Hear from the"
          titleItalic="Clients"
          description="Don't just take our word for it. See how companies are scaling their operations with our platform."
        />

        {/* Masonry-style staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          <div className="flex flex-col gap-6 md:mt-16">
            {testimonials.slice(0, 2).map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {testimonials.slice(2, 4).map((testimonial, i) => (
              <TestimonialCard key={i + 2} testimonial={testimonial} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 sm:p-10 rounded-[32px] bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between backdrop-blur-sm relative"
    >
      <div className="mb-8">
        <div className="text-white mb-6">
          {/* Quote mark SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11L8.5 14H11V18H5V14L7.5 9H10V11ZM19 11L17.5 14H20V18H14V14L16.5 9H19V11Z" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        </div>
        <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed font-medium">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-[var(--divider)]">
        <div>
          <h4 className="text-white font-medium mb-1">{testimonial.author}</h4>
          <p className="text-sm font-mono text-[var(--faint)]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
