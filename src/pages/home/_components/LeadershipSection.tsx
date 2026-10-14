// Style
import "./LeadershipSection.css";
// Components
import { InfoCard, PersonCard, Section, SectionHeader } from "@/components";
// Types
import type { LeadershipContent } from "@/domain/content";

export function LeadershipSection({
  eyebrow,
  title,
  intro,
  people,
  authorityTitle,
  authority,
}: LeadershipContent) {
  const published = people.filter((person) => person.published);

  return (
    <Section id="leadership" labelledBy="leadership-title">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="leadership-title"
      />
      <div className="home-leadership__people">
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

      <h3 className="home-leadership__subtitle">{authorityTitle}</h3>
      <div className="home-leadership__authority">
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
    </Section>
  );
}
