import { homeContent } from "@/data";
import type { HomeContent } from "@/domain/content";

export function useHomeContent(): HomeContent {
  return homeContent;
}
