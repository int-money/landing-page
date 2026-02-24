import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function SectionBadge({ children, icon, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm",
        className
      )}
    >
      {icon}
      {children}
    </div>
  );
}

