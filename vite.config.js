import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoPrefix from 'autoprefixer'
import px2vw from 'postcss-px-to-viewport-8-plugin'

const prefix = autoPrefix()

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        prefix,
        px2vw({
          viewportWidth: 428,
          viewportHeight: 926,
          unitPrecision: 5,
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          minPixelValue: 1,
          selectorBlackList: ['.ignore', '.hairlines']
        })
      ]
    }
  }
})
