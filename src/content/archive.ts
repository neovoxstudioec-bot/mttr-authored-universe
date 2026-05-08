import a1 from "@/assets/archive-01.jpg";
import a2 from "@/assets/archive-02.jpg";
import a3 from "@/assets/archive-03.jpg";
import a4 from "@/assets/archive-04.jpg";
import a5 from "@/assets/archive-05.jpg";
import a6 from "@/assets/archive-06.jpg";

export type ArchiveEntry = {
  id: string;
  src: string;
  caption: string;
  location: string;
  year: string;
  tag: string;
  ratio: "tall" | "wide" | "square";
};

export const archive: ArchiveEntry[] = [
  { id: "ARC_041", src: a1, caption: "Tide line, north shore", location: "Reykjanes — IS", year: "2025", tag: "Landscape", ratio: "tall" },
  { id: "ARC_038", src: a2, caption: "Paper study no. 06", location: "Studio — CPH", year: "2024", tag: "Texture", ratio: "wide" },
  { id: "ARC_034", src: a3, caption: "Window, late afternoon", location: "Paris — FR", year: "2024", tag: "Portrait", ratio: "tall" },
  { id: "ARC_029", src: a4, caption: "Ridge, low cloud", location: "Lofoten — NO", year: "2023", tag: "Landscape", ratio: "wide" },
  { id: "ARC_022", src: a5, caption: "Stair, southern light", location: "Lisbon — PT", year: "2023", tag: "Architecture", ratio: "tall" },
  { id: "ARC_017", src: a6, caption: "Highway, 02:14", location: "Jutland — DK", year: "2022", tag: "Night", ratio: "wide" },
];
