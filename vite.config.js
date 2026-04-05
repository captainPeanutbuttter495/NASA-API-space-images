import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is '/NASA-API-space-images/' when building for GitHub Pages,
// '/' locally so `npm run dev` still serves at http://localhost:5173/.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/NASA-API-space-images/' : '/',
}))
