// src/routes/classFeedbackRoutes.ts
import { Router } from 'express';
import { ClassFeedbackController } from './feedback';

const bootcampIntermediateClassFeedback = Router();
const feedbackController = new ClassFeedbackController();

bootcampIntermediateClassFeedback.get('/', feedbackController.getAll);
bootcampIntermediateClassFeedback.get('/:id', feedbackController.getById);
bootcampIntermediateClassFeedback.post('/', feedbackController.create);
bootcampIntermediateClassFeedback.put('/:id', feedbackController.update);
bootcampIntermediateClassFeedback.delete('/:id', feedbackController.delete);

export default bootcampIntermediateClassFeedback;
