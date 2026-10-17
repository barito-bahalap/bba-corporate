const pic = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const placeholders = {
  hero: pic("bba-hero", 1200, 900),
  cases: [
    pic("bba-case-1", 1200, 750),
    pic("bba-case-2", 960, 600),
    pic("bba-case-3", 960, 600),
    pic("bba-case-4", 960, 600),
  ],
  people: [pic("bba-person-1", 800, 600)],
};
