import { ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

const tones = ["bg-pastel-lilac", "bg-pastel-mint", "bg-pastel-peach", "bg-pastel-blue"];

export function ProjectCard({ project }: { project: Project; index?: number }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-ink/15 bg-card text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to="/work/$projectId" params={{ projectId: project.id }} className="block">
      <div className="aspect-4/3 w-full overflow-hidden bg-panel-soft">
        <img src={project.heroImage} alt={`${project.clientName} — ${project.title}`} loading="lazy" width={1536} height={1024} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
      </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-5 flex items-center justify-between gap-4 text-[11px] font-bold uppercase text-ink/70">
          <span>{project.category[0]}</span><span>{project.year}</span>
        </div>
        <h3 className="font-display text-xl font-bold">{project.clientName}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/80">{project.description}</p>
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink/10 pt-4 text-xs font-bold">
          <span>{project.galleryImages.length} design{project.galleryImages.length === 1 ? "" : "s"}</span>
          <div className="flex items-center gap-3">
            {project.instagramUrl && <a href={project.instagramUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.clientName} on Instagram`} title="View Instagram" className="grid size-8 place-items-center rounded-md border border-ink/15 transition-colors hover:border-accent hover:bg-accent-soft"><Instagram className="size-4" /></a>}
            <Link to="/work/$projectId" params={{ projectId: project.id }} className="flex items-center gap-1">View project <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
        </div>
      </div>
    </article>
  );
}
