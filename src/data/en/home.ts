// Types
import type { HomeContent } from "@/domain/content";
// Assets
import { People } from "@/assets";

export const homeContent: HomeContent = {
  seo: {
    title:
      "Barito Bahalap Agency | Enterprise software and strategic communications",
    description:
      "Barito Bahalap Agency is an independent holding company in Palangka Raya, Central Kalimantan. Barito Bahalap Tech builds enterprise software. Barito Bahalap Media runs strategic communications.",
  },

  hero: {
    eyebrow: "Independent holding company · Palangka Raya",
    headline: "Systems that run. Messages that land.",
    subhead:
      "Barito Bahalap Agency is an independent holding company from Central Kalimantan. Barito Bahalap Tech builds and maintains enterprise software. Barito Bahalap Media runs strategic communications. Separate teams, client accounts and data, held to one standard of accountability.",
    primaryCta: { label: "Meet the two units", href: "/#divisions" },
    secondaryCta: { label: "Talk to us", href: "/#contact" },
  },

  about: {
    eyebrow: "About BBA",
    title: "One holding company. Two disciplines, kept apart on purpose.",
    paragraphs: [
      "Barito Bahalap Agency (BBA) was founded in 2026 in Palangka Raya. It holds two operating brands: Barito Bahalap Tech for software engineering, and Barito Bahalap Media for strategic communications.",
      "BBA keeps to corporate functions: strategy, contracts, finance, legal compliance, and risk and reputation. It makes no technical decisions for BBT and no editorial decisions for BBM. That separation protects clients on both sides from conflicts of interest.",
    ],
    stats: [
      {
        value: "3",
        label: "Systems delivered and maintained",
        note: "By Barito Bahalap Tech.",
      },
      {
        value: "2",
        label: "Operating brands",
        note: "Separate teams, client accounts and data.",
      },
      {
        value: "2026",
        label: "Founded in Palangka Raya",
        note: "Working with clients in Central Kalimantan and East Java.",
      },
    ],
  },

  divisions: {
    eyebrow: "Our divisions",
    title: "Two brands. Each answers for its own work.",
    intro:
      "Each division has its own identity, team, client accounts and decision authority. Client information stays inside the division that serves the client, unless the client explicitly agrees otherwise.",
    items: [
      {
        id: "bbt",
        brand: "tech",
        name: "Barito Bahalap Tech",
        badge: "BBT",
        descriptor: "Technology and digital infrastructure",
        summary:
          "Designs, builds and maintains the digital systems organizations run on. BBT stays on as a long-term infrastructure partner, not a one-off web developer.",
        capabilities: [
          {
            iconName: "codeSlash",
            title: "Custom software and internal systems",
            description:
              "Enterprise applications and information systems built around how your organization actually works.",
          },
          {
            iconName: "pieChartFill",
            title: "Operational dashboards",
            description:
              "Analytics and monitoring that bring internal data and reporting into one place.",
          },
          {
            iconName: "barChart",
            title: "Automation and integration",
            description:
              "Process automation and platform integration, backed by long-term technical support under a retainer.",
          },
        ],
        trackRecordTitle: "In production, under retainer",
        trackRecord: [
          {
            project: "RSO2 Telkom Dashboard",
            client: "PT Telkom Indonesia, Regional 3, Surabaya",
            scope:
              "Analytical and operational dashboard with internal data and automated reporting. Ongoing retainer.",
          },
          {
            project: "E-Palugada",
            client: "Kasongan, Central Kalimantan",
            scope:
              "Web-based delivery platform designed for the local market. Ongoing retainer.",
          },
          {
            project: "AMPI Kalteng website",
            client: "DPD AMPI Kalteng",
            scope:
              "One platform for organization information, programs, news, documents, media, partner registration and public submissions. Ongoing retainer.",
          },
        ],
        note: {
          title: "Technical authority",
          body: "System architecture, development approach and maintenance priorities are decided by the BBT Delivery Lead.",
        },
        cta: { label: "Discuss a BBT project", href: "/#contact" },
      },
      {
        id: "bbm",
        brand: "media",
        name: "Barito Bahalap Media",
        badge: "BBM",
        descriptor: "Media and strategic communications",
        summary:
          "Strategic communications, content and publication management for organizations and institutions. A professional communications operation, not only a social media service.",
        capabilities: [
          {
            iconName: "megaphone",
            title: "Strategic communications",
            description:
              "Institutional message planning, public communication and media relations.",
          },
          {
            iconName: "newspaper",
            title: "Content and editorial operations",
            description:
              "Copywriting, editorial services, content calendars and publication management.",
          },
          {
            iconName: "imageAlt",
            title: "Multimedia production",
            description:
              "Photography, videography and graphic production, supported by social media strategy.",
          },
        ],
        statusNote:
          "BBM is in its early operational phase. Its portfolio will be published as engagements are completed and clients consent.",
        note: {
          title: "Editorial independence",
          body: "Content, narrative and publication schedule are decided by the BBM Creative Lead. The BBA Founder and Director oversees contracts, finance, legal compliance and reputational risk, and takes no part in day-to-day editorial decisions. Press publication activities follow Law No. 40 of 1999 on the Press and the applicable journalistic code of ethics.",
        },
        cta: { label: "Discuss a BBM engagement", href: "/#contact" },
      },
    ],
  },

  approach: {
    eyebrow: "Our approach",
    title: "How we work",
    intro:
      "These commitments are built into how the organization operates, so procurement, legal and compliance teams can review them.",
    items: [
      {
        iconName: "box",
        title: "Separation by design",
        description:
          "BBT and BBM have separate brands, teams, client accounts and working data. Cross-division access is need-to-know only.",
      },
      {
        iconName: "filePdf",
        title: "Defined scope and accountability",
        description:
          "Every engagement rests on a written agreement covering scope, responsibilities, timeline and dispute resolution. Every function has a named decision owner.",
      },
      {
        iconName: "lock",
        title: "Confidentiality by default",
        description:
          "Only the people working on an engagement can access that client's information. It does not cross divisions without the client's explicit agreement.",
      },
      {
        iconName: "shieldFillCheck",
        title: "Compliance and oversight",
        description:
          "Contractual, legal and reputational risk is overseen at holding level, without overriding technical or editorial decisions in either division.",
      },
    ],
  },

  leadership: {
    eyebrow: "Leadership",
    title: "Who is accountable",
    intro:
      "Governance sits with the Founder and Director. Technical and editorial decisions sit with the division leads.",
    people: [
      {
        id: "basilius-tengang",
        name: "Basilius Tengang",
        role: "SUPER_ADMIN",
        title: "Co-founder & CEO",
        bio: "Oversees corporate governance, strategy, contracts, finance, legal compliance and reputational risk for BBA.",
        published: true,
        photoSrc: People.basil,
      },
    ],
    authorityTitle: "Decision authority",
    authority: [
      {
        brand: "tech",
        iconName: "codeSlash",
        title: "Delivery Lead, BBT",
        description:
          "Decides system architecture, development methodology and maintenance priorities.",
      },
      {
        brand: "media",
        iconName: "newspaper",
        title: "Creative Lead, BBM",
        description: "Decides content, narrative and publication schedule.",
      },
    ],
  },

  careers: {
    eyebrow: "Careers",
    title: "Building two teams, one division at a time.",
    body: "BBT and BBM hire independently. Nothing is open right now, but you are welcome to introduce yourself and the work you do.",
    cta: { label: "Careers at BBA", href: "/careers" },
  },

  contact: {
    eyebrow: "Contact",
    title: "Start a conversation.",
    intro:
      "Tell us about your organization and which division your enquiry concerns. The form prepares a message in your email app, addressed to BBA.",
  },
};
