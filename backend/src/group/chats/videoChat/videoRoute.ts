import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer'; // Middleware for handling file uploads

// Initialize Express Router
const groupVideoChatRouter = express.Router();

// AWS S3 Configuration
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME!;

// Prisma client for database access
const prisma = new PrismaClient();

// Multer configuration for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Route to handle sending a video message (Create)
groupVideoChatRouter.post('/sendVideoMessage/:groupId/:userId', upload.single('file'), async (req: Request, res: Response) => {
  try {
    const { groupId, userId } = req.params;
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'No video file uploaded' });

    // Generate unique filename for the video
    const fileName = `videos/${uuidv4()}.mp4`;

    // S3 upload parameters for the video
    const s3Params = {
      Bucket: S3_BUCKET_NAME,
      Key: fileName,
      Body: file.buffer,
      ContentType: 'video/mp4',
    };

    // Upload the video to S3
    await s3Client.send(new PutObjectCommand(s3Params));
    const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

    // Save video message in the database
    const newMessage = await prisma.groupChat.create({
      data: {
        groupId,
        userId,
        content: '', // No text, just a video
        type: 'VIDEO',
        fileUrl, // Store the S3 URL
      },
    });

    return res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error processing and sending video message:', error);
    return res.status(500).json({ error: 'Error uploading video message' });
  }
});

// Route to retrieve messages (Retrieve)
groupVideoChatRouter.get('/getMessages/:groupId', async (req: Request, res: Response) => {
  const { groupId } = req.params;

  try {
    const messages = await prisma.groupChat.findMany({
      where: { groupId },
      orderBy: { createdAt: 'asc' },
    });

    return res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    return res.status(500).json({ error: 'Error retrieving messages' });
  }
});

// Route to update a video message (Update)
groupVideoChatRouter.put('/updateMessage/:messageId', upload.single('file'), async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;
    const { content } = req.body;
    const file = req.file;

    let updatedMessage;

    if (file) {
      // Generate unique filename for the new video
      const fileName = `videos/${uuidv4()}.mp4`;

      // S3 upload parameters for the new video
      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: 'video/mp4',
      };

      // Upload the new video to S3
      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Update message with new video URL
      updatedMessage = await prisma.groupChat.update({
        where: { id: messageId },
        data: { fileUrl, content: '' },
      });
    } else if (content) {
      // Update text content
      updatedMessage = await prisma.groupChat.update({
        where: { id: messageId },
        data: { content },
      });
    }

    return res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('Error updating message:', error);
    return res.status(500).json({ error: 'Error updating message' });
  }
});

// Route to delete a video message (Delete)
groupVideoChatRouter.delete('/deleteMessage/:messageId', async (req: Request, res: Response) => {
  const { messageId } = req.params;

  try {
    // Find the message to be deleted
    const message = await prisma.groupChat.findUnique({ where: { id: messageId } });

    if (!message) return res.status(404).json({ error: 'Message not found' });

    // Delete video from S3 if it exists
    if (message.fileUrl) {
      const key = message.fileUrl.split('/').pop(); // Get S3 object key from URL

      if (key) {
        const deleteParams = {
          Bucket: S3_BUCKET_NAME,
          Key: `videos/${key}`, // S3 key for the video
        };

        await s3Client.send(new DeleteObjectCommand(deleteParams));
      }
    }

    // Delete message from the database
    await prisma.groupChat.delete({ where: { id: messageId } });

    return res.status(200).json({ messageId });
  } catch (error) {
    console.error('Error deleting message:', error);
    return res.status(500).json({ error: 'Error deleting message' });
  }
});

export default groupVideoChatRouter;
