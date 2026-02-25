import { cn } from "@/lib/utils";

interface GlowOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function GlowOrb({ className, ...props }: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("rounded-full blur-[64px] pointer-events-none will-change-transform", className)}
      {...props}
    />
  );
}

