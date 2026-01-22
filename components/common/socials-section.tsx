import Link from "next/link";
import {
  Download01Icon,
  Github,
  Linkedin02Icon,
  Mail01Icon,
  Pdf02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { ExternalUrls, Urls } from "@/constants/urls";

interface Props {
  hideResumeText?: boolean;
}

export const SocialsSection = ({ hideResumeText = false }: Props) => {
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
      <Link
        href={Urls.Resume}
        className="rounded-md"
        download
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="outline" size="lg">
          {!hideResumeText && "Resume"}
          <HugeiconsIcon
            icon={hideResumeText ? Pdf02Icon : Download01Icon}
            className="size-4"
          />
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
