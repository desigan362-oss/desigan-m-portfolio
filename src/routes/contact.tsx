import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Desigan M." },
      {
        name: "description",
        content: "Get in touch with Desigan M. for UI/UX, branding, campaign and visual design work.",
      },
      { property: "og:title", content: "Contact — Desigan M." },
      { property: "og:description", content: "Get in touch for design work and collaborations." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl font-medium leading-none md:text-7xl">Contact</h1>
          <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-ink/70">
            Open to brand identity, campaign, product design and training work. Tell me a little
            about the project and I'll get back to you.
          </p>
        </div>

        <div className="space-y-8 lg:pt-6">
          <div className="border-t border-ink/10 pt-6">
            <h2 className="mb-2 text-[10px] font-medium uppercase tracking-wider text-ink/40">Email</h2>
            <a
              href="mailto:hello@desigan.design"
              className="text-2xl font-display transition-colors hover:text-accent"
            >
              hello@desigan.design
            </a>
          </div>
          <div className="border-t border-ink/10 pt-6">
            <h2 className="mb-2 text-[10px] font-medium uppercase tracking-wider text-ink/40">Elsewhere</h2>
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <a href="#" className="border-b border-ink/10 pb-1 hover:border-ink">LinkedIn</a>
              <a href="#" className="border-b border-ink/10 pb-1 hover:border-ink">Behance</a>
              <a href="#" className="border-b border-ink/10 pb-1 hover:border-ink">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
