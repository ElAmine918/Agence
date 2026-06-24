"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, Plus, X, Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const NAV_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Blog", href: "#blog" },
      { label: "Updates", href: "#" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setInHero(window.scrollY < window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // In hero = always dark glass. Outside hero = adapt to theme via CSS vars.
  const navStyle = inHero
    ? "bg-white/[0.07] border-white/[0.12] text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    : "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--heading)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
      className={clsx(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(480px,90vw)] overflow-hidden rounded-[28px] border backdrop-blur-xl transition-all duration-500",
        navStyle
      )}
    >
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 240 : 56 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        className="w-full overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 h-[56px] shrink-0">
          <Link
            href="/"
            className={clsx(
              "flex items-center justify-center rounded-full w-8 h-8 transition-colors",
              inHero
                ? "bg-white/20 hover:bg-white/30"
                : "bg-[var(--primary-blue)]/10 hover:bg-[var(--primary-blue)]/20"
            )}
          >
            <Hexagon
              className={clsx(
                "w-[18px] h-[18px]",
                inHero
                  ? "text-white fill-white"
                  : "text-[var(--primary-blue)] fill-[var(--primary-blue)]"
              )}
            />
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            {["Features", "Pricing", "FAQ", "Blog"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={clsx(
                  "text-[13px] font-medium transition-colors",
                  inHero
                    ? "text-white/60 hover:text-white"
                    : "text-[var(--muted)] hover:text-[var(--heading)]"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "flex items-center justify-center w-8 h-8 rounded-full transition-colors cursor-pointer",
              inHero
                ? "bg-white/10 hover:bg-white/20"
                : "bg-[var(--surface)] hover:bg-[var(--divider)]"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4 hidden sm:block" />
            )}
            {!isOpen && <Menu className="w-4 h-4 sm:hidden" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-6 pb-4 pt-2"
            >
              <div className="h-px w-full mb-4 bg-[var(--divider)]" />
              <div className="hidden sm:grid grid-cols-3 gap-6">
                {NAV_LINKS.map((group) => (
                  <div key={group.heading} className="flex flex-col gap-2.5">
                    <h3 className="text-[13px] font-semibold tracking-tight">
                      {group.heading}
                    </h3>
                    {group.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                          "text-[13px] transition-colors",
                          inHero
                            ? "text-white/50 hover:text-white"
                            : "text-[var(--muted)] hover:text-[var(--heading)]"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="sm:hidden flex flex-col gap-3">
                {NAV_LINKS.flatMap((g) => g.links).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "text-sm font-medium py-1 transition-colors",
                      inHero
                        ? "text-white/70 hover:text-white"
                        : "text-[var(--muted)] hover:text-[var(--heading)]"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
