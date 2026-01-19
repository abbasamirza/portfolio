import { Card, CardContent } from "@/components/ui/card";
import { MainSectionListItem } from "./main-section-list-item";
import { Education } from "@/constants/education";

export const EducationSection = () => {
  return (
    <Card>
      <CardContent>
        {Education.map((edu, index) => (
          <MainSectionListItem key={index} item={edu} />
        ))}
      </CardContent>
    </Card>
  );
};
