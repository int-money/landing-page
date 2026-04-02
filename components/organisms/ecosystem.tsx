"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/atoms/card";
import { SectionHeader } from "@/components/molecules/section-header";
import { EcosystemItem } from "@/components/molecules/ecosystem-item";
import { Globe, Zap, Shield, Brain } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="container mx-auto px-4 py-24 relative z-10 section-glow">
      <SectionHeader
        badgeText="Ecosystem"
        badgeIcon={<Globe className="h-4 w-4" />}
        title={
          <>
            Part of the <span className="gradient-text">Stellar Ecosystem</span>
          </>
        }
        subtitle="Your agent leverages the full power of Stellar's network to move your money faster,
            cheaper, and smarter"
      />

      <div className="mx-auto max-w-4xl">
        <Card className="glass-card shimmer-border border-0 p-4 sm:p-8 md:p-10 rounded-3xl">
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={staggerItem}>
              <EcosystemItem
                icon={<Zap className="h-7 w-7 text-primary" />}
                title="Agent + Stellar = Instant Payments"
                description="Your AI agent and Stellar's payment-optimized network work together to deliver near-instant, low-cost cross-border transactions that feel effortless."
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <EcosystemItem
                icon={<Shield className="h-7 w-7 text-primary" />}
                title="Security Your Agent Enforces"
                description="Stellar's decentralized, battle-tested network combined with your agent's transaction verification ensures every payment is safe, authenticated, and accounted for."
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <EcosystemItem
                icon={<Brain className="h-7 w-7 text-primary" />}
                title="A Network That Makes Your Agent Smarter"
                description="As the Stellar ecosystem grows with new anchors, stablecoin rails, and remittance corridors, your agent gains more routes and better rates to work with."
              />
            </motion.div>
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
