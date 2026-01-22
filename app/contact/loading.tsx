import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { ButtonSkeleton } from "@/components/skeletons/button-skeleton";
import { InputSkeleton } from "@/components/skeletons/input-skeleton";

export default function Loading() {
  return (
    <>
      <section>
        <div className="flex items-center gap-x-2">
          <SkeletonLoader className="h-10 w-64 rounded-lg sm:h-12 sm:w-80" />
          <SkeletonLoader className="size-8 rounded" />
        </div>
      </section>
      <form className="space-y-4 min-[896px]:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputSkeleton />
          <InputSkeleton />
        </div>
        <div className="space-y-2">
          <SkeletonLoader className="h-4 w-20 rounded" />
          <div className="border-border space-y-2 rounded-lg border p-3">
            <SkeletonLoader className="h-24 w-full rounded" />
            <div className="flex justify-end">
              <SkeletonLoader className="h-4 w-32 rounded" />
            </div>
          </div>
        </div>
        <SkeletonLoader className="h-4 w-80 rounded" />
        <ButtonSkeleton fullWidth />
      </form>
    </>
  );
}
