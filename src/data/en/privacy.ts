import { siteConfig } from "@barito-bahalap/config";
import type { LegalContent } from "@/domain/content";

export const privacyContent: LegalContent = {
  seo: {
    title: "Privacy Policy",
    description:
      "Privacy Policy of PT Barito Bahalap Agency as personal data controller, under Indonesia's Personal Data Protection Law.",
    path: "/en/privacy",
  },
  title: "Privacy Policy",
  updated: "22 October 2026",
  intro:
    "In this Privacy Policy, we state that Barito Bahalap Agency, as the personal data controller, is committed to the security and protection of its clients' personal data. We comply with applicable laws and regulations, including Law No. 27 of 2022 on Personal Data Protection and its amendments (the PDP Law).",
  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      paragraphs: [
        `${siteConfig.legalName} (BBA) is a holding organization based in ${siteConfig.location}. BBA acts as the personal data controller and is responsible for the personal information described in this policy.`,
        `You can contact us at ${siteConfig.contactEmail}.`,
      ],
    },
    {
      id: "compliance",
      heading: "Mandatory compliance with this policy",
      paragraphs: [
        "Compliance with this Privacy Policy is mandatory. Failure to comply may result in disciplinary action or other action under established procedures. The Company may take any necessary steps, including legal and administrative action, to maintain compliance with this policy.",
      ],
    },
    {
      id: "uu-pdp",
      heading: "Legal basis: the PDP Law",
      paragraphs: [
        "Law No. 27 of 2022 on Personal Data Protection (the PDP Law) regulates principles; types of personal data; the rights of data subjects; personal data processing; the obligations of personal data controllers and processors; transfers of personal data; administrative sanctions; institutions; international cooperation; public participation; dispute resolution and procedural law; prohibitions on the use of personal data; and criminal provisions relating to personal data protection.",
        "Personal data protection means all efforts to protect personal data throughout its processing in order to guarantee the constitutional rights of the data subject.",
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
        "We do not sell personal data. We share it only with service providers that help us operate, such as hosting and email providers, and where the law requires it.",
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
        "Under the PDP Law, as a data subject you may ask to access, correct or delete your personal data, withdraw consent you have given, and object to certain processing. To exercise these rights, email us and tell us what you would like us to do.",
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
      id: "sanctions",
      heading: "Sanctions for violations",
      paragraphs: [
        "The PDP Law provides two tracks of sanctions: administrative sanctions and criminal provisions. For breaches of administrative obligations, Article 57 of the PDP Law provides for:",
      ],
      items: [
        "a written warning;",
        "temporary suspension of personal data processing;",
        "deletion or destruction of personal data; and",
        "an administrative fine of up to 2 (two) percent of the data controller's annual revenue.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy as our website or legal obligations change. The date at the top shows when it was last updated.",
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
