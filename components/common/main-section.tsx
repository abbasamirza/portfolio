"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomePageViews } from "@/constants/views";
import { usePageView } from "@/hooks/use-page-view";
import { HomePageView } from "@/types/views";
import { WorkSection } from "./work-section";
import { EducationSection } from "./education-section";

export const MainSection = () => {
  const { homePageView, setPageView } = usePageView();

  return (
    <Tabs
      value={homePageView}
      onValueChange={(value) =>
        setPageView({
          page: "homePageView",
          view: value as HomePageView,
        })
      }
    >
      <TabsList className="w-full">
        <TabsTrigger value={HomePageViews.Work}>
          {HomePageViews.Work}
        </TabsTrigger>
        <TabsTrigger value={HomePageViews.Education}>
          {HomePageViews.Education}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={HomePageViews.Work}>
        <WorkSection />
      </TabsContent>
      <TabsContent value={HomePageViews.Education}>
        <EducationSection />
      </TabsContent>
    </Tabs>
  );
};
