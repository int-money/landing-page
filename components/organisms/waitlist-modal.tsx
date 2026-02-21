"use client";

import React, { useState } from "react";
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

// The validation schema
const waitlistSchema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist();

  // States: idle, loading, success, error
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    // Adding custom resolver for zod
    validate: (values) => {
      try {
        waitlistSchema.parse(values);
        return false;
      } catch (err) {
        if (err instanceof z.ZodError) {
          return err.formErrors.fieldErrors;
        }
      }
    },
  });

  const onSubmit = async (values: WaitlistFormValues) => {
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
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred");
    }
  };

  const handleSuccess = () => {
    setStatus("success");
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
                  disabled={status === "loading"}
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
                  disabled={status === "loading"}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email as string}
                  </p>
                )}
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2 text-sm text-red-500 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full relative overflow-hidden group shadow-lg shadow-primary/20"
                disabled={status === "loading"}
              >
                {/* Button gradient background that shines on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Securing your spot...
                    </>
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
