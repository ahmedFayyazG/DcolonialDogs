import fs from "node:fs";
import path from "node:path";

const IMG = /\.(png|jpe?g|webp|avif|gif|svg)$/i;

/** Gallery photos: any image dropped into public/gallery is picked up at build time. */
export function galleryImages(): string[] {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), "public", "gallery"))
      .filter((f) => IMG.test(f))
      .sort()
      .map((f) => `/gallery/${f}`);
  } catch {
    return [];
  }
}

/** Logo: first file named public/logo.(png|jpg|jpeg|webp|svg), if present. */
export function logoSrc(): string | null {
  for (const ext of ["svg", "png", "webp", "jpg", "jpeg"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", `logo.${ext}`))) return `/logo.${ext}`;
  }
  return null;
}
