import { defineTool } from "@lovable.dev/mcp-js";
import { certificates } from "@/data/certificates";

export default defineTool({
  name: "list_certificates",
  title: "List certificates",
  description: "List Desigan M's internship, experience and trainer certificates.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const list = certificates.map((c) => ({
      title: c.title,
      issuer: c.issuer,
      period: c.period,
      type: c.type,
      description: c.description,
      url: `https://desigan-portfolio.lovable.app/certificates/${c.slug}`,
    }));
    return {
      content: [{ type: "text", text: list.map((c) => `${c.period} — ${c.title} (${c.issuer})`).join("\n") }],
      structuredContent: { certificates: list },
    };
  },
});
