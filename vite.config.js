import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {viteMockServe} from 'vite-plugin-mock'
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
  plugins: [
    vue(),
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
    vueJsx(),
    viteMockServe ({
      // default
      mockPath: 'mock',
      supportTs: false,
    }),
  ],
  // https://v2.vitejs.dev/guide/features.html#jsx
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import React from 'react'`
  }
})
