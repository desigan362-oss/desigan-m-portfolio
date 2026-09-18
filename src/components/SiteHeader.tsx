import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/graphic-design", label: "Graphic Design" },
  { to: "/ui-ux-projects", label: "UI/UX" },
  { to: "/work", label: "All Work" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-surface/90 text-ink backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-6" aria-label="Main navigation">
        <Link to="/" className="shrink-0 font-display text-base font-bold"><span className="text-accent">D</span>esigan M.</Link>
        <div className="hidden items-center gap-6 text-[13px] font-medium text-ink/60 lg:flex">
          {links.map((link) => <Link key={link.to} to={link.to} activeProps={{ className: "text-ink" }} className="transition-colors hover:text-ink">{link.label}</Link>)}
        </div>
        <a href="mailto:desigan362@gmail.com" className="hidden rounded-md bg-accent px-4 py-2 text-xs font-bold text-accent-foreground transition-transform hover:-translate-y-0.5 lg:inline-flex">Let’s talk</a>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center rounded-md border border-ink/15 text-ink lg:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </nav>
      {open && <div className="border-t border-ink/10 bg-surface px-6 py-6 lg:hidden"><div className="grid gap-4">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} activeProps={{ className: "text-accent" }} className="text-lg font-semibold text-ink/75">{link.label}</Link>)}</div></div>}
    </header>
  );
}
