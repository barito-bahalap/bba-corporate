// Style
import "./Brand.css";
// Config
import { siteConfig } from "@barito-bahalap/config";
// Hooks
import { useLocale } from "@/hooks/useLocale";
// Components
import { SmartLink } from "@/components";

interface BrandProps {
  onDark?: boolean;
}

export function Brand({ onDark = false }: BrandProps) {
  const { ui, href } = useLocale();

  return (
    <SmartLink
      href={href("/")}
      className={`brand${onDark ? " brand--on-dark" : ""}`}
      aria-label={`${siteConfig.name}, ${ui.brandHome}`}
    >
      <span className="brand__mark" aria-hidden="true">
        <span className="brand__dot" data-brand="tech" />
        <span className="brand__dot" data-brand="media" />
      </span>

      <span className="brand__text">
        <span className="brand__short">{siteConfig.shortName}</span>
        <span className="brand__name">{siteConfig.name}</span>
      </span>
    </SmartLink>
  );
}
