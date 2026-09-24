import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/graphic-design", label: "Graphic Design" },
  { to: "/ui-ux-projects", label: "UI/UX" },
  { to: "/training", label: "Training" },
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
        <Link to="/" className="shrink-0 font-display text-base font-bold">Home</Link>
        <div className="hidden items-center gap-6 text-[13px] font-medium text-ink/60 lg:flex">
          {links.map((link) => <Link key={link.to} to={link.to} activeProps={{ className: "text-ink" }} className="transition-colors hover:text-ink">{link.label}</Link>)}
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Button asChild className="hidden h-10 bg-accent px-5 text-xs font-bold text-accent-foreground shadow-[0_8px_24px_var(--accent-shadow)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong lg:inline-flex">
            <a href="mailto:desigan362@gmail.com">Discuss a project</a>
          </Button>
          <Button type="button" variant="outline" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)} className="size-10 border-ink/15 bg-card text-ink shadow-none lg:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</Button>
        </div>
      </nav>
      {open && <div className="border-t border-ink/10 bg-surface px-6 py-6 lg:hidden"><div className="grid gap-4">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} activeProps={{ className: "text-accent" }} className="text-lg font-semibold text-ink/75">{link.label}</Link>)}<Button asChild className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent-strong"><a href="mailto:desigan362@gmail.com">Discuss a project</a></Button></div></div>}
    </header>
  );
}
