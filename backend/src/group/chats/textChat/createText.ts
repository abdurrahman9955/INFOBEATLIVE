import { Server, Socket } from 'socket.io';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Chat Handlers for real-time text messages
export const registerChatHandlers = (io: Server, socket: Socket) => {

  // User joins a chat group
  socket.on('joinGroup', async ({ groupId, userId }) => {
    socket.join(groupId);
    console.log(`${userId} joined group: ${groupId}`);
  });

  // Handle sending a text message (Create)
  socket.on('sendMessage', async ({ groupId, userId, content }) => {
    try {
      const newMessage = await prisma.groupChat.create({
        data: {
          groupId,
          userId,
          content,
          type: 'TEXT', // Only handling text here
        },
      });

      // Emit the new message to the group
      io.to(groupId).emit('newMessage', newMessage);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  });

  // Handle deleting a message
  socket.on('deleteMessage', async ({ messageId, groupId }) => {
    try {
      await prisma.groupChat.delete({
        where: { id: messageId },
      });

      // Emit deletion to the group
      io.to(groupId).emit('messageDeleted', messageId);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  });

  // Handle updating a message (Edit)
  socket.on('editMessage', async ({ messageId, groupId, newContent }) => {
    try {
      const updatedMessage = await prisma.groupChat.update({
        where: { id: messageId },
        data: { content: newContent },
      });

      // Emit the updated message to the group
      io.to(groupId).emit('messageUpdated', updatedMessage);
    } catch (error) {
      console.error('Error updating message:', error);
    }
  });

  // Fetch all messages in a group (Read)
  socket.on('getMessages', async ({ groupId }) => {
    try {
      const messages = await prisma.groupChat.findMany({
        where: { groupId },
        orderBy: { createdAt: 'asc' },
      });

      // Emit the messages to the requesting client
      socket.emit('messagesFetched', messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  });
};
