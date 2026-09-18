import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/work/$projectId"
      params={{ projectId: project.id }}
      className="group flex flex-col gap-5"
    >
      <div className="aspect-4/3 w-full overflow-hidden rounded-[12px] bg-ink/5 outline outline-1 -outline-offset-1 outline-ink/5">
        <img
          src={project.heroImage}
          alt={`${project.clientName} — ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-medium">{project.clientName}</h3>
          <p className="mt-1 text-sm text-ink/60 line-clamp-2">{project.description}</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-ink/40">
            {project.category[0]} · {project.galleryImages.length} design
            {project.galleryImages.length === 1 ? "" : "s"}
          </p>
        </div>
        <span className="shrink-0 rounded-full px-3 py-1 text-[11px] font-medium ring-1 ring-ink/10 transition-colors group-hover:bg-ink group-hover:text-surface">
          View Project
        </span>
      </div>
    </Link>
  );
}
