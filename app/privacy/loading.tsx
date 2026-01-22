import { SkeletonLoader } from "@/components/ui/skeleton-loader";

export default function Loading() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <SkeletonLoader className="h-10 w-64 rounded-lg sm:h-12 sm:w-80" />
          <SkeletonLoader className="size-8 rounded" />
        </div>
        <SkeletonLoader className="h-4 w-40 rounded" />
      </div>
      <div className="space-y-8">
        <div className="space-y-3">
          <SkeletonLoader className="h-8 w-24 rounded-lg" />
          <SkeletonLoader className="h-5 w-full rounded" />
          <SkeletonLoader className="h-5 w-3/4 rounded" />
        </div>
        <div className="space-y-3">
          <SkeletonLoader className="h-8 w-32 rounded-lg" />
          <div className="space-y-2">
            <SkeletonLoader className="h-5 w-full rounded" />
            <SkeletonLoader className="h-5 w-full rounded" />
            <SkeletonLoader className="h-5 w-2/3 rounded" />
          </div>
        </div>
        <div className="space-y-3">
          <SkeletonLoader className="h-8 w-64 rounded-lg" />
          <div className="space-y-3">
            <SkeletonLoader className="h-5 w-full rounded" />
            <SkeletonLoader className="h-5 w-5/6 rounded" />
            <SkeletonLoader className="h-5 w-full rounded" />
            <SkeletonLoader className="h-5 w-4/5 rounded" />
            <div className="space-y-4">
              <div className="space-y-2">
                <SkeletonLoader className="h-6 w-40 rounded" />
                <SkeletonLoader className="h-5 w-full rounded" />
                <SkeletonLoader className="h-5 w-full rounded" />
                <SkeletonLoader className="h-5 w-3/4 rounded" />
              </div>
              <div className="space-y-2">
                <SkeletonLoader className="h-6 w-32 rounded" />
                <SkeletonLoader className="h-5 w-full rounded" />
                <SkeletonLoader className="h-5 w-5/6 rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <SkeletonLoader className="h-8 w-56 rounded-lg" />
          <div className="space-y-2">
            <SkeletonLoader className="h-5 w-2/3 rounded" />
            <ul className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <li key={i} className="flex items-center gap-2 pl-6">
                  <span className="bg-foreground/40 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <SkeletonLoader className="h-5 flex-1 rounded" />
                </li>
              ))}
            </ul>
            <SkeletonLoader className="h-5 w-24 rounded" />
            <SkeletonLoader className="h-5 w-full rounded" />
            <SkeletonLoader className="h-5 w-full rounded" />
            <SkeletonLoader className="h-5 w-4/5 rounded" />
          </div>
        </div>
        <div className="space-y-3">
          <SkeletonLoader className="h-8 w-40 rounded-lg" />
          <SkeletonLoader className="h-5 w-full rounded" />
          <SkeletonLoader className="h-5 w-5/6 rounded" />
        </div>
      </div>
    </section>
  );
}
