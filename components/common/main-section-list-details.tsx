import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { MainSectionItem } from "@/types/main-section";
import { HugeiconsIcon } from "@hugeicons/react";

interface Props {
  item: MainSectionItem;
}

export const MainSectionListDetails = ({ item }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between gap-x-4 pr-8">
        <Link
          href={item.href}
          className="w-fit hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="h2">{item.name}</Typography>
        </Link>
        {item?.companySocials && item.companySocials.length > 0 && (
          <div className="flex items-center gap-x-3">
            {item.companySocials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social?.hugeIcon ? (
                  <HugeiconsIcon
                    icon={social.hugeIcon}
                    className="text-muted-foreground hover:text-foreground size-5"
                  />
                ) : (
                  <social.icon className="text-muted-foreground hover:text-foreground size-5" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {item.details.map((detail, index) => (
          <div key={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <Typography className="font-medium">{detail.role}</Typography>
              <time className="text-muted-foreground pr-8 whitespace-nowrap tabular-nums">
                <span>{detail.start}</span>
                <span> - </span>
                <span>{detail.end}</span>
              </time>
            </div>
            <ul className="mt-2 ml-4 list-outside list-disc dark:text-gray-200">
              {detail.points.map((point, pointIndex) => (
                <li key={pointIndex} className="pr-8 text-sm leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
