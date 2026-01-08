import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../static',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react': ['react', 'react-dom'],
          'animation': ['@tweenjs/tween.js', 'gsap'],
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  assetsInclude: ['**/*.glsl', '**/*.vs', '**/*.fs', '**/*.vert', '**/*.frag'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['three', 'react', 'react-dom', '@tweenjs/tween.js', 'gsap', 'three/examples/jsm/renderers/CSS3DRenderer.js']
  },
})
