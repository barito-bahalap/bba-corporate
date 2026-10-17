// Style
import "./LeadershipSection.css";
// Components
import { GridHeader, GridSection, InfoCard, PersonCard } from "@/components";
// Types
import type { LeadershipContent } from "@/domain/content";

interface LeadershipSectionProps extends LeadershipContent {
  index: string;
}

export function LeadershipSection({
  index,
  eyebrow,
  title,
  intro,
  people,
  authorityTitle,
  authority,
}: LeadershipSectionProps) {
  const published = people.filter((person) => person.published);

  return (
    <GridSection id="leadership" labelledBy="leadership-title">
      <GridHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="leadership-title"
      />

      <div className="cg-leadership__people" data-cg-reveal>
        {published.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            title={person.title}
            bio={person.bio}
            photoSrc={person.photoSrc}
            photoAlt={person.photoAlt}
          />
        ))}
      </div>

      <h3 className="cg-leadership__subtitle">{authorityTitle}</h3>
      <div className="cg-leadership__authority">
        {authority.map((item) => (
          <InfoCard
            key={item.title}
            brand={item.brand}
            iconName={item.iconName}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </GridSection>
  );
}
