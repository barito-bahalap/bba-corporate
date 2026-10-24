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
    primaryCta: {
      label: "Explore our services",
      href: "/",
      section: "divisions",
    },
    secondaryCta: { label: "Contact us", href: "/", section: "contact" },
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
