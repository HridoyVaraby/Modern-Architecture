import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsDir: 'assets',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@/components/ui/button',
            '@/components/ui/navigation-menu',
            '@/components/ui/accordion',
            '@/components/ui/dialog',
            '@/components/ui/form',
          ],
          'layout': [
            '@/components/layout/header',
            '@/components/layout/footer',
            '@/components/layout/layout',
          ],
          'common': [
            '@/components/common/logo',
            '@/components/common/section-heading',
            '@/components/common/cta-button',
          ],
          'utils': ['@/lib/utils']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
