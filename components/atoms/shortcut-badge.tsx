"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ShortcutBadgeProps {
  className?: string;
}

export function ShortcutBadge({ className }: ShortcutBadgeProps) {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(typeof navigator !== "undefined" && /Mac/i.test(navigator.platform));
  }, []);

  return (
    <span
      className={cn("hidden md:inline-flex items-center text-xs text-muted-foreground", className)}
    >
      {isMac ? "⌘+Shift+K" : "Ctrl+Shift+K"}
    </span>
  );
}
