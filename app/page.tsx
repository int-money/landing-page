import { LandingLayout } from "@/components/templates/landing-layout";
import { Navbar } from "@/components/organisms/navbar";
import { HeroSection } from "@/components/organisms/hero-section";
import { FeaturesGrid } from "@/components/organisms/features-grid";
import { HowItWorks } from "@/components/organisms/how-it-works";
import { Ecosystem } from "@/components/organisms/ecosystem";
import { CtaSection } from "@/components/organisms/cta-section";
import { Footer } from "@/components/organisms/footer";

export default function Home() {
  return (
    <LandingLayout>
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <Ecosystem />
      <CtaSection />
      <Footer />
    </LandingLayout>
  );
}

