import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Palette } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { graphicDesignProjects } from "@/data/projects";

export const Route = createFileRoute("/graphic-design")({
  head: () => ({
    meta: [
      { title: "Graphic Design Projects — Desigan M." },
      { name: "description", content: "Graphic design, packaging, branding, campaign and visual communication projects by Desigan M." },
      { property: "og:title", content: "Graphic Design Projects — Desigan M." },
      { property: "og:description", content: "Explore branding, packaging, campaigns and visual communication by Desigan M." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GraphicDesignPage,
});

function GraphicDesignPage() {
  const projects = graphicDesignProjects();
  return (
    <>
      <section className="bg-pastel-peach px-6 py-24 text-ink md:py-32">
        <div className="mx-auto max-w-7xl">
          <Palette className="size-8 text-coral" />
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-coral">Primary design practice</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold leading-tight md:text-7xl">Graphic design that gives brands a clear, memorable voice.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/80">Packaging, identity, campaigns, posters and social communication developed for growing brands and institutions.</p>
          <Link to="/work" className="mt-8 inline-flex items-center gap-2 border-b border-ink/40 pb-1 text-sm font-bold">View every project <ArrowUpRight className="size-4" /></Link>
        </div>
      </section>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Graphic design collection</p><h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Client and brand projects</h2></div>
            <span className="text-sm font-bold text-ink/70">{projects.length} projects</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        </div>
      </section>
    </>
  );
}