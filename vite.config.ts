import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({
      registerType: 'autoUpdate', // This is a common and recommended setting
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'], // Assets to pre-cache
      manifest: {
        name: 'Graphone PWA', // **Customize** your app's full name
        short_name: 'Graphone', // **Customize** short name for the home screen
        description: 'Your Graphone App Description', // **Customize**
        theme_color: '#ffffff', // **Customize** theme color
        background_color: '#ffffff', // **Customize** background color
        display: 'standalone', // Makes it feel like a native app
        start_url: '/',
        icons: [
          // **CUSTOMIZE** with your own icon files
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable', // Required for certain mobile OSes
          },
        ],
      },
    }),],
})
