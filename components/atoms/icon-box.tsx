import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: "h-11 w-11 rounded-xl",
  md: "h-14 w-14 rounded-2xl",
  lg: "h-16 w-16 rounded-2xl",
};

export function IconBox({ size = "md", className, ...props }: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center icon-gradient border border-primary/20 transition-transform duration-300",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

