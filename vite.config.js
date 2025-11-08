import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/english-study-web01/',   // ← GitHub Pages のサブパス
  plugins: [react()]
})