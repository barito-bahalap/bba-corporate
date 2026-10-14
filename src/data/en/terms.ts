import { siteConfig } from "@barito-bahalap/config";
import type { LegalContent } from "@/domain/content";

export const termsContent: LegalContent = {
  seo: {
    title: "Terms of Use",
    description:
      "Terms governing the use of the Barito Bahalap Agency website.",
    path: "/terms",
  },
  title: "Terms of Use",
  updated: "October 2026",
  intro:
    "These terms govern your use of the Barito Bahalap Agency website. By using the site you accept them.",
  sections: [
    {
      id: "scope",
      heading: "Scope",
      paragraphs: [
        `This website is operated by ${siteConfig.legalName} (BBA). It describes BBA as a holding organization and its two operating brands, Barito Bahalap Tech (BBT) and Barito Bahalap Media (BBM).`,
      ],
    },
    {
      id: "information-only",
      heading: "Information only",
      paragraphs: [
        "Content on this site is provided for general information. It is not an offer, a quotation or a contract. Services are provided only under a written agreement between the client and BBA, BBT or BBM, as that agreement states.",
      ],
    },
    {
      id: "separate-brands",
      heading: "Separate brands",
      paragraphs: [
        "BBT and BBM are separate operating brands. Nothing on this site is a combined service offer, and nothing on this site is a press publication. Editorial content published by BBM is decided independently by BBM.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "The text, design, logos and other material on this site belong to BBA or its licensors. You may view and share links to the site, but you may not copy, modify or redistribute its content without written permission.",
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-party links",
      paragraphs: [
        "This site may link to other websites. We do not control them and are not responsible for their content or practices.",
      ],
    },
    {
      id: "accuracy",
      heading: "Accuracy and availability",
      paragraphs: [
        "We try to keep the site accurate and available, but we provide it as is. Content may change without notice, and the site may be unavailable from time to time.",
      ],
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by Indonesian law, BBA is not liable for loss arising from your use of, or reliance on, this website.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Republic of Indonesia. Disputes are first addressed through deliberation between the parties, and failing that before the competent courts in Indonesia.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        "We may revise these terms. The date at the top shows when they were last updated. Continued use of the site means you accept the revised terms.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        `Questions about these terms can be sent to ${siteConfig.contactEmail}.`,
      ],
    },
  ],
};
