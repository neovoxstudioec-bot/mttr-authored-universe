import { Outlet, Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Grain } from "./Grain";

export function SiteLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Grain />
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollHint />
    </div>
  );
}

function ScrollHint() {
  return (
    <Link
      to="/work"
      className="hidden lg:flex fixed bottom-5 right-5 z-40 text-meta items-center gap-2 mix-blend-difference text-foreground"
    >
      <span className="opacity-60">View Index</span>
      <span>→</span>
    </Link>
  );
}
