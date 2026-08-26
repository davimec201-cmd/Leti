import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build 100% estatico: gera a pasta /dist, que pode ser jogada
// direto no Vercel, Netlify, GitHub Pages, etc.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
