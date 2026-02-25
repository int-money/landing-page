import type { ReactNode } from "react";
import { SectionBadge } from "@/components/atoms/section-badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  subtitle: string;
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeIcon,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16 text-center", className)}>
      <SectionBadge icon={badgeIcon} className="mb-4">
        {badgeText}
      </SectionBadge>
      <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl text-glow">{title}</h2>
      <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );
}

