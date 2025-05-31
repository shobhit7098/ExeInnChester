import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  build: {
    // Add devSourcemap explicitly or any other build options you use
    sourcemap: true,
  },
  plugins: [react(),
  tailwindcss(),
  ],
})
