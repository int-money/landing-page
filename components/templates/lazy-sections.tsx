"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import {
  FeaturesGridSkeleton,
  HowItWorksSkeleton,
  EcosystemSkeleton,
  CtaSectionSkeleton,
} from "@/components/atoms/section-skeleton";

const FeaturesGrid = dynamic(
  () => import("@/components/organisms/features-grid").then((m) => m.FeaturesGrid),
  { ssr: false }
);

const HowItWorks = dynamic(
  () => import("@/components/organisms/how-it-works").then((m) => m.HowItWorks),
  { ssr: false }
);

const Ecosystem = dynamic(
  () => import("@/components/organisms/ecosystem").then((m) => m.Ecosystem),
  { ssr: false }
);

const CtaSection = dynamic(
  () => import("@/components/organisms/cta-section").then((m) => m.CtaSection),
  { ssr: false }
);

export function LazySections() {
  return (
    <>
      <Suspense fallback={<FeaturesGridSkeleton />}>
        <FeaturesGrid />
      </Suspense>
      <Suspense fallback={<HowItWorksSkeleton />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<EcosystemSkeleton />}>
        <Ecosystem />
      </Suspense>
      <Suspense fallback={<CtaSectionSkeleton />}>
        <CtaSection />
      </Suspense>
    </>
  );
}
