import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { getProject, projects } from "@/content/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — MTTR` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.title} — MTTR` },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="px-5 md:px-8 py-40">
      <p className="text-meta">404 — Project not found</p>
      <Link to="/work" className="display-md mt-6 inline-block">Return to index →</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="px-5 md:px-8 py-40">
      <p className="text-meta">Error</p>
      <p className="mt-3">{error.message}</p>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* HERO */}
      <section className="relative h-[90svh] -mt-20 overflow-hidden vignette">
        <motion.img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute top-24 left-5 md:left-8 text-meta">{project.index}</div>
        <div className="absolute top-24 right-5 md:right-8 text-meta text-right">{project.year}</div>
        <div className="relative z-10 h-full flex items-end px-5 md:px-8 pb-16">
          <h1 className="display-xl">{project.title}</h1>
        </div>
      </section>

      {/* METADATA */}
      <section className="px-5 md:px-8 py-20 md:py-32 grid grid-cols-12 gap-6 hairline-b">
        <div className="col-span-12 md:col-span-4">
          <div className="text-meta">Client</div>
          <div className="mt-2">{project.client}</div>
          <div className="text-meta mt-8">Location</div>
          <div className="mt-2">{project.location}</div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="text-meta">Disciplines</div>
          <ul className="mt-2 space-y-1">
            {project.disciplines.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <Reveal className="col-span-12 md:col-span-4">
          <p className="text-lg leading-relaxed">{project.summary}</p>
        </Reveal>
      </section>

      {/* GALLERY */}
      <section className="space-y-24 md:space-y-32 py-24">
        {project.gallery.map((g, i) => (
          <Reveal key={i}>
            <figure className={i % 2 === 0 ? "px-0" : "px-5 md:px-24"}>
              <img
                src={g.src}
                alt={g.caption ?? project.title}
                loading="lazy"
                className={
                  "w-full object-cover " +
                  (g.ratio === "tall" ? "aspect-[3/4]" : g.ratio === "square" ? "aspect-square" : "aspect-[16/9]")
                }
              />
              {g.caption && (
                <figcaption className="px-5 md:px-8 mt-4 flex justify-between text-meta">
                  <span>{g.caption}</span>
                  <span className="opacity-60">FRM_{String(i + 1).padStart(3, "0")}</span>
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </section>

      {/* CREDITS */}
      <section className="px-5 md:px-8 py-24 hairline-t grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 text-meta">Credits</div>
        <ul className="col-span-12 md:col-span-8 divide-y divide-[var(--hairline)]">
          {project.credits.map((c) => (
            <li key={c.role} className="grid grid-cols-2 py-4">
              <span className="text-muted-foreground">{c.role}</span>
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* NEXT */}
      <Link
        to="/work/$slug"
        params={{ slug: next.slug }}
        className="block hairline-t hairline-b group"
      >
        <div className="px-5 md:px-8 py-16 md:py-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-meta opacity-60">Next — {next.index}</div>
            <h3 className="display-lg mt-2 group-hover:opacity-60 transition-opacity">{next.title}</h3>
          </div>
          <span className="text-meta">Continue →</span>
        </div>
      </Link>
    </article>
  );
}
