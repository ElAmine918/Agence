"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SECTIONS = [
  { id: "hero", label: "THE PLATFORM" },
  { id: "features", label: "FEATURES" },
  { id: "sticky-scroll", label: "HOW IT WORKS" },
  { id: "how-it-works", label: "THE ENGINE" },
  { id: "pricing", label: "PRICING" },
  { id: "testimonials", label: "TESTIMONIALS" },
  { id: "faq", label: "FAQ" },
  { id: "blog", label: "BLOG" },
  { id: "cta", label: "START BUILDING" },
];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const entries = new Map<string, IntersectionObserverEntry>();

    observerRef.current = new IntersectionObserver(
      (observerEntries) => {
        observerEntries.forEach((entry) => {
          entries.set(entry.target.id, entry);
        });

        // Find the section with the highest intersection ratio that is visible
        let maxRatio = 0;
        let maxId = activeSection;

        entries.forEach((entry, id) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxId = id;
          }
        });

        // Fallback: if no section intersects enough, pick the one closest to top
        if (maxRatio === 0) {
          let closestDist = Infinity;
          entries.forEach((entry, id) => {
            const dist = Math.abs(entry.boundingClientRect.top);
            if (dist < closestDist) {
              closestDist = dist;
              maxId = id;
            }
          });
        }

        if (maxId) setActiveSection(maxId);
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5],
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    // Observe each section
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [activeSection]);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  return (
    <nav
      className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-0"
      aria-label="Page sections"
    >
      {/* Animated accent bar */}
      <div className="absolute left-0 top-0 w-[3px] h-full">
        {/* Track line */}
        <div className="absolute inset-0 rounded-full bg-zinc-800/60" />
        {/* Active indicator */}
        <motion.div
          className="absolute left-0 w-[3px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          initial={false}
          animate={{
            top: `${activeIndex * (100 / SECTIONS.length)}%`,
            height: `${100 / SECTIONS.length}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <Link
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className={`pl-5 py-2 text-[11px] font-mono font-medium tracking-wider transition-all duration-300 ${
              isActive
                ? "text-white"
                : "text-zinc-600 hover:text-zinc-400"
            }`}
          >
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
}
