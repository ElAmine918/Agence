import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "popular";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
}

const variants = {
  // Primary is the massive white pill
  primary:
    "bg-[#ffffff] text-[#000000] hover:bg-[#cecece] border border-transparent shadow-lg shadow-white/5",
  // Secondary is the dark surface pill
  secondary:
    "bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface2)] border border-[var(--line)]",
  // Ghost is just text
  ghost:
    "bg-transparent text-[var(--muted)] hover:text-[var(--foreground)]",
  // Popular is the same as primary for now
  popular:
    "bg-[#ffffff] text-[#000000] hover:bg-[#cecece] border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base md:text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap";

  const classes = clsx(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
