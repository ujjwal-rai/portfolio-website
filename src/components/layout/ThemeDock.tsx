"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SunMoon } from "lucide-react";

type ThemeChoice = "light" | "dark" | "system";

export function ThemeDock({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const active = (theme ?? "system") as ThemeChoice;
  const resolved = (systemTheme ?? "dark") as "light" | "dark";
  const isLight =
    active === "light" || (active === "system" && resolved === "light");

  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    function onDown(e: MouseEvent) {
      const el = rootRef.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      setOpen(false);
    }
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={rootRef}
      className={cn(
        "fixed bottom-5 left-5 z-50",
        "select-none",
        className,
      )}
      role="group"
      aria-label="Theme"
      title={`Theme: ${active}${active === "system" ? ` (${resolved})` : ""}`}
    >
      <div className="relative">
        {open ? (
          <div
            className={cn(
              "absolute bottom-14 left-0",
              "w-max rounded-3xl p-1 backdrop-blur-xl",
              isLight ? "bg-black/10" : "bg-white/10",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_18px_60px_rgba(0,0,0,0.45)]",
            )}
          >
            <div className="flex items-center gap-1">
              <ThemeChip
                label="System"
                pressed={active === "system"}
                onClick={() => {
                  setTheme("system");
                  setOpen(false);
                }}
                isLight={isLight}
              />
              <ThemeChip
                label="Dark"
                pressed={active === "dark"}
                onClick={() => {
                  setTheme("dark");
                  setOpen(false);
                }}
                isLight={isLight}
              />
              <ThemeChip
                label="Light"
                pressed={active === "light"}
                onClick={() => {
                  setTheme("light");
                  setOpen(false);
                }}
                isLight={isLight}
              />
            </div>
          </div>
        ) : null}

        <button
          type="button"
          aria-label="Theme"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid h-12 w-12 place-items-center rounded-full backdrop-blur-xl transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
            isLight ? "bg-black/10" : "bg-white/10",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_18px_60px_rgba(0,0,0,0.45)]",
          )}
        >
          <SunMoon className={cn("h-5 w-5", isLight ? "text-black" : "text-white")} />
        </button>
      </div>
    </div>
  );
}

function ThemeChip({
  label,
  pressed,
  onClick,
  isLight,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
  isLight: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-2 text-xs font-semibold transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
        pressed
          ? isLight
            ? "bg-black text-white shadow-[0_14px_40px_rgba(0,0,0,0.25)]"
            : "bg-white text-black shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
          : isLight
            ? "text-black/80 hover:bg-black/10 hover:text-black"
            : "text-white/80 hover:bg-white/10 hover:text-white",
      )}
    >
      {label}
    </button>
  );
}

