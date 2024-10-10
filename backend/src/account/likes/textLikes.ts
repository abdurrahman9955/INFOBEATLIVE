import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const likeText = express.Router();


likeText.post('/text/:postId', async (req: Request, res: Response) => {
  try {
    const userId = req.headers['user-id'];
    const postId = req.params.postId;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required in headers' });
    }

    const existingLike = await prisma.like.findFirst({
      where: {
        userId: parseInt(userId as string),
        postId: parseInt(postId),
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });

      return res.status(200).json({ success: true, message: 'Like removed successfully' });
    }

    const newLike = await prisma.like.create({
      data: {
        userId: parseInt(userId as string),
        postId: parseInt(postId),
        type:'TEXT',
      },
    });

    res.json(newLike);
  } catch (error) {
    console.error('Error liking product:', error);
    res.status(500).json({ error: 'An error occurred while liking the product' });
  }
});

likeText.get('/text/:postId', async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;

    const likeCount = await prisma.like.count({
      where: {
        postId: parseInt(postId),
        type:'TEXT',
      },
    });

    res.json({ likeCount });
  } catch (error) {
    console.error('Error getting like count:', error);
    res.status(500).json({ error: 'An error occurred while getting like count' });
  }
});

export default likeText;
