// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const bootcampIntermediateClassContact = Router();
const contactController = new ClassContactController();

bootcampIntermediateClassContact.get('/', contactController.getAll);
bootcampIntermediateClassContact.get('/:id', contactController.getById);
bootcampIntermediateClassContact.post('/', contactController.create);
bootcampIntermediateClassContact.put('/:id', contactController.update);
bootcampIntermediateClassContact.delete('/:id', contactController.delete);

export default bootcampIntermediateClassContact;
