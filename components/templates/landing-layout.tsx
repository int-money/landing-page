import type { ReactNode } from "react";

interface LandingLayoutProps {
  children: ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-125 h-125 bg-primary/15 rounded-full blur-3xl float will-change-transform" />
        <div className="absolute top-1/4 -left-60 w-100 h-100 bg-[oklch(0.45_0.2_240_/0.12)] rounded-full blur-3xl float-delayed will-change-transform" />
        <div className="absolute bottom-1/3 right-1/5 w-87.5 h-87.5 bg-[oklch(0.5_0.18_330/_0.1)] rounded-full blur-3xl float will-change-transform" />
        <div className="absolute top-2/3 left-1/3 w-75 h-75 bg-primary/8 rounded-full blur-[48px] float-delayed will-change-transform" />
      </div>
      {children}
    </div>
  );
}

