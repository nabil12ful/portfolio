// Style reminder: Laravel Command Center — build output must work from the /portfolio/ GitHub Pages path.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), vitePluginManusRuntime()],
  resolve: { alias: { "@": path.resolve(dirname, "./client/src"), "@shared": path.resolve(dirname, "./shared") } },
  root: path.resolve(dirname, "client"),
  build: { outDir: path.resolve(dirname, "dist/public"), emptyOutDir: true },
  server: { host: "0.0.0.0", port: 3000 },
});
