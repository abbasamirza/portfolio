import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
}

export const InputSkeleton = ({ className, rows, ...props }: Props) => {
  return (
    <div className="space-y-2">
      <SkeletonLoader className="h-4 w-16 rounded" />
      <SkeletonLoader
        className={cn("rounded-lg", rows ? `h-${rows * 6}` : "h-10", className)}
        {...props}
      />
    </div>
  );
};
