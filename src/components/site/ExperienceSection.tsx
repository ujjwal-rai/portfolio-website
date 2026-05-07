"use client";

import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import Image from "next/image";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Career"
            title="Experience"
            description="Impact-focused work across product engineering, performance, and reliability."
          />
        </Reveal>

        <div className="grid gap-4">
          {profile.experience.map((e, idx) => (
            <Reveal key={`${e.company}-${e.role}-${idx}`} delay={idx * 0.05}>
              <article className="group rounded-3xl bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-md transition hover:bg-white/7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {"logo" in e && e.logo ? (
                      <div className="grid h-12 w-[140px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-white/12 to-white/6 px-3 shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_18px_60px_rgba(0,0,0,0.35)]">
                        <Image
                          src={e.logo}
                          alt={`${e.company} logo`}
                          width={220}
                          height={60}
                          className="h-9 w-full object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)]"
                          unoptimized
                        />
                      </div>
                    ) : null}

                    <div>
                      <div className="text-lg font-semibold text-white">
                        {e.role}
                      </div>
                      <div className="mt-1 text-sm text-white/70">
                        {e.company} • {e.start} — {e.end}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {e.stack.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-white/75">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

