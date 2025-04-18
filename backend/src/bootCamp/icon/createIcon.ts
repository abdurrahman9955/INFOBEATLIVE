
import sharp from 'sharp';
import { uploadImageToS3 } from './s3'; 
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

class ClassService {

  async createClass(name: string, description: string, iconFile: Buffer, mimeType: string): Promise<any> {
    try {
      // Process the image (resize, etc.) before uploading
      const processedImage = await sharp(iconFile)
        .resize(800) // Resize to 800px wide
        .toBuffer();

      // Generate a unique key for the S3 object
      const iconKey = `class-icons/${Date.now()}`;

      // Upload the image to S3
      const iconUrl = await uploadImageToS3(processedImage, iconKey, mimeType);

      // Create a new class with the icon URL
      const newClass = await prisma.bootcamp.create({
        data: {
          name,
          description,
          icon: iconUrl,
        },
      });

      return newClass;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to create class: ${error.message}`);
      } else {
        throw new Error('Failed to create class: An unexpected error occurred');
      }
    }
  }
  
  
  async updateClassIcon(bootcampId: string, iconFile: Buffer, mimeType: string): Promise<string> {
    try {
      
      const processedImage = await sharp(iconFile)
        .resize(800) 
        .toBuffer();

      const iconKey = `group-icons/${bootcampId}/${Date.now()}`;

      const iconUrl = await uploadImageToS3(processedImage, iconKey, mimeType);

      const updatedGroup = await prisma.bootcamp.update({
        where: { id: bootcampId,
         },
        data: { icon: iconUrl },
      });

      return updatedGroup.icon;
    } catch (error) {
     
      if (error instanceof Error) {
        throw new Error(`Failed to update group icon: ${error.message}`);
      } else {
        throw new Error('Failed to update group icon: An unexpected error occurred');
      }
    }
  }

  async deleteClassIcon(bootcampId: string): Promise<void> {
    try {
     
      const classes = await prisma.bootcamp.findUnique({
        where: { id: bootcampId },
        select: { icon: true },
      });

      if (!classes || !classes.icon) {
        throw new Error('No icon found for this group');
      }

      const iconKey = classes.icon.split('/').slice(-2).join('/');

      const deleteCommand = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: iconKey,
      });
      await s3Client.send(deleteCommand);

      await prisma.bootcamp.update({
        where: { id: bootcampId },
        data: { icon: null },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to delete group icon: ${error.message}`);
      } else {
        throw new Error('Failed to delete group icon: An unexpected error occurred');
      }
    }
  }

  async getClassIcon(bootCampId: string): Promise<string | null> {
    try {
      const classes = await prisma.bootcamp.findUnique({
        where: { id: bootCampId },
        select: { icon: true },
      });

      return classes?.icon || null;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get group icon: ${error.message}`);
      } else {
        throw new Error('Failed to get group icon: An unexpected error occurred');
      }
    }
  }
}

export default new ClassService();
