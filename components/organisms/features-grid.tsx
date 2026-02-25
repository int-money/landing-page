import { Card } from "@/components/atoms/card";
import { SectionHeader } from "@/components/molecules/section-header";
import { FeatureChip } from "@/components/molecules/feature-chip";
import { Sparkles, Brain, Globe, Shield } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="container mx-auto px-4 py-24 relative z-10 section-glow">
      <SectionHeader
        badgeText="Features"
        badgeIcon={<Sparkles className="h-4 w-4" />}
        title={
          <>
            Your agent works <span className="gradient-text">while you don&apos;t</span>
          </>
        }
        subtitle="An intelligent agent that understands, plans, and executes your financial tasks
            autonomously"
      />

      <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
        <Card className="glass-card gradient-border border-0 p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between rounded-3xl group hover:shadow-2xl transition-all duration-500 will-change-transform relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl icon-gradient border border-primary/20 group-hover:scale-110 group-hover:glow-sm transition-all duration-300">
              <Brain className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl md:text-3xl font-bold">Understands &amp; Learns</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Say what you need naturally — your agent parses intent, asks smart clarifying
              questions, and remembers your patterns over time. Frequent contacts, preferred
              currencies, past transactions — it all makes your next request faster.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FeatureChip
              icon={<Sparkles className="h-4 w-4 text-green-500" />}
              label={'"Send rent to landlord"'}
              iconBgClass="bg-green-500/20"
            />
            <FeatureChip
              icon={<Sparkles className="h-4 w-4 text-blue-500" />}
              label={'"Best rate for USDC"'}
              iconBgClass="bg-blue-500/20"
            />
            <FeatureChip
              icon={<Sparkles className="h-4 w-4 text-purple-500" />}
              label={'"Spending this week?"'}
              iconBgClass="bg-purple-500/20"
            />
            <FeatureChip
              icon={<Sparkles className="h-4 w-4 text-orange-500" />}
              label={'"Split dinner, 3 friends"'}
              iconBgClass="bg-orange-500/20"
            />
          </div>
        </Card>

        <Card className="glass-card gradient-border border-0 p-6 rounded-3xl group hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 will-change-transform relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
          <div>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Stellar-Powered Speed</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Optimal path on Stellar&apos;s network — fastest route, lowest fee, best exchange
              rate. Under 5 seconds, less than $0.01.
            </p>
          </div>
        </Card>

        <Card className="glass-card gradient-border border-0 p-6 rounded-3xl group hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-300 will-change-transform relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0" />
          <div>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-bold">End-to-End Protection</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Biometric authentication, fully encrypted keys, and an agent that verifies every
              transaction before it moves a single cent.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

