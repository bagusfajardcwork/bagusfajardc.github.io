import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bagusfajardc.github.io/', // Ganti dengan nama repo kamu
  plugins: [react()],
})
