import { Link } from "react-router-dom";
// Config
import { siteConfig } from "@barito-bahalap/config";

interface BrandProps {
  showName?: boolean;
}

export function Brand({ showName = true }: BrandProps) {
  return (
    <Link to="/" className="bba-brand" aria-label={`${siteConfig.name} home`}>
      <span className="bba-brand__mark" aria-hidden="true">
        <span className="bba-brand__dot bba-brand__dot--tech" />
        <span className="bba-brand__dot bba-brand__dot--media" />
      </span>
      <span className="bba-brand__text">
        <span className="bba-brand__short">{siteConfig.shortName}</span>
        {showName && <span className="bba-brand__name">{siteConfig.name}</span>}
      </span>
    </Link>
  );
}
