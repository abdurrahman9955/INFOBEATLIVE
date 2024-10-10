import { Router, Request, Response } from 'express';
import multer from 'multer';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

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

// Multer setup for handling file uploads in memory
const upload = multer({ storage: multer.memoryStorage() }).single('file');

// Initialize router
const groupAudioChatRouter = Router();

// Handle uploading an audio message
groupAudioChatRouter.post('/uploadAudio/:groupId/:userId', upload, async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Generate unique filename for the audio
    const fileName = `audio/${uuidv4()}.mp3`;

    // S3 upload parameters
    const s3Params = {
      Bucket: S3_BUCKET_NAME,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: 'audio/mpeg',
    };

    // Upload audio file to S3
    await s3Client.send(new PutObjectCommand(s3Params));
    const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

    // Save audio message in the database
    const { groupId, userId, } = req.params;
    const newMessage = await prisma.groupChat.create({
      data: {
        groupId,
        userId,
        content: '', // No text, just audio
        type: 'AUDIO',
        fileUrl, // Store the S3 URL
      },
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error uploading audio message:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle getting messages
groupAudioChatRouter.get('/getMessages/:groupId', async (req: Request, res: Response) => {
  try {
    const messages = await prisma.groupChat.findMany({
      where: { groupId: req.params.groupId },
      orderBy: { createdAt: 'asc' },
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle updating a message
groupAudioChatRouter.put('/updateMessage/:messageId', upload, async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;
    const { content } = req.body;

    if (req.file) {
      // Process the new audio file
      const fileName = `audio/${uuidv4()}.mp3`;

      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: req.file.buffer,
        ContentType: 'audio/mpeg',
      };

      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Update message with new audio URL
      const updatedMessage = await prisma.groupChat.update({
        where: { id: messageId },
        data: { fileUrl, content: '' }, // Clear content if updating with audio
      });

      res.status(200).json(updatedMessage);
    } else if (content) {
      // If updating text content
      const updatedMessage = await prisma.groupChat.update({
        where: { id: messageId },
        data: { content }, // Only update the content
      });

      res.status(200).json(updatedMessage);
    } else {
      res.status(400).send('No content or file to update.');
    }
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle deleting a message
groupAudioChatRouter.delete('/deleteMessage/:messageId', async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;

    // Find the message to be deleted
    const message = await prisma.groupChat.findUnique({ where: { id: messageId } });

    if (message) {
      if (message.fileUrl) {
        const key = message.fileUrl.split('/').pop();

        if (key) {
          const deleteParams = {
            Bucket: S3_BUCKET_NAME,
            Key: `audio/${key}`,
          };

          await s3Client.send(new DeleteObjectCommand(deleteParams));
        }
      }

      await prisma.groupChat.delete({ where: { id: messageId } });

      res.status(200).send('Message deleted successfully');
    } else {
      res.status(404).send('Message not found');
    }
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default groupAudioChatRouter;
