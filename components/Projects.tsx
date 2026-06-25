"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    titleNormal: "Maison",
    titleItalic: "St-Paul",
    client: "Restaurant Gastronomique",
    year: "2026",
    awards: ["Montréal"],
    tags: ["Web Design", "Agent IA Vocal"],
    imageGradient: "from-[var(--ink)] to-black",
  },
  {
    titleNormal: "Café",
    titleItalic: "Mont-Royal",
    client: "Brûlerie Locale",
    year: "2025",
    awards: ["Le Plateau"],
    tags: ["E-Commerce", "SEO Local"],
    imageGradient: "from-[#1b1b1b] to-black",
  },
  {
    titleNormal: "Clinique",
    titleItalic: "Esthétique",
    client: "MedSpa",
    year: "2025",
    awards: ["Laval"],
    tags: ["Système de Réservation", "SEO"],
    imageGradient: "from-[#0c0c0c] to-black",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="relative bg-[var(--background)] py-24 md:py-40">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          icon={FolderGit2}
          label="Nos Réalisations"
          titleNormal="Projets"
          titleItalic="Récents"
          description="Une sélection de commerces locaux que nous avons aidés à dominer leur marché grâce au digital et à l'IA."
        />

        <div className="flex flex-col gap-12 sm:gap-24 mt-16 sm:mt-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col group cursor-pointer"
            >
              {/* Massive Image Container */}
              <div
                className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-[32px] sm:rounded-[48px] overflow-hidden relative mb-8 sm:mb-12 border border-[var(--line)]"
                style={{
                  // Organic torn paper / rugged edge mask effect using CSS mask
                  maskImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' rx='48' ry='48' fill='black'/%3E%3C/svg%3E\")",
                  WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' rx='48' ry='48' fill='black'/%3E%3C/svg%3E\")",
                  maskSize: "100% 100%",
                  WebkitMaskSize: "100% 100%",
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient}`} />
                <div className="absolute inset-0 wave-pattern opacity-10" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* View Project button on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-out z-20">
                  <span className="text-white font-medium text-sm">Voir l'étude</span>
                </div>
              </div>

              {/* Project Meta Info */}
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 px-4 sm:px-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-xs text-[var(--muted)] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-sans text-white tracking-tighter-md">
                    {project.titleNormal} <span className="font-serif italic font-light text-[var(--muted)]">{project.titleItalic}</span>
                  </h3>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2 text-sm font-mono text-[var(--faint)] uppercase tracking-widest mt-4 md:mt-0">
                  <span className="text-white">{project.client} // {project.year}</span>
                  <div className="flex flex-col items-start md:items-end">
                    {project.awards.map(award => (
                      <span key={award}>{award}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 sm:mt-32 flex justify-center">
          <Button size="lg" className="rounded-full px-10 py-5 text-lg">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
