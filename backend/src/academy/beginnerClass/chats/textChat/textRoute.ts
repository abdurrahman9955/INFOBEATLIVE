import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const academyBeginnerClassTextChat = Router();
const prisma = new PrismaClient();

// Create a message (POST)
academyBeginnerClassTextChat.post('/message/:classId/:userId', async (req, res) => {
  const {  content } = req.body;
  const { classId, userId, } = req.params;

  try {
    const newMessage = await prisma.academyClassChat.create({
      data: {
        classId,
        userId,
        content,
        type: 'TEXT',
        level:'BEGINNER',
      },
    });
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error creating message' });
  }
});

// Get all messages for a group (GET)
academyBeginnerClassTextChat.get('/messages/:classId', async (req, res) => {
  const { classId } = req.params;

  try {
    const messages = await prisma.academyClassChat.findMany({
      where: { classId,
        level:'BEGINNER',
       },
      orderBy: { createdAt: 'asc' },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Update a message (PUT)
academyBeginnerClassTextChat.put('/message/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const updatedMessage = await prisma.academyClassChat.update({
      where: { id,
        level:'BEGINNER',
       },
      data: { content },
    });
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error updating message' });
  }
});

// Delete a message (DELETE)
academyBeginnerClassTextChat.delete('/message/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.academyClassChat.delete({
      where: { id,
        level:'BEGINNER',
       },
    });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting message' });
  }
});

export default academyBeginnerClassTextChat;
