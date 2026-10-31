// Style
import "./ProofSection.css";
// Components
import { DataCell, GridSection, IndexLabel } from "@/components";
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
            delay={i}
            tone="dark"
          />
        ))}
      </dl>
    </GridSection>
  );
}
