import { uid } from "./utils";
import type { RasterSlot } from "./types";

const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

function isTiff(file: File) {
  const n = file.name.toLowerCase();
  return n.endsWith(".tif") || n.endsWith(".tiff") || n.endsWith(".geotiff") || /tiff/.test(file.type);
}

export function isSupportedRaster(file: File) {
  if (IMAGE_TYPES.includes(file.type) || file.type === "image/tiff" || file.type === "image/tif") {
    return true;
  }
  return /\.(jpe?g|png|webp|gif|tiff?|geotiff)$/i.test(file.name);
}

async function decodeTiff(file: File): Promise<{ src: string; width: number; height: number }> {
  const geotiff = await import("geotiff");
  const tiff = await geotiff.fromArrayBuffer(await file.arrayBuffer());
  const image = await tiff.getImage();
  const width = image.getWidth();
  const height = image.getHeight();
  const maxEdge = 2048;
  const scale = Math.min(1, maxEdge / Math.max(width, height));
  const tw = Math.max(1, Math.round(width * scale));
  const th = Math.max(1, Math.round(height * scale));
  const rasters = (await image.readRasters({
    width: tw,
    height: th,
    resampleMethod: "nearest",
    interleave: true,
  })) as Uint8Array | Uint16Array | Float32Array;

  const samples = image.getSamplesPerPixel();
  const canvas = document.createElement("canvas");
  canvas.width = tw;
  canvas.height = th;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(tw, th);
  const n = tw * th;
  let maxV = 1;
  for (let i = 0; i < rasters.length; i++) {
    const v = Number(rasters[i]);
    if (v > maxV) maxV = v;
  }
  const scaleV = maxV > 255 ? 255 / maxV : 1;
  for (let p = 0; p < n; p++) {
    const o = p * samples;
    const r = Number(rasters[o] ?? 0) * scaleV;
    const g = Number(rasters[o + Math.min(1, samples - 1)] ?? r) * scaleV;
    const b = Number(rasters[o + Math.min(2, samples - 1)] ?? r) * scaleV;
    const d = p * 4;
    img.data[d] = r;
    img.data[d + 1] = g;
    img.data[d + 2] = b;
    img.data[d + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return { src: canvas.toDataURL("image/jpeg", 0.9), width: tw, height: th };
}

function imageSize(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error("Unsupported or corrupt image"));
    img.src = src;
  });
}

export async function rasterFromFile(file: File): Promise<RasterSlot> {
  if (!isSupportedRaster(file)) {
    throw new Error("Use JPEG, PNG, WebP, TIFF, or GeoTIFF.");
  }
  if (isTiff(file)) {
    const decoded = await decodeTiff(file);
    return {
      id: uid("img"),
      name: file.name,
      src: decoded.src,
      width: decoded.width,
      height: decoded.height,
      gsdMeters: 1,
      kind: "upload",
    };
  }
  const src = URL.createObjectURL(file);
  const size = await imageSize(src);
  return {
    id: uid("img"),
    name: file.name,
    src,
    width: size.width,
    height: size.height,
    gsdMeters: 1,
    kind: "upload",
  };
}
