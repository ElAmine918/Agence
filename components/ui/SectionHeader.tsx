import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface SectionHeaderProps {
  icon: LucideIcon;
  label: string;
  titleNormal: string;
  titleItalic?: string;
  titleEnd?: string;
  description: string;
}

export default function SectionHeader({
  icon: Icon,
  label,
  titleNormal,
  titleItalic,
  titleEnd,
  description,
}: SectionHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center mb-16 sm:mb-24 px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Badge variant="default" className="flex items-center gap-2 px-3 py-1.5 border border-[var(--line)] rounded-full bg-[var(--surface)]">
          <Icon className="w-3.5 h-3.5 text-[var(--muted)]" />
          <span className="text-[11px] font-medium tracking-wider text-[var(--muted)] uppercase">{label}</span>
        </Badge>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8 md:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-[64px] font-sans font-normal tracking-tighter-md leading-[1.1] text-white flex-1"
        >
          {titleNormal}{" "}
          {titleItalic && (
            <span className="font-serif italic text-[var(--muted)] tracking-tight font-light">
              {titleItalic}
            </span>
          )}{" "}
          {titleEnd && <span className="gradient-text-agency">{titleEnd}</span>}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-[20px] text-[var(--muted)] leading-relaxed max-w-md text-left md:text-right font-medium"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
