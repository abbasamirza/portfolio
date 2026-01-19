import { DjangoIcon } from "@/assets/svgs/django-icon";
import { ExpressJsIcon } from "@/assets/svgs/express-js-icon";
import { NextJsIcon } from "@/assets/svgs/next-js-icon";
import { type Skill as SkillType } from "@/types/hero";
import {
  PythonIcon,
  ReactIcon,
  Typescript01Icon,
} from "@hugeicons/core-free-icons";

export const SpecializedSkills: SkillType[] = [
  {
    name: "Next.js",
    icon: NextJsIcon,
    className: "text-black dark:text-white",
  },
  {
    name: "React",
    hugeIcon: ReactIcon,
    className: "text-cyan-400",
  },
  {
    name: "TypeScript",
    hugeIcon: Typescript01Icon,
    className: "text-sky-600",
  },
] as const;

export const WorkedOnSkills: SkillType[] = [
  {
    name: "Express.js",
    icon: ExpressJsIcon,
    className: "text-black dark:text-white",
  },
] as const;

export const LearningSkills: SkillType[] = [
  {
    name: "Python",
    hugeIcon: PythonIcon,
    className: "text-yellow-500",
  },
  {
    name: "Django",
    icon: DjangoIcon,
    className: "text-emerald-500",
  },
] as const;
