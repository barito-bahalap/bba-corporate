import type { ReactNode } from "react";
// Style
import "./GridHeader.css";
// Components
import { IndexLabel } from "./IndexLabel";

interface GridHeaderProps {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
}

export function GridHeader({
  index,
  eyebrow,
  title,
  intro,
  id,
  as: Heading = "h2",
}: GridHeaderProps) {
  return (
    <header className="cg-head" data-cg-reveal>
      <IndexLabel index={index} label={eyebrow} />
      <div className="cg-head__body">
        <Heading id={id} className="cg-head__title">
          {title}
        </Heading>
        {intro && <p className="cg-head__intro">{intro}</p>}
      </div>
    </header>
  );
}
