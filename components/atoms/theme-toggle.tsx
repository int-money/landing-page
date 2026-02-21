"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggleButtonVariants = cva(
  "rounded-full aspect-square shadow-lg hover:shadow-xl transition-all duration-300 p-4 box-border relative",
  {
    variants: {
      size: {
        sm: "h-5",
        md: "h-10",
        lg: "h-15",
      },
    },

    defaultVariants: {
      size: "sm",
    },
  }
);

type IThemeToggleProp = {
  className?: React.ComponentProps<"button">["className"];
} & VariantProps<typeof ThemeToggleButtonVariants>;

export default function ThemeToggle({ className, size }: IThemeToggleProp) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering icons after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleButton = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  if (!mounted) {
    return (
      <div
        className={`${ThemeToggleButtonVariants({ size })} aspect-square block bg-gray-500 animate-pulse`}
      />
    );
  }

  return (
    <Button
      onClick={handleToggleButton}
      className={cn(ThemeToggleButtonVariants({ size, className }))}
      aria-label="Toggle theme"
      variant={"ghost"}
    >
      {/* Sun Icon: Visible in Light mode */}
      <Sun
        className={cn(
          "h-full! w-full! transition-all! duration-300! transform! absolute!",
          theme === "light" ? "scale-80! rotate-0! opacity-100!" : "scale-0! rotate-90! opacity-0!"
        )}
      />

      {/* Moon Icon: Visible in Dark mode */}
      <Moon
        className={cn(
          "h-full! w-full! transition-all! duration-300! transform! absolute!",
          theme === "dark" ? "scale-80! rotate-0! opacity-100!" : "scale-0! -rotate-90! opacity-0!"
        )}
      />

      {/* Monitor Icon: Visible in System mode */}
      <Monitor
        className={cn(
          "h-full! w-full! transition-all! duration-300! transform! absolute!",
          theme === "system"
            ? "scale-70! rotate-0! opacity-100!"
            : "scale-0! rotate-180! opacity-0!"
        )}
      />
    </Button>
  );
}
