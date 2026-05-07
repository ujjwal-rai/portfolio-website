"use client";

import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import Image from "next/image";
import {
  Camera,
  GitBranch,
  Link,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

const socials = [
  { key: "linkedin", label: "LinkedIn", icon: Link, logo: "/logos/linkedin.webp" },
  {
    key: "instagram",
    label: "Instagram",
    icon: Camera,
    logo: "/logos/Instagram.webp",
  },
  { key: "twitter", label: "Twitter / X", icon: MessageCircle, logo: "/logos/x.png" },
  {
    key: "facebook",
    label: "Facebook",
    icon: MessageCircle,
    logo: "/logos/Facebook.webp",
  },
  {
    key: "telegram",
    label: "Telegram",
    icon: Send,
    logo: "/logos/Telegram.webp",
  },
  { key: "discord", label: "Discord", icon: MessageCircle, logo: "/logos/discord.png" },
  { key: "github", label: "GitHub", icon: GitBranch, logo: "/logos/github.svg" },
  { key: "arratai", label: "Arattai", icon: MessageCircle, logo: "/logos/Arattai.png" },
  { key: "email", label: "Email", icon: Mail, logo: "/logos/email.png" },
] as const;

export function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Let’s build"
            title="Contact"
            description="Pick any platform—everything opens in one click."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-3xl bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-md">
              <div className="text-sm font-semibold text-white/60">
                Email
              </div>
              <div className="mt-2 text-xl font-semibold text-white">
                {profile.email}
              </div>
              <a
                className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                href={`mailto:${profile.email}`}
              >
                Send an email
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-3xl bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-md">
              <div className="text-sm font-semibold text-white/60">
                Socials
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {socials.map((s) => {
                  const href =
                    profile.socials[s.key as keyof typeof profile.socials];
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.key}
                      href={href}
                      target={s.key === "email" ? undefined : "_blank"}
                      rel={
                        s.key === "email" ? undefined : "noopener noreferrer"
                      }
                      className="inline-flex items-center gap-2 rounded-2xl bg-white/8 px-3 py-3 text-sm font-semibold text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/12 hover:text-white"
                    >
                      {s.logo ? (
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                          <Image
                            src={s.logo}
                            alt=""
                            width={18}
                            height={18}
                            className="h-4 w-4 object-contain"
                            unoptimized
                          />
                        </span>
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                      <span className="truncate">{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

