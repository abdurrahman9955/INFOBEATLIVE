import { S3Client, PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import dotenv from "dotenv";
import { ReadStream } from 'fs';

dotenv.config();

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

const uploadToS3 = async (
    bucketName: string,
    key: string,
    body: ReadStream | Buffer | string,
    contentType: string
): Promise<void> => {
    const uploadParams: PutObjectCommandInput = {
        Bucket: bucketName,
        Key: key,
        Body: body,
        ContentType: contentType,
    };

    const parallelUploads3 = new Upload({
        client: s3Client,
        params: uploadParams,
    });

    await parallelUploads3.done();
};

export default uploadToS3;