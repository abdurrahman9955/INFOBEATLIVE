// src/utils/sharp.ts
import sharp from 'sharp';

export async function resizeImage(buffer: Buffer, width: number, height: number) {
  return sharp(buffer)
    .resize(width, height)
    .toBuffer();
}
