// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const bootcampAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

bootcampAnnouncement.get('/', announcementController.getAll);
bootcampAnnouncement.get('/:id', announcementController.getById);
bootcampAnnouncement.post('/', announcementController.create);
bootcampAnnouncement.put('/:id', announcementController.update);
bootcampAnnouncement.delete('/:id', announcementController.delete);
bootcampAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default bootcampAnnouncement;
