import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Lets us import shared files as '@/components/Button/Button' instead of
    // long relative paths such as '../../components/Button/Button'.
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
