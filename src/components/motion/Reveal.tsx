"use client";

import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  className,
  children,
  delay = 0,
  ...props
}: MotionProps & {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      style={{ willChange: "transform, opacity" }}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

