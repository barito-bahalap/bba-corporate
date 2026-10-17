// Style
import "./IndexLabel.css";

interface IndexLabelProps {
  index?: string;
  label?: string;
}

export function IndexLabel({ index, label }: IndexLabelProps) {
  return (
    <p className="cg-index">
      {index && <span className="cg-index__num">[{index}]</span>}
      {label && <span className="cg-index__label">{label}</span>}
    </p>
  );
}
