import { Router, Request, Response } from 'express';
import multer from 'multer';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

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
const classDocumentChatRouter = Router();

// Define allowed document types
const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

// Handle uploading a document
classDocumentChatRouter.post('/uploadDocument/:classId/:userId', upload, async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Validate file type
    if (!allowedFileTypes.includes(req.file.mimetype)) {
      return res.status(400).send('Unsupported file type.');
    }

    // Generate unique filename for the document
    const fileExtension = path.extname(req.file.originalname);
    const fileName = `documents/${uuidv4()}${fileExtension}`;

    // S3 upload parameters
    const s3Params = {
      Bucket: S3_BUCKET_NAME,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

    // Upload document file to S3
    await s3Client.send(new PutObjectCommand(s3Params));
    const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

    // Save document message in the database
    const {  documentTitle } = req.body;
    const { classId, userId, } = req.params;
    const newMessage = await prisma.groupChat.create({
      data: {
        classId,
        userId,
        content: documentTitle || '', // Optional document title
        type:'DOCUMENT',
        fileUrl, // Store the S3 URL of the document
      },
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error uploading document:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle getting messages (including documents)
classDocumentChatRouter.get('/getMessages/:classId', async (req: Request, res: Response) => {
  try {
    const messages = await prisma.classChat.findMany({
      where: { classId: req.params.classId },
      orderBy: { createdAt: 'asc' },
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle updating a document
classDocumentChatRouter.put('/updateDocument/:messageId', upload, async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;
    const { documentTitle } = req.body;

    if (req.file) {
      // Validate file type
      if (!allowedFileTypes.includes(req.file.mimetype)) {
        return res.status(400).send('Unsupported file type.');
      }

      // Generate new file name
      const fileExtension = path.extname(req.file.originalname);
      const fileName = `documents/${uuidv4()}${fileExtension}`;

      // S3 upload parameters for the new file
      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };

      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Update document URL and title
      const updatedMessage = await prisma.groupChat.update({
        where: { id: messageId },
        data: { fileUrl, content: documentTitle || '' },
      });

      res.status(200).json(updatedMessage);
    } else if (documentTitle) {
      // If only updating the document title
      const updatedMessage = await prisma.groupChat.update({
        where: { id: messageId },
        data: { content: documentTitle },
      });

      res.status(200).json(updatedMessage);
    } else {
      res.status(400).send('No document or title to update.');
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle deleting a document
classDocumentChatRouter.delete('/deleteDocument/:messageId', async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;

    // Find the message to be deleted
    const message = await prisma.classChat.findUnique({ where: { id: messageId } });

    if (message) {
      if (message.fileUrl) {
        const key = message.fileUrl.split('/').pop();

        if (key) {
          const deleteParams = {
            Bucket: S3_BUCKET_NAME,
            Key: `documents/${key}`,
          };

          await s3Client.send(new DeleteObjectCommand(deleteParams));
        }
      }

      await prisma.classChat.delete({ where: { id: messageId } });

      res.status(200).send('Document deleted successfully');
    } else {
      res.status(404).send('Document not found');
    }
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default classDocumentChatRouter;
