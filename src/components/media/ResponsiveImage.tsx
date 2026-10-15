import { useState } from "react";
// Style
import "./ResponsiveImage.css";

interface ResponsiveImageProps {
  base?: string;
  alt: string;
  placeholderLabel: string;
  width?: number;
  height?: number;
  widths?: number[];
  sizes?: string;
  priority?: boolean;
}

const DEFAULT_WIDTHS = [480, 960, 1440];
const DEFAULT_SIZES = "(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw";

const buildSet = (base: string, widths: number[], ext: string) =>
  widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");

export function ResponsiveImage({
  base,
  alt,
  placeholderLabel,
  width = 16,
  height = 10,
  widths = DEFAULT_WIDTHS,
  sizes = DEFAULT_SIZES,
  priority = false,
}: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);
  const style = { aspectRatio: `${width} / ${height}` };

  if (!base || failed) {
    return (
      <div className="rimg rimg--placeholder" style={style}>
        <span>{placeholderLabel}</span>
      </div>
    );
  }

  const fallbackWidth = widths[Math.min(1, widths.length - 1)];

  return (
    <div className="rimg" style={style}>
      <picture>
        <source
          type="image/avif"
          srcSet={buildSet(base, widths, "avif")}
          sizes={sizes}
        />
        <source
          type="image/webp"
          srcSet={buildSet(base, widths, "webp")}
          sizes={sizes}
        />
        <img
          src={`${base}-${fallbackWidth}.jpg`}
          srcSet={buildSet(base, widths, "jpg")}
          sizes={sizes}
          alt={alt}
          width={width * 100}
          height={height * 100}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      </picture>
    </div>
  );
}
