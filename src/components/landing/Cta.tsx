import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base";

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-border bg-card/70 text-foreground backdrop-blur hover:bg-secondary hover:-translate-y-0.5",
  ghostLight:
    "border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:-translate-y-0.5",
} as const;

export function Cta({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const isHash = href.startsWith("#") || href.includes("/#");

  if (isHash) {
    return (
      <a href={href} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href as any} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
