// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const bootcampIntermediateClassAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

bootcampIntermediateClassAnnouncement.get('/', announcementController.getAll);
bootcampIntermediateClassAnnouncement.get('/:id', announcementController.getById);
bootcampIntermediateClassAnnouncement.post('/', announcementController.create);
bootcampIntermediateClassAnnouncement.put('/:id', announcementController.update);
bootcampIntermediateClassAnnouncement.delete('/:id', announcementController.delete);
bootcampIntermediateClassAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default bootcampIntermediateClassAnnouncement;
