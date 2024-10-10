import { Server, Socket } from 'socket.io';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Chat Handlers for real-time text messages
export const registerChatHandlers = (io: Server, socket: Socket) => {

  // User joins a chat group
  socket.on('joinClass', async ({ classId, userId }) => {
    socket.join(classId);
    console.log(`${userId} joined class: ${classId}`);
  });

  // Handle sending a text message (Create)
  socket.on('sendMessage', async ({ classId, userId, content }) => {
    try {
      const newMessage = await prisma.academyClassChat.create({
        data: {
          classId,
          userId,
          content,
          type: 'TEXT', // Only handling text here
          level:'BEGINNER',
        },
      });

      // Emit the new message to the group
      io.to(classId).emit('newMessage', newMessage);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  });

  // Handle deleting a message
  socket.on('deleteMessage', async ({ messageId, classId }) => {
    try {
      await prisma.academyClassChat.delete({
        where: { id: messageId,
          level:'BEGINNER',
         },
      });

      // Emit deletion to the group
      io.to(classId).emit('messageDeleted', messageId);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  });

  // Handle updating a message (Edit)
  socket.on('editMessage', async ({ messageId, classId, newContent }) => {
    try {
      const updatedMessage = await prisma.academyClassChat.update({
        where: { id: messageId,
          level:'BEGINNER',
         },
        data: { content: newContent },
      });

      // Emit the updated message to the group
      io.to(classId).emit('messageUpdated', updatedMessage);
    } catch (error) {
      console.error('Error updating message:', error);
    }
  });

  // Fetch all messages in a group (Read)
  socket.on('getMessages', async ({ classId }) => {
    try {
      const messages = await prisma.academyClassChat.findMany({
        where: { classId,
          level:'BEGINNER',
         },
        orderBy: { createdAt: 'asc' },
      });

      // Emit the messages to the requesting client
      socket.emit('messagesFetched', messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  });
};
