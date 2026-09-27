import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getCertificate } from "@/data/certificates";

export const Route = createFileRoute("/certificates/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const cert = getCertificate(params.slug);
    if (!cert) throw notFound();
    return { cert };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Certificate not found — Desigan M" }, { name: "robots", content: "noindex" }] };
    const { cert } = loaderData;
    const title = `${cert.title} — ${cert.issuer} | Desigan M`;
    return {
      meta: [
        { title },
        { name: "description", content: cert.description },
        { property: "og:title", content: title },
        { property: "og:description", content: cert.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: cert.url },
        { name: "twitter:image", content: cert.url },
      ],
    };
  },
  notFoundComponent: CertNotFound,
  component: CertificatePage,
});

function CertNotFound() {
  return (
    <section className="px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Certificate not found</h1>
      <Link to="/experience" className="mt-6 inline-block font-bold text-accent">See all experience</Link>
    </section>
  );
}

function CertificatePage() {
  const { cert } = Route.useLoaderData();
  return (
    <section className="px-6 pb-24 pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <a href={cert.url} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-ink/10 bg-card p-3 shadow-xl">
          <img src={cert.url} alt={cert.alt} width={1600} height={1131} className="h-auto w-full rounded-md object-contain" />
        </a>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{cert.type}</p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{cert.title}</h1>
          {cert.subtitle && <p className="mt-2 font-semibold text-ink/60">{cert.subtitle}</p>}
          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10 text-sm">
            <div className="flex justify-between py-3"><dt className="text-ink/50">Issued by</dt><dd className="font-bold">{cert.issuer}</dd></div>
            <div className="flex justify-between py-3"><dt className="text-ink/50">Period</dt><dd className="font-bold">{cert.period}</dd></div>
            <div className="flex justify-between py-3"><dt className="text-ink/50">Awarded to</dt><dd className="font-bold">Desigan M</dd></div>
          </dl>
          <p className="mt-6 leading-relaxed text-ink/70">{cert.description}</p>
          <a href={cert.url} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wide text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-accent-strong">Open full size</a>
        </div>
      </div>
    </section>
  );
}
