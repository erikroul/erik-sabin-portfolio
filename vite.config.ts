import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

const worksVirtualId = 'virtual:works'
const resolvedWorksId = '\0virtual:works'
const workSections = [
  'photoshop',
  'illustrator',
  'figma',
  'work-process',
  'project',
  'web',
  'traditional-artwork',
  'orders',
]

function worksGallery(): Plugin {
  const imagePattern = /\.(png|jpe?g|webp|gif|avif)$/i
  const preferredCover = new Set([
    'ps-elk.jpg',
    'ai-owl.png',
    'web-powerbank.png',
    'art-citadel.jpg',
  ])

  const listFolder = (folder: string, id: string) => {
    if (!fs.existsSync(folder)) return []
    return fs
      .readdirSync(folder)
      .filter((name) => imagePattern.test(name) && !name.startsWith('.'))
      .sort((a, b) => {
        const rank = (name: string) =>
          name.toLowerCase().startsWith('cover') ? 0 : preferredCover.has(name) ? 1 : 2
        const difference = rank(a) - rank(b)
        if (difference !== 0) return difference
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      })
      .map((name) => `./works/${id}/${encodeURIComponent(name)}`)
  }

  const listWorks = () => {
    const dir = path.resolve('public/works')
    return Object.fromEntries(workSections.map((id) => [id, listFolder(path.join(dir, id), id)]))
  }

  return {
    name: 'works-gallery',
    resolveId(id) {
      if (id === worksVirtualId) return resolvedWorksId
    },
    load(id) {
      if (id !== resolvedWorksId) return
      return `export default ${JSON.stringify(listWorks())}`
    },
    configureServer(server) {
      const dir = path.resolve('public/works')
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
      server.watcher.add(dir)
      const reload = (file: string) => {
        const normalized = file.replaceAll('\\', '/')
        if (!normalized.includes('/public/works/')) return
        const module = server.moduleGraph.getModuleById(resolvedWorksId)
        if (module) server.moduleGraph.invalidateModule(module)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', reload)
      server.watcher.on('unlink', reload)
      server.watcher.on('change', reload)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), worksGallery()],
  base: './',
})
