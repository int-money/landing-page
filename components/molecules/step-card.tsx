import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: "primary" | "green";
}

export function StepCard({ icon, title, description, color = "primary" }: StepCardProps) {
  const borderClass =
    color === "green" ? "border-green-500/40 group-hover:border-green-500/70" : "border-primary/40 group-hover:border-primary/70";
  return (
    <div className="text-center group relative">
      <div
        className={cn(
          "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-background border-2 transition-all duration-300 relative z-10",
          borderClass
        )}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed text-balance">{description}</p>
    </div>
  );
}

