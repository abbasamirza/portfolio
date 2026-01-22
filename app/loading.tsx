import { SkeletonLoader } from "@/components/ui/skeleton-loader";

export default function Loading() {
  return (
    <>
      <section className="relative grid grid-cols-1 items-center gap-12 overflow-hidden min-[896px]:grid-cols-2">
        <div className="relative w-full max-w-60 min-[896px]:order-2 min-[896px]:mx-auto">
          <div className="relative aspect-square">
            <SkeletonLoader className="h-full w-full rounded-2xl" />
          </div>
        </div>
        <div className="space-y-4 min-[896px]:order-1 min-[896px]:space-y-6">
          <SkeletonLoader className="h-10 w-64 rounded-lg sm:h-12 sm:w-80" />
          <SkeletonLoader className="h-5 w-80 rounded" />
          <SkeletonLoader className="h-5 w-96 rounded" />
          <div className="space-y-3">
            <SkeletonLoader className="h-5 w-24 rounded" />
            <div className="flex flex-wrap gap-2">
              {[...Array(6)].map((_, i) => (
                <SkeletonLoader key={i} className="h-9 w-20 rounded-full" />
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <SkeletonLoader key={i} className="size-10 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
      <div className="space-y-4">
        <div className="bg-muted flex gap-2 rounded-lg p-1">
          <SkeletonLoader className="h-9 flex-1 rounded-md" />
          <SkeletonLoader className="h-9 flex-1 rounded-md" />
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border-border space-y-3 rounded-lg border p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <SkeletonLoader className="h-6 w-48 rounded" />
                  <SkeletonLoader className="h-4 w-32 rounded" />
                </div>
                <SkeletonLoader className="size-12 shrink-0 rounded-lg" />
              </div>
              <SkeletonLoader className="h-4 w-full rounded" />
              <SkeletonLoader className="h-4 w-3/4 rounded" />
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, j) => (
                  <SkeletonLoader key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
