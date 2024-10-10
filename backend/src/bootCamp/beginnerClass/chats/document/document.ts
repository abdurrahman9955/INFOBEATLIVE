import { Server, Socket } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
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

// Function to register document handlers
export const registerDocumentHandlers = (io: Server, socket: Socket) => {
  // User joins a document chat group
  socket.on('joinClass', ({ classId, userId }) => {
    socket.join(classId);
    console.log(`${userId} joined class: ${classId}`);
  });

  // Handle sending a document message (Create)
  socket.on('sendDocumentMessage', async (data: { classId: string; userId: string; file: any }) => {
    try {
      // Only allow specific document types (e.g., PDF, DOCX)
      const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedFileTypes.includes(data.file.mimetype)) {
        throw new Error('Unsupported document type');
      }

      // Generate unique filename for the document
      const fileExtension = data.file.originalname.split('.').pop();
      const fileName = `documents/${uuidv4()}.${fileExtension}`;

      // S3 upload parameters
      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: data.file.buffer,
        ContentType: data.file.mimetype,
      };

      // Upload document to S3
      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Save document message in the database
      const newMessage = await prisma.bootcampClassChat.create({
        data: {
          classId: data.classId,
          userId: data.userId,
          content: '', // No text, just a document
          type: 'DOCUMENT',
          level:'BEGINNER',
          fileUrl, // Store the S3 URL
          fileName: data.file.originalname, // Original document name
        },
      });

      // Emit the new document message to the group
      io.to(data.classId).emit('newMessage', newMessage);

    } catch (error) {
      console.error('Error uploading document:', error);
    }
  });

  // Handle retrieving messages (Retrieve)
  socket.on('getMessages', async (data: { classId: string }) => {
    try {
      const messages = await prisma.bootcampClassChat.findMany({
        where: { classId: data.classId,
          level:'BEGINNER',
         },
        orderBy: { createdAt: 'asc' }, // Order messages by creation time
      });

      // Emit the retrieved messages to the group
      socket.emit('messages', messages);
    } catch (error) {
      console.error('Error retrieving messages:', error);
    }
  });

  // Handle updating a document message (Update)
  socket.on('updateDocumentMessage', async (data: { messageId: string; content?: string; file?: any }) => {
    try {
      if (data.file) {
        // Only allow specific document types (e.g., PDF, DOCX)
        const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedFileTypes.includes(data.file.mimetype)) {
          throw new Error('Unsupported document type');
        }

        // Generate unique filename for the updated document
        const fileExtension = data.file.originalname.split('.').pop();
        const fileName = `documents/${uuidv4()}.${fileExtension}`;

        // S3 upload parameters for the updated document
        const s3Params = {
          Bucket: S3_BUCKET_NAME,
          Key: fileName,
          Body: data.file.buffer,
          ContentType: data.file.mimetype,
        };

        // Upload the updated document to S3
        await s3Client.send(new PutObjectCommand(s3Params));
        const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

        // Update document message in the database
        const updatedMessage = await prisma.bootcampClassChat.update({
          where: { id: data.messageId,
            level:'BEGINNER',
           },
          data: { fileUrl, content: '' }, // Clear the content if document
        });

        // Emit updated message to the group
        io.to(updatedMessage.classId).emit('updatedMessage', updatedMessage);
      } else if (data.content) {
        // Update text content
        const updatedMessage = await prisma.bootcampClassChat.update({
          where: { id: data.messageId,
            level:'BEGINNER',
           },
          data: { content: data.content }, // Only update the content
        });

        // Emit updated message to the group
        io.to(updatedMessage.classId).emit('updatedMessage', updatedMessage);
      }
    } catch (error) {
      console.error('Error updating document message:', error);
    }
  });

  // Handle deleting a document message (Delete)
  socket.on('deleteDocumentMessage', async (data: { messageId: string }) => {
    try {
      // Find the message to be deleted
      const message = await prisma.bootcampClassChat.findUnique({ 
        where: { id: data.messageId,
          level:'BEGINNER',
         } });

      if (message) {
        // Delete document from S3 if it exists
        if (message.fileUrl) {
          const key = message.fileUrl.split('/').pop(); // Get S3 object key from URL

          if (key) {
            const deleteParams = {
              Bucket: S3_BUCKET_NAME,
              Key: `documents/${key}`, // S3 key for the document
            };

            await s3Client.send(new DeleteObjectCommand(deleteParams));
          }
        }

        // Delete message from the database
        await prisma.bootcampClassChat.delete({ where: { id: data.messageId,
          level:'BEGINNER',
         } });

        // Emit deleted message event to the group
        io.to(message.classId).emit('deletedMessage', { messageId: data.messageId });
      }
    } catch (error) {
      console.error('Error deleting document message:', error);
    }
  });
};
