import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://nicklasbekkevold.com",
    title: "nicklasbekkevold.com",
    description: "Independent internet magazine featuring thoughts and reflections at the intersection of science, technology, and society.",
    author: "Nicklas Bekkevold",
    profile: "https://nicklasbekkevold.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Oslo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
      // url: "https://github.com/nicklasbekkevold/website/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/nicklasbekkevold" },
    { name: "linkedin", url: "https://www.linkedin.com/in/nicklasbekkevold" },
    { name: "orcid",    url: "https://orcid.org/0009-0004-1437-1109" },
    { name: "rss",      url: "https://nicklasbekkevold.com/rss.xml" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
