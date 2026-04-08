import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
   base: '/mybindle/',   // 👈 CHANGE THIS FROM '/' to './'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // 👈 Add this
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") }
  }
})