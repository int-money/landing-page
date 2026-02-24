"use client";

import { useEffect } from "react";
import { Button } from "@/components/atoms/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/atoms/theme-toggle";
import { useWaitlist } from "@/components/providers/waitlist-provider";
import { useActiveSection } from "@/hooks/use-active-section";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const { openWaitlist } = useWaitlist();
  
  const sectionIds = links.map((link) => 
    link.href.startsWith("#") ? link.href.substring(1) : ""
  ).filter(Boolean);
  
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-background/90 backdrop-blur-2xl transition-all duration-500 md:hidden",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center min-h-screen gap-8 p-8 transition-all duration-500 delay-100",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "group relative text-3xl font-bold transition-all duration-300",
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                )}
                style={{ transitionDelay: `${(index + 1) * 75}ms` }}
              >
                <span className="relative">
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-1 bg-primary rounded-full transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-2">
          <ThemeToggle />
        </div>

        <Button
          size="lg"
          className="rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mt-4"
          onClick={() => {
            onClose();
            openWaitlist();
          }}
        >
          Join the Waitlist
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  );
}
