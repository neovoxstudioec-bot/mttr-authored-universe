import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/content/journal";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — MTTR" },
      { name: "description", content: "Essays, process notes and visual research by Mattías Ortega." },
      { property: "og:title", content: "Journal — MTTR" },
      { property: "og:description", content: "Essays and process notes." },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <section className="px-5 md:px-8 pt-12 pb-32">
      <header className="grid grid-cols-12 gap-4 hairline-b pb-4">
        <div className="col-span-6 text-meta">Index — Journal</div>
        <div className="col-span-6 text-meta text-right">{articles.length.toString().padStart(2, "0")} entries</div>
      </header>
      <h1 className="display-xl mt-10">Journal.</h1>

      <ul className="mt-24 hairline-t">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.05}>
            <li className="hairline-b">
              <Link
                to="/journal/$slug"
                params={{ slug: a.slug }}
                className="group grid grid-cols-12 gap-4 py-10 md:py-14 items-baseline hover:bg-secondary/40 transition-colors"
              >
                <div className="col-span-2 text-meta">{a.index}</div>
                <div className="col-span-12 md:col-span-6">
                  <h2 className="display-md group-hover:opacity-60 transition-opacity">{a.title}</h2>
                  <p className="mt-3 text-muted-foreground max-w-md">{a.excerpt}</p>
                </div>
                <div className="col-span-6 md:col-span-2 text-meta">{a.category}</div>
                <div className="col-span-6 md:col-span-2 text-meta text-right">
                  {a.date} <span className="opacity-50">/ {a.reading}</span>
                </div>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
