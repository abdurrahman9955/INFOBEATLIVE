// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const bootcampBeginnerClassContact = Router();
const contactController = new ClassContactController();

bootcampBeginnerClassContact.get('/', contactController.getAll);
bootcampBeginnerClassContact.get('/:id', contactController.getById);
bootcampBeginnerClassContact.post('/', contactController.create);
bootcampBeginnerClassContact.put('/:id', contactController.update);
bootcampBeginnerClassContact.delete('/:id', contactController.delete);

export default bootcampBeginnerClassContact;
