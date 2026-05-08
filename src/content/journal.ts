export type Article = {
  slug: string;
  index: string;
  title: string;
  excerpt: string;
  date: string;
  reading: string;
  category: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "on-restraint",
    index: "JRN_011",
    title: "On Restraint",
    excerpt:
      "The discipline of removing — and what survives when nothing else is allowed to.",
    date: "2025.03.14",
    reading: "6 min",
    category: "Essay",
    body: [
      "Restraint is not the absence of decision. It is the presence of every decision, made and unmade, until what remains carries the weight of all the rest.",
      "I keep a folder titled 'cuts.' Frames I loved and removed. Type pairings I almost shipped. The folder is larger than the work.",
      "What remains has to earn the silence around it.",
    ],
  },
  {
    slug: "the-grain-of-things",
    index: "JRN_010",
    title: "The Grain of Things",
    excerpt: "Notes on texture, noise, and the warmth of imperfection in digital systems.",
    date: "2025.01.28",
    reading: "4 min",
    category: "Process",
    body: [
      "A perfect surface is forgettable. We remember what resists us, slightly — the catch of paper, the hiss of tape, the soft flicker of a projector finding its frame.",
      "Grain is not nostalgia. It is acknowledgement: that an image was made by something, somewhere, by someone.",
    ],
  },
  {
    slug: "systems-as-stories",
    index: "JRN_009",
    title: "Systems as Stories",
    excerpt: "Identity is not a logo. It is a posture maintained across a thousand small decisions.",
    date: "2024.11.02",
    reading: "8 min",
    category: "Direction",
    body: [
      "Every brand is a character. Some characters are loud. The ones I am drawn to are quiet, deliberate, and unwilling to perform.",
      "A system is what allows a character to remain themselves across rooms.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
