"use client";

import React, { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useWaitlist } from "@/components/providers/waitlist-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// The validation schema
const waitlistSchema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

const COOLDOWN_MS = 30_000;
const WAITLIST_LAST_SUBMITTED_AT = "waitlist_last_submitted_at";

function getRemainingCooldown(now = Date.now()) {
  if (typeof window === "undefined") {
    return 0;
  }

  const rawTimestamp = window.localStorage.getItem(WAITLIST_LAST_SUBMITTED_AT);
  if (!rawTimestamp) {
    return 0;
  }

  const parsedTimestamp = Number.parseInt(rawTimestamp, 10);
  if (Number.isNaN(parsedTimestamp)) {
    return 0;
  }

  const elapsed = now - parsedTimestamp;
  return Math.max(COOLDOWN_MS - elapsed, 0);
}

function setSubmissionTimestamp(now = Date.now()) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(WAITLIST_LAST_SUBMITTED_AT, String(now));
}

export function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist();

  // States: idle, loading, success, error
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [remainingCooldownMs, setRemainingCooldownMs] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const clearCooldownTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const applyCooldown = (remainingMs: number) => {
    clearCooldownTimer();

    if (remainingMs <= 0) {
      setRemainingCooldownMs(0);
      return;
    }

    const cooldownEndsAt = Date.now() + remainingMs;
    setRemainingCooldownMs(remainingMs);

    timerRef.current = setInterval(() => {
      const remaining = Math.max(cooldownEndsAt - Date.now(), 0);
      setRemainingCooldownMs(remaining);

      if (remaining === 0) {
        clearCooldownTimer();
      }
    }, 1000);
  };

  useEffect(() => {
    if (!isOpen) {
      clearCooldownTimer();
      return;
    }

    applyCooldown(getRemainingCooldown());

    return () => {
      clearCooldownTimer();
    };
  }, [isOpen]);

  const onSubmit = async (values: WaitlistFormValues) => {
    const remainingCooldown = getRemainingCooldown();
    if (remainingCooldown > 0) {
      applyCooldown(remainingCooldown);
      toast({
        variant: "destructive",
        title: "Please wait before trying again",
        description: `You can submit again in ${Math.ceil(remainingCooldown / 1000)} seconds.`,
      });
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const apiUrl = process.env.NEXT_PUBLIC_WAITLIST_API_URL;

    try {
      if (!apiUrl) {
        // Demo mode fallback
        await new Promise((resolve) => setTimeout(resolve, 1500));
        handleSuccess();
      } else {
        // Real API call
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to join waitlist. Please try again.");
        }

        handleSuccess();
      }
    } catch (error) {
      setStatus("error");
      const message = error instanceof Error ? error.message : "An unexpected error occurred";
      setErrorMessage(message);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: message,
      });
    }
  };

  const handleSuccess = () => {
    setSubmissionTimestamp();
    applyCooldown(COOLDOWN_MS);
    setStatus("success");
    toast({
      title: "You're on the list!",
      description: "Keep an eye on your inbox. We'll be in touch soon.",
    });
    // Reset form and close modal after delay
    setTimeout(() => {
      reset();
      setStatus("idle");
      closeWaitlist();
    }, 2500);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeWaitlist();
      // Reset after animation
      setTimeout(() => {
        reset();
        setStatus("idle");
      }, 300);
    }
  };

  const remainingCooldownSeconds = Math.ceil(remainingCooldownMs / 1000);
  const isRateLimited = remainingCooldownMs > 0;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md glass-card gradient-border overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[48px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[48px] pointer-events-none" />

        <div className="relative z-10">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold">Join the Waitlist</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Be the first to know when we launch and get early access to your AI financial agent.
            </DialogDescription>
          </DialogHeader>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
              <p className="text-muted-foreground text-sm">
                Keep an eye on your inbox. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="name">Name (Optional)</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  className="bg-background/50 border-white/10 focus-visible:ring-primary"
                  disabled={status === "loading" || isRateLimited}
                  {...register("name")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className={`bg-background/50 border-white/10 focus-visible:ring-primary ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  disabled={status === "loading" || isRateLimited}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2 text-sm text-red-500 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              {isRateLimited && (
                <p className="text-xs text-muted-foreground">
                  Please wait {remainingCooldownSeconds}s before submitting again.
                </p>
              )}

              <Button
                type="submit"
                className="w-full relative overflow-hidden group shadow-lg shadow-primary/20"
                disabled={status === "loading" || isRateLimited}
              >
                {/* Button gradient background that shines on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Securing your spot...
                    </>
                  ) : isRateLimited ? (
                    `Please wait ${remainingCooldownSeconds}s`
                  ) : (
                    "Join Waitlist"
                  )}
                </span>
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
