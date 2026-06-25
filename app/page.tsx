import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BottomBlur from "@/components/BottomBlur";

// Lazy-load below-fold sections to reduce initial bundle size
const Features = dynamic(() => import("@/components/Features"));
const Team = dynamic(() => import("@/components/Team"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Team />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <BottomBlur />
      <Footer />
    </>
  );
}
