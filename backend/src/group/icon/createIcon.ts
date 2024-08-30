import prisma from './prisma';
import sharp from 'sharp';
import { uploadImageToS3 } from './s3'; // Adjust import paths as necessary
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

class GroupService {
  async updateGroupIcon(groupId: string, iconFile: Buffer, mimeType: string): Promise<string> {
    try {
      // Process the image with sharp
      const processedImage = await sharp(iconFile)
        .resize(800) // Resize to width of 800px, adjust as needed
        .toBuffer();

      // Generate a unique key for the icon
      const iconKey = `group-icons/${groupId}/${Date.now()}`;

      // Upload the new icon to S3
      const iconUrl = await uploadImageToS3(processedImage, iconKey, mimeType);

      // Update the group's icon URL in the database
      const updatedGroup = await prisma.group.update({
        where: { id: groupId },
        data: { icon: iconUrl },
      });

      return updatedGroup.icon;
    } catch (error) {
      // Handle unknown errors
      if (error instanceof Error) {
        throw new Error(`Failed to update group icon: ${error.message}`);
      } else {
        throw new Error('Failed to update group icon: An unexpected error occurred');
      }
    }
  }

  async deleteGroupIcon(groupId: string): Promise<void> {
    try {
      // Get the current icon URL
      const group = await prisma.group.findUnique({
        where: { id: groupId },
        select: { icon: true },
      });

      if (!group || !group.icon) {
        throw new Error('No icon found for this group');
      }

      // Extract the key from the URL
      const iconKey = group.icon.split('/').slice(-2).join('/');

      // Delete the icon from S3
      const deleteCommand = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: iconKey,
      });
      await s3Client.send(deleteCommand);

      // Remove the icon URL from the database
      await prisma.group.update({
        where: { id: groupId },
        data: { icon: null },
      });
    } catch (error) {
      // Handle unknown errors
      if (error instanceof Error) {
        throw new Error(`Failed to delete group icon: ${error.message}`);
      } else {
        throw new Error('Failed to delete group icon: An unexpected error occurred');
      }
    }
  }

  async getGroupIcon(groupId: string): Promise<string | null> {
    try {
      // Get the group's icon URL from the database
      const group = await prisma.group.findUnique({
        where: { id: groupId },
        select: { icon: true },
      });

      return group?.icon || null;
    } catch (error) {
      // Handle unknown errors
      if (error instanceof Error) {
        throw new Error(`Failed to get group icon: ${error.message}`);
      } else {
        throw new Error('Failed to get group icon: An unexpected error occurred');
      }
    }
  }
}

export default new GroupService();
