// src/routes/classFeedbackRoutes.ts
import { Router } from 'express';
import { ClassFeedbackController } from './feedback';

const classFeedbackRouter = Router();
const feedbackController = new ClassFeedbackController();

classFeedbackRouter.get('/feedback', feedbackController.getAll);
classFeedbackRouter.get('/feedback/:id', feedbackController.getById);
classFeedbackRouter.post('/feedback', feedbackController.create);
classFeedbackRouter.put('/feedback/:id', feedbackController.update);
classFeedbackRouter.delete('/feedback/:id', feedbackController.delete);

export default classFeedbackRouter;
