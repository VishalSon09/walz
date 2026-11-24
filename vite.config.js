import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Kept in case other files (e.g. forAbout/*) still `import x from '...glb'`
  assetsInclude: ['**/*.glb'],
})
