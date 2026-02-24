"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/atoms/theme-toggle";
import { useWaitlist } from "@/components/providers/waitlist-provider";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#ecosystem", label: "Ecosystem" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");
  const activeSection = useActiveSection(["features", "how-it-works", "ecosystem"]);
  const { openWaitlist } = useWaitlist();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
          isScrolled ? "py-3" : "py-5"
        )}
      >
        <div className="px-4 w-full max-w-fit">
          <nav
            className={cn(
              "relative flex items-center gap-2 rounded-full border px-2 py-2 transition-all duration-500",
              isScrolled
                ? "border-border/50 bg-background/80 backdrop-blur-2xl shadow-lg shadow-black/20 shadow-[0_4px_30px_oklch(0.55_0.25_290_/_0.05)]"
                : "border-border/30 bg-background/50 backdrop-blur-xl"
            )}
          >
            <a href="#" className="flex items-center gap-2 group pl-2 pr-3">
              <Image src="/icon.svg" alt="IntMoney" width={36} height={36} className="rounded-lg" />
              <span className="text-base font-bold tracking-tight hidden sm:inline">IntMoney</span>
            </a>

            <div className="hidden md:block w-px h-6 bg-border/50" />

            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  const isHovered = hoveredLink === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink("")}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                        isActive || isHovered
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute inset-0 rounded-full transition-all duration-300",
                          isActive && !isHovered
                            ? "bg-primary/15 opacity-100 scale-100"
                            : isHovered
                              ? "bg-muted/80 opacity-100 scale-100"
                              : "opacity-0 scale-95"
                        )}
                      />
                      {isActive && !isHovered && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-primary rounded-full transition-all duration-300" />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:block w-px h-6 bg-border/50" />

            <div className="hidden md:flex items-center pl-1">
              <ThemeToggle />
            </div>

            <div className="hidden md:block w-px h-6 bg-border/50" />

            <div className="hidden md:flex items-center pl-1 pr-1">
              <Button
                variant="default"
                className="rounded-full px-5 h-9 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group text-sm"
                onClick={openWaitlist}
              >
                <span>Join Waitlist</span>
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-muted/80 transition-all duration-300 hover:bg-muted ml-1"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <Menu
                className={cn(
                  "h-4 w-4 absolute transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X
                className={cn(
                  "h-4 w-4 absolute transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/90 backdrop-blur-2xl transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center justify-center min-h-screen gap-8 p-8 transition-all duration-500 delay-100",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          <nav className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
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
            onClick={() => {setIsMobileMenuOpen(false); openWaitlist(); }}
          >
            Join the Waitlist
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>

      <div className="h-20" />
    </>
  );
}

