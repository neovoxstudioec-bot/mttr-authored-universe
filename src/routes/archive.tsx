import { createFileRoute } from "@tanstack/react-router";
import { archive } from "@/content/archive";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Archive — MTTR" },
      { name: "description", content: "A living visual archive — photography, textures, contact sheets and unfinished work by MTTR." },
      { property: "og:title", content: "Archive — MTTR" },
      { property: "og:description", content: "A living visual archive." },
    ],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  return (
    <section className="px-5 md:px-8 pt-12 pb-32">
      <header className="grid grid-cols-12 gap-4 hairline-b pb-4">
        <div className="col-span-6 text-meta">Index — Archive</div>
        <div className="col-span-6 text-meta text-right">{archive.length.toString().padStart(2, "0")} plates</div>
      </header>
      <div className="mt-10 grid grid-cols-12 gap-4 items-end">
        <h1 className="display-xl col-span-12 md:col-span-9">Archive.</h1>
        <p className="text-muted-foreground col-span-12 md:col-span-3 md:text-right">
          A living visual diary —<br />stills, frames, textures.
        </p>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-4 md:gap-6">
        {archive.map((entry, i) => {
          const span =
            entry.ratio === "wide"
              ? "col-span-12 md:col-span-8"
              : entry.ratio === "tall"
                ? "col-span-6 md:col-span-4"
                : "col-span-6 md:col-span-4";
          const offset = i % 3 === 1 ? "md:mt-32" : i % 3 === 2 ? "md:mt-16" : "";
          return (
            <Reveal key={entry.id} className={`${span} ${offset}`}>
              <figure>
                <div className="overflow-hidden">
                  <img
                    src={entry.src}
                    alt={entry.caption}
                    loading="lazy"
                    className={
                      "w-full object-cover " +
                      (entry.ratio === "tall" ? "aspect-[3/4]" : entry.ratio === "wide" ? "aspect-[16/10]" : "aspect-square")
                    }
                  />
                </div>
                <figcaption className="mt-3 flex justify-between text-meta">
                  <span>{entry.id} — {entry.caption}</span>
                  <span className="opacity-60">{entry.location} / {entry.year}</span>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
