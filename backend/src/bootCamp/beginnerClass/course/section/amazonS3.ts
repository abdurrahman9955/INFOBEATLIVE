import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { ReadStream } from "fs";
import dotenv from "dotenv";

dotenv.config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadToS3 = async (
  bucketName: string,
  key: string,
  body: ReadStream | Buffer | string,
  contentType: string
): Promise<void> => {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: body,
    ContentType: contentType,
  });

  await s3Client.send(command);
};
