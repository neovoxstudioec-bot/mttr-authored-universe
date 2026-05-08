import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import hero from "@/assets/hero-01.jpg";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Statement />
      <FeaturedWork />
      <Closing />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] -mt-20 overflow-hidden vignette">
      <motion.img
        src={hero}
        alt="MTTR — atmospheric architectural still"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-background/30" />

      {/* Metadata corners */}
      <div className="absolute top-24 left-5 md:left-8 text-meta">
        <div>MTTR / Edition One</div>
        <div className="opacity-60">Frame 001 — 24fps</div>
      </div>
      <div className="absolute top-24 right-5 md:right-8 text-meta text-right">
        <div>52.5200° N</div>
        <div className="opacity-60">13.4050° E</div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end px-5 md:px-8 pb-16 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl"
        >
          MTTR<span className="opacity-50">.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-6 flex flex-wrap items-end justify-between gap-6"
        >
          <p className="text-base md:text-xl max-w-md opacity-80">
            making things <em className="not-italic opacity-60">that matter.</em>
          </p>
          <div className="text-meta opacity-70">
            A multidisciplinary visual identity<br />
            by Mattías Ortega — est. 2021
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-5 md:left-8 text-meta opacity-70 z-10">
        Scroll — Index
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Creative Direction",
    "Cinematic Storytelling",
    "Branding Systems",
    "Motion",
    "Photography",
    "Filmmaking",
    "Visual Systems",
  ];
  const line = [...items, ...items];
  return (
    <section className="hairline-y border-y border-[var(--hairline)] py-6 overflow-hidden">
      <div className="flex marquee whitespace-nowrap gap-12">
        {line.map((t, i) => (
          <span key={i} className="display-md opacity-90">
            {t}
            <span className="mx-12 opacity-30">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="px-5 md:px-8 py-32 md:py-48 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-2 text-meta">
        <div>STMT_001</div>
        <div className="opacity-60 mt-1">On posture</div>
      </div>
      <Reveal className="col-span-12 md:col-span-9 md:col-start-4">
        <p className="display-lg">
          MTTR is a quiet practice for loud ideas — building authored visual
          worlds across film, identity and motion.
        </p>
        <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
          We work in disciplines, not deliverables. Each project is approached as
          a complete system: a posture, a palette, a way of moving through a
          room. The work that follows is what survives the editing.
        </p>
      </Reveal>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="px-5 md:px-8">
      <div className="hairline-b pb-4 flex justify-between items-end">
        <div>
          <div className="text-meta opacity-60">Selected — 2024 / 2025</div>
          <h2 className="display-md mt-3">Featured Work</h2>
        </div>
        <Link to="/work" className="text-meta hover:opacity-60">View all (06) →</Link>
      </div>

      <div className="mt-16 space-y-32 md:space-y-48">
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="grid grid-cols-12 gap-4 items-end mb-6">
                <div className="col-span-6 text-meta">
                  <div>{p.index}</div>
                  <div className="opacity-60 mt-1">{p.year} — {p.location}</div>
                </div>
                <div className="col-span-6 text-meta text-right">
                  <div>{p.disciplines.slice(0, 2).join(" / ")}</div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <motion.img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-700" />
              </div>
              <div className="mt-6 flex justify-between items-end gap-6">
                <h3 className={(i % 2 === 0 ? "" : "md:text-right ml-auto ") + "display-lg"}>
                  {p.title}
                </h3>
                <span className="text-meta hidden md:block">View case — →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="px-5 md:px-8 py-32 md:py-48">
      <Reveal>
        <p className="display-lg max-w-5xl">
          New work, considered collaborations and long conversations —
          <Link to="/contact" className="opacity-60 hover:opacity-100 underline underline-offset-8 decoration-1"> begin a project →</Link>
        </p>
      </Reveal>
    </section>
  );
}
