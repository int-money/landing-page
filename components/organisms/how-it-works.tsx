"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/molecules/section-header";
import { StepCard } from "@/components/molecules/step-card";
import { Zap, Brain, MessageSquareText, CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="container mx-auto px-4 py-16 md:py-28 relative z-10 section-glow"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badgeText="How It Works"
          badgeIcon={<Zap className="h-4 w-4" />}
          title={
            <>
              From words to <span className="gradient-text">money moved</span>
            </>
          }
          subtitle="Three steps. Your agent handles the complexity in between."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-0 items-start relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={staggerItem}>
            <StepCard
              icon={<MessageSquareText className="h-7 w-7 text-primary" />}
              title="You request"
              description="Say what you need in plain language, text or voice. No menus, no forms."
            />
          </motion.div>

          <div className="hidden md:flex items-center pt-7 px-4">
            <div className="w-24 h-[2px] bg-primary/30 rounded-full" />
          </div>

          <motion.div variants={staggerItem}>
            <StepCard
              icon={<Brain className="h-7 w-7 text-primary" />}
              title="Agent understands intent"
              description="Your agent parses your request, figures out exactly what you mean, and prepares the transaction."
            />
          </motion.div>

          <div className="hidden md:flex items-center pt-7 px-4">
            <div className="w-24 h-[2px] bg-gradient-to-r from-primary/30 to-green-400/30 rounded-full" />
          </div>

          <motion.div variants={staggerItem}>
            <StepCard
              icon={<CheckCircle2 className="h-7 w-7 text-green-400" />}
              title="You approve, it executes"
              description="Review the details, tap to confirm. Your agent executes and funds arrive in seconds."
              color="green"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
