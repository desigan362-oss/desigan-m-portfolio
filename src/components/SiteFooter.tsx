import { ContactActions } from "@/components/ContactActions";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-accent-soft px-6 py-20 text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">Have a project in mind?</p>
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">Let’s make something clear, useful and memorable.</h2>
        </div>
        <div><ContactActions compact /></div>
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink/45">
        <span>© {new Date().getFullYear()} Desigan M.</span><span>Designer · Trainer · Human-centred thinker</span>
      </div>
    </footer>
  );
}
