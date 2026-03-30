"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/button";
import { SectionHeader } from "@/components/molecules/section-header";
import { Sparkles } from "lucide-react";
import { useWaitlist } from "@/components/providers/waitlist-provider";
import { staggerItem, ANIMATION } from "@/lib/animations";

export function CtaSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative z-10 py-28">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="px-6 py-20 text-center md:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.DURATION.BASE, ease: ANIMATION.EASING.DEFAULT }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            badgeText="Early Access"
            badgeIcon={<Sparkles className="h-4 w-4" />}
            title={
              <>
                Ready to meet your <span className="gradient-text">financial agent?</span>
              </>
            }
            subtitle="Join 2,000+ early adopters on the waitlist. Be among the first to let an AI agent handle your cross-border payments."
          />
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            variants={staggerItem}
            transition={{ delay: ANIMATION.DELAY.SHORT }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base gap-2 rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-sm"
              onClick={openWaitlist}
            >
              <Sparkles className="h-5 w-5" />
              Join the Waitlist
            </Button>
            <a
              href="#features"
              className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base bg-transparent gap-2 rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                Explore Features
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
