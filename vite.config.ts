
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  /* Fix: process.cwd() might fail in some environments; using the root directory directly on line 6 */
  const env = loadEnv(mode, './', '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      chunkSizeWarningLimit: 1600,
    },
    server: {
      historyApiFallback: true,
    }
  };
});
