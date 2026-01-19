import { IconSvgElement } from "@hugeicons/react";

interface BaseSkill {
  name: string;
  className: string;
}

export type Skill =
  | (BaseSkill & {
      icon: JSX.Element;
      hugeIcon?: never;
    })
  | (BaseSkill & {
      icon?: never;
      hugeIcon: IconSvgElement;
    });
