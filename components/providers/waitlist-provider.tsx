"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { WaitlistModal } from "@/components/organisms/waitlist-modal";

interface WaitlistContextValue {
  open: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | undefined>(
  undefined
);

interface WaitlistProviderProps {
  children: ReactNode;
}

export function WaitlistProvider({ children }: WaitlistProviderProps) {
  const [open, setOpen] = useState(false);

  const openWaitlist = () => setOpen(true);
  const closeWaitlist = () => setOpen(false);

  return (
    <WaitlistContext.Provider
      value={{ open, openWaitlist, closeWaitlist }}
    >
      {children}

      {/* keep modal at top level so any component can trigger it */}
      <WaitlistModal
        open={open}
        onOpenChange={setOpen}
        onSubmit={async (data) => {
          await fetch("/api/waitlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
        }}
      />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return ctx;
}
