import { createFileRoute } from "@tanstack/react-router";

const experience = [
  {
    role: "UI/UX & Visual Designer — Freelance",
    period: "2023 — Present",
    detail:
      "Brand identity, campaign and product design for schools, consumer brands and early-stage digital products.",
  },
  {
    role: "Graphic Designer — Beez",
    period: "2024",
    detail: "Identity system, packaging, product design, social media and marketing campaigns.",
  },
  {
    role: "Design Trainer",
    period: "2023 — Present",
    detail:
      "Teaching design fundamentals, UI/UX process and industry tools to students and early-career designers.",
  },
];

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Desigan M." },
      {
        name: "description",
        content: "Design roles, client engagements and training work by Desigan M.",
      },
      { property: "og:title", content: "Experience — Desigan M." },
      { property: "og:description", content: "Design roles, client engagements and training work." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-5xl font-medium leading-none md:text-7xl">Experience</h1>

        <div className="mt-16 border-t border-ink/5">
          {experience.map((item) => (
            <div
              key={item.role}
              className="grid gap-4 border-b border-ink/5 py-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-ink/40">
                {item.period}
              </span>
              <div className="min-w-0">
                <h2 className="text-xl font-medium">{item.role}</h2>
                <p className="mt-2 max-w-[56ch] text-ink/60">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
