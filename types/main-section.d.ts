interface BaseCompanySocial {
  href: string;
}

type CompanySocial =
  | (BaseCompanySocial & {
      icon: JSX.Element;
      hugeIcon?: never;
    })
  | (BaseCompanySocial & {
      icon?: never;
      hugeIcon: IconSvgElement;
    });

export interface MainSectionDetailItem {
  role: string;
  start: string;
  end: string;
  points: string[];
}

export interface MainSectionItem {
  name: string;
  href: string;
  logo: string;
  details: MainSectionDetailItem[];
  companySocials?: CompanySocial[];
}
