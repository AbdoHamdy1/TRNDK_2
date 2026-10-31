import { defineConfig } from 'vite';
import { resolve, extname, join } from 'path';
import { existsSync, statSync, createReadStream, readdirSync, copyFileSync, mkdirSync } from 'fs';

function copyDirRecursive(source, target) {
  if (!existsSync(target)) {
    mkdirSync(target, { recursive: true });
  }
  const entries = readdirSync(source, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(source, entry.name);
    const destPath = join(target, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  root: resolve(__dirname, 'src/dev'),
  base: './',
  resolve: {
    alias: {
      '/src': resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'src'),
      '/images': resolve(__dirname, 'images'),
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname)],
    },
  },
  plugins: [
    {
      name: 'serve-and-copy-images',
      configureServer(server) {
        // Serve existing root images directory in development
        server.middlewares.use('/images', (req, res, next) => {
          const cleanUrl = req.url.split('?')[0].replace(/^\//, '');
          const filePath = resolve(__dirname, 'images', cleanUrl);

          if (existsSync(filePath) && !statSync(filePath).isDirectory()) {
            const ext = extname(filePath).toLowerCase();
            const mimeTypes = {
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.svg': 'image/svg+xml',
              '.webp': 'image/webp',
              '.ico': 'image/x-icon',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.setHeader('Cache-Control', 'no-cache');
            createReadStream(filePath).pipe(res);
            return;
          }
          next();
        });
      },
      closeBundle() {
        // Copy existing root images to dist/images for production Apache deployment & preview
        const srcImages = resolve(__dirname, 'images');
        const distImages = resolve(__dirname, 'dist/images');
        if (existsSync(srcImages)) {
          copyDirRecursive(srcImages, distImages);
        }
      },
    },
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});
