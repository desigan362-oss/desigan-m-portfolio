import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import listCertificates from "./tools/list-certificates";

export default defineMcp({
  name: "desigan-portfolio",
  title: "Desigan portfolio",
  version: "0.1.0",
  instructions:
    "Public, read-only info about designer and trainer Desigan M. Use `get_profile` for bio and contact, `list_projects`/`get_project` for portfolio work, and `list_certificates` for certificates.",
  tools: [getProfile, listProjects, getProject, listCertificates],
});
