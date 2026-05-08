import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MTTR" },
      { name: "description", content: "MTTR is a multidisciplinary visual identity by Mattías Ortega." },
      { property: "og:title", content: "About — MTTR" },
      { property: "og:description", content: "A multidisciplinary practice by Mattías Ortega." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="px-5 md:px-8 pt-12 pb-32">
      <header className="grid grid-cols-12 gap-4 hairline-b pb-4">
        <div className="col-span-6 text-meta">Index — About</div>
        <div className="col-span-6 text-meta text-right">Edition One / 2025</div>
      </header>

      <Reveal>
        <h1 className="display-lg mt-16 max-w-5xl">
          MTTR is a multidisciplinary visual identity by Mattías Ortega — focused on cinematic storytelling, creative direction, motion and visual systems.
        </h1>
      </Reveal>

      <div className="mt-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 text-meta">Practice</div>
        <Reveal className="col-span-12 md:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            The studio operates between Copenhagen and Mexico City as a small,
            intentional practice. We collaborate with founders, cultural
            institutions, fashion houses and technology teams who care about how
            things feel — not only how they perform.
          </p>
          <p>
            Every engagement begins with a long conversation, ends with a
            considered system, and lives somewhere in between as a quiet,
            authored world.
          </p>
        </Reveal>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-6 hairline-t pt-10">
        <div className="col-span-12 md:col-span-2 text-meta">Selected — Clients</div>
        <ul className="col-span-12 md:col-span-10 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-lg">
          {[
            "Meridian Mobility", "Halden Museum", "Noctis Atelier",
            "Atlas Hospitality", "Northern Pacific Air", "Kira Editions",
            "Studio Aoi", "Index Festival", "Form Industries",
          ].map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-6 hairline-t pt-10">
        <div className="col-span-12 md:col-span-2 text-meta">Recognition</div>
        <ul className="col-span-12 md:col-span-10 space-y-3 text-lg">
          <li className="flex justify-between hairline-b pb-3"><span>ADC Gold — Identity Systems</span><span className="text-meta">2024</span></li>
          <li className="flex justify-between hairline-b pb-3"><span>Brand New — Notable</span><span className="text-meta">2024</span></li>
          <li className="flex justify-between hairline-b pb-3"><span>D&AD Wood Pencil — Motion</span><span className="text-meta">2023</span></li>
          <li className="flex justify-between"><span>It's Nice That — In Review</span><span className="text-meta">2023</span></li>
        </ul>
      </div>
    </section>
  );
}
