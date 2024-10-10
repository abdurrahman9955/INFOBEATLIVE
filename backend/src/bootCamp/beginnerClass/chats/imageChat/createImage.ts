import { Server, Socket } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import sharp from 'sharp';
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

  // Handle sending an image message (Create)
  socket.on('sendImageMessage', async (data: { classId: string; userId: string; file: any }) => {
    try {
      // Process the image with sharp
      const processedImage = await sharp(data.file.buffer)
        .resize({ width: 800 }) // Resize to 800px width
        .jpeg() // Convert to JPEG format
        .toBuffer();

      // Generate unique filename for the image
      const fileName = `images/${uuidv4()}.jpeg`;

      // S3 upload parameters
      const s3Params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: processedImage,
        ContentType: 'image/jpeg',
      };

      // Upload processed image to S3
      await s3Client.send(new PutObjectCommand(s3Params));
      const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      // Save image message in the database
      const newMessage = await prisma.bootcampClassChat.create({
        data: {
          classId: data.classId,
          userId: data.userId,
          content: '', // No text, just an image
          type: 'IMAGE',
          level:'BEGINNER',
          fileUrl, // Store the S3 URL
        },
      });

      // Emit the new image message to the group
      io.to(data.classId).emit('newMessage', newMessage);

    } catch (error) {
      console.error('Error processing and sending image message:', error);
    }
  });

  // Handle getting messages (Retrieve)
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

  // Handle updating a message (Update)
  socket.on('updateMessage', async (data: { messageId: string; content?: string; file?: any }) => {
    try {
      if (data.file) {
        // Process the new image with sharp
        const processedImage = await sharp(data.file.buffer)
          .resize({ width: 800 })
          .jpeg()
          .toBuffer();

        const fileName = `images/${uuidv4()}.jpeg`;

        // S3 upload parameters for the new image
        const s3Params = {
          Bucket: S3_BUCKET_NAME,
          Key: fileName,
          Body: processedImage,
          ContentType: 'image/jpeg',
        };

        // Upload the new image to S3
        await s3Client.send(new PutObjectCommand(s3Params));
        const fileUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

        // Update message with new image URL
        const updatedMessage = await prisma.bootcampClassChat.update({
          where: { id: data.messageId,
            level:'BEGINNER',
           },
          data: { fileUrl, content: '' }, // Clear the content if image
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
      console.error('Error updating message:', error);
    }
  });

  // Handle deleting a message (Delete)
  socket.on('deleteMessage', async (data: { messageId: string }) => {
    try {
      // Find the message to be deleted
      const message = await prisma.bootcampClassChat.findUnique({ 
        where: { id: data.messageId,
          level:'BEGINNER',
         } });

      if (message) {
        // Delete image from S3 if it exists
        if (message.fileUrl) {
          const key = message.fileUrl.split('/').pop(); // Get S3 object key from URL

          if (key) {
            const deleteParams = {
              Bucket: S3_BUCKET_NAME,
              Key: `images/${key}`, // S3 key for the image
            };

            await s3Client.send(new DeleteObjectCommand(deleteParams));
          }
        }

        // Delete message from the database
        await prisma.bootcampClassChat.delete({ 
          where: { id: data.messageId,
            level:'BEGINNER',
           } });

        // Emit deleted message event to the group
        io.to(message.bootcampClassChat).emit('deletedMessage', { messageId: data.messageId });
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  });

  // Handle other CRUD operations as necessary...
};
