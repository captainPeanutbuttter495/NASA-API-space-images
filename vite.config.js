import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base ('./') so the build works at any subpath on GitHub Pages
// (e.g. https://user.github.io/NASA-API-space-images/) without hardcoding the
// repo name. Locally, `npm run dev` serves at '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
}))
