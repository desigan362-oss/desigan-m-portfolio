import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/design-m-portfolio/",
  plugins: [react()],
});
