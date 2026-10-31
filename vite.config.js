import { defineConfig } from 'vite';
import { resolve } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';

export default defineConfig({
  root: '.',
  base: './',
  server: {
    open: '/src/dev/index.html',
  },
  plugins: [
    {
      name: 'dev-shell-handler',
      configureServer(server) {
        // Rewrite root requests during dev to the isolated dev shell
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/src/dev/index.html';
          }
          next();
        });
      },
      closeBundle() {
        // Generate root index.html in dist/ for Apache hosting while preserving source separation
        const devHtmlPath = resolve(__dirname, 'dist/src/dev/index.html');
        const rootDistHtmlPath = resolve(__dirname, 'dist/index.html');
        if (existsSync(devHtmlPath)) {
          const content = readFileSync(devHtmlPath, 'utf-8');
          const rootContent = content.replace(/\.\.\/\.\.\/assets\//g, './assets/');
          writeFileSync(rootDistHtmlPath, rootContent, 'utf-8');
        }
      },
    },
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/dev/index.html'),
    },
  },
});
