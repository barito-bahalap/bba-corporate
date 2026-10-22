import { siteConfig } from "@barito-bahalap/config";
import type { CareersContent } from "@/domain/content";

export const careersContent: CareersContent = {
  seo: {
    title: "Careers",
    description:
      "Careers at Barito Bahalap Agency. There are no open positions at the moment, but we welcome introductions from people who want to join our team in Palangka Raya.",
  },
  title: "Careers",
  intro:
    "We are building a technical team and a creative team. The people who join early help shape how we work.",
  openings: {
    title: "There are no open positions at the moment.",
    sub: "Introduce yourself anyway. We keep every application on file and will contact you when a suitable position opens.",
  },
  hiringTitle: "How to apply",
  hiringParagraphs: [
    "Send an email with a short introduction and a link to your work, such as a repository, portfolio, writing, or video production.",
    "Also tell us which area you are aiming for and the city where you live.",
  ],
  rolesTitle: "Roles we need",
  rolesIntro:
    "Each division hires for its own team. This list shows roles we have or will need, not necessarily ones that are open right now.",
  roleGroups: [
    {
      brand: "tech",
      division: "Barito Bahalap Tech",
      roles: [
        "UI/UX Designer",
        "Software Developer (Frontend)",
        "Software Developer (Backend)",
        "Quality Assurance",
      ],
    },
    {
      brand: "media",
      division: "Barito Bahalap Media",
      roles: [
        "Content and Copywriting",
        "Graphic Design and Multimedia",
        "Photography and Videography",
        "Account and Relationship Contact",
      ],
    },
  ],
  cta: {
    title: "Introduce yourself",
    body: "Send a short note and a link to your work. Tell us which area you are aiming for.",
    primary: {
      label: "Send an email",
      href: `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Introduction: careers")}`,
    },
  },
};
