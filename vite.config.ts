import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Isso permite acesso externo
    strictPort: true, // Força o uso da porta especificada
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
});
