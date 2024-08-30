import prisma from './prisma';
import sharp from 'sharp';
import { uploadImageToS3 } from './s3'; 
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

class ClassService {
  async updateClassIcon(groupId: string, iconFile: Buffer, mimeType: string): Promise<string> {
    try {
      
      const processedImage = await sharp(iconFile)
        .resize(800) 
        .toBuffer();

      const iconKey = `group-icons/${groupId}/${Date.now()}`;

      const iconUrl = await uploadImageToS3(processedImage, iconKey, mimeType);

      const updatedGroup = await prisma.group.update({
        where: { id: groupId },
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

  async deleteClassIcon(groupId: string): Promise<void> {
    try {
     
      const group = await prisma.group.findUnique({
        where: { id: groupId },
        select: { icon: true },
      });

      if (!group || !group.icon) {
        throw new Error('No icon found for this group');
      }

      const iconKey = group.icon.split('/').slice(-2).join('/');

      const deleteCommand = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: iconKey,
      });
      await s3Client.send(deleteCommand);

      await prisma.group.update({
        where: { id: groupId },
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

  async getClassIcon(groupId: string): Promise<string | null> {
    try {
      const group = await prisma.group.findUnique({
        where: { id: groupId },
        select: { icon: true },
      });

      return group?.icon || null;
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
