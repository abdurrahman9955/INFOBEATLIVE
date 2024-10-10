// src/routes/classFeedbackRoutes.ts
import { Router } from 'express';
import { ClassFeedbackController } from './feedback';

const academyIntermediateClassFeedback = Router();
const feedbackController = new ClassFeedbackController();

academyIntermediateClassFeedback.get('/', feedbackController.getAll);
academyIntermediateClassFeedback.get('/:id', feedbackController.getById);
academyIntermediateClassFeedback.post('/', feedbackController.create);
academyIntermediateClassFeedback.put('/:id', feedbackController.update);
academyIntermediateClassFeedback.delete('/:id', feedbackController.delete);

export default academyIntermediateClassFeedback;
