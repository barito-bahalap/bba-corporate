import { careersContent } from "@/data";
import type { CareersContent } from "@/domain/content";

export function useCareersContent(): CareersContent {
  return careersContent;
}
