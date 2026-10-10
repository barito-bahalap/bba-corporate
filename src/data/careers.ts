import { siteConfig } from "@barito-bahalap/config";
import type { CareersContent } from "@/domain/content";

export const careersContent: CareersContent = {
  seo: {
    title: "Careers",
    description:
      "Careers at Barito Bahalap Agency. BBT and BBM build and manage their teams independently.",
  },
  title: "Careers",
  intro:
    "Barito Bahalap Agency is at an early stage. We are building technical and editorial teams in Palangka Raya, one division at a time.",
  openings: {
    title: "No open positions at the moment.",
    sub: "You are welcome to introduce yourself. We keep applications on file and contact people when a role opens.",
  },
  hiringTitle: "How we hire",
  hiringParagraphs: [
    "BBT and BBM recruit and manage their teams independently. Technical roles report into BBT and editorial and creative roles report into BBM, so that each division keeps its own working practices, client accounts and data.",
    "In your introduction, tell us which division your work relates to, what you have built or produced, and where you are based.",
  ],
  rolesTitle: "Roles in our organization",
  rolesIntro:
    "These are the functions in our organization structure. Listing a role here does not mean it is currently open.",
  roleGroups: [
    {
      brand: "tech",
      division: "Barito Bahalap Tech",
      roles: [
        "Delivery Lead",
        "Software Developer (Backend)",
        "Software Developer (Frontend)",
        "Quality Assurance",
        "UI/UX Designer",
      ],
    },
    {
      brand: "media",
      division: "Barito Bahalap Media",
      roles: [
        "Creative Lead",
        "Content and Copywriting",
        "Graphic and Multimedia Design",
        "Photography and Videography",
        "Account and Relationship Contact",
      ],
    },
  ],
  cta: {
    title: "Introduce yourself",
    body: "Send a short note and links to your work. Please state which division you are writing about.",
    primary: {
      label: "Email us",
      href: `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Introduction: careers")}`,
    },
  },
};
