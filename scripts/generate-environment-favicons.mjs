#!/usr/bin/env node
import { deflateSync, inflateSync } from "node:zlib";
import { readFileSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

const publicDir = resolve("public");
const masterPath = resolve("assets/brand/sde-favicon-master-imagegen-v1.png");
const smallIconSizes = [16, 32, 48];
const environments = [
  { name: "production", color: "#3155c6" },
  { name: "development", color: "#2563eb" },
  { name: "preview", color: "#4f46e5" },
];

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function parseHexColor(hex) {
  const value = hex.replace("#", "");

  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function smoothstep(value) {
  const clamped = clamp(value, 0, 1);
  return clamped * clamped * (3 - 2 * clamped);
}

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc ^= byte;

    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data = Buffer.alloc(0)) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const checksum = Buffer.alloc(4);

  length.writeUInt32BE(data.length);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));

  return Buffer.concat([length, typeBuffer, data, checksum]);
}

function parsePng(filePath) {
  const file = readFileSync(filePath);

  if (!file.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error(`${basename(filePath)} is not a PNG file.`);
  }

  let offset = 8;
  let ihdr;
  const idatChunks = [];

  while (offset < file.length) {
    const length = file.readUInt32BE(offset);
    const type = file.toString("ascii", offset + 4, offset + 8);
    const dataStart = offset + 8;
    const data = file.subarray(dataStart, dataStart + length);

    if (type === "IHDR") ihdr = Buffer.from(data);
    if (type === "IDAT") idatChunks.push(Buffer.from(data));
    if (type === "IEND") break;

    offset = dataStart + length + 4;
  }

  if (!ihdr || idatChunks.length === 0) {
    throw new Error(`${basename(filePath)} is missing required PNG chunks.`);
  }

  const width = ihdr.readUInt32BE(0);
  const height = ihdr.readUInt32BE(4);
  const bitDepth = ihdr.readUInt8(8);
  const colorType = ihdr.readUInt8(9);
  const compression = ihdr.readUInt8(10);
  const filter = ihdr.readUInt8(11);
  const interlace = ihdr.readUInt8(12);
  const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : 0;

  if (bitDepth !== 8 || bytesPerPixel === 0 || compression !== 0 || filter !== 0 || interlace !== 0) {
    throw new Error(`${basename(filePath)} must be a non-interlaced 8-bit RGB or RGBA PNG.`);
  }

  const decoded = unfilterPng(
    inflateSync(Buffer.concat(idatChunks)),
    width,
    height,
    bytesPerPixel,
  );
  const raw = Buffer.alloc(width * height * 4);

  for (let sourceIndex = 0, targetIndex = 0; sourceIndex < decoded.length; sourceIndex += bytesPerPixel, targetIndex += 4) {
    raw[targetIndex] = decoded[sourceIndex];
    raw[targetIndex + 1] = decoded[sourceIndex + 1];
    raw[targetIndex + 2] = decoded[sourceIndex + 2];
    raw[targetIndex + 3] = bytesPerPixel === 4 ? decoded[sourceIndex + 3] : 255;
  }

  return { width, height, raw };
}

function unfilterPng(data, width, height, bytesPerPixel) {
  const rowLength = width * bytesPerPixel;
  const output = Buffer.alloc(rowLength * height);
  let inputOffset = 0;
  let outputOffset = 0;

  for (let y = 0; y < height; y += 1) {
    const filterType = data[inputOffset];
    inputOffset += 1;

    for (let x = 0; x < rowLength; x += 1) {
      const raw = data[inputOffset + x];
      const left = x >= bytesPerPixel ? output[outputOffset + x - bytesPerPixel] : 0;
      const up = y > 0 ? output[outputOffset + x - rowLength] : 0;
      const upperLeft = x >= bytesPerPixel && y > 0 ? output[outputOffset + x - rowLength - bytesPerPixel] : 0;

      if (filterType === 0) output[outputOffset + x] = raw;
      if (filterType === 1) output[outputOffset + x] = (raw + left) & 0xff;
      if (filterType === 2) output[outputOffset + x] = (raw + up) & 0xff;
      if (filterType === 3) output[outputOffset + x] = (raw + Math.floor((left + up) / 2)) & 0xff;
      if (filterType === 4) output[outputOffset + x] = (raw + paethPredictor(left, up, upperLeft)) & 0xff;
    }

    inputOffset += rowLength;
    outputOffset += rowLength;
  }

  return output;
}

function paethPredictor(left, up, upperLeft) {
  const estimate = left + up - upperLeft;
  const leftDistance = Math.abs(estimate - left);
  const upDistance = Math.abs(estimate - up);
  const upperLeftDistance = Math.abs(estimate - upperLeft);

  if (leftDistance <= upDistance && leftDistance <= upperLeftDistance) return left;
  if (upDistance <= upperLeftDistance) return up;
  return upperLeft;
}

function createIhdr(width, height) {
  const ihdr = Buffer.alloc(13);

  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  return ihdr;
}

function encodePng({ width, height, raw }) {
  const rowLength = width * 4;
  const scanlines = Buffer.alloc((rowLength + 1) * height);

  for (let y = 0; y < height; y += 1) {
    const scanlineOffset = y * (rowLength + 1);
    scanlines[scanlineOffset] = 0;
    raw.copy(scanlines, scanlineOffset + 1, y * rowLength, (y + 1) * rowLength);
  }

  return Buffer.concat([
    PNG_SIGNATURE,
    createChunk("IHDR", createIhdr(width, height)),
    createChunk("IDAT", deflateSync(scanlines)),
    createChunk("IEND"),
  ]);
}

function createMarkMask(png) {
  const mask = new Float32Array(png.width * png.height);

  for (let index = 0; index < mask.length; index += 1) {
    const sourceIndex = index * 4;
    const minimumChannel = Math.min(
      png.raw[sourceIndex],
      png.raw[sourceIndex + 1],
      png.raw[sourceIndex + 2],
    );
    const alpha = png.raw[sourceIndex + 3] / 255;

    // Imagegen supplied the composition. This converts its white emblem and
    // cobalt field into a stable two-colour mask while retaining edge smoothing.
    mask[index] = smoothstep((minimumChannel - 80) / 120) * alpha;
  }

  return { width: png.width, height: png.height, mask };
}

function renderIcon(master, size, targetHex) {
  const target = parseHexColor(targetHex);
  const raw = Buffer.alloc(size * size * 4);
  const scaleX = master.width / size;
  const scaleY = master.height / size;

  for (let targetY = 0; targetY < size; targetY += 1) {
    const sourceTop = targetY * scaleY;
    const sourceBottom = (targetY + 1) * scaleY;

    for (let targetX = 0; targetX < size; targetX += 1) {
      const sourceLeft = targetX * scaleX;
      const sourceRight = (targetX + 1) * scaleX;
      let weightedCoverage = 0;
      let totalWeight = 0;

      for (let sourceY = Math.floor(sourceTop); sourceY < Math.ceil(sourceBottom); sourceY += 1) {
        const overlapY = Math.min(sourceBottom, sourceY + 1) - Math.max(sourceTop, sourceY);

        for (let sourceX = Math.floor(sourceLeft); sourceX < Math.ceil(sourceRight); sourceX += 1) {
          const overlapX = Math.min(sourceRight, sourceX + 1) - Math.max(sourceLeft, sourceX);
          const weight = overlapX * overlapY;

          weightedCoverage += master.mask[sourceY * master.width + sourceX] * weight;
          totalWeight += weight;
        }
      }

      const coverage = weightedCoverage / totalWeight;
      const targetIndex = (targetY * size + targetX) * 4;

      raw[targetIndex] = Math.round(target.r + (255 - target.r) * coverage);
      raw[targetIndex + 1] = Math.round(target.g + (255 - target.g) * coverage);
      raw[targetIndex + 2] = Math.round(target.b + (255 - target.b) * coverage);
      raw[targetIndex + 3] = 255;
    }
  }

  return { width: size, height: size, raw };
}

function createIcoFromPngs(images) {
  const header = Buffer.alloc(6);
  const entries = images.map(() => Buffer.alloc(16));
  let imageOffset = header.length + entries.reduce((total, entry) => total + entry.length, 0);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  for (const [index, image] of images.entries()) {
    const entry = entries[index];

    entry.writeUInt8(image.size, 0);
    entry.writeUInt8(image.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(image.buffer.length, 8);
    entry.writeUInt32LE(imageOffset, 12);
    imageOffset += image.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((image) => image.buffer)]);
}

const master = createMarkMask(parsePng(masterPath));

for (const environment of environments) {
  const largeIcon = encodePng(renderIcon(master, 512, environment.color));
  const appleTouchIcon = encodePng(renderIcon(master, 180, environment.color));
  const smallIcons = smallIconSizes.map((size) => {
    const buffer = encodePng(renderIcon(master, size, environment.color));

    writeFileSync(join(publicDir, `favicon-${environment.name}-${size}x${size}.png`), buffer);
    writeFileSync(join(publicDir, `favicon-${environment.name}-browser-${size}x${size}.png`), buffer);

    if (environment.name === "production") {
      writeFileSync(join(publicDir, `favicon-${size}x${size}.png`), buffer);
    }

    return { size, buffer };
  });
  const ico = createIcoFromPngs(smallIcons);

  writeFileSync(join(publicDir, `favicon-${environment.name}.png`), largeIcon);
  writeFileSync(join(publicDir, `favicon-${environment.name}-browser.png`), largeIcon);
  writeFileSync(join(publicDir, `apple-touch-icon-${environment.name}.png`), appleTouchIcon);
  writeFileSync(join(publicDir, `favicon-${environment.name}.ico`), ico);
  writeFileSync(join(publicDir, `favicon-${environment.name}-browser.ico`), ico);

  if (environment.name === "production") {
    writeFileSync(join(publicDir, "favicon.png"), largeIcon);
    writeFileSync(join(publicDir, "favicon-browser.png"), largeIcon);
    writeFileSync(join(publicDir, "favicon-small-master.png"), largeIcon);
    writeFileSync(join(publicDir, "apple-touch-icon.png"), appleTouchIcon);
    writeFileSync(join(publicDir, "favicon.ico"), ico);
  }
}

console.log("Generated cobalt SDE favicons for Production, Preview, and Development.");
