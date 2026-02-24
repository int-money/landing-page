import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureChipProps {
  icon: ReactNode;
  label: string;
  iconBgClass: string;
}

export function FeatureChip({ icon, label, iconBgClass }: FeatureChipProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg shrink-0",
          iconBgClass
        )}
      >
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

