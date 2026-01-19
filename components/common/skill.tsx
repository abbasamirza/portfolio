import { cn } from "@/lib/utils";
import { type Skill as SkillType } from "@/types/hero";
import { HugeiconsIcon } from "@hugeicons/react";

interface Props {
  skill: SkillType;
}

export const Skill = ({ skill }: Props) => {
  return (
    <span
      className={cn(
        "bg-foreground/5 dark:bg-foreground/20 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5",
        skill.className,
      )}
    >
      {skill.hugeIcon ? (
        <HugeiconsIcon icon={skill.hugeIcon} className="size-4" />
      ) : (
        <skill.icon className="size-4" />
      )}
      {skill.name}
    </span>
  );
};
