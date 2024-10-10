import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const likeSubCommentImages = express.Router();


likeSubCommentImages.post('/images/:subCommentId', async (req: Request, res: Response) => {
  try {
    const userId = req.headers['user-id'];
    const subCommentId = req.params.subCommentId;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required in headers' });
    }

    const existingLike = await prisma.likeSubComment.findFirst({
      where: {
        userId: parseInt(userId as string),
        subCommentId: parseInt(subCommentId),
      },
    });

    if (existingLike) {
      await prisma.likeSubComment.delete({
        where: {
          id: existingLike.id,
        },
      });

      return res.status(200).json({ success: true, message: 'Like removed successfully' });
    }

    const newLike = await prisma.likeSubComment.create({
      data: {
        userId: parseInt(userId as string),
        subCommentId: parseInt(subCommentId),
        type:'IMAGE',
      },
    });

    res.json(newLike);
  } catch (error) {
    console.error('Error liking product:', error);
    res.status(500).json({ error: 'An error occurred while liking the product' });
  }
});

likeSubCommentImages.get('/images/:subCommentId', async (req: Request, res: Response) => {
  try {
    const subCommentId = req.params.subCommentId;

    const likeCount = await prisma.likeSubComment.count({
      where: {
        subCommentId: parseInt(subCommentId),
        type:'IMAGE',
      },
    });

    res.json({ likeCount });
  } catch (error) {
    console.error('Error getting like count:', error);
    res.status(500).json({ error: 'An error occurred while getting like count' });
  }
});

export default likeSubCommentImages;
