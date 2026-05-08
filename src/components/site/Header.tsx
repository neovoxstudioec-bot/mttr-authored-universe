import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/archive", label: "Archive" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function useClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  return t.toUTCString().slice(17, 25) + " UTC";
}

export function Header() {
  const clock = useClock();
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-5 md:px-8 py-5">
        <Link to="/" className="text-meta text-foreground">
          mttr<span className="opacity-60">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => {
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className="text-meta text-foreground"
              >
                <span className={active ? "opacity-100" : "opacity-50 hover:opacity-100 transition-opacity"}>
                  {String(nav.indexOf(n) + 1).padStart(2, "0")} — {n.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="text-meta text-foreground hidden sm:block">{clock}</div>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden text-meta text-foreground"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-background mix-blend-normal flex flex-col">
          <div className="flex justify-between items-center px-5 py-5 hairline-b">
            <Link to="/" onClick={() => setOpen(false)} className="text-meta">mttr.</Link>
            <button onClick={() => setOpen(false)} className="text-meta">Close</button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-5 gap-6">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="display-md flex items-baseline gap-4"
              >
                <span className="text-meta opacity-50">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
