import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
      // eslint-disable-next-line no-undef
      '@images': path.resolve(__dirname, './public/images'),
      // eslint-disable-next-line no-undef
      '@pages': path.resolve(__dirname, './src/pages'),
      // eslint-disable-next-line no-undef
      '@components': path.resolve(__dirname, './src/components'),
      // eslint-disable-next-line no-undef
      '@contexts': path.resolve(__dirname, './src/contexts')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
  server: {
    port: 8000
  },
})