import { useCallback, useEffect, useRef, useState } from "react";
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

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    const step = getStep();
    if (!track || !step) return;
    setActive(Math.round(track.scrollLeft / step));
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, [getStep]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [update, published.length]);

  const scrollToIndex = (i: number) => {
    trackRef.current?.scrollTo({ left: i * getStep(), behavior: "smooth" });
  };

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (track.clientWidth + gap),
      behavior: "smooth",
    });
  };

  const hasOverflow = canPrev || canNext;

  return (
    <GridSection id="leadership" labelledBy="leadership-title">
      <GridHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="leadership-title"
      />

      <div className="cg-leadership__carousel" data-cg-reveal>
        <div
          ref={trackRef}
          className="cg-leadership__people"
          role="region"
          aria-label={title}
          tabIndex={0}
        >
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

        {published.length > 1 && (
          <div className="cg-leadership__controls">
            {/* Mobile: dots */}
            <div className="cg-leadership__dots">
              {published.map((person, i) => (
                <button
                  key={person.id}
                  type="button"
                  className="cg-leadership__dot"
                  aria-label={`Go to ${person.name}`}
                  aria-current={i === active}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>

            {/* Tablet/desktop: arrows, only when cards overflow */}
            {hasOverflow && (
              <div className="cg-leadership__arrows">
                <button
                  type="button"
                  className="cg-leadership__arrow"
                  aria-label="Previous"
                  disabled={!canPrev}
                  onClick={() => scrollByPage(-1)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 5l-7 7 7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="cg-leadership__arrow"
                  aria-label="Next"
                  disabled={!canNext}
                  onClick={() => scrollByPage(1)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
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
