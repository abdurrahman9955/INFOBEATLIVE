// src/routes/classFeedbackRoutes.ts
import { Router } from 'express';
import { ClassFeedbackController } from './feedback';

const bootcampBeginnerClassFeedback = Router();
const feedbackController = new ClassFeedbackController();

bootcampBeginnerClassFeedback.get('/', feedbackController.getAll);
bootcampBeginnerClassFeedback.get('/:id', feedbackController.getById);
bootcampBeginnerClassFeedback.post('/', feedbackController.create);
bootcampBeginnerClassFeedback.put('/:id', feedbackController.update);
bootcampBeginnerClassFeedback.delete('/:id', feedbackController.delete);

export default bootcampBeginnerClassFeedback;
