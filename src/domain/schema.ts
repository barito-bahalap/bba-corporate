import { divisions, siteConfig } from "@barito-bahalap/config";

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palangka Raya",
      addressRegion: "Central Kalimantan",
      addressCountry: "ID",
    },
    founder: { "@type": "Profile", name: "Basilius Tengang" },
    subOrganization: divisions.map((division) => ({
      "@type": "Organization",
      name: division.name,
      description: division.descriptor,
    })),
  };
}
