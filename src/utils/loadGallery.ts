import fs from "fs";
import path from "path";

export function loadGalleryImages(): string[] {
  const publicPath = path.resolve("public/uploads/gallery-photo");
  const files = fs.readdirSync(publicPath);

  return files
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .map((file) => `/uploads/gallery-photo/${file}`);
}
