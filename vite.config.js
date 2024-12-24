import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {} // Ensures process.env is defined in the browser
  },
  build: {
    outDir: 'dist', // Change 'dist' to 'build'
  },
})
