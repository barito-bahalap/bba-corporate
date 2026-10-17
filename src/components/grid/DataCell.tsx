import type { CSSProperties } from "react";
// Style
import "./DataCell.css";
// Utils
import { cx } from "@barito-bahalap/components";

interface DataCellProps {
  value: string;
  label: string;
  note?: string;
  index?: string;
  delay?: number;
  tone?: "light" | "dark";
}

export function DataCell({
  value,
  label,
  note,
  index,
  delay = 0,
  tone = "light",
}: DataCellProps) {
  return (
    <div
      className={cx("cg-data", `cg-data--${tone}`)}
      data-index={index}
      data-cg-reveal
      style={{ "--cg-i": delay } as CSSProperties}
    >
      <dt className="cg-data__label">{label}</dt>
      <dd className="cg-data__value">{value}</dd>
      {note && <dd className="cg-data__note">{note}</dd>}
    </div>
  );
}
