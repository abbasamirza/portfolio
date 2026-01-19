import { Typography } from "@/components/ui/typography";
import { SocialsSection } from "./socials-section";
import Link from "next/link";
import { Urls } from "@/constants/urls";

export const Footer = () => {
  return (
    <footer className="bg-background container flex max-w-4xl items-center justify-between pb-6">
      <Typography className="text-xs sm:text-sm">
        © {new Date().getFullYear()}{" "}
        <Link href={Urls.Home} className="hover:text-foreground">
          abbas.dev
        </Link>
      </Typography>
      <SocialsSection hideResumeText />
    </footer>
  );
};
