"use client";

import * as React from "react";

export function AnimatedBackdrop() {
  React.useEffect(() => {
    let raf = 0;
    let x = 0;
    let y = 0;

    const commit = () => {
      raf = 0;
      const root = document.documentElement;
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = window.requestAnimationFrame(commit);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-50 bg-[#05060a]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 opacity-95"
        style={{
          background:
            "radial-gradient(750px circle at 15% 10%, rgba(124,58,237,0.42), transparent 60%), radial-gradient(980px circle at 85% 25%, rgba(59,130,246,0.34), transparent 62%), radial-gradient(820px circle at 55% 92%, rgba(16,185,129,0.22), transparent 62%), radial-gradient(700px circle at 72% 70%, rgba(236,72,153,0.16), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-30 opacity-[0.95]"
        style={{
          background:
            "radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 30%), rgba(255,255,255,0.08), transparent 60%)",
        }}
      />
      <div aria-hidden className="noise pointer-events-none fixed inset-0 -z-20" />
    </>
  );
}

