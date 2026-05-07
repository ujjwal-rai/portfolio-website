"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header({
  brand = "Portfolio",
  className,
}: {
  brand?: string;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="#top"
          className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-white/90 hover:text-white"
        >
          <span className="relative">
            {brand}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/70 transition-all group-hover:w-full" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative rounded-full px-3 py-2 text-sm font-semibold text-white/70 transition hover:text-white"
    >
      <motion.span
        className="absolute inset-0 -z-10 rounded-full bg-white/10"
        initial={{ opacity: 0, scale: 0.98 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
      {label}
    </Link>
  );
}

