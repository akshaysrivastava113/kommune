import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    dedupe: ['react', 'react-dom'] // This avoids duplicate React issues with Recoil
  },
})
