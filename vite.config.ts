import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const port = env.VITE_PORT || 8080;
  const previewPort = env.VITE_PREVIEW_PORT || port;

  return defineConfig({
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: Number(port),
    },
    preview: {
      port: Number(previewPort),
      host: '0.0.0.0',
      allowedHosts: [
        'ecommerce.glasier.co.in',
        'localhost',
      ],
    },
  });
};
