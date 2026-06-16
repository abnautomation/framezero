import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-indigo)] active:scale-[0.97] select-none";

const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_8px_28px_rgba(255,77,125,0.4)] hover:shadow-[0_12px_38px_rgba(255,77,125,0.55)] hover:-translate-y-0.5 [background:var(--gradient-primary)] [background-size:160%_auto] hover:[background-position:right_center] [transition:background-position_0.5s_var(--ease-cine),transform_0.2s,box-shadow_0.3s]",
  secondary:
    "border border-[var(--color-coral)] text-[var(--color-coral)] bg-transparent hover:bg-[rgba(255,77,125,0.07)] hover:-translate-y-0.5",
  ghost:
    "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fba58] shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      icon,
      iconRight,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {icon}
            {children}
            {iconRight}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {icon}
          {children}
          {iconRight}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {icon}
        {children}
        {iconRight}
      </button>
    );
  }
);

Button.displayName = "Button";
