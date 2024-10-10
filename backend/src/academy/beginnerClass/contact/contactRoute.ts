// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const academyBeginnerClassContact = Router();
const contactController = new ClassContactController();

academyBeginnerClassContact.get('/', contactController.getAll);
academyBeginnerClassContact.get('/:id', contactController.getById);
academyBeginnerClassContact.post('/', contactController.create);
academyBeginnerClassContact.put('/:id', contactController.update);
academyBeginnerClassContact.delete('/:id', contactController.delete);

export default academyBeginnerClassContact;
