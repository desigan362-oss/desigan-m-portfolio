import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Award, Bot, Heart, Palette, Presentation, Sparkles, Triangle, Users } from "lucide-react";
import { SiClaude, SiFigma, SiMiro } from "@icons-pack/react-simple-icons";
import { PageHero } from "@/components/PageHero";
import focusAsset from "@/assets/training-workshop-focus.jpeg.asset.json";
import wideAsset from "@/assets/training-workshop-wide.jpeg.asset.json";
import studioAsset from "@/assets/training-workshop-studio.jpeg.asset.json";
import liveAsset from "@/assets/training-live-session.jpeg.asset.json";
import oneToOneAsset from "@/assets/training-one-to-one.jpeg.asset.json";
import practicalAsset from "@/assets/training-practical-session.jpeg.asset.json";
import mentoringAsset from "@/assets/training-mentoring.jpeg.asset.json";
import practiceAsset from "@/assets/training-student-practice.jpeg.asset.json";
import fullWorkshopAsset from "@/assets/training-full-workshop.jpeg.asset.json";
import guidedAsset from "@/assets/training-guided-workshop.jpeg.asset.json";

const tools = [
  { mark: "Ps", name: "Photoshop", tone: "bg-pastel-blue" },
  { mark: "Ai", name: "Illustrator", tone: "bg-pastel-peach" },
  { icon: Palette, name: "Canva", tone: "bg-accent-soft" },
  { icon: Triangle, name: "Affinity", tone: "bg-coral/20" },
  { icon: SiFigma, name: "Figma", tone: "bg-pastel-lilac" },
  { icon: SiMiro, name: "Miro", tone: "bg-lime/35" },
  { icon: Bot, name: "ChatGPT", tone: "bg-pastel-mint" },
  { icon: SiClaude, name: "Claude", tone: "bg-pastel-peach" },
  { icon: Heart, name: "Lovable", tone: "bg-accent-soft" },
] as const;

const photos = [
  { src: wideAsset.url, alt: "Students participating in a practical design workshop", caption: "Collaborative design practice", shape: "md:col-span-2" },
  { src: focusAsset.url, alt: "Students working closely on design exercises using laptops", caption: "Focused tool practice", shape: "" },
  { src: studioAsset.url, alt: "A full classroom of students working on design projects", caption: "Independent project time", shape: "" },
  { src: liveAsset.url, alt: "Trainer presenting a live design lesson to students", caption: "Live demonstrations", shape: "md:col-span-2" },
  { src: oneToOneAsset.url, alt: "Trainer giving one-to-one guidance during a workshop", caption: "Personal mentoring", shape: "" },
  { src: practicalAsset.url, alt: "Students completing practical design activities", caption: "Learning by making", shape: "" },
  { src: mentoringAsset.url, alt: "Trainer discussing a student's design work", caption: "Clear, practical feedback", shape: "" },
  { src: practiceAsset.url, alt: "Students practising digital design skills on laptops", caption: "Hands-on learning", shape: "" },
  { src: fullWorkshopAsset.url, alt: "A busy design workshop with students working across the studio", caption: "Creative workshop energy", shape: "md:col-span-2" },
  { src: guidedAsset.url, alt: "Trainer leading students through a classroom design session", caption: "Guided classroom session", shape: "md:col-span-2" },
] as const;

const pillars = [
  { icon: Presentation, number: "01", title: "Explain", copy: "Break complex design ideas into clear, approachable steps." },
  { icon: Sparkles, number: "02", title: "Demonstrate", copy: "Turn every concept into a live, visual demonstration." },
  { icon: Users, number: "03", title: "Practice", copy: "Guide learners through hands-on briefs and practical tools." },
  { icon: Award, number: "04", title: "Mentor", copy: "Give useful feedback that builds confidence and independence." },
] as const;

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Design Training — Desigan M." },
      { name: "description", content: "Hands-on UI/UX and graphic design training led by Desigan M. for students, interns and emerging creatives." },
      { property: "og:title", content: "Design Training — Desigan M." },
      { property: "og:description", content: "Practical workshops, live demonstrations and design mentorship for emerging creatives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <>
      <PageHero className="min-h-[620px]">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_.45fr]">
          <div>
            <div className="inline-flex -rotate-2 items-center gap-2 rounded-full border border-ink/15 bg-pastel-peach px-4 py-2 text-xs font-bold uppercase text-ink shadow-sm">
              <Sparkles className="size-4" /> Design trainer
            </div>
            <h1 className="mt-7 max-w-5xl font-display text-5xl font-bold leading-[1.04] md:text-7xl">Learn it. Make it. <span className="text-accent-strong">Own it.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/75">Practical UI/UX and graphic design training built around live demos, real briefs, honest feedback and confident creative thinking.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rotate-2 rounded-md border border-ink/10 bg-pastel-lilac p-5 shadow-lg"><strong className="font-display text-4xl">50+</strong><span className="mt-2 block text-sm font-semibold text-ink/65">Students mentored</span></div>
            <div className="-rotate-2 rounded-md border border-ink/10 bg-pastel-peach p-5 shadow-lg"><strong className="font-display text-4xl">2</strong><span className="mt-2 block text-sm font-semibold text-ink/65">Trainer credentials</span></div>
          </div>
        </div>
        <ArrowDown className="mt-12 size-6 animate-bounce text-accent" aria-hidden="true" />
      </PageHero>

      <section className="overflow-hidden border-y border-ink/10 bg-card py-8" aria-label="Training tools">
        <div className="flex w-max animate-tool-marquee gap-4 px-2">
          {[...tools, ...tools].map((tool, index) => {
            const ToolIcon = "icon" in tool ? tool.icon : null;
            return (
            <div key={`${tool.name}-${index}`} className={`${tool.tone} flex w-44 shrink-0 items-center gap-3 rounded-md border border-ink/10 p-3 shadow-sm`}>
              <span className="animate-tool-float grid size-11 place-items-center rounded-md border border-ink/15 bg-surface font-display text-lg font-extrabold text-ink" style={{ animationDelay: `${(index % tools.length) * 120}ms` }}>{ToolIcon ? <ToolIcon className="size-5" aria-hidden="true" /> : "mark" in tool ? tool.mark : null}</span>
              <span className="text-sm font-bold text-ink">{tool.name}</span>
            </div>
          )})}
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">How I teach</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Less theory theatre. More creative momentum.</h2></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => <article key={pillar.title} className={`${index % 2 === 0 ? "bg-pastel-lilac" : "bg-pastel-peach"} group rounded-md border border-ink/10 p-6 transition-transform duration-300 hover:-translate-y-2 hover:rotate-1`}><div className="flex items-center justify-between"><pillar.icon className="size-7 text-accent-strong transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"/><span className="text-xs font-bold text-ink/45">{pillar.number}</span></div><h3 className="mt-14 font-display text-2xl font-bold">{pillar.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/70">{pillar.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-panel-soft px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Workshop moments</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Learning in action.</h2></div><p className="max-w-md text-sm leading-relaxed text-ink/65">Real sessions with students exploring design tools, solving briefs and developing practical creative confidence.</p></div>
          <div className="mt-12 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, index) => <figure key={photo.src} className={`${photo.shape} group overflow-hidden rounded-md border border-ink/10 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}><div className="overflow-hidden bg-muted"><img src={photo.src} alt={photo.alt} loading="lazy" className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" /></div><figcaption className="flex items-center justify-between gap-4 p-4 text-sm font-bold"><span>{photo.caption}</span><span className="text-xs text-accent">{String(index + 1).padStart(2, "0")}</span></figcaption></figure>)}
          </div>
        </div>
      </section>
    </>
  );
}