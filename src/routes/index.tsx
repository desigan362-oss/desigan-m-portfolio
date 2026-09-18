import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/desigan-portrait.png.asset.json";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desigan M. — UI/UX, Graphic & Visual Designer" },
      {
        name: "description",
        content:
          "Portfolio of Desigan M., a UI/UX, graphic and visual designer and trainer. Brand identity, campaigns, posters and product design.",
      },
      { property: "og:title", content: "Desigan M. — UI/UX, Graphic & Visual Designer" },
      {
        property: "og:description",
        content: "Selected design work across branding, campaigns, social media and product design.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = featuredProjects();

  return (
    <>
      <section className="px-6 pt-24 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="mb-8 font-display text-5xl font-medium leading-none text-balance md:text-7xl lg:text-8xl">
                Visual architecture for human experiences.
              </h1>
              <p className="max-w-[48ch] text-lg leading-relaxed text-ink/70 md:text-xl">
                UI/UX Designer, Graphic &amp; Visual Designer and Trainer — working across brand
                identity, campaigns and digital product design.
              </p>
            </div>
            <div className="w-32 justify-self-start sm:w-36 lg:w-40 lg:justify-self-end">
              <img
                src={portrait.url}
                alt="Portrait of Desigan M."
                width={800}
                height={1000}
                className="aspect-4/5 w-full rounded-[8px] object-cover object-top outline outline-1 -outline-offset-1 outline-ink/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-ink/[0.015] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-medium tracking-tight">Selected Works</h2>
            <Link
              to="/work"
              className="inline-flex items-center rounded-full bg-ink py-2 pr-4 pl-2 text-sm font-medium text-surface ring-1 ring-ink transition-opacity hover:opacity-90"
            >
              <span className="mr-2 flex size-4 shrink-0 items-center justify-center rounded-full bg-surface/20">
                <span className="size-1 bg-surface" />
              </span>
              View All Work
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
