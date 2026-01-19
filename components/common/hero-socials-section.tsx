import Link from "next/link";
import {
  Download01Icon,
  Github,
  Linkedin02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { ExternalUrls } from "@/constants/urls";

export const HeroSocialsSection = () => {
  const socials = [
    {
      href: ExternalUrls.Linkedin,
      icon: Linkedin02Icon,
    },
    {
      href: ExternalUrls.Github,
      icon: Github,
    },
    {
      href: ExternalUrls.Email,
      icon: Mail01Icon,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <Link href="/resume.pdf" className="rounded-md">
        <Button variant="outline" size="lg">
          Resume
          <HugeiconsIcon icon={Download01Icon} className="size-4" />
        </Button>
      </Link>
      {socials.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <HugeiconsIcon icon={social.icon} className="size-5" />
          </Button>
        </Link>
      ))}
    </div>
  );
};
