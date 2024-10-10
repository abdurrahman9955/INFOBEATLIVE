// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const bootcampAdvanceClassContact = Router();
const contactController = new ClassContactController();

bootcampAdvanceClassContact.get('/', contactController.getAll);
bootcampAdvanceClassContact.get('/:id', contactController.getById);
bootcampAdvanceClassContact.post('/', contactController.create);
bootcampAdvanceClassContact.put('/:id', contactController.update);
bootcampAdvanceClassContact.delete('/:id', contactController.delete);

export default bootcampAdvanceClassContact;
