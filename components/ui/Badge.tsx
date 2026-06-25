import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "blue";
  className?: string;
}

const variants = {
  default: "bg-zinc-900 text-zinc-300 border border-zinc-800",
  accent: "bg-fuchsia-950/40 text-fuchsia-400 border border-fuchsia-800/40",
  blue: "bg-cyan-950/40 text-cyan-400 border border-cyan-800/40",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
