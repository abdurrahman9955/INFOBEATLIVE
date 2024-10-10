// src/utils/s3.ts
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadToS3 = async (file: Express.Multer.File): Promise<string> => {
  const imageId = uuidv4();
  const buffer = await sharp(file.buffer).resize(800).toBuffer();

  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `uploads/${imageId}-${file.originalname}`,
    Body: buffer,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(uploadParams);
  await s3.send(command);

  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${uploadParams.Key}`;
};

export const deleteFromS3 = async (key: string) => {
  const deleteParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: key,
  };

  const command = new DeleteObjectCommand(deleteParams);
  await s3.send(command);
};
