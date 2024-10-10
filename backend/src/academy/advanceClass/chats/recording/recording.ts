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

// Function to register chat handlers for recording messages
export const registerChatHandlers = (io: Server, socket: Socket) => {
  // User joins a chat group
  socket.on('joinClass', ({ classId, userId }) => {
    socket.join(classId);
    console.log(`${userId} joined class: ${classId}`);
  });

  // Handle sending a recording message (Create)
  socket.on('sendRecordingMessage', async (data: { classId: string; userId: string; file: any }) => {
    try {
      // Generate unique filename for the recording
      const fileName = `recordings/${uuidv4()}.mp4`;

      // S3 upload parameters for the recording
      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: data.file.buffer,
        ContentType: 'video/mp4', // Assuming the recording is in MP4 format
      };

      // Upload the recording file to S3
      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Save recording message in the database
      const newMessage = await prisma.academyClassChat.create({
        data: {
          classId: data.classId,
          userId: data.userId,
          content: '', // No text, just the recording
          type: 'RECORDING',
          level:'ADVANCED',
          fileUrl, // Store the S3 URL
        },
      });

      // Emit the new recording message to the group
      io.to(data.classId).emit('newMessage', newMessage);
    } catch (error) {
      console.error('Error processing and sending recording message:', error);
    }
  });

  // Handle getting messages (Retrieve)
  socket.on('getMessages', async (data: { classId: string }) => {
    try {
      const messages = await prisma.academyClassChat.findMany({
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
        // Process the new recording file
        const fileName = `recordings/${uuidv4()}.mp4`;

        const s3Params = {
          Bucket: S3_BUCKET_NAME,
          Key: fileName,
          Body: data.file.buffer,
          ContentType: 'video/mp4', // Assuming it's still an MP4 file
        };

        await s3Client.send(new PutObjectCommand(s3Params));
        const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

        // Update message with new recording URL
        const updatedMessage = await prisma.academyClassChat.update({
          where: { id: data.messageId,
            level:'ADVANCED',
           },
          data: { fileUrl, content: '' }, // Clear content if updating with recording
        });

        io.to(updatedMessage.classId).emit('updatedMessage', updatedMessage);
      } else if (data.content) {
        // If updating text content
        const updatedMessage = await prisma.academyClassChat.update({
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
      const message = await prisma.academyClassChat.findUnique({ 
        where: { id: data.messageId,
          level:'ADVANCED',
         } });

      if (message) {
        if (message.fileUrl) {
          const key = message.fileUrl.split('/').pop();

          if (key) {
            const deleteParams = {
              Bucket: S3_BUCKET_NAME,
              Key: `recordings/${key}`,
            };

            await s3Client.send(new DeleteObjectCommand(deleteParams));
          }
        }

        await prisma.academyClassChat.delete({ 
          where: { id: data.messageId,
            level:'ADVANCED',
           } });

        io.to(message.classId).emit('deletedMessage', { messageId: data.messageId });
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  });
};
