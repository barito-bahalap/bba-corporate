import type { LegalSectionData } from "@barito-bahalap/components";
import type {
  DivisionBrand,
  DivisionId,
  Profile,
  IconsType,
} from "@barito-bahalap/types";

export interface Cta {
  label: string;
  href: string;
  section?: string;
}

export interface HeroContent {
  eyebrow?: string | null;
  headline: string;
  subhead: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

export interface StatItem {
  value: string;
  label: string;
  note?: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  stats: StatItem[];
}

export interface Capability {
  iconName: IconsType;
  title: string;
  description: string;
}

export interface TrackRecordItem {
  project: string;
  client: string;
  scope: string;
}

export interface DivisionContent {
  id: DivisionId;
  brand: DivisionBrand;
  name: string;
  badge: string;
  descriptor: string;
  summary: string;
  capabilities: Capability[];
  trackRecordTitle?: string;
  trackRecord?: TrackRecordItem[];
  statusNote?: string;
  note: { title: string; body: string };
  cta: Cta;
}

export interface DivisionsContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: DivisionContent[];
}

export interface ApproachItem {
  iconName: IconsType;
  title: string;
  description: string;
}

export interface ApproachContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: ApproachItem[];
}

export interface AuthorityItem {
  brand: DivisionBrand;
  iconName: IconsType;
  title: string;
  description: string;
}

export interface LeadershipContent {
  eyebrow: string;
  title: string;
  intro: string;
  people: Profile[];
  authorityTitle: string;
  authority: AuthorityItem[];
}

export interface CareersTeaserContent {
  eyebrow: string;
  title: string;
  body: string;
  cta: Cta;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  intro: string;
}

export interface HomeContent {
  seo: { title: string; description: string };
  hero: HeroContent;
  about: AboutContent;
  // divisions: DivisionsContent;
  approach: ApproachContent;
  leadership: LeadershipContent;
  careers: CareersTeaserContent;
  contact: ContactContent;
}

export interface RoleGroup {
  brand: DivisionBrand;
  division: string;
  roles: string[];
}

export interface CareersContent {
  seo: { title: string; description: string };
  title: string;
  intro: string;
  openings: { title: string; sub: string };
  hiringTitle: string;
  hiringParagraphs: string[];
  rolesTitle: string;
  rolesIntro: string;
  roleGroups: RoleGroup[];
  cta: { title: string; body: string; primary: Cta };
}

export interface LegalContent {
  seo: { title: string; description: string; path: string };
  title: string;
  updated: string;
  intro: string;
  sections: LegalSectionData[];
}
