"use client";

import { useState, useEffect, useRef, useMemo } from "react";

export function useActiveSection(
  sectionIds: string[],
  options?: {
    rootMargin?: string;
    threshold?: number;
  }
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const activeSectionRef = useRef<string | null>(null);

  // Store intersection entries in a useRef map
  const intersectionEntries = useRef<Map<string, boolean>>(new Map());

  // Stringify the ids so the effect doesn't re-run unnecessarily if array identity changes
  const idsString = useMemo(() => sectionIds.join(","), [sectionIds]);

  useEffect(() => {
    const ids = idsString.split(",").filter(Boolean);

    if (ids.length === 0) return;

    const updateActiveSection = (newSection: string | null) => {
      if (activeSectionRef.current !== newSection) {
        activeSectionRef.current = newSection;
        setActiveSection(newSection);
      }
    };

    const determineActiveSection = () => {
      // Edge case: User is at the very top (within 50px)
      if (window.scrollY < 50) {
        updateActiveSection(null);
        return;
      }

      // Edge case: User is at the very bottom
      const isAtBottom =
        Math.abs(document.documentElement.scrollHeight - window.innerHeight - window.scrollY) <= 10;
      if (isAtBottom) {
        updateActiveSection(ids[ids.length - 1]);
        return;
      }

      // Find all currently intersecting sections
      const visibleSections = ids.filter((id) => intersectionEntries.current.get(id));

      if (visibleSections.length === 0) {
        return;
      }

      if (visibleSections.length === 1) {
        updateActiveSection(visibleSections[0]);
        return;
      }

      // When multiple sections are visible, the one closest to the center of the viewport wins
      let closestId = visibleSections[0];
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      visibleSections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elementCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestId = id;
          }
        }
      });

      updateActiveSection(closestId);
    };

    // Scroll listener for top/bottom edge cases
    const handleScroll = () => {
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Ensure we handle dynamic section mounting
    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;
        entries.forEach((entry) => {
          const id = entry.target.id;
          const wasIntersecting = intersectionEntries.current.get(id);
          if (wasIntersecting !== entry.isIntersecting) {
            intersectionEntries.current.set(id, entry.isIntersecting);
            hasChanges = true;
          }
        });

        if (hasChanges) {
          determineActiveSection();
        }
      },
      {
        rootMargin: options?.rootMargin ?? "-50% 0px -50% 0px",
        threshold: options?.threshold ?? 0,
      }
    );

    // Initial setup
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Check once immediately on mount
    determineActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [idsString, options?.rootMargin, options?.threshold]);

  return activeSection;
}
