 "use client";
 
 import { motion, useMotionValue, useTransform, animate } from "framer-motion";
 import { useEffect, useMemo, useRef, useState } from "react";
 import { interpolate } from "flubber";
 import { cn } from "@/lib/utils";
 
 type Tint = "cyan" | "violet" | "emerald" | "amber";
 
 const SHAPES = [
   // Rounded diamond
   "M128 28 C170 28 220 78 220 128 C220 178 170 228 128 228 C86 228 36 178 36 128 C36 78 86 28 128 28 Z",
   // Soft hex
   "M128 22 C148 22 156 28 170 36 L206 58 C222 68 228 78 228 98 L228 158 C228 178 222 188 206 198 L170 220 C156 228 148 234 128 234 C108 234 100 228 86 220 L50 198 C34 188 28 178 28 158 L28 98 C28 78 34 68 50 58 L86 36 C100 28 108 22 128 22 Z",
   // Circle-ish blob
   "M128 24 C176 24 220 62 232 112 C244 162 208 224 156 234 C104 244 44 212 28 156 C12 100 52 24 128 24 Z",
   // Shield
   "M128 18 C152 36 180 44 212 46 C214 94 206 134 186 166 C166 198 142 220 128 238 C114 220 90 198 70 166 C50 134 42 94 44 46 C76 44 104 36 128 18 Z",
 ] as const;
 
 function tintStops(tint: Tint) {
   if (tint === "violet") return { a: "#a78bfa", b: "#22d3ee" }; // violet -> cyan
   if (tint === "emerald") return { a: "#34d399", b: "#60a5fa" }; // emerald -> blue
   if (tint === "amber") return { a: "#fbbf24", b: "#fb7185" }; // amber -> rose
   return { a: "#22d3ee", b: "#a78bfa" }; // cyan -> violet
 }
 
 export function MorphingLogo({
   tint = "cyan",
   compact,
   className,
 }: {
   tint?: Tint;
   compact?: boolean;
   className?: string;
 }) {
   const [index, setIndex] = useState(0);
   const progress = useMotionValue(0);
   const current = SHAPES[index % SHAPES.length];
   const next = SHAPES[(index + 1) % SHAPES.length];
 
   const interpolator = useMemo(() => interpolate(current, next, { maxSegmentLength: 2 }), [current, next]);
   const d = useTransform(progress, (t) => interpolator(t));
 
   const animRef = useRef<ReturnType<typeof animate> | null>(null);
 
   useEffect(() => {
     animRef.current?.stop();
 
     progress.set(0);
     animRef.current = animate(progress, 1, {
       duration: 1.35,
       ease: [0.22, 1, 0.36, 1],
       repeat: Infinity,
       repeatType: "loop",
       repeatDelay: 0.55,
       onRepeat: () => setIndex((i) => (i + 1) % SHAPES.length),
     });
 
     return () => {
       animRef.current?.stop();
     };
   }, [progress]);
 
   const size = compact ? 56 : 96;
   const { a, b } = tintStops(tint);
 
   return (
     <div
       className={cn(
         "relative grid place-items-center overflow-hidden rounded-2xl",
         "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
         "bg-gradient-to-br from-white/10 to-white/5",
         compact ? "h-14" : "h-28",
         className,
       )}
       aria-hidden
     >
       <div className="absolute inset-0 opacity-90 bg-[radial-gradient(900px_circle_at_20%_-10%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(700px_circle_at_90%_30%,rgba(255,255,255,0.12),transparent_55%)]" />
       <div
         className="absolute -left-10 -top-10 h-40 w-40 rounded-full blur-2xl opacity-70"
         style={{ background: `radial-gradient(circle at 30% 30%, ${a}55, transparent 60%)` }}
       />
       <div
         className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full blur-2xl opacity-70"
         style={{ background: `radial-gradient(circle at 70% 70%, ${b}55, transparent 60%)` }}
       />
 
       <svg
         width={size}
         height={size}
         viewBox="0 0 256 256"
         className="relative"
       >
         <defs>
           <linearGradient id={`morph-grad-${tint}`} x1="0" y1="0" x2="1" y2="1">
             <stop offset="0%" stopColor={a} stopOpacity="0.95" />
             <stop offset="100%" stopColor={b} stopOpacity="0.95" />
           </linearGradient>
           <filter id={`morph-glow-${tint}`} x="-50%" y="-50%" width="200%" height="200%">
             <feGaussianBlur stdDeviation="6" result="blur" />
             <feColorMatrix
               in="blur"
               type="matrix"
               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -6"
               result="glow"
             />
             <feMerge>
               <feMergeNode in="glow" />
               <feMergeNode in="SourceGraphic" />
             </feMerge>
           </filter>
         </defs>
 
         <motion.path
           d={d}
           fill={`url(#morph-grad-${tint})`}
           opacity={0.18}
           filter={`url(#morph-glow-${tint})`}
         />
 
         <motion.path
           d={d}
           fill="none"
           stroke={`url(#morph-grad-${tint})`}
           strokeWidth="10"
           strokeLinejoin="round"
           strokeLinecap="round"
           filter={`url(#morph-glow-${tint})`}
           initial={{ pathLength: 0 }}
           animate={{ pathLength: [0, 1, 1] }}
           transition={{
             duration: 1.35,
             ease: [0.22, 1, 0.36, 1],
             repeat: Infinity,
             repeatType: "loop",
             repeatDelay: 0.55,
           }}
         />
 
         <motion.circle
           cx="128"
           cy="128"
           r="4"
           fill={a}
           animate={{ opacity: [0.25, 1, 0.25], r: [3, 5, 3] }}
           transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
         />
       </svg>
 
       <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" />
     </div>
   );
 }

