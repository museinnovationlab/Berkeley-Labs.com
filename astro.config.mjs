// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://berkeley-labs.com',
  // Default 'directory' build format: /blog/ and /blog/<slug>/ each map to an
  // index.html, so there's no blog.html-vs-blog/ ambiguity on Netlify. All
  // canonical URLs and internal links use the trailing slash to match.
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
