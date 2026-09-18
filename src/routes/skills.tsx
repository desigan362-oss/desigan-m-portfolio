import { createFileRoute } from "@tanstack/react-router";

const groups = [
  {
    title: "Design",
    items: ["UI/UX design", "Wireframing & prototyping", "Design systems", "Brand identity", "Layout & typography"],
  },
  {
    title: "Visual & Print",
    items: ["Poster design", "Packaging", "Campaign creatives", "Social media design", "Marketing collateral"],
  },
  {
    title: "Tools",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva"],
  },
  {
    title: "Other",
    items: ["Design training & mentoring", "Client communication", "Art direction", "Content planning"],
  },
];

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Desigan M." },
      {
        name: "description",
        content: "Design, visual, print and tool skills of Desigan M., UI/UX and visual designer.",
      },
      { property: "og:title", content: "Skills — Desigan M." },
      { property: "og:description", content: "Design, visual, print and tool capabilities." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-5xl font-medium leading-none md:text-7xl">Skills</h1>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="border-t border-ink/10 pt-6">
              <h2 className="mb-5 text-xs font-medium uppercase tracking-widest text-accent">{g.title}</h2>
              <ul className="space-y-3 text-ink/70">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
