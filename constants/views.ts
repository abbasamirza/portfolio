import { HomePageView } from "@/types/views";

export const HomePageViews = {
  Work: "Work",
  Education: "Education",
} as const;

export const DefaultHomePageView: HomePageView = HomePageViews.Work;
