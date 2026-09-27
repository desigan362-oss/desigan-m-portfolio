import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getProject } from "@/data/projects";

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description: "Get full details of one portfolio project by its id (from list_projects).",
  inputSchema: { id: z.string().min(1).describe("Project id, e.g. 'beez-haircare'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const p = getProject(id);
    if (!p) throw new ToolError(`No project with id "${id}".`);
    const project = {
      id: p.id,
      client: p.clientType ?? p.clientName,
      title: p.title,
      categories: p.category.map((c) => String(c)),
      description: p.description,
      overview: p.overview,
      role: p.role,
      services: [...p.services],
      year: p.year,
      images: p.galleryImages.map((g) => ({ src: g.src, caption: g.caption ?? g.alt })),
      url: `https://desigan-portfolio.lovable.app/work/${p.id}`,
    };
    return {
      content: [{ type: "text", text: `${project.client}: ${project.title}\n${project.overview}\nRole: ${project.role}\nServices: ${project.services.join(", ")}\n${project.url}` }],
      structuredContent: { project },
    };
  },
});
