// Types
import type { HomeContent } from "@/domain/content";
// Assets
import { People } from "@/assets";

export const homeContent: HomeContent = {
  seo: {
    title:
      "Barito Bahalap Agency | Software and strategic communications from Central Kalimantan",
    description:
      "Barito Bahalap Agency is based in Palangka Raya. Barito Bahalap Tech builds and maintains digital systems. Barito Bahalap Media handles strategic communications, content, and multimedia production.",
  },

  hero: {
    eyebrow: "Palangka Raya, Central Kalimantan",
    headline: "Digital systems & strategic communications.",
    subhead:
      "From software and dashboards to publications and multimedia, we help organizations work and communicate better.",
    primaryCta: { label: "Explore our services", href: "/en/#divisions" },
    secondaryCta: { label: "Contact us", href: "/en/#contact" },
  },

  about: {
    eyebrow: "About BBA",
    title: "About BBA",
    paragraphs: [
      "BBA oversees two units: Barito Bahalap Tech for software engineering and Barito Bahalap Media for strategic communications.",
      "At the holding level, BBA handles strategy, contracts, finance, legal compliance, and reputational risk. Technical decisions and editorial decisions remain with the respective divisions.",
    ],
    stats: [
      {
        value: "3",
        label: "Systems built and maintained",
        note: "By Barito Bahalap Tech.",
      },
      {
        value: "2",
        label: "Operating units",
        note: "Separate teams, clients, and data.",
      },
      {
        value: "2026",
        label: "Founded in Palangka Raya",
        note: "Serving clients in Central Kalimantan and East Java.",
      },
    ],
  },

  divisions: {
    eyebrow: "Our divisions",
    title: "Two units, each with its own responsibilities.",
    intro:
      "Each division has its own identity, team, client accounts, and decision-making authority. Client information stays within the division that serves them unless the client expressly agrees otherwise.",
    items: [
      {
        id: "bbt",
        brand: "tech",
        name: "Barito Bahalap Tech",
        badge: "BBT",
        descriptor: "Technology and digital infrastructure",
        summary:
          "We design, build, and maintain the systems that support an organization's operations. BBT works for the long term, so support continues after a system launches.",
        capabilities: [
          {
            iconName: "codeSlash",
            title: "Custom software and internal systems",
            description:
              "Applications and information systems built around the way your organization works.",
          },
          {
            iconName: "pieChartFill",
            title: "Operational dashboards",
            description:
              "Internal data and reporting brought together in one place, with monitoring and analytics.",
          },
          {
            iconName: "barChart",
            title: "Automation and integration",
            description:
              "Manual processes are automated and standalone platforms are connected. Technical support continues through a retainer arrangement.",
          },
        ],
        trackRecordTitle: "Already running in production",
        trackRecord: [
          {
            project: "RSO2 Telkom Dashboard",
            client: "PT Telkom Indonesia, Regional 3, Surabaya",
            scope:
              "Analytics and operational dashboard with internal data and automated reporting. Operating under a retainer arrangement.",
          },
          {
            project: "E-Palugada",
            client: "Kasongan, Central Kalimantan",
            scope: "Web-based delivery service platform for the local market.",
          },
          {
            project: "AMPI Kalteng website",
            client: "DPD AMPI Kalteng",
            scope:
              "A single platform for organizational information, programs, news, documents, media, partner registration, and public submissions.",
          },
        ],
        note: {
          title: "Technical authority",
          body: "The BBT Delivery Lead decides system architecture, development approach, and maintenance priorities.",
        },
        cta: { label: "Discuss a BBT project", href: "/en/#contact" },
      },
      {
        id: "bbm",
        brand: "media",
        name: "Barito Bahalap Media",
        badge: "BBM",
        descriptor: "Media and strategic communications",
        summary:
          "Strategic communications, content, and publication management for organizations and institutions. Our scope runs from message planning and media relations to multimedia production.",
        capabilities: [
          {
            iconName: "megaphone",
            title: "Strategic communications",
            description:
              "Institutional message planning, public communications, and media relations.",
          },
          {
            iconName: "newspaper",
            title: "Content and editorial",
            description:
              "Copywriting, editorial services, content calendars, and publication management.",
          },
          {
            iconName: "imageAlt",
            title: "Multimedia production",
            description:
              "Photo, video, and graphics, with social media strategy as a supporting service.",
          },
        ],
        statusNote:
          "BBM is still in its early stage. We will showcase its portfolio once projects are completed and clients give their approval.",
        note: {
          title: "Editorial independence",
          body: "The BBM Creative Lead decides content, narrative, and publication schedule. The BBA Director oversees contracts, finance, legal compliance, and reputational risk, but does not take part in day-to-day editorial decisions. Press publishing activities follow Law No. 40 of 1999 on the Press and the applicable journalistic code of ethics.",
        },
        cta: { label: "Discuss a BBM collaboration", href: "/en/#contact" },
      },
    ],
  },

  approach: {
    eyebrow: "Our approach",
    title: "How we work",
    intro:
      "These four commitments are built into the way we operate. Procurement, legal, and compliance teams can review them directly.",
    items: [
      {
        iconName: "box",
        title: "Separated by design",
        description:
          "BBT and BBM each have their own unit, team, client accounts, and working data. Cross-division access is granted only on a need-to-know basis.",
      },
      {
        iconName: "filePdf",
        title: "Clear scope",
        description:
          "Every engagement rests on a written agreement covering scope, responsibilities, schedule, and dispute resolution. Every function has a clear decision-maker.",
      },
      {
        iconName: "lock",
        title: "Confidentiality as standard",
        description:
          "Only personnel handling an engagement can access that client's information. Information does not move between divisions without the client's express consent.",
      },
      {
        iconName: "shieldFillCheck",
        title: "Oversight at the holding level",
        description:
          "BBA monitors contractual, legal, and reputational risk. Technical and editorial decisions remain with the respective divisions.",
      },
    ],
  },

  leadership: {
    eyebrow: "Leadership",
    title: "Who is accountable",
    intro:
      "Governance rests with the Co-founders and the Director. Technical and editorial decisions rest with the division leads.",
    people: [
      {
        id: "basilius-tengang",
        name: "Basilius Tengang",
        role: "SUPER_ADMIN",
        title: "CEO & Tech Delivery Lead",
        bio: "Leads corporate governance and strategy while overseeing technology project delivery.",
        published: true,
        photoSrc: People.basil,
      },
      {
        id: "fredy-berdani",
        name: "Fredy Berdani",
        role: "ADMIN",
        title: "Media Creative Lead",
        bio: "Leads the creative team and shapes the direction of content, news, and publications.",
        published: true,
        photoSrc: People.fredy,
      },
      {
        id: "aric-krisnayar",
        name: "Aric Krisnayar",
        role: "ADMIN",
        title: "Business Development",
        bio: "Oversees business development and relationships with prospective clients.",
        published: true,
        photoSrc: People.aric,
      },
      {
        id: "rabel-batubara",
        name: "Rabel Gabriel Batubara",
        role: "ADMIN",
        title: "Legal & Compliance",
        bio: "Handles legal documentation, corporate legal affairs, and regulatory compliance.",
        published: true,
        photoSrc: People.rabel,
      },
      {
        id: "karel-jocom",
        name: "Karel Immanuel F. Jocom",
        role: "ADMIN",
        title: "Public Relations",
        bio: "Manages public & institutional relations and communications.",
        published: true,
        photoSrc: People.karel,
      },
    ],
    authorityTitle: "Decision authority",
    authority: [
      {
        brand: "tech",
        iconName: "codeSlash",
        title: "Tech Delivery Lead",
        description:
          "Decides system architecture, development methodology, and maintenance priorities.",
      },
      {
        brand: "media",
        iconName: "newspaper",
        title: "Media Creative Lead",
        description: "Decides content, narrative, and publication schedule.",
      },
    ],
  },

  careers: {
    eyebrow: "Careers",
    title: "Two teams, built one hire at a time.",
    body: "BBT and BBM hire independently. There are no open positions at the moment. If you would like to introduce yourself and your work, we would be glad to read it.",
    cta: { label: "Careers at BBA", href: "/en/careers" },
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us what you need.",
    intro:
      "Tell us about your needs. This form will open a message in your email app.",
  },
};
