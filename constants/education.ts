import { MainSectionItem } from "@/types/main-section";
import { ExternalUrls } from "./urls";
import { Globe02Icon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { ImagePaths } from "./image-paths";

export const Education: MainSectionItem[] = [
  {
    name: "FAST National University",
    href: ExternalUrls.FASTNationalUniversity,
    logo: ImagePaths.Education.FastNationalUniversityLogo,
    companySocials: [
      {
        href: ExternalUrls.FASTNationalUniversityLinkedIn,
        hugeIcon: Linkedin02Icon,
      },
      {
        href: ExternalUrls.FASTNationalUniversity,
        hugeIcon: Globe02Icon,
      },
    ],
    details: [
      {
        role: "BS Computer Science",
        start: "Aug 2022",
        end: "May 2026 (Hopefully 🤞🏻)",
        points: [
          "Pursuing a Bachelor's degree in Computer Science with a focus on full stack development.",
        ],
      },
    ],
  },
  {
    name: "Beaconhouse College Programme",
    href: ExternalUrls.BeaconhouseCollege,
    logo: ImagePaths.Education.BeaconhouseLogo,
    companySocials: [
      {
        href: ExternalUrls.BeaconhouseLinkedIn,
        hugeIcon: Linkedin02Icon,
      },
      {
        href: ExternalUrls.BeaconhouseCollege,
        hugeIcon: Globe02Icon,
      },
    ],
    details: [
      {
        role: "A Levels - Biology Major",
        start: "Aug 2020",
        end: "May 2022",
        points: [
          "Graduated with a gold medal (🏅) - Biology, Chemistry, Physics, Mathematics.",
        ],
      },
    ],
  },
  {
    name: "Beaconhouse School System",
    href: ExternalUrls.BeaconhouseSchoolSystem,
    logo: ImagePaths.Education.BeaconhouseLogo,
    companySocials: [
      {
        href: ExternalUrls.BeaconhouseLinkedIn,
        hugeIcon: Linkedin02Icon,
      },
      {
        href: ExternalUrls.BeaconhouseSchoolSystem,
        hugeIcon: Globe02Icon,
      },
    ],
    details: [
      {
        role: "O Levels - Science Major",
        start: "Aug 2017",
        end: "May 2020",
        points: [
          "Built a strong academic foundation in sciences, with particular strengths in Biology and Additional Mathematics.",
        ],
      },
    ],
  },
];
