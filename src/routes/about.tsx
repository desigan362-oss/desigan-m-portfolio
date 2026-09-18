import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/desigan-portrait.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Desigan M." },
      {
        name: "description",
        content:
          "Desigan M. is a UI/UX, graphic and visual designer and trainer working across brand identity, campaigns and digital products.",
      },
      { property: "og:title", content: "About — Desigan M." },
      { property: "og:description", content: "Designer and trainer across brand, campaign and product design." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_380px]">
        <div>
          <h1 className="font-display text-5xl font-medium leading-none md:text-7xl">About</h1>
          <div className="mt-12 max-w-[56ch] space-y-6 text-lg leading-relaxed text-ink/70">
            <p>
              I'm Desigan M., a designer working across user experience, brand identity and visual
              communication. My work spans more than a hundred designs made for schools, consumer
              brands and digital products.
            </p>
            <p>
              I like problems that sit between clarity and craft: an admission campaign that has to
              earn a parent's trust, a streaming interface that has to disappear behind the content,
              a brand that has to hold together across a jar, a poster and a phone screen.
            </p>
            <p>
              Alongside client work I train aspiring designers — teaching design fundamentals, tools
              and the thinking that makes work hold up beyond the first impression.
            </p>
          </div>
        </div>
        <img
          src={portrait.url}
          alt="Portrait of Desigan M."
          loading="lazy"
          className="aspect-4/5 w-full rounded-[12px] object-cover object-top outline outline-1 -outline-offset-1 outline-ink/5"
        />
      </div>
    </section>
  );
}
