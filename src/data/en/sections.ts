import type { SectionsContent } from "@/domain/sections";

export const sectionsEn: SectionsContent = {
  proof: {
    label: "Verified track record",
    items: [
      { value: "3", label: "Client systems built and maintained by BBT" },
      {
        value: "Retainer",
        label: "Ongoing working relationship with PT Telkom Indonesia",
      },
      { value: "2", label: "Separate operating divisions" },
      {
        value: "Kalteng",
        label: "Based in Palangka Raya, Central Kalimantan",
      },
    ],
  },

  doors: {
    eyebrow: "Two units",
    title: "Two units, each with its own expertise",
    intro:
      "BBA is the parent organization. The work is carried out by two separate units, each with its own identity, team, and channels. Choose the one that fits your needs.",
    doors: [
      {
        key: "tech",
        name: "Barito Bahalap Tech",
        discipline: "Software Development",
        statement:
          "A long-term partner for internal systems, operational dashboards, and business process automation.",
        points: [
          "Custom software and information systems",
          "Operational dashboards and reporting automation",
          "Technical support through a retainer arrangement",
        ],
        cta: "Visit Barito Bahalap Tech",
        badgeVariant: "accent",
        url: "https://tech.baritobahalap.com",
      },
      {
        key: "media",
        name: "Barito Bahalap Media",
        discipline: "Media & Strategic Communications",
        statement:
          "Professional communications operations for institutions and public figures. Covers message strategy, media relations, and content production.",
        points: [
          "Strategic communications and media relations",
          "Editorial services and publication management",
          "Multimedia production and social media strategy",
        ],
        cta: "Visit Barito Bahalap Media",
        badgeVariant: "accent",
        url: "https://media.baritobahalap.com",
      },
    ],
  },

  work: {
    eyebrow: "Selected work",
    title: "What we have done and are working on",
    intro:
      "Work is grouped by division. Each entry is a confirmed engagement.",
    imagePlaceholder: "Documentation coming soon",
    tech: {
      label: "Barito Bahalap Tech",
      cases: [
        {
          client: "PT Telkom Indonesia",
          title: "RSO2 Telkom Dashboard",
          location: "Surabaya, East Java",
          summary:
            "Analytics and operational dashboard built around internal workflows and data needs. Includes automated reporting.",
          tags: ["Operational Dashboard", "Reporting Automation"],
          status: "Actively running",
          image: { alt: "Screenshot of the RSO2 Telkom Dashboard" },
        },
        {
          client: "E-Palugada",
          title: "Web-based delivery service platform",
          location: "Kasongan, Central Kalimantan",
          summary:
            "A delivery service platform designed for the needs of the local market in Kasongan.",
          tags: ["Custom Software", "Web Platform"],
          status: "Actively running",
          image: { alt: "Screenshot of the E-Palugada platform" },
        },
        {
          client: "DPD AMPI Kalteng",
          title: "Official website and organizational platform",
          location: "Palangka Raya, Central Kalimantan",
          summary:
            "A single platform for organizational information, work programs, news, documents, media, partner registration, and public input.",
          tags: ["Web Platform", "Information System"],
          status: "Actively running",
          image: { alt: "Screenshot of the AMPI Kalteng official website" },
        },
      ],
    },
    media: {
      label: "Barito Bahalap Media",
      emptyTitle: "Portfolio in progress",
      emptyText:
        "BBM is still in its early stage. We will showcase its work gradually once the first projects are completed and clients give their approval.",
      practiceTitle: "Areas of work",
      practiceAreas: [
        {
          title: "Strategic communications",
          description: "Institutional message planning and public communications.",
        },
        {
          title: "Media relations",
          description: "Managing relationships and correspondence with the media.",
        },
        {
          title: "Content operations",
          description: "Writing, editing, and content calendars.",
        },
        {
          title: "Editorial and publishing",
          description: "Publication management in line with journalistic standards.",
        },
        {
          title: "Multimedia production",
          description: "Photography, videography, and graphic design.",
        },
        {
          title: "Social media strategy",
          description: "Planning and managing social media channels.",
        },
      ],
      principlesTitle: "Editorial principles",
      principles: [
        {
          title: "Accuracy and verification",
          description: "Information is checked before it is published.",
        },
        {
          title: "Balance",
          description:
            "Information is presented in a balanced and accountable way.",
        },
        {
          title: "Independent editorial decisions",
          description:
            "Narrative, content, and publication schedule are decided by the BBM Creative Lead. BBA and BBT clients take no part in determining them.",
        },
      ],
      principlesNote:
        "For activities that count as press publishing, BBM follows Law No. 40 of 1999 on the Press.",
    },
  },

  engage: {
    eyebrow: "How we work together",
    title: "A clear, auditable engagement process",
    intro:
      "Every engagement is bound by a contract that sets out scope, duration, and measurable deliverables.",
    deliverableLabel: "Deliverable",
    steps: [
      {
        title: "Discovery",
        description:
          "We map out your needs, stakeholders, and project constraints.",
        deliverable: "Needs summary",
      },
      {
        title: "Proposal",
        description:
          "Scope of work, cost structure, and contract are prepared to fit the client's procurement requirements.",
        deliverable: "Proposal and draft contract",
      },
      {
        title: "Execution",
        description:
          "Each phase closes with a report that serves as the basis for acceptance.",
        deliverable: "Report per phase",
      },
      {
        title: "Retainer",
        description:
          "Maintenance runs through a retainer arrangement with an agreed service level.",
        deliverable: "Periodic service report",
      },
    ],
  },

  structure: {
    eyebrow: "Structure and governance",
    title: "One owner, two units that operate separately",
    intro:
      "BBT and BBM belong to one business group but work as two separate units. This separation is a governance rule we follow, not a marketing point.",
    diagramLabel: "Structure diagram of BBA, BBT, and BBM",
    holding: {
      name: "Barito Bahalap Agency",
      role: "Parent organization and governance layer",
      items: [
        "Strategy",
        "Contracts",
        "Finance",
        "Legal compliance",
        "Risk and reputation",
      ],
    },
    units: [
      {
        key: "tech",
        name: "Barito Bahalap Tech",
        role: "Technology & Digital Infrastructure",
        items: ["Technical decisions: Tech Delivery Lead", "BBT account channel"],
      },
      {
        key: "media",
        name: "Barito Bahalap Media",
        role: "Media & Strategic Communications",
        items: ["Editorial decisions: Media Creative Lead", "BBM account channel"],
      },
    ],
    governanceTitle: "Separation across six areas",
    governanceIntro:
      "We set the boundary between BBT and BBM in writing. The aim is to protect clients on both sides from conflicts of interest.",
    dimensions: [
      {
        title: "Team",
        description:
          "Technical and editorial work streams are separate. Cross-division assignments are limited on a need-to-know basis.",
      },
      {
        title: "Client account management",
        description:
          "One division's client information is not shared with the other division without the client's consent.",
      },
      {
        title: "Data and information",
        description: "Project documents and data are stored and accessed separately.",
      },
      {
        title: "Decision-making",
        description:
          "Technical and editorial decisions run on independent tracks.",
      },
      {
        title: "Editorial independence",
        description:
          "Management does not make BBM's day-to-day editorial decisions.",
      },
      {
        title: "Legal and reputational oversight",
        description:
          "Contracts, compliance, and risk are managed at the holding level without interfering in division decisions.",
      },
    ],
    pressTitle: "Press compliance",
    pressText:
      "For activities that count as press publishing, BBM's editorial function follows Law No. 40 of 1999 on the Press and its implementing regulations.",
  },

  // TODO: Make the actual presentable PDF, currently its a placeholder
  profile: {
    title: "Company profile",
    text: "Download the BBA profile summary: structure, divisions, governance, and confirmed track record.",
    cta: "Download Profile (PDF)",
    url: "/files/BBA-Company-Profile-EN.pdf",
    meta: "PDF, English",
  },
};