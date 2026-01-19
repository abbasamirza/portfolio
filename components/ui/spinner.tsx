import { cn } from "@/lib/utils";
import { Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface Props {
  className?: string;
}

export const Spinner = ({ className }: Props) => {
  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      className={cn("animate-spin", className)}
    />
  );
};
