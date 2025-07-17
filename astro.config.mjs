import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  // scopedStyleStrategy: "class",
  devToolbar: {
    enabled: false
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/breakpoints" as *;`
        }
      }
    }
  }
});