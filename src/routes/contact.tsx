import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MTTR" },
      { name: "description", content: "Begin a project with MTTR — studio@mttr.studio" },
      { property: "og:title", content: "Contact — MTTR" },
      { property: "og:description", content: "Begin a project with MTTR." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="px-5 md:px-8 pt-12 min-h-[80svh] flex flex-col">
      <header className="grid grid-cols-12 gap-4 hairline-b pb-4">
        <div className="col-span-6 text-meta">Index — Contact</div>
        <div className="col-span-6 text-meta text-right">Open — for considered work</div>
      </header>

      <div className="flex-1 flex flex-col justify-center py-24">
        <Reveal>
          <p className="text-meta mb-8">Begin —</p>
          <a
            href="mailto:studio@mttr.studio"
            className="display-xl block hover:opacity-60 transition-opacity duration-700 break-all"
          >
            studio<span className="opacity-50">@</span>mttr.studio
          </a>
        </Reveal>

        <div className="mt-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta mb-3">Studio</div>
            <p>Copenhagen — DK<br />Mexico City — MX</p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta mb-3">Press</div>
            <a href="mailto:press@mttr.studio" className="hover:opacity-60">press@mttr.studio</a>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta mb-3">Elsewhere</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:opacity-60">Vimeo →</a></li>
              <li><a href="#" className="hover:opacity-60">Instagram →</a></li>
              <li><a href="#" className="hover:opacity-60">Are.na →</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta mb-3">Hours</div>
            <p>CET — 09:00 / 18:00<br />CST — 09:00 / 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
