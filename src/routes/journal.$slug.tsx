import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle } from "@/content/journal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Journal / MTTR` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: `${loaderData.article.title} — MTTR` },
          { property: "og:description", content: loaderData.article.excerpt },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="px-5 md:px-8 py-40">
      <p className="text-meta">404 — Entry not found</p>
      <Link to="/journal" className="display-md mt-6 inline-block">Return to journal →</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="px-5 md:px-8 py-40">
      <p className="text-meta">Error</p>
      <p className="mt-3">{error.message}</p>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: typeof articles[number] };
  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(idx + 1) % articles.length];

  return (
    <article className="px-5 md:px-8 pt-12 pb-32">
      <header className="grid grid-cols-12 gap-4 hairline-b pb-4">
        <div className="col-span-6 text-meta">{article.index} — {article.category}</div>
        <div className="col-span-6 text-meta text-right">{article.date} / {article.reading}</div>
      </header>

      <h1 className="display-lg mt-16 max-w-4xl">{article.title}</h1>
      <p className="mt-8 max-w-2xl text-xl text-muted-foreground">{article.excerpt}</p>

      <div className="mt-24 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 text-meta">Body</div>
        <div className="col-span-12 md:col-span-7 space-y-8 text-lg leading-relaxed">
          {article.body.map((p, i) => (
            <p key={i}>
              {i === 0 && <span className="float-left mr-3 display-md leading-none">{p[0]}</span>}
              {i === 0 ? p.slice(1) : p}
            </p>
          ))}
        </div>
      </div>

      <Link
        to="/journal/$slug"
        params={{ slug: next.slug }}
        className="mt-32 block hairline-t hairline-b py-12 group"
      >
        <div className="flex justify-between items-end">
          <div>
            <div className="text-meta opacity-60">Next — {next.index}</div>
            <p className="display-md mt-2 group-hover:opacity-60 transition-opacity">{next.title}</p>
          </div>
          <span className="text-meta">Continue →</span>
        </div>
      </Link>
    </article>
  );
}
