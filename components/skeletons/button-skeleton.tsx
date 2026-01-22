import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
}

export const ButtonSkeleton = ({
  className,
  fullWidth = false,
  ...props
}: Props) => {
  return (
    <SkeletonLoader
      className={cn(
        "h-10 rounded-lg",
        fullWidth ? "w-full" : "w-32",
        className,
      )}
      {...props}
    />
  );
};
