// Style
import "./ProofSection.css";
// Components
import { DataCell, GridSection, IndexLabel } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { ProofContent } from "@/domain/sections";

interface ProofSectionProps extends ProofContent {
  index: string;
}

export function ProofSection({ index, label, items }: ProofSectionProps) {
  return (
    <GridSection id="proof" tone="teal" ariaLabel={label} className="cg-proof">
      <IndexLabel index={index} label={label} />
      <dl className="cg-proof__list">
        {items.map((item, i) => (
          <DataCell
            key={item.label}
            value={item.value}
            label={item.label}
            index={pad2(i + 1)}
            delay={i}
            tone="dark"
          />
        ))}
      </dl>
    </GridSection>
  );
}
