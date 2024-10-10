import sharp from "sharp";
import path from "path";
import fs from "fs";
import { uploadToS3 } from "./amazonS3";

export const processAndUploadThumbnail = async (filePath: string, fileName: string) => {
  const thumbnailPath = path.join("uploads", `${fileName}_thumbnail.jpg`);

  // Process thumbnail
  await sharp(filePath)
    .resize(640, 360)
    .toFile(thumbnailPath);

  // Upload thumbnail to S3
  await uploadToS3(
    process.env.AWS_BUCKET!,
    `thumbnails/${fileName}_thumbnail.jpg`,
    fs.createReadStream(thumbnailPath),
    "image/jpeg"
  );

  // Clean up local file
  fs.unlinkSync(thumbnailPath);
};
