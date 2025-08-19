import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/KeyBoard", // имя репозитория на GitHub
  build: {
    outDir: "build",
  },
});
