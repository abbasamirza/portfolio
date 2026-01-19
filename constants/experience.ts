import { MainSectionItem } from "@/types/main-section";
import { ImagePaths } from "./image-paths";
import { ExternalUrls } from "./urls";
import { Globe02Icon, Linkedin02Icon } from "@hugeicons/core-free-icons";

export const Experience: MainSectionItem[] = [
  {
    name: "Avialdo Solutions",
    href: ExternalUrls.AvialdoSolutions,
    logo: ImagePaths.Work.AvialdoSolutionsLogo,
    companySocials: [
      {
        href: ExternalUrls.AvialdoSolutionsLinkedIn,
        hugeIcon: Linkedin02Icon,
      },
      {
        href: ExternalUrls.AvialdoSolutions,
        hugeIcon: Globe02Icon,
      },
    ],
    details: [
      {
        role: "Frontend Engineer",
        start: "Jul 2025",
        end: "Present",
        points: [
          "Single handedly optimized and completed a Next.js, Python Django, GraphQL project.",
          "Led a team to complete multiple modules across different technologies.",
        ],
      },
      {
        role: "Junior Frontend Developer",
        start: "Jun 2023",
        end: "Jun 2025",
        points: [
          "Worked mainly on writing test cases using jest library for the project built on Next.js.",
          "Refactored and optimized code to improve performance significantly.",
        ],
      },
    ],
  },
  {
    name: "Avialdo Solutions",
    href: ExternalUrls.AvialdoSolutions,
    logo: ImagePaths.Work.AvialdoSolutionsLogo,
    companySocials: [
      {
        href: ExternalUrls.AvialdoSolutionsLinkedIn,
        hugeIcon: Linkedin02Icon,
      },
      {
        href: ExternalUrls.AvialdoSolutions,
        hugeIcon: Globe02Icon,
      },
    ],
    details: [
      {
        role: "Software Quality Assurance Tester",
        start: "Jun 2022",
        end: "Aug 2022",
        points: [
          "Manually tested web applications, backend services and mobile applications.",
          "Identified critical bug and got recognized as the employee of the quarter.",
        ],
      },
    ],
  },
] as const;
