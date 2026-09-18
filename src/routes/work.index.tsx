import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, filterProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Desigan M." },
      {
        name: "description",
        content:
          "Client projects by Desigan M. across UI/UX, branding, graphic design, social media, marketing and posters.",
      },
      { property: "og:title", content: "Work — Desigan M." },
      { property: "og:description", content: "Client projects across UI/UX, branding, campaigns and print." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [active, setActive] = useState<string>("All");
  const visible = filterProjects(active);

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Graphic design · UI/UX · Training</p>
        <h1 className="mt-5 font-display text-5xl font-bold leading-none md:text-7xl">Client work & design practice</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/65">Graphic design leads the collection, followed by independent UI/UX projects and a training practice built with 50+ learners.</p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-md border border-ink/10 bg-coral/20 p-5"><span className="text-xs font-bold text-ink/45">01</span><strong className="mt-5 block text-xl">Graphic Design</strong><p className="mt-2 text-sm text-ink/60">Branding, packaging, campaigns and communication.</p></div>
          <div className="rounded-md border border-ink/10 bg-accent-soft p-5"><span className="text-xs font-bold text-ink/45">02</span><strong className="mt-5 block text-xl">UI/UX Design</strong><p className="mt-2 text-sm text-ink/60">Flows, interfaces, prototypes and design systems.</p></div>
          <div className="rounded-md border border-ink/10 bg-lime/55 p-5"><span className="text-xs font-bold text-ink/45">03 · Highlight</span><strong className="mt-5 block text-xl">Design Training</strong><p className="mt-2 text-sm text-ink/60">50+ students mentored through practical projects.</p></div>
        </div>

        <div className="mt-14 mb-14 flex flex-wrap gap-2 border-b border-ink/10 pb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={active === c ? "rounded-full bg-ink px-4 py-2 text-sm font-bold text-surface" : "rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink/50 transition-colors hover:border-ink hover:text-ink"}
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-ink/50">No projects in this category yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, index) => (
              <ProjectCard key={p.id} project={p} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
