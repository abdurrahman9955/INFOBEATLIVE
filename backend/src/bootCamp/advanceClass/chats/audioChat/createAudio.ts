import { Server, Socket } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
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

// Multer setup for handling file uploads in memory
const upload = multer({ storage: multer.memoryStorage() }).single('file');

// Function to register chat handlers
export const registerChatHandlers = (io: Server, socket: Socket) => {
  // User joins a chat group
  socket.on('joinClass', ({ classId, userId }) => {
    socket.join(classId);
    console.log(`${userId} joined class: ${classId}`);
  });

  // Handle sending an audio message (Create)
  socket.on('sendAudioMessage', async (data: { classId: string; userId: string; file: any }) => {
    try {
      // Generate unique filename for the audio
      const fileName = `audio/${uuidv4()}.mp3`;

      // S3 upload parameters
      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: data.file.buffer,
        ContentType: 'audio/mpeg',
      };

      // Upload audio file to S3
      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Save audio message in the database
      const newMessage = await prisma.bootcampClassChat.create({
        data: {
          classId: data.classId,
          userId: data.userId,
          content: '', // No text, just audio
          type: 'AUDIO',
          level:'ADVANCED',
          fileUrl, // Store the S3 URL
        },
      });

      // Emit the new audio message to the group
      io.to(data.classId).emit('newMessage', newMessage);
    } catch (error) {
      console.error('Error processing and sending audio message:', error);
    }
  });

  // Handle getting messages (Retrieve)
  socket.on('getMessages', async (data: { classId: string }) => {
    try {
      const messages = await prisma.bootcampClassChat.findMany({
        where: { classId: data.classId,
          level:'ADVANCED',
         },
        orderBy: { createdAt: 'asc' },
      });

      socket.emit('messages', messages);
    } catch (error) {
      console.error('Error retrieving messages:', error);
    }
  });

  // Handle updating a message (Update)
  socket.on('updateMessage', async (data: { messageId: string; content?: string; file?: any }) => {
    try {
      if (data.file) {
        // Process the new audio file
        const fileName = `audio/${uuidv4()}.mp3`;

        const s3Params = {
          Bucket: S3_BUCKET_NAME,
          Key: fileName,
          Body: data.file.buffer,
          ContentType: 'audio/mpeg',
        };

        await s3Client.send(new PutObjectCommand(s3Params));
        const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

        // Update message with new audio URL
        const updatedMessage = await prisma.bootcampClassChat.update({
          where: { id: data.messageId,
            level:'ADVANCED',
           },
          data: { fileUrl, content: '' }, // Clear content if updating with audio
        });

        io.to(updatedMessage.classId).emit('updatedMessage', updatedMessage);
      } else if (data.content) {
        // If updating text content
        const updatedMessage = await prisma.bootcampClassChat.update({
          where: { id: data.messageId,
            level:'ADVANCED',
           },
          data: { content: data.content }, // Only update the content
        });

        io.to(updatedMessage.classId).emit('updatedMessage', updatedMessage);
      }
    } catch (error) {
      console.error('Error updating message:', error);
    }
  });

  // Handle deleting a message (Delete)
  socket.on('deleteMessage', async (data: { messageId: string }) => {
    try {
      const message = await prisma.bootcampClassChat.findUnique({ 
        where: { id: data.messageId,
          level:'ADVANCED',
         } });

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

        await prisma.bootcampClassChat.delete({ where: { id: data.messageId,
          level:'ADVANCED',
         } });

        io.to(message.classId).emit('deletedMessage', { messageId: data.messageId });
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  });

  // Handle other CRUD operations as necessary...
};
