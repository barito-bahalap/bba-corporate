import { siteConfig } from "@barito-bahalap/config";
import type { LegalContent } from "@/domain/content";

export const termsContent: LegalContent = {
  seo: {
    title: "Terms of Use",
    description:
      "The terms governing use of the Barito Bahalap Agency website.",
    path: "/en/terms",
  },
  title: "Terms of Use",
  updated: "23 October 2026",
  intro:
    "These terms govern your use of the Barito Bahalap Agency website. By accessing or using this site, you confirm that you have read and agree to them. If you do not agree, please do not use this site.",
  sections: [
    {
      id: "scope",
      heading: "Scope",
      paragraphs: [
        `This website is operated by ${siteConfig.legalName} (BBA). It describes BBA as a holding organization and its two operating brands, Barito Bahalap Tech (BBT) and Barito Bahalap Media (BBM).`,
        "These terms apply only to use of the website. Working relationships with clients are governed separately by written agreements.",
      ],
    },
    {
      id: "information-only",
      heading: "For information only",
      paragraphs: [
        "The content on this site is provided as general information. It is not an offer, a quotation, professional advice, or a contract. Services are provided only under a written agreement between a client and BBA, BBT or BBM, on the terms set out in that agreement.",
      ],
    },
    {
      id: "separate-brands",
      heading: "Separate brands",
      paragraphs: [
        "BBT and BBM are separate operating brands. Nothing on this site is an offer of combined services, and nothing on this site is a press publication. Editorial content published by BBM is determined independently by BBM.",
      ],
    },
    {
      id: "enquiries",
      heading: "Enquiries and correspondence",
      paragraphs: [
        "Sending an email or using the contact form does not create an engagement, an obligation to respond, or a duty of confidentiality until a written agreement is in place. Please do not send confidential information, sensitive documents, or unnecessary personal data through these channels.",
      ],
    },
    {
      id: "acceptable-use",
      heading: "Acceptable use",
      paragraphs: ["You agree not to:"],
      items: [
        "use this site for any unlawful purpose or in a way that harms others;",
        "interfere with, overload, or attempt to gain unauthorized access to the site, its servers, or connected networks;",
        "introduce malicious code or run vulnerability scans without written permission;",
        "use bots, scrapers, or other automated tools to extract content in bulk without written permission;",
        "state or imply that you are affiliated with, or endorsed by, BBA, BBT or BBM without written consent.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "The text, design, logos, names, brands and other material on this site belong to BBA or its licensors and are protected by applicable Indonesian intellectual property law. You may view the site and share links to it, but you may not copy, modify or redistribute its content, or use our names and logos, without written permission.",
      ],
    },
    {
      id: "privacy",
      heading: "Personal data",
      paragraphs: [
        "The collection and processing of personal data through this site is governed by our Privacy Policy, which forms part of these terms.",
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-party links and services",
      paragraphs: [
        "This site may link to other websites and load resources from third parties, such as fonts. We do not control them and are not responsible for their content, policies or practices. A link does not mean we endorse the site.",
      ],
    },
    {
      id: "accuracy",
      heading: "Accuracy and availability",
      paragraphs: [
        "We try to keep this site accurate and available, but it is provided as is and as available, without warranties of any kind, express or implied. Content may change without notice, and the site may be unavailable, restricted or discontinued at any time.",
      ],
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by Indonesian law, BBA, BBT, BBM and their officers and personnel are not liable for any direct or indirect loss arising from your use of, inability to use, or reliance on this website. Nothing here limits liability that cannot be limited by law.",
      ],
    },
    {
      id: "severability",
      heading: "Severability",
      paragraphs: [
        "If any part of these terms is found to be invalid or unenforceable, the remaining parts continue to apply.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Republic of Indonesia. Disputes shall first be resolved through deliberation between the parties and, failing that, before the competent courts in Indonesia.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        "We may revise these terms from time to time. The date at the top shows when they were last updated. By continuing to use the site, you accept the revised terms.",
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
