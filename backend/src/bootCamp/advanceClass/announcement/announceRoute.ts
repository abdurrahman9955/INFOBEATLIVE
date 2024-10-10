// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const bootcampAdvanceClassAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

bootcampAdvanceClassAnnouncement.get('/', announcementController.getAll);
bootcampAdvanceClassAnnouncement.get('/:id', announcementController.getById);
bootcampAdvanceClassAnnouncement.post('/', announcementController.create);
bootcampAdvanceClassAnnouncement.put('/:id', announcementController.update);
bootcampAdvanceClassAnnouncement.delete('/:id', announcementController.delete);
bootcampAdvanceClassAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default bootcampAdvanceClassAnnouncement;
