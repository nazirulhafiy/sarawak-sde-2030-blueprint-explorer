#!/usr/bin/env node
/** Static dist/ server with GitHub Pages-style 404.html fallback. */

import { existsSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const host = process.env.PREVIEW_HOST || "127.0.0.1";
const port = Number(process.env.PORT || "4174");
const distDir = resolve(process.env.PREVIEW_DIST || "dist");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function safeJoin(root, requestPath) {
  const decoded = decodeURIComponent(requestPath.split("?")[0].split("#")[0]);
  const relative = decoded.replace(/^\/+/, "");
  const candidate = normalize(join(root, relative));
  if (candidate !== root && !candidate.startsWith(`${root}${sep}`)) {
    return null;
  }
  return candidate;
}

function contentTypeFor(filePath) {
  return MIME_TYPES[extname(filePath).toLowerCase()] || "application/octet-stream";
}

function send(res, statusCode, filePath, method) {
  const body = readFileSync(filePath);
  res.writeHead(statusCode, {
    "Content-Type": contentTypeFor(filePath),
    "Content-Length": body.length,
    "Cache-Control": "no-store",
  });
  if (method === "HEAD") {
    res.end();
    return;
  }
  res.end(body);
}

if (!existsSync(distDir)) {
  console.error("dist/ is missing. Run a build before starting the local preview.");
  process.exit(1);
}

const notFoundPath = join(distDir, "404.html");
if (!existsSync(notFoundPath)) {
  console.error("dist/404.html is missing. Rebuild so the custom 404 page is generated.");
  process.exit(1);
}

createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405).end();
    return;
  }

  const target = safeJoin(distDir, req.url || "/");
  if (!target) {
    res.writeHead(403).end();
    return;
  }

  let filePath = target;
  try {
    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      filePath = join(filePath, "index.html");
    }
  } catch {
    filePath = null;
  }

  if (filePath && existsSync(filePath) && !statSync(filePath).isDirectory()) {
    send(res, 200, filePath, req.method);
    return;
  }

  // Match GitHub Pages: missing paths serve the custom 404.html with status 404.
  send(res, 404, notFoundPath, req.method);
}).listen(port, host, () => {
  console.log(`Local preview listening on http://${host}:${port}`);
});
