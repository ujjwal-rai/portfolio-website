"use client";

import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

const LOGO_V = "2026-05-06-2";

// ─── Data types ───────────────────────────────────────────────────────────────

type CgpaSubject = {
  code: string;
  name: string;
  credit: number;
  grade: string;
};

type MarksheetSubject = {
  code: string;
  name: string;
  theory: number | null;
  practicalOrIA: number | null;
  total: number | null;
  grade: string;
};

type CgpaReport = {
  kind: "cgpa";
  score: string;
  subjects: CgpaSubject[][];   // array of semesters
};

type MarksheetReport = {
  kind: "marksheet";
  score: string;
  subjects: MarksheetSubject[];
  documents?: { src: string; label: string }[];
};

type AnyReport = CgpaReport | MarksheetReport;

type EducationEntry = {
  school: string;
  degree: string;
  start: string;
  end: string;
  logo?: string;
  details?: string[];
  report?: AnyReport;
};

// ─── Grade colour helpers ─────────────────────────────────────────────────────

function gradeColor(grade: string): string {
  if (!grade || grade === "-") return "text-white/40";
  const u = grade.toUpperCase();
  if (u.startsWith("A")) return "text-emerald-400";
  if (u.startsWith("B")) return "text-sky-400";
  if (u.startsWith("C")) return "text-amber-400";
  if (u.startsWith("D")) return "text-orange-400";
  return "text-red-400";
}

function gradeBg(grade: string): string {
  if (!grade || grade === "-") return "bg-white/5";
  const u = grade.toUpperCase();
  if (u.startsWith("A")) return "bg-emerald-400/10";
  if (u.startsWith("B")) return "bg-sky-400/10";
  if (u.startsWith("C")) return "bg-amber-400/10";
  if (u.startsWith("D")) return "bg-orange-400/10";
  return "bg-red-400/10";
}

// ─── CGPA report ──────────────────────────────────────────────────────────────

const SEM_LABELS = [
  "Semester 1", "Semester 2", "Semester 3", "Semester 4",
  "Semester 5", "Semester 6", "Semester 7", "Semester 8",
];

function SemesterBlock({
  subjects,
  label,
  defaultOpen,
}: {
  subjects: CgpaSubject[];
  label: string;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 bg-white/5 px-5 py-3.5 text-left hover:bg-white/7 transition"
      >
        <span className="text-sm font-semibold text-white/80">{label}</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/40">{subjects.length} courses</span>
          <ChevronDown
            className={`h-4 w-4 text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {open && (
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03]">
            <tr className="text-xs uppercase tracking-wide text-white/40">
              <th className="px-5 py-2.5 font-medium">Code</th>
              <th className="px-5 py-2.5 font-medium">Subject</th>
              <th className="px-5 py-2.5 font-medium text-right">Credits</th>
              <th className="px-5 py-2.5 font-medium text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05] bg-white/[0.02] text-white/75">
            {subjects.map((s) => (
              <tr key={`${s.code}-${s.name}`} className="hover:bg-white/4 transition">
                <td className="px-5 py-3 font-mono text-xs text-white/40">{s.code}</td>
                <td className="px-5 py-3">{s.name}</td>
                <td className="px-5 py-3 text-right text-white/50 tabular-nums">{s.credit}</td>
                <td className="px-5 py-3 text-center">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${gradeColor(s.grade)} ${gradeBg(s.grade)}`}>
                    {s.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function CgpaReportBody({ report }: { report: CgpaReport }) {
  return (
    <>
      <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-white/6 px-5 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
        <span className="text-xs font-medium uppercase tracking-widest text-white/40">Final</span>
        <span className="text-xl font-bold text-white">{report.score}</span>
      </div>

      <div className="flex flex-col gap-2">
        {report.subjects.map((sem, i) => (
          <SemesterBlock
            key={i}
            subjects={sem}
            label={SEM_LABELS[i] ?? `Semester ${i + 1}`}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </>
  );
}

// ─── Marksheet report ─────────────────────────────────────────────────────────

function MarksheetReportBody({ report }: { report: MarksheetReport }) {
  return (
    <>
      <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-white/6 px-5 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
        <span className="text-xs font-medium uppercase tracking-widest text-white/40">Score</span>
        <span className="text-xl font-bold text-white">{report.score}</span>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5">
            <tr className="text-xs uppercase tracking-wide text-white/40">
              <th className="px-4 py-3 font-medium">Code</th>
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium text-right">Theory</th>
              <th className="px-4 py-3 font-medium text-right">IA / Practical</th>
              <th className="px-4 py-3 font-medium text-right">Total</th>
              <th className="px-4 py-3 font-medium text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06] bg-white/[0.02] text-white/80">
            {report.subjects.map((s) => (
              <tr key={`${s.code}-${s.name}`} className="hover:bg-white/4 transition">
                <td className="px-4 py-3 font-mono text-xs text-white/40">{s.code}</td>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3 text-right tabular-nums text-white/60">{s.theory ?? "—"}</td>
                <td className="px-4 py-3 text-right tabular-nums text-white/60">{s.practicalOrIA ?? "—"}</td>
                <td className="px-4 py-3 text-right tabular-nums font-semibold">{s.total ?? "—"}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${gradeColor(s.grade)} ${gradeBg(s.grade)}`}>
                    {s.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {report.documents?.length ? (
        <div className="mt-5 grid gap-3">
          {report.documents.map((d) => (
            <a
              key={d.src}
              href={d.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm font-semibold text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] hover:bg-white/12 transition"
            >
              <span>{d.label}</span>
              <span className="text-white/40">Open ↗</span>
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
}

// ─── Report router ────────────────────────────────────────────────────────────

function ReportBody({ report }: { report: AnyReport }) {
  if (report.kind === "cgpa") return <CgpaReportBody report={report} />;
  if (report.kind === "marksheet") return <MarksheetReportBody report={report} />;
  return null;
}

// ─── Education card ───────────────────────────────────────────────────────────

function EducationCard({ e }: { e: EducationEntry }) {
  return (
    <div className="flex h-full items-center gap-6">
      {/* Logo */}
      {e.logo ? (
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-white/12 to-white/6 shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_8px_32px_rgba(0,0,0,0.35)]">
          <Image
            src={`${e.logo}${e.logo.includes("?") ? "&" : "?"}v=${LOGO_V}`}
            alt={`${e.school} logo`}
            width={44}
            height={44}
            className="h-11 w-11 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
            unoptimized
          />
        </div>
      ) : null}

      {/* Main info */}
      <div className="flex flex-1 flex-col justify-center min-w-0">
        <div className="text-base font-semibold text-white truncate">{e.school}</div>
        <div className="mt-0.5 text-sm text-white/60 truncate">{e.degree}</div>
        {e.details?.length ? (
          <div className="mt-1.5 flex flex-wrap gap-2">
            {e.details.map((d) => (
              <span
                key={d}
                className="rounded-full bg-white/8 px-3 py-0.5 text-xs font-medium text-white/60"
              >
                {d}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {/* Right side — year + cta */}
      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="text-sm font-semibold tabular-nums text-white/50">
          {e.start === e.end ? e.start : `${e.start} – ${e.end}`}
        </span>
        {e.report && (
          <span className="text-xs font-medium text-white/30">
            View report ↗
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function EducationSection() {
  return (
    <Section id="education">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Background"
            title="Education"
            description="Academic foundation and key coursework."
          />
        </Reveal>

        <div className="flex flex-col gap-4 w-full">
          {(profile.education as unknown as EducationEntry[]).map((e, idx) => (
            <Reveal key={`${e.school}-${idx}`} delay={idx * 0.05}>
              {e.report ? (
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="w-full h-[160px] text-left rounded-3xl bg-white/5 px-8 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-md transition hover:bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    >
                      <EducationCard e={e} />
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,860px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-[#0b0d14] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_25px_90px_rgba(0,0,0,0.6)]">
                      <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
                        <div>
                          <Dialog.Title className="text-base font-semibold text-white">
                            {e.school}
                          </Dialog.Title>
                          <Dialog.Description className="mt-1 text-sm text-white/60">
                            {e.degree} • {e.start === e.end ? e.start : `${e.start} — ${e.end}`}
                          </Dialog.Description>
                        </div>
                        <Dialog.Close asChild>
                          <button
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15 hover:text-white transition"
                            aria-label="Close"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </Dialog.Close>
                      </div>

                      <div className="max-h-[70vh] overflow-auto px-6 py-6">
                        <ReportBody report={e.report} />
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              ) : (
                <article className="w-full h-[160px] rounded-3xl bg-white/5 px-8 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-md">
                  <EducationCard e={e} />
                </article>
              )}
            </Reveal>
          ))}
        </div>      </Container>
    </Section>
  );
}