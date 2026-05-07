"use client";

import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
            Open to exciting work and collaborations
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            {profile.name}
            <span className="block pb-1 bg-gradient-to-r from-violet-300 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
              {profile.headline}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            {profile.about}
          </p>
        </Reveal>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}

