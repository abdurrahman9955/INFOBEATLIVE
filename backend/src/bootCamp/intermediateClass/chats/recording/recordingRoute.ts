import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer'; // Middleware for handling file uploads

enum ChatMessageType {
    RECORDING = 'RECORDING',
  }

// Initialize Express Router
const bootcampIntermediateClassRecordingChat = express.Router();

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

// Multer configuration for file uploads (used for recordings)
const upload = multer({ storage: multer.memoryStorage() });

// Route to handle sending a recording message (Create)
bootcampIntermediateClassRecordingChat.post('/sendRecordingMessage/:classId/:userId', upload.single('file'), async (req: Request, res: Response) => {
  try {
    const { classId, userId, } = req.params;
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'No recording file uploaded' });

    // Generate unique filename for the recording
    const fileName = `recordings/${uuidv4()}.mp4`;

    // S3 upload parameters for the recording
    const s3Params = {
      Bucket: S3_BUCKET_NAME,
      Key: fileName,
      Body: file.buffer,
      ContentType: 'video/mp4', // Assuming the recording is in MP4 format
    };

    // Upload the recording to S3
    await s3Client.send(new PutObjectCommand(s3Params));
    const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

    // Save recording message in the database
    const newMessage = await prisma.bootcampClassChat.create({
      data: {
        classId,
        userId,
        content: '', // No text, just the recording
        type: ChatMessageType.RECORDING,
        llevel:'INTERMEDIATE',
        fileUrl, // Store the S3 URL
      },
    });

    return res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error processing and sending recording message:', error);
    return res.status(500).json({ error: 'Error uploading recording message' });
  }
});

// Route to retrieve recording messages (Retrieve)
bootcampIntermediateClassRecordingChat.get('/getRecordingMessages/:groupId', async (req: Request, res: Response) => {
  const { classId } = req.params;

  try {
    const messages = await prisma.bootcampClassChat.findMany({
      where: { classId, type: ChatMessageType.RECORDING,
        level:'INTERMEDIATE',
      },
      orderBy: { createdAt: 'asc' },
    });

    return res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving recording messages:', error);
    return res.status(500).json({ error: 'Error retrieving recording messages' });
  }
});

// Route to update a recording message (Update)
bootcampIntermediateClassRecordingChat.put('/updateRecordingMessage/:messageId', upload.single('file'), async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'No recording file uploaded' });

    // Generate new unique filename for the updated recording
    const fileName = `recordings/${uuidv4()}.mp4`;

    // S3 upload parameters for the new recording file
    const s3Params = {
      Bucket: S3_BUCKET_NAME,
      Key: fileName,
      Body: file.buffer,
      ContentType: 'video/mp4',
    };

    // Upload the updated recording to S3
    await s3Client.send(new PutObjectCommand(s3Params));
    const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

    // Update the message with the new recording URL
    const updatedMessage = await prisma.bootcampClassChat.update({
      where: { id: messageId,
        level:'INTERMEDIATE',
       },
      data: { fileUrl, content: '' }, // Update file URL, no text
    });

    return res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('Error updating recording message:', error);
    return res.status(500).json({ error: 'Error updating recording message' });
  }
});

// Route to delete a recording message (Delete)
bootcampIntermediateClassRecordingChat.delete('/deleteRecordingMessage/:messageId', async (req: Request, res: Response) => {
  const { messageId } = req.params;

  try {
    // Find the message to be deleted
    const message = await prisma.bootcampClassChat.findUnique({ 
      where: { id: messageId,
        level:'INTERMEDIATE',
       } });

    if (!message || message.type !== ChatMessageType.RECORDING) {
      return res.status(404).json({ error: 'Recording message not found' });
    }

    // Delete the recording file from S3 if it exists
    if (message.fileUrl) {
      const key = message.fileUrl.split('/').pop(); // Get the S3 object key from the URL

      if (key) {
        const deleteParams = {
          Bucket: S3_BUCKET_NAME,
          Key: key, // S3 key for the file
        };

        await s3Client.send(new DeleteObjectCommand(deleteParams));
      }
    }

    // Delete the recording message from the database
    await prisma.bootcampClassChat.delete({ where: { id: messageId,
      level:'INTERMEDIATE',
     } });

    return res.status(200).json({ messageId });
  } catch (error) {
    console.error('Error deleting recording message:', error);
    return res.status(500).json({ error: 'Error deleting recording message' });
  }
});

export default bootcampIntermediateClassRecordingChat;
