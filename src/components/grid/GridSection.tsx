import type { ReactNode } from "react";
// Style
import "./GridSection.css";
// Utils
import { cx } from "@barito-bahalap/components";

export type GridTone = "paper" | "white" | "cream" | "teal" | "deep";

interface GridSectionProps {
  id?: string;
  tone?: GridTone;
  labelledBy?: string;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}

export function GridSection({
  id,
  tone = "paper",
  labelledBy,
  ariaLabel,
  className,
  children,
}: GridSectionProps) {
  return (
    <section
      id={id}
      className={cx("cg-section", `cg-section--${tone}`, className)}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : ariaLabel}
    >
      <div className="cg-wrap">{children}</div>
    </section>
  );
}
