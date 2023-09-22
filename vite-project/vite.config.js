import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://oscar-grappi.github.io/EntregaFinal-Grappi/dist",
  plugins: [react()],
})
