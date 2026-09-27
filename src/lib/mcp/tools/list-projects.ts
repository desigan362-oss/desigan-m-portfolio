import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects, type Project } from "@/data/projects";

const toJson = (p: Project) => ({
  id: p.id,
  client: p.clientType ?? p.clientName,
  title: p.title,
  categories: p.category.map((c) => String(c)),
  description: p.description,
  year: p.year,
  url: `https://desigan-portfolio.lovable.app/work/${p.id}`,
});

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description: "List Desigan M's portfolio projects, optionally filtered by category (e.g. Graphic Design, UI/UX, Training).",
  inputSchema: { category: z.string().optional().describe("Optional category filter, e.g. 'UI/UX'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const list = (category
      ? projects.filter((p) => p.category.some((c) => c.toLowerCase() === category.toLowerCase()))
      : projects
    ).map(toJson);
    return {
      content: [{ type: "text", text: list.map((p) => `${p.id} — ${p.client}: ${p.title} (${p.categories.join(", ")})`).join("\n") || "No projects found." }],
      structuredContent: { projects: list },
    };
  },
});
