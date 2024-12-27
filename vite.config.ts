import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const conditionalPlugins = [];

if (process.env.TEMPO) {
  conditionalPlugins.push('tempo-devtools/dist/babel-plugin');
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [...conditionalPlugins]
      }
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}) 