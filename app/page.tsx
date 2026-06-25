import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SidebarNav from "@/components/SidebarNav";

// Lazy-load below-fold sections to reduce initial bundle size
const Features = dynamic(() => import("@/components/Features"));
const Trust = dynamic(() => import("@/components/Trust"));
const StickyScroll = dynamic(() => import("@/components/StickyScroll"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Blog = dynamic(() => import("@/components/Blog"));
const CTABand = dynamic(() => import("@/components/CTABand"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarNav />
      <main>
        <Hero />
        <Features />
        <Trust />
        <StickyScroll />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
