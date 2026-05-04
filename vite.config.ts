import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Dev: /. Production: ./ — works on GitHub Pages (/repo/), Vercel, and `vite preview`.
// Absolute "/" breaks GitHub Pages project sites because /assets resolves to github.io/assets.
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : './',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
}))
