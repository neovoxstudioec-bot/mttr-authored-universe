import meridian from "@/assets/project-meridian.jpg";
import halden from "@/assets/project-halden.jpg";
import noctis from "@/assets/project-noctis.jpg";
import hero from "@/assets/hero-01.jpg";

export type Project = {
  slug: string;
  index: string; // MTTR_001
  title: string;
  client: string;
  year: string;
  location: string;
  disciplines: string[];
  summary: string;
  cover: string;
  gallery: { src: string; caption?: string; ratio?: "wide" | "tall" | "square" }[];
  credits: { role: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "meridian",
    index: "MTTR_001",
    title: "Meridian",
    client: "Meridian Mobility",
    year: "2025",
    location: "Copenhagen — Tokyo",
    disciplines: ["Creative Direction", "Identity", "Motion", "Campaign", "Photography"],
    summary:
      "An identity for a luxury electric mobility startup — built around restraint, weight, and the choreography of light across surface.",
    cover: meridian,
    gallery: [
      { src: meridian, caption: "Campaign frame 014 — Concrete Bay", ratio: "wide" },
      { src: hero, caption: "Environmental study — Hangar 03", ratio: "wide" },
      { src: halden, caption: "Showroom architecture — Reference plate", ratio: "wide" },
    ],
    credits: [
      { role: "Creative Direction", name: "Mattías Ortega" },
      { role: "Photography", name: "Lior Kann" },
      { role: "Type Design", name: "Studio Halden" },
      { role: "Sound", name: "Aoi Mori" },
    ],
  },
  {
    slug: "halden",
    index: "MTTR_002",
    title: "Halden",
    client: "Halden Museum of Modern Form",
    year: "2024",
    location: "Oslo",
    disciplines: ["Identity", "Wayfinding", "Editorial", "Signage"],
    summary:
      "A complete visual system for a museum dedicated to silence, light, and the architecture of attention.",
    cover: halden,
    gallery: [
      { src: halden, ratio: "wide", caption: "Atrium — Skylight study" },
      { src: noctis, ratio: "tall", caption: "Exhibition guide — Cover plate" },
      { src: meridian, ratio: "wide", caption: "Interior signage — Concrete level" },
    ],
    credits: [
      { role: "Creative Direction", name: "Mattías Ortega" },
      { role: "Curatorial", name: "Halden Museum" },
      { role: "Typography", name: "Foundry Type Berlin" },
    ],
  },
  {
    slug: "noctis",
    index: "MTTR_003",
    title: "Noctis",
    client: "Noctis Atelier",
    year: "2024",
    location: "Paris",
    disciplines: ["Campaign", "Art Direction", "Film", "Editorial"],
    summary:
      "Autumn / Winter campaign for a couture house — a meditation on weight, drape, and the gravity of fabric.",
    cover: noctis,
    gallery: [
      { src: noctis, ratio: "wide", caption: "Look 04 — Studio plate" },
      { src: halden, ratio: "wide", caption: "Set design — Reference frame" },
    ],
    credits: [
      { role: "Creative Direction", name: "Mattías Ortega" },
      { role: "Photography", name: "Inès Caron" },
      { role: "Styling", name: "M. Vidal" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
