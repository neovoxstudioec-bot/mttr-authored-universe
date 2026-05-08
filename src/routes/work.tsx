import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — MTTR" },
      { name: "description", content: "Selected projects in creative direction, identity, motion, and film by MTTR." },
      { property: "og:title", content: "Work — MTTR" },
      { property: "og:description", content: "Selected projects." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <section className="px-5 md:px-8 pt-12 pb-32">
      <header className="grid grid-cols-12 gap-4 hairline-b pb-4">
        <div className="col-span-6 text-meta">Index — Work</div>
        <div className="col-span-6 text-meta text-right">{projects.length.toString().padStart(2, "0")} entries</div>
      </header>

      <h1 className="display-xl mt-10">Work.</h1>

      <ul className="mt-24 hairline-t">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <li className="hairline-b">
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group grid grid-cols-12 gap-4 py-8 md:py-12 items-center hover:bg-secondary/40 transition-colors"
              >
                <div className="col-span-2 text-meta">{p.index}</div>
                <div className="col-span-12 md:col-span-5 display-md">
                  {p.title}
                </div>
                <div className="col-span-7 md:col-span-3 text-sm text-muted-foreground">
                  {p.disciplines.join(", ")}
                </div>
                <div className="col-span-3 md:col-span-1 text-meta">{p.year}</div>
                <div className="col-span-2 md:col-span-1 text-meta text-right opacity-60 group-hover:opacity-100 transition-opacity">→</div>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
