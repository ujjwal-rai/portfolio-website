import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("py-16 sm:py-24 scroll-mt-24", className)}
      {...props}
    />
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      {eyebrow ? (
        <div className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-white/60">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}

