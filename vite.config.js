import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/assessment-2/', // <-- dit is belangrijk voor GitHub Pages
  plugins: [react()],
});
