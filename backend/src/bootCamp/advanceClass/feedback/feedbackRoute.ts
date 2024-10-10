// src/routes/classFeedbackRoutes.ts
import { Router } from 'express';
import { ClassFeedbackController } from './feedback';

const bootcampAdvanceClassFeedback = Router();
const feedbackController = new ClassFeedbackController();

bootcampAdvanceClassFeedback.get('/', feedbackController.getAll);
bootcampAdvanceClassFeedback.get('/:id', feedbackController.getById);
bootcampAdvanceClassFeedback.post('/', feedbackController.create);
bootcampAdvanceClassFeedback.put('/:id', feedbackController.update);
bootcampAdvanceClassFeedback.delete('/:id', feedbackController.delete);

export default bootcampAdvanceClassFeedback;
