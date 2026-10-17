import type { SectionsContent } from "@/domain/sections";

export const sectionsEn: SectionsContent = {
  proof: {
    label: "Verified track record",
    items: [
      { value: "3", label: "Client engagements delivered by BBT" },
      {
        value: "Retainer",
        label: "Ongoing relationship with PT Telkom Indonesia Regional 3",
      },
      { value: "2", label: "Separate operating divisions" },
      { value: "Kalteng", label: "Based in Palangka Raya, Central Kalimantan" },
    ],
  },

  doors: {
    eyebrow: "Two Divisions",
    title: "Two divisions, two independent disciplines",
    intro:
      "BBA is the holding company. Services are delivered by two separate divisions, each with its own identity, team, and channels. Choose the one that fits your need.",
    doors: [
      {
        key: "tech",
        name: "Barito Bahalap Tech",
        discipline: "Technology & Digital Infrastructure",
        statement:
          "A long-term digital infrastructure partner for internal systems, operational dashboards, and business process automation.",
        points: [
          "Custom software and information systems",
          "Operational dashboards and report automation",
          "Technical support and ongoing retainers",
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
          "A professional communications operation for institutions and public figures: message strategy, media relations, and content production.",
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
    eyebrow: "Selected Work",
    title: "Work delivered and in progress",
    intro:
      "Track record is shown per division. Each entry refers to a confirmed engagement.",
    imagePlaceholder: "Documentation forthcoming",
    tech: {
      label: "Barito Bahalap Tech",
      cases: [
        {
          client: "PT Telkom Indonesia (Regional 3)",
          title: "RSO2 Telkom Dashboard",
          location: "Surabaya, East Java",
          summary:
            "An analytical and operational dashboard tailored to internal workflows and data needs, with automated reporting.",
          tags: ["Operational Dashboard", "Report Automation", "Retainer"],
          status: "Active",
          image: { alt: "RSO2 Telkom Dashboard interface" },
        },
        {
          client: "E-Palugada",
          title: "Web-based delivery platform",
          location: "Kasongan, Central Kalimantan",
          summary:
            "A delivery platform designed around the characteristics and needs of the local Kasongan market.",
          tags: ["Custom Software", "Web Platform"],
          image: { alt: "E-Palugada platform interface" },
        },
        {
          client: "AMPI Central Kalimantan",
          title: "Official website and organization management platform",
          location: "Central Kalimantan",
          summary:
            "An integrated platform for organizational information, programs, news, documents, media, partnership registration, and public aspirations.",
          tags: ["Web Platform", "Information System"],
          image: { alt: "AMPI Kalteng official website interface" },
        },
      ],
    },
    media: {
      label: "Barito Bahalap Media",
      emptyTitle: "Portfolio in preparation",
      emptyText:
        "BBM is in an early stage of operational development. Track record will be published progressively once initial engagements are complete and clients have given consent.",
      practiceTitle: "Practice areas",
      practiceAreas: [
        {
          title: "Strategic communications",
          description:
            "Institutional message planning and public communication.",
        },
        {
          title: "Media relations",
          description: "Management of media relationships and correspondence.",
        },
        {
          title: "Content operations",
          description: "Writing, editing, and institutional content calendars.",
        },
        {
          title: "Editorial and publication",
          description:
            "Publication management following journalistic standards.",
        },
        {
          title: "Multimedia production",
          description: "Photography, videography, and graphic design.",
        },
        {
          title: "Social media strategy",
          description: "Planning and management of social media channels.",
        },
      ],
      principlesTitle: "Editorial principles",
      principles: [
        {
          title: "Accuracy and verification",
          description: "Information is verified before it is published.",
        },
        {
          title: "Balance",
          description:
            "Information is presented in a balanced and accountable manner.",
        },
        {
          title: "Independent editorial decisions",
          description:
            "Narrative, content, and publication schedule are decided by BBM's Creative Lead, not by the holding company or BBT's technology clients.",
        },
      ],
      principlesNote:
        "For activities that qualify as press publishing, BBM observes Law No. 40 of 1999 on the Press (UU Pers).",
    },
  },

  engage: {
    eyebrow: "How We Engage",
    title: "A clear, auditable engagement process",
    intro:
      "Every engagement is contract-based, with defined scope, duration, and measurable deliverables.",
    deliverableLabel: "Deliverable",
    steps: [
      {
        title: "Discovery",
        description:
          "We identify needs, stakeholders, and constraints. Objectives and success indicators are agreed from the start.",
        deliverable: "Requirements summary",
      },
      {
        title: "Proposal",
        description:
          "Scope, schedule, cost structure, and contract terms are prepared to fit the client's procurement requirements.",
        deliverable: "Proposal and draft contract",
      },
      {
        title: "Delivery",
        description:
          "Work proceeds in stages. Each stage closes with a Handover Report (BAST) as the basis for acceptance.",
        deliverable: "Stage deliverables and BAST",
      },
      {
        title: "Support and Retainer",
        description:
          "Maintenance, fixes, and further development under a retainer with an agreed service level.",
        deliverable: "Periodic service reports",
      },
    ],
  },

  structure: {
    eyebrow: "Structure & Governance",
    title: "Shared ownership, separate operations",
    intro:
      "BBT and BBM sit within one group but run as two functionally separate divisions. This separation is a governance framework, not a marketing strategy.",
    diagramLabel: "Structure diagram of BBA, BBT, and BBM",
    holding: {
      name: "Barito Bahalap Agency",
      role: "Holding company and governance layer",
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
        items: ["Technical decisions: Delivery Lead", "BBT account line"],
      },
      {
        key: "media",
        name: "Barito Bahalap Media",
        role: "Media & Strategic Communications",
        items: ["Editorial decisions: Creative Lead", "BBM account line"],
      },
    ],
    governanceTitle: "Operational separation across seven dimensions",
    governanceIntro:
      "The Operational Firewall sets the boundary between BBT and BBM so that clients on both sides are protected from conflicts of interest.",
    dimensions: [
      {
        title: "Brand identity",
        description:
          "Distinct names, logos, public channels, and positioning. No combined marketing material.",
      },
      {
        title: "Teams",
        description:
          "Separate technical and editorial work lines. Cross-division assignments are need-to-know only.",
      },
      {
        title: "Client account management",
        description:
          "One division's client information is not shared with the other without client consent.",
      },
      {
        title: "Data and information",
        description:
          "Project documents and data are stored and accessed separately.",
      },
      {
        title: "Decision-making",
        description:
          "Technical and editorial decisions run on independent lines.",
      },
      {
        title: "Editorial independence",
        description:
          "The Founder/Director is not BBM's day-to-day editorial decision-maker.",
      },
      {
        title: "Legal and reputation oversight",
        description:
          "Contracts, compliance, and risk are handled at holding level without overriding divisional decisions.",
      },
    ],
    pressTitle: "Press compliance",
    pressText:
      "For activities that qualify as press publishing, BBM's editorial function observes Law No. 40 of 1999 on the Press and its implementing regulations.",
  },

  profile: {
    title: "Company Profile",
    text: "Download a summary of BBA: structure, divisions, governance, and confirmed track record.",
    cta: "Download Profile (PDF)",
    url: "/files/BBA-Company-Profile-EN.pdf",
    meta: "PDF, English",
  },
};
