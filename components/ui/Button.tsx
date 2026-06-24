import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary-blue)] text-white hover:bg-[#003dd4] shadow-[0_4px_24px_rgba(0,80,248,0.3)]",
  secondary:
    "bg-transparent text-[var(--heading)] border border-[var(--card-border)] hover:border-[var(--primary-blue)]/40 hover:bg-[var(--primary-blue)]/5",
  ghost:
    "bg-transparent text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--surface)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97] cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer">
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
