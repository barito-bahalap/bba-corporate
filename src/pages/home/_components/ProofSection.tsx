// Style
import "./ProofSection.css";
// Components
import { Section } from "@barito-bahalap/components";
// Types
import type { ProofContent } from "@/domain/sections";

export function ProofSection({ label, items }: ProofContent) {
  return (
    <Section id="proof" tone="paper" labelledBy="proof-label" className="proof">
      <p id="proof-label" className="proof__label">
        {label}
      </p>
      <dl className="proof__list">
        {items.map((item) => (
          <div className="proof__item" key={item.label}>
            <dt className="proof__value">{item.value}</dt>
            <dd className="proof__text">{item.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
