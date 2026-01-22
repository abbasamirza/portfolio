import { SkeletonLoader } from "@/components/ui/skeleton-loader";

export default function Loading() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-x-2">
          <SkeletonLoader className="h-10 w-48 rounded-lg sm:h-12 sm:w-64" />
          <SkeletonLoader className="size-8 rounded" />
        </div>
        <div className="space-y-2">
          <SkeletonLoader className="mx-auto h-8 w-56 rounded-lg" />
          <SkeletonLoader className="mx-auto h-5 w-80 max-w-md rounded" />
          <SkeletonLoader className="mx-auto h-5 w-72 max-w-md rounded" />
        </div>
      </div>
      <div className="flex gap-2">
        {[...Array(3)].map((_, i) => (
          <SkeletonLoader key={i} className="size-2 rounded-full" />
        ))}
      </div>
    </section>
  );
}
