import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@layouts': '/src/layouts',
      '@constants': '/src/constants',
      '@config': '/src/config',
      '@services': '/src/services',
    },
  },
})