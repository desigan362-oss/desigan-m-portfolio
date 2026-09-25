import { createFileRoute, notFound } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { getProject } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SolarSystemBackground } from "@/components/SolarSystemBackground";

export const Route = createFileRoute("/work/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Desigan M." }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.clientName} — Desigan M.` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.clientName} — Desigan M.` },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <article>
      <section className="relative isolate overflow-hidden bg-panel px-6 py-24 md:py-32">
        <SolarSystemBackground />
        <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {project.clientName} · {project.year}
            </span>
            <h1 className="mb-8 font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              {project.title}
            </h1>
            <div className="grid grid-cols-2 gap-8 border-t border-ink/5 pt-8">
              <div className="min-w-0">
                <h2 className="mb-2 text-[10px] font-medium uppercase tracking-wider text-ink/40">Role</h2>
                <p className="text-sm">{project.role}</p>
              </div>
              <div className="min-w-0">
                <h2 className="mb-2 text-[10px] font-medium uppercase tracking-wider text-ink/40">Services</h2>
                <p className="text-sm">{project.services.join(", ")}</p>
              </div>
              <div className="col-span-2 min-w-0">
                <h2 className="mb-2 text-[10px] font-medium uppercase tracking-wider text-ink/40">
                  Design categories
                </h2>
                <p className="text-sm">{project.category.join(" · ")}</p>
              </div>
              {project.clientType && <div className="col-span-2 min-w-0"><h2 className="mb-2 text-[10px] font-medium uppercase tracking-wider text-ink/40">Client type</h2><p className="text-sm">{project.clientType}</p></div>}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="max-w-[48ch] text-lg leading-relaxed text-pretty text-ink/70">{project.overview}</p>
            <p className="max-w-[48ch] text-base leading-relaxed text-ink/60">{project.description}</p>
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="w-fit border-b border-ink/20 pb-1 text-sm font-medium transition-colors hover:border-ink"
              >
                View the prototype
              </a>
            )}
            {project.instagramUrl && (
              <a href={project.instagramUrl} target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 border-b border-ink/20 pb-1 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
                <Instagram className="size-4" /> View {project.clientName} on Instagram
              </a>
            )}
          </div>
        </div>

        </div>
      </section>
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <img
          src={project.heroImage}
          alt={`${project.clientName} hero design`}
          width={1536}
          height={1024}
          className="mb-20 w-full rounded-md outline outline-1 -outline-offset-1 outline-ink/10"
        />

        {project.galleryImages.length > 0 && <><h2 className="mb-10 font-display text-3xl font-medium">Gallery</h2><ProjectGallery images={project.galleryImages} /></>}
        </div>
      </section>
    </article>
  );
}
