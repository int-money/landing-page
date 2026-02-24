"use client";

import { useEffect, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/atoms/dialog";

type WaitlistFormData = {
  email: string;
  name?: string;
};

type WaitlistModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: WaitlistFormData) => Promise<void>;
};

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
});

export function WaitlistModal({
  open,
  onOpenChange,
  onSubmit,
}: WaitlistModalProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(schema),
  });

  // Reset form when modal reopens
  useEffect(() => {
    if (open) {
      reset();
      setStatus("idle");
    }
  }, [open, reset]);

  // Auto close on success
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, onOpenChange]);

  const onFormSubmit = async (data: WaitlistFormData) => {
    try {
      setStatus("submitting");

      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Demo mode
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card max-w-md rounded-2xl p-10">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2
              className="text-primary mb-4 animate-[scaleIn_0.4s_ease-out]"
              size={64}
            />
            <h2 className="text-2xl font-semibold gradient-text">
              You're on the list!
            </h2>
            <p className="mt-2 text-muted-foreground">
              We'll notify you as soon as we launch.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text text-center mb-2">
                Join the Waitlist
              </DialogTitle>
            </DialogHeader>

            <form
              onSubmit={handleSubmit(onFormSubmit)}
              className="mt-6 space-y-4"
            >
            

              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-bold mb-5">
                  Email (Required)<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  disabled={status === "submitting"}
                  {...register("email")}
                  className={`rounded-md border border-primary px-3 py-3 text-sm outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "bg-background focus:ring-primary"
                  }`}
                />
                {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

                <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-bold mb-5">
                  Name (optional)
                </label>
                <input
                  id="name"
                  type="text"
                  disabled={status === "submitting"}
                  {...register("name")}
                  className="rounded-md border border-primary bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-500">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="glow-sm w-full rounded-md bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-60 "
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}