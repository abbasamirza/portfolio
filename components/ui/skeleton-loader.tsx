import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const SkeletonLoader = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("bg-muted animate-pulse", className)} {...props} />;
};
