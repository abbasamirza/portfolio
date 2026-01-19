import Image from "next/image";
import Link from "next/link";
import { MainSectionListDetails } from "./main-section-list-details";
import { MainSectionItem } from "@/types/main-section";

interface Props {
  item: MainSectionItem;
}

export const MainSectionListItem = ({ item }: Props) => {
  return (
    <ul className="ml-10 border-l">
      <li className="relative ml-10 py-4">
        <Link
          href={item.href}
          className="bg-background absolute top-4 -left-16 flex items-center justify-center rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border">
            <Image
              src={item.logo}
              alt={item.name}
              className="bg-background aspect-square h-full w-full object-contain"
              fill
            />
          </span>
        </Link>
        <div className="flex flex-1 flex-col justify-start gap-2">
          <MainSectionListDetails item={item} />
        </div>
      </li>
    </ul>
  );
};
