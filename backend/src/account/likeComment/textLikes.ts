import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const likeCommentText = express.Router();


likeCommentText.post('/text/:commentId', async (req: Request, res: Response) => {
  try {
    const userId = req.headers['user-id'];
    const commentId = req.params.commentId;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required in headers' });
    }

    const existingLike = await prisma.likeComment.findFirst({
      where: {
        userId: parseInt(userId as string),
        commentId: parseInt(commentId),
      },
    });

    if (existingLike) {
      await prisma.likeComment.delete({
        where: {
          id: existingLike.id,
        },
      });

      return res.status(200).json({ success: true, message: 'Like removed successfully' });
    }

    const newLike = await prisma.likeComment.create({
      data: {
        userId: parseInt(userId as string),
        commentId: parseInt(commentId),
        type:'TEXT',
        
      },
    });

    res.json(newLike);
  } catch (error) {
    console.error('Error liking product:', error);
    res.status(500).json({ error: 'An error occurred while liking the product' });
  }
});

likeCommentText.get('/text/:commentId', async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;

    const likeCount = await prisma.likeComment.count({
      where: {
        commentId: parseInt(commentId),
        type:'TEXT',
      },
    });

    res.json({ likeCount });
  } catch (error) {
    console.error('Error getting like count:', error);
    res.status(500).json({ error: 'An error occurred while getting like count' });
  }
});

export default likeCommentText;
