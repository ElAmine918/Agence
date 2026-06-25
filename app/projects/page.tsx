import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomBlur from "@/components/BottomBlur";
import { FolderGit2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-32 pb-24 px-6 md:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-[var(--line)] bg-[var(--surface)] flex items-center justify-center mb-8">
              <FolderGit2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-sans text-white tracking-tighter-md mb-6">
              Nos <span className="font-serif italic font-light text-[var(--muted)]">Réalisations</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl font-medium">
              Une sélection exhaustive de nos travaux. Nous construisons des présences digitales qui génèrent des résultats mesurables pour les commerces locaux.
            </p>
          </div>

          {/* Dummy Grid for projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-[var(--surface)] border border-[var(--line)] relative mb-6">
                   <div className="absolute inset-0 wave-pattern opacity-10" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-out z-20">
                     <span className="text-white font-medium text-xs">Ouvrir</span>
                   </div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-sans text-white tracking-tight mb-2">Projet {item}</h3>
                  <p className="text-sm font-mono text-[var(--faint)] uppercase tracking-widest">Montréal // 2026</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <BottomBlur />
      <Footer />
    </>
  );
}
