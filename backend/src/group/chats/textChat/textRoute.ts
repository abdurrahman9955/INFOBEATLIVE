import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const groupTextChatRouter = Router();
const prisma = new PrismaClient();

// Create a message (POST)
groupTextChatRouter.post('/message/:groupId/:userId', async (req, res) => {
  const {  content } = req.body;
  const { groupId, userId, } = req.params;

  try {
    const newMessage = await prisma.groupChat.create({
      data: {
        groupId,
        userId,
        content,
        type: 'TEXT',
      },
    });
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error creating message' });
  }
});

// Get all messages for a group (GET)
groupTextChatRouter.get('/messages/:groupId', async (req, res) => {
  const { groupId } = req.params;

  try {
    const messages = await prisma.groupChat.findMany({
      where: { groupId },
      orderBy: { createdAt: 'asc' },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Update a message (PUT)
groupTextChatRouter.put('/message/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const updatedMessage = await prisma.groupChat.update({
      where: { id },
      data: { content },
    });
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error updating message' });
  }
});

// Delete a message (DELETE)
groupTextChatRouter.delete('/message/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.groupChat.delete({
      where: { id },
    });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting message' });
  }
});

export default groupTextChatRouter;
