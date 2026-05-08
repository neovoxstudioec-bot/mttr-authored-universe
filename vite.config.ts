import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  vite: {
    plugins: [netlify()],
  },
});
