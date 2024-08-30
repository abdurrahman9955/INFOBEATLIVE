// src/services/textPost.service.ts
import prisma from './prisma';
import { resizeImage } from './sharp';
import { uploadImageToS3 } from './amazonS3';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });
  

class TextPostService {
  async createTextPost(userId: string, groupId: string, content: string, images: Express.MulterS3.File[]) {
    const imageUrls: string[] = [];

    for (const image of images) {
      const resizedImageBuffer = await resizeImage(image.buffer, 800, 600); // Resize image as needed
      const key = `posts/${Date.now()}_${image.originalname}`;
      await uploadImageToS3(resizedImageBuffer, key, image.mimetype);

      const imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
      imageUrls.push(imageUrl);
    }

    return prisma.textPost.create({
      data: {
        userId,
        groupId,
        content,
        imageUrls,
      },
    });
  }

  async getTextPostById(postId: string) {
    return prisma.textPost.findUnique({
      where: { id: postId },
      include: { user: true },
    });
  }

  async updateTextPost(postId: string, content?: string, images?: Express.MulterS3.File[]) {
    const post = await prisma.textPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new Error('Post not found');
    }

    const updatedImageUrls: string[] = [...post.imageUrls];

    if (images) {
      for (const image of images) {
        const resizedImageBuffer = await resizeImage(image.buffer, 800, 600); // Resize image as needed
        const key = `posts/${Date.now()}_${image.originalname}`;
        await uploadImageToS3(resizedImageBuffer, key, image.mimetype);

        const imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
        updatedImageUrls.push(imageUrl);
      }
    }

    return prisma.textPost.update({
      where: { id: postId },
      data: {
        content: content ?? post.content,
        imageUrls: updatedImageUrls,
      },
    });
  }

  async deleteTextPost(postId: string) {
    const post = await prisma.textPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new Error('Post not found');
    }

    // Optionally, delete images from S3 if you want to clean up
    for (const url of post.imageUrls) {
      const key = url.split('/').pop(); // Extract the key from the URL
      if (key) {
        // Delete the image from S3
        await s3Client.send(new DeleteObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: key,
        }));
      }
    }

    return prisma.textPost.delete({
      where: { id: postId },
    });
  }

  async getAllTextPosts(groupId: string) {
    return prisma.textPost.findMany({
      where: { groupId },
      include: { user: true },
    });
  }
}

export default new TextPostService();
