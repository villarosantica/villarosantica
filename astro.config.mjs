import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import yaml from '@rollup/plugin-yaml';
import react from "@astrojs/react";

export default defineConfig({
  site: "https://villarosantica.netlify.app/",
  integrations: [tailwind(), icon(), react()],
  vite: {
    plugins: [yaml()]
  }
});