// Style

// Components
import { Badge, Button, Icon, Section, SectionHeader } from "@/components";
// Types
import type {
  DivisionContent,
  DivisionsContent,
} from "@/domain/content";

function DivisionCard({ division }: { division: DivisionContent }) {
  return (
    <article
      className="card not-hoverable division-card"
      data-brand={division.brand}
    >
      <header className="division-card__head">
        <Badge variant="primary" dot>
          {division.badge}
        </Badge>
        <h3 className="division-card__name">{division.name}</h3>
        <p className="division-card__descriptor">{division.descriptor}</p>
      </header>

      <p>{division.summary}</p>

      <ul className="division-card__caps" role="list">
        {division.capabilities.map((capability) => (
          <li key={capability.title} className="division-card__cap">
            <span className="division-card__cap-icon">
              <Icon iconName={capability.iconName} size={20} />
            </span>
            <div>
              <h4 className="division-card__cap-title">{capability.title}</h4>
              <p className="division-card__cap-text">
                {capability.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {division.trackRecord && (
        <div className="division-card__record">
          <h4 className="division-card__record-title">
            {division.trackRecordTitle}
          </h4>
          <ul role="list" className="division-card__record-list">
            {division.trackRecord.map((item) => (
              <li key={item.project}>
                <strong>{item.project}</strong>
                <span className="division-card__record-client">
                  {item.client}
                </span>
                <small>{item.scope}</small>
              </li>
            ))}
          </ul>
        </div>
      )}

      {division.statusNote && (
        <p className="division-card__status">{division.statusNote}</p>
      )}

      <aside className="division-card__note">
        <h4 className="division-card__note-title">{division.note.title}</h4>
        <p>{division.note.body}</p>
      </aside>

      <Button
        label={division.cta.label}
        href={division.cta.href}
        variant="primary"
        iconName="arrowRight"
        iconAfter
      />
    </article>
  );
}

export function DivisionsSection({
  eyebrow,
  title,
  intro,
  items,
}: DivisionsContent) {
  return (
    <Section id="divisions" labelledBy="divisions-title">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="divisions-title"
      />
      <div className="home-divisions__grid">
        {items.map((division) => (
          <DivisionCard key={division.id} division={division} />
        ))}
      </div>
    </Section>
  );
}
