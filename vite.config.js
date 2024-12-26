import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap'; // Note: Use the default import for the plugin

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://ttisr.com', 
      routes: [
        '/', 
        '/#About',
        '/#Services',
        '/#Choose',
        '/#Contact',
      ],
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }),
  ],
});
