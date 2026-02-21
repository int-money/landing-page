"use client";

import * as React from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          // Get the section with the highest intersection ratio
          const mostVisible = visibleSections.reduce((prev, current) => {
            return current.intersectionRatio > prev.intersectionRatio
              ? current
              : prev;
          });
          
          setActiveSection(`#${mostVisible.target.id}`);
        } else {
          // No section is in view
          setActiveSection("");
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}
