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
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [active, setActive] = useState<string>("All");
  const visible = filterProjects(active);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-5xl font-medium leading-none md:text-7xl">Work</h1>
        <p className="mt-6 max-w-[52ch] text-lg text-ink/70">
          Projects organised by client. Each one opens into a full gallery of the designs made for
          them.
        </p>

        <div className="mt-16 mb-16 flex flex-wrap gap-6 border-b border-ink/5 pb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={
                active === c
                  ? "text-sm font-medium text-ink"
                  : "text-sm font-medium text-ink/40 transition-colors hover:text-ink"
              }
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-ink/50">No projects in this category yet.</p>
        ) : (
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
