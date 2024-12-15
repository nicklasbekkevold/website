import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://nicklasbekkevold.com/",
  author: "Nicklas Bekkevold",
  profile: "https://nicklasbekkevold.com/",
  desc: "Personal website, blog, portfolio, playground, ... whatever.",
  title: "nicklasbekkevold.com",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "GitHub",
    href: "https://github.com/nicklasbekkevold",
    linkTitle: ` ${SITE.author} on GitHub`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nicklasbekkevold/",
    linkTitle: `${SITE.author} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nicklasbekkevold/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0004-1437-1109/",
    linkTitle: `${SITE.author}'s ORCID record`,
    active: true,
  },
];
