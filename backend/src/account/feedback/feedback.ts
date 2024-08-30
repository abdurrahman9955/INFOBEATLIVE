import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const feedbackRoutes = express.Router();

interface FeedbackRequest {
  name: string;
  reason: string;
  statement: string;
  rating: number;
}

interface ResponseMessage {
  message: string;
}

const getFeedbacks = async (req: Request, res: Response< | { error: string }>): Promise<Response> => {
  try {
    const feedbacks = await prisma.feedback.findMany();
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFeedback = async (req: Request<{}, {}, FeedbackRequest>, res: Response<ResponseMessage | { error: string }>): Promise<Response> => {
  try {
    const { name, reason, statement, rating } = req.body;

     await prisma.feedback.create({
      data: {
        name,
        reason,
        statement,
        rating,
      },
    });

    return res.status(201).json({ message: 'Feedback submitted successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFeedback = async (req: Request<{ id: string }>, res: Response<ResponseMessage | { error: string }>): Promise<Response> => {
  try {
    const feedbackId = parseInt(req.params.id, 10);

    await prisma.feedback.delete({
      where: {
        id: feedbackId,
      },
    });

    return res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

feedbackRoutes.get('/feedback', getFeedbacks);
feedbackRoutes.post('/feedback', createFeedback);
feedbackRoutes.delete('/feedback/:id', deleteFeedback);

export default feedbackRoutes;
