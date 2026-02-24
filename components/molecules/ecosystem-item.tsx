import type { ReactNode } from "react";

interface EcosystemItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function EcosystemItem({ icon, title, description }: EcosystemItemProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 group border-l-2 border-transparent hover:border-primary/40">
      <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
