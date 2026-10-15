export interface ProofItem {
  value: string;
  label: string;
}

export interface ProofContent {
  label: string;
  items: ProofItem[];
}

export type DivisionKey = "tech" | "media";

export interface DoorContent {
  key: DivisionKey;
  name: string;
  discipline: string;
  statement: string;
  points: string[];
  cta: string;
  url: string;
}

export interface DoorsContent {
  eyebrow: string;
  title: string;
  intro: string;
  doors: [DoorContent, DoorContent];
}

export interface ImageSlot {
  base?: string;
  alt: string;
  widths?: number[];
}

export interface WorkCase {
  client: string;
  title: string;
  location?: string;
  summary: string;
  outcome?: string;
  tags: string[];
  status?: string;
  image: ImageSlot;
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface WorkContent {
  eyebrow: string;
  title: string;
  intro: string;
  imagePlaceholder: string;
  tech: { label: string; cases: WorkCase[] };
  media: {
    label: string;
    emptyTitle: string;
    emptyText: string;
    practiceTitle: string;
    practiceAreas: TitledItem[];
    principlesTitle: string;
    principles: TitledItem[];
    principlesNote: string;
  };
}

export interface EngageStep {
  title: string;
  description: string;
  deliverable: string;
}

export interface EngageContent {
  eyebrow: string;
  title: string;
  intro: string;
  deliverableLabel: string;
  steps: EngageStep[];
}

export interface StructureUnit {
  key: DivisionKey;
  name: string;
  role: string;
  items: string[];
}

export interface StructureContent {
  eyebrow: string;
  title: string;
  intro: string;
  diagramLabel: string;
  holding: { name: string; role: string; items: string[] };
  units: [StructureUnit, StructureUnit];
  governanceTitle: string;
  governanceIntro: string;
  dimensions: TitledItem[];
  pressTitle: string;
  pressText: string;
}

export interface ProfileContent {
  title: string;
  text: string;
  cta: string;
  url: string;
  meta: string;
}

export interface SectionsContent {
  proof: ProofContent;
  doors: DoorsContent;
  work: WorkContent;
  engage: EngageContent;
  structure: StructureContent;
  profile: ProfileContent;
}
