import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="hairline-t mt-32">
      <div className="px-5 md:px-8 py-12 grid grid-cols-2 md:grid-cols-12 gap-8">
        <div className="col-span-2 md:col-span-5">
          <p className="display-md max-w-xl">
            Making things <em className="not-italic opacity-60">that matter.</em>
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-meta mb-3">Index</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/work" className="hover:opacity-60">Work</Link></li>
            <li><Link to="/archive" className="hover:opacity-60">Archive</Link></li>
            <li><Link to="/journal" className="hover:opacity-60">Journal</Link></li>
            <li><Link to="/about" className="hover:opacity-60">About</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-meta mb-3">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://vimeo.com" className="hover:opacity-60">Vimeo</a></li>
            <li><a href="https://instagram.com" className="hover:opacity-60">Instagram</a></li>
            <li><a href="https://are.na" className="hover:opacity-60">Are.na</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-meta mb-3">Contact</p>
          <a href="mailto:studio@mttr.studio" className="text-sm hover:opacity-60">studio@mttr.studio</a>
        </div>
      </div>
      <div className="hairline-t px-5 md:px-8 py-5 flex flex-wrap justify-between gap-3 text-meta">
        <span>© MMXXV — MTTR Studio</span>
        <span>52.5200° N / 13.4050° E</span>
        <span>v1.04 — Edition One</span>
      </div>
    </footer>
  );
}
