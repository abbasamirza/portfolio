import { Typography } from "@/components/ui/typography";
import {
  LearningSkills,
  SpecializedSkills,
  WorkedOnSkills,
} from "@/constants/skills";
import { Skill } from "./skill";
import { type Skill as SkillType } from "@/types/hero";

export const HeroSkillsSection = () => {
  const skillsWrapperClass = "inline-flex flex-wrap items-center gap-x-1";

  const renderSkills = (skillToRender: SkillType[]) => {
    return skillToRender.map((skill, index) => {
      const isLast = index === skillToRender.length - 1;
      const isSecondLast = index === skillToRender.length - 2;
      const isSingle = skillToRender.length === 1;

      if (isSingle) {
        return (
          <span key={skill.name} className="whitespace-nowrap">
            <Skill skill={skill} />.
          </span>
        );
      }

      if (isLast) {
        return (
          <span key={skill.name} className="whitespace-nowrap">
            and <Skill skill={skill} />.
          </span>
        );
      }

      if (isSecondLast) {
        return (
          <span key={skill.name}>
            <Skill skill={skill} />{" "}
          </span>
        );
      }

      return (
        <span key={skill.name}>
          <Skill skill={skill} />,{" "}
        </span>
      );
    });
  };

  return (
    <div className="space-y-1 min-[896px]:space-y-2">
      <Typography className={skillsWrapperClass}>
        <span>Specialize in web development using</span>
        {renderSkills(SpecializedSkills)}
      </Typography>
      <Typography className={skillsWrapperClass}>
        <span>Worked on backend technologies like</span>
        {renderSkills(WorkedOnSkills)}
      </Typography>
      <Typography className={skillsWrapperClass}>
        <span>Exploring</span>
        {renderSkills(LearningSkills)}
      </Typography>
    </div>
  );
};
