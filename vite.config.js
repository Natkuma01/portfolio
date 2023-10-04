import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
  plugins: [react()],
  base: '/',
  css: {
    modules: {
      localConvention: "camelCase",
    },
  }}
  if (command !== 'serve') {
    config.base = '/react-vite-gh-pages/'
  }
  return config
});
