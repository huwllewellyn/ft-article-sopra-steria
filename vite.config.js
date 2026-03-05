import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'serve' ? '/' : '/ft-article-sopra-steria/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          article: resolve(__dirname, 'article.html'),
        },
      },
    },
  }
})
