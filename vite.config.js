import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true,     // 👈 this exposes Vite on the network
    port: 5173      // optional, ensures fixed port
  }
})
