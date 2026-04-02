import { Skeleton } from "@/components/ui/skeleton";

function SectionSkeleton({ className }: { className?: string }) {
  return (
    <section className={className} aria-hidden="true">
      <div className="container mx-auto px-4">
        {/* Badge + heading + subtitle */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Skeleton className="h-7 w-28 rounded-full" />
          <Skeleton className="h-10 w-2/3 max-w-lg rounded-xl" />
          <Skeleton className="h-5 w-1/2 max-w-md rounded-lg" />
        </div>
        {/* Content block */}
        <Skeleton className="h-64 w-full rounded-3xl" />
      </div>
    </section>
  );
}

export function FeaturesGridSkeleton() {
  return <SectionSkeleton className="py-24" />;
}

export function HowItWorksSkeleton() {
  return <SectionSkeleton className="py-16 md:py-28" />;
}

export function EcosystemSkeleton() {
  return <SectionSkeleton className="py-24" />;
}

export function CtaSectionSkeleton() {
  return (
    <section className="py-28" aria-hidden="true">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 px-6 py-20">
          <Skeleton className="h-7 w-28 rounded-full" />
          <Skeleton className="h-10 w-2/3 max-w-lg rounded-xl" />
          <Skeleton className="h-5 w-1/2 max-w-md rounded-lg" />
          <div className="flex gap-4 mt-4">
            <Skeleton className="h-12 w-44 rounded-full" />
            <Skeleton className="h-12 w-44 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
