import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const commentVideos = express.Router();

commentVideos.get('/videos/:postId', async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.postId);

    if (isNaN(postId)) {
      return res.status(400).json({ error: 'Invalid productId' });
    }

    const comments = await prisma.comment.findMany({
      where: {
        postId,
        type:'VIDEO'
      },
      include: {
        User: {
          include: {
            profile: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(comments);
  } catch (error) {
    console.error('Error retrieving comments:', error);
    res.status(500).json({ error: 'An error occurred while retrieving comments' });
  }
});

commentVideos.post('/videos/:postId', async (req:Request, res: Response) => {
  try {
    const { content } = req.body;
    const userId = req.headers['user-id'];
    const postId = req.params.postId ;

    if ((!userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }

    if ((!postId)) {
      return res.status(400).json({ error: 'Invalid productId' });
    }

    const newComment = await prisma.comment.create({
      data: {
        userId,
        content,
        postId,
        type:'VIDEO'
      },
    });

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'An error occurred while adding the comment' });
  }
});

commentVideos.delete('/videos/:commentId', async (req:Request, res: Response) => {
  try {
    const commentId = parseInt(req.params.commentId);
    const userId = parseInt(req.headers['user-id'] as string);

    if (isNaN(commentId)) {
      return res.status(400).json({ error: 'Invalid commentId' });
    }

    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }

    // Check if the comment belongs to the user
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment || comment.userId !== userId) {
      return res.status(403).json({ error: 'You can only delete your own comments' });
    }

    await prisma.comment.delete({
      where: {
        id: commentId,
        type:'VIDEO'
      },
    });

    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'An error occurred while deleting the comment' });
  }
});

export default commentVideos;
