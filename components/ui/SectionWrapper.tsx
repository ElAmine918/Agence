import clsx from "clsx";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  dark = false,
  id,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full",
        dark
          ? "bg-[var(--deep-navy)] text-white"
          : "bg-[var(--background)] text-[var(--foreground)]",
        !noPadding && "section-padding",
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] w-full">{children}</div>
    </section>
  );
}
