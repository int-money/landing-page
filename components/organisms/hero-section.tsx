"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/button";
import { StatusDot } from "@/components/atoms/status-dot";
import { GradientText } from "@/components/atoms/gradient-text";
import { HeroDemo } from "@/components/organisms/hero-demo";
import { Sparkles } from "lucide-react";
import { useWaitlist } from "@/components/providers/waitlist-provider";
import {
  slideUp,
  slideDown,
  fadeIn,
  staggerContainer,
  staggerItem,
  ANIMATION,
} from "@/lib/animations";

export function HeroSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="container mx-auto px-4 pt-8 md:pt-16 pb-20 md:pb-28 relative z-10 section-glow">
      <motion.div
        className="mx-auto max-w-full sm:max-w-[90%] text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={slideDown}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-md px-5 py-2 text-sm text-foreground shadow-lg shadow-primary/5"
        >
          <StatusDot />
          Your AI agent for global payments — Launching on Stellar
        </motion.div>

        <motion.h1
          variants={slideUp}
          className="mb-6 text-balance text-4xl sm:text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl text-glow"
        >
          Meet the AI agent that <GradientText>moves your money.</GradientText>
        </motion.h1>

        <motion.p
          variants={slideUp}
          className="mx-auto mb-10 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl"
        >
          Tell IntMoney what you need in plain language. Your personal financial agent figures out
          the best route, handles currency conversion, and executes — in seconds.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mb-4 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-base gap-2 rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-sm"
            onClick={openWaitlist}
          >
            <Sparkles className="h-5 w-5" />
            Join the Waitlist
          </Button>
          <a
            href="#how-it-works"
            className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base bg-transparent gap-2 rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              See Your Agent in Action
            </Button>
          </a>
        </motion.div>

        <motion.p variants={fadeIn} className="text-sm text-muted-foreground">
          Join 2,000+ early adopters on the waitlist
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto mt-20 max-w-4xl relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: ANIMATION.DURATION.SLOW, ease: ANIMATION.EASING.DEFAULT }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute -inset-10 bg-primary/[0.07] rounded-[40px] blur-2xl pointer-events-none" />
        <div className="relative">
          <HeroDemo />
        </div>
      </motion.div>
    </section>
  );
}
