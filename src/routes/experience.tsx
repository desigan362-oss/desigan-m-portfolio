import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CertificateModal } from "@/components/CertificateModal";
import untikCertificate from "@/assets/untik-internship-certificate.png.asset.json";
import mymeCertificate from "@/assets/myme-techies-internship-certificate.png.asset.json";
import mymeExperienceCertificate from "@/assets/myme-techies-experience-certificate.png.asset.json";
import leastActionCertificate from "@/assets/least-action-internship-certificate.png.asset.json";

type TimelineItem = {
  date: string;
  title: string;
  org: string;
  detail: string;
  cert?: { url: string; alt: string };
};

const timeline: TimelineItem[] = [
  { date: "10 Jul — 11 Aug 2025", title: "UI/UX Design Intern", org: "Untik", detail: "Practised user flows, wireframing and interface design through a focused product-design internship.", cert: { url: untikCertificate.url, alt: "Untik Certificate of Internship — UI/UX Design, Desigan M" } },
  { date: "Sep — Nov 2025", title: "Graphic Designing Intern", org: "Myme Techies", detail: "Created visual communication and campaign work for real client requirements.", cert: { url: mymeCertificate.url, alt: "Myme Techies Certificate of Internship — Graphic Design, Desigan M" } },
  { date: "10 Dec 2025 — Mar 2026", title: "UI/UX Design Intern", org: "Least Action", detail: "Developed user-centred screens and prototypes while strengthening UX process and presentation.", cert: { url: leastActionCertificate.url, alt: "Least Action Company Certificate of Internship — UI/UX Development, Desigan M" } },
  { date: "Feb — Sep 2026", title: "Graphic Designer · UI/UX Designer · Trainer", org: "Myme Techies", detail: "Completed eight months of professional experience across graphic design, UI/UX design and training, including client projects and mentoring 35+ students.", cert: { url: mymeExperienceCertificate.url, alt: "Myme Techies Certificate of Experience — Graphic Designer and Trainer, Desigan M" } },
  { date: "Jun 2026", title: "Graphic Designing Trainer Certificate", org: "Certification", detail: "Recognition of practical graphic-design teaching and workshop facilitation." },
  { date: "Jun 2026", title: "UI/UX Designing Trainer Certificate", org: "Certification", detail: "Recognition of UI/UX curriculum delivery, mentorship and practical project guidance." },
  { date: "Jul 2026", title: "UI/UX & Graphic Design Trainer", org: "Certification · Online", detail: "Trained students online in UI/UX design and graphic design, covering design fundamentals, tools and hands-on project guidance." },
  { date: "2026 — Ongoing", title: "Learning: Video Editing, Motion Design & Web", org: "Self-driven Learning", detail: "Expanding the toolkit with video editing, motion design, WordPress, Wix, Adobe InDesign and Blender." },
];

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Desigan M." },
      { name: "description", content: "Timeline of internships, professional design work and trainer certifications completed by Desigan M." },
      { property: "og:title", content: "Experience — Desigan M." },
      { property: "og:description", content: "Design roles, internships, certifications and training experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

function Experience() {
  const [openCert, setOpenCert] = useState<{ url: string; alt: string } | null>(null);
  return (
    <>
      <PageHero>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Career path</p>
        <h1 className="mt-5 font-display text-5xl font-bold md:text-7xl">Experience timeline</h1>
      </PageHero>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative border-l border-ink/15 md:ml-44">
            {timeline.map((item) => {
              const hasCert = Boolean(item.cert);
              const openThis = () => item.cert && setOpenCert(item.cert);
              return (
                <article key={`${item.date}-${item.title}`} className="group relative pb-14 pl-8 md:pl-14">
                  <span className={`absolute -left-2 top-1 size-4 rounded-full border-4 border-surface transition-transform duration-200 group-hover:scale-125 group-active:scale-150 ${item.org === "Myme Techies" && item.title.includes("Trainer") ? "bg-accent-strong" : "bg-accent"}`} />
                  <time className="mb-2 block text-xs font-bold uppercase text-accent md:absolute md:-left-48 md:w-40 md:text-right">{item.date}</time>
                  <div
                    {...(hasCert
                      ? {
                          role: "button",
                          tabIndex: 0,
                          "aria-label": `View ${item.org} ${item.title} certificate`,
                          onClick: openThis,
                          onKeyDown: (e: React.KeyboardEvent) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              openThis();
                            }
                          },
                        }
                      : {})}
                    className={`${hasCert ? "cursor-pointer" : ""} ${item.org === "Myme Techies" && item.title.includes("Trainer") ? "bg-pastel-lilac" : "bg-card"} rounded-md border border-ink/10 p-6 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-xl group-active:scale-[0.98] group-active:border-accent group-active:shadow-md`}
                  >
                    <span className="text-xs font-bold uppercase text-ink/45">{item.org}</span>
                    <h2 className="mt-2 text-xl font-bold transition-colors duration-200 group-hover:text-accent-strong">{item.title}</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">{item.detail}</p>
                    {item.cert && (
                      <>
                        <img
                          src={item.cert.url}
                          alt={item.cert.alt}
                          width={1600}
                          height={1131}
                          loading="lazy"
                          className="mt-5 h-32 w-auto rounded-md border border-ink/15 bg-surface object-cover shadow-sm transition-transform duration-200 group-hover:scale-[1.02] group-hover:border-accent/40"
                        />
                        <span className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Click the card to view the certificate</span>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
            <span aria-label="Timeline continues" className="absolute -bottom-2 -left-2 size-4 animate-pulse rounded-full border-4 border-surface bg-accent-strong motion-reduce:animate-none" />
          </div>
        </div>
      </section>
      {openCert && <CertificateModal src={openCert.url} alt={openCert.alt} onClose={() => setOpenCert(null)} />}
    </>
  );
}
