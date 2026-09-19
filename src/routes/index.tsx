import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, GraduationCap, Palette, PenTool, Users } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { ProjectCard } from "@/components/ProjectCard";
import { SolarSystemBackground } from "@/components/SolarSystemBackground";
import portrait from "@/assets/desigan-portrait.png.asset.json";
import { featuredProjects } from "@/data/projects";

const clients = ["Annai Mira World School", "Prime Public School", "KAR Towers", "Lee Digital Arts", "MAPIS Clinic", "Jayanthi Bakery", "Beez Haircare", "Design Training"];
const certificates = [
  ["Jul—Aug 2025", "UI/UX Design Internship", "Untik"],
  ["Sep—Nov 2025", "Graphic Designing Internship", "Myme Techies"],
  ["Dec 2025—Mar 2026", "UI/UX Design Internship", "Least Action"],
  ["Jun 2026", "Graphic Designing Trainer Certificate", "Trainer credential"],
  ["Jun 2026", "UI/UX Designing Trainer Certificate", "Trainer credential"],
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Desigan M. — Designer & Trainer Portfolio" },
    { name: "description", content: "Portfolio of Desigan M., a UI/UX, graphic and visual designer and trainer creating brand, packaging and digital experiences." },
    { property: "og:title", content: "Desigan M. — Designer & Trainer Portfolio" },
    { property: "og:description", content: "Graphic design, UI/UX, branding, packaging and training work by Desigan M." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Index,
});

function Index() {
  const featured = featuredProjects();
  return <>
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-panel px-6 pb-14 pt-12 text-ink md:pt-20">
      <SolarSystemBackground />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl items-center">
        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1fr_320px]">
          <div className="max-w-4xl py-16">
            <div className="mb-8 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.24em] text-accent"><span className="h-px w-10 bg-accent" /> Portfolio · 2026</div>
            <h1 className="whitespace-nowrap font-display text-5xl font-extrabold leading-none sm:text-7xl md:text-8xl xl:text-9xl">Desigan <span className="text-accent">M</span></h1>
            <p className="mt-7 max-w-3xl text-xl font-semibold leading-snug text-ink md:text-3xl">Building memorable brands through graphic design, visual storytelling and thoughtful digital experiences.</p>
            <p className="mt-5 max-w-xl text-sm font-bold leading-relaxed text-ink/80 md:text-base">Graphic Designer · UI/UX Designer · Visual Designer · Trainer</p>
            <div className="mt-9"><ContactActions /></div>
          </div>
          <img src={portrait.url} alt="Portrait of Desigan M." width={800} height={1000} className="hidden aspect-4/5 w-full max-w-[320px] justify-self-end rounded-md border border-ink/15 bg-panel-soft object-cover object-top shadow-lg lg:block" />
        </div>
      </div>
      <a href="#highlights" className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45">Explore <ArrowDown className="size-4 animate-bounce" /></a>
    </section>

    <section id="highlights" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Portfolio highlights</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Selected collaborations</h2></div><Link to="/work" className="flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-bold">Explore all work <ArrowUpRight className="size-4" /></Link></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.slice(0, 6).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <div className="mt-14 flex justify-center">
          <Link to="/work" className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent-soft px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-md">
            Show more
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
        </div>
      </div>
      </div>
    </section>

    <section id="proof" className="overflow-hidden border-y border-ink/10 bg-accent py-5 text-accent-foreground">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm font-bold uppercase tracking-[0.16em]">{[...clients, ...clients].map((client, index) => <span key={`${client}-${index}`} className="flex items-center gap-12"><span>{client}</span><span className="size-1.5 rounded-full bg-accent-foreground" /></span>)}</div>
    </section>

    <section className="px-6 pb-10 pt-24 md:pb-14 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Design practice</p><h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">Three disciplines.<br />One clear purpose.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[[Palette,"Graphic design","Brand identity, packaging, campaigns and visual communication."],[PenTool,"UI/UX design","User-centred flows, interfaces, prototypes and scalable systems."],[Users,"Training","Practical mentoring that has helped 35+ students build design confidence."]].map(([Icon,title,copy], index) => { const I = Icon as typeof Palette; return <div key={String(title)} className={`${index === 2 ? "bg-pastel-lilac" : index === 1 ? "bg-pastel-blue" : "bg-pastel-peach"} rounded-md border border-ink/15 p-6 text-ink shadow-sm transition-transform hover:-translate-y-1`}><I className="size-6" /><h3 className="mt-10 text-lg font-bold">{String(title)}</h3><p className="mt-3 text-sm leading-relaxed text-ink/80">{String(copy)}</p></div>})}
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/15 bg-ink/10 md:grid-cols-4">{[["5+","Clients"],["4","UI/UX projects"],["35+","Students trained"],["100+","Visual designs"]].map(([value,label]) => <div key={label} className="bg-accent-soft p-6 text-ink md:p-8"><strong className="font-display text-4xl font-bold text-accent-strong md:text-5xl">{value}</strong><span className="mt-2 block text-xs font-bold uppercase text-ink/70">{label}</span></div>)}</div>
      </div>
    </section>

    <section className="px-6 pb-24 pt-8 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><GraduationCap className="size-8 text-accent" /><p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">Learning journey</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Certified through practice.</h2><p className="mt-5 max-w-sm leading-relaxed text-ink/65">Internships across product and visual design, followed by formal trainer certifications.</p></div><div className="border-t border-ink/15">{certificates.map(([period,title,place]) => <div key={`${period}-${title}`} className="grid gap-3 border-b border-ink/15 py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center"><span className="text-xs font-bold text-accent">{period}</span><strong>{title}</strong><span className="text-sm text-ink/50">{place}</span></div>)}</div></div>
      </div>
    </section>
  </>;
}
