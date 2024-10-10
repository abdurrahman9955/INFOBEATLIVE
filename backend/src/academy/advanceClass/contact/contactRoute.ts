// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const academyAdvanceClassContact = Router();
const contactController = new ClassContactController();

academyAdvanceClassContact.get('/', contactController.getAll);
academyAdvanceClassContact.get('/:id', contactController.getById);
academyAdvanceClassContact.post('/', contactController.create);
academyAdvanceClassContact.put('/:id', contactController.update);
academyAdvanceClassContact.delete('/:id', contactController.delete);

export default academyAdvanceClassContact;
