export const SITE = {
  website: "https://nicklasbekkevold.com",
  author: "Nicklas Bekkevold",
  profile: "https://nicklasbekkevold.com",
  desc: "Independent internet magazine featuring thoughts and reflections at the intersection of science, technology, and society.",
  title: "nicklasbekkevold.com",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/nicklasbekkevold/website/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code
  timezone: "Europe/Oslo", // IANA format
} as const;
