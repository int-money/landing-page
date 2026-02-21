"use client";

import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useWaitlist } from "@/components/providers/waitlist-provider";

export function WaitlistButton({ children, onClick, ...props }: ButtonProps) {
  const { openWaitlist } = useWaitlist();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    openWaitlist();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
