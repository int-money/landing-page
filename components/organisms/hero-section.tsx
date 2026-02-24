"use client";

import { Button } from "@/components/atoms/button";
import { StatusDot } from "@/components/atoms/status-dot";
import { GradientText } from "@/components/atoms/gradient-text";
import { HeroDemo } from "@/components/organisms/hero-demo";
import { Sparkles } from "lucide-react";
import { useWaitlist } from "@/components/providers/waitlist-provider";

export function HeroSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="container mx-auto px-4 pt-8 md:pt-16 pb-20 md:pb-28 relative z-10 section-glow">
      <div className="mx-auto max-w-full sm:max-w-[90%] text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-md px-5 py-2 text-sm text-foreground shadow-lg shadow-primary/5">
          <StatusDot />
          Your AI agent for global payments — Launching on Stellar
        </div>

        <h1 className="mb-6 text-balance text-4xl sm:text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl text-glow">
          Meet the AI agent that <GradientText>moves your money.</GradientText>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
          Tell IntMoney what you need in plain language. Your personal financial agent figures out
          the best route, handles currency conversion, and executes — in seconds.
        </p>

        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base gap-2 rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-sm"
            onClick={openWaitlist}
          >
            <Sparkles className="h-5 w-5" />
            Join the Waitlist
          </Button>
          <a href="#how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base bg-transparent gap-2 rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              See Your Agent in Action
            </Button>
          </a>
        </div>

        <p className="text-sm text-muted-foreground">Join 2,000+ early adopters on the waitlist</p>
      </div>

      <div className="mx-auto mt-20 max-w-4xl relative">
        <div className="absolute -inset-10 bg-primary/[0.07] rounded-[40px] blur-2xl pointer-events-none" />
        <div className="relative">
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}

