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

// Function to register chat handlers
export const registerChatHandlers = (io: Server, socket: Socket) => {
  // User joins a chat group
  socket.on('joinClass', ({ classId, userId }) => {
    socket.join(classId);
    console.log(`${userId} joined class: ${classId}`);
  });

  // Handle sending a video message (Create)
  socket.on('sendVideoMessage', async (data: { classId: string; userId: string; file: any }) => {
    try {
      // Generate unique filename for the video
      const fileName = `videos/${uuidv4()}.mp4`;

      // S3 upload parameters for the video
      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: data.file.buffer, // Directly using the file buffer
        ContentType: 'video/mp4', // Set content type for video
      };

      // Upload the video to S3
      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Save video message in the database
      const newMessage = await prisma.classChat.create({
        data: {
          classId: data.classId,
          userId: data.userId,
          content: '', // No text, just a video
          type: 'VIDEO',
          fileUrl, // Store the S3 URL
        },
      });

      // Emit the new video message to the group
      io.to(data.classId).emit('newMessage', newMessage);

    } catch (error) {
      console.error('Error processing and sending video message:', error);
    }
  });

  // Handle getting messages (Retrieve)
  socket.on('getMessages', async (data: { classId: string }) => {
    try {
      const messages = await prisma.classChat.findMany({
        where: { classId: data.classId },
        orderBy: { createdAt: 'asc' }, // Order messages by creation time
      });

      // Emit the retrieved messages to the group
      socket.emit('messages', messages);
    } catch (error) {
      console.error('Error retrieving messages:', error);
    }
  });

  // Handle updating a video message (Update)
  socket.on('updateMessage', async (data: { messageId: string; content?: string; file?: any }) => {
    try {
      if (data.file) {
        // Generate unique filename for the new video
        const fileName = `videos/${uuidv4()}.mp4`;

        // S3 upload parameters for the new video
        const s3Params = {
          Bucket: S3_BUCKET_NAME,
          Key: fileName,
          Body: data.file.buffer,
          ContentType: 'video/mp4',
        };

        // Upload the new video to S3
        await s3Client.send(new PutObjectCommand(s3Params));
        const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

        // Update message with new video URL
        const updatedMessage = await prisma.classChat.update({
          where: { id: data.messageId },
          data: { fileUrl, content: '' }, // Clear content if video
        });

        // Emit updated message to the group
        io.to(updatedMessage.classId).emit('updatedMessage', updatedMessage);
      } else if (data.content) {
        // Update text content
        const updatedMessage = await prisma.classChat.update({
          where: { id: data.messageId },
          data: { content: data.content }, // Only update content
        });

        // Emit updated message to the group
        io.to(updatedMessage.classId).emit('updatedMessage', updatedMessage);
      }
    } catch (error) {
      console.error('Error updating message:', error);
    }
  });

  // Handle deleting a video message (Delete)
  socket.on('deleteMessage', async (data: { messageId: string }) => {
    try {
      // Find the message to be deleted
      const message = await prisma.classChat.findUnique({ where: { id: data.messageId } });

      if (message) {
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
        await prisma.classChat.delete({ where: { id: data.messageId } });

        // Emit deleted message event to the group
        io.to(message.classId).emit('deletedMessage', { messageId: data.messageId });
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  });

  // Handle other CRUD operations as necessary...
};
