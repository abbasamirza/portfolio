import { Card, CardContent } from "@/components/ui/card";
import { MainSectionListItem } from "./main-section-list-item";
import { Experience } from "@/constants/experience";

export const WorkSection = () => {
  return (
    <Card>
      <CardContent>
        {Experience.map((exp, index) => (
          <MainSectionListItem key={index} item={exp} />
        ))}
      </CardContent>
    </Card>
  );
};
