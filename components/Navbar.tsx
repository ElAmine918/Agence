"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#projects" },
  { label: "Pourquoi Nous", href: "#team" },
  { label: "Tarifs", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-6 transition-all duration-300 ${
          isScrolled ? "py-4" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-5xl rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-[var(--surface)]/80 backdrop-blur-xl border border-[var(--line)] shadow-lg shadow-black/20 px-4 sm:px-6 py-3"
              : "bg-transparent border-transparent px-2 sm:px-4 py-2"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 rounded-lg bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center relative overflow-hidden">
              <Hexagon className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="font-sans font-bold text-white text-base tracking-tight">Studio M</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-white transition-colors rounded-full hover:bg-[var(--surface2)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 z-50">
            <Link
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors group"
            >
              Contact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-[var(--surface2)] rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-sans font-medium tracking-tight">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--muted)] hover:text-white transition-colors border-b border-[var(--line)] pb-4"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white flex items-center justify-between border-b border-[var(--line)] pb-4 mt-4"
              >
                Contactez-nous
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
