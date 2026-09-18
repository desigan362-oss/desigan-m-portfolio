export function SiteFooter() {
  return (
    <footer className="border-t border-ink/5 px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-4xl">Let's create something together.</h2>
          <p className="mt-4 text-ink/60">Available for freelance and full-time design work.</p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm font-medium">
          <a
            href="mailto:hello@desigan.design"
            className="border-b border-ink/10 pb-1 transition-colors hover:border-ink"
          >
            Email
          </a>
          <a href="#" className="border-b border-ink/10 pb-1 transition-colors hover:border-ink">
            LinkedIn
          </a>
          <a href="#" className="border-b border-ink/10 pb-1 transition-colors hover:border-ink">
            Behance
          </a>
        </div>
      </div>
      <div className="mx-auto mt-24 flex max-w-7xl flex-wrap justify-between gap-4 text-[10px] font-medium uppercase tracking-widest text-ink/30">
        <span>© {new Date().getFullYear()} Desigan M.</span>
        <span>Visual &amp; Interface Systems</span>
      </div>
    </footer>
  );
}
