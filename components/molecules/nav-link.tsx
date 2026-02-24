import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export function NavLink({ active, className, children, ...props }: NavLinkProps) {
  return (
    <a
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300",
          active ? "bg-primary/15 opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      />
      <span className="relative z-10">{children}</span>
    </a>
  );
}

