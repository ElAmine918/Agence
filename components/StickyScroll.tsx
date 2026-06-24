"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    title: "Connect your tools",
    description:
      "Link the apps you already use — CRMs, databases, messaging platforms, cloud storage — in seconds.",
  },
  {
    title: "Design your logic",
    description:
      "Use our visual builder to set conditions, triggers, and actions that define how your workflow operates.",
  },
  {
    title: "Let AI handle the rest",
    description:
      "Once deployed, our AI engine runs your workflows 24/7, adapts to changes, and surfaces insights.",
  },
];

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[var(--background)]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-10">
          {slides.map((slide, i) => {
            const start = i / slides.length;
            const end = (i + 1) / slides.length;
            const mid = (start + end) / 2;

            return (
              <StickySlide
                key={i}
                slide={slide}
                index={i}
                scrollYProgress={scrollYProgress}
                start={start}
                mid={mid}
                end={end}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StickySlide({
  slide,
  index,
  scrollYProgress,
  start,
  mid,
  end,
}: {
  slide: { title: string; description: string };
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  mid: number;
  end: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, mid, end - 0.05, end],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [start, start + 0.05, mid], [40, 0, 0]);
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0.96, 1, 1, 0.96]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
    >
      <span className="text-sm font-semibold text-[var(--primary-blue)] mb-4 tracking-wide uppercase">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2 className="text-3xl sm:text-5xl md:text-[56px] font-bold text-[var(--heading)] tracking-[-0.03em] leading-[1.1] mb-6 max-w-2xl">
        {slide.title}
      </h2>
      <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-lg">
        {slide.description}
      </p>
    </motion.div>
  );
}
