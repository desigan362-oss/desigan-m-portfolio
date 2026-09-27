import { defineTool } from "@lovable.dev/mcp-js";
import { PROFILE_TEXT } from "../profile";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Get Desigan M's profile: roles, education, experience, skills, services and contact details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: "text", text: PROFILE_TEXT }] }),
});
