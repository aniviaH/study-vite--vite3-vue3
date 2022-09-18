import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: red`
      },
      sass: {
        additionalData: `$injectedColor: yellow`
      },
      styl: {
        additionalData: `$injectedColor ?= orange`
      }
    }
  },
  plugins: [vue()]
})
