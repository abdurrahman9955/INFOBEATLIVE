import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const classTextChatRouter = Router();
const prisma = new PrismaClient();

// Create a message (POST)
classTextChatRouter.post('/message/:classId/:userId', async (req, res) => {
  const {  content } = req.body;
  const { classId, userId, } = req.params;

  try {
    const newMessage = await prisma.classChat.create({
      data: {
        classId,
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
classTextChatRouter.get('/messages/:classId', async (req, res) => {
  const { classId } = req.params;

  try {
    const messages = await prisma.classChat.findMany({
      where: { classId },
      orderBy: { createdAt: 'asc' },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Update a message (PUT)
classTextChatRouter.put('/message/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const updatedMessage = await prisma.classChat.update({
      where: { id },
      data: { content },
    });
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error updating message' });
  }
});

// Delete a message (DELETE)
classTextChatRouter.delete('/message/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.classChat.delete({
      where: { id },
    });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting message' });
  }
});

export default classTextChatRouter;
