import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-ink/5 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 h-16">
        <Link to="/" className="min-w-0 truncate text-lg font-medium tracking-tight">
          Desigan M.
        </Link>

        <div className="hidden gap-8 text-sm font-medium text-ink/60 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-ink" }}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-full px-3 py-1 text-sm font-medium ring-1 ring-ink/10 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-surface px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-ink/70">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeProps={{ className: "text-ink" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
