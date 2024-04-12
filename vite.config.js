import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: ['vite.svg'],
  manifest: {
    name: 'e-furniture',
    short_name: 'e-furniture',
    description: 'e-furniture',
    icons: [
      {
        src: '/vite.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      }
    ],
    theme_color: '#000000',
    background_color: '#ffffff',
    display:'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  }
}

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
      '@stores': '/src/stores',
      '@hocs': '/src/hocs',
      '@api': '/src/api',
    },
  },
})