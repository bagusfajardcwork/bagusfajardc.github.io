import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/bagusfajardc.github.io/' : '/',
  plugins: [react()],
}))
