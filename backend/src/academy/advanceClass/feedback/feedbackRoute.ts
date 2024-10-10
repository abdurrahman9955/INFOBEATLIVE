// src/routes/classFeedbackRoutes.ts
import { Router } from 'express';
import { ClassFeedbackController } from './feedback';

const academyAdvanceClassFeedback = Router();
const feedbackController = new ClassFeedbackController();

academyAdvanceClassFeedback.get('/', feedbackController.getAll);
academyAdvanceClassFeedback.get('/:id', feedbackController.getById);
academyAdvanceClassFeedback.post('/', feedbackController.create);
academyAdvanceClassFeedback.put('/:id', feedbackController.update);
academyAdvanceClassFeedback.delete('/:id', feedbackController.delete);

export default academyAdvanceClassFeedback;
