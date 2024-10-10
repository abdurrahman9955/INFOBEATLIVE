// src/routes/classFeedbackRoutes.ts
import { Router } from 'express';
import { ClassFeedbackController } from './feedback';

const academyBeginnerClassFeedback = Router();
const feedbackController = new ClassFeedbackController();

academyBeginnerClassFeedback.get('/', feedbackController.getAll);
academyBeginnerClassFeedback.get('/:id', feedbackController.getById);
academyBeginnerClassFeedback.post('/', feedbackController.create);
academyBeginnerClassFeedback.put('/:id', feedbackController.update);
academyBeginnerClassFeedback.delete('/:id', feedbackController.delete);

export default academyBeginnerClassFeedback;
