import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    // Explicitly define global constants
    define: {
      'process.env': {}
    },
    // If you're having issues with environment variables in production
    // you might need to add this:
    // envPrefix: 'VITE_',
  };
});