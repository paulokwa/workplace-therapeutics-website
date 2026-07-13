import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { readdirSync } from 'node:fs'
import { basename, extname } from 'node:path'

const SITE_URL = 'https://workplacetherapeutics.ca'

const publicRoutes = [
  '/services',
  '/how-it-works',
  '/workplace-wellness',
  '/blog',
  '/about',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/covid-19',
  '/legal',
  '/join-our-team',
]

const blogRoutes = readdirSync(new URL('./src/content/blog', import.meta.url), { withFileTypes: true })
  .filter((entry) => entry.isFile() && extname(entry.name) === '.md')
  .map((entry) => `/blog/${basename(entry.name, '.md')}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: SITE_URL,
      dynamicRoutes: [...publicRoutes, ...blogRoutes],
      generateRobotsTxt: false,
      readable: true,
    }),
  ],
})
