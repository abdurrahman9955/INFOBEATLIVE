// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const academyIntermediateClassContact = Router();
const contactController = new ClassContactController();

academyIntermediateClassContact.get('/', contactController.getAll);
academyIntermediateClassContact.get('/:id', contactController.getById);
academyIntermediateClassContact.post('/', contactController.create);
academyIntermediateClassContact.put('/:id', contactController.update);
academyIntermediateClassContact.delete('/:id', contactController.delete);

export default academyIntermediateClassContact;
