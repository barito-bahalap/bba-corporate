// Types
import type { HomeContent } from "@/domain/content";

export const homeContent: HomeContent = {
  seo: {
    title: "Barito Bahalap Agency | Technology and strategic communications",
    description:
      "Barito Bahalap Agency is an independent holding organization in Palangka Raya, Central Kalimantan, overseeing Barito Bahalap Tech and Barito Bahalap Media as two separate operating brands.",
  },

  hero: {
    eyebrow: "Palangka Raya, Central Kalimantan",
    headline:
      "Technology and strategic communications for institutional partners.",
    subhead:
      "Barito Bahalap Agency is an independent holding organization. It oversees two operating brands, Barito Bahalap Tech and Barito Bahalap Media, each with its own team, client accounts and data.",
    primaryCta: { label: "Explore our divisions", href: "/#divisions" },
    secondaryCta: { label: "Contact us", href: "/#contact" },
  },

  about: {
    eyebrow: "About BBA",
    title: "A holding organization, not a combined agency.",
    paragraphs: [
      "Barito Bahalap Agency (BBA) was founded in 2026 in Palangka Raya. It oversees two operating brands with different specializations: technology and strategic communications.",
      "BBA's role is limited to corporate functions: strategy, contracts and business relationships, finance, legal compliance, and risk and reputation oversight. It does not make technical decisions for BBT or editorial decisions for BBM.",
    ],
    stats: [
      {
        value: "2",
        label: "Operating brands",
        note: "Separate teams, client accounts and data.",
      },
      {
        value: "3",
        label: "Systems delivered and maintained",
        note: "By Barito Bahalap Tech.",
      },
      {
        value: "7",
        label: "Dimensions of operational separation",
        note: "From brand identity to editorial independence.",
      },
    ],
  },

  divisions: {
    eyebrow: "Our divisions",
    title: "Two operating brands, each accountable for its own work.",
    intro:
      "Each division has its own identity, team, client accounts and decision authority. Information about a client of one division is not shared with the other without that client's explicit consent.",
    items: [
      {
        id: "bbt",
        brand: "tech",
        name: "Barito Bahalap Tech",
        badge: "BBT",
        descriptor: "Technology and digital infrastructure",
        summary:
          "Designs, builds and maintains digital systems for organizational operations. BBT works as a long-term infrastructure partner, not as a one-off web developer.",
        capabilities: [
          {
            iconName: "codeSlash",
            title: "Custom software and internal systems",
            description:
              "Enterprise applications and information systems built around your workflows.",
          },
          {
            iconName: "pieChartFill",
            title: "Operational dashboards",
            description:
              "Analytical and monitoring dashboards that bring internal data and reporting into one place.",
          },
          {
            iconName: "barChart",
            title: "Automation and integration",
            description:
              "Business process automation and platform integration, with long-term technical support under a retainer.",
          },
        ],
        trackRecordTitle: "Delivered and maintained",
        trackRecord: [
          {
            project: "RSO2 Telkom Dashboard",
            client: "PT Telkom Indonesia, Regional 3, Surabaya",
            scope:
              "Analytical and operational dashboard with internal data and automation reporting. Ongoing retainer.",
          },
          {
            project: "E-Palugada",
            client: "Kasongan, Central Kalimantan",
            scope:
              "Web-based delivery platform designed for the local market. Ongoing retainer.",
          },
          {
            project: "AMPI Kalteng website",
            client: "AMPI Kalimantan Tengah",
            scope:
              "All-in-one platform for organization information, programs, news, documents, media, partner registration and public submissions. Ongoing retainer.",
          },
        ],
        note: {
          title: "Technical authority",
          body: "Technical decisions, from system architecture to maintenance priorities, rest with the BBT Delivery Lead.",
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
          "Strategic communications, content and publication management for organizations and institutions. BBM is a professional communications operation, not only a social media service.",
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
              "Content operations, copywriting, editorial services and publication management.",
          },
          {
            iconName: "imageAlt",
            title: "Multimedia production",
            description:
              "Photography, videography and graphic production, supported by social media strategy.",
          },
        ],
        statusNote:
          "BBM is in its early operational phase. Its portfolio will be published as projects are completed.",
        note: {
          title: "Editorial independence",
          body: "Editorial decisions on content, narrative and publication schedule rest with the BBM Creative Lead. The BBA Founder and Director oversees contracts, finance, legal compliance and reputational risk, and does not make day-to-day editorial decisions. Press publication activities follow Law No. 40 of 1999 on the Press and the applicable journalistic code of ethics.",
        },
        cta: { label: "Discuss a BBM engagement", href: "/#contact" },
      },
    ],
  },

  approach: {
    eyebrow: "Our approach",
    title: "How we work.",
    intro:
      "These commitments are built into how the organization operates, so procurement, legal and compliance teams can review them.",
    items: [
      {
        iconName: "box",
        title: "Separation by design",
        description:
          "BBT and BBM have separate brands, teams, client accounts and working data. Cross-division access happens only on a need-to-know basis.",
      },
      {
        iconName: "filePdf",
        title: "Defined scope and accountability",
        description:
          "Every engagement rests on a written agreement covering scope, responsibilities, timeline and dispute resolution. Each function has a clear decision owner.",
      },
      {
        iconName: "lock",
        title: "Confidentiality by default",
        description:
          "Client information is accessed only by personnel working on that engagement, and is not shared across divisions without the client's explicit agreement.",
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
    title: "People accountable for the organization.",
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
      },
    ],
    authorityTitle: "Decision authority",
    authority: [
      {
        brand: "tech",
        iconName: "codeSlash",
        title: "Delivery Lead, BBT",
        description:
          "Holds authority over system architecture, development methodology and maintenance priorities.",
      },
      {
        brand: "media",
        iconName: "newspaper",
        title: "Creative Lead, BBM",
        description:
          "Holds authority over content, narrative and publication schedule.",
      },
    ],
  },

  careers: {
    eyebrow: "Careers",
    title: "We are building separate technical and editorial teams.",
    body: "BBT and BBM recruit and manage their teams independently. No positions are open right now, but you can introduce yourself and the work you do.",
    cta: { label: "Careers at BBA", href: "/careers" },
  },

  contact: {
    eyebrow: "Contact",
    title: "Start a conversation.",
    intro:
      "Tell us about your organization and which division your enquiry concerns. The form prepares a message in your email app, addressed to BBA.",
  },
};
