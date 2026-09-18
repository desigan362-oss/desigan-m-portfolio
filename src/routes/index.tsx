import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Circle, GraduationCap, Palette, PenTool, Sparkles, Users } from "lucide-react";
import portrait from "@/assets/desigan-portrait.png.asset.json";
import { ContactActions } from "@/components/ContactActions";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

const clients = ["Beez Haircare", "Jayanthi Bakery", "Annai Mira World School", "Prime Public School", "MAPIS Clinic", "Lee Digital Arts", "KAR Towers"];
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
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-panel px-6 pb-12 pt-12 text-ink md:pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(var(--color-accent)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.24em] text-accent"><span className="h-px w-10 bg-accent" /> Portfolio · 2026</div>
          <h1 className="font-display text-6xl font-extrabold leading-[.92] md:text-8xl xl:text-9xl">Desigan<br /><span className="text-accent">M.</span></h1>
          <p className="mt-7 max-w-2xl text-xl font-medium leading-snug text-ink/85 md:text-3xl">Designing bold identities, thoughtful digital experiences and the next generation of creative thinkers.</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/55 md:text-base">UI/UX Designer · Graphic Designer · Visual Designer · Trainer</p>
          <div className="mt-9"><ContactActions /></div>
        </div>
        <div className="relative mx-auto h-[440px] w-full max-w-xl overflow-hidden md:h-[620px]">
          <div className="absolute left-1/2 top-12 h-[68%] w-[68%] -translate-x-1/2 rounded-full border-[22px] border-accent/55 md:border-[34px]" />
          <div className="absolute left-[16%] top-[19%] size-20 rounded-md border border-accent/30 bg-card/80 shadow-xl animate-space-float" />
          <Sparkles className="absolute right-[10%] top-[24%] size-10 text-coral animate-orbit-a" />
          <Circle className="absolute bottom-[24%] left-[8%] size-8 fill-lime text-lime animate-orbit-b" />
          <div className="absolute right-[8%] top-[48%] size-14 rotate-12 rounded-md bg-coral/25 animate-space-float [animation-delay:1.4s]" />
          <img src={portrait.url} alt="Desigan M." width={800} height={1000} className="absolute bottom-0 left-1/2 z-10 h-[82%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom" />
          <div className="absolute right-0 top-0 z-30 max-w-[190px] rounded-md border border-ink/10 bg-card/85 p-4 text-xs leading-relaxed text-ink/65 shadow-lg backdrop-blur"><span className="mb-2 block font-bold text-coral">Design perspective</span>Good design makes complex ideas feel natural, useful and memorable.</div>
        </div>
      </div>
      <a href="#highlights" className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45">Explore <ArrowDown className="size-4 animate-bounce" /></a>
    </section>

    <section id="highlights" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Portfolio highlights</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Selected collaborations</h2></div><Link to="/work" className="flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-bold">Explore all work <ArrowUpRight className="size-4" /></Link></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.slice(0, 6).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      </div>
    </section>

    <section id="proof" className="overflow-hidden border-y border-ink/10 bg-accent py-5 text-accent-foreground">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm font-bold uppercase tracking-[0.16em]">{[...clients, ...clients].map((client, index) => <span key={`${client}-${index}`} className="flex items-center gap-12"><span>{client}</span><span className="size-1.5 rounded-full bg-accent-foreground" /></span>)}</div>
    </section>

    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Design practice</p><h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">Three disciplines.<br />One clear purpose.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[[Palette,"Graphic design","Brand identity, packaging, campaigns and visual communication."],[PenTool,"UI/UX design","User-centred flows, interfaces, prototypes and scalable systems."],[Users,"Training","Practical mentoring that has helped 50+ students build design confidence."]].map(([Icon,title,copy], index) => { const I = Icon as typeof Palette; return <div key={String(title)} className={`${index === 2 ? "bg-lime/55" : index === 1 ? "bg-accent-soft" : "bg-coral/20"} rounded-md border border-ink/10 p-6 transition-transform hover:-translate-y-1`}><I className="size-6" /><h3 className="mt-10 text-lg font-bold">{String(title)}</h3><p className="mt-3 text-sm leading-relaxed text-ink/65">{String(copy)}</p></div>})}
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 md:grid-cols-4">{[["5+","Client accounts"],["5","UI/UX projects"],["50+","Students trained"],["100+","Visual designs"]].map(([value,label]) => <div key={label} className="bg-card p-6 md:p-8"><strong className="font-display text-4xl font-bold text-accent md:text-5xl">{value}</strong><span className="mt-2 block text-xs font-bold uppercase text-ink/50">{label}</span></div>)}</div>
      </div>
    </section>

    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><GraduationCap className="size-8 text-accent" /><p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">Learning journey</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Certified through practice.</h2><p className="mt-5 max-w-sm leading-relaxed text-ink/65">Internships across product and visual design, followed by formal trainer certifications.</p></div><div className="border-t border-ink/15">{certificates.map(([period,title,place]) => <div key={`${period}-${title}`} className="grid gap-3 border-b border-ink/15 py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center"><span className="text-xs font-bold text-accent">{period}</span><strong>{title}</strong><span className="text-sm text-ink/50">{place}</span></div>)}</div></div>
      </div>
    </section>
  </>;
}
