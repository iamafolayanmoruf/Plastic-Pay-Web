import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Dev server uses /. Production build uses ./ so GitHub Pages (/<repo>/) loads JS/CSS correctly.
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : './',
  plugins: [react()],
  server: {
    port: 8081,
    strictPort: false,
  },
}))
