import React from "react";
import { cn } from "@/lib/utils";

interface SkipToContentProps {
  targetId?: string;
  label?: string;
}

export function SkipToContent({
  targetId = "main-content",
  label = "Skip to main content",
}: SkipToContentProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]",
        "px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full shadow-lg transition-transform focus:translate-y-0",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "font-body"
      )}
    >
      {label}
    </a>
  );
}
