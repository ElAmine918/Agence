"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, X, Menu } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Bar */}
      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md py-4"
            : "border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-[1200px] w-full px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center relative overflow-hidden group-hover:border-zinc-500 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Hexagon className="w-[18px] h-[18px] text-white fill-white/10 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Agence
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-cyan-400 transition-colors">v1.0</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors relative py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#pricing"
              className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 text-xs rounded-lg font-medium bg-white text-black hover:bg-zinc-200 transition-all active:scale-[0.98]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {/* Remix Rainbow Underline */}
      <div className="rainbow-line h-[1.5px] w-full opacity-80" />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-lg overflow-hidden md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium py-2 border-b border-zinc-900 text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg border border-zinc-800 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
