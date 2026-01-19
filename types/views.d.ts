import { HomePageViews } from "@/constants/views";

export type HomePageView = (typeof HomePageViews)[keyof typeof HomePageViews];
