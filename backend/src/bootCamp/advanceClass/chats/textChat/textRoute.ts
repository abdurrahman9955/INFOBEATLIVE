import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const bootcampAdvanceClassTextChat = Router();
const prisma = new PrismaClient();

// Create a message (POST)
bootcampAdvanceClassTextChat.post('/message/:classId/:userId', async (req, res) => {
  const {  content } = req.body;
  const { classId, userId, } = req.params;

  try {
    const newMessage = await prisma.bootcampClassChat.create({
      data: {
        classId,
        userId,
        content,
        type: 'TEXT',
        level:'ADVANCED',
      },
    });
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error creating message' });
  }
});

// Get all messages for a group (GET)
bootcampAdvanceClassTextChat.get('/messages/:classId', async (req, res) => {
  const { classId } = req.params;

  try {
    const messages = await prisma.bootcampClassChat.findMany({
      where: { classId,
        level:'ADVANCED',
       },
      orderBy: { createdAt: 'asc' },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Update a message (PUT)
bootcampAdvanceClassTextChat.put('/message/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const updatedMessage = await prisma.bootcampClassChat.update({
      where: { id,
        level:'ADVANCED',
       },
      data: { content },
    });
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error updating message' });
  }
});

// Delete a message (DELETE)
bootcampAdvanceClassTextChat.delete('/message/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.bootcampClassChat.delete({
      where: { id,
        level:'ADVANCED',
       },
    });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting message' });
  }
});

export default bootcampAdvanceClassTextChat;
