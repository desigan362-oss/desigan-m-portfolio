import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

const tones = ["bg-pastel-lilac", "bg-pastel-mint", "bg-pastel-peach", "bg-pastel-blue"];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link to="/work/$projectId" params={{ projectId: project.id }} className={`group flex flex-col overflow-hidden rounded-md border border-ink/15 ${tones[index % tones.length]} text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
      <div className="aspect-4/3 w-full overflow-hidden bg-panel-soft">
        <img src={project.heroImage} alt={`${project.clientName} — ${project.title}`} loading="lazy" width={1536} height={1024} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-5 flex items-center justify-between gap-4 text-[11px] font-bold uppercase text-ink/70">
          <span>{project.category[0]}</span><span>{project.year}</span>
        </div>
        <h3 className="font-display text-xl font-bold">{project.clientName}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/80">{project.description}</p>
        <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-bold">
          <span>{project.galleryImages.length} design{project.galleryImages.length === 1 ? "" : "s"}</span><span className="flex items-center gap-1">View project <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
        </div>
      </div>
    </Link>
  );
}
