import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapStaticPaths, sitemapPathForLocation, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";

// Public site origin — never a preview or project-ID service URL.
const BASE_URL = "https://desigan-portfolio.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        // Code-backed public content: portfolio project pages and certificate pages.
        for (const project of projects) {
          const location = router.buildLocation({
            to: "/work/$projectId",
            params: { projectId: project.id },
            search: () => ({}),
            hash: "",
          });
          const path = sitemapPathForLocation(router, location, "/work/$projectId");
          if (path) entries.push({ path });
        }
        for (const cert of certificates) {
          const location = router.buildLocation({
            to: "/certificates/$slug",
            params: { slug: cert.slug },
            search: () => ({}),
            hash: "",
          });
          const path = sitemapPathForLocation(router, location, "/certificates/$slug");
          if (path) entries.push({ path });
        }

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
