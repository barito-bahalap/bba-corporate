import { siteConfig } from "@barito-bahalap/config";
import type { LegalContent } from "@/domain/content";

export const privacyContent: LegalContent = {
  seo: {
    title: "Privacy Policy",
    description:
      "How Barito Bahalap Agency handles personal information collected through this website.",
    path: "/privacy",
  },
  title: "Privacy Policy",
  updated: "October 2026",
  intro:
    "This policy explains what personal information Barito Bahalap Agency collects through this website, why, and the choices you have.",
  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      paragraphs: [
        `${siteConfig.legalName} (BBA) is a holding organization based in ${siteConfig.location}. BBA is responsible for the personal information described in this policy.`,
        `You can contact us at ${siteConfig.contactEmail}.`,
      ],
    },
    {
      id: "information-we-collect",
      heading: "Information we collect",
      paragraphs: [
        "This website is a static site. It has no user accounts and does not store what you type into the contact form.",
      ],
      items: [
        "Information you send us. When you email us, or use the contact form to prepare an email, we receive the details you choose to include, such as your name, organization, email address and message.",
        "Technical data. Our hosting provider may log standard request data such as IP address, browser type and pages requested, for security and reliable operation.",
        "Fonts. This site loads fonts from Google Fonts, so your browser requests them from Google servers and Google receives your IP address.",
        "Cookies and tracking. This site does not set its own cookies and does not use advertising or analytics trackers.",
      ],
    },
    {
      id: "how-we-use-information",
      heading: "How we use information",
      items: [
        "To respond to your enquiry and discuss a possible engagement.",
        "To keep our records of business correspondence and contracts.",
        "To meet legal, regulatory and accounting obligations.",
      ],
    },
    {
      id: "division-separation",
      heading: "Separation between divisions",
      paragraphs: [
        "Under BBA's operational separation policy, information about an enquiry for Barito Bahalap Tech is handled by BBT personnel, and information about an enquiry for Barito Bahalap Media is handled by BBM personnel. We do not share it with the other division without your explicit consent.",
      ],
    },
    {
      id: "sharing",
      heading: "Sharing information",
      paragraphs: [
        "We do not sell personal information. We share it only with service providers that help us operate, such as hosting and email providers, and where the law requires it.",
      ],
    },
    {
      id: "retention",
      heading: "Retention",
      paragraphs: [
        "We keep correspondence for as long as needed to handle your enquiry, perform any resulting contract, and meet legal obligations. After that we delete it or anonymize it.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      paragraphs: [
        "Under Law No. 27 of 2022 on Personal Data Protection, you may ask to access, correct or delete your personal data, to withdraw consent you have given, and to object to certain processing. To exercise these rights, email us and tell us what you would like us to do.",
      ],
    },
    {
      id: "security",
      heading: "Security",
      paragraphs: [
        "We limit access to correspondence to the personnel who need it and use reasonable technical and organizational measures. No method of transmission over the internet is completely secure.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy as our website or legal obligations change. The date at the top shows when it was last revised.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        `Questions about this policy can be sent to ${siteConfig.contactEmail}.`,
      ],
    },
  ],
};
