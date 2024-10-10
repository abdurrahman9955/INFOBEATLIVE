import express, { Request, Response } from 'express';
import multer from 'multer';
import sharp from 'sharp';
import { PrismaClient } from '@prisma/client';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

// Initialize AWS S3 Client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME!;

// Initialize Prisma Client
const prisma = new PrismaClient();

// Set up Multer for file uploads (using memory storage for better performance with sharp)
const upload = multer({ storage: multer.memoryStorage() }).single('file');

// Initialize Express Router
const bootcampIntermediateClassImageChat = express.Router();

// Upload and send image message (Create)
bootcampIntermediateClassImageChat.post('/messages/:classId/:userId', (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(500).send('Error uploading file.');
    }

    try {
      const { classId, userId, } = req.params;

      // Process the image with sharp
      const processedImage = await sharp(req.file?.buffer)
        .resize({ width: 800 }) // Resize to 800px width
        .jpeg() // Convert to JPEG format
        .toBuffer();

      const fileName = `images/${uuidv4()}.jpeg`;

      // Upload to S3
      const uploadParams = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: processedImage,
        ContentType: 'image/jpeg',
      };
      await s3Client.send(new PutObjectCommand(uploadParams));

      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Save the message in the database
      const newMessage = await prisma.bootcampClassChat.create({
        data: {
          classId,
          userId,
          content: '', // No text, just image
          type: 'IMAGE',
          level:'INTERMEDIATE',
          fileUrl,
        },
      });

      // Respond with the newly created message
      res.status(201).json(newMessage);
    } catch (error) {
      console.error('Error processing image or saving message:', error);
      res.status(500).send('Error processing image or saving message.');
    }
  });
});

// Get all messages for a specific group (Retrieve)
bootcampIntermediateClassImageChat.get('/messages/:classId', async (req: Request, res: Response) => {
  try {
    const { classId } = req.params;

    const messages = await prisma.bootcampClassChat.findMany({
      where: { classId,
        level:'INTERMEDIATE',
       },
      orderBy: { createdAt: 'asc' },
    });

    res.json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).send('Error retrieving messages.');
  }
});

// Update a message (Update)
bootcampIntermediateClassImageChat.put('/messages/:messageId', (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(500).send('Error uploading file.');
    }

    try {
      const { messageId } = req.params;
      const { content } = req.body;

      // If updating an image, process it
      if (req.file) {
        const processedImage = await sharp(req.file.buffer)
          .resize({ width: 800 })
          .jpeg()
          .toBuffer();

        const fileName = `images/${uuidv4()}.jpeg`;

        const uploadParams = {
          Bucket: S3_BUCKET_NAME,
          Key: fileName,
          Body: processedImage,
          ContentType: 'image/jpeg',
        };
        await s3Client.send(new PutObjectCommand(uploadParams));

        const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

        // Update the message with the new image URL
        const updatedMessage = await prisma.bootcampClassChat.update({
          where: { id: messageId,
            level:'INTERMEDIATE',
           },
          data: {
            content: content || '', // Content can be optional
            fileUrl, // New image URL
          },
        });

        res.json(updatedMessage);
      } else {
        // If only updating text content
        const updatedMessage = await prisma.bootcampClassChat.update({
          where: { id: messageId,
            level:'INTERMEDIATE',
           },
          data: {
            content, // Just update the text content
          },
        });

        res.json(updatedMessage);
      }
    } catch (error) {
      console.error('Error updating message:', error);
      res.status(500).send('Error updating message.');
    }
  });
});

// Delete a message (Delete)
bootcampIntermediateClassImageChat.delete('/messages/:messageId', async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;

    // Find the message to be deleted
    const message = await prisma.bootcampClassChat.findUnique({
      where: { id: messageId,
        level:'INTERMEDIATE',
       },
    });

    if (message) {
      // If message contains an image, delete it from S3
      if (message.fileUrl) {
        const key = message.fileUrl.split('/').pop(); // Extract S3 key

        if (key) {
          await s3Client.send(
            new DeleteObjectCommand({
              Bucket: S3_BUCKET_NAME,
              Key: `images/${key}`,
            })
          );
        }
      }

      // Delete the message from the database
      await prisma.bootcampClassChat.delete({
        where: { id: messageId,
          level:'INTERMEDIATE',
         },
      });

      res.status(204).send(); // No content response after deletion
    } else {
      res.status(404).send('Message not found.');
    }
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).send('Error deleting message.');
  }
});

export default bootcampIntermediateClassImageChat;
