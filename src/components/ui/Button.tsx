import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  className,
  variant = "primary",
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: false;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  const variants: Record<Variant, string> = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.35)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  href,
  external,
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: Variant;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  const variants: Record<Variant, string> = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.35)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  return (
    <Link
      className={cn(base, variants[variant], className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    />
  );
}

