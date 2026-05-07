import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)]",
        className,
      )}
      {...props}
    />
  );
}

