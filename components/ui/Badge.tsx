import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "blue";
  className?: string;
}

const variants = {
  default: "bg-[var(--surface)] text-[var(--heading)]",
  accent: "bg-[var(--accent-green)] text-black",
  blue: "bg-[var(--primary-blue)]/10 text-[var(--primary-blue)]",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
