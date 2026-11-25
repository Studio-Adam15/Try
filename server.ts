import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

function resolveOrigin(req: express.Request): string {
  const forwardedProto = (req.headers['x-forwarded-proto'] as string | undefined)?.split(',')[0]?.trim();
  const proto = forwardedProto || (req.secure ? 'https' : req.protocol) || 'https';
  const forwardedHost = (req.headers['x-forwarded-host'] as string | undefined)?.split(',')[0]?.trim();
  const host = forwardedHost || req.get('host');

  if (host) {
    return `${proto}://${host}`;
  }

  const appUrl = (process.env.APP_URL || '').trim();
  if (appUrl && appUrl !== 'MY_APP_URL' && /^https?:\/\//i.test(appUrl)) {
    return appUrl.replace(/\/+$/, '');
  }

  return `http://localhost:${PORT}`;
}

function injectPreviewTags(html: string, origin: string): string {
  const canonicalUrl = `${origin}/`;
  const ogImageUrl = `${origin}/images/og-istatieh-curtains.jpg`;

  return html
    .replace(/__CANONICAL_URL__/g, canonicalUrl)
    .replace(/__OG_IMAGE_URL__/g, ogImageUrl);
}

async function startServer() {
  const app = express();
  app.set('trust proxy', true);

  app.use((_req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https:");
    next();
  });

  app.get('/robots.txt', (_req, res) => res.type('text/plain').sendFile(path.resolve(__dirname, 'public', 'robots.txt')));
  app.get('/sitemap.xml', (_req, res) => res.type('application/xml').sendFile(path.resolve(__dirname, 'public', 'sitemap.xml')));

  app.get('/google0b376cdc29ee84b8.html', (_req, res) => {
    const publicFile = path.resolve(__dirname, 'public', 'google0b376cdc29ee84b8.html');
    const distFile = path.resolve(__dirname, 'dist', 'google0b376cdc29ee84b8.html');
    const verificationFile = fs.existsSync(publicFile) ? publicFile : distFile;
    res.status(200).type('text/html; charset=utf-8').sendFile(verificationFile);
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const templatePath = path.resolve(__dirname, 'index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const html = injectPreviewTags(template, resolveOrigin(req));
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(html);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    const distIndexPath = path.join(distDir, 'index.html');
    const rawDistHtml = fs.readFileSync(distIndexPath, 'utf-8');

    // Serve static assets (including /images/og-istatieh-curtains.jpg) directly with clean headers
    app.use(
      express.static(distDir, {
        index: false,
        maxAge: '1d',
      })
    );

    // Dynamically inject exact host origin for WhatsApp/Social crawlers on all HTML routes
    app.use('*', (req, res) => {
      const html = injectPreviewTags(rawDistHtml, resolveOrigin(req));
      res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(html);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
